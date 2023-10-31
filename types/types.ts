// 프로젝트 전체의 타입 관련 작성

export interface UIComponentsType {
    id?: string;
    className?: string;
    children?: React.ReactNode
}

export interface ButtonComponentsType {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void
}
