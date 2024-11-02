// function formatRibuan(angka) {
//     let str = angka.toString()
//     let hasil = ''
//     let counter = 0

//     for (let i = str.length - 1; i >= 0; i--) {
//         hasil = str[i] + hasil
//         counter++

//         if (counter % 3 === 0 && i !== 0){
//             hasil = '.' + hasil
//         }
//     }
//     return hasil
// }

function formatAngka(angka){
    return new Intl.NumberFormat('id-ID', {minimumFractionDigits: 0}).format(angka) //format angka dengan titik
}

// function formatInputAngka() {
//     let value = input.value.replace(/,/g, '')

//     if(!isNaN(value) && value.length > 0) {
//         input.value = parseFloat(value).toLocaleString('en-US')
//     }
//     else {
//         input.value = ''
//     }

// }

function showText() {
    var hiddenText = document.getElementById('output-hide')
    if (hiddenText.style.visibility === "hidden" || hiddenText.style.visibility === "") {
        hiddenText.style.visibility = "visible";
    } else {
        hiddenText.style.visibility = "hidden";
    }
}

// Penyederhanaan Akar
function penyederhanaanAkar () {
    let inputAkar = document.getElementById('inputakar')
    let angka = parseFloat(inputAkar.value)
    let output = document.getElementById('output')
    let output1 = document.getElementById('output-akar1')
    let output2 = document.getElementById('output-akar2')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    var akarKuadrat = parseFloat(1)
    let sisa = angka

    for(let i=2; i * i <= angka; i++) {
        while(sisa % (i * i) == 0) {
            akarKuadrat *= i
            sisa /= (i * i)
        }
    }

    var hasilRoot = Math.sqrt(angka)

    kuadrat = akarKuadrat * akarKuadrat
    
    if (sisa == 1) {
        output.innerHTML = "<h2> Hasil dari √" + angka + " adalah : " + akarKuadrat
        outputPenjelasan.innerHTML = "Lihat Penjelasan"
        output1.innerHTML = "<h3> Akar √" + angka +" = ...<sup>2</sup><br>Jadi kita cari angka yang bila dikalikan dirinya sendiri (kuadrat) hasilnya = "+
                            angka + "<br> angka yang tepat dan cocok dengan perintah diatas adalah = "+ akarKuadrat + 
                            "<br>Karena "+ akarKuadrat +" x " + akarKuadrat + " adalah = " + angka +
                            "<br> Jadi √" + angka + " adalah = " + akarKuadrat
    }
    else {
        output.innerHTML = "<h2> Hasil Penyederhanaan dari √"+ angka +" adalah : " + akarKuadrat + "√" + sisa +
                            "<br> atau : "+ hasilRoot
        outputPenjelasan.innerHTML = "Lihat Penjelasan"
        output1.innerHTML = "<h3> karena √" + angka + " tidak mempunyai nilai bulat, maka kita sederhanakan" +
                            "<br> dengan cara mencari angka kuadrat yang dapat membagi " + angka +
                            ",<br>angka yang tepat dan cocok dengan perintah diatas adalah = " + akarKuadrat + "<br> dikarenakan " + akarKuadrat +
                            "<sup>2</sup> = " + kuadrat + "<br> Dan " + angka + " dapat dibagi (:) "+ kuadrat +" = " + sisa +
                            "<br>Jadi √"+ angka +" adalah = √" + kuadrat +" x √" + sisa + "<br>Dan dapat disederhanakan lagi menjadi "  + akarKuadrat + "√" + sisa +
                            "<br> atau = " + hasilRoot
    }
}

// Harga Diskon
function diskon() {
    let inputharga = document.getElementById('inputharga')
    let inputdiskon =  document.getElementById('inputdiskon')
    let tangkapNilaiHarga = inputharga.value
    let convertHarga = tangkapNilaiHarga.replace(/\./g, "")
    let harga = parseFloat(convertHarga)
    let diskon = parseFloat(inputdiskon.value)
    let output1 = document.getElementById('output-diskon1')
    let output2 = document.getElementById('output-diskon2')
    let output3 = document.getElementById('output-diskon3')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    var diskonBersih = harga * diskon / 100
    var jumlah = harga - diskonBersih

    const formatharga = formatAngka(jumlah)

    output1.innerHTML = "<h3> " + diskon + "% dari " + harga + " yaitu = " + diskonBersih
    output2.innerHTML = "<h3> " + harga + " - " + diskonBersih + " = " + jumlah
    output3.innerHTML = "<h1> Total harga diskon adalah = Rp. " + formatharga
    outputPenjelasan.innerHTML = "Lihat Penjelasan"


}

// Penyederhanaan Rasio
function gcd(a, b) {
    if (a === 0) {
        return b
    }
    return gcd(b % a, a)
}

function penyederhanaanRasio() {
    let inputAngkaKiri = document.getElementById('inputkiri')
    let inputAngkaKanan = document.getElementById('inputkanan')
    let angkaKiri = parseFloat(inputAngkaKiri.value)
    let angkaKanan = parseFloat(inputAngkaKanan.value)
    let output1 = document.getElementById('output-rasio1')
    let output2 = document.getElementById('output-rasio2')
    let output3 = document.getElementById('output-rasio3')
    let output4 = document.getElementById('output-rasio4')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    var hasil = gcd(angkaKiri, angkaKanan)
    var jumlahAngkaKiri = angkaKiri / hasil
    var jumlahAngkaKanan = angkaKanan / hasil
    

    console.log(hasil)

    output4.innerHTML = "<h3> Hasil penyederhaan :"
    output3.innerHTML = "<h1>" + jumlahAngkaKiri + " : " + jumlahAngkaKanan
    outputPenjelasan.innerHTML = "Lihat Penjelasan"
    output1.innerHTML = "<h3> FPB (faktor persekutuan terbesar) / GCD (Greatest Common Divisor)<br> dari " + angkaKiri + " dan " + angkaKanan + " adalah = "+hasil
    output2.innerHTML = "<h3> jadi "+ angkaKiri +" : " + hasil + " = " + jumlahAngkaKiri+"<br> Dan " +
                        angkaKanan + " : " + hasil + " = " +jumlahAngkaKanan

}


// penyederhanaan pecahan

function showCampuran() {
    var hiddenText = document.getElementById('inputcampuran')
    var colorText =  document.getElementById('campuran-opsi-click')
    var colorText2 = document.getElementById('biasa-opsi-click')
    var hasilBiasa = document.getElementById('hasil-pecahan-biasa')
    var hasilCampuran = document.getElementById('hasil-pecahan-campuran')
    if (hiddenText.style.visibility === "hidden" || hiddenText.style.visibility === "") {
        hiddenText.style.visibility = "visible"
        colorText.style.color = "yellow"
        colorText.style.backgroundColor = "rgba(255, 255, 255, 0.349)"
        colorText2.style.color = "white"
        colorText2.style.backgroundColor = "transparent"
        hasilBiasa.style.display = "none"
        hasilCampuran.style.display = "block"
    }

}
function hideCampuran() {
    var hiddenText = document.getElementById('inputcampuran')
    var colorText =  document.getElementById('campuran-opsi-click')
    var colorText2 = document.getElementById('biasa-opsi-click')
    var hasilBiasa = document.getElementById('hasil-pecahan-biasa')
    var hasilCampuran = document.getElementById('hasil-pecahan-campuran')
    if (hiddenText.style.visibility === "visible" || hiddenText.style.visibility === "") {
        hiddenText.style.visibility = "hidden"
        colorText.style.color = "white"
        colorText.style.backgroundColor = "transparent"
        colorText2.style.color = "yellow"
        colorText2.style.backgroundColor = "rgba(255, 255, 255, 0.349)"
        hasilBiasa.style.display = "block"
        hasilCampuran.style.display = "none"
    }

}

function penyederhanaanPecahanBiasa() {
    let inputAngkaAtas = document.getElementById('inputatas')
    let inputAngkaBawah = document.getElementById('inputbawah')
    let inputCampuran = document.getElementById('inputcampuran')
    let angkaAtas = parseFloat(inputAngkaAtas.value)
    let angkaBawah = parseFloat(inputAngkaBawah.value)
    let angkaCampuran = parseFloat(inputCampuran.value)
    let output1 = document.getElementById('output-pecahan1')
    let output2 = document.getElementById('output-pecahan2')
    let output3 = document.getElementById('output-pecahan3')
    let output4 = document.getElementById('output-pecahan4')
    let output5 = document.getElementById('output-pecahan5')
    let outputPecahan = document.getElementById('pecahan-hasil')
    let outputAtas = document.getElementById('angkaatas')
    let outputBawah = document.getElementById('angkabawah')
    let outputAtasCampuran = document.getElementById('angkaatascampuran')
    let outputBawahCampuran = document.getElementById('angkabawahcampuran')
    let outpunCampuran = document.getElementById('angkacampuran')
    let outputPenjelasan = document.getElementById('output-penjelasan')
    let divider = document.getElementById('divider')
    let divider1 = document.getElementById('divider1')

    
    var hasil = gcd(angkaAtas, angkaBawah)
    var jumlahAngkaAtas = angkaAtas / hasil
    var jumlahAngkaBawah = angkaBawah / hasil

    var hasilOperasi = jumlahAngkaAtas / jumlahAngkaBawah

    var hasil1 = jumlahAngkaAtas % jumlahAngkaBawah
    var hasil2 = jumlahAngkaAtas - hasil1
    var hasil3 = hasil2 / jumlahAngkaBawah

    console.log(hasil1)
    console.log(hasil2)
    console.log(hasil3)
    
    
    divider.style.display = "block"
    output3.innerHTML = "<h2>Hasil penyederhanaan adalah :"
    if (angkaAtas === 0 || angkaBawah === 0) {
        outputAtas.innerHTML = "tidak terdefinisi"
        outputBawah.innerHTML = "tidak terdefinisi"
    }
    else {
        outputAtas.innerHTML = jumlahAngkaAtas
        outputBawah.innerHTML = jumlahAngkaBawah
    }

    outputPenjelasan.innerHTML = "Lihat Penjelasan"

    if (hasil1 != 0 && hasil3 != 0) {
        divider1.style.display = "block"
        output4.innerHTML = "<h2> Atau jika disederhanakan menjadi pecahan campuran :"
        outputAtasCampuran.innerHTML = hasil1
        outputBawahCampuran.innerHTML = jumlahAngkaBawah
        outpunCampuran.innerHTML = hasil3
    }
    else if (angkaAtas === 0 || angkaBawah === 0) {
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""
    }
    else {
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""
    }

    output5.innerHTML = "<h2>Atau : " + hasilOperasi
}







// const stringsAsli = 'javascript'

// const stringsBaru = stringsAsli[0].toUpperCase().concat(stringsAsli.slice(1))

// console.log(stringsBaru)
