
function makeSizer(size) {
    return function () {
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

function size(size) {
    document.body.style.fontSize = size + 'px';
}