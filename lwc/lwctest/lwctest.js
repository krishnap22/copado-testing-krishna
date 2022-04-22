import { LightningElement ,track} from 'lwc';

export default class Lwctest extends LightningElement {

    @track greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }


}