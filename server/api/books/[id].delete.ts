import BookModel from "../../models/Book.model";


export default defineEventHandler(async (event) => {

    // Get data from body
    const id = event.context.params.id;

    try {
        await BookModel.findByIdAndDelete(id);
        return { messate: "Book removed" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }

});