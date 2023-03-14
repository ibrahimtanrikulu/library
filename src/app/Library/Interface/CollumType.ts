export interface IColumnType {
  field: string;
  header: string;
  width?: string;
  filter?: boolean;
  filterType?: any;
  filterData?: any | any[];
  filterPlaceholder?: string;
  filterHeaderOneIcon?: string;
  filterHeaderTwoIcon?: string;
}
