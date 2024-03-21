import { model, Schema } from 'mongoose';

export interface IAddress {
    city: string;
    district: string;
    address: string;
    description: string;
}

export interface IUser {
    username: string;
    password: string;
    email: Date;
    age: number;
    gender: string;
    profilePicture: string;
    addresses: Array<IAddress>
}

const AddressSchema: Schema = new Schema(
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

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: Date,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        profilePicture: {
            type: String,
            required: true
        },
        addresses: [AddressSchema]
    }
);

export const users = model<IUser>('users', userSchema);
