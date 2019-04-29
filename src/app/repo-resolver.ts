import { Injectable } from '@angular/core';
import { AppService } from './app-service';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class RepoResolver implements Resolve<any> {
  constructor(private appService: AppService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log('route',route);
    return this.appService.getRepo(route.paramMap.get('id'));
  }
}
