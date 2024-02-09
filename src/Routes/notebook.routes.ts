import {Router} from "express"
import {createNote} from "../Controller/notebook.controller"

const notebookRouter = Router()

notebookRouter.post('/', createNote)

export default notebookRouter