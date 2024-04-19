import { defineRule } from 'vee-validate';


export default defineNuxtPlugin((nuxtApp) => {

    defineRule('required', (value: string | any[]) => {

        if (!value || !value.length) {
            return 'This field is required';
        }
        return true;

    });

    return {
        provide: {
            required: 'required',
        },
    };

});