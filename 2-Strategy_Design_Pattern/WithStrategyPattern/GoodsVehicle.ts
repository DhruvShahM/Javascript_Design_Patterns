import { NormalDriveStrategy } from "./Strategy/NormalDriveStrategy";
import { Vehicle } from "./vehicle";

export class GoodsVehicle extends Vehicle {
    constructor() {
       super(new NormalDriveStrategy());     
    }
}