export interface IProps {
    imgPath: any,
    title: string,
    publication?: string,
    year?: number,
    simplifiedAbstract?: string,
    detailedAbstract?: string,
    link?: string,
    authors?: string,
}

export interface IState {
    [propName: string]: any
}