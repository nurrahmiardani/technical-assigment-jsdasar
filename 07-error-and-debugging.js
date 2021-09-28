/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// type eror merupakan eror yang terdeteksi jika tipe variable atau parameter yang digunakan tidak valid
// reference eror merupakan eror yang terdeteksi jika sumber yang digunakan dalam suatu operasi tidak valid
// range eror merupakan eror yang terjadi jika range yang digunakan pada variable/parameter numerik melebihi range yang sudah ditentukan
// syntax eror merupakan eror yang terjadi jika syntax yang dituliskan tidak valid


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// akan terjadi eror
// termasuk kedalam type eror
// karena variable yang akan ditampilkan di console belum di deklarasikan sebelumnya seharusnya variable tersebut dideklarasikan terlebih dahula baru dilakukan console log
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
