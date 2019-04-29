import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { Items } from './search-users/items.pipe';
import { EmphasizeDirective } from './emphasize.directive';
import { SearchReposComponent } from './search-repos/search-repos.component';
import { AppInterceptor } from './app.interceptor';
import { UserResolver } from './user-resolver';
import { UserComponent } from './user/user.component';
import { AppService } from './app-service';
import { RepoComponent } from './repo/repo.component';
import { RepoResolver } from './repo-resolver';

const appRoutes: Routes = [
  { path: 'users', component: SearchUsersComponent },
  { path: 'repos', component: SearchReposComponent },
  {
    path: 'users/:login',
    component: UserComponent,
    resolve: { userData: UserResolver }
  },
  {
    path: 'repos/:id',
    component: RepoComponent,
    resolve: { repoData: RepoResolver }
  }
];

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [EmphasizeDirective,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
  },
  UserResolver,
  RepoResolver,
  AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
