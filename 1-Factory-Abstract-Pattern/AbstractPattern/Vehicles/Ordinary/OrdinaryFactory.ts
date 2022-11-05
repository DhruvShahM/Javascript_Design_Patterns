import { OrdinaryV1 } from "./OrdinaryV1";
import { OrdinaryV2 } from "./OrdinaryV2";

export class OrdinaryFactory {

    getOrdinaryVehicles(input: string) {
        switch (input) {
            case 'ORDINARYV1':
                console.log('Vehicle 1: SWIFT');
                return new OrdinaryV1();
            case 'ORDINARYV2':
                console.log('Vehicle 2: HYNDAI');
                return new OrdinaryV2();
            default:
                return null as any;
        }
    }

}
