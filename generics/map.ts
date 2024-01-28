// Map type

type Properties = 'propA' | 'propB';

// type M


interface NumberDictionary {
    [index: string]: number;
   
    length: number; // ok
    // name: number;
//   Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
  }