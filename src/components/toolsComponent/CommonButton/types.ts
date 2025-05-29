// export interface IProps {
//     isLink: {
//         type: boolean;
//         default: false;
//     };
//     children: string;
//     // 如果isLink为true，则必须有to属性
//     handleOnClick?: {
//         type: () => void;
//         default: () => void;
//     };
// }

interface IPropsBase {
    children: string;
    handleOnClick?: () => void;
}

interface IPropsWithoutLink extends IPropsBase {
    isLink?: false;
}

interface IPropsWithLink extends IPropsBase {
    isLink: true;
    to: string;
}

export type TProps = IPropsWithoutLink | IPropsWithLink;