import { restaurant as restaurantRepository } from '../repositories';

const getRestaurants = async (page: number, limit: number) =>
    restaurantRepository.getRestaurants(page, limit);

export { getRestaurants };
