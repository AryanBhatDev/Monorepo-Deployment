import express, { Request, Response } from 'express'
import { client } from '@repo/database/client'


const app = express();
app.use(express.json())

app.post('/signup',async (req:Request,res:Response)=>{
    
    const { username, password } = req.body;

    const user = await client.user.create({
        data:{
            username,
            password
        }
    })

    res.status(201).json({
        message:"User created",
        userId:user.id
    })
})

app.listen(3001)