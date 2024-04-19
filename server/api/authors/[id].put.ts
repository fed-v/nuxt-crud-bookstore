import AuthorModel from "../../models/Author.model";
import { AuthorSchema } from "../../validation";


export default defineEventHandler(async (event) => {

    // Get data from body
    const body = await readBody(event);

    // Get id from params
    const id = event.context.params.id;

    /*let { error } = AuthorSchema.validate(body, { abortEarly: true, allowUnknown: true });

    if(error) {
        throw createError({
            message: error.message.replace(/"/g,""),
            statusCode: 400,
            fatal: false,
        });
    }*/

    try {
        await AuthorModel.findByIdAndUpdate(id, body);
        return { messate: "Author updated" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }

});