class homePage{
    // define object 
    elements = {
loginbtn :() =>cy.get("#signin"),
logoffbtn :() => cy.get("#logout"),
applebtn :() => cy.get("input[value='Apple']+span")
    }

    // I create a function -> this will click the login button
    // this function will exhibit what action i need to do on the locator
    clickOnSignin(){
        this.elements.loginbtn().click()
    }

    clickOnSignOff(){
        this.elements.logoffbtn().click()
    }

    clickOnAppleButton(){
        this.elements.applebtn().click()
    }
}
module.exports = new homePage();