export interface IProps {
    navigate: object,
    location: object,
}

export interface IState {
    isShow: boolean, // 滑动鼠标显示与隐藏导航栏
    enlarge: boolean, // 滑动到顶部时放大logo
    [propName: string]: any,
}