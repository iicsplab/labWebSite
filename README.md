# labWebSite

实验室网站-源码

## 项目开发环境

node version: 16.20.2
npm version: 10.2.3
上述版本为首次开发时使用版本，只要不报错，其他版本也可以使用

react version: 18.3.1

## 开发环境，启动项目
npm run dev

## 打包构建
npm run build（推荐）
npm run build-ignore-ts（跳过ts检查，不推荐！）

## 如何新增或修改网站数据？
- 如需新增或修改网站数据，请直接修改："/src/const/xx"文档中对应的内容
- 改动数据前！请务必！查看文档中指定的数据格式！！
- 若要修改网页架构，需由react开发者进行修改，请勿随意修改！

## 修改网站数据后，如何部署？
1. npm run build，打包项目，根目录下会自动生成dist文件夹
2. 将dist文件夹中（非dist文件夹本身）的内容，上传并替换掉iicsplab账号下xxx仓库中的内容
3. 等待github自动部署，几分钟后即可在xxx.github.io上看到修改后的内容
4. 由于本地labWebSite仓库的内容已被修改，务必将新的数据重新上传至远程仓库
    - git add .
    - git commit -m "update"
    - git push

## 首次clone到本地，如何运行？
1. 下载nvm（node version management），下载地址：https://github.com/coreybutler/nvm-windows/releases，具体安装方式可百度
2. nvm install 16.20.2，安装node
3. nvm use 16，切换node版本
4. npm install，安装依赖
5. npm run dev，启动项目
