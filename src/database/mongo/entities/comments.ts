import mongoose, { model, Schema } from 'mongoose';

interface IComment {
    userId: mongoose.Types.ObjectId;
    restaurantId: mongoose.Types.ObjectId;
    comment: string;
    rating: number;
}

const commentSchema = new Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        restaurantId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        }
    }
);

export const comments = model<IComment>('comments', commentSchema);
