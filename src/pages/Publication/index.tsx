import { Component } from 'react'
import './index.scss'
import ProjectCard from '@/components/ProjectCard'
import { featuredProjectList } from '@/const/project'
import { allProjectList } from '@/const/project'

export default class Publication extends Component {
    state = {
        showFeatured: false, // 展示Featured Projects
    }

    handleFeaturedBtn = () => {
        this.setState({
            showFeatured: !this.state.showFeatured,
        })
    }

    setClassName = (type: string | Array<string>) => {
        if (typeof type === 'string') {
            if (type !== 'normal') return 'font-' + type;
            // type 值不合法时，按normal处理
            else return;
        }
        if (!(type instanceof Array)) return;
        // font-xxx 样式在App.scss中定义
        return type.reduce((pre, cur) => pre + 'font-' + cur + ' ', "")
    }
    render() {
        const { showFeatured } = this.state;
        return (
            <div className='publication'>
                <div className="container">
                    <section className='publication-featured'>
                        <div className="publication-featured-header">
                            <h2 className='header-font publication-featured-header-title'>
                                Featured Projects
                            </h2>
                            <span className='publication-featured-header-button poppins-bold font-blue' onClick={this.handleFeaturedBtn}>
                                {
                                    showFeatured ? 'Collapse ↑' : 'Expand ↓'
                                }
                            </span>
                        </div>
                        <div className={`publication-featured-wrapper`}>
                            {
                                featuredProjectList.map((item, index: number) => {
                                    return (
                                        <div className={`publication-featured-wrapper-card${index < 2 ? '' : ' fadeIn'} ${(showFeatured || index < 2) ? '' : ' publication-featured-wrapper-hidden'}`} key={index}>
                                            <ProjectCard {...item} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    <section className='publication-list'>
                        <h2 className='publication-list-header header-font'>
                            Full List
                        </h2>
                        {/* TODO：用的home页news的数据和模板结构，待修改 */}
                        <ul className='publication-list-wrapper'>
                            {
                                allProjectList.map((item: any, index: number) => {
                                    return (
                                        <li className={`publication-list-wrapper-li`} key={index}>
                                            <div className="publication-list-wrapper-li-content poppins-font">
                                                <h3 className="publication-list-wrapper-li-content-title poppins-bold">
                                                    {item.title}
                                                </h3>
                                                <p className='publication-list-wrapper-li-content-info'>
                                                    <span className='publication-list-wrapper-li-content-info-public'>
                                                        {`${item.publication} ${item.year}`}
                                                    </span>
                                                    {
                                                        item.optionButton?.map((buttonItem: { link?: string, label: string }, secondIndex: number) => {
                                                            return <a href={buttonItem.link} className="app-label poppins-font publication-list-wrapper-li-content-info-label" key={index + "-button" + secondIndex}>
                                                                {buttonItem.label}
                                                            </a>
                                                        })
                                                    }
                                                </p>
                                                <p className="publication-list-wrapper-li-content-author">
                                                    {item.authors}
                                                </p>

                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}