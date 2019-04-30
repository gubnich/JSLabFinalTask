import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, of } from "rxjs";
import { fromEvent, Observable } from "rxjs";
import { map, switchMap, debounceTime } from "rxjs/operators";

@Component({
    selector: "app-search-users",
    templateUrl: "./search-users.component.html",
    styleUrls: ["./search-users.component.scss"]
})
export class SearchUsersComponent implements OnInit {
    public subject = new Subject();
    private http;
    public githubers$;
    // public color = "red";
    public input$: Observable<string>;
    @ViewChild("input") input: ElementRef;
    constructor(http: HttpClient) {
        this.http = http;
    }

    ngOnInit() {
        this.input$ = fromEvent(this.input.nativeElement, "input");
        this.input$
            .pipe(map(() => this.input.nativeElement.value))
            .subscribe(this.subject);
        this.githubers$ = this.subject.pipe(
            debounceTime(500),
            switchMap(inputText => {
                if (inputText) {
                    return this.http.get(`users?q=${inputText}`);
                } else {
                    return of([]);
                }
            })
        );
    }
}
