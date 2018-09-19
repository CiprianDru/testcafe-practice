import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.nameInput = Selector('#developer-name');
    }
}
