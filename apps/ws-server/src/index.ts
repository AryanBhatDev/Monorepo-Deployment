import { WebSocketServer } from "ws";
import { client } from '@repo/database/client'

const wss = new WebSocketServer({port:8080});

wss.on('connection',async (s)=>{
    await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString(),
        }
    })
    s.send('Hi there, you are connected to websocket')
})