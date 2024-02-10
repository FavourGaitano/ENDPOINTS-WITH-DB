import {Router} from "express"
import {createNote, getNotes, getOneNote, updateNote, deleteNote } from "../Controller/notebook.controller"

const notebookRouter = Router()

notebookRouter.post('/', createNote)
notebookRouter.get('/', getNotes)
notebookRouter.put('/update/:id', updateNote)
notebookRouter.get('/:id', getOneNote)
notebookRouter.delete('/delete/:id',deleteNote)



export default notebookRouter