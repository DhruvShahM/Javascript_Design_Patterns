import { VehicleFactory1 } from "./VehicleFactory1";
import { LuxaryFactory } from "./Vehicles/Luxary/LuxaryFactory";
import { Vehicle } from "./Vehicles/Vehicle";

export class VehicleFactory2 extends VehicleFactory1 {
   
    getVehiclesFactory1(input:string):any {
        switch (input) {
            case 'LUXARIES':
                console.log('LUXARY VEHICLES LIST');
                return new VehicleFactory1();
                case 'ORDINARIES':
                    console.log('ORDINARY VEHICLES LIST');
                    return new VehicleFactory1();
            default:
                break;
        }
    }
}
