import { Component } from 'react'
import './index.scss'
import { newsList as allNewsList } from '@/const/news'

const initCount = 6;
export default class News extends Component {

    state = {
        initShowCount: initCount, // 页面初始展示新闻的数量
        showCount: initCount, // 页面当前展示新闻的数量
        eachIncrease: 4, // 每次点击查看更多后，增加的数量
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

    get showNewsList() {
        const { showCount } = this.state;
        let length = allNewsList.length;
        if (length <= showCount) return allNewsList;
        else {
            return allNewsList.slice(0, showCount);
        }
    }

    handleLoadMore = () => {
        const { showCount, eachIncrease } = this.state;
        let length = allNewsList.length;
        if(showCount >= length) return;

        const targetCount = showCount + eachIncrease >= length ? length : showCount + eachIncrease;
        this.setState({
            showCount: targetCount,
        })
    }

    render() {
        const { initShowCount, showCount } = this.state;
        return (
            <section className='home-news'>
                <h2 className="home-news-header header-font">News</h2>
                <ul className='home-news-wrapper'>
                    {
                        this.showNewsList.map((item: any, index: number) => {
                            return (
                                <li className={`home-news-wrapper-li${(index+1>initShowCount) ? ' fadeIn' : ''}`} key={index}>
                                    <div className="home-news-wrapper-li-content poppins-font">
                                        <div className="home-news-wrapper-li-content-date poppins-font">
                                            {item.date}
                                        </div>
                                        <div className="home-news-wrapper-li-content-text" lang="en">
                                            {
                                                item.text.map((textItem: any, secondIndex: number) => {
                                                    if ('link' in textItem) {
                                                        return <a href={textItem.link} className={this.setClassName(textItem.type) + ' poppins-font'} key={index + "-text" + secondIndex}>
                                                            {textItem.content}
                                                        </a>
                                                    } else {
                                                        return <span className={this.setClassName(textItem.type) + ' poppins-font'} key={index + "-text" + secondIndex}>
                                                            {textItem.content}
                                                        </span>
                                                    }

                                                })
                                            }
                                            {
                                                item.optionButton?.map((buttonItem: {link?:string, label:string}, secondIndex: number) => {
                                                    return <a href={buttonItem.link} className="app-label poppins-font" key={index + "-button" + secondIndex}>
                                                        {buttonItem.label}
                                                    </a>
                                                })
                                            }
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="home-news-showButton">
                    <span className="home-news-showButton-text poppins-font" onClick={this.handleLoadMore}>
                        {
                            showCount >= allNewsList.length ? 'Nothing more' : 'Load More'
                        }
                    </span>
                </div>
            </section>
        )
    }
}