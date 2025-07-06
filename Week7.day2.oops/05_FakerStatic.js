"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakerData = void 0;
var faker_1 = require("@faker-js/faker");
var FakerData = /** @class */ (function () {
    function FakerData() {
    }
    FakerData.getFirstName = function () {
        return faker_1.faker.person.firstName();
    };
    return FakerData;
}());
exports.FakerData = FakerData;
