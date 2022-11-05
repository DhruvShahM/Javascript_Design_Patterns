"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuxaryFactory = void 0;
var LuxaryV1_1 = require("./LuxaryV1");
var LuxaryV2_1 = require("./LuxaryV2");
var LuxaryFactory = /** @class */ (function () {
    function LuxaryFactory() {
    }
    LuxaryFactory.prototype.getLuxaryVehicles = function (input) {
        switch (input) {
            case 'LUXARYV1':
                console.log('Vehicle 1: Mercedes');
                return new LuxaryV1_1.LuxaryV1();
            case 'LUXARYV2':
                console.log('Vehicle 2: Car name BMW');
                return new LuxaryV2_1.LuxaryV2;
            default:
                return null;
        }
    };
    return LuxaryFactory;
}());
exports.LuxaryFactory = LuxaryFactory;
//# sourceMappingURL=LuxaryFactory.js.map