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