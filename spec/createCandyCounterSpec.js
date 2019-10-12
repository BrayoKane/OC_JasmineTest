describe("CandyQuantity", function () {
    let calc;

    beforeEach(function () {
        calc = new CandyQuantity();
    });

    describe("when calc is used to tell the quantity of candies available", function () {

        it("should be able to calculate the quantity of Gummy bear candies left", function () {
            expect(calc.subtract(510, 20)).toEqual(490);
        });

        it("should properly tell the total number of Runts candies available", function () {
            expect(calc.sum(4, 600)).toEqual(604);
        });

        it("should properly tell that the reduction in one candy's type quantity does not affect the other", function () {
            expect(calc.notSame(490, 604)).toEqual(true);
        });

    });

});
