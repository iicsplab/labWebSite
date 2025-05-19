import { githubRequest } from '@/utils/request';
import { handleError, stringToBase64 } from '@/utils/common'
import { GitHubFileContent } from './types'

// 获取仓库中某个文件的内容及信息，返回类型参考GitHubFileContent
export async function fetchFileInfo(path: string): Promise<GitHubFileContent | ''> {
    try {
        const response = await githubRequest.get(path);
        return response.data;
    } catch (error) {
        handleError(error, `获取【${path}】文件信息`);
        return Promise.reject('');
    }
}

// 更新文件内容，返回200表示成功，返回0表示失败
export async function updateFileContent(path: string, sha: string, newContent: string): Promise<number> {
    // 参数sha：path文件的原始内容对应的sha值（对文件的唯一识别码，相当于ID，但是它是会随着文件内容变化而变化）
    // 详情参考：https://segmentfault.com/a/1190000015144126
    try {
        const response = await githubRequest.put(path, {
            message: "update new data",
            content: stringToBase64(newContent), // 需要转为base64编码格式
            sha
        });
        return response.status; // 返回状态，200表示成功
    } catch (error) {
        handleError(error, `获取【${path}】文件信息`);
        return 0;
    }
}