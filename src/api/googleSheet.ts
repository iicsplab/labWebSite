import { googleSheetRequest } from '@/utils/request';
import { handleError } from '@/utils/common'

// 获取表格中sheet的名称，返回的是一个数组，数组长度为表格中sheet的个数
export async function fetchSheetNames(): Promise<Array<string> | undefined> {
    try {
        const response = await googleSheetRequest.get('');
        return response.data.sheets.map((sheet: any) => sheet.properties.title);
    } catch (error) {
        handleError(error, '获取表格名称');
        return undefined;
    }
}

// 根据sheet名称，获取该sheet中的数据，返回的是一个二维数组，第一维度代表行，第二维度代表每一列的数据
export async function fetchSheetData(
    sheetName: string,
    range: string = 'A1:Z100000' // range参数可根据表格实际情况 调整范围,Z100000设置的大一点则表示取表格全部数据
): Promise<Array<Array<string>> | undefined> {
    try {
        // encodeURIComponent处理特殊字符 如?/等 （重要！）
        const encodedRange = encodeURIComponent(`${sheetName}!${range}`);
        const response = await googleSheetRequest.get(`values/${encodedRange}`);
        return response.data.values ?? [[]];
    } catch (error) {
        handleError(error, `获取【${sheetName}】数据`);
        return undefined;
    }
}
