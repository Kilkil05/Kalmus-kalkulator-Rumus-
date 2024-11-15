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









// yang baca manis 

// const stringsAsli = 'javascript'

// const stringsBaru = stringsAsli[0].toUpperCase().concat(stringsAsli.slice(1))

// console.log(stringsBaru)