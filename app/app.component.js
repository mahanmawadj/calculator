"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<div class="calculator container"><div class="row"><input type="text" class="input" readonly size="8" id="a"><input type="text" class="input operand" readonly size="1" id="b"></div><div class="row"><button class="key clear action" type="button">Clear</button></div><div class="row"><button class="key action" type="button">+</button><button class="key action" type="button">-</button><button class="key action" type="button" >*</button><button class="key action" type="button">/</button></div><div class="row"><button class="key" type="button" >0</button><button class="key" type="button" >1</button><button class="key" type="button">2</button><button class="key" type="button" >3</button></div><div class="row"><button class="key" type="button">4</button><button class="key" type="button">5</button><button class="key" type="button" >6</button><button class="key" type="button" >7</button></div><div class="row"><button class="key" type="button" >8</button><button class="key" type="button" >9</button><button class="key" type="button" >.</button><button class="key action" type="button">=</button></div></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map