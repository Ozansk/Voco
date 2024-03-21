import { Router } from 'express';
import { restaurant as reastaurantController } from '../controllers';


const route = Router();

route.get(
    '/',
    reastaurantController.getRestaurants
);

export default route;
