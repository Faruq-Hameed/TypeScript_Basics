function example(x: string) {
    // do something 
    console.log(x, 'typeof x is: ', typeof x);
}

let y: number | undefined;

example(y as any)

y = 8
example(y as any)

function square(x: number) {
	return x * x;
}

const x : number | undefined = square(x) ? x : undefined;

const answer = square(x)!;

x.toString()