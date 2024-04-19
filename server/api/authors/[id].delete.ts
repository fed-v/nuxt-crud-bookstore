import AuthorModel from "../../models/Author.model";


export default defineEventHandler(async (event) => {

    // Get data from body
    const id = event.context.params.id;

    try {
        await AuthorModel.findByIdAndDelete(id);
        return { messate: "Author removed" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }

});