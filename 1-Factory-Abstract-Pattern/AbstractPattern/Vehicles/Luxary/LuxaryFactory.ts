import { VehicleFactory1 } from "../../VehicleFactory1";
import { Vehicle } from "../Vehicle";
import { LuxaryV1 } from "./LuxaryV1";
import { LuxaryV2 } from "./LuxaryV2";

export class LuxaryFactory {

    getLuxaryVehicles(input: string) {
        switch (input) {
            case 'LUXARYV1':
                console.log('Vehicle 1: Mercedes');
                return new LuxaryV1();
            case 'LUXARYV2':
                console.log('Vehicle 2: Car name BMW');
                return new LuxaryV2;
            default:
                return null as any;
        }
    }

}
