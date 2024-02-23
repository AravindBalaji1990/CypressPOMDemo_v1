import homePage from "../page/homePage";
import signIn from "../page/signIn";

describe('Handling autocomplete', function() {
    it('Should login to inventory page',()=>{
        const url = Cypress.env('url');
        cy.visit(url)
        homePage.clickOnSignin();
        signIn.clickArrowUsername();
     cy.fixture('example').then(function(testdata){
        signIn.verifyUsernameTextbox(testdata.username);
    }) 

    signIn.clickonPassword()
        
        // cy.login("fav_user","testingisfun99")
    })
})
