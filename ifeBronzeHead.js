
// function myFunction(){
//   alert("the page sucessfully loaded");
// }




// var audio = new Audio()
// audio.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=Hello%20World.';
// audio.play();
//
// function googleTranslateElementInit(){
//   new google.Translate.Element({pageLanguage: 'en'}, 'google_translate_element');
// }

document.querySelector(".yoruba").addEventListener("click", function(){
    document.querySelector(".inEnglish1").innerHTML = "Ori Idẹ lati Ife, tabi Ori Ife, jẹ ọkan ninu awọn ere didan mejidinlogun ti a ko jade ni ọdun 1938 ni Ife ni Nigeria, ile-ẹsin ati ti ọba atijọ ti awọn eniyan Yoruba. O gbagbọ pe o ṣe aṣoju ọba kan. O ṣee ṣe ni ọrundun kẹrinla-karundinlogun C.E. Iduroṣinṣin ati iṣẹ-ọna ti o ni ilọsiwaju ti awọn nkan koju awọn ero Iwọ-oorun ti iṣẹ Afirika. Awọn ẹya ara-ara ti awọn ori Ife jẹ alailẹgbẹ ni Afirika, ati pe loni ni a rii bi aṣeyọri ti o ga julọ ti aworan ati aṣa Afirika. Awọn afi ti awọn ori Ife “daba pe wọn ṣe nipasẹ oṣere onikaluku tabi ni idanileko kan”. Ọdun kan lẹhin wiwa rẹ, a mu Ori Ife lọ si Ile musiọmu ti Ilu Gẹẹsi."
    // document.querySelector(".inEnglish2").innerHTML = "this is where the 2nd paraagraph of the yoruba translation of the page goes to"
    document.querySelector(".heading").innerHTML = "Ori Idẹ lati Ife"

    // var yorubaLang = newAudio("yorubaPreview.mp3")
    // yorubaLang.play();
})

document.querySelector(".igbo").addEventListener("click", function(){
    document.querySelector(".inEnglish1").innerHTML = "Isi ọla nke si na Ife, ma ọ bụ Ife Ife, bụ otu n’ime ihe osise iri na asatọ eji ọla kọpa kpụọ bụ nke achọpụtara na 1938 na Ife na Nigeria, ebe okpukperechi na mbụ nke ndị Yoruba. A kwenyere na ọ na-anọchite anya eze. O nwere ike ịbụ na e mere ya na narị afọ nke iri na anọ na nke iri na ise O.A. Ezigbo nkà na nkà e ji mara ihe ndị mere ka echiche ndị Ebe Ọdịda Anyanwụ ofwa banyere nkà Africa maa aka. Ebumnuche ndị sitere n'okike nke ndị isi Ife dị iche n'Africa, a na-ahụta taa dị ka ihe kachasị nweta nka na omenaala Africa. Thedị myirịta dị n’isi ndị Ife “na-atụ aro na ọ bụ otu onye mepụtara ya ma ọ bụ n’otu nkuzi”. Otu afọ mgbe achọtara ya, ewegara onye isi Ife na British Museum."
    // document.querySelector(".inEnglish2").innerHTML = "this is where the 2nd paraagraph of the Igbo translation of the page goes to"
    document.querySelector(".heading").innerHTML = "Isi Ọla si Ife"
})

document.querySelector(".hausa").addEventListener("click", function(){
    document.querySelector(".inEnglish1").innerHTML = "Shugaban Bronze daga Ife, ko kuma Ife, yana ɗaya daga cikin mutum-mutumi goma sha takwas da aka sassaka tagulla waɗanda aka gano a 1938 a Ife a Nijeriya, cibiyar addini da tsohon masarauta ta Yarabawa. An yi amannar wakiltar sarki ne. Wataƙila an yi shi ne a ƙarni na sha huɗu da goma sha biyar A.Z. Haƙiƙanci da ƙwarewar ƙwarewar abubuwa na ƙalubalantar tunanin Yammacin Afirka game da fasaha. Abubuwan halaye na kwalliyar shugabannin Ife babu irin su a Afirka, kuma a yau ana ganin su babbar nasara ce ta fasaha da al'adun Afirka. Kamanceceniyar kamannin shugabannin Ife 'sun nuna cewa wani mai fasaha ne ya yi su ko kuma a cikin bita ɗaya'. Shekara guda bayan ganowarsa, an kai Shugaban Ife zuwa Gidan Tarihi na Burtaniya."
    // document.querySelector(".inEnglish2").innerHTML = "this is where the 2nd paraagraph of the hausa translation of the page goes to"
    document.querySelector(".heading").innerHTML = "Masarautar Ife tagulla"


})


// $(window).on("load",function(){
//      $(".loader-wrapper").fadeOut("slow");
// });
