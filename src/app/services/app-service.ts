import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppService {
    private userQuery = "https://api.github.com/users/";
    private repoQuery = "https://api.github.com/repositories/";

    constructor(private http: HttpClient) {}

    getUser(login: string) {
        return this.http.get(`${this.userQuery}${login}`);
    }

    getRepo(id: string) {
        return this.http.get(`${this.repoQuery}${id}`);
    }
}
