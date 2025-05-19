import { Component } from 'react'
import './index.scss'
import { IProps, IState } from './types'

export default class Bottom extends Component<IProps, IState> {

    state = {
        concatInfo: {
            '邮编': '266237',
            '通讯/办公地址': 'N3楼计算机学院-302',
            '邮箱': 'guomingzhang@sdu.edu.cn',
        },
        address: '山东省青岛市即墨区滨海路72号山东大学（青岛校区）',
    }

    render() {
        const { concatInfo, address } = this.state;

        return (
            <div className='bottom'>
                <div className="bottom-container">
                    <div className="bottom-container-concat">
                        <h6 className='bottom-container-concat-title'>联系方式</h6>
                        {
                            Object.keys(concatInfo).map((key, index) => {
                                return (
                                    <p key={index} className="bottom-container-concat-info">
                                        {key}：{(concatInfo as { [prop: string]: any })[key]}
                                    </p>
                                )
                            })
                        }
                    </div>
                    <div className="bottom-container-concat">
                        <h6 className='bottom-container-concat-title'>校址</h6>
                        <p className="bottom-container-concat-info">{address}</p>
                    </div>
                    <div className="bottom-container-administrator">
                        <p className='bottom-container-administrator-title'>SPLAB</p>
                    </div>
                </div>
            </div >
        )
    }
}