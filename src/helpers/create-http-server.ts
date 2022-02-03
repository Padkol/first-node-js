import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import express, {Express} from "express";

import {config} from '../config';
import {todosRouter} from "../api";


export async function  startHttpServer (app: Express) {
    try {
        await mongoose.connect(config.mongoUrl)

        app.use(express.json());

        app.use(express.urlencoded({ extended: true }));

        app.use(bodyParser.json());

        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(todosRouter)

        app.use(
            cors({
                origin: true,
                credentials: true,
            })
        );

        app.listen(config.workingPort,()=>{
            console.log(`Server has been started on ${config.workingPort} port`)
        })
    }catch (err) {
        console.error(err)
    }

}

/*
import {Express} from "express";

const cors = require('cors');
const express = require('express');
// const { errorMiddleware } = require('../middlewares/error-middleware');
// const createRouter = require('./../routes/index');
const bodyParser = require('body-parser');
const boolParser = require('express-query-boolean');
// const config = require('../config');

async function startHttpServer(expressApp: Express) {
    try {
        process.on('unhandledRejection', (reason, p) => {
            console.error({ p, reason });
        });
        process.on('uncaughtException', (error) => console.error(error));

        expressApp.use(express.json());
        expressApp.use(express.urlencoded({ extended: true }));
        expressApp.use(bodyParser.json());
        expressApp.use(bodyParser.urlencoded({ extended: true }));
        expressApp.use(boolParser());

        expressApp.use(
            cors({
                origin: true,
                credentials: true,
            })
        );

        // connect to sequelize
        // await initModels(true);

        const env = config.env;
        expressApp.get('/api', async (req, res) => {
            res.send(`Date: ${new Date()}
    Environment: ${env}`);
        });

        createRouter(expressApp);

        expressApp.use(errorMiddleware);

        const port = config.workingPort;
        expressApp.listen(port, async () => {
            console.log(`API server started at port ${port} in ${env} environment`);
        });
    } catch (e) {
        console.error(e);
    }
}

module.exports = { startHttpServer };
*/
