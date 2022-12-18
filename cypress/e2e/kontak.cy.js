describe('Menguji fitur pengajuan pertanyaan kontak', () => {

    // Data Kontak atau Pertanyaan
    const nama = 'Andi Mushawwir Rahmat';
    const email = 'andimushawwir@gmail.com';
    const email1 = 'andimushawwir.gmail.com';
    const pesan = 'test1'

    it('Form Inputan Terisi Sempurna', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(6) > a').click()
        cy.get(':nth-child(2) > #input-field > .form-control').type(nama)
        cy.get(':nth-child(3) > #input-field > .form-control').type(email)
        cy.get(':nth-child(4) > #input-field > .form-control').type(pesan)
        cy.get('.btn').click()
    })

    it('Semua Form Inputan Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(6) > a').click()
        cy.get('.btn').click()
    })

    it('Field Nama Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(6) > a').click()
        cy.get(':nth-child(3) > #input-field > .form-control').type(email)
        cy.get(':nth-child(4) > #input-field > .form-control').type(pesan)
        cy.get('.btn').click()
    })

    it('Field Email Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(6) > a').click()
        cy.get(':nth-child(2) > #input-field > .form-control').type(nama)
        cy.get(':nth-child(4) > #input-field > .form-control').type(pesan)
        cy.get('.btn').click()
    })

    it('Field Email Tidak Menggunakan @', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(6) > a').click()
        cy.get(':nth-child(2) > #input-field > .form-control').type(nama)
        cy.get(':nth-child(3) > #input-field > .form-control').type(email1)
        cy.get(':nth-child(4) > #input-field > .form-control').type(pesan)
        cy.get('.btn').click()
    })

    it('Field Pesan Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(6) > a').click()
        cy.get(':nth-child(2) > #input-field > .form-control').type(nama)
        cy.get(':nth-child(3) > #input-field > .form-control').type(email)
        cy.get('.btn').click()
    })



})