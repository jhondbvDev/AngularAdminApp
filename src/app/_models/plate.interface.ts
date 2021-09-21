import { inputPlate } from "./input_plate.interface";


export interface IPlate{
    id:number;
    description:string;
    name:string;
    price:number;
    inputs:Array<inputPlate>;
}

export interface IPlates extends Array<IPlate>{
    id:number;
    description:string;
    name:string;
    price:number;
    inputs:Array<inputPlate>;
}