import { Component, OnInit } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { WikipediaService } from './../services';

@Component({
  moduleId: module.id,
  selector: 'app-wikipedia-search-start',
  templateUrl: 'wikipedia-search-start.component.html',
  styleUrls: ['wikipedia-search-start.component.css']
})
export class WikipediaSearchStartComponent implements OnInit {
  private searchResults: string[];
  private term: string;

  constructor(private _wikipediaService: WikipediaService) {}

  ngOnInit() {
  }

  search(term: string){
      this._wikipediaService.search(term)
          .toPromise()
          .then((res) => this.searchResults = res);
  }
}
