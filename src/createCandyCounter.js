CandyQuantity = function () {
};

CandyQuantity.prototype.subtract = function (GummyBear1, GummyBear2) {
    return GummyBear1 - GummyBear2;
};

CandyQuantity.prototype.sum = function (Runt1, Runt2) {
    return Runt1 + Runt2;
};

CandyQuantity.prototype.notSame = function (GummyBearQuantity, RuntQuantity) {
    return GummyBearQuantity !== RuntQuantity;
};
