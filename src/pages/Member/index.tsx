import { Component } from 'react'
import './index.scss'
import { memberList } from '@/const/member'

export default class Member extends Component {


    render() {
        return (
            <div className='member'>
                {/* <div className="container"> */}
                <h1 className="member-header header-font">
                    <div className="container">
                        Members
                    </div>
                </h1>
                <div className="member-main">
                    {
                        memberList.map((item, index) => (
                            <div key={index} className={`member-main-wrapper ${index % 2 || 'member-main-bacc'}`}>
                                <div className="container">
                                    <h2 className="member-main-label poppins-font">{item.label}</h2>
                                    <ul className="member-main-ul">
                                        {item.member.map((each:{[prop:string]:any}) => {
                                            const photo = <img src={each.photo} alt="" className="member-main-ul-li-photo" />;
                                            return <li className='member-main-ul-li' key={each.name}>
                                                {each.link ? <a href={each.link}>{photo}</a> : photo}
                                                <h3 className='member-main-ul-li-name'>
                                                    {each.link ? <a href={each.link}>{each.name}</a> : each.name}
                                                </h3>
                                                {/* {
                                                    each.mainText ? (
                                                        typeof (each.mainText) === 'string' ?
                                                            <h4 className='member-main-ul-li-mainText'>{each.mainText}</h4>
                                                            : each.mainText.map(text => <h4 className='member-main-ul-li-mainText'>{text}</h4>)
                                                    ) : null
                                                } */}
                                                {[each.mainText].flat().map((text, i) =>
                                                    text && <h4 key={i} className="member-main-ul-li-mainText">{text}</h4>
                                                )}
                                                {[each.secondaryText].flat().map((text, i) =>
                                                    text && <h4 key={i} className="member-main-ul-li-secondaryText">{text}</h4>
                                                )}
                                            </li>
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* </div> */}
            </div>
        )
    }
}