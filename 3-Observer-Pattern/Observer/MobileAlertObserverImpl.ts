import { StockObservable } from "../Observable/stockObservable";
import { NotificationAlertObserver } from "./NotificationAlertObserver";

export class MobileAlertObserverImpl implements NotificationAlertObserver {

    username: string;
    observable: StockObservable;

    constructor(emailId: string, observable: StockObservable) {
        this.username = emailId;
        this.observable = observable;
    }

    sendMail(emailId: string, msg: string) {
        console.log('msg sent to:' + emailId + '\n Msg:' + msg);
    }

    update() {
        this.sendMail(this.username, 'Product is in stock hurry up')

    }

}
