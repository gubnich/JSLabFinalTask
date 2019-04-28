import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { retry, catchError, tap, switchMap } from "rxjs/operators";

@Injectable()
export class AppInterceptor {
    intercept(
        request: HttpRequest<string>,
        next: HttpHandler
    ) {
      console.log('intercept')
      let req;
      if (request.url.includes('repositories')) {
        console.log('if',request.url)
        req = request.clone({
          url: request.url.replace('repositories', 'https://api.github.com/search/repositories')
        });
        console.log('if',req.url)

      } else {
        console.log('else',request.url)
        req = request.clone({
          url: request.url.replace('users', 'https://api.github.com/search/users')
        });
        console.log('else',req.url)
      }
        return next.handle(req)
    }
}
