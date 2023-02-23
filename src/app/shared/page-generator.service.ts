import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PageGeneratorService {
    configuratorUpdated = new Subject<boolean>();

    inventory?: String;
    result?: String;

    setInventory(data: string) {
        this.inventory = data;
    }

    setResult(data: string) {
        this.result = data;
    }

    getInventory() {
        return this.inventory;
    }

    getResult() {
        return this.result;
    }
}   