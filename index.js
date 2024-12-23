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
    return new Intl.NumberFormat('id-ID', {maximumFractionDigits: 0}).format(angka) //format angka dengan titik
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

function showText() { //fungsi menampilkan output penjelasan
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

    for(let i=2; i * i <= angka; i++) { //mencari kuadrat
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
    output1.innerHTML = "<h3> FPB (faktor persekutuan terbesar) / GCD (Greatest Common Divisor)<br> dari " + angkaKiri + " dan " + angkaKanan + " adalah = "+hasil +
    "<br>jadi "+ angkaKiri +" : " + hasil + " = " + jumlahAngkaKiri+"<br> Dan " +
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
    let outputAtas = document.getElementById('angkaatas')
    let outputBawah = document.getElementById('angkabawah')
    let outputAtasCampuran = document.getElementById('angkaatascampuran')
    let outputBawahCampuran = document.getElementById('angkabawahcampuran')
    let outpunCampuran = document.getElementById('angkacampuran')
    let outputPenjelasan = document.getElementById('output-penjelasan')
    let divider = document.getElementById('divider')
    let divider1 = document.getElementById('divider1')

    
    var hasil = gcd(angkaAtas, angkaBawah) //fpb
    var jumlahAngkaAtas = angkaAtas / hasil //pembilang
    var jumlahAngkaBawah = angkaBawah / hasil // ppenyebut

    var hasilOperasi = jumlahAngkaAtas / jumlahAngkaBawah //hasil jika dioperasikan (:)

    var hasil1 = jumlahAngkaAtas % jumlahAngkaBawah //modulus pembilang dan penyebut digunakan untuk mereprentasikan nilai sederhana pembilang
    var hasil2 = jumlahAngkaAtas - hasil1 // berfungsi untuk mengurangi pembilang asli dengan hasil modulus agar bisa dibagi dengan penyebut
    var hasil3 = hasil2 / jumlahAngkaBawah // reprentasi dari bilangan bulat pada campuran

    var hasil4 = hasil3 * jumlahAngkaBawah // perkalian penyebut dan bilangan bulat


    divider.style.display = "block"
    output3.innerHTML = "<h2>Hasil penyederhanaan adalah :"
    outputPenjelasan.innerHTML = "Lihat Penjelasan"
    output1.innerHTML = "<h3>Pertama kita mencari FPB (faktor persekutuan terbesar) dari " + angkaAtas + " dan " + angkaBawah+ "<br> FPB  dari " + angkaAtas + " dan " + angkaBawah +" adalah = " + hasil +
                        "<br> lalu kita bagi pembilang dan penyebut dengan " + hasil + " <br>" + angkaAtas + " : " + hasil + " = " + jumlahAngkaAtas +
                        "<br>" + angkaBawah + " : " + hasil + " = " + jumlahAngkaBawah + "<br> dan kita berhasil mendapat nilai sederhana dari <sup>" + angkaAtas +
                         "</sup> &frasl; <sub>" +angkaBawah + "</sub> yaitu = <sup>" + jumlahAngkaAtas + "</sup> &frasl; <sub>" + jumlahAngkaBawah + "</sub>"
    output5.innerHTML = "<h2>Atau : " + hasilOperasi

    if (angkaBawah == 0 ) { //jika pembilang dan penyebut 0 maka akan tidak terdefinisi
        outputAtas.innerHTML = "tidak terdefinisi"
        outputBawah.innerHTML = "tidak terdefinisi"
        output1.innerHTML = "<h3>Pecahan <sup>" + angkaAtas +"</sup> &frasl; <sub>" +angkaBawah + "</sub> tidak terdefinisi karena mempunyai nilai nol (0) sebagai penyebut. Dalam matematika,"+
        " Suatu pecahan dikatakan tak terdefinisi/tak tentu jika penyebutnya sama dengan 0 . Tidak peduli seberapa rumitnya, kapan pun penyebut"+
        " sama dengan 0, pecahan keseluruhan menjadi tidak terdefinisi."
        output5.innerHTML = "<h2>Atau : Tidak Terdefinisi"
    }
    else if(angkaAtas == 0) {
        outputAtas.innerHTML = jumlahAngkaAtas
        outputBawah.innerHTML = jumlahAngkaBawah
        output1.innerHTML = `<h3>Pecahan <sup>${angkaAtas}</sup> &frasl; <sub>${angkaBawah}</sub> memiliki hasil = 0 <br>karena dalam pecahan bila terdapat 0 sebagai pembilang maka nilainya adalah 0 mau berapapun penyebut hasilnya akan tetap 0. 
                            Ini karena membagi nol menjadi beberapa bagian tetap menghasilkan nol. Misalnya, jika Anda memiliki nol apel dan Anda memutuskan untuk membagikannya kepada lima teman, setiap teman tetap menerima nol apel.`
    }
    else {
        outputAtas.innerHTML = jumlahAngkaAtas
        outputBawah.innerHTML = jumlahAngkaBawah
    }



    if (hasil1 != 0 && hasil3 != 0 && !isNaN(hasil1) ) { // jika modulus dan bilangan bulat tidak 0 maka akan muncul penyederhanaan campuran
        divider1.style.display = "block"
        output4.innerHTML = "<h3> Atau jika disederhanakan menjadi pecahan campuran :"
        outputAtasCampuran.innerHTML = hasil1
        outputBawahCampuran.innerHTML = jumlahAngkaBawah
        outpunCampuran.innerHTML = hasil3
        output1.innerHTML = "<h3>Pertama kita mencari FPB (faktor persekutuan terbesar) dari " + angkaAtas + " dan " + angkaBawah+ "<br> FPB  dari " + angkaAtas + " dan " + angkaBawah +" adalah = " + hasil +
                        "<br> lalu kita bagi pembilang dan penyebut dengan " + hasil + " <br>" + angkaAtas + " : " + hasil + " = " + jumlahAngkaAtas +
                        "<br>" + angkaBawah + " : " + hasil + " = " + jumlahAngkaBawah + "<br> dan kita berhasil mendapat nilai sederhana dari <sup>" + angkaAtas +
                         "</sup> &frasl; <sub>" +angkaBawah + "</sub> yaitu = <sup>" + jumlahAngkaAtas + "</sup> &frasl; <sub>" + jumlahAngkaBawah + "</sub>" +
                         "<br> <sup>" + jumlahAngkaAtas + "</sup> &frasl; <sub>" + jumlahAngkaBawah + "</sub> bisa kita sederhanakan lagi menjadi pecahan campuran dengan cara mencari <br>angka yang jika dikalikan dengan penyebut (" + jumlahAngkaBawah +
                         ") hasilnya mendekati dan tidak melebihi pembilang (" + jumlahAngkaAtas + ") <br>Angka yang tepat dengan kriteria diatas adalah = " +hasil3 + "<br>Karena jika "+ hasil3 + " x " + jumlahAngkaBawah + " hasilnya adalah = " + hasil4 +
                         " (" + hasil4 + " adalah angka paling mendekati " +jumlahAngkaAtas + " dan tidak melebihi "+jumlahAngkaAtas+") <br>Kita kunci "+ hasil3 +" sebagai bilangan bulat<br>Lalu kita mencari pembilang campuran dengan cara mengkali (x) bilangan bulat yaitu " +
                         hasil3 + " dengan penyebut yaitu "+ jumlahAngkaBawah + "<br>" + hasil3 + " x " + jumlahAngkaBawah + " Hasilnya = " + hasil4 +
                         "<br>Selanjutnya kita kurangi (-) pembilang yaitu " + jumlahAngkaAtas + " dengan "+ hasil4 + "<br>" + jumlahAngkaAtas + " - " +hasil4 + " = " + hasil1 +
                         "<br> kita tidak perlu mencari penyebut karena dalam penyederhanaan pecahan campuran penyebut tetap / tidak berubah" +
                         "<br>Jadi hasil penyederhanaan adalah = " + hasil3 +" <sup>" + hasil1 + "</sup> &frasl; <sub>" + jumlahAngkaBawah + "</sub>"

    }
    else if (isNaN(angkaBawah)){
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""
    }
    else if (angkaAtas === 0 || angkaBawah === 0) { //jika angka pembilang / penyebut 0 maka akan disembunyikan
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""

    }
    else { // jika if = 0 maka akan menyembunyikan campuran
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""
    }

}


function penyederhanaanPecahanCampuran() {
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
    let outputAtas = document.getElementById('angkaatas')
    let outputBawah = document.getElementById('angkabawah')
    let outputAtasCampuran = document.getElementById('angkaatascampuran')
    let outputBawahCampuran = document.getElementById('angkabawahcampuran')
    let outpunCampuran = document.getElementById('angkacampuran')
    let outputPenjelasan = document.getElementById('output-penjelasan')
    let divider = document.getElementById('divider')
    let divider1 = document.getElementById('divider1')

    let convertBiasa = angkaCampuran * angkaBawah + angkaAtas //mengubah campuran ke pecahan biasa
    let convertAngkaAtas = convertBiasa // initialisasi convert sebagai pembilang
    let convertAngkaBawah = angkaBawah // penyebut

    var hasil = gcd(convertAngkaAtas, convertAngkaBawah) //modulus mencari fpb
    var jumlahAngkaAtas = convertAngkaAtas / hasil
    var jumlahAngkaBawah = convertAngkaBawah / hasil

    var hasilOperasi = jumlahAngkaAtas / jumlahAngkaBawah

    var hasil1 = jumlahAngkaAtas % jumlahAngkaBawah //modulus pembilang dan penyebut digunakan untuk mereprentasikan nilai sederhana pembilang
    var hasil2 = jumlahAngkaAtas - hasil1 // berfungsi untuk mengurangi pembilang asli dengan hasil modulus agar bisa dibagi dengan penyebut
    var hasil3 = hasil2 / jumlahAngkaBawah // reprentasi dari bilangan bulat pada campuran

    var hasil4 = hasil3 * jumlahAngkaBawah // perkalian penyebut dan bilangan bulat
    

    divider.style.display = "block"
    output3.innerHTML = "<h2>Hasil penyederhanaan adalah :"
    outputPenjelasan.innerHTML = "Lihat Penjelasan"

    //output penjelasan default
    output1.innerHTML = `<h3>Pertama ubah pecahan campuran menjadi pecahan biasa. Kita cari pembilang dengan cara ${angkaBawah} (penyebut) x ${angkaCampuran} (bilangan bulat) + ${angkaAtas} (pembilang awal) = ${convertAngkaAtas}
                        <br>${convertAngkaAtas} merupakan pembilang. untuk penyebut kita tidak perlu mencari karena dalam penyederhanaan pecahan penyebut akan tetap sama, Dan kita mendapat hasil  = <sup>${convertAngkaAtas}</sup> &frasl; <sub>${convertAngkaBawah}</sub> 
                        <br><h3>Lalu kita mencari FPB (faktor persekutuan terbesar) dari ${convertAngkaAtas} dan ${convertAngkaBawah}<br>FPB  dari ${convertAngkaAtas} dan ${convertAngkaBawah} adalah = ${hasil}
                        <br> lalu kita bagi pembilang dan penyebut dengan ${hasil} <br>${convertAngkaAtas} : ${hasil} = ${jumlahAngkaAtas}
                        <br>${convertAngkaBawah} : ${hasil} = ${jumlahAngkaBawah}<br> dan kita berhasil mendapat nilai sederhana dari <sup>${convertAngkaAtas}
                        </sup> &frasl; <sub>${convertAngkaBawah}</sub> yaitu = <sup>${jumlahAngkaAtas}</sup> &frasl; <sub>${jumlahAngkaBawah}</sub>`
    output5.innerHTML = "<h2>Atau : " + hasilOperasi

    if (angkaBawah == 0 ) { //jika pembilang dan penyebut 0 maka akan tidak terdefinisi
        outputAtas.innerHTML = "tidak terdefinisi"
        outputBawah.innerHTML = "tidak terdefinisi"
        output1.innerHTML = "<h3>Pecahan "+angkaCampuran+" <sup>" + angkaAtas +"</sup> &frasl; <sub>" +angkaBawah + "</sub> tidak terdefinisi karena mempunyai nilai nol (0) sebagai penyebut. Dalam matematika,"+
        " Suatu pecahan dikatakan tak terdefinisi/tak tentu jika penyebutnya sama dengan 0 . Tidak peduli seberapa rumitnya, kapan pun penyebut"+
        " sama dengan 0, pecahan keseluruhan menjadi tidak terdefinisi."
        output5.innerHTML = "<h2>Atau : Tidak Terdefinisi"
    }
    else if(jumlahAngkaAtas == 0) {
        outputAtas.innerHTML = jumlahAngkaAtas
        outputBawah.innerHTML = jumlahAngkaBawah
        output1.innerHTML = `<h3>Pecahan <sup>${angkaAtas}</sup> &frasl; <sub>${angkaBawah}</sub> memiliki hasil = 0 <br>karena dalam pecahan bila terdapat 0 sebagai pembilang maka nilainya adalah 0 mau berapapun penyebut hasilnya akan tetap 0. 
                            Ini karena membagi nol menjadi beberapa bagian tetap menghasilkan nol. Misalnya, jika Anda memiliki nol apel dan Anda memutuskan untuk membagikannya kepada lima teman, setiap teman tetap menerima nol apel.`
    }
    else {
        outputAtas.innerHTML = jumlahAngkaAtas
        outputBawah.innerHTML = jumlahAngkaBawah
    }



    if (hasil1 != 0 && hasil3 != 0 && !isNaN(hasil1) ) { // jika modulus dan bilangan bulat tidak 0 maka akan muncul penyederhanaan campuran
        divider1.style.display = "block"
        output4.innerHTML = "<h3> Atau jika disederhanakan menjadi pecahan campuran :"
        outputAtasCampuran.innerHTML = hasil1
        outputBawahCampuran.innerHTML = jumlahAngkaBawah
        outpunCampuran.innerHTML = hasil3
        output1.innerHTML = "<h3>Pertama ubah pecahan campuran menjadi pecahan biasa. Kita cari pembilang dengan cara penyebut ("+angkaBawah+") x bilangan ("+angkaCampuran+") x pembilang awal ("+angkaAtas+") = " + convertAngkaAtas + 
                        "<br>"+ convertAngkaAtas +" merupakan pembilang dan penyebut kita tidak perlu mencari karena dalam penyederhanaan pecahan penyebut akan tetap sama, Dan kita mendapat hasil  = <sup>" + convertAngkaAtas + "</sup> &frasl; <sub>" + convertAngkaBawah + "</sub>" +
                        "<br> lalu kita mencari FPB (faktor persekutuan terbesar) dari " + convertAngkaAtas + " dan " + convertAngkaBawah+ "<br> FPB  dari " + convertAngkaAtas + " dan " + convertAngkaBawah +" adalah = " + hasil +
                        "<br> lalu kita bagi pembilang dan penyebut dengan " + hasil + " <br>" + convertAngkaAtas + " : " + hasil + " = " + jumlahAngkaAtas +
                        "<br>" + convertAngkaBawah + " : " + hasil + " = " + jumlahAngkaBawah + "<br> dan kita berhasil mendapat nilai sederhana dari <sup>" + convertAngkaAtas +
                         "</sup> &frasl; <sub>" +convertAngkaBawah + "</sub> yaitu = <sup>" + jumlahAngkaAtas + "</sup> &frasl; <sub>" + jumlahAngkaBawah + "</sub>." +
                         "<br> <sup>" + jumlahAngkaAtas + "</sup> &frasl; <sub>" + jumlahAngkaBawah + "</sub> bisa kita sederhanakan lagi menjadi pecahan campuran dengan cara mencari <br>angka yang jika dikalikan dengan penyebut (" + jumlahAngkaBawah +
                         ") hasilnya mendekati dan tidak melebihi pembilang (" + jumlahAngkaAtas + ") <br>Angka yang tepat dengan kriteria diatas adalah = " +hasil3 + "<br>Karena jika "+ hasil3 + " x " + jumlahAngkaBawah + " hasilnya adalah = " + hasil4 +
                         " (" + hasil4 + " adalah angka paling mendekati " +jumlahAngkaAtas + " dan tidak melebihi "+jumlahAngkaAtas+") <br>Kita kunci "+ hasil3 +" sebagai bilangan bulat<br>Lalu kita mencari pembilang campuran dengan cara mengkali (x) bilangan bulat yaitu " +
                         hasil3 + " dengan penyebut yaitu "+ jumlahAngkaBawah + "<br>" + hasil3 + " x " + jumlahAngkaBawah + " Hasilnya = " + hasil4 +
                         "<br>Selanjutnya kita kurangi (-) pembilang yaitu " + jumlahAngkaAtas + " dengan "+ hasil4 + "<br>" + jumlahAngkaAtas + " - " +hasil4 + " = " + hasil1 +
                         "<br> kita tidak perlu mencari penyebut karena dalam penyederhanaan pecahan campuran penyebut tetap / tidak berubah" +
                         "<br>Jadi hasil penyederhanaan adalah = " + hasil3 +" <sup>" + hasil1 + "</sup> &frasl; <sub>" + jumlahAngkaBawah + "</sub>"

    }
    else if (isNaN(angkaBawah)){
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""
    }
    else if (angkaAtas === 0 || angkaBawah === 0) { //jika angka pembilang / penyebut 0 maka akan disembunyikan
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""

    }
    else { // jika if = 0 maka akan menyembunyikan campuran
        divider1.style.display = "none"
        output4.innerHTML = ""
        outputAtasCampuran.innerHTML = ""
        outputBawahCampuran.innerHTML = ""
        outpunCampuran.innerHTML = ""
    }


}


//hipotenusa

function hipotenusa() {
    let inputA = document.getElementById('inputA')
    let inputB = document.getElementById('inputB')
    let inputC = document.getElementById('inputC')
    let nilaiA = parseFloat(inputA.value)
    let nilaiB = parseFloat(inputB.value)
    let nilaiC = parseFloat(inputC.value)
    let output1 = document.getElementById('output-hipotenusa1')
    let output3 = document.getElementById('output-hipotenusa3')
    let outputA = document.getElementById('output-hipotenusa-bawah')
    let outputB = document.getElementById('output-hipotenusa-kiri')
    let outputC = document.getElementById('output-hipotenusa-kanan')
    let outputPenjelasan = document.getElementById('output-penjelasan')
    let outputSegitiga = document.getElementById('segitiga-hipotenusa1')

    outputPenjelasan.innerHTML = "Lihat Penjelasan"

    if (!isNaN(nilaiA) && !isNaN(nilaiB) && isNaN(nilaiC)) {
        var hasilC = parseFloat(Math.sqrt(nilaiA ** 2 + nilaiB ** 2).toFixed(2))
        outputSegitiga.style.display = "block"
        outputC.style.color = "yellow"
        outputA.style.color = "white"
        outputB.style.color = "white"
        outputA.innerHTML = `a = ${nilaiA}`
        outputB.innerHTML = `b = ${nilaiB}`
        outputC.innerHTML = `c = ${hasilC}`
        output3.innerHTML = `<h2>Hasil nilai hipotenusa = ${hasilC}`
        output1.innerHTML = `<h3>Rumus mencari nilai hipotenusa menggunakan theorema pythagoras yaitu c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>
                            <br>Pertama kita mencari nilai a<sup>2</sup> = ${nilaiA} x ${nilaiA} = ${nilaiA ** 2}<br>Lalu mencari nilai b<sup>2</sup> =
                            ${nilaiB} x ${nilaiB} = ${nilaiB ** 2} <br> Lalu jumlahkan nilai a dan b = ${nilaiA ** 2} + ${nilaiB ** 2} = ${nilaiA ** 2 + nilaiB ** 2}
                            <br>berarti c<sup>2</sup> = ${nilaiA ** 2 + nilaiB ** 2}<br>karena yang dicari adalah c bukan c<sup>2</sup> maka kita hilangkan kuadrat dengan cara mengakarkan ${nilaiA ** 2 + nilaiB ** 2}
                            <br> Jadi c = √${nilaiA ** 2 + nilaiB ** 2}<br>Berarti c = ${hasilC}`
    }
    else if (isNaN(nilaiA) && !isNaN(nilaiB) && !isNaN(nilaiC)) {
        var hasilA = parseFloat(Math.sqrt(nilaiC ** 2 - nilaiB ** 2).toFixed(2)) // proses hasil
        if(!isNaN(hasilA)) { // jika nilai hipotenusa > dari panjang
            outputSegitiga.style.display = "block"
            outputA.style.color = "yellow"
            outputB.style.color = "white"
            outputC.style.color = "white"
            outputA.innerHTML = `a = ${hasilA}`
            outputB.innerHTML = `b = ${nilaiB}`
            outputC.innerHTML = `c = ${nilaiC}`
            output3.innerHTML = `<h2>Hasil nilai alas = ${hasilA}`
            output1.innerHTML = `<h3>Rumus mencari nilai a menggunakan theorema pythagoras yaitu a<sup>2</sup> = c<sup>2</sup> - b<sup>2</sup>
            <br>Pertama kita mencari nilai c<sup>2</sup> = ${nilaiC} x ${nilaiC} = ${nilaiC ** 2}<br>Lalu mencari nilai b<sup>2</sup> =
            ${nilaiB} x ${nilaiB} = ${nilaiB ** 2} <br> Lalu kurangi nilai c dengan b = ${nilaiC ** 2} - ${nilaiB ** 2} = ${nilaiC ** 2 - nilaiB ** 2}
            <br>berarti a<sup>2</sup> = ${nilaiC ** 2 - nilaiB ** 2}<br>karena yang dicari adalah a bukan a<sup>2</sup> maka kita hilangkan kuadrat dengan cara mengakarkan ${nilaiC ** 2 - nilaiB ** 2}
            <br> Jadi a = √${nilaiC ** 2 - nilaiB ** 2}<br>Berarti a = ${hasilA}`
        } else { //jika hipotenusa < panjang akan error 
            output3.innerHTML = `<h2>Error!! Nilai hipotenusa harus lebih besar!`
            outputSegitiga.style.display = "none"
            outputA.innerHTML = ``
            outputB.innerHTML = ``
            outputC.innerHTML = ``
            output1.innerHTML = `Hipotenusa harus lebih besar! Sisi miring selalu lebih panjang daripada kaki-kaki segitiga siku-siku karena kaki-kaki selalu bertemu pada sudut 90 derajat dalam segitiga siku-siku. Oleh karena itu,
                                 sisi miring yang menghubungkan ujung-ujung kaki harus cukup panjang untuk menutupi segitiga.`
        }

    }
    else if (!isNaN(nilaiA) && isNaN(nilaiB) && !isNaN(nilaiC)) {
        var hasilB = parseFloat(Math.sqrt(nilaiC ** 2 - nilaiA ** 2).toFixed(2))
        if (!isNaN(hasilB)) {
            outputSegitiga.style.display = "block"
            outputB.style.color = "yellow"
            outputA.style.color = "white"
            outputC.style.color = "white"
            outputA.innerHTML = `a = ${nilaiA}`
            outputB.innerHTML = `b = ${hasilB}`
            outputC.innerHTML = `c = ${nilaiC}`
            output3.innerHTML = `<h2>Hasil nilai panjang = ${hasilB}`
            output1.innerHTML = `<h3>Rumus mencari nilai b menggunakan theorema pythagoras yaitu b<sup>2</sup> = c<sup>2</sup> - a<sup>2</sup>
            <br>Pertama kita mencari nilai c<sup>2</sup> = ${nilaiC} x ${nilaiC} = ${nilaiC ** 2}<br>Lalu mencari nilai a<sup>2</sup> =
            ${nilaiA} x ${nilaiA} = ${nilaiA ** 2} <br> Lalu kurangi nilai c dengan a = ${nilaiC ** 2} - ${nilaiA ** 2} = ${nilaiC ** 2 - nilaiA ** 2}
            <br>berarti b<sup>2</sup> = ${nilaiC ** 2 - nilaiA ** 2}<br>karena yang dicari adalah b bukan b<sup>2</sup> maka kita hilangkan kuadrat dengan cara mengakarkan ${nilaiC ** 2 - nilaiA ** 2}
            <br> Jadi b = √${nilaiC ** 2 - nilaiA ** 2}<br>Berarti b = ${hasilB}`
        }
        else {
            output3.innerHTML = `<h2>Error!! Nilai hipotenusa harus lebih besar!`
            outputSegitiga.style.display = "none"
            outputA.innerHTML = ``
            outputB.innerHTML = ``
            outputC.innerHTML = ``
            output1.innerHTML = `Hipotenusa harus lebih besar! Sisi miring selalu lebih panjang daripada kaki-kaki segitiga siku-siku karena kaki-kaki selalu bertemu pada sudut 90 derajat dalam segitiga siku-siku. Oleh karena itu,
                                 sisi miring yang menghubungkan ujung-ujung kaki harus cukup panjang untuk menutupi segitiga.`
        }

    }
    else {
        output3.innerHTML = `<h2>Error!! Masukkan dengan benar`
        outputSegitiga.style.display = "none"
        outputA.innerHTML = ``
        outputB.innerHTML = ``
        outputC.innerHTML = ``
        output1.innerHTML = ``
        outputPenjelasan.innerHTML = ``
    }

}


//average, sum, max-min

var saveInput = []

function inputNilai() {
    let jumlahInput = parseInt(document.getElementById('jumlahbanyakinput').value)
    let inputContainer = document.getElementById('input-container')
    let hasilBtn = document.getElementById('hasil-average')
    let output3 = document.getElementById('output-average3')
    
    output3.innerHTML = ""
    inputContainer.innerHTML = '' //memformat semua input
    saveInput = []

    for (let i = 0; i < jumlahInput; i++) {
        // label
        let label = document.createElement('label')
        label.textContent = `Masukkan nilai ${i+1}`
        label.className = "label-input"
        label.id = `label-input${i+1}`

        // input
        let input = document.createElement('input')
        input.type = 'number'
        input.name = `input${i+1}`
        input.placeholder = `Nilai ${i+1}`
        input.className = "input-nilai"
        input.id = `input-nilai${i+1}`

        //memasukkan elemen ke container
        inputContainer.appendChild(label)
        inputContainer.appendChild(input)
        inputContainer.appendChild(document.createElement('br'))

        input.addEventListener('input', () => {
            saveInput[i] = parseFloat(input.value)
        })

    }

    hasilBtn.style.display = "block"

    if(isNaN(jumlahInput) || jumlahInput <= 0) {
        hasilBtn.style.display = "none"
        output3.innerHTML = `Error!! Masukkan input dengan benar`
    }
    
    
}



function outputNilai() {
    let output = document.getElementById('output-average')
    let jumlahInput = parseInt(document.getElementById('jumlahbanyakinput').value)
    let output1 = document.getElementById('output-average1')
    let output3 = document.getElementById('output-average3')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output.textContent = ''

    saveInput = saveInput.filter(value => value !== null && value !== undefined && value !== "" && !isNaN(value));

    if (saveInput.length === 0) {
        output3.innerHTML = "Error!! Masukkan dengan benar";
        outputPenjelasan.innerHTML = "";
        output1.innerHTML = "";
        return;
    }

    let jumlahNilai = saveInput.reduce((total, num) => total + num, 0)
    let rata2 = jumlahNilai / saveInput.length
    let max = Math.max(...saveInput)
    let min = Math.min(...saveInput)


    for (i = 0; i < jumlahInput; i++) {
        let outputTeks = document.createElement('h3')
        outputTeks.id = `output-teks${i}`
        outputTeks.textContent = `Nilai ke ${i+1} = ${saveInput[i]}`

        output.appendChild(outputTeks)

    }

    console.log(saveInput)
    output3.innerHTML = `<h2>Jumlah Nilai : ${parseFloat(jumlahNilai.toFixed(2))}
                            <br>Nilai Rata-rata : ${parseFloat(rata2.toFixed(2))}
                            <br>Nilai Tertinggi : ${max}
                            <br>Nilai Terendah : ${min}`
    outputPenjelasan.innerHTML = "Lihat Penjelasan"
    output1.innerHTML = `<h3>Mencari jumlah<br>Cara mencari jumlah yaitu menjumlahkan semua nilai, jumlah dari semua nilai diatas adalah = ${parseFloat(jumlahNilai.toFixed(2))}
                            <br><br>Mencari nilai rata - rata<br>Cara mencari nilai rata-rata yaitu jumlah : banyak nilai, jumlah diatas adalah = ${parseFloat(jumlahNilai.toFixed(2))}
                            dibagi banyak nilai diatas adalah = ${jumlahInput} <br>jadi ${parseFloat(jumlahNilai.toFixed(2))} : ${jumlahInput} = ${parseFloat(rata2.toFixed(2))}
                            <br><br>Nilai tertinggi dari semua nilai diatas adalah = ${max} <br><br>Nilai terendah dari semua nilai diatas adalah = ${min}`


}


//Kode Morse

const codeMorse = {
    A: ".-",     B: "-...",   C: "-.-.",   D: "-..",    E: ".", 
    F: "..-.",   G: "--.",    H: "....",   I: "..",     J: ".---", 
    K: "-.-",    L: ".-..",   M: "--",     N: "-.",     O: "---", 
    P: ".--.",   Q: "--.-",   R: ".-.",    S: "...",   T: "-", 
    U: "..-",    V: "...-",   W: ".--",    X: "-..-",   Y: "-.--", 
    Z: "--..",   0: "-----",  1: ".----",  2: "..---",  3: "...--", 
    4: "....-",  5: ".....",  6: "-....",  7: "--...",  8: "---..", 
    9: "----.",  ".": ".-.-.-", ",": "--..--", "?": "..--..", 
    "'": ".----.", "!": "-.-.--", "/": "-..-.",  "(": "-.--.", 
    ")": "-.--.-", "&": ".-...", ":": "---...", ";": "-.-.-.", 
    "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-", 
    "$": "...-..-", "@": ".--.-.", " " : "/"
}


function teksKeMorse(text) {
    return text.toUpperCase().split("").map(character => {
    if (character === " ") {
        return "/";  // Mengganti spasi teks dengan "/"
    }
        return codeMorse[character] || ""
    }).join(" ")

}

function morseKeTeks(morse) {
    var reverseCode = Object.fromEntries(Object.entries(codeMorse).map(([key, value]) => [value, key]))

    morse = morse.replace(/\//g, " / ")
    return morse.split(" ").map(Symbol => {
        if (Symbol === "/") return " "
        if (Symbol === "") return " "
        return reverseCode[Symbol] || ""
    }).join("")

}

function translateMorse() {
    let kodeMorse = document.getElementById('input-morse').value.trim()
    let output = document.getElementById('output-morse-container')
    let kodeMorseConvert
    
    console.log(kodeMorse)
    if (kodeMorse.match(/^[\.\-\s\/]+$/)) {
        kodeMorseConvert = morseKeTeks(kodeMorse)
    }else {
        kodeMorseConvert = teksKeMorse(kodeMorse)
    }
    output.innerHTML = kodeMorseConvert
}



//zakat

function zakatPenghasilan() {
    let jumlahPenghasilan = parseFloat(document.getElementById('jumlah-penghasilan').value.replace(/\./g, ""))
    let output3 = document.getElementById('output-zakat3')

    let nisabHarta = parseFloat(6859394)

    output3.innerHTML = ""

    if (jumlahPenghasilan >= nisabHarta) {
        jumlahPenghasilan = jumlahPenghasilan * 0.025
        jumlahPenghasilanTahun = jumlahPenghasilan * 12
        output3.innerHTML = `Zakat yang wajib dibayar dalam 1 bulan adalah : Rp.${formatAngka(jumlahPenghasilan)}
                            <br>Atau dalam 1 tahun wajib membayar : Rp.${formatAngka(jumlahPenghasilanTahun)}`
    } else if (isNaN(jumlahPenghasilan)) {
        output3.innerHTML = `Error!! Mohon masukkan penghasilan anda dengan benar`
    } else {
        output3.innerHTML = `Anda tidak wajib membayar zakat`
    }
}

function zakatHewanKambing() {
    let jumlahKambing = parseFloat(document.getElementById("jumlah-kambing").value)
    let output3 = document.getElementById('output-zakat3')

    let nisabKambing = parseFloat(40)
    let zakatKambing

    output3.innerHTML = ""
    
    if (jumlahKambing < 40) {
        zakatKambing = 0
        output3.innerHTML = `Anda tidak wajib untuk zakat`
    } else if (jumlahKambing <= 120) {
        zakatKambing = 1
        output3.innerHTML = `Jumlah Kambing yang wajib dizakatkan adalah ${zakatKambing} ekor kambing umur 2 tahun
                            <br>Atau ${zakatKambing} ekor domba umur 1 tahun`
    } else if (jumlahKambing <= 200) {
        zakatKambing = 2
        output3.innerHTML = `Jumlah Kambing yang wajib dizakatkan adalah ${zakatKambing} ekor kambing umur 2 tahun
                            <br>Atau ${zakatKambing} ekor domba umur 1 tahun`
    } else if (jumlahKambing > 200) {
        let tambahanZakat = Math.ceil((jumlahKambing - 200) / 100)
        zakatKambing = 2 + tambahanZakat
        output3.innerHTML = `Jumlah Kambing yang wajib dizakatkan adalah ${zakatKambing} ekor kambing umur 2 tahun
                            <br>Atau ${zakatKambing} ekor domba umur 1 tahun`
    } else {
        output3.innerHTML = `Input tidak valid!! Masukkan dengan benar`
    }
    

}

function zakatHewanSapi() {
    // Ambil nilai jumlah sapi dari input HTML
    let jumlahSapi = parseFloat(document.getElementById("jumlah-sapi").value);
    let outputSapi = document.getElementById('output-zakat3');  // Elemen output

    let zakatSapi = 0;  // Inisialisasi zakat sapi
    let zakatTabi = 0;  // Zakat sapi tabi
    let zakatMusinnah = 0;  // Zakat sapi musinnah

    // Validasi input
    if (isNaN(jumlahSapi) || jumlahSapi <= 0) {
        outputSapi.innerHTML = `Error!! Masukkan jumlah sapi yang valid.`;
        return;  // Menghentikan eksekusi fungsi jika input tidak valid
    }

    // Kondisi perhitungan zakat sapi berdasarkan jumlah sapi
    if (jumlahSapi < 30) {
        zakatSapi = 0;
        outputSapi.innerHTML = `Anda tidak wajib untuk zakat.`;
    } else if (jumlahSapi <= 39) {
        zakatTabi = 1;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatTabi} ekor sapi tabi (umur 1-2 tahun).`;
    } else if (jumlahSapi <= 59) {
        zakatMusinnah = 1;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatMusinnah} ekor sapi musinnah (umur 2-3 tahun).`;
    } else if (jumlahSapi <= 69) {
        zakatTabi = 2;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatTabi} ekor sapi tabi (umur 1-2 tahun).`;
    } else if (jumlahSapi <= 79) {
        zakatMusinnah = 1;
        zakatTabi = 1;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatMusinnah} ekor sapi musinnah (umur 2-3 tahun) dan ${zakatTabi} ekor sapi tabi (umur 1-2 tahun).`;
    } else if (jumlahSapi <= 89) {
        zakatMusinnah = 2;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatMusinnah} ekor sapi musinnah (umur 2-3 tahun).`;
    } else if (jumlahSapi <= 99) {
        zakatTabi = 3;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatTabi} ekor sapi tabi (umur 1-2 tahun).`;
    } else if (jumlahSapi <= 109) {
        zakatMusinnah = 2;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatMusinnah} ekor sapi musinnah (umur 2-3 tahun).`;
    } else if (jumlahSapi <= 119) {
        zakatMusinnah = 2;
        zakatTabi = 1;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatMusinnah} ekor sapi musinnah (umur 2-3 tahun) dan ${zakatTabi} ekor sapi tabi (umur 1-2 tahun).`;
    } else if (jumlahSapi <= 129) {
        zakatMusinnah = 3;
        outputSapi.innerHTML = `Jumlah Sapi yang wajib dizakatkan adalah ${zakatMusinnah} ekor sapi musinnah (umur 2-3 tahun) atau ${4} ekor sapi tabi (umur 1-2 tahun).`;
    } else {
        let hitungSapi1th = jumlahSapi % 30
        let hitungSapi2th = jumlahSapi % 40   
        if (hitungSapi1th == 0 && hitungSapi2th != 0) {
            zakatSapi = jumlahSapi / 30
            outputSapi.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatSapi} ekor sapi tabi (umur 1-2 tahun)`
        } else if (hitungSapi2th == 0 && hitungSapi1th != 0) {
            zakatSapi = jumlahSapi / 40
            outputSapi.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatSapi} ekor sapi musinnah (umur 2-3 tahun)`
        } else {
            let zakatSapi1th = Math.floor(jumlahSapi / 30)
            let zakatSapi2th = Math.floor(jumlahSapi / 40)

            let sisaSapi2th = jumlahSapi % 40
            let jumlahSisaSapi1th = Math.floor(sisaSapi2th / 30)

            outputSapi.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatSapi1th} ekor sapi tabi (umur 1-2 tahun) tahun <br>atau ${zakatSapi2th} ekor sapi musinnah (umur 2-3 tahun)`
            if (jumlahSisaSapi1th != 0) {
                 outputSapi.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatSapi2th} ekor sapi musinnah (umur 2-3 tahun) <br>dan ${jumlahSisaSapi1th} ekor sapi tabi (umur 1-2 tahun) tahun`
            }
        }

 
    }
}

function zakatHewanUnta() {
    let jumlahUnta = parseFloat(document.getElementById("jumlah-unta").value);
    let output3 = document.getElementById('output-zakat3');
    output3.innerHTML = "";

    if (isNaN(jumlahUnta) || jumlahUnta < 0) {
        output3.innerHTML = `Input tidak valid! Masukkan jumlah unta dengan benar.`;
        return;
    }

    if (jumlahUnta < 5) {
        output3.innerHTML = `Anda tidak wajib untuk zakat.`;
    } else if (jumlahUnta < 10) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 1 ekor kambing umur 2 tahun, atau 1 ekor domba umur 1 tahun.`;
    } else if (jumlahUnta < 15) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 2 ekor kambing umur 2 tahun, atau 2 ekor domba umur 1 tahun.`;
    } else if (jumlahUnta < 20) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 3 ekor kambing umur 2 tahun, atau 3 ekor domba umur 1 tahun.`;
    } else if (jumlahUnta < 25) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 4 ekor kambing umur 2 tahun, atau 4 ekor domba umur 1 tahun.`;
    } else if (jumlahUnta < 36) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 1 ekor unta betina umur 1 tahun.`;
    } else if (jumlahUnta < 46) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 1 ekor unta betina umur 2 tahun.`;
    } else if (jumlahUnta < 61) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 1 ekor unta betina umur 3 tahun.`;
    } else if (jumlahUnta < 76) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 1 ekor unta betina umur 4 tahun.`;
    } else if (jumlahUnta < 91) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 2 ekor unta betina umur 2 tahun.`;
    } else if (jumlahUnta < 121) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 2 ekor unta betina umur 3 tahun.`;
    } else if (jumlahUnta < 140) {
        output3.innerHTML = `Zakat yang wajib dikeluarkan adalah 3 ekor unta betina umur 2 tahun.`;
    } else {
        let hitungUnta50 = jumlahUnta % 50
        let hitungUnta40 = jumlahUnta % 40
        if (hitungUnta50 == 0 && hitungUnta40 != 0) {
            let zakatUnta50 = jumlahUnta / 50
            output3.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatUnta50} ekor unta umur 3 tahun`
        } else if (hitungUnta40 == 0 && hitungUnta50 != 0) {
            let zakatUnta40 = jumlahUnta / 40
            output3.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatUnta40} ekor unta umur 2 tahun`
        } else {
            let zakatUnta40 = Math.floor(jumlahUnta / 40)
            let zakatUnta50 = Math.floor(jumlahUnta / 50)

            let sisaUnta50 = jumlahUnta % 50
            let jumlahSisaUnta40 = Math.floor(sisaUnta50 / 40)

            output3.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatUnta40} ekor unta umur 2 tahun atau ${zakatUnta50} ekor unta umur 3 tahun`
            if (jumlahSisaUnta40 != 0) {
                 output3.innerHTML = `Zakat yang wajib dikeluarkan adalah ${zakatUnta50} ekor unta umur 3 tahun dan ${jumlahSisaUnta40} ekor unta umur 2 tahun`
            }
           
        }
    }
}

function zakatHasilPanen() {
    let jenisPanen = document.getElementById('jenis-panen').value
    let beratPanen = parseFloat(document.getElementById('input-berat-panen').value.replace(',', '.'))
    let satuanBerat = document.getElementById('satuan-berat').value
    let irigasi = document.getElementById('irigasi-select').value
    let output3 = document.getElementById('output-zakat3');

    let jumlahBerat
    let nisabPanen = parseFloat(653)
    let zakatPanen
    let zakatUang

    output3.innerHTML = ""

    if (satuanBerat === "Kg") {
        jumlahBerat = beratPanen
    } else if (satuanBerat === "Kuintal") {
        jumlahBerat = parseFloat(beratPanen * 100)
    } else {
        jumlahBerat = parseFloat(beratPanen * 1000)
    }

    console.log(jumlahBerat)

    if (irigasi === "berbayar") {
        zakatPanen = parseFloat((jumlahBerat * 0.05).toFixed(2))
    } else {
        zakatPanen = parseFloat((jumlahBerat * 0.10).toFixed(2))
    }
    console.log(zakatPanen)

    if (jumlahBerat >= nisabPanen) {
        output3.innerHTML = `Zakat yang wajib dibayar adalah ${zakatPanen} Kg dari panen ${jenisPanen}`
    } else {
        output3.innerHTML = `Anda tidak wajib zakat`
    }

    if (isNaN(beratPanen)) {
        output3.innerHTML = `error! Masukkan input dengan benar`
    }
          
}

document.addEventListener('DOMContentLoaded', function() {
    function updateMenuVisibility() {
        let nisabSelect = document.getElementById('zakat-nisab').value;
        let output3 = document.getElementById('output-zakat3');
    
        document.querySelector('.penghasilan').style.display = "none";
        document.querySelector('.hewan-ternak').style.display = "none";
        document.querySelector('.hasil-panen').style.display = "none";

        output3.innerHTML = ''
    
        if (nisabSelect === 'penghasilan') {
            document.querySelector('.penghasilan').style.display = "flex";
        } else if (nisabSelect === 'Hewan-Ternak') {
            document.querySelector('.hewan-ternak').style.display = "flex";
        } else if (nisabSelect === 'Hasil-panen') {
            document.querySelector('.hasil-panen').style.display = "flex";
        }
    }   
    document.getElementById('zakat-nisab').addEventListener('change', updateMenuVisibility);   
    updateMenuVisibility()

    function pilihHewanVisibility() {
        let hewanSelect = document.getElementById('hewan-ternak-select').value
        let output3 = document.getElementById('output-zakat3');
        document.querySelector('.kambing').style.display = "none"
        document.querySelector('.sapi').style.display = "none"
        document.querySelector('.unta').style.display = "none"
        
        output3.innerHTML = ''

        if (hewanSelect === 'Kambing') {
            document.querySelector('.kambing').style.display = "flex"
        } else if (hewanSelect === 'Sapi') {
            document.querySelector('.sapi').style.display = "flex"
        } else if (hewanSelect === 'Unta') {
            document.querySelector('.unta').style.display = "flex"
        }
    }


    document.getElementById('hewan-ternak-select').addEventListener('change', pilihHewanVisibility)
    pilihHewanVisibility()


})

    function jenisPanenClick() {
        document.querySelector('.berat-panen').style.display = "flex"
    }




//Bangun Datar

// Bangun Lingkaran

function kelilingLingkaran() {
    let diameter = document.getElementById('input-diameter-lingkaran').value
    let switchJari2 = document.getElementById('option-jari2').value
    let output3 = document.getElementById('output-lingkaran3')
    let output1 = document.getElementById('output-lingkaran1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    let rumusConvert
    let initialisasiDiameter

    output3.innerHTML = ""

    if (isNaN(diameter) || diameter == 0) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let keliling
    let kelilingPi1
    let kelilingPi2
    let pi = 3.14
    let initialisasiPi

    if (switchJari2 === "Jari2") {
        kelilingPi1 = parseFloat((diameter * 2 * pi).toFixed(2))
        kelilingPi2 = parseFloat((diameter * 2 * 22/7).toFixed(2))
        rumusConvert = `2 x π x ${diameter}`
        initialisasiDiameter = 'jari-jari'

        if (Number.isInteger(kelilingPi1)) {
            keliling = kelilingPi1
            initialisasiPi = '3,14'
        } else if (Number.isInteger(kelilingPi2)) {
            keliling = kelilingPi2
            initialisasiPi = '22/7'
        } else {
            keliling = kelilingPi1
            initialisasiPi = '3,14'
        }
    } else if (switchJari2 === "Diameter") {
        kelilingPi1 = parseFloat((diameter * pi).toFixed(2))
        kelilingPi2 = parseFloat((diameter * 22/7).toFixed(2))
        rumusConvert = `π x ${diameter}`
        initialisasiDiameter = 'Diameter'

        if (Number.isInteger(kelilingPi1)) {
            keliling = kelilingPi1
            initialisasiPi = '3,14'
        } else if (Number.isInteger(kelilingPi2)) {
            keliling = kelilingPi2
            initialisasiPi = '22/7'
        } else {
            keliling = kelilingPi1
            initialisasiPi = '3,14'
        }
    }

    output3.innerHTML = `<h2>Keliling Lingkaran : ${keliling}`
    outputPenjelasan.innerHTML = 'Lihat Penjelasan'
    output1.innerHTML = `Rumus mencari keliling lingkaran adalah π x d jika diketahui diameternya atau 2 x π x r jika tidak diketahui diameternya<br>nilai ${initialisasiDiameter} diatas adalah ${diameter}<br>
                        Lalu kita masukkan menjadi ke rumus menjadi ${rumusConvert}<br>Nilai π adalah = 3,14 atau 22/7
                        <br>Jadi jika dijumlahkan berarti ${rumusConvert.replace('π', initialisasiPi)} <br> Maka hasil keliling adalah k = ${keliling}`

}

function luasLingkaran() {
    let diameter = document.getElementById('input-diameter-lingkaran').value
    let switchJari2 = document.getElementById('option-jari2').value
    let output3 = document.getElementById('output-lingkaran3')
    let output1 = document.getElementById('output-lingkaran1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    let rumusConvert
    let initialisasiDiameter

    output3.innerHTML = ""

    if (isNaN(diameter) || diameter == 0) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let luas
    let luasPi2
    let pi = 3.14
    let initialisasiPi

    console.log(pi)

    if (switchJari2 === "Jari2") {
        luasPi1 = parseFloat(((diameter * diameter) * pi).toFixed(2))
        luasPi2 = parseFloat(((diameter * diameter) * 22/7).toFixed(2))
        rumusConvert = `π x ${diameter}<sup>2</sup>`
        initialisasiDiameter = 'jari-jari'
        if (Number.isInteger(luasPi1)) {
            luas = luasPi1
            initialisasiPi = '3,14'
        } else if (Number.isInteger(luasPi2)){
            luas = luasPi2
            initialisasiPi = '22/7'
        } else {
            luas = luasPi1
            initialisasiPi = '3,14'
        }
    } else if (switchJari2 === "Diameter") {
        luasPi1 = parseFloat(((diameter / 2) * (diameter / 2)  * pi).toFixed(2))
        luasPi2 = parseFloat(((diameter / 2) * (diameter / 2)  * 22/7).toFixed(2))
        rumusConvert = `π x (${diameter}/2)<sup>2</sup>`
        initialisasiDiameter = 'Diameter'
        if (Number.isInteger(luasPi1)) {
            luas = luasPi1
            initialisasiPi = '3,14'
        } else if (Number.isInteger(luasPi2)){
            luas = luasPi2
            initialisasiPi = '22/7'
        } else {
            luas = luasPi1
            initialisasiPi = '3,14'
        }
    }
    output3.innerHTML = `<h2>Luas Lingkaran : ${luas}`
    outputPenjelasan.innerHTML = 'Lihat Penjelasan'
    output1.innerHTML = `Rumus mencari luas lingkaran adalah π x (d/2)<sup>2</sup> jika diketahui diameternya atau π x r<sup>2</sup> jika tidak diketahui diameternya<br>nilai ${initialisasiDiameter} diatas adalah ${diameter}<br>
                        Lalu kita masukkan menjadi ke rumus menjadi ${rumusConvert}<br>Nilai π adalah = 3,14 atau 22/7
                        <br>Jadi jika dijumlahkan berarti ${rumusConvert.replace('π', initialisasiPi)} <br> Maka hasil keliling adalah k = ${luas}`

}

function diameterJari2Lingkaran() {
    let keliling = document.getElementById('input-keliling-lingkaran').value
    let switchLuas = document.getElementById('option-luas').value
    let output3 = document.getElementById('output-lingkaran3')
    let output1 = document.getElementById('output-lingkaran1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(keliling) || keliling == 0) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let jari2
    let diameter
    let jariPi1
    let jariPi2
    let pi = 3.14
    let penjelasan

    if (switchLuas === 'Keliling-lingkaran') {
        jariPi1 = parseFloat((keliling / pi / 2).toFixed(2))
        jariPi2 = parseFloat((keliling / 22 * 7 / 2).toFixed(2))

        if (Number.isInteger(jariPi2)) {
            jari2 = jariPi2
        } else if (Number.isInteger(jariPi1)){
            jari2 = jariPi1
        } else {
            jari2 = jariPi1
        }
        penjelasan = `Maka r = (${keliling} : π) : 2`
    } else if (switchLuas === 'Luas-lingkaran') {
        jariPi1 = parseFloat(Math.sqrt((keliling / pi).toFixed(2)))
        jariPi2 = parseFloat(Math.sqrt((keliling / 22 * 7).toFixed(2)))

        if (Number.isInteger(jariPi2)) {
            jari2 = jariPi2.toFixed(2)
        } else if (Number.isInteger(jariPi1)){
            jari2 = jariPi1.toFixed(2)
        } else {
            jari2 = jariPi1.toFixed(2)
        }
        penjelasan = `Maka r = √(${keliling} : π)`
    }


    diameter = (jari2 * 2).toFixed(2)
    output3.innerHTML = `<h2>Jari-jari : ${jari2}
                        <br>Diameter : ${diameter}`
    outputPenjelasan.innerHTML = 'Lihat Penjelasan'
    output1.innerHTML = `Untuk mencari jari-jari dan diameter dari keliling yang di ketahui menggunakan rumus r = (keliling : π) : 2
                        <br>Sedangkan jika luas yang diketahui maka menggunakan rumus r = √ (luas : π)<br>${penjelasan}
                        <br>r (jari-jari) = ${jari2} <br>diameter = r x 2<br>diameter = ${jari2} x 2<br>diameter = ${diameter}`
}
document.addEventListener('DOMContentLoaded', function() {
    function lingkaranVisibilty() {
        let switchOption = document.getElementById('opsi-lingkaran').value
        let inputJari2 = document.querySelector('.input-d-r')
        let inputKeliling = document.querySelector('.input-k-l')
        let btnKeliling = document.getElementById('hasil-keliling-lingkaran')
        let btnLuas = document.getElementById('hasil-luas-lingkaran')
        let btnJari2 = document.getElementById('hasil-d-r-lingkaran')
        let output3 = document.getElementById('output-lingkaran3')
        let output1 = document.getElementById('output-lingkaran1')
        let outputPenjelasan = document.getElementById('output-penjelasan')

        inputJari2.style.display = 'none'
        inputKeliling.style.display = 'none'
        btnKeliling.style.display = 'none'
        btnLuas.style.display = 'none'
        btnJari2.style.display = 'none'

        output3.innerHTML = ""
        outputPenjelasan.innerHTML = ''
        output1.innerHTML = ''


        if (switchOption === 'keliling') {
            inputJari2.style.display = 'block'
            btnKeliling.style.display = 'block'
        } else if (switchOption === 'Luas') {
            inputJari2.style.display = 'block'
            btnLuas.style.display = 'block'
        } else if (switchOption === 'Diameter') {
            inputKeliling.style.display = 'block'
            btnJari2.style.display = 'block'
        }
    }

    document.getElementById('opsi-lingkaran').addEventListener('change', lingkaranVisibilty)
    lingkaranVisibilty()
})

function kelilingPersegi() {
    let sisi = document.getElementById('input-sisi-persegi').value
    let output3 = document.getElementById('output-persegi3')
    let output1 = document.getElementById('output-persegi1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output3.innerHTML = ``
    output1.innerHTML = ""
    outputPenjelasan.innerHTML = ""

    if (isNaN(sisi) || sisi == 0) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let kelilingPersegi = sisi * 4

    output3.innerHTML = `<h1>Keliling : ${kelilingPersegi}`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `Rumus mencari keliling persegi yaitu sisi x 4
                        <br>Jadi ${sisi} x 4 = ${kelilingPersegi}
                        <br>Jadi k = ${kelilingPersegi}`
}

function luasPersegi() {
    let sisi = document.getElementById('input-sisi-persegi').value
    let output3 = document.getElementById('output-persegi3')
    let output1 = document.getElementById('output-persegi1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output3.innerHTML = ``
    output1.innerHTML = ""
    outputPenjelasan.innerHTML = ""

    if (isNaN(sisi) || sisi == 0) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let luasPersegi = sisi * sisi

    output3.innerHTML = `<h1>Luas : ${luasPersegi}`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `Rumus mencari luas persegi yaitu sisi<sup>2</sup> atau sisi x sisi
                        <br>Jadi ${sisi}<sup>2</sup>= ${luasPersegi}
                        <br>Jadi luas = ${luasPersegi}`
}

function sisiPersegi() {
    let kelilingLuas = parseFloat(document.getElementById('input-keliling-persegi').value)
    let switchOption = document.getElementById('option-luas-persegi').value
    let output3 = document.getElementById('output-persegi3')
    let output1 = document.getElementById('output-persegi1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output3.innerHTML = ``
    output1.innerHTML = ""
    outputPenjelasan.innerHTML = ""

    if (isNaN(kelilingLuas) || kelilingLuas == 0) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let sisi
    let initialisasiKL
    let initialisasiRumus

    if (switchOption === 'Keliling-persegi') {
        sisi = parseFloat((kelilingLuas / 4).toFixed(2))
        initialisasiKL = 'Keliling'
        initialisasiRumus = `${kelilingLuas} : 4 = ${sisi}`
    } else if (switchOption === 'Luas-persegi') {
        sisi =  parseFloat(Math.sqrt(kelilingLuas).toFixed(2))
        initialisasiKL = 'Luas'
        initialisasiRumus = `√${kelilingLuas} = ${sisi}`
    }

    output3.innerHTML = `<h1>Sisi : ${sisi}`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `Cara mencari sisi persegi yang diketahui keliling atau luasnya adalah
                        <br> s = keliling : 4 jika diketahui kelilingnya atau
                        <br> s = √luas jika diketahui luasnya<br>karena diatas diketahui ${initialisasiKL} maka <br>${initialisasiRumus}<br>Jadi sisi = ${sisi}`
}

document.addEventListener('DOMContentLoaded', function() {
    function persegiVisibility() {
        let switchOption = document.getElementById('opsi-persegi').value
        let inputSisi = document.querySelector('.input-sisi-persegi')
        let inputKeliling = document.querySelector('.input-keliling-persegi')
        let btnKeliling = document.getElementById('hasil-keliling-persegi')
        let btnLuas = document.getElementById('hasil-luas-persegi')
        let btnSisi = document.getElementById('hasil-sisi-persegi')
        let output3 = document.getElementById('output-persegi3')
        let output1 = document.getElementById('output-persegi1')
        let outputPenjelasan = document.getElementById('output-penjelasan')

        output3.innerHTML = ""
        outputPenjelasan.innerHTML = ''
        output1.innerHTML = ''

        inputSisi.style.display = 'none'
        inputKeliling.style.display = 'none'
        btnKeliling.style.display = 'none'
        btnLuas.style.display = 'none'
        btnSisi.style.display = 'none'


        if (switchOption === 'Keliling') {
            inputSisi.style.display = 'block'
            btnKeliling.style.display = 'block'
        } else if (switchOption === 'Luas') {
            inputSisi.style.display = 'block'
            btnLuas.style.display = 'block'
        } else if (switchOption === 'Sisi') {
            inputKeliling.style.display = 'block'
            btnSisi.style.display = 'block'
        }
    }
    document.getElementById('opsi-persegi').addEventListener('change', persegiVisibility)
    persegiVisibility()

})



// Persegi Panjang


document.addEventListener('DOMContentLoaded', function() {
    function persegiPanjangVisibility() {
        let switchOption = document.getElementById('opsi-persegiPanjang').value
        let inputPanjangLebar = document.querySelector('.input-sisi-persegiPanjang')
        let inputKeliling = document.querySelector('.input-keliling-persegiPanjang')
        let btnKeliling = document.getElementById('hasil-keliling-persegiPanjang')
        let btnLuas = document.getElementById('hasil-luas-persegiPanjang')
        let btnSisi = document.getElementById('hasil-sisi-persegiPanjang')
        let output3 = document.getElementById('output-persegiPanjang3')
        let output1 = document.getElementById('output-persegiPanjang1')
        let outputPenjelasan = document.getElementById('output-penjelasan')
    
        output3.innerHTML = ""
        outputPenjelasan.innerHTML = ''
        output1.innerHTML = ''
    
        inputPanjangLebar.style.display = 'none'
        inputKeliling.style.display = 'none'
        btnKeliling.style.display = 'none'
        btnLuas.style.display = 'none'
        btnSisi.style.display = 'none'
    
        if (switchOption === 'Keliling') {
            inputPanjangLebar.style.display = 'block'
            btnKeliling.style.display = 'block'
        } else if (switchOption === 'Luas') {
            inputPanjangLebar.style.display = 'block'
            btnLuas.style.display = 'block'
        } else if (switchOption === 'PanjangLebar') {
            inputKeliling.style.display = 'block'
            btnSisi.style.display = 'block'
        }
    
    }
    document.getElementById('opsi-persegiPanjang').addEventListener('change', persegiPanjangVisibility)
    persegiPanjangVisibility()
})


function kelilingPersegiPanjang() {
    let Panjang = parseFloat(document.getElementById('input-panjang-persegiPanjang').value)
    let Lebar = parseFloat(document.getElementById('input-lebar-persegiPanjang').value)
    let output3 = document.getElementById('output-persegiPanjang3')
    let output1 = document.getElementById('output-persegiPanjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output3.innerHTML = ""
    outputPenjelasan.innerHTML = ''
    output1.innerHTML = ''

    if (isNaN(Panjang) || isNaN(Lebar)) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let keliling = 2 * (Panjang + Lebar)

    output3.innerHTML = `<h1>Keliling : ${keliling}`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `Rumus mencari keliling persegi panjang adalah keliling = 2 x (panjang + lebar)
                        <br>Jadi keliling = 2 x (${Panjang} + ${Lebar})<br>keliling = 2 x ${Panjang + Lebar}
                        <br>Keliling = ${keliling}`

}

function luasPersegiPanjang() {
    let Panjang = parseFloat(document.getElementById('input-panjang-persegiPanjang').value)
    let Lebar = parseFloat(document.getElementById('input-lebar-persegiPanjang').value)
    let output3 = document.getElementById('output-persegiPanjang3')
    let output1 = document.getElementById('output-persegiPanjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output3.innerHTML = ""
    outputPenjelasan.innerHTML = ''
    output1.innerHTML = ''

    if (isNaN(Panjang) || isNaN(Lebar)) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let luas = Panjang * Lebar

    output3.innerHTML = `<h1>Luas : ${luas}`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `Rumus mencari luas persegi panjang adalah luas = panjang x lebar
                        <br>Jadi luas = ${Panjang} x ${Lebar}<br>Luas = ${luas}`

}

function sisiPersegiPanjang() {
    let kelilingLuas = document.getElementById('input-keliling-persegiPanjang').value
    let panjangLebar = document.getElementById('input-p-l-persegiPanjang').value
    let switchLuas = document.getElementById('option-luas-persegiPanjang').value
    let switchLebar = document.getElementById('option-p-l-persegiPanjang').value
    let output3 = document.getElementById('output-persegiPanjang3')
    let output1 = document.getElementById('output-persegiPanjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output3.innerHTML = ""
    outputPenjelasan.innerHTML = ''
    output1.innerHTML = ''

    if (isNaN(kelilingLuas) || isNaN(panjangLebar)) {
        output3.innerHTML = `Error! Masukkan nilai dengan benar`
        output1.innerHTML = ""
        outputPenjelasan.innerHTML = ""
        return
    }

    let panjang
    let lebar

    if (switchLuas === 'Keliling-persegiPanjang' && switchLebar === 'panjang-persegiPanjang') {
        lebar = parseFloat((kelilingLuas / 2 - panjangLebar).toFixed(2))
        panjang = panjangLebar
        output1.innerHTML = `Rumus mencari lebar persegi panjang yang diketahui keliling dan panjangnya yaitu
                            <br>lebar = (keliling : 2) - panjang<br> jadi lebar = (${kelilingLuas} : 2) - ${panjangLebar}<br>
                            lebar = ${kelilingLuas / 2} - ${panjangLebar}<br>Jadi lebar = ${lebar}`
    } else if (switchLuas === 'Keliling-persegiPanjang' && switchLebar === 'lebar-persegiPanjang') {
        panjang = parseFloat((kelilingLuas / 2 - panjangLebar).toFixed(2))
        lebar = panjangLebar
        output1.innerHTML = `Rumus mencari panjang persegi panjang yang diketahui keliling dan lebarnya yaitu
                            <br>panjang = (keliling : 2) - lebar<br> jadi panjang = (${kelilingLuas} : 2) - ${panjangLebar}<br>
                            panjang = ${kelilingLuas / 2} - ${panjangLebar}<br>Jadi panjang = ${panjang}`
    } else if (switchLuas === 'Luas-persegiPanjang' && switchLebar === 'panjang-persegiPanjang') {
        lebar = parseFloat((kelilingLuas / panjangLebar).toFixed(2))
        panjang = panjangLebar
        output1.innerHTML = `Rumus mencari lebar persegi panjang yang diketahui luas dan panjangnya yaitu
                            <br>lebar = luas : panjang<br> jadi lebar = ${kelilingLuas} : ${panjangLebar} <br>Jadi lebar = ${lebar}`
    } else if (switchLuas === 'Luas-persegiPanjang' && switchLebar === 'lebar-persegiPanjang') {
        panjang = parseFloat((kelilingLuas / panjangLebar).toFixed(2))
        lebar = panjangLebar
        output1.innerHTML = `Rumus mencari panjang persegi panjang yang diketahui luas dan lebarnya yaitu
                            <br>panjang = luas : lebar<br> jadi panjang = ${kelilingLuas} : ${panjangLebar} <br>Jadi panjang = ${panjang}`
    }

    output3.innerHTML = `<h1>Panjang : ${panjang}<br>Lebar : ${lebar}`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`


}

//bangun segitiga

function kelilingSegitiga() {
    let sisiA = document.getElementById('input-sisi-a-segitiga').value
    let sisiB = document.getElementById('input-sisi-b-segitiga').value
    let sisiC = document.getElementById('input-sisi-c-segitiga').value
    let output3 = document.getElementById('output-segitiga3')
    let output1 = document.getElementById('output-segitiga1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    let keliling = Number(sisiA) + Number(sisiB) + Number(sisiC)

    output3.innerHTML = `<h1>Keliling : ${keliling}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <h2>Langkah-langkah Perhitungan:</h2>
        <p>1. Pertama, kita ambil panjang ketiga sisi segitiga:</p>
        <ul>
            <li>Sisi A = ${sisiA}</li>
            <li>Sisi B = ${sisiB}</li>
            <li>Sisi C = ${sisiC}</li>
        </ul>
        <p>2. Kemudian, kita gunakan rumus keliling segitiga: </p>
        <pre>Keliling = a + b + c</pre>
        <p>3. Substitusi nilai sisi ke dalam rumus:</p>
        <pre>Keliling = ${sisiA} + ${sisiB} + ${sisiC}</pre>
        <p>4. Hasilnya adalah: <strong>${keliling}</strong></p>
    `;
}

function luasSegitigaDenganTinggi() {
    let tinggi = document.getElementById('input-tinggi-segitiga').value
    let alas = document.getElementById('input-alas-segitiga').value
    let output3 = document.getElementById('output-segitiga3')
    let output1 = document.getElementById('output-segitiga1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    let luas = (alas * tinggi) / 2

    output3.innerHTML = `<h1>Luas : ${luas}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <h2>Langkah-langkah Perhitungan:</h2>
        <p>1. Pertama, kita ambil alas dan tinggi segitiga:</p>
        <ul>
            <li>Alas = ${alas}</li>
            <li>Tinggi = ${tinggi}</li>
        </ul>
        <p>2. Kemudian, kita gunakan rumus luas segitiga: </p>
        <pre>Luas = 1/2 * alas * tinggi</pre>
        <p>3. Substitusi nilai alas dan tinggi ke dalam rumus:</p>
        <pre>Luas = 1/2 * ${alas} * ${tinggi}</pre>
        <p>4. Hasilnya adalah: <strong>${luas}</strong></p>
    `;
}

//rumus heron

function luasSegitigaHeron() {
    let sisiA = document.getElementById('input-sisi-a-segitiga-x').value
    let sisiB = document.getElementById('input-sisi-b-segitiga-x').value
    let sisiC = document.getElementById('input-sisi-c-segitiga-x').value
    let output3 = document.getElementById('output-segitiga3')
    let output1 = document.getElementById('output-segitiga1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    let s = (Number(sisiA) + Number(sisiB) + Number(sisiC)) / 2 //setengah keliling segitiga
    let luas = parseFloat(Math.sqrt(s * (s - sisiA) * (s - sisiB) * (s-sisiC)).toFixed(2))

    output3.innerHTML = `<h1>Luas : ${luas}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <h2>Langkah-langkah Perhitungan:</h2>
        <p>1. Pertama, kita ambil panjang ketiga sisi segitiga:</p>
        <ul>
            <li>Sisi A = ${sisiA}</li>
            <li>Sisi B = ${sisiB}</li>
            <li>Sisi C = ${sisiC}</li>
        </ul>
        <p>2. Hitung setengah keliling segitiga (semiperimeter):</p>
        <pre>s = (a + b + c) / 2 = (${sisiA} + ${sisiB} + ${sisiC}) / 2 = ${s}</pre>
        <p>3. Kemudian, hitung luas segitiga dengan rumus Heron:</p>
        <pre>Luas = √s(s - a)(s - b)(s - c)</pre>
        <p>4. Substitusi nilai semiperimeter dan sisi ke dalam rumus:</p>
        <pre>Luas = √${s}(${s} - ${sisiA})(${s} - ${sisiB})(${s} - ${sisiC}) = ${luas.toFixed(2)}</pre>
        <p>5. Hasilnya adalah: <strong>${luas.toFixed(2)}</strong></p>
    `;
}

function tinggiSegitigaHeron() {
    let sisiA = document.getElementById('input-sisi-a-segitiga-t').value
    let sisiB = document.getElementById('input-sisi-b-segitiga-t').value
    let sisiC = document.getElementById('input-sisi-c-segitiga-t').value
    let output3 = document.getElementById('output-segitiga3')
    let output1 = document.getElementById('output-segitiga1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    let s = (Number(sisiA) + Number(sisiB) + Number(sisiC)) / 2 //setengah keliling segitiga
    let luas = parseFloat(Math.sqrt(s * (s - sisiA) * (s - sisiB) * (s-sisiC)).toFixed(2))
    let tinggi = parseFloat(((2 * luas) / sisiA).toFixed(2))

    output3.innerHTML = `<h1>Tinggi : ${tinggi}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <h2>Langkah-langkah Perhitungan:</h2>
        <p>1. Pertama, kita ambil panjang ketiga sisi segitiga:</p>
        <ul>
            <li>Sisi A = ${sisiA}</li>
            <li>Sisi B = ${sisiB}</li>
            <li>Sisi C = ${sisiC}</li>
        </ul>
        <p>2. Hitung setengah keliling segitiga (semiperimeter):</p>
        <pre>s = (a + b + c) / 2 = (${sisiA} + ${sisiB} + ${sisiC}) / 2 = ${s}</pre>
        <p>3. Hitung luas segitiga menggunakan rumus Heron.</p>
        <pre>Luas = √s(s - a)(s - b)(s - c) = ${luas.toFixed(2)}</pre>
        <p>4. Kemudian, hitung tinggi segitiga dengan rumus:</p>
        <pre>Tinggi = (2 * Luas) / Alas = (2 * ${luas.toFixed(2)}) / ${sisiA}</pre>
        <p>5. Hasilnya adalah: <strong>${tinggi.toFixed(2)}</strong></p>
    `;
}

// jajar genjang

function kelilingJajarGenjang() {
    let alas = document.getElementById('input-sisialas-jajargenjang-k').value
    let miring = document.getElementById('input-sisimiring-jajargenjang-k').value
    let output3 = document.getElementById('output-jajargenjang3')
    let output1 = document.getElementById('output-jajargenjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    // Validate input values
    if (isNaN(alas) || isNaN(miring) || alas.trim() === "" || miring.trim() === "") {
        output3.innerHTML = "<h1>Masukkan nilai yang valid untuk alas dan miring!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let keliling = 2 * (Number(alas) + Number(miring))

    // Output
    output3.innerHTML = `<h1>Keliling : ${keliling}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <h2>Penjelasan:</h2>
        <p>Keliling jajar genjang dihitung dengan rumus:</p>
        <pre>Keliling = 2 × (Alas + Miring)</pre>
        <p>Dengan nilai yang dimasukkan:</p>
        <ul>
            <li><strong>Alas</strong>: ${alas}</li>
            <li><strong>Miring</strong>: ${miring}</li>
        </ul>
        <p>Langkah perhitungannya:</p>
        <ol>
            <li>Jumlahkan alas dan miring: ${alas} + ${miring} = ${alas + miring}</li>
            <li>Kali hasilnya dengan 2 jadi ${Number(alas) + Number(miring)} x 2 = ${keliling}</li>
        </ol>
        <p>Jadi, keliling jajar genjang ini adalah <strong>${keliling}</strong>.</p>`

}

function luasJajarGenjang() {
    let alas = document.getElementById('input-alas-jajargenjang-l').value
    let tinggi = document.getElementById('input-tinggi-jajargenjang-l').value
    let output3 = document.getElementById('output-jajargenjang3')
    let output1 = document.getElementById('output-jajargenjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    // Validate input values
    if (isNaN(alas) || isNaN(tinggi) || alas.trim() === "" || tinggi.trim() === "") {
        output3.innerHTML = "<h1>Masukkan nilai yang valid untuk alas dan tinggi!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let luas = Number(alas) * Number(tinggi)

    // Output
    output3.innerHTML = `<h1>Luas : ${luas}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <h2>Penjelasan:</h2>
        <p>Luas jajar genjang dihitung dengan rumus:</p>
        <pre>Luas = Alas × Tinggi</pre>
        <p>Dengan nilai yang dimasukkan:</p>
        <ul>
            <li><strong>Alas</strong>: ${alas}</li>
            <li><strong>Tinggi</strong>: ${tinggi}</li>
        </ul>
        <p>Langkah perhitungannya:</p>
        <ol>
            <li>Kali alas dengan tinggi: ${alas} × ${tinggi} = ${luas}</li>
        </ol>
        <p>Jadi, luas jajar genjang ini adalah <strong>${luas}</strong> satuan luas.</p>`
}

function tinggiJajarGenjangDiketLA() { //mencari tinggi jajar genjang dengan luas dan alas
    let luas = document.getElementById('input-luas-jajargenjang-t').value
    let alas = document.getElementById('input-alas-jajargenjang-t').value
    let output3 = document.getElementById('output-jajargenjang3')
    let output1 = document.getElementById('output-jajargenjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    // Validate input values
    if (isNaN(alas) || isNaN(luas) || alas.trim() === "" || luas.trim() === "") {
        output3.innerHTML = "<h1>Masukkan nilai yang valid untuk alas dan luas!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let tinggi = parseFloat((Number(luas) / Number(alas)).toFixed(3))

    // Output
    output3.innerHTML = `<h1>Tinggi : ${tinggi}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <h2>Penjelasan:</h2>
        <p>Tinggi jajar genjang dihitung dengan rumus:</p>
        <pre>Tinggi = Luas ÷ Alas</pre>
        <p>Dengan nilai yang dimasukkan:</p>
        <ul>
            <li><strong>Luas</strong>: ${luas}</li>
            <li><strong>Alas</strong>: ${alas}</li>
        </ul>
        <p>Langkah perhitungannya:</p>
        <ol>
            <li>Bagikan luas dengan alas: ${luas} ÷ ${alas} = ${tinggi}</li>
        </ol>
        <p>Jadi, tinggi jajar genjang ini adalah <strong>${tinggi}</strong> satuan panjang.</p>`
}

function tinggiJajarGenjangDiketSudut() {
    let opsiSisi = document.getElementById('opsi-sisi-mencaritinggi').value
    let sisi = document.getElementById('input-sisi-jajargenjang-t').value
    let sudutDerajat = document.getElementById('input-sudut-jajargenjang-t').value
    let output3 = document.getElementById('output-jajargenjang3')
    let output1 = document.getElementById('output-jajargenjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    // Validate input values
    if (isNaN(sisi) || isNaN(sudutDerajat) || sisi.trim() === "" || sudutDerajat.trim() === "") {
        output3.innerHTML = "<h1>Masukkan nilai yang valid untuk sisi dan Derajat!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let tinggi
    let sudutRadian = sudutDerajat * (Math.PI / 180)

    switch(opsiSisi) {
        case 'alas':
            tinggi = sisi * Math.tan(sudutRadian)
            output1.innerHTML = `
            <h2>Penjelasan:</h2>
            <p>Tinggi jajar genjang dihitung dengan rumus:</p>
            <pre>Tinggi = Alas × tan(Sudut)</pre>
            <p>Dengan nilai yang dimasukkan:</p>
            <ul>
                <li><strong>Alas</strong>: ${sisi}</li>
                <li><strong>Sudut</strong>: ${sudutDerajat}°</li>
            </ul>
            <p>Langkah perhitungannya:</p>
            <ol>
                <li>Konversikan sudut ke radian: ${sudutDerajat}° × (π / 180) = ${sudutRadian.toFixed(3)} radian</li>
                <li>Hitung tinggi: ${sisi} × tan(${sudutRadian.toFixed(3)}) = ${parseFloat(tinggi.toFixed(3))}</li>
            </ol>
            <p>Jadi, tinggi jajar genjang ini adalah <strong>${parseFloat(tinggi.toFixed(3))}</strong> satuan panjang.</p>`
            break
        case 'miring':
            tinggi = sisi * Math.sin(sudutRadian)
            output1.innerHTML = `
            <h2>Penjelasan:</h2>
            <p>Tinggi jajar genjang dihitung dengan rumus:</p>
            <pre>Tinggi = Sisi Miring × sin(Sudut)</pre>
            <p>Dengan nilai yang dimasukkan:</p>
            <ul>
                <li><strong>Sisi Miring</strong>: ${sisi}</li>
                <li><strong>Sudut</strong>: ${sudutDerajat}°</li>
            </ul>
            <p>Langkah perhitungannya:</p>
            <ol>
                <li>Konversikan sudut ke radian: ${sudutDerajat}° × (π / 180) = ${sudutRadian.toFixed(3)} radian</li>
                <li>Hitung tinggi: ${sisi} × sin(${sudutRadian.toFixed(3)}) = ${parseFloat(tinggi.toFixed(3))}</li>
            </ol>
            <p>Jadi, tinggi jajar genjang ini adalah <strong>${parseFloat(tinggi.toFixed(3))}</strong> satuan panjang.</p>`
            break
        default:
            output3.innerHTML = "<h1>Pilih opsi sisi yang benar!</h1>";
            return;
    }
    output3.innerHTML = `<h1>Tinggi : ${parseFloat(tinggi.toFixed(3))}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
}

function alasDiketahuiKeliling(keliling, sisi) {
    const alas = (keliling / 2) - sisi
    return alas
}

function alasDiketahuiLuas(luas, tinggi) {
    const alas = luas / tinggi
    return alas
}

function alasJajarGenjang() {
    let opsi = document.getElementById('opsi-mencarialas').value
    let inputKL = document.getElementById('input-k/l-jajargenjang-a').value
    let tinggi = document.getElementById('input-tinggi-jajargenjang-a').value
    let miring = document.getElementById('input-miring-jajargenjang-a').value
    let output3 = document.getElementById('output-jajargenjang3')
    let output1 = document.getElementById('output-jajargenjang1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(inputKL) || isNaN(tinggi) || isNaN(miring) || inputKL.trim() === "" || tinggi.trim() === "" || miring.trim() === "") {
        output3.innerHTML = "<h1>Masukkan nilai yang valid!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let alas

    switch(opsi) {
        case 'luas':
            let luas = inputKL
            alas = alasDiketahuiLuas(luas, tinggi)
            output1.innerHTML = `
                <h2>Penjelasan Perhitungan:</h2>
                <p>Rumus yang digunakan: <b>Alas = Luas / Tinggi</b></p>
                <p>Langkah 1: Masukkan nilai Luas = ${luas} cm² dan Tinggi = ${tinggi} cm.</p>
                <p>Langkah 2: Hitung alas: ${luas} / ${tinggi} = <b>${alas} cm</b></p>
                <p>Jadi, panjang alas jajargenjang adalah <b>${alas} cm</b>.</p>`
            break
        case 'keliling':
            let keliling = inputKL
            alas = alasDiketahuiKeliling(keliling, miring)
            output1.innerHTML = `
                <h2>Penjelasan Perhitungan:</h2>
                <p>Rumus yang digunakan: <b>Alas = (Keliling / 2) - Sisi Miring</b></p>
                <p>Langkah 1: Masukkan nilai Keliling = ${keliling} cm dan Sisi Miring = ${miring} cm.</p>
                <p>Langkah 2: Hitung alas: (${keliling} / 2) - ${miring} = (${keliling / 2}) - ${miring} = <b>${alas} cm</b></p>
                <p>Jadi, panjang alas jajargenjang adalah <b>${alas} cm</b>.</p>`
            break
        default:
    }
    
    output3.innerHTML = `<h1>Alas : ${alas}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
}

// bangun trapesium
function kelilingTrapesium() {
    let sisiAlasA = parseFloat(document.getElementById('input-sisi-trap-a-k').value)
    let sisiAlasB = parseFloat(document.getElementById('input-sisi-trap-b-k').value)
    let sisiMiringC = parseFloat(document.getElementById('input-sisi-trap-c-k').value)
    let sisiMiringD = parseFloat(document.getElementById('input-sisi-trap-d-k').value)
    let output3 = document.getElementById('output-trapesium3')
    let output1 = document.getElementById('output-trapesium1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(sisiAlasA) || isNaN(sisiAlasB) || isNaN(sisiMiringC) || isNaN(sisiMiringD)) {
        output3.innerHTML = "<h1>Masukkan nilai yang valid!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let keliling = sisiAlasA + sisiAlasB + sisiMiringC + sisiMiringD

    output3.innerHTML = `<h1>Keliling : ${keliling}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
    <h2>Penjelasan Perhitungan Keliling Trapesium:</h2>
    <p>Rumus yang digunakan: <b>Keliling = Sisi A + Sisi B + Sisi C + Sisi D</b></p>
    <p>Langkah 1: Masukkan nilai panjang sisi-sisi trapesium.</p>
    <ul>
      <li><b>Sisi A (alas bawah) = ${sisiAlasA} cm</b></li>
      <li><b>Sisi B (alas atas) = ${sisiAlasB} cm</b></li>
      <li><b>Sisi C (sisi miring kiri) = ${sisiMiringC} cm</b></li>
      <li><b>Sisi D (sisi miring kanan) = ${sisiMiringD} cm</b></li>
    </ul>
    <p>Langkah 2: Hitung keliling trapesium: <b>${keliling} cm</b></p>
    <p>Keliling = ${sisiAlasA} + ${sisiAlasB} + ${sisiMiringC} + ${sisiMiringD} = <b>${keliling} cm</b>.</p>
    <p>Jadi, keliling trapesium tersebut adalah <b>${keliling} cm</b>.</p>
  `
}

function luasTrapesium() {
    let sisiAlasA = parseFloat(document.getElementById('input-sisi-trap-a-l').value)
    let sisiAlasB = parseFloat(document.getElementById('input-sisi-trap-b-l').value)
    let tinggi = parseFloat(document.getElementById('input-tinggi-trap-l').value)
    let output3 = document.getElementById('output-trapesium3')
    let output1 = document.getElementById('output-trapesium1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(sisiAlasA) || isNaN(sisiAlasB) || isNaN(tinggi)) {
        output3.innerHTML = "<h1>Masukkan nilai yang valid!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let luas = (sisiAlasA + sisiAlasB) * tinggi / 2

    output3.innerHTML = `<h1>Luas : ${luas}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `
        <p><strong>Rumus Luas Trapesium:</strong></p>
        <p>Luas = (Sisi Alas A + Sisi Alas B) × Tinggi ÷ 2</p>
        <p>Dengan memasukkan nilai-nilai berikut:</p>
        <ul>
            <li><strong>Sisi Alas A:</strong> ${sisiAlasA} cm</li>
            <li><strong>Sisi Alas B:</strong> ${sisiAlasB} cm</li>
            <li><strong>Tinggi:</strong> ${tinggi} cm</li>
        </ul>
        <p>Maka luas trapesium dapat dihitung sebagai berikut:</p>
        <p><strong>Luas = (${sisiAlasA} + ${sisiAlasB}) × ${tinggi} ÷ 2</strong></p>
        <p><strong>Luas = ${luas} cm²</strong></p>
    `
}


function tinggiTrapesium() {
    let sisiAlasA = parseFloat(document.getElementById('input-sisi-trap-a-t').value)
    let sisiAlasB = parseFloat(document.getElementById('input-sisi-trap-b-t').value)
    let luas = parseFloat(document.getElementById('input-luas-trap-t').value)
    let output3 = document.getElementById('output-trapesium3')
    let output1 = document.getElementById('output-trapesium1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(sisiAlasA) || isNaN(sisiAlasB) || isNaN(luas)) {
        output3.innerHTML = "<h1>Masukkan nilai yang valid!</h1>"  // Error message
        outputPenjelasan.innerHTML = ""  // Clear explanation if invalid
        return
    }

    let tinggi  = (luas * 2) / (sisiAlasA + sisiAlasB)

    output3.innerHTML = `<h1>Tinggi : ${tinggi}</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
}

// faktorial

function faktorial(n) {
    if (n === 0) {
        return 1
    }
    return n * faktorial(n-1)
}


function faktorialAngka() {
    let angka = parseFloat(document.getElementById('inputfaktorial').value)
    let output3 = document.getElementById('output-faktorial3')
    let output1 = document.getElementById('output-faktorial1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    let langkah = []
    let hasilFaktorial = 1
    for (let i = angka; i >= 1; i--) {
        hasilFaktorial *= i
        langkah.push(i)
    }
    let langkahRumus = `${angka}! = ${langkah.join('x')}`
    
    output3.innerHTML = `<h1>Hasil ${angka}! = ${formatAngka(hasilFaktorial)}`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `Faktorial adalah hasil perkalian semua bilangan bulat positif dari 1 hingga bilangan tersebut.<br>
                        Rumus mencari faktorial yaitu a! = a x (a-1) x (a-2) x.... hingga a x 1 <br>
                        Jadi <strong>${langkahRumus}</strong><br> ${angka}! = ${hasilFaktorial}`
}

function visibilityBmiGenderPria() {
    let priaMenu = document.querySelector('.bmi-pria')
    let wanitaMenu = document.querySelector('.bmi-wanita')

    priaMenu.style.display = 'flex'
    wanitaMenu.style.display = "none"
}
function visibilityBmiGenderWanita() {
    let priaMenu = document.querySelector('.bmi-pria')
    let wanitaMenu = document.querySelector('.bmi-wanita')

    priaMenu.style.display = 'none'
    wanitaMenu.style.display = "flex"
}

function bmiPria() {
    let umur = document.getElementById('input-umur-bmi-pria').value
    let tinggiBadan = document.getElementById('input-tb-bmi-pria').value
    let beratBadan = document.getElementById('input-bb-bmi-pria').value
    let nama = document.getElementById('input-nama-pria').value
    let output3 = document.getElementById('output-bmi3')
    let output2 = document.getElementById('output-bmi2')
    let output1 = document.getElementById('output-bmi1')
    let outputPenjelasan = document.getElementById('output-penjelasan')
    let outputBmiKeterangan = document.getElementById('bmi-keterangan')
    let bmiGrafik = document.getElementById('bmi-grafik')
    let bmiPoint = document.getElementById('bmi-point')
    
    tinggiBadan = tinggiBadan * 0.01
    let bmi = parseFloat((beratBadan / (tinggiBadan ** 2)).toFixed(1))
    let underWeight = `Kekurangan Berat Badan`
    let ideal = `Berat Ideal`
    let overWeight = `Kelebihan Berat Badan`
    let obesitas = `Obesitas`
    let statusKesehatan
    let bmiPointValue
    let saranKata
    
    if (isNaN(tinggiBadan) || isNaN(beratBadan) || isNaN(bmi)){
        output3.innerHTML = `<h2>Masukkan input dengan benar!`
        outputPenjelasan.innerHTML = ``
        output1.innerHTML = ``
        return
    }

    if (bmi < 18.5) {
        statusKesehatan = underWeight
        saranKata = ['Tingkatkan Asupan Kalori dan Nutrisimu', 'Konsultasi dengan Dokter atau Ahli Gizi', 'Tingkatkan Frekuensi Makanmu', 'Perhatikan Aktivitas Fisikmu', 'Fokus pada makanan tinggi nutrisi dan kalori sehat seperti kacang-kacangan, alpukat, dan biji-bijian. Pastikan untuk mendapatkan asupan protein yang cukup.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                            <br>
                            Konsultasi dengan Dokter atau Ahli Gizi: Jika anak atau remaja memiliki BMI yang rendah, penting untuk mencari penyebab potensialnya, seperti masalah kesehatan, gangguan makan, atau faktor genetik. Dokter atau ahli gizi dapat memberikan diagnosis yang tepat dan saran untuk meningkatkan berat badan secara sehat.
                            <br>
                            <br>
                            Meningkatkan Asupan Kalori dan Nutrisi: Fokus pada konsumsi makanan yang bergizi dan tinggi kalori, seperti alpukat, kacang-kacangan, keju, dan susu full-fat. Makanan yang kaya akan protein dan lemak sehat (misalnya ikan, ayam, kacang, dan biji-bijian) dapat membantu meningkatkan massa otot dan berat badan secara sehat.
                            <br>
                            Peningkatan Frekuensi Makan: Makan lebih sering dengan porsi lebih kecil dapat membantu meningkatkan konsumsi kalori. Cobalah makan 5-6 kali sehari (termasuk camilan sehat).
                            <br>
                            <br>
                            Perhatikan Aktivitas Fisik: Jika anak atau remaja aktif, pastikan latihan fisik mereka mencakup latihan kekuatan dan memperkuat massa otot, karena ini dapat membantu meningkatkan berat badan secara sehat.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            Kekurangan berat badan dapat meningkatkan risiko masalah kesehatan seperti gangguan pertumbuhan, penurunan sistem kekebalan tubuh, dan masalah tulang. Mengatasi masalah ini sangat penting sejak dini untuk mencegah komplikasi lebih lanjut.`
    } else if (bmi >= 18.5 && bmi < 25) {
        statusKesehatan = ideal
        saranKata = ['Pertahankan Pola Makan Sehat dan Seimbangmu !', 'Perbanyak aktivitas Fisik Teratur', 'Hindari Diet Ketat atau Pembatasan Kalori yang Berlebihan', 'Pertahankan pola makan yang seimbang dengan berbagai jenis buah, sayuran, protein tanpa lemak, dan biji-bijian !', 'Lanjutkan dengan rutinitas olahraga yang teratur, yang mencakup latihan kardio dan kekuatan.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                            <br>
                            Pertahankan Pola Makan Sehat dan Seimbang: Anak atau remaja yang berada dalam kisaran BMI normal sebaiknya menjaga pola makan yang sehat dan beragam, termasuk banyak buah, sayuran, biji-bijian, protein lean (misalnya ayam tanpa kulit, ikan, tahu), dan lemak sehat (misalnya minyak zaitun, alpukat).
                            <br>
                            <br>
                            Aktivitas Fisik Teratur: Berpartisipasi dalam aktivitas fisik yang cukup penting untuk menjaga berat badan dan meningkatkan kesehatan jantung, otot, dan tulang. Rekomendasi dari WHO adalah minimal 1 jam aktivitas fisik per hari yang meliputi olahraga yang meningkatkan daya tahan jantung, fleksibilitas, dan kekuatan.
                            <br>
                            <br>
                            Pantau Perkembangan Secara Berkala: Walaupun BMI berada dalam kategori normal, penting untuk terus memantau berat badan dan kesehatan secara keseluruhan. Pemantauan ini akan membantu mengidentifikasi pergeseran tren kesehatan, apakah menuju kelebihan berat badan atau penurunan berat badan.
                            <br>
                            <br>
                            Hindari Diet Ketat atau Pembatasan Kalori yang Berlebihan: Anak atau remaja dalam kategori normal tidak perlu menjalani diet ketat, tetapi tetap penting untuk fokus pada pola makan yang sehat dan teratur, serta menghindari kebiasaan makan yang buruk seperti makan berlebihan atau sering mengonsumsi makanan cepat saji.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            <br>
                            Terjaganya BMI normal adalah indikator penting untuk pertumbuhan dan perkembangan yang sehat. Menghindari kebiasaan yang dapat mengarah pada penurunan berat badan yang tidak sehat atau peningkatan berat badan berlebih sangat penting.`
    } else if (bmi >= 25 && bmi < 30) {
        statusKesehatan = overWeight
        saranKata = ['Tingkatkan Aktivitas Fisik dan perbaiki pola Makanmu !', 'Perbaiki Pola Makan!', 'Pertimbangkan untuk mengurangi asupan kalori dan memilih makanan yang lebih rendah lemak dan gula.', 'Tingkatkan frekuensi dan intensitas latihan kardio serta kombinasi dengan latihan kekuatan.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                           <br>
                            <br>
                            : Fokus pada pengurangan konsumsi makanan tinggi kalori dan rendah gizi, seperti makanan cepat saji, makanan olahan, atau camilan manis yang mengandung banyak gula dan lemak tidak sehat. Gantilah dengan makanan yang lebih sehat seperti buah-buahan, sayuran, biji-bijian utuh, dan protein sehat.
                            <br>
                            <br>
                            Tingkatkan Aktivitas Fisik: Aktivitas fisik yang lebih intens, seperti olahraga kardio (lari, bersepeda, berenang) dan latihan kekuatan (ang lifting atau yoga), akan sangat membantu dalam membakar kalori dan meningkatkan metabolisme tubuh.
                            <br>
                            <br>
                            Mencapai Berat Badan Sehat Secara Bertahap: Jika BMI menunjukkan kelebihan berat badan, sebaiknya lakukan perubahan bertahap dalam pola makan dan kebiasaan olahraga. Penurunan berat badan yang sehat adalah sekitar 0.5–1 kg per minggu. Hindari pendekatan yang terlalu drastis atau diet yang tidak berkelanjutan.
                            <br>
                            <br>
                            Buat Tujuan yang Realistis: Tentukan tujuan berat badan yang realistis dan mudah dicapai. Jangan terburu-buru dalam proses penurunan berat badan, karena perubahan yang bertahan lama memerlukan waktu dan konsistensi.
                            <br>
                            <br>
                            Cek Kesehatan Rutin: Pastikan untuk memeriksakan tekanan darah, kadar gula darah, dan kolesterol secara rutin, karena kelebihan berat badan dapat meningkatkan risiko masalah kesehatan lainnya.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            <br>
                            Kelebihan berat badan dapat meningkatkan risiko beberapa masalah kesehatan, termasuk diabetes tipe 2, penyakit jantung, gangguan tidur, dan gangguan pernapasan. Oleh karena itu, menjaga berat badan yang sehat sangat penting.`
    } else {
        statusKesehatan = obesitas
        saranKata = ['Segera Konsultasi dengan Dokter atau Ahli Gizi !', 'Konsultasi dengan Dokter atau Ahli Gizi', 'Mulai sekarang atur pola Makan yang Sehat dan Terkontrol', 'Perubahan Gaya Hidup yang Berkelanjutan mulai sekarang!!', 'Konsultasikan dengan profesional kesehatan untuk rencana diet dan olahraga yang disesuaikan. Pilih makanan rendah kalori dan padat nutrisi.', 'Mulailah dengan aktivitas fisik ringan dan tingkatkan intensitas secara bertahap. Fokus pada latihan yang rendah dampak seperti berjalan atau berenang.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                            <br>
                            <br>
                            Konsultasi dengan Dokter atau Ahli Gizi: Obesitas pada anak atau remaja dapat meningkatkan risiko berbagai masalah kesehatan serius. Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan rencana penurunan berat badan yang sehat dan aman. Ini mungkin mencakup perubahan diet yang signifikan, serta rencana olahraga yang lebih terstruktur.
                            <br>
                            <br>
                            Pola Makan yang Sehat dan Terkontrol: Fokus pada pengurangan konsumsi kalori yang berasal dari makanan olahan, makanan cepat saji, dan gula tambahan. Gantilah dengan makanan kaya nutrisi seperti sayuran, buah, biji-bijian, dan protein rendah lemak. Pengurangan porsi makan dan memilih makanan dengan kandungan kalori lebih rendah namun tetap bergizi sangat penting.
                            <br>
                            <br>
                            Olahraga Secara Teratur: Peningkatan aktivitas fisik sangat diperlukan untuk membantu membakar kalori dan menurunkan berat badan. Mulailah dengan aktivitas fisik ringan seperti berjalan kaki atau berenang, kemudian tingkatkan secara bertahap ke latihan yang lebih intens, seperti jogging atau latihan beban.
                            <br>
                            <br>
                            Perubahan Gaya Hidup yang Berkelanjutan: Ciptakan kebiasaan makan sehat dan rutinitas olahraga yang mudah diterapkan dalam kehidupan sehari-hari. Hindari solusi cepat atau diet ketat yang bisa menyebabkan efek samping atau penurunan berat badan yang sementara.
                            <br>
                            <br>
                            Dukungan Psikologis: Kadang-kadang, masalah obesitas berhubungan dengan faktor emosional atau psikologis. Mendapatkan dukungan dari keluarga, teman, atau bahkan konselor dapat membantu menjaga motivasi dan mengatasi tantangan yang muncul selama proses penurunan berat badan.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            <br>
                            Obesitas dapat menyebabkan berbagai masalah kesehatan serius, seperti diabetes tipe 2, penyakit jantung, stroke, gangguan tidur, dan gangguan sendi. Oleh karena itu, menangani obesitas dengan pendekatan yang sehat dan bertanggung jawab adalah sangat penting.`
    }

    bmiPointValue = bmi
    if (bmi > 35) {
        bmiPointValue = 34.2
    } else if (bmi < 10) {
        bmiPointValue = 10.2
    }

    output3.innerHTML = `<h4>Nama : ${nama}
                        <br>Umur : ${umur}
                        <br>BMI : ${bmi}
                        <br><h2>Status Kesehatanmu :<br><span>${statusKesehatan}<span>`
    outputBmiKeterangan.innerHTML = `${bmi}`
    bmiGrafik.style.display = 'block'
    bmiPoint.style.transform = `translateX(${bmiPointValue - 10}rem)`
    outputPenjelasan.innerHTML = `Lihat Saran`


}

function bmiWanita() {
    let umur = document.getElementById('input-umur-bmi-wanita').value
    let tinggiBadan = document.getElementById('input-tb-bmi-wanita').value
    let beratBadan = document.getElementById('input-bb-bmi-wanita').value
    let nama = document.getElementById('input-nama-wanita').value
    let output3 = document.getElementById('output-bmi3')
    let output2 = document.getElementById('output-bmi2')
    let output1 = document.getElementById('output-bmi1')
    let outputPenjelasan = document.getElementById('output-penjelasan')
    let outputBmiKeterangan = document.getElementById('bmi-keterangan')
    let bmiGrafik = document.getElementById('bmi-grafik')
    let bmiPoint = document.getElementById('bmi-point')
    
    tinggiBadan = tinggiBadan * 0.01
    let bmi = parseFloat((beratBadan / (tinggiBadan ** 2)).toFixed(1))
    let underWeight = `Kekurangan Berat Badan`
    let ideal = `Berat Ideal`
    let overWeight = `Kelebihan Berat Badan`
    let obesitas = `Obesitas`
    let statusKesehatan
    let bmiPointValue
    let saranKata
    
    if (isNaN(tinggiBadan) || isNaN(beratBadan) || isNaN(bmi)){
        output3.innerHTML = `<h2>Masukkan input dengan benar!`
        outputPenjelasan.innerHTML = ``
        output1.innerHTML = ``
        return
    }

    if (bmi < 18.5) {
        statusKesehatan = underWeight
        saranKata = ['Tingkatkan Asupan Kalori dan Nutrisimu', 'Konsultasi dengan Dokter atau Ahli Gizi', 'Tingkatkan Frekuensi Makanmu', 'Perhatikan Aktivitas Fisikmu', 'Fokus pada makanan tinggi nutrisi dan kalori sehat seperti kacang-kacangan, alpukat, dan biji-bijian. Pastikan untuk mendapatkan asupan protein yang cukup.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                            <br>
                            Konsultasi dengan Dokter atau Ahli Gizi: Jika anak atau remaja memiliki BMI yang rendah, penting untuk mencari penyebab potensialnya, seperti masalah kesehatan, gangguan makan, atau faktor genetik. Dokter atau ahli gizi dapat memberikan diagnosis yang tepat dan saran untuk meningkatkan berat badan secara sehat.
                            <br>
                            <br>
                            Meningkatkan Asupan Kalori dan Nutrisi: Fokus pada konsumsi makanan yang bergizi dan tinggi kalori, seperti alpukat, kacang-kacangan, keju, dan susu full-fat. Makanan yang kaya akan protein dan lemak sehat (misalnya ikan, ayam, kacang, dan biji-bijian) dapat membantu meningkatkan massa otot dan berat badan secara sehat.
                            <br>
                            Peningkatan Frekuensi Makan: Makan lebih sering dengan porsi lebih kecil dapat membantu meningkatkan konsumsi kalori. Cobalah makan 5-6 kali sehari (termasuk camilan sehat).
                            <br>
                            <br>
                            Perhatikan Aktivitas Fisik: Jika anak atau remaja aktif, pastikan latihan fisik mereka mencakup latihan kekuatan dan memperkuat massa otot, karena ini dapat membantu meningkatkan berat badan secara sehat.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            Kekurangan berat badan dapat meningkatkan risiko masalah kesehatan seperti gangguan pertumbuhan, penurunan sistem kekebalan tubuh, dan masalah tulang. Mengatasi masalah ini sangat penting sejak dini untuk mencegah komplikasi lebih lanjut.`
    } else if (bmi >= 18.5 && bmi < 25) {
        statusKesehatan = ideal
        saranKata = ['Pertahankan Pola Makan Sehat dan Seimbangmu !', 'Perbanyak aktivitas Fisik Teratur', 'Hindari Diet Ketat atau Pembatasan Kalori yang Berlebihan', 'Pertahankan pola makan yang seimbang dengan berbagai jenis buah, sayuran, protein tanpa lemak, dan biji-bijian !', 'Lanjutkan dengan rutinitas olahraga yang teratur, yang mencakup latihan kardio dan kekuatan.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                            <br>
                            Pertahankan Pola Makan Sehat dan Seimbang: Anak atau remaja yang berada dalam kisaran BMI normal sebaiknya menjaga pola makan yang sehat dan beragam, termasuk banyak buah, sayuran, biji-bijian, protein lean (misalnya ayam tanpa kulit, ikan, tahu), dan lemak sehat (misalnya minyak zaitun, alpukat).
                            <br>
                            <br>
                            Aktivitas Fisik Teratur: Berpartisipasi dalam aktivitas fisik yang cukup penting untuk menjaga berat badan dan meningkatkan kesehatan jantung, otot, dan tulang. Rekomendasi dari WHO adalah minimal 1 jam aktivitas fisik per hari yang meliputi olahraga yang meningkatkan daya tahan jantung, fleksibilitas, dan kekuatan.
                            <br>
                            <br>
                            Pantau Perkembangan Secara Berkala: Walaupun BMI berada dalam kategori normal, penting untuk terus memantau berat badan dan kesehatan secara keseluruhan. Pemantauan ini akan membantu mengidentifikasi pergeseran tren kesehatan, apakah menuju kelebihan berat badan atau penurunan berat badan.
                            <br>
                            <br>
                            Hindari Diet Ketat atau Pembatasan Kalori yang Berlebihan: Anak atau remaja dalam kategori normal tidak perlu menjalani diet ketat, tetapi tetap penting untuk fokus pada pola makan yang sehat dan teratur, serta menghindari kebiasaan makan yang buruk seperti makan berlebihan atau sering mengonsumsi makanan cepat saji.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            <br>
                            Terjaganya BMI normal adalah indikator penting untuk pertumbuhan dan perkembangan yang sehat. Menghindari kebiasaan yang dapat mengarah pada penurunan berat badan yang tidak sehat atau peningkatan berat badan berlebih sangat penting.`
    } else if (bmi >= 25 && bmi < 30) {
        statusKesehatan = overWeight
        saranKata = ['Tingkatkan Aktivitas Fisik dan perbaiki pola Makanmu !', 'Perbaiki Pola Makan!', 'Pertimbangkan untuk mengurangi asupan kalori dan memilih makanan yang lebih rendah lemak dan gula.', 'Tingkatkan frekuensi dan intensitas latihan kardio serta kombinasi dengan latihan kekuatan.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                           <br>
                            <br>
                            : Fokus pada pengurangan konsumsi makanan tinggi kalori dan rendah gizi, seperti makanan cepat saji, makanan olahan, atau camilan manis yang mengandung banyak gula dan lemak tidak sehat. Gantilah dengan makanan yang lebih sehat seperti buah-buahan, sayuran, biji-bijian utuh, dan protein sehat.
                            <br>
                            <br>
                            Tingkatkan Aktivitas Fisik: Aktivitas fisik yang lebih intens, seperti olahraga kardio (lari, bersepeda, berenang) dan latihan kekuatan (ang lifting atau yoga), akan sangat membantu dalam membakar kalori dan meningkatkan metabolisme tubuh.
                            <br>
                            <br>
                            Mencapai Berat Badan Sehat Secara Bertahap: Jika BMI menunjukkan kelebihan berat badan, sebaiknya lakukan perubahan bertahap dalam pola makan dan kebiasaan olahraga. Penurunan berat badan yang sehat adalah sekitar 0.5–1 kg per minggu. Hindari pendekatan yang terlalu drastis atau diet yang tidak berkelanjutan.
                            <br>
                            <br>
                            Buat Tujuan yang Realistis: Tentukan tujuan berat badan yang realistis dan mudah dicapai. Jangan terburu-buru dalam proses penurunan berat badan, karena perubahan yang bertahan lama memerlukan waktu dan konsistensi.
                            <br>
                            <br>
                            Cek Kesehatan Rutin: Pastikan untuk memeriksakan tekanan darah, kadar gula darah, dan kolesterol secara rutin, karena kelebihan berat badan dapat meningkatkan risiko masalah kesehatan lainnya.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            <br>
                            Kelebihan berat badan dapat meningkatkan risiko beberapa masalah kesehatan, termasuk diabetes tipe 2, penyakit jantung, gangguan tidur, dan gangguan pernapasan. Oleh karena itu, menjaga berat badan yang sehat sangat penting.`
    } else {
        statusKesehatan = obesitas
        saranKata = ['Segera Konsultasi dengan Dokter atau Ahli Gizi !', 'Konsultasi dengan Dokter atau Ahli Gizi', 'Mulai sekarang atur pola Makan yang Sehat dan Terkontrol', 'Perubahan Gaya Hidup yang Berkelanjutan mulai sekarang!!', 'Konsultasikan dengan profesional kesehatan untuk rencana diet dan olahraga yang disesuaikan. Pilih makanan rendah kalori dan padat nutrisi.', 'Mulailah dengan aktivitas fisik ringan dan tingkatkan intensitas secara bertahap. Fokus pada latihan yang rendah dampak seperti berjalan atau berenang.']
        output2.innerHTML = saranKata[Math.floor(Math.random() * saranKata.length)]
        output1.innerHTML = `Saran:
                            <br>
                            <br>
                            Konsultasi dengan Dokter atau Ahli Gizi: Obesitas pada anak atau remaja dapat meningkatkan risiko berbagai masalah kesehatan serius. Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan rencana penurunan berat badan yang sehat dan aman. Ini mungkin mencakup perubahan diet yang signifikan, serta rencana olahraga yang lebih terstruktur.
                            <br>
                            <br>
                            Pola Makan yang Sehat dan Terkontrol: Fokus pada pengurangan konsumsi kalori yang berasal dari makanan olahan, makanan cepat saji, dan gula tambahan. Gantilah dengan makanan kaya nutrisi seperti sayuran, buah, biji-bijian, dan protein rendah lemak. Pengurangan porsi makan dan memilih makanan dengan kandungan kalori lebih rendah namun tetap bergizi sangat penting.
                            <br>
                            <br>
                            Olahraga Secara Teratur: Peningkatan aktivitas fisik sangat diperlukan untuk membantu membakar kalori dan menurunkan berat badan. Mulailah dengan aktivitas fisik ringan seperti berjalan kaki atau berenang, kemudian tingkatkan secara bertahap ke latihan yang lebih intens, seperti jogging atau latihan beban.
                            <br>
                            <br>
                            Perubahan Gaya Hidup yang Berkelanjutan: Ciptakan kebiasaan makan sehat dan rutinitas olahraga yang mudah diterapkan dalam kehidupan sehari-hari. Hindari solusi cepat atau diet ketat yang bisa menyebabkan efek samping atau penurunan berat badan yang sementara.
                            <br>
                            <br>
                            Dukungan Psikologis: Kadang-kadang, masalah obesitas berhubungan dengan faktor emosional atau psikologis. Mendapatkan dukungan dari keluarga, teman, atau bahkan konselor dapat membantu menjaga motivasi dan mengatasi tantangan yang muncul selama proses penurunan berat badan.
                            <br>
                            <br>
                            Peringatan:
                            <br>
                            <br>
                            Obesitas dapat menyebabkan berbagai masalah kesehatan serius, seperti diabetes tipe 2, penyakit jantung, stroke, gangguan tidur, dan gangguan sendi. Oleh karena itu, menangani obesitas dengan pendekatan yang sehat dan bertanggung jawab adalah sangat penting.`
    }

    bmiPointValue = bmi
    if (bmi > 35) {
        bmiPointValue = 34.2
    } else if (bmi < 10) {
        bmiPointValue = 10.2
    }

    output3.innerHTML = `<h4>Nama : ${nama}
                        <br>Umur : ${umur}
                        <br>BMI : ${bmi}
                        <br><h2>Status Kesehatanmu :<br><span>${statusKesehatan}<span>`
    outputBmiKeterangan.innerHTML = `${bmi}`
    bmiGrafik.style.display = 'block'
    bmiPoint.style.transform = `translateX(${bmiPointValue - 10}rem)`
    outputPenjelasan.innerHTML = `Lihat Saran`


}


// segitiga jkw
document.addEventListener('DOMContentLoaded', function() {
    function jkwVisibility() {
        let selectOption = document.getElementById('opsi-jkw').value
        let jarakMenu = document.querySelector('.jarak-menu')
        let kecepatanMenu = document.querySelector('.kecepatan-menu')
        let waktuMenu = document.querySelector('.waktu-menu')

        jarakMenu.style.display = 'none'
        kecepatanMenu.style.display = 'none'
        waktuMenu.style.display = 'none'

        if (selectOption === 'jarak') {
            jarakMenu.style.display = 'flex'
        } else if (selectOption === 'kecepatan') {
            kecepatanMenu.style.display = 'flex'
        } else if (selectOption === 'waktu') {
            waktuMenu.style.display = 'flex'
        }   
    }
    document.getElementById('opsi-jkw').addEventListener('change', jkwVisibility)
    jkwVisibility()
})

function jkwJarak() {
    let kecepatan = parseFloat(document.getElementById('input-kecepatan-j').value)
    let waktuJam = parseFloat(document.getElementById('input-jam-j').value)
    let waktuMenit = parseFloat(document.getElementById('input-menit-j').value)
    let waktuDetik = parseFloat(document.getElementById('input-detik-j').value)
    let kecepatanConvert = document.getElementById('kecepatan-option-j').value
    let output3 = document.getElementById('output-jkw3')
    let output1 = document.getElementById('output-jkw1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(kecepatan)) {
        output3.innerHTML = `<h2>Error!!Masukkan input dengan benar!`
        outputPenjelasan.innerHTML = ``
        output1.innerHTML = ``
        return
    }

    if (isNaN(waktuJam)) {
        waktuJam = 0
    }
    if (isNaN(waktuMenit)) {
        waktuMenit = 0
    }
    if (isNaN(waktuDetik)) {
        waktuDetik = 0
    }
    let waktu = parseFloat((waktuJam * 3600) + (waktuMenit * 60) + waktuDetik)

    if (kecepatanConvert === 'km/jam') {
        kecepatan = parseFloat((kecepatan * (1000/3600)).toFixed(4))
    } else if (kecepatanConvert === 'm/s') {
        kecepatan = kecepatan
    } else if (kecepatanConvert === 'm/menit') {
        kecepatan = parseFloat((kecepatan / 60).toFixed(4))
    }


    let jarakCm = parseFloat(Math.round(waktu * kecepatan))
    let jarakKm = parseFloat((jarakCm / 1000).toFixed(1))

    output3.innerHTML = `<h1>Jarak : ${jarakKm} Km
                        <br>Atau : ${jarakCm} m</h1>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML = `<p>Untuk mencari jarak, kita menggunakan rumus: <strong>Jarak = Kecepatan × Waktu</strong></p>
        <p>Pastikan satuan kecepatan dan waktu konsisten atau sama. Misalnya, jika kecepatan dalam km/jam, maka waktu harus dalam jam, atau jika kecepatan dalam m/s, waktu harus dalam detik.</p>
        <p>Langkah-langkah perhitungan:</p>
        <ul>
            <li>Konversi kecepatan ke satuan yang sesuai dengan waktu (misalnya km/jam ke m/s).</li>
            <li>Hitung jarak dengan mengalikan kecepatan dengan waktu.</li>
            <li>Jika diperlukan, konversi jarak ke satuan lain, seperti dari meter ke kilometer.</li>
        </ul>
        <br><p>Contoh:</p>
        <p>Jika kecepatan mobil 60 km/jam dan waktu 2 jam, jaraknya adalah: 60 km/jam × 2 jam = 120 km.</p>
        <p>Jika kecepatan dalam m/s dan waktu dalam detik, cukup kalikan tanpa konversi lebih lanjut.</p>`

}

function jkwKecepatan() {
    let jarak = parseFloat(document.getElementById('input-jarak-k').value)
    let jarakConvert = document.getElementById('jarak-option-k').value
    let waktuJam = parseFloat(document.getElementById('input-jam-k').value)
    let waktuMenit = parseFloat(document.getElementById('input-menit-k').value)
    let waktuDetik = parseFloat(document.getElementById('input-detik-k').value)
    let output3 = document.getElementById('output-jkw3')
    let output1 = document.getElementById('output-jkw1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(jarak)) {
        output3.innerHTML = `<h2>Error!!Masukkan input dengan benar!`
        outputPenjelasan.innerHTML = ``
        output1.innerHTML = ``
        return
    }

    if (isNaN(waktuJam)) {
        waktuJam = 0
    }
    if (isNaN(waktuMenit)) {
        waktuMenit = 0
    }
    if (isNaN(waktuDetik)) {
        waktuDetik = 0
    }

    let waktu = parseFloat((waktuJam * 3600) + (waktuMenit * 60) + waktuDetik)

    if (jarakConvert === 'km') {
        jarak = parseFloat((jarak * 1000).toFixed(3))
    } else if (jarakConvert === 'm') {
        jarak = jarak
    }

    let kecepatan = parseFloat((jarak / waktu).toFixed(2))
    let kecepatanKm = parseFloat((kecepatan * 3.6).toFixed(2))
    let kecepatanMenit = parseFloat((kecepatan * 60).toFixed(2))

    output3.innerHTML = `<h1>Kecepatan : ${kecepatanKm} Km/jam
                        <br>Atau : ${kecepatanMenit} m/menit
                        <br>Atau : ${kecepatan} m/s`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML =`    <h3>Penjelasan tentang Kecepatan:</h3>
                            <p><strong>Kecepatan</strong> adalah besaran yang menunjukkan seberapa cepat suatu objek bergerak atau berubah posisi dalam waktu tertentu.</p>
                            <p>Kecepatan dihitung dengan rumus:</p>
                            <pre><strong>Kecepatan = Jarak / Waktu</strong></pre>
                            <p>Artinya, untuk menghitung kecepatan, kita perlu mengetahui jarak yang ditempuh dan waktu yang dibutuhkan untuk menempuh jarak tersebut.</p>
                            
                            <h4>Contoh 1:</h4>
                            <p>Jika kamu mengendarai mobil sejauh 100 kilometer dalam waktu 2 jam, maka kecepatan mobilmu adalah:</p>
                            <pre>Kecepatan = 100 km / 2 jam = 50 km/jam</pre>
                            <p>Ini berarti mobil bergerak dengan kecepatan 50 kilometer per jam.</p>

                            <h4>Contoh 2:</h4>
                            <p>Jika kamu berjalan sejauh 500 meter dalam waktu 10 menit, maka kecepatanmu adalah:</p>
                            <pre>Kecepatan = 500 meter / 10 menit = 50 meter/menit</pre>
                            <p>Artinya, kamu bergerak dengan kecepatan 50 meter per menit.</p>

                            <h4>Konversi Satuan Kecepatan:</h4>
                            <p>Kecepatan dapat dinyatakan dalam berbagai satuan, seperti:</p>
                            <ul>
                                <li><strong>km/jam</strong> (kilometer per jam) - digunakan untuk kendaraan yang bergerak dalam jarak jauh.</li>
                                <li><strong>m/s</strong> (meter per detik) - sering digunakan untuk kecepatan objek dalam sains atau fisika.</li>
                                <li><strong>m/menit</strong> (meter per menit) - digunakan ketika waktu lebih nyaman diukur dalam menit, misalnya kecepatan berjalan atau berlari.</li>
                            </ul>

                            <h4>Konversi Satuan Kecepatan:</h4>
                            <p>Jika kamu ingin mengubah satuan kecepatan, berikut adalah cara konversinya:</p>
                            <ul>
                                <li>Dari <strong>km/jam</strong> ke <strong>m/s</strong>: kalikan kecepatan dalam km/jam dengan <strong>1000 / 3600</strong> (karena 1 km = 1000 meter dan 1 jam = 3600 detik).</li>
                                <li>Dari <strong>m/s</strong> ke <strong>km/jam</strong>: kalikan kecepatan dalam m/s dengan <strong>3600 / 1000</strong>.</li>
                                <li>Dari <strong>m/menit</strong> ke <strong>m/s</strong>: bagi kecepatan dalam m/menit dengan 60.</li>
                            </ul>`

}

function jkwWaktu() {
    let jarak = parseFloat(document.getElementById('input-jarak-w').value)
    let jarakConvert = document.getElementById('jarak-option-w').value
    let kecepatan = parseFloat(document.getElementById('input-kecepatan-w').value)
    let kecepatanConvert = document.getElementById('kecepatan-option-w').value
    let output3 = document.getElementById('output-jkw3')
    let output1 = document.getElementById('output-jkw1')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    if (isNaN(jarak) || isNaN(kecepatan)) {
        output3.innerHTML = `<h2>Error!!Masukkan input dengan benar!`
        outputPenjelasan.innerHTML = ``
        output1.innerHTML = ``
        return
    }

    if (jarakConvert === 'km') {
        jarak = parseFloat((jarak * 1000).toFixed(3))
    } else if (jarakConvert === 'm') {
        jarak = jarak
    }

    if (kecepatanConvert === 'km/jam') {
        kecepatan = parseFloat((kecepatan * (1000/3600)).toFixed(4))
    } else if (kecepatanConvert === 'm/s') {
        kecepatan = kecepatan
    } else if (kecepatanConvert === 'm/menit') {
        kecepatan = parseFloat((kecepatan / 60).toFixed(4))
    }

    let waktuDetik = parseFloat((jarak/kecepatan).toFixed(2))
    let jam = Math.floor(waktuDetik / 3600)
    let menit = Math.floor((waktuDetik % 3600) / 60)
    let detik = Math.round(waktuDetik % 60)

    output3.innerHTML = `<h1>waktu = ${jam} j : ${menit} m : ${detik} s
                        <br>Atau ${waktuDetik} detik`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`
    output1.innerHTML =`<p>Untuk menghitung waktu, kita menggunakan rumus: <strong>Waktu = Jarak / Kecepatan</strong></p>
        <p>Pastikan satuan jarak dan kecepatan konsisten atau sama. Jika kecepatan dalam km/jam, pastikan jarak dalam kilometer. Jika kecepatan dalam m/s, pastikan jarak dalam meter.</p>
        <p><strong>Langkah-langkah:</strong></p>
        <ul>
            <li>Konversi jarak dan kecepatan ke satuan yang konsisten (misalnya, meter dan meter per detik).</li>
            <li>Hitung waktu dengan membagi jarak dengan kecepatan.</li>
            <li>Konversi hasil waktu dari detik ke dalam satuan jam, menit, dan detik jika perlu.</li>
        </ul>
        <br><p>Contoh:</p>
        <p>Jika jarak adalah 120 km dan kecepatan mobil adalah 60 km/jam, maka:</p>
        <p>Waktu = 120 km / 60 km/jam = 2 jam</p>
        <p>Jika jarak dalam meter (120000 m) dan kecepatan dalam m/s (16.67 m/s), waktu akan dihitung dalam detik, dan hasilnya adalah 7200 detik.</p>`
}


// operasi Bilangan

function intKePecahan(angka) { //Bilangan bulat ke pecahan
    let pembilang = angka
    let penyebut = 1

    return {
        pembilang : pembilang,
        penyebut : penyebut
    }
}

function pecahanBiasaSederhana(pembilang, penyebut) { //pecahan biasa ke sederhana
    let pembilangSederhana = pembilang
    let penyebutSederhana = penyebut

    return {
        pembilang : pembilangSederhana,
        penyebut : penyebutSederhana
    }
}


function pecahanCampuranSederhana(bulat, pembilang, penyebut) { //pecahan campuran ke sederhana
    let pembilangBiasa = parseFloat(parseFloat(bulat) * parseFloat(penyebut) + parseFloat(pembilang))
    let penyebutBiasa = penyebut

    let pembilangSederhana = pembilangBiasa 
    let penyebutSederhana = penyebutBiasa 

    return {
        pembilang : pembilangSederhana,
        penyebut : penyebutSederhana
    }
}

function persenKePecahan(persentase) { //persen ke pecahan
    let pembilang = parseFloat(persentase)
    let penyebut = parseFloat(100)

    return {
        pembilang : pembilang,
        penyebut : penyebut
    }
}

function desimalKePecahan(desimal) { //desimal ke pecahan
    const angka = parseFloat(desimal.replace(',', '.'))
    const iniDesimal = (angka.toString().split('.')[1] || '').length
    const desimalAngka = parseFloat(angka)
    const penyebut = Math.pow(10, iniDesimal)
    const pembilang = desimalAngka * penyebut

    const pembilangSederhana = pembilang 
    const penyebutSederhana = penyebut 

    return {
        pembilang : pembilangSederhana,
        penyebut : penyebutSederhana
    }
}

function faktorialKePecahan(faktor) {
    let pembilang = faktorial(faktor)
    let penyebut = 1

    return {
        pembilang : pembilang,
        penyebut : penyebut
    }
}

//function untuk mempermudah output

//pecahan biasa ke campuran
function pecahanKeCampuran(pembilang, penyebut) {
    let pembilangSederhana = pembilang % penyebut //modulus pembilang dan penyebut digunakan untuk mereprentasikan nilai sederhana pembilang
    let initBilanganBulat = pembilang - pembilangSederhana // berfungsi untuk mengurangi pembilang asli dengan hasil modulus agar bisa dibagi dengan penyebut
    let bilanganBulat = initBilanganBulat / penyebut // reprentasi dari bilangan bulat pada campuran

    return {
        bilanganBulat : bilanganBulat,
        pembilang : pembilangSederhana,
        penyebut : penyebut
    }
}

//pecahan biasa ke persen
function pecahanKePersen(pembilang, penyebut) {
    let hasil = (pembilang / penyebut) * 100

    return parseFloat(hasil.toFixed(2)) + '%'
}


//hasil output
function operasiBilangan() {
    let operasi = document.getElementById('operation-select').value
    let bilanganKiriOption = document.getElementById('bilangan-option-kiri').value
    let bilanganKiri
    let bilanganKananOption = document.getElementById('bilangan-option-kanan').value
    let bilanganKanan
    let output3 = document.getElementById('output-operasibilangan3')
    let outputCampuranInt = document.getElementById('angkacampuran-operasibilangan')
    let outputCampuranPembilang = document.getElementById('angkaatascampuran-operasibilangan')
    let outputCampuranPenyebut = document.getElementById('angkabawahcampuran-operasibilangan')
    let divider = document.getElementById('divider1')
    let output1 = document.getElementById('output-operasibilangan1')
    let outputPenjelasan = document.getElementById('output-penjelasan')


    //Bilangan kanan input
    switch(bilanganKiriOption) {
        case 'bilanganbulat':
            let inputIntKiri = document.getElementById('input-int-kiri').value
            bilanganKiri = intKePecahan(inputIntKiri)
            break

        case 'pecahanbiasa':
            let angkaAtasPecahanKiri = document.getElementById('inputatas-pecahanbiasa-kiri').value
            let angkaBawahPecahanKiri = document.getElementById('inputbawah-pecahanbiasa-kiri').value
            bilanganKiri = pecahanBiasaSederhana(angkaAtasPecahanKiri, angkaBawahPecahanKiri)
            break

        case 'pecahancampuran':
            let bilanganBulatCampuranKiri = document.getElementById('inputbilanganbulat-pecahancampuran-kiri').value
            let angkaAtasCampuranKiri = document.getElementById('inputatas-pecahancampuran-kiri').value
            let angkaBawahCampuranKiri = document.getElementById('inputbawah-pecahancampuran-kiri').value
            bilanganKiri = pecahanCampuranSederhana(bilanganBulatCampuranKiri, angkaAtasCampuranKiri, angkaBawahCampuranKiri)
            break

        case 'persen':
            let inputPersen = document.getElementById('input-persen-kiri').value
            bilanganKiri = persenKePecahan(inputPersen)
            break

        case 'desimal':
            let desimal = document.getElementById('input-desimal-kiri').value
            bilanganKiri = desimalKePecahan(desimal)
            break

        case 'faktorial':
            let inputfaktorial = document.getElementById('input-faktorial-kiri').value
            bilanganKiri = faktorialKePecahan(inputfaktorial)
            break

        default:
        
    }


    switch(bilanganKananOption) {
        case 'bilanganbulat':
            let inputIntKanan = document.getElementById('input-int-kanan').value
            bilanganKanan = intKePecahan(inputIntKanan)
            break

        case 'pecahanbiasa':
            let angkaAtasPecahanKanan = document.getElementById('inputatas-pecahanbiasa-kanan').value
            let angkaBawahPecahanKanan = document.getElementById('inputbawah-pecahanbiasa-kanan').value
            bilanganKanan = pecahanBiasaSederhana(angkaAtasPecahanKanan, angkaBawahPecahanKanan)
            break

        case 'pecahancampuran':
            let bilanganBulatCampuranKanan = document.getElementById('inputbilanganbulat-pecahancampuran-kanan').value
            let angkaAtasCampuranKanan = document.getElementById('inputatas-pecahancampuran-kanan').value
            let angkaBawahCampuranKanan = document.getElementById('inputbawah-pecahancampuran-kanan').value
            bilanganKanan = pecahanCampuranSederhana(bilanganBulatCampuranKanan, angkaAtasCampuranKanan, angkaBawahCampuranKanan)
            break

        case 'persen':
            let inputPersen = document.getElementById('input-persen-kanan').value
            bilanganKanan = persenKePecahan(inputPersen)
            break

        case 'desimal':
            let desimal = document.getElementById('input-desimal-kanan').value
            bilanganKanan = desimalKePecahan(desimal)
            break

        case 'faktorial':
            let inputfaktorial = document.getElementById('input-faktorial-kanan').value
            bilanganKanan = faktorialKePecahan(inputfaktorial)
            break

        default:
    }
    console.log(bilanganKiri)
    console.log(bilanganKanan)
    if (bilanganKanan.penyebut == 0 || bilanganKiri.penyebut == 0) {
        output3.innerHTML = `<h1>Tidak terdefinisi`
        outputCampuranPembilang.innerHTML = ``
        outputCampuranInt.innerHTML = ``
        outputCampuranPenyebut.innerHTML = ``
        outputPenjelasan.innerHTML = ``
        output1.innerHTML = ``
        divider.style.display = ''
        return
    }

    let fpb
  
    //hasil ke tipe pecahan proses
    let pembilangHasil
    let penyebutHasil

    //output
    let hasil

    //pecahan
    let pembilang
    let penyebut

    //campuran
    let pecahanCampuran
    let persen

    divider.style.display = 'block'
    switch(operasi) {
        case 'tambah':
            //mengalikan pembilang 1 ke penyebut 2 dan sebaliknya lalu ditambah keduanya
            pembilangHasil = parseFloat(bilanganKiri.pembilang * bilanganKanan.penyebut) + parseFloat(bilanganKanan.pembilang * bilanganKiri.penyebut)
            penyebutHasil = bilanganKiri.penyebut * bilanganKanan.penyebut
            //fpb untuk penyederhanaan
            fpb = gcd(pembilangHasil, penyebutHasil)
            //hasil penyederhanaan
            pembilang = pembilangHasil / fpb
            penyebut = penyebutHasil / fpb
            //convert ke campuran dan persen
            pecahanCampuran = pecahanKeCampuran(pembilang, penyebut)
            persen = pecahanKePersen(pembilang, penyebut)

            hasil = parseFloat((pembilang / penyebut).toFixed(3))
            break

        case 'kurang':
            let lcm = (bilanganKiri.penyebut * bilanganKanan.penyebut) / gcd(bilanganKiri.penyebut, bilanganKanan.penyebut)
            let pembilangLcm1 = bilanganKiri.pembilang * (lcm / bilanganKiri.penyebut)
            let pembilangLcm2 = bilanganKanan.pembilang * (lcm / bilanganKanan.penyebut)
            pembilangHasil = pembilangLcm1 - pembilangLcm2
            penyebutHasil = lcm

            fpb = gcd(pembilangHasil, penyebutHasil)
            pembilang = pembilangHasil / fpb
            penyebut = penyebutHasil / fpb

            pecahanCampuran = pecahanKeCampuran(pembilang, penyebut)
            persen = pecahanKePersen(pembilang, penyebut)
            hasil = parseFloat((pembilang / penyebut).toFixed(3))
            break

        case 'kali':
            pembilangHasil = (bilanganKiri.pembilang * bilanganKanan.pembilang)
            penyebutHasil = (bilanganKiri.penyebut * bilanganKanan.penyebut)

            fpb = gcd(pembilangHasil, penyebutHasil)
            pembilang = pembilangHasil / fpb
            penyebut = penyebutHasil / fpb

            pecahanCampuran = pecahanKeCampuran(pembilang, penyebut)
            persen = pecahanKePersen(pembilang, penyebut)
            hasil = parseFloat((pembilang / penyebut).toFixed(3))
            break

        case 'bagi':
            pembilangHasil = (bilanganKiri.pembilang * bilanganKanan.penyebut)
            penyebutHasil = (bilanganKiri.penyebut * bilanganKanan.pembilang)
            fpb = gcd(pembilangHasil, penyebutHasil)
            pembilang = pembilangHasil / fpb
            penyebut = penyebutHasil / fpb

            pecahanCampuran = pecahanKeCampuran(pembilang, penyebut)
            persen = pecahanKePersen(pembilang, penyebut)
            hasil = parseFloat((pembilang / penyebut).toFixed(3))
            break

        default:

    }

    //output

    output3.innerHTML = `<h1>Hasil = ${hasil}
                        <br>Jika diubah ke persen = ${persen}
                        <br>jika diubah ke pecahan paling sederhana =</h1>`
    if(pecahanCampuran.bilanganBulat === 0) {
    outputCampuranInt.innerHTML = ''
    } else{
    outputCampuranInt.innerHTML = `<h2 style="margin-bottom : 0; margin-top : 0;">${pecahanCampuran.bilanganBulat}</h2>`
    }
    outputCampuranPembilang.innerHTML = `<h3 style="margin-bottom : 0;">${pecahanCampuran.pembilang}</h3>`
    outputCampuranPenyebut.innerHTML = `<h3 style="margin-bottom : 0;">${pecahanCampuran.penyebut}</h3>`
    outputPenjelasan.innerHTML = `Lihat Penjelasan`

    // Output Penjelasan based on bilangan options
    let penjelasanKiri = '';
    let penjelasanKanan = '';

    // Penjelasan untuk Bilangan Kiri
    switch (bilanganKiriOption) {
        case 'bilanganbulat':
            penjelasanKiri = 'Bilangan bulat adalah bilangan yang tidak memiliki pecahan atau desimal, seperti 1, 2, 3, dan seterusnya.';
            break;
        case 'pecahanbiasa':
            penjelasanKiri = 'Pecahan biasa adalah pecahan yang ditulis dalam bentuk pembilang dan penyebut, seperti 1/2, 3/4, dsb.';
            break;
        case 'pecahancampuran':
            penjelasanKiri = 'Pecahan campuran adalah gabungan antara bilangan bulat dan pecahan, seperti 2 1/2, 3 3/4, dsb.';
            break;
        case 'persen':
            penjelasanKiri = 'Persen adalah bentuk pecahan yang dinyatakan dalam per seratus, misalnya 50% berarti 50 per 100 atau 1/2.';
            break;
        case 'desimal':
            penjelasanKiri = 'Bilangan desimal adalah bilangan yang menggunakan titik desimal, seperti 0.5, 1.25, dsb.';
            break;
        case 'faktorial':
            penjelasanKiri = 'Faktorial adalah hasil perkalian bilangan bulat positif berturut-turut, seperti 5! = 5 x 4 x 3 x 2 x 1 = 120.';
            break;
        default:
            penjelasanKiri = 'Pilih jenis bilangan kiri.';
    }

    // Penjelasan untuk Bilangan Kanan
    switch (bilanganKananOption) {
        case 'bilanganbulat':
            penjelasanKanan = 'Bilangan bulat adalah bilangan yang tidak memiliki pecahan atau desimal, seperti 1, 2, 3, dan seterusnya.';
            break;
        case 'pecahanbiasa':
            penjelasanKanan = 'Pecahan biasa adalah pecahan yang ditulis dalam bentuk pembilang dan penyebut, seperti 1/2, 3/4, dsb.';
            break;
        case 'pecahancampuran':
            penjelasanKanan = 'Pecahan campuran adalah gabungan antara bilangan bulat dan pecahan, seperti 2 1/2, 3 3/4, dsb.';
            break;
        case 'persen':
            penjelasanKanan = 'Persen adalah bentuk pecahan yang dinyatakan dalam per seratus, misalnya 50% berarti 50 per 100 atau 1/2.';
            break;
        case 'desimal':
            penjelasanKanan = 'Bilangan desimal adalah bilangan yang menggunakan titik desimal, seperti 0.5, 1.25, dsb.';
            break;
        case 'faktorial':
            penjelasanKanan = 'Faktorial adalah hasil perkalian bilangan bulat positif berturut-turut, seperti 5! = 5 x 4 x 3 x 2 x 1 = 120.';
            break;
        default:
            penjelasanKanan = 'Pilih jenis bilangan kanan.';
    }

    // Set output penjelasan untuk jenis bilangan
    output1.innerHTML = `
    <h3>Penjelasan Operasi:</h3>
    <p><strong>Jenis Bilangan Kiri:</strong> ${penjelasanKiri}</p>
    <p><strong>Jenis Bilangan Kanan:</strong> ${penjelasanKanan}</p>
    <p><strong>Jenis Operasi:</strong> ${operasi === 'tambah' ? 'Penjumlahan' : operasi === 'kurang' ? 'Pengurangan' : operasi === 'kali' ? 'Perkalian' : 'Pembagian'}</p>
    <p><strong>Deskripsi Operasi:</strong> Pada operasi ini, kita akan melakukan perhitungan berdasarkan jenis bilangan yang dipilih. Berikut adalah penjelasan langkah demi langkah:</p>

    <ol>
        <li><strong>Langkah 1: Menyederhanakan Pecahan</strong> - Sebelum melakukan operasi, pastikan kedua bilangan sudah dalam bentuk pecahan yang paling sederhana, dengan pembilang dan penyebut yang mudah dihitung.</li>
        <li><strong>Langkah 2: Menyesuaikan Penyebut (untuk Penjumlahan dan Pengurangan)</strong> - Jika operasi yang dipilih adalah penjumlahan atau pengurangan, kita perlu menyamakan penyebut kedua bilangan. Misalnya, jika kita menambahkan dua pecahan, kita mencari **kelipatan persekutuan terkecil (KPK)** dari kedua penyebut untuk membuat penyebutnya sama. Kemudian kita menjumlahkan atau mengurangkan pembilangnya sesuai dengan operasi yang dipilih.</li>
        <li><strong>Langkah 3: Melakukan Operasi</strong> - Pada operasi penjumlahan atau pengurangan, kita akan menambahkan atau mengurangi pembilang setelah menyesuaikan penyebutnya. Pada operasi perkalian, kita mengalikan pembilang dan penyebut dari kedua pecahan. Sedangkan pada operasi pembagian, kita mengalikan pembilang pertama dengan penyebut kedua, dan penyebut pertama dengan pembilang kedua.</li>
        <li><strong>Langkah 4: Menyederhanakan Hasil</strong> - Setelah operasi selesai, kita akan mendapatkan pecahan baru. Hasilnya kemudian disederhanakan dengan mencari **Faktor Persekutuan Terbesar (FPB)** antara pembilang dan penyebut, lalu membagi keduanya dengan FPB tersebut untuk mendapatkan bentuk pecahan yang paling sederhana.</li>
        <li><strong>Langkah 5: Menyajikan Hasil dalam Bentuk Lain</strong> - Hasil operasi bisa diubah menjadi bentuk pecahan campuran jika hasilnya lebih besar dari satu, atau dalam bentuk persen jika diperlukan. Misalnya, hasil 3/4 dapat diubah menjadi 75%.</li>
    </ol>

    <h4>Contoh:</h4>
    <p>Jika kita menjumlahkan <strong>1/2 + 2/3</strong>, kita akan mengikuti langkah-langkah di atas:</p>
    <ol>
        <li><strong>Langkah 1:</strong> Kedua bilangan sudah dalam bentuk pecahan yang sederhana, yaitu 1/2 dan 2/3.</li>
        <li><strong>Langkah 2:</strong> Menyamakan penyebut pecahan 1/2 dan 2/3. KPK dari 2 dan 3 adalah 6. Maka, kita ubah pecahan tersebut menjadi 3/6 dan 4/6.</li>
        <li><strong>Langkah 3:</strong> Sekarang, kita bisa menjumlahkan pembilangnya: 3/6 + 4/6 = 7/6.</li>
        <li><strong>Langkah 4:</strong> Hasilnya adalah 7/6. Pecahan ini sudah dalam bentuk yang sederhana, tetapi kita bisa mengubahnya menjadi pecahan campuran: 1 1/6.</li>
        <li><strong>Langkah 5:</strong> Jika kita ingin mengubah 7/6 menjadi persen, kita tinggal mengalikan pembilangnya dengan 100 dan membagi dengan penyebutnya: (7/6) * 100 = 116.67%.</li>
    </ol>

    <p><strong>Catatan:</strong> Setiap operasi bergantung pada jenis bilangan yang dipilih. Misalnya, pada bilangan desimal, kita harus mengonversinya menjadi pecahan terlebih dahulu sebelum melakukan operasi. Jika salah satu bilangan memiliki penyebut 0, hasilnya tidak terdefinisi karena pembagian dengan nol tidak memungkinkan.</p>
    <p><strong>Operasi yang Dilakukan:</strong> ${operasi === 'tambah' ? 'Penjumlahan' : operasi === 'kurang' ? 'Pengurangan' : operasi === 'kali' ? 'Perkalian' : 'Pembagian'}.</p>
` 
}

// kpk-fpb

function fpb(a,b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function kpk(a, b) {
    return (a * b) / fpb(a, b)
}

let numberKpkFpb = []

function inputGenerateKpkFpb() {
    let banyakInput = document.getElementById('jumlahbanyakinput-kpk-fpb').value
    let inputCont = document.querySelector('.inputAngka-kpk-fpb')
    let output3 = document.getElementById('output-kpk-fpb3')
    let output1 = document.getElementById('output-kpk-fpb1')
    let output2 = document.getElementById('output-kpk-fpb2')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output3.innerHTML = ``
    output1.innerHTML = ``
    output2.innerHTML = ``
    outputPenjelasan.innerHTML = ``
    document.getElementById('Hasil-kpk-fpb').style.display = 'none'

    if(isNaN(banyakInput) || banyakInput.trim() === '') {
        output3.innerHTML = `Error!! Masukkan input dengan benar`
        return
    }

    inputCont.innerHTML = ''
    numberKpkFpb = []

    for (let i = 0; i < banyakInput; i++) {
        // label generate
        let label = document.createElement('label')
        label.textContent = `Masukkan bilangan ${i+1}`
        label.className = "label-input"
        label.id = `label-input${i+1}`

        // input generate
        let input = document.createElement('input')
        input.type = 'number'
        input.placeholder = `bilangan ${i+1}`
        input.className = 'input'
        input.id = `input-kpk-fpb-${i+1}`

        inputCont.appendChild(label)
        inputCont.appendChild(input)
        inputCont.appendChild(document.createElement('br'))

        input.addEventListener('input', () => {
            numberKpkFpb[i] = parseFloat(input.value)
        })

    }

    document.getElementById('Hasil-kpk-fpb').style.display = 'block'

}

function hasilKpkFpb() {
    let opsi = document.getElementById('opsi-kpk-fpb').value
    let banyakInput = document.getElementById('jumlahbanyakinput-kpk-fpb').value
    let output3 = document.getElementById('output-kpk-fpb3')
    let output1 = document.getElementById('output-kpk-fpb1')
    let output2 = document.getElementById('output-kpk-fpb2')
    let outputPenjelasan = document.getElementById('output-penjelasan')

    output1.innerHTML = ``
    output2.innerHTML = ``
    output3.innerHTML = ``
    outputPenjelasan.innerHTML = ``
    
    for (let i = 0; i < banyakInput; i++) {
        let jumlahNilai = document.createElement('h3')
        jumlahNilai.textContent = `Nilai ke ${i+1} = ${numberKpkFpb[i]}`
        
        output2.appendChild(jumlahNilai)
    }

    let hasilKpk
    let hasilFpb

    switch(opsi) {
        case 'kpk':
            hasilKpk = numberKpkFpb.reduce((total, angka) => kpk(total, angka), numberKpkFpb[0])
            output3.innerHTML = `<h1>Kpk : ${hasilKpk}</h1>`
            break
        case 'fpb':
            hasilFpb = numberKpkFpb.reduce((total, angka) => fpb(total, angka), numberKpkFpb[0])
            output3.innerHTML = `<h1>Fpb : ${hasilFpb}</h1>`
            break
        default:
    }

    outputPenjelasan.innerHTML = `Lihat Penjelasan`

         // Menambahkan penjelasan dinamis berdasarkan hasil
    if (opsi === 'kpk') {
        // Penjelasan Dinamis KPK
        let kpkPenjelasan = `
            <h2>Penjelasan KPK (Kelipatan Persekutuan Terkecil)</h2>
            <p><strong>KPK</strong> adalah angka terkecil yang bisa dibagi habis oleh seluruh angka yang dimasukkan.</p>
            <p><strong>Rumus KPK:</strong> KPK(a, b) = |a × b| / FPB(a, b)</p>
            <p><strong>Contoh:</strong> Jika kita ingin mencari KPK dari angka-angka yang Anda masukkan, kita akan mencari kelipatan dari masing-masing angka tersebut.</p>
            <ul>
        `;
        
        // Menampilkan kelipatan dari setiap angka yang dimasukkan
        for (let i = 0; i < numberKpkFpb.length; i++) {
            let kelipatan = [];
            let angka = numberKpkFpb[i];
            for (let j = 1; j <= 5; j++) {
                kelipatan.push(angka * j);
            }
            kpkPenjelasan += `<li>Kelipatan angka ${angka}: ${kelipatan.join(", ")}</li>`;
        }

        kpkPenjelasan += `
            </ul>
            <p>Kelipatan pertama yang sama adalah <strong>${hasilKpk}</strong>, sehingga KPK dari angka-angka yang Anda masukkan adalah <strong>${hasilKpk}</strong>.</p>
        `;
        
        output1.innerHTML = kpkPenjelasan;
    } else if (opsi === 'fpb') {
        // Penjelasan Dinamis FPB
        let fpbPenjelasan = `
            <h2>Penjelasan FPB (Faktor Persekutuan Terbesar)</h2>
            <p><strong>FPB</strong> adalah angka terbesar yang bisa membagi habis seluruh angka yang dimasukkan.</p>
            <p><strong>Rumus FPB:</strong> FPB(a, b) = bilangan terbesar yang membagi habis kedua angka</p>
            <p><strong>Contoh:</strong> Jika kita ingin mencari FPB dari angka-angka yang Anda masukkan, kita akan mencari pembagi dari masing-masing angka tersebut.</p>
            <ul>
        `;
        
        // Menampilkan pembagi dari setiap angka yang dimasukkan
        for (let i = 0; i < numberKpkFpb.length; i++) {
            let pembagi = [];
            let angka = numberKpkFpb[i];
            for (let j = 1; j <= angka; j++) {
                if (angka % j === 0) pembagi.push(j);
            }
            fpbPenjelasan += `<li>Pembagi angka ${angka}: ${pembagi.join(", ")}</li>`;
        }

        fpbPenjelasan += `
            </ul>
            <p>Pembagi terbesar yang sama dari angka-angka yang Anda masukkan adalah <strong>${hasilFpb}</strong>, sehingga FPB dari angka-angka yang Anda masukkan adalah <strong>${hasilFpb}</strong>.</p>
        `;
        
        output1.innerHTML = fpbPenjelasan;
    }
}





    




// yang baca manis 

// const stringsAsli = 'javascript'

// const stringsBaru = stringsAsli[0].toUpperCase().concat(stringsAsli.slice(1))

// console.log(stringsBaru)