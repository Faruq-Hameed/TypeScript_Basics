// Generic Object Types

interface Box {
    contents: unknown;
  }
   
  let x: Box = {
    contents: "hello world",
  };

  x.contents = 9