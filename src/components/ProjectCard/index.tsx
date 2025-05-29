import { Component } from 'react'
import './index.scss'
import { IProps, IState } from './types'
import { Modal } from "antd";
import { motion } from 'motion/react'

export default class ProjectCard extends Component<IProps, IState> {
    state = {
        isModalOpen: false,
    }

    handleClickImg = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    handleClose = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    handleClickTitle = (e: any, link: any) => {
        // 如果link为空或undefined，则阻止默认事件，不跳转到<a>对应的href地址
        if (!link) e.preventDefault();
    }

    render() {
        const {
            imgPath,
            title,
            publication,
            year,
            simplifiedAbstract,
            detailedAbstract,
            link,
            authors
        } = this.props;
        const { isModalOpen } = this.state;
        return (
            <div className="home-project-card">
                <motion.div className="home-project-card-imgbox" onClick={this.handleClickImg}
                    variants={{
                        opened: { scale: 1 },
                        closed: { scale: 0.6 }
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeOut'
                    }}
                    whileHover={{
                        scale: 1.05,
                        transition: {
                            duration: 0.25,
                        }
                    }}
                >
                    <img className='home-project-card-imgbox-img' src={imgPath} alt="论文图片" />
                </motion.div>
                <div className="home-project-card-article">
                    <a className='home-project-card-article-title poppins-bold' href={`${link || ''}`} onClick={(e) => this.handleClickTitle(e, link)}>{title}</a>
                    {/* publication前加一个空格，防止标题恰好占满最后一行，导致标题最后一个词和publication一起换行 */}
                    <span className='home-project-card-article-info poppins-font'> {`${publication || ''} ${year || ''}`}</span>
                </div>
                <p className='home-project-card-simpAbs poppins-font'>{`${simplifiedAbstract || ''}`}</p>
                <Modal
                    open={isModalOpen}
                    onCancel={this.handleClose} // 用于点击遮罩时关闭
                    closable={false}
                    width={1024}
                    centered={true}
                    footer={(
                        <div className='home-project-card-modal-footer'>
                            <a className="app-label poppins-font home-project-card-modal-footer-btn" href={`${link || ''}`} onClick={(e) => this.handleClickTitle(e, link)}>more</a>
                            <a className="app-label poppins-font home-project-card-modal-footer-btn" onClick={this.handleClose}>close</a>
                        </div>
                    )}
                >
                    <div className='home-project-card-modal-body'>
                        <div className="home-project-card-modal-body-imgbox">
                            <img className='home-project-card-modal-body-imgbox-img' src={imgPath} alt="论文图片" />
                        </div>
                        <p className='home-project-card-modal-body-title poppins-bold'>{title}</p>
                        <p className='home-project-card-modal-body-info poppins-font'>{`${publication || ''} ${year || ''}`}</p>
                        <p className='home-project-card-modal-body-authors poppins-font'>{`${authors || ''}`}</p>
                        <p className='home-project-card-modal-body-detailAbs poppins-font'>{`${detailedAbstract || ''}`}</p>
                    </div>
                </Modal>
            </div>
        )
    }
}