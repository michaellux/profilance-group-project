/* eslint-disable no-unused-vars */
import ourNews from '../data/our-news.json';

export default class NewsService {
  constructor() {
    this.req = null;
    this.apiBase = 'http://newsapi.org/v2';
  }

  async getResource(url) {
    this.req = new Request(`${this.apiBase}${url}`);
    return fetch(this.req)
      .then((res) => res.json()
        .then((json) => json));
  }

  // eslint-disable-next-line class-methods-use-this
  async getNews(type) {
    let result = null;

    if (type === 'world') {
      result = await this
        .getResource('/top-headlines?country=ru&apiKey=c964acebddc6420d941a6df3bc26a73f')
        .then((json) => json.articles);
    } else if (type === 'our') {
      result = ourNews.articles;
    }
    return result;
  }
}
