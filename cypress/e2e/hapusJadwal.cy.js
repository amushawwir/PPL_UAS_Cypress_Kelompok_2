describe('Menguji fitur hapus jadwal', () => {
    // Data Login User
    const username = 'adminAndi@gmail.com';
    const password = '123456';

    it('Menghapus jadwal ', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(3) > a').click()
        cy.get('[href="http://localhost:8000/admin/delete/camp/4"]').click()
    })
})