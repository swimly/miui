function getByteLen(val) {
  var len = 0;
  if (!val) {
    return len;
  }
  for (var i = 0; i < val.length; i++) {
    if (!val[i]) {
      continue;
    }
    // 全角
    if (val[i].match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}
export function cutStrByte(str, len) {
  //校验参数
  if (!str || !len) {
    return { "cutStr": "", "code": 0 };
  }
  var code = "1",// 默认返回code值，已截断
    strLen = str.length,// 原字符串长度
    cutStr;
  //如果字符串长度小于截取长度的一半,则返回全部字符串
  if (strLen <= len / 2) {
    cutStr = str;
    code = "0";
  } else {
    //遍历字符串
    var strByteCount = 0;
    for (var i = 0; i < strLen; i++) {
      //中文字符字节加2  否则加1
      strByteCount += getByteLen(str.charAt(i));
      //i从0开始 截断时大于len 只截断到第i个
      if (strByteCount > len) {
        cutStr = str.substring(0, i);
        break;
      } else if (strByteCount == len) {
        cutStr = str.substring(0, i + 1);
        break;
      }
    }
  }
  //cutstr为空，没有截断字符串
  if (!cutStr) {
    cutStr = str;
    code = "0";
  }
  return { "cutStr": cutStr, "code": code };
}