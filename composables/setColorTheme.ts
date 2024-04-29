import { Theme } from '~/types/index';

export const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
};