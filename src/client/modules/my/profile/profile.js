import { LightningElement } from 'lwc';
import { routeMeTo } from 'my/routerModule';


export default class Profile extends LightningElement {
    mywork(){
        routeMeTo('mywork', {}, {});
    }
}
