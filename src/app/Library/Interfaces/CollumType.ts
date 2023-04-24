export interface IColumnType {
  field: string;
  header: string;
  width?: string;
  filterType?: any;
  filterData?: any | any[];
  filterPlaceholder?: string;
  filterHeaderOneIcon?: string;
  filterHeaderTwoIcon?: string;

  inputStatus?: boolean;
  click?(data?: any): void;
}
