var LambdaTM = {};
Util = {};
Util.cons = function(a, b) {
    var p = new LambdaTM.Cell();
    p.car = a;
    p.cdr = b;
    return p;
}
LambdaTM.Symbol = function(s) {
    this.name = s;
}
LambdaTM.getSymbol = function(s) {
    if ("#t" == s) {
        return true;
    } else if ("#f" == s) {
        return false;
    } else {
        this.name = s;
        return new LambdaTM.Symbol(s);
    }
}
LambdaTM.EOFException = function() {}
LambdaTM.SyntaxEx = function(str) {
    this.errorMessage = str;
}
LambdaTM.Cell = function() {
    this.car = null;
    this.cdr = null;
}
LambdaTM.StringReader = function(str) {
    var i = 0;
    var s = str;
    return function() {
        if (s.length == i) {
            return 65535;
        } else {
            return s.charAt(i++);
        }
    }
}
LambdaTM.LambdaTMReader = function(r) {
    //public LambdaTMReader(java.io.Reader isr) {
    var r = r;
    //}
    var last_char = false;

    function is_space(c) {
        return c == ' ' || c == '\n' || c == '\t' || c == '\r';
    }

    function peek_char() {
        if (last_char === false) {
            last_char = r();
            if (last_char == 65535) {
                throw new LambdaTM.EOFException();
            }
        }
        return last_char;
    }

    function get_char() {
        var c = peek_char();
        if (c == 65535) {
            throw new LambdaTM.EOFException();
        }
        last_char = false;
        return c;
    }

    function eat_space() {
        var c = peek_char();
        while (is_space(c)) {
            get_char();
            c = peek_char();
        }
    }

    function read_string() {
        var sb = '';

        try {
            var c = get_char();
            while (c != '"') {
                if (c == '\\') {
                    c = get_char();
                    if (c == 't') {
                        sb += '\t';
                    } else if (c == 'n') {
                        sb += '\n';
                    } else if (c == 'r') {
                        sb += '\r';
                    } else if (c == 'b') {
                        sb += '\b';
                    } else if (c == 'f') {
                        sb += '\f';
                    }
                }
                sb += c;
                c = get_char();
            }
        } catch (ee) {
            if (ee instanceof LambdaTM.EOFException) {
                throw new LambdaTM.SyntaxEx("Unknown read syntax reading string: ");
            }
        }
        return sb;
    }

    function is_number(c) {
        return (c >= '0' && c <= '9') ? true : false;
    }

    function is_symbol(c) { // not ( ) ' " `
        var n = c.charCodeAt(0);
        //return (c == '!' || (c > 34 && c < 39) || (c > 41 && c < 59) || (c > 59 && c < 96) || (c > 96 && c < 127)) ? true : false;
        return (c == '!' || (n > 34 && n < 39) || (n > 41 && n < 59) || (n > 59 && n < 96) || (n > 96 && n < 127) || (c >= 128 && c != 65535)) ? true : false;
    }

    function read_till_delimiter() {
        var c;
        var sb = '';
        while (true) {
            try {
                c = peek_char();
                if (is_space(c) || c == '(' || c == ')' || c == '"' || c == ';') {
                    return sb;
                } else {
                    sb += get_char();
                }
            } catch (eof) {
                if (eof instanceof LambdaTM.EOFException) {
                    return sb;
                }
            }
        }
    }

    function hashtag(token) {
        if ("#f" == token) {
            return false;
        } else if ("#t" == token) {
            return true;
        } else {
            return LambdaTM.getSymbol(token);
        }
    }

    function read_list() {
        var pair = new LambdaTM.Cell();
        var p = pair;
        try {
            while (true) {
                var exp = read();
                p.car = exp;
                eat_space();
                var c = peek_char();
                if (c == ')') {
                    get_char();
                    break;
                } else if (c == '.') {
                    get_char();
                    p.cdr = read();
                    eat_space();
                    c = peek_char();
                    if (c == ')') {
                        get_char();
                    } else {
                        throw new LambdaTM.SyntaxEx("Unknown read syntax reading improper list: ");
                    }
                    break;
                } else {
                    var p2 = new LambdaTM.Cell();
                    p.cdr = p2;
                    p = p2;
                }
            }
        } catch (ee) {
            if (ee instanceof LambdaTM.EOFException) {
                throw new LambdaTM.SyntaxEx("Unknown read syntax reading improper list: ");
            }
        }
        return pair;
    }

    function read() {
        var c = get_char();
        while (is_space(c) || c == ';') {
            while (is_space(c)) {
                c = get_char();
            }
            if (c == ';') {
                while (c != '\n') {
                    c = get_char();
                }
            }
        }
        if (c == 65535) {
            return null;
        }
        if (c == '\'' || c == '`') {
            var exp = read();
            var p1 = new LambdaTM.Cell();
            var p2 = new LambdaTM.Cell();
            if (c == '\'') {
                p1.car = LambdaTM.getSymbol("quote");
            } else {
                p1.car = LambdaTM.getSymbol("quasiquote");
            }
            p1.cdr = p2;
            p2.car = exp;
            p2.cdr = null;
            return p1;
        } else if (c == ',') {
            var p1 = new LambdaTM.Cell();
            var p2 = new LambdaTM.Cell();
            p1.car = LambdaTM.getSymbol("unquote");
            c = peek_char();
            if (c == '@') {
                get_char();
                p1.car = LambdaTM.getSymbol("unquote-splicing");
            }
            var exp = read();
            p1.cdr = p2;
            p2.car = exp;
            p2.cdr = null;
            return p1;
        } else if (c == '#') {
            try {
                peek_char();
            } catch (e) {
                if (e instanceof LambdaTM.EOFException) {} else
                    throw e;
            }
            var str = read_till_delimiter();
            return hashtag(c + str);
        } else if (c == '"') {
            return read_string();
        } else if (is_number(c)) {
            var rest = read_till_delimiter();
            var str = c + rest;
            var r = parseFloat(str);
            if (r == NaN) {
                throw new LambdaTM.SyntaxEx("");
            } else
                return r;

        } else if (c == '+' || c == '-') {
            var rest = read_till_delimiter();
            if ("" == rest) {
                return LambdaTM.getSymbol("" + c);
            } else {
                var r = parseFloat(c + rest);
                if (r == NaN) {
                    throw new LambdaTM.SyntaxEx("");
                } else {
                    return r;
                }
            }
        } else if (is_symbol(c)) {
            var rest = read_till_delimiter();
            return LambdaTM.getSymbol(c + rest);
        } else if (c == '(') {
            eat_space();
            c = peek_char();
            if (c == ')') {
                get_char();
                return null;
            } else {
                return read_list();
            }
        }
        throw new LambdaTM.SyntaxEx("Unknown read syntax reading improper list char:" + c);
    }
    return read;
}
LambdaTM.evalEx = function(str) {
    this.errorMessage = str;
}
LambdaTM.calljsmacro = function(lisp) {
    if (lisp instanceof LambdaTM.Cell) {
        if (lisp.car instanceof LambdaTM.Symbol) {
            var f = eval(lisp.car.name);
            var args = [];
            var cell = lisp.cdr;
            while (cell != null && cell instanceof LambdaTM.Cell) {
                args.push(cell.car);
                cell = cell.cdr;
            }
            return f.apply(window, args);
        }
        throw new LambdaTM.evalEx("eval error, not symbol function");
    }
    throw new LambdaTM.evalEx("eval error,not code");
}
LambdaTM.sexp2list = function(lisp) {
    var args = [];
    var cell = lisp;
    while (cell != null && cell instanceof LambdaTM.Cell) {
        args.push(cell.car);
        cell = cell.cdr;
    }
    return args;
}
LambdaTM.Error = function(errorsym, msg) {
    this.fatal = true;
    this.car = errorsym;
    this.cdr = msg;
    return this;
}
LambdaTM.ERROR = {}
LambdaTM.ERROR.EnvironmentSymbol_EX = new LambdaTM.getSymbol("EnvironmentSymbol_EX");
LambdaTM.ERROR.Syntex_Ex = new LambdaTM.getSymbol("Syntex_Ex");
LambdaTM.Env = function(f) {
    this.car = f || null;
    this.cdr = null;
    this.make = function(sym, obj) {
        return Util.cons(Util.cons(sym, obj), null);
    }
    this.find = function(sym) {
        if (typeof(sym) === "string") {
            return this.find(LambdaTM.getSymbol(sym));
        } else if (sym instanceof LambdaTM.Symbol) {
            var cell = null;
            cell = this.cdr;
            while (cell != null) {
                var o = cell.car;
                if (sym.name === o.car.name) {
                    return o.cdr;
                }
                cell = cell.cdr;
            }
            if (this.car != null) {
                return this.car.find(sym);
            } else {
                return new LambdaTM.Error(LambdaTM.ERROR.EnvironmentSymbol_EX, "find not symbol:" + sym);
            }
        }
    }
    this.set = function(sym, obj) {
        if (sym instanceof LambdaTM.Symbol) {
            var cell = this.cdr;
            while (cell != null) {
                var o = cell.car;
                if (sym === o.car) {
                    o.cdr = obj;
                    return obj;
                }
                cell = cell.cdr;
            }
            if (this.car != null) {
                return this.car.set(sym, obj);
            } else {
                return new LambdaTM.Error(LambdaTM.ERROR.EnvironmentSymbol_EX, "symbol:" + sym + " value:" + obj);
            }
        }
    }
    this.setLocal = function(sym, obj) {
        if (typeof(sym) === "string") {
            return this.setLocal(LambdaTM.getSymbol(sym), obj);
        } else if (sym instanceof LambdaTM.Symbol) {
            var cell = this.cdr;
            if (cell == null) {
                this.cdr = this.make(sym, obj);
            }
            while (cell != null) {
                var o = cell.car;
                if (sym === o.car) {
                    o.cdr = obj;
                    return obj;
                }
                if (cell.cdr == null) {
                    cell.cdr = this.make(sym, obj);
                    return obj;
                } else {
                    cell = cell.cdr;
                }
            }
        }
        return obj;
    }
    return this;
}
LambdaTM.TailRecursive = function() {
    this.closureenv = null;
    this.closurecode = null;
}
LambdaTM.LispEval = {};
LambdaTM.LispEval.lisp_eval = function(env, code) {
    if (code != null) {
        if (code instanceof LambdaTM.Symbol) {
            return env.find(code);
        } else if (code instanceof LambdaTM.Cell) {
            return LambdaTM.LispEval.eval_list(env, code);
        }
    }
    return code;
}
LambdaTM.LispEval.eval_func_args = function(env, code) {
    if (code == null) {
        return null;
    }
    var root = new LambdaTM.Cell();
    var current = root;
    for (var c = code;;) {
        var r = LambdaTM.LispEval.lisp_eval(env, c.car);
        if (r instanceof LambdaTM.Error) {
            return r;
        }
        current.car = r;
        c = c.cdr;
        if (c != null) {
            current.cdr = new LambdaTM.Cell();
            current = current.cdr;
        } else {
            break;
        }
    }
    return root;
}
LambdaTM.LispEval.defer_eval = function(env, code) {
    if (!(code instanceof LambdaTM.Cell)) {
        return lisp_eval(env, code);
    }
    var tr = new LambdaTM.TailRecursive();
    tr.closureenv = env;
    tr.closurecode = code;
    return tr;
}
LambdaTM.LispEval.eval_call = function(env, code) {
    if (code == null) {
        return null;
    }
    var func = LambdaTM.LispEval.lisp_eval(env, code.car);
    if (func == null) {
        return code;
    }
    var result = null;
    if (func instanceof LambdaTM.LambdaFunction) {
        var args = LambdaTM.LispEval.eval_func_args(env, code.cdr);
        if (args instanceof LambdaTM.Error) {
            return args;
        }
        result = func.apply(env, args);
        return result;
    } else if (func instanceof LambdaTM.mprocedure) {
        var args = code.cdr;
        result = func.apply(env, args);
        var r = LambdaTM.LispEval.lisp_eval(env, result);
        return r;
    } else if (func instanceof LambdaTM.LambdaMacro) {
        var args = code.cdr;
        result = func.apply(env, args);
        return result;
    } else if (func instanceof LambdaTM.Error) {
        return func;
    } else {
        return new LambdaTM.Error("EnvironmentSymbol_EX", "Invalid function call " + func);
    }
}
LambdaTM.LispEval.run_function_body = function(env, code, tailrec) {
    var result = null;
    for (; code != null; code = code.cdr) {
        if (!(code instanceof LambdaTM.Cell)) {
            return new LambdaTM.Error(LambdaTM.ERROR.Syntex_Ex, " not list ");
        }
        if (code.cdr == null && tailrec) {
            return LambdaTM.LispEval.defer_eval(env, code.car);
        } else {
            result = LambdaTM.LispEval.lisp_eval(env, code.car);
            if (result instanceof LambdaTM.Error) {
                return result;
            }
        }
    }
    return result;
}
LambdaTM.LispEval.eval_list = function(env, code) {
    var result = LambdaTM.LispEval.eval_call(env, code);
    while (result != null && result instanceof LambdaTM.TailRecursive) {
        env = result.closureenv;
        code = result.closurecode;
        result = LambdaTM.LispEval.eval_call(env, code);
    }
    return result;
}
LambdaTM.LambdaMacro = function() {
    function apply(env, args) {}

    function toString() {
        return " #macro:";
    }
}
LambdaTM.LambdaFunction = function() {
    function toString() {
        return " #lambda:";
    }
}
LambdaTM.LambdaFunction.prototype = new LambdaTM.LambdaMacro();
LambdaTM.mprocedure = function() {
    this.closurecode;
    this.closureenv;

    function apply(env, args) {
        var newenv = new Env();
        newenv.car = closureenv;
        var as = closurecode.car;
        var o = args;
        while (as != null) {
            if (as instanceof LambdaTM.Symbol) {
                newenv.setLocal(as, o);
                break;
            }
            var s = as.car;
            if (s instanceof LambdaTM.Symbol) {
                newenv.setLocal(s, o.car);
            } else {
                return new LambdaTM.Error(LambdaTM.ERROR.Args_EX, "lambda proc args error");
            }

            as = as.cdr;
            if (o != null && o instanceof LambdaTM.Cell) {
                o = o.cdr;
            } else {
                return new LambdaTM.Error(LambdaTM.ERROR.Args_EX, "lambda proc args length error");
            }
        }
        return LambdaTM.LispEval.run_function_body(newenv, closurecode.cdr, false);
    }
}
LambdaTM.mprocedure.prototype = new LambdaTM.LambdaFunction();
Util.proxycall = function(fun, env, args) {
    return fun.apply(window, LambdaTM.sexp2list(Util.cons(env, args)));
}
LambdaTM.globalenv = new LambdaTM.Env();
onmessage = function() {
    this.apply = function(env, args) {
        //var tids=['ESP_2M_1AFE349C3D01','ESP_2M_1AFE349C3D02','ESP_2M_1AFE349C3D03','ESP_2M_1AFE349C3D04','ESP_2M_1AFE349C3D05','ESP_2M_1AFE349C3D06'];
       if (tid.indexOf(args.cdr.car)>-1) {
       // if (args.cdr.car === window.tid) {
            var tag = args.cdr.cdr.car;
            var f = eval(tag);
            var as = LambdaTM.sexp2list(args.cdr.cdr.cdr);

            as.push("tid");
            as.push(args.cdr.car );
            return f.apply(window, as);
        }
    }
    return this;
}
onmessage.prototype = new LambdaTM.LambdaFunction();
LambdaTM.globalenv.setLocal("onmessage", new onmessage());
LambdaTM.list2json = function(list) {
    var json = {};
    for (var i = 0; i < list.length;) {
        var k = list[i++];
        var v = list[i++];
        json[k] = v;
    }
    return json;
}



function state() {
    var list = arguments;
    changestate(LambdaTM.list2json(list));
}

/**

var r = new LambdaTM.LambdaTMReader(new LambdaTM.StringReader('(add 1 2 3)')) ;
var lisp = r();
function add(x,y,z){
  return x+y+z;
}
console.log(lisp);
LambdaTM.calljsmacro(lisp);

var r = new LambdaTM.LambdaTMReader(new LambdaTM.StringReader('(print "asdasdsadsad" "sssssssss" )')) ;

var lisp = r();
function print(str,s){
	console.log(str + s );
}
LambdaTM.calljsmacro(lisp);

var r = new LambdaTM.LambdaTMReader(new LambdaTM.StringReader('( "asdasdsadsad" "sssssssss" 1 2 3  )')) ;
var lisp = r();
LambdaTM.sexp2list(lisp);

*/

/**

var r = new LambdaTM.LambdaTMReader(new LambdaTM.StringReader('(state "pid" "1" "mid" "1" "cid" "1" "provider" "LSA" "category" "yuba" "model" "" "phone" "400-826-1986" )')) ;
var lisp = r();
var env = new LambdaTM.Env();

add = function (){
  this.apply = function ( env, args){
    //return this.fun.apply(window , LambdaTM.sexp2list( args ) );
    return Util.proxycall(this.fun,env,args);
  }
  this.fun = function(env , b , c , d , e){
    return  b + c + d + e;
  }
  return this;
}
add.prototype = new LambdaTM.LambdaFunction();

aaa = function (){
  this.apply = function ( env, args){
    return 100;
  }
  return this;
}
aaa.prototype = new LambdaTM.LambdaFunction();

env.setLocal("add",new add());
env.setLocal("aaa",new aaa());

LambdaTM.LispEval.lisp_eval( env , lisp );

//LambdaTM.LispEval.lisp_eval( LambdaTM.globalenv , lisp );


**/



var SEXP = {};

SEXP.parse = function(sExprString) {
    var sexp = new LambdaTM.LambdaTMReader(new LambdaTM.StringReader(sExprString))();
    return LambdaTM.sexp2list(sexp);
}

SEXP.exec = function(sExprString) {
    var sexp = new LambdaTM.LambdaTMReader(new LambdaTM.StringReader(sExprString))();
    return LambdaTM.LispEval.lisp_eval( LambdaTM.globalenv , sexp );
}
/*
Array.prototype.toObj = function() {
    var rv = {};
    if (this.length % 2 != 0) return;
    for (var i = 0; i < this.length; i += 2)
        rv[this[i]] = this[i + 1];
    return rv;
};*/
