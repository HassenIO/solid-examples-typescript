class Article {
  constructor(private title: string, private author: string) {}

  format() {
    return `${this.title}, by ${this.author}`;
  }
}

interface IRepository<T> {
  save(entity: T): void;
}

class ArticleRepository<T extends Article> implements IRepository<T> {
  save(article: Article): void {
    // Save the article in the database
  }
}
