// // function t(a:number , b:number){
// //   let result = a+b*2

// //   console.log(result);
// // }
// // t(15 , 20)


// //1chi masala
// function s(a: number): void {
//     let p = 4 * a
//     console.log("kvadrat peremetri " + p);

// }
// s(10)

// //2-masala
// function kvYuzasi(a: number): any {
//     let result = a ** 2
//     console.log("kvadratning yuzi " + result);

// }
// kvYuzasi(5)


// //3-masala
// function YuzaPerimetr(a: number, b: number): void {
//     const S = a * b;
//     const P = 2 * (a + b);

//     console.log(`Yuza: ${S}`, `Perimetr: ${P}`);
//     console.log();
// }
// YuzaPerimetr(3, 5)


// //4masala
// function AylanaDiametri(d: number) {
//     const length = d * Math.PI
//     const uzunlik = length.toFixed(2)
//     console.log(`Aylana uzunligi: ${uzunlik}`);

// }
// AylanaDiametri(4)

// //5-masala
// function KubYonTomoni(a: number) {
//     const v = a ** 3
//     const s = 6 * a ** 2
//     console.log(`Hajmi: ${v}`, `to'la sirti: ${s}`);

// }
// KubYonTomoni(5)

// //6masala
// function paralapeped(a: number, b: number, c: number) {
//     const v = a * b * c
//     const s = 2 * (a * b + b * c + a * c)
//     console.log(`Hajmi: ${v}`, `to'la sirti: ${s}`);
// }
// paralapeped(5, 7, 8)

// //7-masala
// function radius(r: number) {
//     const L = 2 * Math.PI * r
//     const S = Math.PI * r ** 2
//     let uzunlik = L.toFixed(2)
//     let radius = S.toFixed(2)
//     console.log(`uzunligi: ${uzunlik}, Yuzasi: ${radius}`);

// }
// radius(3)

// //8-masala
// function arifmetik(a: number, b: number) {
//     let j = (a + b) / 2
//     console.log(`o'rta arifmetigi: ${j}`);

// }
// arifmetik(3, 4)

// //9-masala
// function geomeri(a: number, b: number) {
//     if (a > 0 && b > 0) {
//         let j = Math.sqrt(a * b)
//         const result = j.toFixed(2)
//         console.log(`o'rta geometrigi" ${result}`);
//     } else {
//         console.error("musbat son bo'lishi kerak");

//     }

// }
// geomeri(6, 7)

// // 10-masala
// function yigKop(a: number, b: number) {
//     if (a !== 0 && b !== 0) {
//         let yig = a + b
//         let kop = a * b
//         let akvd = a ** 2
//         let bkvd = b ** 2

//         console.log(`Yig'indisi: ${yig}, Ko'paytmasi: ${kop}, a ning kvadrati: ${akvd}, b ning kvadrati: ${bkvd}`);
//     } else {
//         console.error("Ikkala son ham 0 ga teng bo'lmasligi kerak");
//     }

// } yigKop(4, 5)

// //11-masala
// function modul(a:number , b:number):void{
//     let yig = a + b
//     let kop = a * b
//     let modulA = Math.abs(a) 
//     let modulB = Math.abs(b) 

//     console.log(`Yig'indisi: ${yig}, Ko'paytmasi: ${kop}, a ning moduli: ${modulA}, b ning moduli: ${modulB}`);
// }
// modul(2,3)


// //12-masala 
// function gipatinuza(a: number, b: number): void {
//     const c = Math.sqrt(a ** 2 + b ** 2);
//     const p = a + b + c;

//     console.log(`Gipotenuza: ${c.toFixed(2)}, Peremetr: ${p.toFixed(2)}`);

// }

// gipatinuza(3, 4);



////1
let ism: string = "Ulugbek"
let age: number = 30
console.log(ism + ' ' + age);

///////2
let isStudent: boolean = true
console.log(isStudent);

//////3
let meva: Array<String> = ["banana", "cherry"]
console.log(meva);

/////// Funksiyalar — types, default values, optional parameters
//////1
function qoshish(a: number, b: number) {
    let result = a + b
    console.log(result);
}
qoshish(4, 8)

/////////2
function greet(name: string = "Guest"): string {
    return `hello ${name}`
}
greet("Sheroz")

////////3
function logInfo(ism: string, age?: number) {
    if (age) {
        console.log(`Ali is ${age} years old `);

    } else {
        console.log("Ali's age is unknown");

    }
}
logInfo("ulugbek", 30)


///////Objectlar va Type Aliaslar
//////1
type Person = {
    name: string;
    age: number;
    isStudent: boolean
};

const Person1: Person = {
    name: "Ali",
    age: 25,
    isStudent: true
};


//////2
type Car = {
    brand: string;
    year: number;
    isElectric: boolean;
};

function printCarInfo(car: Car): void {
    console.log(`Brand: ${car.brand}`);
    console.log(`Year: ${car.year}`);
    console.log(`Is Electric: ${car.isElectric ? 'Yes' : 'No'}`);
}


//////Union Types, Literal Types, va Type Narrowing
/////1
function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(`ID is a string: ${id}`);
    } else {
        console.log(`ID is a number: ${id}`);
    }
}


//////2
type Direction = 'up' | 'down' | 'left' | 'right';

function move(dir: Direction): void {
    console.log(`Moving ${dir}`);
}


//////3
function processItems(items: string[] | number[]): void {
    if (typeof items[0] === "string") {
        (items as string[]).forEach(item => {
            console.log(item.toUpperCase());
        });
    } else {
        (items as number[]).forEach(item => {
            console.log(item * 2);
        });
    }
}
