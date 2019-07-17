// @ts-ignore
import { ExpressAPILogMiddleware, log } from "@rama41222/node-logger";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const config = {
    host: "0.0.0.0",
    name: "sample-express-app",
    port: 3000
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

app.get("/", (req: any, res: any) => {
    res.status(200).send("hello muller");
});

app.listen(config.port, config.host, (e: any) => {
    if (e) {
        throw new Error("Internal Server Error");
    }
    logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
