import PremiumSingleUser from '../fixtures/users/PremiumSingleUser.json'
import PremiumCompleteUser from '../fixtures/users/PremiumUser.json'
import PremiumCollectionUser from '../fixtures/users/PremiumCollectionUser.json'
import BasicUser from '../fixtures/users/BasicUser.json'
class User {

    //Locators:

    email;
    password;


    getPremiumSingleUser ()
    {
        var URL;
        switch (Cypress.env('environment')) {
            case 'dev':
                this.email = PremiumSingleUser.devUsers[0].email
                this.password = PremiumSingleUser.devUsers[0].password
                break;
            case 'stage':
                this.email = PremiumSingleUser.stageUsers[0].email
                this.password = PremiumSingleUser.stageUsers[0].password
                break; 
            case 'prod':
                this.email = PremiumSingleUser.prodUsers[0].email
                this.password = PremiumSingleUser.prodUsers[0].password
                break;
            default:
                throw new Error("The environment is not corect! Chose between: prod/stage/dev")
        }
    }  

    getPremiumCompleteUser ()
    {
        var URL;
        switch (Cypress.env('environment')) {
            case 'dev':
                this.email = PremiumCompleteUser.devUsers[0].email
                this.password = PremiumCompleteUser.devUsers[0].password
                break;
            case 'stage':
                this.email = PremiumCompleteUser.stageUsers[0].email
                this.password = PremiumCompleteUser.stageUsers[0].password
                break; 
            case 'prod':
                this.email = PremiumCompleteUser.prodUsers[0].email
                this.password = PremiumCompleteUser.prodUsers[0].password
                break;
            default:
                throw new Error("The environment is not corect! Chose between: prod/stage/dev")
        }
    }  

    getPremiumCollectionUser ()
    {
        var URL;
        switch (Cypress.env('environment')) {
            case 'dev':
                this.email = PremiumCollectionUser.devUsers[0].email
                this.password = PremiumCollectionUser.devUsers[0].password
                break;
            case 'stage':
                this.email = PremiumCollectionUser.stageUsers[0].email
                this.password = PremiumCollectionUser.stageUsers[0].password
                break; 
            case 'prod':
                this.email = PremiumCollectionUser.prodUsers[0].email
                this.password = PremiumCollectionUser.prodUsers[0].password
                break;
            default:
                throw new Error("The environment is not corect! Chose between: prod/stage/dev")
        }
    }

    getBasicUser ()
    {
        var URL;
        switch (Cypress.env('environment')) {
            case 'dev':
                this.email = BasicUser.devUsers[0].email
                this.password = BasicUser.devUsers[0].password
                break;
            case 'stage':
                this.email = BasicUser.stageUsers[0].email
                this.password = BasicUser.stageUsers[0].password
                break; 
            case 'prod':
                this.email = BasicUser.prodUsers[0].email
                this.password = BasicUser.prodUsers[0].password
                break;
            default:
                throw new Error("The environment is not corect! Chose between: prod/stage/dev")
        }
    }
}

export default User