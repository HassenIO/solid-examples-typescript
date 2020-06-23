class LocalStorage {
  private storage: any[];

  constructor() {
    this.storage = [];
  }

  public insert(record: any): void {
    this.storage.push(record);
  }
}

class ArticleService {
  private db = new LocalStorage();

  saveArticle(article: Article) {
    this.db.insert({
      title: article.title,
      author: article.author,
    });
  }
}
