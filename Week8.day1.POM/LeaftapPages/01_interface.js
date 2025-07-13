"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebElement = void 0;
//Concrete class where interface is implemented
var WebElement = /** @class */ (function () {
    function WebElement() {
    }
    WebElement.prototype.typeAndEnter = function (locator) {
        console.log("Interface Implemeted ");
    };
    WebElement.prototype.handleWindow = function () {
        console.log("handle Window implemented");
        return "window";
    };
    return WebElement;
}());
exports.WebElement = WebElement;
//Creating object for Concrete class[Note: Objects cannot be created for interfaces]
var obj = new WebElement();
obj.handleWindow();
obj.typeAndEnter("test");
