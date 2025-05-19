import { Component } from 'react'
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
import Routes from '@/router'
import '@/App.scss'
import { Select } from 'antd';
import './font/font-select.scss';

export default class App extends Component {
    state = {
        font: 'Poppins',
    }
    onChange = (font: string) => {
        console.log(font);
        this.setState({ font })
    }

    render() {
        return (
            <div className={`app-layout ${this.state.font}`}>
                <Top />
                <div className="app-content">
                    <Routes />
                </div>
                <Bottom />
                <div className='app-lang-select'>
                    <Select
                        placeholder="选择页面字体"
                        onChange={this.onChange}
                        options={[
                            {
                                value: 'Poppins',
                                label: 'Poppins',
                            },
                            {
                                value: 'TimesNewRoman',
                                label: 'TimesNewRoman',
                            },
                            {
                                value: 'Arial',
                                label: 'Arial'
                            },
                            {
                                value: 'MicrosoftYaHei',
                                label: 'MicrosoftYaHei'
                            },
                            {
                                value: 'Lato',
                                label: 'Lato'
                            },
                            {
                                value: 'AtkinsonHyperlegible',
                                label: 'AtkinsonHyperlegible'
                            },
                            {
                                value: 'Helvetica',
                                label: 'Helvetica'
                            }
                        ]}
                    />
                </div>
            </div>

        )
    }
}