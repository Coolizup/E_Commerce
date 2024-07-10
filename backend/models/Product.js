import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: [String], required: true },
    size: { type: String, required: true },
    color: { type: String, required: true }
});

export default model('Product', ProductSchema);
