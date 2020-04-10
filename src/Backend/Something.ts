import { SomethingData } from "./../Common/SomethingData";

export class Something {


    static GetSomethings () :SomethingData[]
    {
        let somethings = [new SomethingData(11, "once"), new SomethingData(12, "doce")];
        return somethings;
    }

}