///////// Zadanie 1 ///////////////////////////////

function result(a, b, c){
    console.log((a - b) / c);
}

result(9,4,2);

///////// Zadanie 2 ///////////////////////////////

function sc(a){
    let s = a*a,
        c = a*a*a;

    return [s,c]; 
}
let arr = sc(4);
console.log(arr.join(', '));

///////// Zadanie 3 ///////////////////////////////
//// max ////////////////////////

function max(a, b){
     return (a > b)? a : b;
}

console.log(max(12,59));

//// min ////////////////////////

function min(a, b){
    return (a < b)? a : b;
}

console.log(min(12,5));

///////// Zadanie 4 ///////////////////////////////

/*let a = +prompt('Введите первое число'),
    b = +prompt('Введите второе число');

function arr1(a,b){
    let min = (a<b)? a: b,
        max = (a>b)? a: b,
        arr = [];

        for(let i = min; i <= max; i++){
            arr.push(i);
        }

        return arr;
}

function viewArr1(){
    document.write(arr1(a,b));
}

viewArr1();*/

///////// Zadanie 5 ///////////////////////////////

// let a1 = +prompt('Введите число');

function isEven(a1){
    if(a1%2 == 0) {
        return true;
    }else return false;
}

// console.log(isEven(a1));

///////// Zadanie 6 ///////////////////////////////

let arr2 = [],
    arr3 = [];

function arrEven(arr2){
    for(let i = 0; i < arr2.length; i++){
        if(isEven(arr2[i]) == true){
            arr3.push(arr2[i]);
        }
    }
    return arr3;
}

console.log(arrEven([1,24,23,47,5,6,6,119]));

///////// Zadanie 7 ///////////////////////////////

document.write('<br/>');

function piramida(d){
    let h = 1;

    if(arguments.length > 1){
        for(let i = 1; i <= d; i++){
            for(let j = 1; j <= i+i-1; j++){
                document.write(arguments[1]);
            }
            document.write('<br/>');
        }
    }else {
        for(let i = 1; i <= d; i++){
            for(let j = 1; j <= i+i-1; j++){
                document.write(h);
            }
            h++;
            document.write('<br/>');
        }
    }

    
}

piramida(7,'?');

///////// Zadanie 8 ///////////////////////////////

document.write('<br/>');

let heigt = 5;

function trg(heigt){
    for(let i = 1; i <= heigt; i++){
        for(let j = 1; j <= heigt - i; j++){
            document.write('&ensp;');
        }
        for(let k = 1; k <= i+i-1; k++){
            document.write('*');
        }
        document.write('<br/>');
    }
}

trg(heigt);

document.write('<br/>');

function trgReverse(heigt){
    for(let i = heigt; i >= 1; i--){
        for(let j = heigt - i; j >= 1; j--){
            document.write('&ensp;');
        }
        for(let k = i+i-1; k >= 1; k--){
            document.write('*');
        }
        document.write('<br/>');
    }

}

trgReverse(heigt);

document.write('<br/>');

///////// Zadanie 9 ///////////////////////////////

function fib(n){
    if(n == 0 || n == 1){
        return n;
    }else {
        return fib(n-1)+fib(n-2);
    }
}
 function arrFib(){
     let arr = [];
     for(let i = 0;;i++){
         if(fib(i) < 1000){
        arr.push(fib(i))}
        else return arr;
     }
 }

 console.log(arrFib());

 ///////// Zadanie 10 ///////////////////////////////

 function ch(a){
     a = String(a);
     let sum = 0
     for(let i = 0; i < a.length; i++){
          sum += +a[i];
     }
     if(sum > 9) return ch(sum);
     else return sum;
 }

 console.log(ch(89));

  ///////// Zadanie 11 ///////////////////////////////

function printArr(array){
    if(array.length >= 1){
        document.write(array.shift());
        return printArr(array);
    }
}

printArr([5,8,4,11,true,0]);

  ///////// Zadanie 12 ///////////////////////////////

  function info(firstname, lastname, middlename, number){
      let str =`* Домашняя работа:"Функции" `,
          str1 = `* Выполнил: студент гр. ${number} `,
          str2 = `* ${firstname} ${lastname} ${middlename}`,
          arr = [str, str1, str2],
          max = 0,
          star = '';

          for(let i = 0; i < arr.length; i++){
              max = max < arr[i].length ? arr[i].length : max;
          }
          for(let i = 0; i < arr.length; i++){
              for(let j = 0; j < max; j++){
                  if(arr[i].length < max){
                      arr[i] += ' ';
                  }else if(arr[i].length == max){
                    arr[i] += '*';
                  }
              }
          }
           
          for(let i = 0; i <= max; i++){
              star += '*';
          }

          console.log(star);
          console.log(arr[0]);
          console.log(arr[1]);
          console.log(arr[2]);
          console.log(star);
  }

  info('Миронов', 'Алексей', 'Валерьевич', '113236');