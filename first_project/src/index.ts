import express, {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes'
import taskRoutes from './routes/tasks'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRoutes)

app.get('/', (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send('<h1> Hello World from TypeScript Express!</h1>');
})

app.listen(port, () =>{
    console.log(`server listening on http://localhost:${port}`);
})