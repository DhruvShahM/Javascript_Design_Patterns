"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory1 = void 0;
var LuxaryFactory_1 = require("./Vehicles/Luxary/LuxaryFactory");
var OrdinaryFactory_1 = require("./Vehicles/Ordinary/OrdinaryFactory");
var VehicleFactory1 = /** @class */ (function () {
    function VehicleFactory1() {
    }
    VehicleFactory1.prototype.getVehicles = function (input) {
        switch (input) {
            case 'LUXARY':
                return new LuxaryFactory_1.LuxaryFactory();
            case 'ORDINARY':
                return new OrdinaryFactory_1.OrdinaryFactory();
            default:
                return null;
        }
    };
    return VehicleFactory1;
}());
exports.VehicleFactory1 = VehicleFactory1;
//# sourceMappingURL=VehicleFactory1.js.map