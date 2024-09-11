import {Source} from "./source.entity";

export class Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publshedAt: string;
  source: Source;

  constructor() {
    this.title = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.publshedAt = '';
    this.source = new Source();
  }
}
