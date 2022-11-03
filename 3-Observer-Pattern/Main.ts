import { IphoneObservableImpl } from './Observable/IphoneObservableImpl';
// import {StockObservable} from './Observable/StockObservable';
import { EmailAlertObserverImpl } from './Observer/EmailAlertObserverImpl';
import { MobileAlertObserverImpl } from './Observer/MobileAlertObserverImpl';
import { NotificationAlertObserver } from './Observer/NotificationAlertObserver';

function Main(){

   let iphoneStockObservable=new IphoneObservableImpl(); 
   
   let observer1:NotificationAlertObserver=new EmailAlertObserverImpl('xyz1@gmail.com',iphoneStockObservable);
   let observer2:NotificationAlertObserver=new EmailAlertObserverImpl('xyz2@gmail.com',iphoneStockObservable);
   let observer3:NotificationAlertObserver=new MobileAlertObserverImpl('xyz_username',iphoneStockObservable); 

   iphoneStockObservable.add(observer1);
   iphoneStockObservable.add(observer2);
   iphoneStockObservable.add(observer3);

   iphoneStockObservable.setStockCount(10);
   iphoneStockObservable.setStockCount(0);
   iphoneStockObservable.setStockCount(100);
}


Main();