//const utils = require("../src/candyCounter");

describe("CandyQuantity", function () {
    let calc;

    beforeEach(function () {
        calc = new CandyQuantity();
    });

    describe("when calc (calculate) is used to calculate the quantity of candies available", function () {
        it("should subtract candies, in this case, Gummy Bear type", function () {
            let result = calc.subtract(510, 20);
            //expect(utils.CandyQuantity.prototype.subtract()).toBeDefined();
            expect(result).toBe(490);
        });

        it("should add candies, in this case, Runts candies type", function () {
            let result = calc.sum(4, 600);
            //expect(utils.CandyQuantity.prototype.sum()).toBeDefined();
            expect(result).toBe(604);
        });

        it("should properly show that the reduction in one candy's type quantity does not affect the other (Gummy Bear and Runts candies in this scenario)", function () {
            let result = calc.notSame(490, 604);
            //expect(utils.CandyQuantity.prototype.notSame()).toBeDefined();
            expect(result).toEqual(true);
        });

    });
});
