calcModel =
{
    result: "",
    operation: "",
    memory: "",
    currentDisplay: "",

    clear: function ()
    {
        this.result = "";
        this.operation = "";
        this.memory = "";
        this.currentDisplay = "";
    },

    setOp: function (opValue)
    {
        this.operation = opValue;
        this.memory = this.currentDisplay;
        this.currentDisplay = "";

    },

    calculate: function()
    {
        switch (this.operation)
        {
            case "+":
                this.operation = "=";
                this.memory = parseFloat(this.memory) + parseFloat(this.currentDisplay);
                if (this.memory.toString().length < 12) this.result = this.memory;
                else this.result = (this.memory).toPrecision(12);
                break;

            case "-":
                this.operation = "=";
                this.memory = parseFloat(this.memory) - parseFloat(this.currentDisplay);
                if (this.memory.toString().length < 12) this.result = this.memory;
                else this.result = (this.memory).toPrecision(12);
                break;
            case "*":
                this.operation = "=";
                this.memory = parseFloat(this.memory) * parseFloat(this.currentDisplay);
                if (this.memory.toString().length < 12) this.result = this.memory;
                else this.result = (this.memory).toPrecision(12);
                break;
            case "/":
                this.operation = "=";
                if (!this.currentDisplay == 0)
                {
                    this.memory = parseFloat(this.memory) / parseFloat(this.currentDisplay);
                    if (this.memory.toString().length < 12) this.result = this.memory;
                    else this.result = (this.memory).toPrecision(12);
                }
                else { this.result = "Cannot divide by 0!" };
                break;
        }
    }
};


var calcApp = angular.module('calcApp', ['calcModule']);
var calcModule = angular.module('calcModule', []);

calcModule.controller('calcController', ['$scope', function ($scope) {

    $scope.calculator = calcModel;

    $scope.onNumKeyClick = function (clickedNumber)
    {
        if (calcModel.operation == '=') { calcModel.operation = ""; calcModel.currentDisplay = ""; }
        if (clickedNumber == '.' && calcModel.currentDisplay.toString().includes('.'));
        else
            calcModel.currentDisplay += clickedNumber
    };

    $scope.onOpClick = function (opValue)
    {
        calcModel.setOp(opValue);
    };

    $scope.onCalClick = function ()
    {
        calcModel.calculate();
        calcModel.currentDisplay = calcModel.result;
    };

    $scope.onClearClick = function ()
    {
        calcModel.clear();
    };
}]);