import { Request, Response } from "express";
import {v4} from 'uuid'
import { Notebook } from "../Interface/notebook.interface";
import mssql from 'mssql';
import bcrypt from 'bcrypt'
import { sqlConfig } from '../config/sql.config';



export const createNote = async(req: Request, res: Response)=>{
    try {
        const id = v4()

        
        
        const {title, content, created_at}:Notebook = req.body
        
        console.log(req.body);
        

        

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()

        .input('user_id', mssql.VarChar, id)
        .input('title', mssql.VarChar, title)
        .input('content', mssql.VarChar, content)
        .input('created_at', mssql.VarChar, created_at)
        .execute('createNotebook')).rowsAffected

        console.log(result);

        return res.status(200).json({

            message: 'Note created successfully',
            
        })


    } catch (error) {
        return res.json({error: error})
    }

}

export const getNotes =  async(req: Request, res:Response)=>{
    try {
        
        const pool = await mssql.connect(sqlConfig);
        let allnotes = (await pool.request().execute('getAllNotes')).recordset

        return res.status(200).json({
            notes: allnotes
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getOneNote = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        

        const pool = await mssql.connect(sqlConfig)

        let user = (await pool.request().input("user_id", id).execute('getOneNote')).recordset

        return res.json({
            user
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updateNote = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const {title, content, created_at}:Notebook = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input('user_id', mssql.VarChar, id)
        .input('title', mssql.VarChar, title)
        .input('content', mssql.VarChar, content)
        .input('created_at', mssql.VarChar, created_at)
        .execute('updateNote')).rowsAffected

        console.log(result);
        

        return res.status(200).json({
            message: "Note updated successfully"
        })

        
    } catch (error) {
        return res.json({error})
    }
}

export const deleteNote = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("user_id", mssql.VarChar, id)
        .execute('deleteNote')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.status(201).json({
                error: "Note not found"
            })
        }else{
            return res.status(200).json({
                message: "Note deleted successfully"
            })
        }

        
       
    } catch (error) {
        return res.json({error})
    }
}