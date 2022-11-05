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
exports.VehicleFactory2 = void 0;
var VehicleFactory1_1 = require("./VehicleFactory1");
var VehicleFactory2 = /** @class */ (function (_super) {
    __extends(VehicleFactory2, _super);
    function VehicleFactory2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleFactory2.prototype.getVehiclesFactory1 = function (input) {
        switch (input) {
            case 'LUXARIES':
                console.log('LUXARY VEHICLES LIST');
                return new VehicleFactory1_1.VehicleFactory1();
            case 'ORDINARIES':
                console.log('ORDINARY VEHICLES LIST');
                return new VehicleFactory1_1.VehicleFactory1();
            default:
                break;
        }
    };
    return VehicleFactory2;
}(VehicleFactory1_1.VehicleFactory1));
exports.VehicleFactory2 = VehicleFactory2;
//# sourceMappingURL=VehicleFactory2.js.map