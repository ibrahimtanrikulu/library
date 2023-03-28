import { DataType } from "./DataType";

export interface IForm {
    class?: string;
    type?: string;
    controlname?: string;
    data?: DataType[];
    isMultiType?: boolean
    search?: boolean
    header?: string;
    min?: number,
    max?: number,
    rows?: string,
    ScrollHeightStatus?: boolean,
    ScrollHeight?: string,
    disabled?: boolean,
    onChange?(data: any): void,
    click?(data?: any): void,
}