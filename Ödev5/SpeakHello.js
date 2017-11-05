 var helloSpeaker ={};
 helloSpeaker.name="Erdem";

var speakWord = "Hello";

(function (name) {
	helloSpeaker.sayHello=function() //helloSpeaker.sayHello diye bir fonksiyon yaratıyoruz
	{
  console.log(speakWord +" "+ helloSpeaker.name);
	}
	name.helloSpeaker=helloSpeaker; // fonksiyonun para metresini helloSpeaker olarak atıyoruz
})(name);

helloSpeaker.sayHello(); // fonksiyonu çağırıyoruz