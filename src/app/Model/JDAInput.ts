import {ClientInput} from './ClientInput';

export class JDAInput {
    clientInput: ClientInput;

    SumJDA = 12000;

    amount = [0.0];

    public getCurrentOnPermiseApplcatinDetail() {
        return this.clientInput.CurrentOnpremiseApplication;
    }
}
