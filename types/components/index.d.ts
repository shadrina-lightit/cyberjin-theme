declare const components: {
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
export default components;
