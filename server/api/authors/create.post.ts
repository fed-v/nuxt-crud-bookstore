import AuthorModel from "../../models/Author.model";
//import { AuthorSchema } from "../../validation";


export default defineEventHandler(async (event) => {

    // Get data from body
    const body = await readBody(event);

    /*let { error } = AuthorSchema.validate(body);

    if(error) {
        throw createError({
            message: error.message.replace(/"/g,""),
            statusCode: 400,
            fatal: false,
        });
    }*/

    try {
        await AuthorModel.create(body);
        return { messate: "Author created" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }

});