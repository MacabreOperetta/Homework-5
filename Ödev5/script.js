var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var i;

for (i=0;i<names.length;i++) {  // names dizisinin uzunluğu kadar dönen bir for düngüsü

  var firstLetter= names[i].charAt(0);   // dizideki her ismin ilk harfini firstletter adlı değişkene atıyoruz

  firstLetter=firstLetter.toLowerCase(); // büyük harfle başlayan isimlerin baş harfini küçük harfe dönüştürüyoruz

  if (firstLetter=='j') { // ilk harf 'j' ise
    var goodbye="Good Bye ";
    console.log(goodbye + names[i]);
  } else { // ilk harfi 'j' değil ise
    var hello="Hello ";
    console.log(hello+names[i]);
  }
}
