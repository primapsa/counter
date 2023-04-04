import CounterView from "./CounterView";

export type CounterViewPropsType = {
    counterValue: number;
    limit: number
}
export type ButtonPropsType = {
    name: string;
    isDisabled: boolean;
    callback: () => void;
}