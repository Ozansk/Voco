import { Request, Response } from 'express';
import { restaurant as restaurantSerivce } from '../services';


const getRestaurants = async (req: Request, res: Response) => {
    const page = parseInt(req?.query?.page as string) || 1;
    const limit = parseInt(req?.query?.limit as string) || 10;
    try {
        const restaurants = await restaurantSerivce.getRestaurants(page, limit);
        return res.status(200).json({
            data: {
                restaurants
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json();
    }
};

export { getRestaurants };