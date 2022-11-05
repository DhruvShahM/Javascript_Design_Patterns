"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdinaryFactory = void 0;
var OrdinaryV1_1 = require("./OrdinaryV1");
var OrdinaryV2_1 = require("./OrdinaryV2");
var OrdinaryFactory = /** @class */ (function () {
    function OrdinaryFactory() {
    }
    OrdinaryFactory.prototype.getOrdinaryVehicles = function (input) {
        switch (input) {
            case 'ORDINARYV1':
                console.log('Vehicle 1: SWIFT');
                return new OrdinaryV1_1.OrdinaryV1();
            case 'ORDINARYV2':
                console.log('Vehicle 2: HYNDAI');
                return new OrdinaryV2_1.OrdinaryV2();
            default:
                return null;
        }
    };
    return OrdinaryFactory;
}());
exports.OrdinaryFactory = OrdinaryFactory;
//# sourceMappingURL=OrdinaryFactory.js.map