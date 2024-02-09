import express,  {NextFunction, Request, Response, json} from 'express'
import cors from 'cors'
import notebookRouter from './Routes/notebook.routes'

const app = express()

app.use(json())

app.use('/notebooks', notebookRouter)



app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
})

let port:number = 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`); 
})

// console.error('This is an error message');