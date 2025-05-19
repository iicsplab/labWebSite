import type { TableProps } from 'antd';
// https://ant.design/components/table-cn#table-demo-colspan-rowspan

export interface IProps {
    tableContent: Array<Array<string>>,
}

export interface DataType {
    [headerName: string]: any,
}

export interface IState {
    columns: TableProps<DataType>['columns'],
    data: DataType[],
}