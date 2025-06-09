import { Component } from 'react'
import './index.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import LOGO from '@/assets/img/logo-demo.png'
import LOGO from '@/assets/img/iic_logo.png'
import { IProps, IState } from './types'

class Top extends Component<IProps, IState> {
    lastScrollTop = 0; // 上一次滚动的scrollTop值
    scrollControlValue = 20;
    // scrollToNewsAnimation = null // 点击导航栏News滚动到对应位置的动画

    state = {
        isShow: true, // 滑动鼠标显示与隐藏导航栏
        enlarge: true, // 滑动到顶部时放大logo
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.hanleScroll)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.hanleScroll)
    }

    hanleScroll = () => {
        // 功能：当页面滚动时，改变导航栏的 显示/隐藏 状态，以及logo缩放

        let scrollTop = window.scrollY;

        // 缩放导航栏logo效果
        if (scrollTop <= this.scrollControlValue && this.state.enlarge === false) {
            this.setState({
                enlarge: true,
            });
        }
        if (scrollTop > this.scrollControlValue && this.state.enlarge === true) {
            this.setState({
                enlarge: false,
            });
        }

        if (scrollTop >= this.scrollControlValue + this.lastScrollTop) {
            // 向下滚动
            this.state.isShow && this.setState({
                isShow: false,
            });
            this.lastScrollTop = scrollTop;
        } else if (scrollTop < this.lastScrollTop - this.scrollControlValue) {
            !this.state.isShow && this.setState({
                isShow: true,
            });
            this.lastScrollTop = scrollTop;
        }
        // // 判断是否滚动到底部
        // if (scrollTop + clientHeight === scrollHeight) {
        //     console.log("滚动到底部");
        // }
    }

    toNews = () => {
        // 功能：点击导航栏News，跳转到首页News区域

        // 如果当前路由不是首页，先跳转到首页，再滚动到News的位置
        const { location } = this.props;
        const navigate = this.props.navigate as Function;
        const pathname = (location as {pathname:string}).pathname;
        const navigatePromise = pathname === '/' 
            ? Promise.resolve() 
            : new Promise(resolve => resolve(navigate('/'))); // navigate 是异步操作，jumpToNews是同步操作，此处必须用promise封装

        function jumpToNews(){
            // 功能：跳转到News区域

            // 获取News标题的DOM元素
            const NewsPosition = document.getElementsByClassName('home-news-header')[0];
            if(!NewsPosition) return ;
            // 计算NewsPosition相对于当前视口顶端的距离
            const distance = NewsPosition.getBoundingClientRect().top;
            if (distance > 0) {
                // 如果距离大于0，滚动到NewsPosition
                NewsPosition.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                window.scrollTo({
                    // distance + window.scrollY 是：NewsPosition相对于整个文档顶部的距离，包括那些被滚动出去的部分
                    // 减的100是顶部导航栏的高度（高度为95，直接取了100），不减的话和直接用NewsPosition.scrollIntoView一个效果
                    top: distance + window.scrollY - 100, 
                    behavior: 'smooth'
                });
            }
        }

        navigatePromise.then(()=> {
            jumpToNews();
        })
    }

    render() {
        let { isShow, enlarge } = this.state;
        return (
            <div className={`top${isShow ? '' : ' top-hidden'}${enlarge ? ' top-enlarge' : ''}`}>
                <div className="container">
                    <div className="top-container">
                        <div className='top-container-logo'>
                            <Link to="/">
                                <img className={`top-container-logo-img${enlarge ? ' top-container-logo-img-enlarge' : ''}`} src={LOGO} alt="logo"/>
                            </Link>
                        </div>
                        <div className="top-container-nav poppins-bold">
                            <Link className='top-container-nav-item' to="/">Home</Link>
                            <Link className='top-container-nav-item' to="/publication">Publications</Link>
                            <span className='top-container-nav-item' onClick={this.toNews}>News</span>
                            <Link className='top-container-nav-item' to="/member">Members</Link>
                            <Link className='top-container-nav-item' to="/seminar">Seminar</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function TopWithNavigate() {
    const navigate = useNavigate();
    const location = useLocation();
    return <Top navigate={navigate} location={location}/>
}