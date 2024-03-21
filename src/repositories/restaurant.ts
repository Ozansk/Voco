import { Mongo } from '../database/mongo';

const getRestaurants = (page: number, limit: number) =>
    Mongo.entities.restaurants.find()
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ 'rating.average': -1 })
        .select('name description logo rating.average');

export { getRestaurants };