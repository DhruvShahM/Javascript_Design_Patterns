import { VehicleFactory2 } from "./VehicleFactory2";

export class Main {
 
    main(): void {
        // 
        let baseVehiclefactoryProps: VehicleFactory2 = new VehicleFactory2();

        // luxaries vehicle factories list
        let luxaryVehicleList=baseVehiclefactoryProps.getVehiclesFactory1('LUXARIES');     
        let luxaryVehicleFactory=luxaryVehicleList.getVehicles('LUXARY');
        // luxary v1
        let luxaryVehicleV1=luxaryVehicleFactory.getLuxaryVehicles('LUXARYV1');
        luxaryVehicleV1.average();

        // luxary v2
        let luxaryVehicleV2=luxaryVehicleFactory.getLuxaryVehicles('LUXARYV2');
        luxaryVehicleV2.average();

        console.log('\n');
        
        let ordinaryVehicleList=baseVehiclefactoryProps.getVehiclesFactory1('ORDINARIES');     
        let ordinaryVehicleFactory=ordinaryVehicleList.getVehicles('ORDINARY');

        // ordinary v1
        let ordinaryV1=ordinaryVehicleFactory.getOrdinaryVehicles('ORDINARYV1');
        ordinaryV1.average();

        // ordinary v2
        let ordinaryV2=ordinaryVehicleFactory.getOrdinaryVehicles('ORDINARYV2');
        ordinaryV2.average();

        console.log('\n');


    }

}

let main = new Main();
main.main();
