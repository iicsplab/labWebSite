import { Component } from 'react'
import './index.scss'
import News from './components/News'
import Project from './components/Project'
import Members from './components/Members'
import { baseData } from '@/const/base'
import DoubleParallaxText from '@/components/toolsComponent/DoubleParallaxText'

export default class Home extends Component {

    state = {
        publicationInfo: [],
        newsInfo: [],
    }



    render() {
        return (
            <div className="home">
                <div className="container">
                    {/* 首页实验室介绍 */}
                    <section className="home-intro">
                        <div className="home-intro-main">
                            <h1 className='home-intro-main-title header-font'>Research Groups</h1>
                            <p className='home-intro-main-content poppins-font'>{baseData.labIntroduction}</p>
                            {
                                baseData.labIntroduction_extra.map((extraInfo: any, index: number) =>
                                    <p className='home-intro-main-info poppins-bold' key={index}>
                                        {extraInfo}
                                    </p>
                                )
                            }
                        </div>
                        <div className="home-intro-img">
                            <div className="home-intro-img-wrapper home-intro-img-wrapper1">
                                <img src={baseData.Introduction_img[0]} alt="" className='home-intro-img-wrapper-img' />
                            </div>
                            <div className="home-intro-img-wrapper home-intro-img-wrapper2">
                                <img src={baseData.Introduction_img[1]} alt="" className='home-intro-img-wrapper-img' />
                            </div>
                            <div className="home-intro-img-wrapper home-intro-img-wrapper3">
                                <img src={baseData.Introduction_img[2]} alt="" className='home-intro-img-wrapper-img' />
                            </div>
                        </div>
                    </section>

                    <DoubleParallaxText
                        text={['IIC SPLAB IIC SPLAB', 'REAL SP LAB']}
                    />

                    {/* 首页new区 */}
                    <News />

                    {/* 首页Project区 */}
                    <Project />


                    <Members />
                </div>
            </div >
        )
    }



}