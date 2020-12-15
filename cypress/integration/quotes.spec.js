// write tests here
describe("These are sample tests", () => {
    // function that runs test
    it("Renders our page to the screen" , () => {
        cy.visit("http://localhost:1234");
    });
    it("Makes a simple assertion", () => {
        // Assertion
       cy.get(".text-class")
    })
})

describe("Filling out and cancelling inputs", () =>{
    beforeEach(() => {
        cy.visit("http://localhost:1234");

    })
    it("Can navigate to the proper site", () => {
        cy.url().should("include", "localhost");
    })

    it("Can type in the inputs", () => {
        cy.get("[data-cy=text-input]")
        .should("have.value", "")
        .type("You miss 100% of the shots you don't take - Wayne Gretzky");

        cy.get('[name="author"]')
        .should("have.value", "")
        .type("Michael Scott")
        .should("have.value", "Michael Scott")
    })
})