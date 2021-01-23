import { LightningElement, api } from 'lwc';


export default class Profile extends LightningElement {
    @api title;
    @api author;
    @api description;
    @api url;
    @api demo;

}
