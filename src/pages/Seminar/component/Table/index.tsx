import { Component } from 'react'
import { IProps, IState, DataType } from './types'
import { Table } from 'antd';


export default class TableUI extends Component<IProps, IState> {

    state = {
        columns: [],
        data: []
    }

    updateTable = () => {
        const { tableContent } = this.props;
        // 排除异常情况，表格只有一行时，直接将state设置为空数组
        if (tableContent.length <= 1) {
            this.setState({
                columns: [],
                data: []
            })
            return;
        }

        // 将tableContent转换为columns和data的类型形式
        const colLength = Math.max(...tableContent.map(subArray => subArray.length)); // 将每一列的最大长度视为整个表格的列数

        const tableArray = tableContent[0].length === 1 ? tableContent.slice(1) : tableContent; // 去除表格标题caption行
        let tableHeader: Array<string> = [];
        let num = 1;
        for (let i = 0; i < colLength; i++) {
            let header = tableArray[0][i];
            if (header) tableHeader.push(header);
            else tableHeader.push(' '.repeat(num++));
        }

        // realData为去除caption和header的真实数据
        const realData = tableArray.slice(1);
        const data = realData.map((oneData) => {
            let obj: DataType = {}
            oneData.forEach((item, index) => {
                obj[tableHeader[index]] = item;
            })
            return obj;
        })

        const columns = tableHeader.map((item, index_) => {
            let obj: { [prop: string]: any } = {
                title: item,
                dataIndex: item,
                render: (text: string) => <a>{text}</a>,
                className: "seminar-table-min-width-column" // 给表格中每个th和td标签设置类名，控制th和td的样式
            }
            // 只考虑第0列存在行合并的情况（第0列为时间）
            if (index_ == 0) {
                obj.onCell = (_: DataType, index: number) => {
                    if (realData[index][0] !== '') {
                        // 向下查找，计算需要合并几行
                        let num = 1;
                        let i = index + 1;
                        while (realData[i] && realData[i][0] === '') {
                            num++;
                            i++;
                        }
                        return { rowSpan: num }
                    } else {
                        return { rowSpan: 0 }
                    }
                }
            }
            return obj;
        })

        this.setState({
            columns,
            data,
        })
    }

    componentDidMount() {
        this.updateTable();
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.props == prevProps) return;
        this.updateTable();
    }

    render() {
        const { columns, data } = this.state;
        return (
            <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={false}
                rowClassName="seminar-table-row" // 给tbody中的tr标签设置类名，以控制tr的样式
                style={{ tableLayout: 'auto' }}
            />
        )
    }
}