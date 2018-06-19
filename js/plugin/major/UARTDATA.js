/*
HEKR UARTDATA Protocol analysis
 
 
 智能灯光示例帧：		
 0x48	0x0B	0x02	0x00	

 0x01	0x00	0x64	0x00	0x00	0x00	0x00	0x00

 0XBA

 
 v1.0.1 by fwj@hekr.me   20150901
*/

if (typeof UARTDATA !== 'object') {
    UARTDATA = {};
}


(function () {
    'use strict';

	var frame_num=0;
// var frame_header=0x48,
	

    function get_check_code(frame,option) {//frame 帧   option 是否包含校验位
		if(typeof(frame)=="string"){//格式化为数组
			frame=frame.replace(/(\w{2})/g,'$1 ').replace(/\s*$/,'').split(' ');
		}
		var sum=0,i=0;
		for(i in frame){ 
			sum+=parseInt(frame[i],16);	
		}
		// if(i){
		// 	sum=sum-0x48;
		// }
		if(option){
			//console.log(frame[frame.length-1])
			sum=sum-parseInt(frame[frame.length-1],16);
		}
		if(sum>255){
			sum=sum%0x100
		}
		if(sum<0x10){
			sum='0'+sum.toString(16)
		}else{
			sum=sum.toString(16)
		}
		//console.log("sum(hex)"+sum)
		return sum; 
    }
	
/*
D(decimal)	十进制		dec
B(binary)	二进制		bin
O(octor)	八进制		oct
H(hex)		十六进制	hex

parseInt(str,2);
.charCodeAt(0);
*/
	function charstr2hexstr(data){
		var hexstr='';
		for(var i=0; i<data.length;i++){
			hexstr+=hex2str(data.charCodeAt(i));	
		}
		return hexstr;
	}
	
	if (typeof UARTDATA.charstr2hexstr !== 'function') {
		UARTDATA.charstr2hexstr=charstr2hexstr;
	};

	function bin2str(bin){
		if(bin<0x10){
			bin='0000'+bin.toString(2)
		}else{
			bin=bin.toString(2)
		}
		return bin
	}
	
	if (typeof UARTDATA.bin2str !== 'function') {
		UARTDATA.bin2str=bin2str;
	};

	
	function hex2str(hex){
		if(hex<0x10){
			hex='0'+hex.toString(16)
		}else{
			hex=hex.toString(16)
		}
		return hex
	}
 
    if (typeof UARTDATA.hex2str !== 'function') {
		
		UARTDATA.hex2str=hex2str;
	};
	

    if (typeof UARTDATA.encode !== 'function') {
 
        UARTDATA.encode = function (frame_type,frame_data) {
			var frame='48';	
			var frame_length=(frame_data.length/2+5);
 
			frame+=hex2str(frame_length);
			frame+=hex2str(frame_type);
			frame+=hex2str(frame_num);
			frame+=frame_data;
			frame+=get_check_code(frame,0)
			frame_num++;
			if(frame_num>0xff){
				frame_num=0;
			}
			return frame; 
        };
    }




    if (typeof UARTDATA.decode !== 'function') {
        UARTDATA.decode = function (frame) {

			var data="";
			if(frame.length<10){
				return ''
			}
			
			//校验合法性
			var frame_check_code=get_check_code(frame,1);
			
			if(frame[frame.length-1].toUpperCase()==frame_check_code[frame_check_code.length-1].toUpperCase()){
				data=frame.substring(8, frame.length-2)				
				//48 0B 02 00 03 01 35 00 00 00 00 00 46 
			}
			
			
			data=data.replace(/(\w{2})/g,'$1 ').replace(/\s*$/,'').split(' ');
			for(var i in data){ 
				data[i]=parseInt(data[i],16);	
			}

			return data
            //throw new SyntaxError('JSON.parse');
        };
    }
}());