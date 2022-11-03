import { NotificationAlertObserver } from "../Observer/NotificationAlertObserver";
import { StockObservable } from "./stockObservable";

export class IphoneObservableImpl implements StockObservable {

        observerList:NotificationAlertObserver[]=[];
        stockCount:number=0;


        add(observer: NotificationAlertObserver): void {
            this.observerList.push(observer);
        }

        remove(observer: NotificationAlertObserver): void {
            this.observerList=this.observerList.filter((ele)=>ele!==observer);
        }

        notifySubscriber(): void {
            this.observerList.map((ele)=>{
                ele.update();
            });
        }

        setStockCount(newStockAdded: number): void {
            if(this.stockCount===0)
                this.notifySubscriber();
              
            this.stockCount=this.stockCount+newStockAdded;    
        }

        getStockCount(): number {
            console.log(`current stock are`+this.stockCount);   
            return this.stockCount;
        }


}
