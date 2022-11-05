"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var VehicleFactory2_1 = require("./VehicleFactory2");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        // 
        var baseVehiclefactoryProps = new VehicleFactory2_1.VehicleFactory2();
        // luxaries vehicle list
        // luxary v1
        var vehcilesList = baseVehiclefactoryProps.getVehiclesFactory1('LUXARIES');
        var luxaryVehicleFactory = vehcilesList.getVehicles('LUXARY');
        var luxaryVehicleV1 = luxaryVehicleFactory.getLuxaryVehicles('LUXARYV1');
        luxaryVehicleV1.average();
        var luxaryVehicleV2 = vehcilesList.getVehicles('LUXARYV2');
        luxaryVehicleV2.average();
    };
    return Main;
}());
exports.Main = Main;
var main = new Main();
main.main();
//# sourceMappingURL=main.js.map