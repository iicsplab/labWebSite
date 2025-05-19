import { Component } from "react";
import { Link } from "react-router-dom";
import './index.scss';
import { Iprops, Istate } from './types'

export default class Header extends Component<Iprops, Istate> {
    static defaultProps = {
        title: "默认标题",
        hasMore: false,
    };

    render() {
        const { title, hasMore, to } = this.props;
        return (
            <div className="tool-header">
                <h5 className="tool-header-title">{title}</h5>
                <div className="tool-header-line"></div>
                {
                    hasMore && (
                        <Link className="tool-header-more" to={to as string}>
                            <svg className="tool-header-more-label" viewBox="0 0 1228 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27150" width="16" height="16"><path d="M1202.308458 468.696517L713.233831 20.378109c-20.378109-20.378109-61.134328-20.378109-81.512438 0-20.378109 20.378109-20.378109 50.945274 0 81.512438l448.318408 407.562189-448.318408 417.751244c-20.378109 20.378109-20.378109 50.945274 0 81.512438 20.378109 20.378109 61.134328 20.378109 81.512438 0l489.074627-458.507463c10.189055-10.189055 20.378109-30.567164 20.378109-40.756219s-10.189055-30.567164-20.378109-40.756219zM101.890547 20.378109C81.512438 0 40.756219 0 20.378109 20.378109 0 40.756219 0 71.323383 20.378109 101.890547l448.318408 407.562189L20.378109 927.20398c-20.378109 20.378109-20.378109 50.945274 0 81.512438 20.378109 20.378109 61.134328 20.378109 81.512438 0l489.074627-458.507463c10.189055-10.189055 20.378109-30.567164 20.37811-40.756219s-10.189055-30.567164-20.37811-40.756219L101.890547 20.378109z" p-id="27151" fill="#1296db"></path></svg>
                            <span className="tool-header-more-text">查看更多</span>
                        </Link>
                    )
                }

            </div>
        )
    }
}