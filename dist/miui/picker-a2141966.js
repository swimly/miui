function easeout(A, B, rate, callback, callback1) {
    if (A == B || typeof A != 'number') {
        return;
    }
    B = B || 0;
    rate = rate || 2;
    var step = function () {
        A = A + (B - A) / rate;
        if (Math.abs(A - B) < 0.2) {
            callback(B, true);
            callback1();
            return;
        }
        callback(A, false);
        requestAnimationFrame(step);
    };
    step();
}
function parse(source, value) {
    var index = 0;
    var format = [];
    var selected = [];
    var label = value.split(',');
    var current = isCascade(source) ? source : source[index];
    while (current && Array.isArray(current) && current.length) {
        format.push(current);
        if (label && label[index] !== undefined) {
            current.some((item) => {
                if (item.label == label[index]) {
                    selected[index] = item;
                    return true;
                }
            });
        }
        if (!selected[index]) {
            selected[index] = current[0];
        }
        index++;
        current = isCascade(source) ? selected[selected.length - 1].children : source[index];
    }
    return {
        source: source,
        data: format,
        value: selected,
        valueString: value
    };
}
function isCascade(data) {
    return data[0] && isPlainObject(data[0]);
}
function isPlainObject(obj) {
    return _typeof(obj) === 'object';
}
function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

export { easeout as e, parse as p };
