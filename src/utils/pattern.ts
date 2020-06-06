

export function checkRegx(type, str) {
  if (type == 'number') {
    return /[1-9]\d*/.test(str)
  } else if (type == 'email') {
    return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(str)
  } else if (type == 'phone') {
    return /0?(13|14|15|18|17)[0-9]{9}/.test(str)
  } else if (type == 'tel') {
    return /[0-9-()（）]{7,18}/.test(str)
  } else if (type == 'url') {
    return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(str)
  } else if (type == 'en') {
    return /0?(13|14|15|18|17)[0-9]{9}/.test(str)
  } else {
    return true
  }
}