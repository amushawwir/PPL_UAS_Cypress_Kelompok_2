describe('Menguji fitur reset password', () => {
    // Data Login User
    const username = 'andimushawwir@gmail.com';
    const password = 'andi123';

    // Data Password Baru
    const newPassword = '123456';

    it('Field Password Baru Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('.btn').click()
    })

    it('Mengubah Password Baru', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('.form-control').type(newPassword)
        cy.get('.btn').click()
    })
})