export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char);

  if (index > -1) {
    return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
  }

  return value;
}

export function formatNumber(value: string, allowDot?: boolean) {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  value = trimExtraChar(value, '-', /-/g);

  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;

  return value.replace(regExp, '');
}

export function findCloseNum(arr, num) {
  var index = 0; // 保存最接近数值在数组中的索引
  var d_value = Number.MAX_VALUE; // 保存差值绝对值，默认为最大数值
  for (var i = 0; i < arr.length; i++) {
    var new_d_value = Math.abs(arr[i] - num); // 新差值
    if (new_d_value <= d_value) { // 如果新差值绝对值小于等于旧差值绝对值，保存新差值绝对值和索引
      if (new_d_value === d_value && arr[i] < arr[index]) { // 如果数组中两个数值跟目标数值差值一样，取大
        continue;
      }
      index = i;
      d_value = new_d_value;
    }
  }
  return index
}