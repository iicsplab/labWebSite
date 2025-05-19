import { GitHubFileBase } from '@/api/types'

export type seminarInfoItemType = {
    sheetName: string,
    sheetdata: Array<Array<string>>,
}

export interface seminarInfoType extends GitHubFileBase {
    content: Array<seminarInfoItemType>
}

export interface IProps { }
export interface IState {
    seminarInfo: seminarInfoType,
    selectedSheetName: string, // 下拉框 当前已选择的内容
    tableContent: Array<Array<string>>, // 根据下拉框已选择的内容，需要向页面展示的 表格的 内容
    isLoaded: boolean, // 组会信息已加载完成
}