import { NormalDriveStrategy } from "./Strategy/NormalDriveStrategy";
import { Vehicle } from "./vehicle";

export class PassengerVehicle extends Vehicle {

    constructor(){
        super(new NormalDriveStrategy());  
    } 
    
}
