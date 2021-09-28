/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) { 
    if (salary >= 20000000) {
        value = ((20/100)*salary);
        return value;
    } else if (salary < 20000000 && salary >= 10000000){
        value = ((10/100)*salary)
        return value;
    } else if (salary < 10000000 && salary >= 5000000){
        value = ((5/100)*salary)
        return value;
    } else{
        value =  0;
        return value;
    }
 }
console.log(taxCalc(1000000))

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
// let keterangan 
function checkBMI(weight, height) { 
    let bmi = (weight/((height/100)^2))

    if (bmi > 35){
        return ("extremely obese")
    } else if (bmi < 34.9 && bmi >30){
        return("obese")
    } else if (bmi < 29.9 && bmi > 25){
        return ("over weight")
    } else if (bmi < 24.9 && bmi > 18.5){
        return ("normal")
    } else {
        return ("under weight")
    }
    
}
console.log(checkBMI(80,160))




/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentences) {
    let input = sentences.toLowerCase().split(' ')
    input.forEach(function(value,index) {
        input[index] = value.charAt(0).toUpperCase()+ value.slice(1)
    })
    return input.join(' ')
}

console.log(convToUpperCase("hello bandung"))


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
// 

function firstNonRepeatedChar(word) {
    if(typeof word !== 'string') {
      return "inputan salah harus menginputkan teks"
    }
    else {
      if(word.trim().indexOf(' ') > 0) {
        return "kata tidak boleh dipisah"
      }
      else {
        let twin= "", check = ""     

        for(i = 0; i < word.length; i++) {
          if(!(check.includes(word[i]))) {
            if(!(word.slice(i+1).includes(word[i]))) {
              twin += word[i]
              break
            } 
            else if(word.slice(i+1).includes(word[i])) {
              check += word[i]
            }
          }     
        }     
  
        return twin       
      }     
    }     
  }
  

console.log(firstNonRepeatedChar("alloha"))
