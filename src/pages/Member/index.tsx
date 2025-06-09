import './index.scss'
import { memberList } from '@/const/member'
import DraggableAnimationPortrait from '@/components/toolsComponent/DraggableAnimationPortrait'

export default function Member() {

    return <div className='member'>
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
                                {item.member.map((each: { [prop: string]: any }, _index) => {
                                    return <li className='member-main-ul-li' key={each.name + _index}>

                                        <DraggableAnimationPortrait src={each.photo} width='148px' height='148px'
                                            href={each.link || undefined}
                                            tip={each.tip || undefined} tipColor={each.tipColor || undefined}
                                        />

                                        <h3 className='member-main-ul-li-name'>
                                            {each.link ? <a href={each.link}>{each.name}</a> : each.name}
                                        </h3>

                                        {[each.mainText].flat().map((text, i) =>
                                            text && <h4 key={'mainText' + i} className="member-main-ul-li-mainText">{text}</h4>
                                        )}

                                        {[each.secondaryText].flat().map((text, i) =>
                                            text && <h4 key={'secondaryText' + i} className="member-main-ul-li-secondaryText">{text}</h4>
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
    </div>
}