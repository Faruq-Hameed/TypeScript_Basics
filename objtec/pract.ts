function subtract(x: number = 10, y: number = 5): number {
    return x - y;
  }
  console.log(subtract(7));

  class Collection<T> {
    items: T[];
    find(keyword: string) : T {
      return this.items.filter(el => el === keyword)[0];
    }
  }

//   class CollectionA<T> {
//     static type: T;
//   }