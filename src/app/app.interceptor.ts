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

const token = "eac8fa6b3607efc7a2d165b1e1e77604dd4377c1"; // your github token here

@Injectable()
export class AppInterceptor {
  intercept(request: HttpRequest<string>, next: HttpHandler) {
    console.log("intercept");
    let req;
    if (request.url.includes("repositories?")) {
      console.log("if", request.url);
      req = request.clone({
        url: request.url.replace(
          "repositories?",
          `https://api.github.com/search/repositories?access_token=${token}&page=1&per_page=15&`
        )
      });
      console.log("if", req.url);
    } else {
      console.log("else", request.url);
      req = request.clone({
        url: request.url.replace(
          "users?",
          `https://api.github.com/search/users?access_token=${token}&page=1&per_page=15&`
        )
      });
      console.log("else", req.url);
    }
    return next.handle(req);
  }
}
