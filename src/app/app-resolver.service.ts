import { HttpClient } from "@angular/common/http";
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
        const orderType = route.params['orderType'];
        const version = +route.params['version']; 

        const body: {orderType: string, version: number} = {orderType: orderType, version: version};

        /* this.http.post<WorkFlowDefinition>("/pocs/getFrontData", body).subscribe(
            (data: WorkFlowDefinition) => {
                console.log(data);
                console.log(data.dataModel);
                return data;
            }
        ) */

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

}