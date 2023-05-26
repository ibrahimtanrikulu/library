export interface IColumnType {
  field: string;
  header: string;
  width?: string;
  filterType?: any;
  filterData?: any | any[];
  filterPlaceholder?: string;
  inputStatus?: boolean;
  click?(data?: any): void;
  active?: boolean
}
