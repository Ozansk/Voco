import express, { Express, Router } from 'express';
import AppRoutes from './routes';
import { Mongo } from './database/mongo';
import mongoDbConfig from './config/mongodb.config.json';
import { AddressInfo } from 'net';
import http from 'http';
import baseConfig from './baseConfig';

class Server {
  private readonly _app: Express;
  private readonly _router: Router;
  private readonly _server: http.Server;
  constructor() {
    this._app = express();
    this._server = http.createServer(this._app);
    this._router = express.Router();
  }
  applyMiddleware() {
    this._app.use(express.json());
    return this;
  }

  applyRoutes() {
    this._router.use(`/`, AppRoutes);
    this._app.use(this._router);
    return this;
  }

  listen() {
    const server = this._server.listen(baseConfig.SERVER_PORT, () => {
      const { address, port } = server.address() as AddressInfo;
      try {
        console.log(`Node version: ${process.version}`);
      } catch (ignored) {
        console.log(`Node version error: ${ignored}`);
      }
      console.log(`Voco Service listening at ${port} port`);
      console.log(
        `API URL: http://127.0.0.1:${port}`
      );
    });
    return server;
  }

  enableMongoDB() {
    new Mongo()
      .setConfig(mongoDbConfig)
      .connectionDB();
    return this;
  }
}

export default Server;
