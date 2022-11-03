import { StockObservable } from "../Observable/stockObservable";
import { NotificationAlertObserver } from "./NotificationAlertObserver";

export class EmailAlertObserverImpl implements NotificationAlertObserver {

    emailId: string;
    observable: StockObservable;

    constructor(emailId: string, observable: StockObservable) {
        this.emailId = emailId;
        this.observable = observable;
    }

    sendMail(emailId: string, msg: string) {
        console.log('mail sent to:' + emailId + '\n Msg:' + msg);
    }

    update() {
        this.sendMail(this.emailId, 'Product is in stock hurry up')
    }

}
