declare const theme: {
    palette: {
        primary: {
            main: string;
            light: string;
            lightest: string;
        };
        text: {
            primary: string;
            secondary: string;
            hint: string;
        };
        background: {
            default: string;
        };
        divider: string;
    };
    baseSelectors: {
        body: {
            fontSize: number;
            fontFamily: string;
            maxWidth: string;
            overflowX: string;
            '@media (max-width: 599.95px)': {
                fontSize: number;
            };
        };
        'a:not([class*="Button"])': {
            color: string;
            transition: string;
            textDecoration: string;
            '&:hover, &:focus': {
                opacity: number;
            };
        };
        img: {
            maxWidth: string;
        };
        ul: {
            listStyleImage: string;
            paddingLeft: string;
        };
        ol: {
            paddingLeft: string;
        };
        '::-webkit-scrollbar': {
            width: number;
        };
        '::-webkit-scrollbar-thumb': {
            background: string;
        };
    };
    components: {
        MuiButton: {
            root: {
                fontSize: string;
                lineHeight: number;
                paddingTop: string;
                paddingBottom: string;
                fontFamily: string;
            };
            containedPrimary: {
                boxShadow: string;
                '&:hover': {
                    boxShadow: string;
                };
            };
        };
        MuiDialog: {
            paper: {
                margin: string;
            };
        };
        MuiInputBase: {
            root: {
                background: string;
                borderRadius: number;
                padding: string;
                fontSize: string;
                fontFamily: string;
                '&$error': {
                    color: string;
                };
            };
        };
    };
};
export declare const selectStyle: ({ theme, option, dropdownIndicator, clearIndicator, control, container, singleValue, multiValue, menu, }: {
    theme: any;
    option?: (state?: any) => {} | {
        [key: string]: string | number;
    };
    dropdownIndicator?: (state?: any) => {} | {
        [key: string]: string | number;
    };
    clearIndicator?: (state?: any) => {} | {
        [key: string]: string | number;
    };
    control?: (state?: any) => {} | {
        [key: string]: string | number;
    };
    container?: (state?: any) => {} | {
        [key: string]: string | number;
    };
    singleValue?: (state?: any) => {} | {
        [key: string]: string | number;
    };
    multiValue?: (state?: any) => {} | {
        [key: string]: string | number;
    };
    menu?: (state?: any) => {} | {
        [key: string]: string | number;
    };
}) => {
    [key: string]: any;
};
export declare const datepickerCss: {
    '.react-datepicker-wrapper': {
        padding: string;
        width: string;
        '& input': {
            width: string;
            background: string;
            border: string;
            padding: string;
            height: string;
            fontSize: string;
            boxSizing: string;
            outline: string;
            color: string;
        };
        background: string;
        borderRadius: number;
        fontSize: string;
        fontFamily: string;
        '&$error': {
            color: string;
        };
    };
    '.react-datepicker': {
        border: string;
        marginLeft: string;
        backgroundColor: string;
        boxShadow: string;
        fontFamily: string;
        '&__year-wrapper': {
            maxWidth: string;
            display: string;
            gridTemplateColumns: string;
        };
        '&__triangle': {
            display: string;
        };
        '&__navigation': {
            top: string;
            border: string;
            backgroundRepeat: string;
            width: string;
            height: string;
            outline: string;
            backgroundColor: string;
            backgroundPosition: string;
            borderRadius: number;
            '&--previous': {
                backgroundImage: string;
                left: string;
            };
            '&--next': {
                backgroundImage: string;
                right: string;
            };
        };
        '&__header': {
            background: string;
            borderBottom: string;
            paddingTop: string;
            '&--custom': {
                paddingBottom: string;
                '& button': {
                    height: string;
                };
            };
        };
        '&__current-month': {
            fontSize: string;
            paddingBottom: string;
        };
        "&__year-text--selected,\n      &__day--in-range,\n      &__day--selected": {
            borderRadius: string;
            backgroundColor: string;
            color: string;
        };
        '&__year, &__year-text': {
            paddingTop: string;
            paddingBottom: string;
        };
        '&__year-text--keyboard-selected': {
            border: string;
            backgroundColor: string;
            color: string;
        };
    };
    '.react-datepicker__month': {
        margin: string;
    };
    '.react-datepicker__day--outside-month': {
        color: string;
    };
    ".react-datepicker__day,\n  .react-datepicker__day-name": {
        margin: string;
        padding: string;
        width: string;
        height: string;
        outline: string;
    };
    '.react-datepicker__day--keyboard-selected': {
        background: string;
        color: string;
    };
    '.react-datepicker__close-icon': {
        paddingRight: string;
        '&:after': {
            backgroundColor: string;
            backgroundImage: string;
            content: string;
            backgroundRepeat: string;
            backgroundPosition: string;
        };
    };
};
export default theme;
