import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    menuImg : {
        type : String,
        required : true
    },
    menuName : {
        type : String,
        required : true
    },
    menuPrice : {
        type : Number,
        required : true
    },
    itemDescription : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }
});

export const Menu = mongoose.model("Menu", menuSchema);
export default Menu;