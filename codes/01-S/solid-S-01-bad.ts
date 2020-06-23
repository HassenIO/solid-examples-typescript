class Article {
  constructor(private title: string, private author: string) {}

  format() {
    return `${this.title}, by ${this.author}`;
  }

  save(): void {
    // Do save Article in the database.
  }
}
