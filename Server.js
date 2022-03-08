import express from "express"
import Cors from "cors"
import Http from "http"
import {Server} from "socket.io"

const app = express();
const room = ['general', 'tech', 'finance', 'crpyto'];

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(Cors());

const PORT = 5001;
const server = Http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, ()=>{
    console.log("listening to port", PORT)
})