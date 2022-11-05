import { LuxaryFactory } from "./Vehicles/Luxary/LuxaryFactory";
import { OrdinaryFactory } from "./Vehicles/Ordinary/OrdinaryFactory";
import { Vehicle } from "./Vehicles/Vehicle";

export class VehicleFactory1 {

    getVehicles(input: string) {
        switch (input) {
            case 'LUXARY':
                return new LuxaryFactory();
            case 'ORDINARY':
                return new OrdinaryFactory();
            default:
                return null as any;
        }
    }
}
