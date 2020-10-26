declare type TObject = {
    [key: string]: any;
};
declare type StyleObject = {
    [key: string]: string | number;
} | {};
declare type TStyleArgs = {
    theme: any;
    option?: (state?: any) => StyleObject;
    dropdownIndicator?: (state?: any) => StyleObject;
    clearIndicator?: (state?: any) => StyleObject;
    control?: (state?: any) => StyleObject;
    container?: (state?: any) => StyleObject;
    singleValue?: (state?: any) => StyleObject;
    multiValue?: (state?: any) => StyleObject;
    menu?: (state?: any) => StyleObject;
};
declare const selectStyle: ({ theme, option, dropdownIndicator, clearIndicator, control, container, singleValue, multiValue, menu, }: TStyleArgs) => TObject;
export default selectStyle;
