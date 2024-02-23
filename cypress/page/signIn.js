/// <reference types="Cypress" />

class signin{
    // I do the identificaiton of locators
    elements = {
        usernametxt :() =>cy.get("#username"),
        passwordtxt :() =>cy.get("#password"),
        arrowusername :() =>cy.get('#username .css-tlfecz-indicatorContainer'),
        arrowpassword :() =>cy.get('#password .css-tlfecz-indicatorContainer'),
        username :() => cy.get("#username > .css-yk16xz-control > .css-1hwfws3"),
        usernamelist :() => cy.get("#username>div[class$='control'] div[class$='-menu']")
            }

// The action ont he locators
            verifyUsernameTextbox(username){
                this.elements.usernametxt().should('be.visible').type(username)
                // this.elements.usernamelist().should('be.visible')
            }

            clickArrowUsername(){
                this.elements.arrowusername().should('be.visible')
            }
            clickonPassword(){
                this.elements.passwordtxt().should('be.visible').click()

            }
}
module.exports = new signin();