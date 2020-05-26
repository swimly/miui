export function formatTime(sec) {
  var m = Math.floor(sec / 60);
    var s = Math.ceil(sec % 60);
    if (s == 60) {
      m += 1
      s = 0
    }
    var sm = m < 10 ? `0${m}` : `${m}`
    var ss = s < 10 ? `0${s}` : `${s}`
    return `${sm}:${ss}`
}