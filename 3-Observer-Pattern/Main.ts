import { IphoneObservableImpl } from './Observable/IphoneObservableImpl';
// import {StockObservable} from './Observable/StockObservable';
import { EmailAlertObserverImpl } from './Observer/EmailAlertObserverImpl';
import { MobileAlertObserverImpl } from './Observer/MobileAlertObserverImpl';
import { NotificationAlertObserver } from './Observer/NotificationAlertObserver';

// Amazon out of stock notify system code below:
function main(){

   let iphoneStockObservable=new IphoneObservableImpl(); 
   
   let observer1:NotificationAlertObserver=new EmailAlertObserverImpl('xyz1@gmail.com',iphoneStockObservable);
   let observer2:NotificationAlertObserver=new EmailAlertObserverImpl('xyz2@gmail.com',iphoneStockObservable);
   let observer3:NotificationAlertObserver=new MobileAlertObserverImpl('xyz_username',iphoneStockObservable); 

   // add subscriber list   
   iphoneStockObservable.add(observer1);
   iphoneStockObservable.add(observer2);
   iphoneStockObservable.add(observer3);

   //here stock count set
   iphoneStockObservable.setStockCount(10);
   iphoneStockObservable.getStockCount();

    //here still gives the output ten 
    // output: 10    
   iphoneStockObservable.setStockCount(0);
   iphoneStockObservable.getStockCount();

   //here stocks gives the output 110
   //  output:110   
   iphoneStockObservable.setStockCount(100);
   iphoneStockObservable.getStockCount(); 
   
   //here observer2 remove after the subscription then notify 
   iphoneStockObservable.remove(observer2);
   iphoneStockObservable.notifySubscriber(); 
}


main();