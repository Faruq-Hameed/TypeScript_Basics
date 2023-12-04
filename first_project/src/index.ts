import express, {Request, Response, NextFunction } from 'express';
import {StatusCodes} from 'http-status-codes'
import taskRoutes from './routes/tasks'
import logger from 'morgan'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger('dev'))
app.use('/tasks', taskRoutes)

app.get('/', (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send('<h1> Hello World from TypeScript Express!</h1>');
})

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
  });

app.listen(port, () =>{
    console.log(`server listening on http://localhost:${port}`);
})