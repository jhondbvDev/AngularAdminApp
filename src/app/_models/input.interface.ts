
export interface IInput {

    id:number;
    description:string;
    quantity:number
}

export interface IInputs extends Array<IInput>{
    id:number;
    description:string;
    quantity:number
}