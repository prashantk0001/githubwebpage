import { LightningElement, track } from 'lwc';


/*
{
    author: 'Prashant Kashyap',
    title : '',
    description: '',
    url: ''
}
*/

export default class Profile extends LightningElement {
    @track projects = [
        {
            author: 'Prashant Kashyap',
            title : 'lwc-redux',
            description: 'This package is implementation of Redux which is a predictable state container for JavaScript apps, with LWC',
            url: 'https://github.com/prashantk0001/lwc-redux'
        },
        {
            author: 'Prashant Kashyap',
            title : 'lwc-router',
            description: 'Basic Router For Standalone LWC Single Page Application, can be used with LWC standalone applications and LWC OSS, even this page boasts it ;)',
            url: 'https://github.com/prashantk0001/lwc-router'
        },
        {
            author: 'Prashant Kashyap',
            title : 'lwc-switch-expressions',
            description: 'Switch Case implementation for LWC, closest reusable alternative for rendering multiple components dynamically!',
            url: 'https://github.com/prashantk0001/lwc-switch-expressions'
        },
        {
            author: 'Prashant Kashyap',
            title : 'lwc-if-expressions',
            description: 'Inline js expressions for conditional rendering in LWC!',
            url: 'https://github.com/prashantk0001/lwc-if-expressions'
        },
        {
            author: 'Prashant Kashyap',
            title : 'Salesforce-Test-Utility',
            description: 'Chrome extension built to support productivity by providing easy access to Apex testing utilities.',
            url: 'https://github.com/prashantk0001/Salesforce-Test-Utility',
            demo : 'https://chrome.google.com/webstore/detail/salesforce-test-class-uti/dnihcohcnpedkecefajbjkajnklppbjn'
        }
    ]
}
