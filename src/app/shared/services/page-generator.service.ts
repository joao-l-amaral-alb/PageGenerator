import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AggregatorElement } from "src/app/interfaces/aggregator-element";
import { SingleElement } from "src/app/interfaces/single-element";

@Injectable()
export class PageGeneratorService {
    configuratorUpdated = new Subject<boolean>();

    inventory?: AggregatorElement[] | SingleElement[];
    result?: AggregatorElement[] | SingleElement[];

    setInventory(data: AggregatorElement[] | SingleElement[]) {
        this.inventory = data;
    }

    setResult(data: AggregatorElement[] | SingleElement[]) {
        this.result = data;
    }

    getInventory() {
        return this.inventory;
    }

    getResult() {
        return this.result;
    }
}   