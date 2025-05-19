// 此文件存放 发送请求的API所需要的身份认证及其它参数
// 无特殊情况，请不要修改此文件

// 以下为Google在线表格的API密钥和ID
export const API_KEY = 'AIzaSyAlZb6daofKr-J83Dv21uMTPxqMjZgr_vM'; // Google API密钥
export const SPREADSHEET_ID = '15IYsMCgLpw5_tkFXnTkgPSvZgOtq-c4WPJQY49SEk-Q'; // Google在线表格的ID
// 配置上述参数的教程如下：
// 使用Google Api请求Google文档内容的方法，参考：
// https://blog.csdn.net/qq_35837578/article/details/141159237（配置Google API，用JavaScript和Python读取Google sheet里的数据）


// 以下为GitHub API的身份认证及其它参数
export const username = 'iicsplab';
export const repo = 'labWebSiteInfoStore';
export const filename = 'seminarInfo.json';
// 具有读写github组会信息权限的token(！已经过移位加密对大写字母加密，如需查看，需解密后查看:'@/utils/common/rot13')
// 此处不直接放原始token的原因是：该项目的代码存在github仓库，此token又是githun的token，github会进行检测，不允许仓库中包含token
// export const token = 'ghp_bTFB3xgxdyDehMyrabtaO8EpoD2cma4EMo1i';
export const token = 'ghp_hxRpxLokHV1M0hl3gyuHnybtkhwNWP1dwLfk';
// 该token具有读写xx账号xx仓库的权限
// token配置方法，参考：
// https://segmentfault.com/a/1190000015144126
// 一篇文章搞定Github API 调用 (v3）