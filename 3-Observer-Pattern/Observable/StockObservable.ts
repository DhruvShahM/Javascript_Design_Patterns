import {NotificationAlertObserver} from '../Observer/NotificationAlertObserver';

export interface StockObservable{

     add(observer:NotificationAlertObserver):void;

     remove(observer:NotificationAlertObserver):void;

     notifySubscriber():void;

     setStockCount(newStcokAdded:number):void;

     getStockCount():number;   
}