import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    post:{
        type: String,
        required: [true, 'Text requis'],
    }, 
    tag:{
        type: String,
        required: [true, "Tag requis"],
    }
    
})

const Post = models.Post || model("Post", PostSchema)
export default Post;