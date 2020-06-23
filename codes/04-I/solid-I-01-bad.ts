interface IAnimal {
  walk(): string;
  swim(): string;
}

class Duck implements IAnimal {
  public walk(): string {
    return `I can walk`;
  }

  public swim(): string {
    return `I can swim`;
  }
}

class Cow implements IAnimal {
  public walk(): string {
    return `Mew, I walk`;
  }

  public swim(): string {
    throw new Error(`Are you kidding me...`);
  }
}

class Shark implements IAnimal {
  public walk(): string {
    throw new Error(`In your dreams`);
  }

  public swim(): string {
    return `I'm waiting for you this summer...`;
  }
}
