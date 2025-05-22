var sumArray = function (x) {
    var number = 0;
    for (var i = 0; i < x.length; i++) {
        number += x[i];
    }
    return number;
};
sumArray([1, 2, 3, 4]);
