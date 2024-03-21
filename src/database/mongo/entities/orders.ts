import mongoose, { model, Schema } from 'mongoose';

interface IOrderItem {
    name: string;
    price: number;
}

interface IOrder {
    userId: mongoose.Types.ObjectId;
    restaurantId: mongoose.Types.ObjectId;
    orderDate: Date;
    orderTime: string;
    comment: string;
    rating: number;
    items: Array<IOrderItem>;
}

const OrderItemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
);

const orderSchema = new Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        restaurantId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        orderDate: {
            type: Date,
            required: true
        },
        orderTime: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        items: [OrderItemSchema]
    }
);

export const orders = model<IOrder>('orders', orderSchema);
