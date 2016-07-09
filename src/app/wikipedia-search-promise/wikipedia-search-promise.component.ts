import { Component, OnInit } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { WikipediaService } from './../shared/wikipedia.service'

@Component({
  moduleId: module.id,
  selector: 'app-wikipedia-search-promise',
  templateUrl: 'wikipedia-search-promise.component.html',
  styleUrls: ['wikipedia-search-promise.component.css']
})
export class WikipediaSearchPromiseComponent implements OnInit {
  private items: any[];

  constructor(private _wikipediaService: WikipediaService) {}

  ngOnInit() {
  }

  search(term: string){
      this._wikipediaService.search(term)
          .toPromise()
          .then((res) => this.items = res);
  }
}
