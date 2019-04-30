import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
    SearchUsersComponent,
    SearchReposComponent,
    UserComponent,
    RepoComponent
} from "../components/index";
import { RepoResolver } from "./repo-resolver";
import { UserResolver } from "./user-resolver";

const appRoutes: Routes = [
    { path: "users", component: SearchUsersComponent },
    { path: "repos", component: SearchReposComponent },
    {
        path: "users/:login",
        component: UserComponent,
        resolve: { userData: UserResolver }
    },
    {
        path: "repos/:id",
        component: RepoComponent,
        resolve: { repoData: RepoResolver }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
