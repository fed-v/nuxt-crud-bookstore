import BookModel from "../../models/Book.model";

export default defineEventHandler( async (event) => {
    return await BookModel.find().populate('authors');    
})