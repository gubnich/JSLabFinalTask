import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  repo: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log( this.route)
    this.repo = this.route.snapshot.data.repoData;
  }

}
