import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
})

const startServer = async () => {
    try {
        connectDB()
    } catch (error) {
        console.log(erro)
    }
}