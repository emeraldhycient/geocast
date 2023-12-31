export interface TButtonProps {
    title?: string,
    onPress?: () => void,
    children?: any,
    style?: any,
    bg?: string,
    color?: string,
    h?: number | string,
    w?: number | string,
    m?: number | string,
    mr?: number | string,
    ml?: number | string,
    mb?: number | string,
    mt?: number | string,
    p?: number | string,
    pt?: number | string,
    pb?: number | string,
    pr?: number | string,
    pl?: number | string,
    br?: number
}

export interface TCustomHeader {
    title?: string,
    leftIcon?: any,
    rightIcon?: any,
    onLeftPress?: () => void,
    onRightPress?: () => void,
    headerStyle?: any,
    titleStyle?: any
}