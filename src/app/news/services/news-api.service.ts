import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiKey = 'a5bbba72e5764cab9d08fdc0f7442a94';
  baseUrl = 'https://newsapi.org/v2/';

  constructor(private http: HttpClient) { }

  getSources(){
    return this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string){
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles(){
    return this.getArticlesBySourceId('bbc-news');
  }
}
