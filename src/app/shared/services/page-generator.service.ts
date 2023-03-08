import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { PageElement } from "src/app/interfaces/page-element";

@Injectable()
export class PageGeneratorService {
    configuratorUpdated = new Subject<boolean>();

    inventory?: PageElement[];
    result?: PageElement[];

    setInventory(data: PageElement[]) {
        this.inventory = data;
    }

    setResult(data: PageElement[]) {
        this.result = data;
    }

    getInventory() {
        return this.inventory;
    }

    getResult() {
        return this.result;
    }
}   