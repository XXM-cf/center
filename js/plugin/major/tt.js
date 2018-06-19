var user={"uid":"","access_token":"eyJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiI2MTMyMTc5NTUxMSIsImlzb2xhdGlvbiI6IjAwMDAwMDAwMDAwIiwiZXhwIjoxNDY0MDY2ODUyLCJ0eXBlIjoiV0VCIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImEyNzM3NDA4LTAxOWMtNGU3MS1hZmI5LTA3Yjc3MTU2OWRjNiJ9.LU2tkFj5UK0wET2kz6gEZ78_TyNM0FxLwShqN3mLpcExIQq6UhQZxQ4jSyOzlprTFuG36QWORhDTo6WyESvUug"};
var Hekr = {};
var host = 'asia.app.hekr.me';
var port = 86;
var ws;
var HekrRequest = {};
var url = 'ws://' + host + ':' + port;
var appTid = "APP_"+ Math.random().toString(36).substr(2);
//var msgId = 0;
var heartBeatInterval;
var receiveCall;
var reConnectI;
Hekr.currentUser = function (callBack) {
    return callBack(user);
};
Hekr.send = function (command, devTid, callback) {
    var cmd = eval(command);
    cmd.msgId = msgId;
    cmd.params.appTid = appTid;
    HekrRequest[cmd.msgId] = callback;
    sendMessage2Top('appSend', cmd);
    ws.send(JSON.stringify(cmd));
};
Hekr.recv = function (filter, callback) {
    receiveCall = callback;
};
function sendMessage2Top(action, message) {
    message = {'action': action, 'message': message};
    window.top.postMessage(message, '*');
}

var accessToken = user.access_token;

var logInfo = {
    'msgId': msgId,
    'action': 'appLogin',
    'params': {
        'appTid': appTid,
        'token': accessToken
    }
};

function getHeartBeat() {
    msgId++;
    return {'msgId': msgId, 'action': 'heartbeat'};
};
function reConnect() {
    ws = new WebSocket(url);
    bind(ws);
};function startReConnect() {
    reConnectI = setInterval('reConnect()', 10000);
};

function heartBeat() {
    var heartInfo = getHeartBeat();
    sendMessage2Top('heartbeat', JSON.stringify(heartInfo));
    ws.send(JSON.stringify(heartInfo));
    console.log('send:' + JSON.stringify(heartInfo));
};

function startHeartBeat() {
    heartBeatInterval = setInterval('heartBeat()', 20000);
};

function bind(ws) {
    ws.onmessage = function (e) {
        var msg = eval('(' + e.data + ')');
        //console.log(msg);
        switch (msg.action) {
            case 'appSendResp':
            {
                var callback = HekrRequest[msg.msgId];
                sendMessage2Top('appSendResp', msg);
                return callback(msg);
            }
            case 'appLoginResp':
            {
                if (msg.code == 200)
                    startHeartBeat();
                else
                    return receiveCall("app登录失败！error:" + JSON.stringify(msg));
                break;
            }
            case 'heartbeatResp':
            {
                sendMessage2Top('appRecv', JSON.stringify(msg));
                break;
            }
            case 'devSend':
            {
                return receiveCall(msg);
            }
            case 'errorResp':
            {
                return receiveCall('', msg);
            }
            default:
            {
                return receiveCall(msg, '');
            }
        }
    }

    ws.onopen = function (e) {
        clearInterval(reConnectI);
        ws.send(JSON.stringify(logInfo));
    }
    ws.onclose = function () {
        clearInterval(heartBeatInterval);
        startReConnect();
    };
    ws.onerror = function () {
        ws.close();
    };
};


ws = new WebSocket(url);
bind(ws);

var event = document.createEvent('HTMLEvents');
event.initEvent('HekrSDKReady', false, false);
document.dispatchEvent(event);

