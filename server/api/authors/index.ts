import AuthorModel from "../../models/Author.model";

export default defineEventHandler( async (event) => {
    return await AuthorModel.find();    
})