import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Subject, AsyncSubject } from 'rxjs';
import { fromEvent, Observable } from "rxjs";
import {
  tap, map, switchMap
} from "rxjs/operators";

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.scss']
})
export class SearchReposComponent implements OnInit {
  public subject = new Subject();
  private http;
  public githubers$;
  public color = "red";
  public input$: Observable<string>;
  @ViewChild("input") input: ElementRef;
  constructor(http: HttpClient){
    this.http = http;
  }
  public getGithub(text) {
    // this.http.get('https://api.github.com/search/users?q="to"').subscribe(this.githubers$);

  }
  ngOnInit() {
    this.input$ = fromEvent(this.input.nativeElement, "input");
    this.input$.pipe(
      map(() => this.input.nativeElement.value)
    ).subscribe(this.subject);
    this.githubers$ = this.subject.pipe(
      tap(x=>console.log(x)),
      switchMap(x =>this.http.get(`repositories?q=${x}`))
    )
    // this.subject.subscribe(this.githubers$);
  }
}
