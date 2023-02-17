import { EventEmitter, Injectable } from "@angular/core";
import { WorkFlowDefinition } from "../interfaces/workflow-definition";

@Injectable()
export class PageGeneratorService {
    // configuratorUpdated?: boolean;

    inventory!: String;
    result!: String;

    setInventory(data: string) {
        this.inventory = data;
    }

    setResult(data: string) {
        this.result = data;
    }
}   