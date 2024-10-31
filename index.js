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
    return new Intl.NumberFormat('id-ID', {minimumFractionDigits: 2}).format(angka)
}

function penyederhanaanAkar () {
    let inputAkar = document.getElementById('inputakar')
    let angka = parseFloat(inputAkar.value)
    let output = document.getElementById('output')

    var akarKuadrat = parseFloat(1)
    let sisa = angka

    for(let i=2; i * i <= angka; i++) {
        while(sisa % (i * i) == 0) {
            akarKuadrat *= i
            sisa /= (i * i)
        }
    }
    
    if (sisa == 1) {
        output.innerHTML = "<h3> Hasil dari √" + angka + " adalah : " + akarKuadrat
    }
    else {
        output.innerHTML = "<h3> Hasil Penyederhanaan dari √"+ angka +" adalah : " + akarKuadrat + "√" + sisa
    }
}

function diskon() {
    let inputharga = document.getElementById('inputharga')
    let inputdiskon =  document.getElementById('inputdiskon')
    let harga = parseFloat(inputharga.value)
    let diskon = parseFloat(inputdiskon.value)
    let output1 = document.getElementById('output-diskon1')
    let output2 = document.getElementById('output-diskon2')
    let output3 = document.getElementById('output-diskon3')

    var diskonBersih = harga * diskon / 100
    var jumlah = harga - diskonBersih

    const formatharga = formatAngka(jumlah)

    output1.innerHTML = "<h3> " + diskon + "% dari " + harga + " yaitu : " + diskonBersih
    output2.innerHTML = "<h3> " + harga + " - " + diskonBersih + " : " + jumlah
    output3.innerHTML = "<h1> Total harga diskon adalah : Rp. " + formatharga


}



