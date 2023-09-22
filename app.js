// napisz funkcje która przyjmuje 2 parametry (2 objekty albo 2 cyfty) i dodaj je do siebie

let a = 2 
let b = 3

let a2 = { value: 2 } // typeof a2
let b2 = { value: 3 }

function add(a, b){
    let suma = 0
    if(typeof a === 'number' && typeof b === 'number'){
        suma = a+b
    }else{
        suma =  a.value + b.value
    }
    return suma
}

let array = [1, 2, 3, 4, 5]
let array2 = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]

function sumArray(array){
    let suma = 0;
    if (typeof array[0] === 'number'){
        for (let i=0; i<array.length; i++){
            suma = suma + array[i]
        }
    }    
    else{
        for (let i=0; i<array.length; i++){
            suma = suma + array[i].value
        }
    }
    return suma
}

function sumArray2(array){
    return array.reduce((a, b)=> a+b)
}


function sumArray3(array){
    let sum = 0
    array.forEach((number)=>{
        sum += number
    })
    return sum
}


//node app.js


let array111 = [1,2,3,6,2,3,2,6,3,2,8,2,3,1]

function milegoFilter(array){
    let newArray = []
    array.forEach((arrayElement)=>{
        if (arrayElement !== 1 && arrayElement !== 2){
            newArray.push(number) 
        }
    })
    return newArray

    //result: [3,6,3,6,3,8,3]
}

function filter2(array){
    return array.filter(element=>element !== 2 && element !==1)
}

const people = [
    {
      name: 'John Doe',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Cityville',
        country: 'Countryland'
      },
      hobbies: ['reading', 'playing guitar', 'hiking'],
      education: {
        degree: 'Bachelor of Science',
        major: 'Computer Science',
        university: 'University of Example'
      }
    },
    {
      name: 'Jane Smith',
      age: 25,
      address: {
        street: '456 Elm St',
        city: 'Townsville',
        country: 'Countryland'
      },
      hobbies: ['painting', 'photography', 'traveling'],
      education: {
        degree: 'Bachelor of Arts',
        major: 'Fine Arts',
        university: 'College of Example'
      }
    }
  ];

  // napisz funkcje która przyjmuje tablice obiektów i wyświetl objekt {name: 'xxx', age: 'xxx'} dla każdej osoby

  function showNames(array){
    array.forEach((person)=>{
        console.log({name: person.name, age:person.age})
    })
  }

  function showNames2(array){
    return array.map(person=>({name: person.name, age: person.age}))
  }

  function showNames3(array){
    return array.filter(person=>({name: person.name, age: person.age}))
  }

console.log(showNames(people))
console.log(showNames2(people))
console.log(showNames3(people))

/*-----------------------------------------------------------------------------------------------------------*/


const tab = ["Marcin", "Monika", "Magda"];

//pod zmienną el trafią kolejne elementy
/*
tab.forEach(el => {
    console.log(el.toUpperCase());
});
*/
const tab2 = ["Marcin", "Ania", "Agnieszka"];

//pod zmienną arr wstawiana będzie aktualna tablica po której iterujemy - może kiedyś to się przyda?
/*
tab2.forEach((el, i, arr) => {
    console.log(`Aktualny element to ${el}, Indeks elementu to ${i}, a długość tablicy to ${arr.length}`, tab2);
});
*/
const tab3 = [
    { name : "Piotr", age: 18 },
    { name : "Ania", age: 15 },
    { name : "Monika", age: 16 }
];

//czy wszyscy użytkownicy są pełnoletni?
const allAdult = tab3.every(el => el.age >= 18);

//console.log(allAdult); //false

const tab4 = [
    { name : "Piotr", age: 18 },
    { name : "Ania", age: 15 },
    { name : "Monika", age: 16 }
];

//a może chociaż jeden user jest pełnoletni?
//console.log( tab4.some(el => el.age >= 18) ); //true

const products = [
    { name: 'Product 1', price: 30 },
    { name: 'Product 2', price: 40 },
    { name: 'Product 3', price: 25 },
    { name: 'Product 4', price: 45 },
    { name: 'Product 5', price: 35 },
  ];
  
  const result = products.filter(function(product) {
    return product.price > 40;
  });
  //console.log(result)

  const tab5 = tab.map(el => el.toUpperCase()); //map zwraca nowa tablice

  //console.log(tab5); //[MARCIN, MONIKA, MAGDA]

  obiekt1 = {
    nazwa: "obiekt1",
    waga: 80,
    cena: "100zl"
  }

  obiekt2 = {
    nazwa: "obiekt2",
    waga: 70,
    cena: 70
  }

  //console.log("obiekt 1 nosi nazwe: ", obiekt1.nazwa)
  //console.log("obiekt 2 nosi nazwe: ", obiekt2.nazwa)
  //console.log("oba obiekty w sumie ważą: ", obiekt1.waga + obiekt2.waga)

/* Utwórz tablicę o nazwie tab1, zawierającą następujące liczby całkowite: 7, 3, 1, 6, 9, 5, 4, 10, 2, 2.

    Wypisz zawartość 5 komórki tablicy na ekran. Zmień zawartość 7 komórki tablicy, wprowadzając do niej wartość 12.
    Utwórz drugą tablicę o nazwie tab2, o tej samej wielkości co tab1. Przepisz zawartość tab1 do tab2.
    Utwórz trzecią tablicę o nazwie tab3, o tej samej wielkości co dwie poprzednie. Zawartością komórek tablicy tab3 jest suma komórek o tych samych indeksach tablic tab1 i tab2.
    Przepisz ponownie zawartość tablicy tab1 do tablicy tab2, jednak w odwrotnej kolejności. */

tab6 = [7,3,1,6,9,5,4,10,2,2]

tab7 = [7,3,2,6,9,5,4,10,2,2]

function add(array, array2) {
    tab8 = []
    for(let i=0; i<array.length;i++){
        if(array[i]===array2[i]){
            suma = array[i] + array2[i]
            tab8.push(suma)
        }
        else{
            tab8.push("default value")
        }
    }
    return tab8;
}


function change(array){
    newArray = []
    for(let i=array.length-1; i>=0;i--){
        newArray.push(array[i])
    }
    return newArray;
}




function max(array){
    valueMax = 0;
    valueMin = 0;
    for(i=0;i<array.length;i++){
        if(array[i]>valueMax){
            valueMax = array[i]
        }
        else if(array[i]<valueMin){
            valueMin = array[i]
        }

    }
    console.log(valueMin, valueMax)
}

//let najwiekszaWartosc = Math.max(...tab9)
//console.log(najwiekszaWartosc)

let tab9=[1,2,4,6,8,9,4,2,1,6,3,5,8,7,4,0,2,5,6,10,8,11]


function addd(array){
    let suma=0;
    array.forEach((i) =>{
    suma += i      
    })
    return suma/array.length;
}


//----------------------------------------------------------------

// konwertuj slowa porozdzielane myślnikami do formatu camelCase

// "a".toUpperCase() // result => A
// "string".split("") // result => ['s','t','r'...]

//let string = 'asd'
// console.log(string[0]) // result a


const toCamelCase = (string) => {
    let slowa = string.split('-')    // ['to', 'camel', 'case']
    let newString = ''
    slowa.forEach((item, index)=>{
       if(index === 0){
        newString += item
       }else{
        // "string".slice(0, 1) // s
        // "string".slice(1, "string".length) // tring
        let word = item
        newString += word[0].toUpperCase() + word.slice(1,word.length)
       }
    })
    return newString
};


// ----------------------------------------------------------------------------------

// Bankomaty umożliwiają wprowadzenie kodów PIN składających się z 4 lub 6 cyfr.
// Kody PIN nie mogą zawierać niczego innego niż dokładnie 4 cyfry lub dokładnie 6 cyfr.

//string musi posiadac 4 lub 6 cyfr
//musza byc to cyfry



let pin = '12333'

function isNumeric(str){
    return /^\d+$/.test(str);
}

// conosle.log(isNumeric('2')) // result true
// conosle.log(isNumeric('d')) // result false



const atmValidator = (string) => {
    if (string.length === 4 || string.length===6){
        let word = string.split("")
        let isWordNumeric = true
        word.forEach(sign => {
            if(isNumeric(sign)===false){
                isWordNumeric = false
                return null;
            }
        })
        return isWordNumeric
    }
    return false
};


console.log(atmValidator("222222")); // result: true


//------------------------------------------------------------------------------------------

// Dla danego tablicy liczb całkowitych znajdź tę liczbę, która pojawia się nieparzystą liczbę razy.
// Zawsze będzie tylko jedna liczba, która pojawia się nieparzystą liczbę razy.


// [7] powinno zwrócić return 7, bo 7 pojawia się 1 raz (1 nieparzyste).
// [0] powino zwrócić 0, bo 0 pojawia się 1 raz (1 nieparzyste).
// [1,1,2] powinno zwrócić 2, bo 2 pojawia się 1 raz (1 nieparzyste).
// [0,1,0,1,0] powinno zwrócić 0, bo 0 pojawia się 3 razy (3 nieparzyste).
// [2,1,2,3,3,3,4,3,3,3,2,2,1] powinno zwrócić 4, bo pojawia się 1 raz (1 nieparzyste).

// 1. sprawdzam maksymalną wartość i przypisuje do zmiennej let max
// 2. tworze tablice o dłgości max i wypełniam ją zerami
// 3. 
// 4. 

const findTheOddInt = (array) => {
    let valueMax = 0;
    array.forEach((item)=>{
        if(item>valueMax){
            valueMax = item
        } 
    })

    let newArray=[]
    for(let i = 0;i<valueMax;i++){
        newArray.push(0)
    }

    let value=0

    for(let i = 0;i<array.length;i++){
        value=array[i]
        // newArray = [0, 0, 0, 0]
        newArray[value-1] += 1
        //newArray[value-1] = newArray[value-1] + 1

    }
    //return newArray

    let newItem=0;
    newArray.forEach((item, index)=>{
        if (item % 2 != 0){
            newItem=index+1;
            return
        }
    })
    return newItem
};


console.log(findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // result: 4
//console.log(findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 5, 7, 1])); // result: 4

//console.log(findTheOddInt([0, 1, 0, 1, 0])); // result: 0
//console.log(findTheOddInt([1, 1, 2])); // result: 2

let tab10=[1,2,6,3,5]
let wynik = []
tab10.forEach((element,i,j)=>{
    let element2=element**2
    wynik.push(element2)
    console.log(element2)
    console.log(i+1)
    console.log(j)

})
console.log(wynik)



let tab11 = tab10.map(function(element) {
    return element * 2; // Przekształć każdy element, mnożąc go przez 2
});

//console.log(tab11)

let tab12=tab10.map((element)=>{
    //console.log(element)
    return element**2
})

//console.log(tab12)

function showNames2(array){
    return array.map(person=>({name: person.name, age: person.age}))
  }


let tab13 = [1,2,3,4,5,6,7,8,9,5,2,6,1]

let parzyste = 0;
let nieparzyste = 0;

function bbb(array){
    for(let i = 0; i < tab13.length; i++){
        if(array[i]%2===0){
            parzyste += 1;
        }
        else{
            nieparzyste += 1;
        }
    }
    return `ilosc parzystych to: ${parzyste}, a ilosc nieparzystych to: ${nieparzyste}`;
}

console.log(bbb(tab13))

function filter3(array){
    let nieparzyste = array.filter(element=>element % 2 === 0)
    let parzyste = array.filter(element=>element % 2 === 1)
    console.log(nieparzyste)
    return `ilosc parzystych to: ${parzyste}, a ilosc nieparzystych to: ${nieparzyste}`;
}

console.log(filter3(tab13))

let nieparzyste2 = 0
let parzyste2 = 0
function tab14(array){
    array.forEach((element)=>{
        if(element % 2 === 0){
            parzyste2 += 1
        }else{
            nieparzyste2 +=1
        }
    })
    return `ilosc parzystych to: ${parzyste2}, a ilosc nieparzystych to: ${nieparzyste2}`;
}
console.log(tab14(tab13))

let tab15 = ['a','b','c','d','e']  //toUpperCase()

function funkcja(array){
    let newArray=array.map((element)=>{
    return element.toUpperCase()

    })
    return newArray
}

console.log(funkcja(tab15))

let nowaTablica = tab15.map(function(element){
    return element.toUpperCase(); // Przekształć każdy element, mnożąc go przez 2
});

console.log(nowaTablica)

/*-------------------------------------------------------------------------------------------------------*/

function expandedForm(num){
    let array=[]
    let string = String(num) 
    array=string.split('')
    const signs = array.length
    let newArray = []
    for (let i=0; i<signs; i++){
        newArray[i] = array[i] * 10**(signs-i-1)
    }
    let newString = newArray.join(' + ')
    return newString
}

//console.log(expandedForm(70304))
/*-------------------------------------------------------------------------------------------------------*/


function piramida(num){
    let string = '*'
    let array = []
    for (let j = 1; j <= num; j++) {
        let poziom = '';
        for(let i=1; i<=j; i++){
            array.push(string.repeat(i+i-1))
        }
    array.push(poziom)
    }
    return array
}
console.log(piramida(3))


/*-------------------------------------------------------------------------------------------------------*/
let litery = ['a', 'b', 'c','d','f']

function tablica(array){
    newArray = []
    array.map((element)=> {
        newArray.push(element.charCodeAt(0))
    })
    for (let i=0; i<newArray.length; i++){
    
    if (newArray[i]===newArray[i+1]-2){
        let litera=String.fromCharCode(newArray[i+1]-1)
        return litera
    }

}
}
//console.log(tablica(litery))

/*-------------------------------------------------------------------------------------------------------*/

let cyfryy = [1,2,2];
wynikk = 0;


function doPotegi(newArray){
        newArray = cyfryy.map((element) => {
        return element**2
        })

    for(let i=0; i<newArray.length; i++){
        wynikk = wynikk+newArray[i]
    }
    return wynikk
}
//console.log(doPotegi(cyfryy))

/*--------------------------------------------------------------------------------------------------------*/

function ad(array){
    let sum = 0
    array.forEach((n)=>{
        sum+=n**2 
    })
    return sum
}

//console.log(ad(cyfryy))


s1=100
s2=41
s3=56
let srednia = 0
function ocena(s1,s2,s3){
    srednia=(s1+s2+s3)/3
    if (srednia<60) return 'F' 
    else if (srednia<70) return 'D'
    else if (srednia<80) return 'C'
    else if (srednia<90) return 'B'
    else return 'A'
}

//console.log(ocena(s1,s2,s3))

/*--------------------------------------------------------------------------------------------------------*/

function removeChar(str) {
    return str.slice(1, -1);
  }

//console.log(removeChar('abcdef'))

/*--------------------------------------------------------------------------------------------------------*/


function paliwo(dystans,gallon,odleglosc){
    return dystans*gallon >= odleglosc
}

//console.log(paliwo(24,3,50))

/*--------------------------------------------------------------------------------------------------------*/


tab16=[-5,-6,7,-9]

function aaa(array){
    newArray=array.map((element)=>{
        if (element > 0) return -element 
        else return (0 - element)
    })
    return newArray
}
//console.log(aaa(tab16))

function toString(name){
    newName=name.toString()
    if(newName === 16){
    return newName
}}

//console.log(toString(16))

function bbb(numbers){
    let string = numbers.toString()
    let result = []
    for(let i = 0; i<string.length; i++){
        result[i] = string[i]*string[i]
    }
    console.log(result)
    console.log(result.join(''))
    return Number(result.join(""))
}

function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }

//console.log(squareDigits(145))




//console.log(bbb(145))


function ccc(n, x, y){
    if(n%x===0 & n%y===0){
        return true
    }
    else{
        return false
    }
}

//console.log(ccc(3, 1, 3))





