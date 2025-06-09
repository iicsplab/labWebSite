import React, { Component } from 'react'
import './index.scss'
import { memberList } from '@/const/member'
import { debounce } from 'lodash-es'

// swiper学习资料：
// demo演示，可下载全部实例，看代码细节：https://swiper.com.cn/demo/index.html#effect-coverflow
// swiper的React版：https://swiperjs.com/react#installation
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/autoplay'

export default class Members extends Component {
    swiperRef = React.createRef<SwiperRef>();
    debounceResize = () => { };

    state = {
        slidesPerView: 4.826, // 初始化一个合理值
    }

    componentDidMount() {
        this.handleResize()
        // 添加定时器，slidesPerView随swiperWidth改变而改变
        this.debounceResize = debounce(this.handleResize, 200);
        window.addEventListener('resize', this.debounceResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.debounceResize)
    }

    handleResize = () => {
        if (!this.swiperRef.current) return;
        // 设置正确的slidesPerView
        const swiperWidth = this.swiperRef.current.swiper.el.clientWidth;
        const slidesPerView = swiperWidth / 230.0;
        this.setState({ slidesPerView })
    }

    render() {
        const members = memberList.reduce<any[]>((pre, cur) => pre.concat(cur.member), [])
        const { slidesPerView } = this.state;
        return (
            <section className='home-member'>
                <h2 className='home-member-header header-font'>Members</h2>
                <div className='home-member-wrapper'>
                    <Swiper
                        ref={this.swiperRef}
                        modules={[EffectCoverflow, Autoplay]}
                        effect="coverflow" // 不设置effect="coverflow"时为默认轮播模式
                        grabCursor={true}
                        // spaceBetween={50}
                        slidesPerView={slidesPerView} // 这个值需要等于swiper的宽度除以每个swiper-slide的宽度（在css定义中为230px）
                        // loop={true}
                        // centeredSlides={true}
                        autoplay={{ delay: 2300 }}
                        coverflowEffect={{
                            rotate: 23,
                            stretch: 0,
                            depth: 140,
                            modifier: 1,
                            slideShadows: false,
                            scale: 1,
                        }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => swiper.autoplay.start()}
                    >
                        {members.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.photo} alt="" />
                                <p>{item.name}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        )
    }
}