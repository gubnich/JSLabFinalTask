import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import {
    SearchUsersComponent,
    SearchReposComponent,
    UserComponent,
    RepoComponent
} from "./components/index";
import { AppRoutingModule, UserResolver, RepoResolver } from "./routing/index";
import { Items } from "./pipes/items.pipe";
import { EmphasizeDirective } from "./directives/emphasize.directive";
import { AppInterceptor } from "./app.interceptor";
import { AppService } from "./services/app-service";

@NgModule({
    declarations: [
        AppComponent,
        SearchUsersComponent,
        Items,
        EmphasizeDirective,
        SearchReposComponent,
        UserComponent,
        RepoComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [
        EmphasizeDirective,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true
        },
        UserResolver,
        RepoResolver,
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
