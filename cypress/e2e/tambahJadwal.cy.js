describe('Menguji fitur tambah jadwal', () => {
    // Data Login User
    const username = 'adminAndi@gmail.com';
    const password = '123456';

    // Data Tambah Jadwal
    const rumahSakit = 'RS Universitas Brawijaya';
    const kota = 'Malang';
    const kecamatan = 'Lowokwaru';
    const alamat = 'Jl. Soekarno Hatta';
    const jadwalMulai = '2022-12-14T14:25';
    const jadwalSelesai = '2022-12-15T10:50';

    it('Form Inputan Terisi Sempurna', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(2) > .form-control').type(rumahSakit)
        cy.get(':nth-child(3) > .form-control').type(kota)
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').type(alamat)
        cy.get('#start').type(jadwalMulai)
        cy.get('#end').type(jadwalSelesai)
        cy.get('.btn').click({ force: true })
    })

    it('Semua Form Inputan Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get('.btn').click({ force: true })
    })

    it('Field Rumah Sakit Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(3) > .form-control').type(kota)
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').type(alamat)
        cy.get('#start').type(jadwalMulai)
        cy.get('#end').type(jadwalSelesai)
        cy.get('.btn').click({ force: true })
    })

    it('Field Kota Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(2) > .form-control').type(rumahSakit)
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').type(alamat)
        cy.get('#start').type(jadwalMulai)
        cy.get('#end').type(jadwalSelesai)
        cy.get('.btn').click({ force: true })
    })

    it('Field Kecamatan Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(2) > .form-control').type(rumahSakit)
        cy.get(':nth-child(3) > .form-control').type(kota)
        cy.get(':nth-child(5) > .form-control').type(alamat)
        cy.get('#start').type(jadwalMulai)
        cy.get('#end').type(jadwalSelesai)
        cy.get('.btn').click({ force: true })
    })

    it('Field Alamat Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(2) > .form-control').type(rumahSakit)
        cy.get(':nth-child(3) > .form-control').type(kota)
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get('#start').type(jadwalMulai)
        cy.get('#end').type(jadwalSelesai)
        cy.get('.btn').click({ force: true })
    })

    it('Field Waktu Mulai Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(2) > .form-control').type(rumahSakit)
        cy.get(':nth-child(3) > .form-control').type(kota)
        cy.get(':nth-child(5) > .form-control').type(alamat)
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get('#end').type(jadwalSelesai)
        cy.get('.btn').click({ force: true })
    })

    it('Field Waktu Selesai Tidak Terisi', () => {
        cy.visit('http://localhost:8000/')
        cy.visit('http://localhost:8000/login')
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(username)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(2) > .form-control').type(rumahSakit)
        cy.get(':nth-child(3) > .form-control').type(kota)
        cy.get(':nth-child(5) > .form-control').type(alamat)
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get('#start').type(jadwalMulai)
        cy.get('.btn').click({ force: true })
    })


})