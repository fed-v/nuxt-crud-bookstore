import mongoose from "mongoose";


export default async () => {

    const config = useRuntimeConfig();

    mongoose
        .connect(config.MONGO_URI)
        .then( () => console.log('connected to mongo DB!') )
        .catch( (e) => console.log(e) );

};