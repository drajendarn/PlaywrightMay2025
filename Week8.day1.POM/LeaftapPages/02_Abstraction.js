"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.concreteAbstarct = exports.ElementWrapper = void 0;
var ElementWrapper = /** @class */ (function () {
    function ElementWrapper() {
    }
    ElementWrapper.prototype.typeAndTab = function () {
        console.log("Type and Tab implemented in abstractclass");
    };
    return ElementWrapper;
}());
exports.ElementWrapper = ElementWrapper;
// extending abstarct class and implementing interface
var concreteAbstarct = /** @class */ (function (_super) {
    __extends(concreteAbstarct, _super);
    function concreteAbstarct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    concreteAbstarct.prototype.handleWindow = function () {
        console.log("Implementing interface in abstarct concrete class");
        return "abstarctWindow";
    };
    concreteAbstarct.prototype.takeScreenshot = function () {
        console.log("Take screenshot implemented in concrete class");
    };
    return concreteAbstarct;
}(ElementWrapper));
exports.concreteAbstarct = concreteAbstarct;
var obj1 = new concreteAbstarct();
obj1.handleWindow();
obj1.takeScreenshot();
obj1.typeAndTab();
