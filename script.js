//Jawaban tugas pertemuan ke-5 Maulana

// soal no.1
for(let i = 1; i <= 100; i++) {
    document.write("<p>User ke-" + i + "</p>")
    console.log(i);
}


//soal no.2
for(let i = 0; i < 20; i+=2) {
    console.log(i);
}


//soal no.3
for (i=1; i<=20; i++) {
    if (i%2==0){
        document.write(i+" bilangan genap <br>")
    }else {
        document.write(i+" bilangan ganjil <br>")
    }
    console.log(i);          
}   

//soal no.4
let ulangi = confirm("Apakah anda mau mengulang?");
let counter = 0;

while(ulangi){
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");

//soal no.5
let input = prompt("Sebutkan kepanjangan dari nama IB?");

        if(input == "Impact Byte"){
            document.write("<h2>Selamat jawaban kamu benar</h2>");
        } else {
            document.write("<p>Jawaban salah, coba lagi!</p>");
        }

        document.write("<p>Terima kasih sudah menjawab kuis ini!</p>");
