import { Injectable } from "@angular/core";
import { AppService } from "../services/app-service";

import { Resolve } from "@angular/router";

import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class UserResolver implements Resolve<any> {
    constructor(private appService: AppService) {}

    resolve(route: ActivatedRouteSnapshot) {
        console.log("route", route);
        return this.appService.getUser(route.paramMap.get("login"));
    }
}
