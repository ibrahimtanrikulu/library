export interface TableType {
  field: string;
  header: string;
  width?: string;

  filter?: boolean;
  filterType?: any;
  filterData?: any | any[];
  
  filterHeaderOneIcon?:string;
  filterHeaderTwoIcon?:string;
}
