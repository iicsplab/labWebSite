// 首页面News相关信息
// 如需修改，请仔细注意如下数据格式：
// [
//     {
//         date: 'Dec 2024',
//         text: [
//             // 最终展示的文本为text数组中，所有对象中content属性的拼接
//             {
//                 // 有效type为：normal、strong、red、blue、underline及其组合，type必须为字符串或数组类型
//                 // 如 type: 'normal', 表示正常字体
//                 // type: ['blue', 'underline'], 表示带下划线的蓝色字体
//                 type: 'normal',
//                 content: 'A new eavesdropping work ',
//             },{
//                 type: ['red', 'underline'],
//                 content: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection',
//                 // 可为content设置link
//                 link: 'https://ieeexplore.ieee.org/document/10621338',
//             },{
//                 type: 'normal',
//                 content: ' was published in ',
//             },{
//                 type: 'strong',
//                 content: 'INFOCOM 2024',
//             },{
//                 type: 'normal',
//                 content: '. EchoLight is a novel optical eavesdropping method that recovers sound from ambient light reflections off vibrating surfaces. This ',
//             },{
//                 type: 'blue',
//                 content: 'non-invasive, long-range, passive attack ',
//             },{
//                 type: 'normal',
//                 content: 'offers high concealment and unlimited vocabulary.'
//             }
//         ],
//         // optionButton为最后的按钮，允许不设置按钮
//         optionButton: [
//             {
//                 label: 'PDF',
//                 link: 'www.baidu.com',
//             },{
//                 label: 'WebSite',
//                 link: 'www.baidu.com',
//             },{
//                 label: 'Video',
//                 link: 'www.baidu,com',
//             },{
//                 label: 'Code',
//                 link: 'www.baidu,com',
//             },{
//                 label: '可任意自定义label名称',
//                 link: '',
//             }
//         ]
//     },
// ]


export const newsList = [
    {
        date: '2025 Mar',
        text: [
            {
                content: 'Congratulations to Guoming Zhang, Zhijie Xiang, Heqiang Fu for publishing the paper titled '
            },{
                content: '"EchoLight: Sound Eavesdropping based on Environmental Light Reflection" ',
                type: ['strong']
            },{
                content: 'at the INFOCOM 2024 conference.'
            }
        ]
    },{
        date: 'Feb 2025',
        text: [
            {
                content: 'Congratulations to Guoming Zhang, Zhijie Xiang, Heqiang Fu presented an academic paper titled '
            },{
                content: '"EchoLight: Sound Eavesdropping based on Environmental Light Reflection Light Reflection" ',
                type: ['red', 'underline', 'strong'],
                link: 'https://ieeexplore.ieee.org/document/10621338',
            },{
                content: 'at the '
            },{
                content: 'INFOCOM 2024 ',
                type: 'strong'
            },{
                content: 'conference, focusing on the research area of perceptual security optical eavesdropping.'
            }
        ]
    },{
        date: 'May 2024',
        text: [
            {
                type: 'normal',
                content: 'A new eavesdropping work ',
            },{
                type: ['red', 'underline', 'strong'],
                content: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection',
                link: 'https://ieeexplore.ieee.org/document/10621338',
            },{
                type: 'normal',
                content: ' was published in ',
            },{
                type: 'strong',
                content: 'INFOCOM 2024',
            },{
                type: 'normal',
                content: '. This ',
            },{
                type: ['blue', 'strong'],
                content: 'non-invasive, long-range, passive attack ',
            },{
                type: 'normal',
                content: 'offers high concealment and unlimited vocabulary.'
            }
        ],
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            },{
                label: 'WebSite',
                link: 'https://www.baidu.com',
            },{
                label: 'Video',
                link: 'https://www.baidu.com',
            },{
                label: 'Code',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        date: 'Jan 2024',
        text: [
            {
                type: 'normal',
                content: 'A new eavesdropping work ',
            },{
                type: ['red', 'strong'],
                content: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection',
            },{
                type: 'normal',
                content: ' was published in ',
            },{
                type: 'strong',
                content: 'INFOCOM 2024.',
            }
        ],
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            },{
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        date: 'Jan 2024',
        text: [
            {
                type: 'normal',
                content: 'EchoLight is a novel optical eavesdropping method that recovers sound from ambient light reflections off vibrating surfaces. ',
            },
        ],
        optionButton: [
            {
                label: 'xxx',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        date: 'Jan 2024',
        text: [
            {
                type: ['red', 'underline', 'strong'],
                content: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection',
            },{
                type: 'normal',
                content: ' was published in ',
            },{
                type: 'strong',
                content: 'INFOCOM 2024',
            },{
                type: 'normal',
                content: '. EchoLight is a novel optical eavesdropping method that recovers sound from ambient light reflections off vibrating surfaces. This ',
            },{
                type: ['blue', 'strong'],
                content: 'non-invasive, long-range, passive attack ',
            },{
                type: 'normal',
                content: 'offers high concealment and unlimited vocabulary.'
            }
        ],
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            },{
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        date: 'Jan 2024',
        text: [
            {
                type: 'normal',
                content: 'A new eavesdropping work ',
            },{
                type: ['red', 'underline', 'strong'],
                content: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection',
            },{
                type: 'normal',
                content: ' was published in ',
            },{
                type: 'strong',
                content: 'INFOCOM 2024',
            },{
                type: 'normal',
                content: '. EchoLight is a novel optical eavesdropping method that recovers sound from ambient light reflections off vibrating surfaces. This ',
            },{
                type: ['blue', 'strong'],
                content: 'non-invasive, long-range, passive attack ',
            },{
                type: 'normal',
                content: 'offers high concealment and unlimited vocabulary.'
            }
        ],
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            },{
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        date: 'Jan 2024',
        text: [
            {
                type: 'normal',
                content: 'A new eavesdropping work ',
            },{
                type: ['red', 'underline', 'strong'],
                content: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection',
            },{
                type: 'normal',
                content: ' was published in ',
            },{
                type: 'strong',
                content: 'INFOCOM 2024',
            },{
                type: 'normal',
                content: '. EchoLight is a novel optical eavesdropping method that recovers sound from ambient light reflections off vibrating surfaces. This ',
            },{
                type: ['blue', 'strong'],
                content: 'non-invasive, long-range, passive attack ',
            },{
                type: 'normal',
                content: 'offers high concealment and unlimited vocabulary.'
            }
        ],
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            },{
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        date: 'Jan 2024',
        text: [
            {
                type: 'normal',
                content: 'A new eavesdropping work ',
            },{
                type: ['red', 'underline', 'strong'],
                content: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection',
            },{
                type: 'normal',
                content: ' was published in ',
            },{
                type: 'strong',
                content: 'INFOCOM 2024',
            },{
                type: 'normal',
                content: '. EchoLight is a novel optical eavesdropping method that recovers sound from ambient light reflections off vibrating surfaces. This ',
            },{
                type: ['blue', 'strong'],
                content: 'non-invasive, long-range, passive attack ',
            },{
                type: 'normal',
                content: 'offers high concealment and unlimited vocabulary.'
            }
        ]
    }
]