// 定义 GitHub 文件基础响应类型
export interface GitHubFileBase {
    name?: string;
    path?: string;
    sha: string;
    size?: number;
    url?: string;
    html_url?: string;
    git_url?: string;
    download_url?: string | null;
    type?: 'file';
    encoding?: 'base64';
    _links?: {
        self: string;
        git: string;
        html: string;
    };
    [propsName: string]: any;
}


export interface GitHubFileContent extends GitHubFileBase {
    content: string;  // Base64 编码内容
}