/* import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, EMPTY, map, Observable, of } from "rxjs";
import { WorkFlowDefinition } from "./interfaces/workflow-definition";
import { PageGeneratorService } from "./shared/page-generator.service";

@Injectable()
export class AppResolver implements Resolve<WorkFlowDefinition>{

    constructor(
        private http: HttpClient,
        private pageGeneratorService: PageGeneratorService
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): WorkFlowDefinition | Observable<WorkFlowDefinition> | Promise<WorkFlowDefinition> {
        const orderId = route.params['orderId'];

        const body: {orderId: string} = {orderId: orderId};

        return this.http.post<WorkFlowDefinition>("/pocs/getFrontData", body).pipe(
            map((data: WorkFlowDefinition) => {
                return data;
            }),
            catchError(() => {
                console.error("error");
                return EMPTY;
            })
        );
    }

} */