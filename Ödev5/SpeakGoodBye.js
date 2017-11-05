var byeSpeaker ={};
byeSpeaker.name="Umut";

var speakWord = "Good Bye";

(function (name) {
	byeSpeaker.sayBye=function() // byeSpeaker.sayBye diye bir fonksiyon yaratıyoruz
	{
  console.log(speakWord + " " + byeSpeaker.name);
	}
	name.byeSpeaker=byeSpeaker; // fonksiyonun para metresini byeSpeaker olarak atıyoruz
})(name);

byeSpeaker.sayBye();  // fonksiyonu çağırıyoruz