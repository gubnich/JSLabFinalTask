import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";

import { AppService } from "../services/app-service";

@Injectable()
export class UserResolver implements Resolve<any> {
    constructor(private appService: AppService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.appService.getUser(route.paramMap.get("login"));
    }
}
