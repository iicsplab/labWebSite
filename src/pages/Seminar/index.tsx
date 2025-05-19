import { Component } from 'react'
import './index.scss'
import { fetchSheetNames, fetchSheetData } from '@/api/googleSheet'
import { fetchFileInfo, updateFileContent } from '@/api/githubAPI'
import { filename } from '@/const/api_key'
import { Dropdown, Space, Spin, message } from "antd";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Table from './component/Table/index'
import { GitHubFileContent } from '@/api/types'
import { seminarInfoType, seminarInfoItemType, IProps, IState } from './types'
import { base64ToString } from '@/utils/common'

export default class Seminar extends Component<IProps, IState> {
    state = {
        seminarInfo: {
            sha: '',
            content: []
        },
        selectedSheetName: '',
        tableContent: [[]],
        isLoaded: false,
    }

    onClick: MenuProps['onClick'] = ({ key }) => {
        const selected: seminarInfoItemType = this.state.seminarInfo.content?.[+key] ?? {
            sheetName: '',
            sheetdata: [[]],
        };
        this.setState({
            selectedSheetName: selected.sheetName,
            tableContent: selected.sheetdata
        })
    };

    fetchGoogle = async () => {
        // 当组件挂载完毕时，从google文档拉取最新数据
        // 如果拉取成功（用户必须翻墙才可以拉取成功），则把新的数据上传至github仓库中
        // 这样的话，其他用户在不翻墙的情况下访问该页面时，就能从github中拿到最新数据了
        // 拿到新的sheetNames数据
        const sheetNames = await fetchSheetNames(); // 一定是成功的promise(值为数组)，如果fetch失败，返回值为undefined
        if (sheetNames === undefined) {
            // alert('sheetNames fetch失败了')
            return; // 如果fetch失败了，下面的fetch也不执行了，直接return
        }

        // 拿到新的sheetdatas数据
        const sheetdatas: Array<seminarInfoItemType> = [];
        for (let i = 0; i < sheetNames.length; i++) {
            const sheetdata = await fetchSheetData(sheetNames[i]); // 一定是成功的promise(值为数组)，如果fetch失败，返回值为undefined
            // 如果内容为空，则返回[[]]
            if (sheetdata === undefined) {
                // alert(`${sheetNames[i]} fetch失败了`)
                return;
            }
            sheetdatas.push({
                sheetName: sheetNames[i],
                sheetdata,
            })
        }

        // 代码运行到这里，说明上面全部的fetch都已经成功
        // 比较新的数据和旧的数据，看是否发生改变
        const seminarInfo: seminarInfoType = this.state.seminarInfo;
        const dataHasChanged = !(JSON.stringify(sheetdatas) === JSON.stringify(seminarInfo.content));
        // alert('dataHasChanged: ' + dataHasChanged)
        if (dataHasChanged) {
            // console.log('旧数据：', JSON.stringify(seminarInfo.content));
            // console.log('新数据：', JSON.stringify(sheetdatas));
            const newSeminarInfo: seminarInfoType = {
                ...seminarInfo,
                content: sheetdatas,
            }
            this.setState({
                seminarInfo: newSeminarInfo,
                selectedSheetName: newSeminarInfo.content?.[0].sheetName ?? '',
                tableContent: newSeminarInfo.content?.[0].sheetdata ?? [[]]
            }, async () => {
                const result: number = await updateFileContent(filename, seminarInfo.sha, JSON.stringify(sheetdatas));
                if (result !== 200) {
                    // alert('Failed')
                } else {
                    // alert('Success')
                }
            })
        }
    }
    componentDidMount = async () => {
        // 从github中拉取组会数据
        try {
            const fileInfo = (await fetchFileInfo(filename)) as GitHubFileContent;
            const base64ToStringContent = base64ToString(fileInfo.content);
            const JSONContent = base64ToStringContent.length <= 2 ? '[]' : base64ToStringContent;
            const seminarInfo: seminarInfoType = {
                ...fileInfo,
                content: JSON.parse(JSONContent),
            };
            this.setState({
                seminarInfo,
                selectedSheetName: seminarInfo.content?.[0]?.sheetName ?? '',
                tableContent: seminarInfo.content?.[0]?.sheetdata ?? [[]],
                isLoaded: true,
            }, this.fetchGoogle)
        } catch (e) {
            message.error('Load Failed');
        }
    }
    render() {
        const { seminarInfo, selectedSheetName, tableContent, isLoaded } = this.state;

        const selectorList = (seminarInfo as seminarInfoType).content.map(
            (item: seminarInfoItemType, index: number) => ({
                label: item.sheetName,
                key: String(index),
            })
        )
        return (
            <div className='seminar'>
                <div className="container">
                    <h2 className="seminar-header header-font">
                        Seminar
                    </h2>
                    <p className='seminar-link'>
                        <a target='_blank' href="https://docs.google.com/spreadsheets/d/15IYsMCgLpw5_tkFXnTkgPSvZgOtq-c4WPJQY49SEk-Q/edit?gid=0#gid=0">
                            https://docs.google.com/spreadsheets/d/15IYsMCgLpw5_tkFXnTkgPSvZgOtq-c4WPJQY49SEk-Q/edit?gid=0#gid=0
                        </a>
                    </p>
                    <div className='seminar-selector'>
                        <Dropdown menu={{ items: selectorList, onClick: this.onClick }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='seminar-selector-text'>
                                    {
                                        isLoaded && (
                                            <>
                                                <span className='font-blue'>
                                                    {selectedSheetName}
                                                </span>
                                                <DownOutlined className='font-blue' />
                                            </>
                                        )
                                    }
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div className="seminar-table">
                        {
                            isLoaded ? (
                                /* {tableContent} */
                                <Table tableContent={tableContent} />
                                // <APP></APP>
                                // <></>
                            ) : (
                                <Spin
                                    tip={<p className='poppins-font'>Loading</p>}
                                    size="large"
                                    className='seminar-table-loading'
                                >
                                    {''}
                                </Spin>
                                // <div>123</div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}