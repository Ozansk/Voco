import { model, Schema } from 'mongoose';

interface IMenu {
    name: string;
    price: number;
    coverPicture: string;
}

interface IRestaurantAddress {
    city: string;
    district: string;
    address: string;
}

interface IRestaurant {
    name: string;
    description: string;
    logo: string;
    rating: Object;
    types: Array<string>;
    menus: Array<IMenu>;
    addresses: Array<IRestaurantAddress>
}

const MenuSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        coverPicture: {
            type: String,
            required: true
        }
    }
)

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
        types: [
            {
                type: String
            }
        ],
        menus: [MenuSchema],
        addresses: [RestaurantAddressSchema]
    }
);

export const restaurants = model<IRestaurant>('restaurants', restaurantSchema);
