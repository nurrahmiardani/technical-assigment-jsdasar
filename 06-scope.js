/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// - terdapat 2 variable scope yaitu global scope dan local scope
// - global scope merupakan variable yang bisa diakses dimana saja dalam satu file tersebut sedangkan local scope merupakan variable yang hanya bisa diakses dalam block tertentu
// global scope : let a
// local scope :
// function contoh() {
//     let a
// }

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// yang akan tampil dalam console adalah Mariah
// hal ini terjadi karena meskipun diawal variable name sudah dideklarasikan john tapi dibawah name dijadikan parameter sebuah fungsi maka nilainya dapat berubah. operasi yang terjadi di fungsi tersebut
// adalah untuk memisahkan kalimat yang dimasukkan tersebut berdasarkan spasi dan mengubahnya kedalam array. setelah itu terdapat operasi [0] yang menandakan hanya index ke 0 saja yang akan ditampilkan oleh sebab itu 
// karena parameter yang dimasukkan adalah maria carey yang akan tampil di console hanya maria karena maria merupakan index ke 0
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ") [0];
}

console.log(printFirstName("Mariah Carey"));
