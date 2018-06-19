if (typeof UARTDATA2 !== 'object') {
    UARTDATA2 = {};
}

(function () {
    function hex2str(hex) {
        if (hex < 0x10) {
            hex = '0' + hex.toString(16);
        } else {
            hex = hex.toString(16);
        }
        return hex;
    }

    function getCheck(frame, isChecked) {
        if (typeof frame == 'STRING') {
            if (frame.length % 2 != 0) {
                return null;
            }
        }
        frame = frame.replace(/\s+/g, "").replace(/[\r\n]/g, "");
        var frameArray = new Array();
        for (var i = 0, j = 0; i < frame.length; i = i + 2, j++) {
            frameArray[j] = frame.substr(i, 2);
        }
        var sum = 0;
        var index = 0;
        for (index; index < frameArray.length; index++) {
            sum = sum + parseInt(frameArray[index], 16);
        }
        if (isChecked) {
            sum = sum - parseInt(frame[frame.length - 1], 16);
        }
        if (sum > 255) {
            sum = sum % 0x100;
        }
        if (sum < 0x10) {
            sum = '0' + sum.toString(16);
        } else {
            sum = sum.toString(16);
        }
        return sum;
    }

    if (typeof UARTDATA2.hex2str !== 'function') {
        UARTDATA2.hex2str = hex2str;
    }


    if (typeof UARTDATA2.decode !== 'function') {
        UARTDATA2.decode = function (raw, protocolJson) {
            try {
                if (raw.length % 2 != 0) {
                    throw new error("error 48 raw");
                }
                var cmdId = parseInt(raw.substr(8, 2), 16);
                var dataInfo = raw.substr(10, raw.length - 12);
                var protocolInfo = protocolJson.protocol;
                var index = 0;
                var result = {};
                for (var o in protocolInfo) {
                    if (parseInt(protocolInfo[o].cmdId) == cmdId) {
                        var fields = protocolInfo[o].fields;
                        for (var ox in fields) {
                            var field = fields[ox];
                            var fieldLength = parseInt(field.dataLength);
                            var name = field.name
                            var fieldData = dataInfo.substr(index, fieldLength * 2);
                            index += fieldLength*2;
                            result[name] = parseInt(fieldData, 16);
                        }
                        result["cmdId"] = cmdId;
                        return result;
                    }
                }
    
            } catch (e) {
                console.log(e)
            }
        }
    }

    if (typeof UARTDATA2.encode !== 'function') {
        UARTDATA2.encode = function (dataJson, protocolJson, cmdId,msgId) {
            try {
                dataJson = eval(dataJson);
                protocolJson = eval(protocolJson);
                var protocolInfo = protocolJson.protocol;
                var dataLength = 6;
                var frame = "";
                for (var o in protocolInfo) {
                    if (protocolInfo[o].cmdId == cmdId) {
                        var fields = protocolInfo[o].fields;
                        for (var ox in fields) {
                            var field = fields[ox];
                            var fieldLength = parseInt(field.dataLength);
                            dataLength = dataLength + fieldLength;
                            if (dataJson[field.name] == null) {
                                throw new error(field.name + ":can not find data in dataJson!");
                            }
                            if (field.frameType == 'STRING') {
                                if (dataJson[field.name].toString().length > fieldLength * 2) {
                                    console.error(field.name + ":data is too long!");
                                    throw new error(field.name + " is too long!");
                                } else {
                                    var fieldData = "";
                                    for (var charIndex = 0; charIndex < dataJson[field.name].toString().length; charIndex++) {
                                        var char2ASC = dataJson[field.name].toString().charAt(charIndex).charCodeAt().toString(16);
                                        if (char2ASC.toString().length < 2) {
                                            char2ASC = '0' + char2ASC;
                                        }
                                        if (char2ASC.toString().length > 2) {
                                            throw new error(field.name + ":data is too long!");
                                        }
                                        fieldData = fieldData + char2ASC;
                                    }
                                    for (var fieldDataLength = fieldData.toString().length; fieldDataLength < fieldLength * 2; fieldDataLength = fieldDataLength + 2) {
                                        fieldData = '00' + fieldData;
                                    }
                                    frame = frame + fieldData;
                                }
                            } else {
                                var num = parseInt(dataJson[field.name]);
                                var fieldData = num.toString(16);
                                if (fieldData.toString().length > fieldLength * 2) {
                                    console.error(field.name + ":data is too long!");
                                    throw new error(field.name + " is too long!");
                                } else {
                                    for (var fieldDataLength = fieldData.toString().length; fieldDataLength < fieldLength * 2; fieldDataLength++) {
                                        fieldData = '0' + fieldData;
                                    }
                                    frame = frame + fieldData;
                                }
                            }
                        }
                        break;
                    }
                }
                if (dataLength < 0x10) {
                    dataLength = '0' + dataLength.toString(16);
                } else {
                    dataLength = dataLength.toString(16);
                }
		var mi;
		if(parseInt(msgId)<0x10)
			mi="0"+parseInt(msgId).toString(16);
		else if(parseInt(msgId)>0xFF)
			mi=parseInt(msgId).toString(16).substr(msgId.toString().length-2,2);
		else
			mi=parseInt(msgId).toString(16);
		if(parseInt(cmdId)<0x10){
			cmdId="0"+parseInt(cmdId).toString(16);
		}else{
			cmdId=parseInt(cmdId).toString(16);
		}
                frame = '48' + dataLength + '02'+mi + cmdId + frame;
                frame = frame + getCheck(frame, false);
                return frame;
            } catch (e) {
                console.error(e.message);
            }
        }
    }
}())
