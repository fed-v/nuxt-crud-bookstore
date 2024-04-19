import BookModel from "../../models/Book.model";
//import { BookSchema } from "../../validation";


export default defineEventHandler(async (event) => {

    // Get data from body
    const body = await readBody(event);

    // Get id from params
    const id = event.context.params.id;

    /*let { error } = BookSchema.validate(body, { abortEarly: true, allowUnknown: true });

    if(error) {
        throw createError({
            message: error.message.replace(/"/g,""),
            statusCode: 400,
            fatal: false,
        });
    }*/

    try {
        await BookModel.findByIdAndUpdate(id, body);
        return { messate: "Book updated" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }

});