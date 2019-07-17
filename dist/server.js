"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const node_logger_1 = require("@rama41222/node-logger");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config = {
    host: "0.0.0.0",
    name: "sample-express-app",
    port: 3000
};
const app = express_1.default();
const logger = node_logger_1.log({ console: true, file: false, label: config.name });
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(node_logger_1.ExpressAPILogMiddleware(logger, { request: true }));
app.get("/", (req, res) => {
    res.status(200).send("hello muller");
});
app.listen(config.port, config.host, (e) => {
    if (e) {
        throw new Error("Internal Server Error");
    }
    logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
//# sourceMappingURL=server.js.map