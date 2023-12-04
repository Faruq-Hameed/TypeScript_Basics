import express, {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes'
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send('<h1> Hello World from TypeScript Express!</h1>');
})

app.listen(port, () =>{
    console.log(`server listening on http://localhost:${port}`);
})