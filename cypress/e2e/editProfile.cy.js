describe('Menguji fitur edit profile', () => {
    // Data Login User
    const username = 'andimushawwir@gmail.com';
    const password = '123456';

    // Data Edit Profile
    const nama = 'Andi Abdul Mushawwir';
    const umur = '30';
    const beratBadan = '75';
    const alamatRumah = 'Jalan Paus No.286k';
    const kelurahan = 'Merjosari';
    const kecamatan = 'Lowokwaru';
    const kota = 'Malang';
    const nomorHp = '0836573823';
    const terakhirDonor = '2022 - 11 - 29 T06: 10';


    it('Mengubah Semua Field', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get(':nth-child(2) > #input-field > .form-control').clear()
        cy.get(':nth-child(3) > #input-field > .form-control').clear()
        cy.get('.input-group > .form-control').clear()
        cy.get(':nth-child(5) > #input-field > .form-control').clear()
        cy.get(':nth-child(6) > #input-field > .form-control').clear()
        cy.get(':nth-child(7) > #input-field > .form-control').clear()
        cy.get(':nth-child(8) > #input-field > .form-control').clear()
        cy.get('#phone').clear()
        cy.get('#datetimepicker').clear()
        cy.get('.confirm').click()
        cy.get(':nth-child(2) > #input-field > .form-control').type(nama)
        cy.get(':nth-child(3) > #input-field > .form-control').type(umur)
        cy.get('.input-group > .form-control').type(beratBadan)
        cy.get(':nth-child(5) > #input-field > .form-control').type(alamatRumah)
        cy.get(':nth-child(6) > #input-field > .form-control').type(kelurahan)
        cy.get(':nth-child(7) > #input-field > .form-control').type(kecamatan)
        cy.get(':nth-child(8) > #input-field > .form-control').type(kota)
        cy.get('#phone').type(nomorHp)
        cy.get('#datetimepicker').type(terakhirDonor)
        cy.get('.btn').click({ force: true })
    })

    it('Field Nama Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get(':nth-child(2) > #input-field > .form-control').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Umur Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get(':nth-child(3) > #input-field > .form-control').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Berat Badan Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get('.input-group > .form-control').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Alamat Rumah Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get(':nth-child(5) > #input-field > .form-control').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Kelurahan Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get(':nth-child(6) > #input-field > .form-control').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Kecamatan Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get(':nth-child(7) > #input-field > .form-control').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Kota Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get(':nth-child(8) > #input-field > .form-control').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Nomor Handphone Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get('#phone').clear()
        cy.get('.btn').click({ force: true })
    })

    it('Field Terakhir Donor Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get('#datetimepicker').clear()
        cy.get('.btn').click({ force: true })
    })





})