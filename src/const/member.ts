// Member相关信息
// 如需修改，请仔细注意如下数据格式：
// 在此修改数据，会同时修改“Member页成员列表”和“首页面Member列表”
// {
//     label: 'Faculty', // 页面中 每一类人员的标题
//     member: [
//         {
//             photo: zgm, // 照片 需import导入
//             name: 'Guoming Zhang',
//             link: 'https://realzgm.github.io/', // 点击photo和name时跳转的链接
//             // mainText为主要文本，具体样式参考页面
//             // 其类型支持“字符串”或“数组”，如有多个文本必须用数组类型，如只有一个文本，字符串或数组类型均可
//             mainText: '助理教授', // ['助理教授'],
//             // secondaryText为次要文本，具体样式参考页面
//             // 支持的类型与mainText相同
//             secondaryText: ['Email: guomingzhang@sdu.edu.cn', 'Web: https://realzgm.github.io/', '研究兴趣: 物联网安全，机器学习安全，移动感知'],
//             tip: '住手！' // 拖拽头像时显示的文本
//         }
//     ]
// }
// 
// 允许不设置link、mainText和secondaryText

// 引入所需的图片
import zgm from '@/assets/member/zgm.jpg'
import fhq from '@/assets/member/fhq.jpg'
import mxh from '@/assets/member/mxh.jpg'
import xzj from '@/assets/member/xzj.jpg'

export const memberList = [
    {
        label: 'Faculty',
        member: [
            {
                photo: zgm,
                name: '张国明',
                link: 'https://realzgm.github.io/',
                mainText: ['副教授'],
                secondaryText: ['Email: guomingzhang@sdu.edu.cn', 'Web: https://realzgm.github.io/', '研究兴趣: 物联网安全，机器学习安全，移动感知'],
                tip: '欢迎加入我的团队！',
                tipColor: '#48466d'
            }
        ]
    }, {
        label: 'Ph.D. Students',
        member: [
            {
                photo: fhq,
                name: '傅鹤强',
                mainText: ['研究兴趣: 物联网安全'],
                tip: '住手！',
                tipColor: '#00b8a9'
            }
        ]
    }, {
        label: 'Master Students',
        member: [
            {
            //     photo: xzj,
            //     name: '王嘉豪'
            // },{
            //     photo: mxh,
            //     name: '马晓慧'
            // },{
            //     photo: xzj,
            //     name: '相志杰'
            // },{
                photo: fhq,
                name: '张慧婷',
                mainText: '感知安全',
                tip: '住手！',
                tipColor: '#48466d'
            },{
                photo: mxh,
                name: '王思博',
                mainText: '感知安全',
                tip: '住手！',
                tipColor: '#88304e'
            },{
            //     photo: fhq,
            //     name: '傅鹤强'
            // },{
                photo: xzj,
                name: '高宁',
                tip: '住手！',
                tipColor: '#c7f130'
            },{
                photo: fhq,
                name: '鲁镇维',
                mainText: '研究兴趣: 感知安全',
                tip: '住手！',
                tipColor: '#3f72af'
            },{
                photo: mxh,
                name: '高鑫',
                tip: '住手！',
                tipColor: '#ff2e63'
            },{
                photo: xzj,
                name: '某某某',
                secondaryText: '研究兴趣: 感知安全',
                tip: '住手！',
                tipColor: '#08d9d6'
            },{
                photo: fhq,
                name: '某某某',
                tip: '住手！',
                tipColor: '#f9ed69'
            }
        ]
    }, {
        label: 'Alumni',
        member: [
            {
                photo: xzj,
                name: '王嘉豪',
                mainText: '毕业去向：亚利桑那大学博士',
                tip: '住手！',
                tipColor: '#f08a5d'
            },{
                photo: mxh,
                name: '马晓慧',
                mainText: '毕业去向：山东省选调生',
                tip: '住手！',
                tipColor: '#b83b5e'
            },{
                photo: xzj,
                name: '相志杰',
                mainText: '毕业去向：美团',
                tip: '我毕业了别戳我',
                tipColor: '#6a2c70'
            }
        ]
    }
]