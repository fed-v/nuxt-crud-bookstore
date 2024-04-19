import BookModel from "../../models/Book.model";
//import { BookSchema } from "../../validation";


export default defineEventHandler(async (event) => {

    // Get data from body
    const body = await readBody(event);

    /*let { error } = BookSchema.validate(body);

    if(error) {
        throw createError({
            message: error.message.replace(/"/g,""),
            statusCode: 400,
            fatal: false,
        });
    }*/

    try {
        await BookModel.create(body);
        return { messate: "Book created" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }

});