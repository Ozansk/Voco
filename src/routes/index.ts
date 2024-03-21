import { Router } from 'express';
import restaurantRoute from './restaurant.route';

const appRoute = Router();

appRoute.use('/restaurants', restaurantRoute);

export default appRoute;
