/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
// let i;
// let k;
// let a;
let prime = "";
for(let i = 1 ; i<=100; i++ ){
    let j = true;
    for(let a=2 ; a < i-1 ; a++){
        if(i%a==0){
            j = false
            break
        }
    }

    if(j){
        prime +=`${i}, `
    }
}


console.log(prime)


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE

let y = 2   
while (primeCounter < 50) {   
  let prime = true    

  for(b = 2; b < y-1; b++) {    
    if(y % b == 0) {   
      prime = false
      break
    }
  }
  
  if(prime) {   
    primeCounter += 1
  }
  
  if(primeCounter == 50) {   
    fiftiethPrime = y;
    console.log(fiftiethPrime)
  }
  y++
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

let x = 1

// /// EDIT HERE
do { 
    if (x%2){
        oddCounter +=1
    }
    if (oddCounter==50){
        fiftiethOdd = x;
        console.log(fiftiethOdd)
    }
    x++
} while (oddCounter<50)
