import { DriveStrategy } from './Strategy/DriveStrategy';

export class Vehicle {

  private driveObject: DriveStrategy;

    constructor(driveObject: DriveStrategy) {
        this.driveObject = driveObject;
    }

    drive() {
        this.driveObject.drive();
    }

}