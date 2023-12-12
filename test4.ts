function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return input.repeat(padding) + input;
    }
    return padding + input;
  }

  console.log(padLeft('7', '9'))