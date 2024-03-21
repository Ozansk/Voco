import Server from './server';

const app = new Server()
    .applyMiddleware()
    .applyRoutes()
    .enableMongoDB()
    .listen();

export default app;
