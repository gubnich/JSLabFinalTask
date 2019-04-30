import { Injectable } from "@angular/core";
import { HttpHandler, HttpRequest } from "@angular/common/http";

const token = "75595c462ec1a2ae2b8da1cdbbeab29c86a6d0a4"; // your github token here

@Injectable()
export class AppInterceptor {
    intercept(request: HttpRequest<string>, next: HttpHandler) {
        let req;
        if (request.url.includes("repositories?")) {
            req = request.clone({
                url: request.url.replace(
                    "repositories?",
                    `https://api.github.com/search/repositories?access_token=${token}&page=1&per_page=15&`
                )
            });
        } else {
            req = request.clone({
                url: request.url.replace(
                    "users?",
                    `https://api.github.com/search/users?access_token=${token}&page=1&per_page=15&`
                )
            });
        }
        return next.handle(req);
    }
}
