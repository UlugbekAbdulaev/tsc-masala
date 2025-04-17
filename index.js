// function t(a:number , b:number){
//   let result = a+b*2
//   console.log(result);
// }
// t(15 , 20)
//1chi masala
function s(a) {
    var p = 4 * a;
    console.log("kvadrat peremetri " + p);
}
s(10);
//2-masala
function kvYuzasi(a) {
    var result = Math.pow(a, 2);
    console.log("kvadratning yuzi " + result);
}
kvYuzasi(5);
//3-masala
function YuzaPerimetr(a, b) {
    var S = a * b;
    var P = 2 * (a + b);
    console.log("Yuza: ".concat(S), "Perimetr: ".concat(P));
    console.log();
}
YuzaPerimetr(3, 5);
//4masala
function AylanaDiametri(d) {
    var length = d * Math.PI;
    var uzunlik = length.toFixed(2);
    console.log("Aylana uzunligi: ".concat(uzunlik));
}
AylanaDiametri(4);
//5-masala
function KubYonTomoni(a) {
    var v = Math.pow(a, 3);
    var s = 6 * Math.pow(a, 2);
    console.log("Hajmi: ".concat(v), "to'la sirti: ".concat(s));
}
KubYonTomoni(5);
//6masala
function paralapeped(a, b, c) {
    var v = a * b * c;
    var s = 2 * (a * b + b * c + a * c);
    console.log("Hajmi: ".concat(v), "to'la sirti: ".concat(s));
}
paralapeped(5, 7, 8);
//7-masala
function radius(r) {
    var L = 2 * Math.PI * r;
    var S = Math.PI * Math.pow(r, 2);
    var uzunlik = L.toFixed(2);
    var radius = S.toFixed(2);
    console.log("uzunligi: ".concat(uzunlik, ", Yuzasi: ").concat(radius));
}
radius(3);
//8-masala
function arifmetik(a, b) {
    var j = (a + b) / 2;
    console.log("o'rta arifmetigi: ".concat(j));
}
arifmetik(3, 4);
//9-masala
function geomeri(a, b) {
    if (a > 0 && b > 0) {
        var j = Math.sqrt(a * b);
        var result = j.toFixed(2);
        console.log("o'rta geometrigi\" ".concat(result));
    }
    else {
        console.error("musbat son bo'lishi kerak");
    }
}
geomeri(6, 7);
// 10-masala
function yigKop(a, b) {
    if (a !== 0 && b !== 0) {
        var yig = a + b;
        var kop = a * b;
        var akvd = Math.pow(a, 2);
        var bkvd = Math.pow(b, 2);
        console.log("Yig'indisi: ".concat(yig, ", Ko'paytmasi: ").concat(kop, ", a ning kvadrati: ").concat(akvd, ", b ning kvadrati: ").concat(bkvd));
    }
    else {
        console.error("Ikkala son ham 0 ga teng bo'lmasligi kerak");
    }
}
yigKop(4, 5);
//11-masala
function modul(a, b) {
    var yig = a + b;
    var kop = a * b;
    var modulA = Math.abs(a);
    var modulB = Math.abs(b);
    console.log("Yig'indisi: ".concat(yig, ", Ko'paytmasi: ").concat(kop, ", a ning moduli: ").concat(modulA, ", b ning moduli: ").concat(modulB));
}
modul(2, 3);
//12-masala 
function gipatinuza(a, b) {
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    var p = a + b + c;
    console.log("Gipotenuza: ".concat(c.toFixed(2), ", Peremetr: ").concat(p.toFixed(2)));
}
gipatinuza(3, 4);
