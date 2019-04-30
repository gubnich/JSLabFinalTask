import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";

import { AppService } from "../services/app-service";

@Injectable()
export class RepoResolver implements Resolve<any> {
    constructor(private appService: AppService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.appService.getRepo(route.paramMap.get("id"));
    }
}
