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
var _04_AccessModifier_1 = require("./04_AccessModifier");
var _05_FakerStatic_1 = require("./05_FakerStatic");
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HR.prototype.empupdate = function () {
        console.log(this.ePhoneNum); // Accessing protected variable from EmployeeSignUp
        console.log(_05_FakerStatic_1.FakerData.getFirstName());
    };
    return HR;
}(_04_AccessModifier_1.EmployeeSignUp));
var hr = new HR();
console.log(hr.eId);
console.log(hr.eName);
hr.empupdate();
