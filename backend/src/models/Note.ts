import {Schema, model} from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String, 
        required: true,
        trim: true
    },
    priority:{
        type: String,
        enum: ['low', 'medium', 'hight'],
        default: 'low'
    }
    
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
})
export default model("Note", noteSchema)