import { model, Schema } from 'mongoose';

export interface IRestaurantAddress {
    city: string;
    district: string;
    address: string;
}

export interface IRestaurant {
    name: string;
    description: string;
    logo: string;
    addresses: Array<IRestaurantAddress>
}

const RestaurantAddressSchema: Schema = new Schema(
    {
        city: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    }
);

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        logo: {
            type: Date,
            required: true
        },
        rating: {
            type: Object,
            required: true
        },
        addresses: [RestaurantAddressSchema]
    }
);

export const restaurants = model<IRestaurant>('restaurants', restaurantSchema);
