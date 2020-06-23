interface ICanWalkAnimal {
  walk(): string;
}

interface ICanSwimAnimal {
  swim(): string;
}

class Duck implements ICanWalkAnimal, ICanSwimAnimal {
  public walk(): string {
    return `I can walk`;
  }

  public swim(): string {
    return `I can swim`;
  }
}

class Cow implements ICanWalkAnimal {
  public walk(): string {
    return `Mew, I walk`;
  }
}

class Shark implements ICanSwimAnimal {
  public swim(): string {
    return `I'm waiting for you this summer...`;
  }
}
