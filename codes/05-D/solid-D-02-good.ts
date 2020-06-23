interface DatabaseStorage {
  insert(record: any): void;
}

class LocalStorage implements DatabaseStorage {
  private storage: any[];

  constructor() {
    this.storage = [];
  }

  public insert(record: any): void {
    this.storage.push(record);
  }
}

class ArticleService {
  constructor(private db: DatabaseStorage) {}

  saveArticle(article: Article) {
    this.db.insert({
      title: article.title,
      author: article.author,
    });
  }
}
