var chatMsg = {
  'staff': {'name': 'Staff', 'short': 'Dit zijn de mensen die voor Twitch werken', 'link': 'http://i.imgur.com/JACDsjP.png', 'long':
  'Staff zijn de mensen die bij Twitch zelf werken en zorgen dat de website in leven blijft.'
},
  'admin': {'name': 'Admin', 'short': 'Mensen die voor Twitch werken en houden de streamers in de gaten', 'link': 'http://i.imgur.com/SppyShU.png', 'long':
  'Dit zijn betaalde medewerkers bij Twitch die zorgen dat streamers en kijkers zich houden aan de regels van Twitch zelf.'
},
  'globalMod': {'name': 'Global Moderator', 'short': 'Vrijwilligers die op elk kanaal mod rechten hebben', 'link': 'http://i.imgur.com/DOTT3Qu.png', 'long':
  'Dit zijn vrijwilligers die bij Twitch werken om een bepaald deel van Twitch in de gaten te houden. Je kan ze zien als een channel mod, \
   maar dan over de hele website!'
},
  'mod': {'name': 'Moderator', 'short': 'Helpen mensen in de chat en houden het een rustige plek', 'link': 'http://i.imgur.com/jeAkmQy.png', 'long':
  'Omdat de streamer zelf bezig is met de livestream, kan hij niet altijd bezig zijn met de regels in de chat, daarom stelt de streamer vaak "moderatos" aan. \
  Deze mensen houden voor hem de chat in de gaten. Zij kunnen dan ook mensen die zich misdragen een "purge" of een "timeout geven". Als je een purge krijgt, \
  dan worden al jou berichten uit de chat verwijderd. Als je een timeout krijgt, dan kan je voor een aantal minuten of uren niet meer praten. Deze tijden kunnen \
  variëren, maar meestal is het voor 10 minuten lang. Het is ook mogelijk dat je een ban krijgt. Wanneer je wordt gebanned, kan je voor altijd niks meer in die chat zeggen.'
},
  'streamer': {'name': 'Broadcaster', 'short': 'Dit is de persoon die aan het streamen is op het kanaal', 'link': 'http://i.imgur.com/yDZq8TX.png', 'long':
  'Dit is de icon van de streamer waar je naar aan het kijken bent. Tijdens de stream praat deze persoon waarschijnlijk nauwelijks in de chat omdat \
   hij of zij bezig is met het streamen.'
},
  'turbo': {'name': 'Turbo', 'short': 'Betaalde service met extra dingen', 'link': 'http://i.imgur.com/MQTUiXI.png', 'long':
  "Turbo is een betaalde service van Twitch waarbij je extra features kan krijgen. Je betaald 9 dollar per maand voor; Geen advertenties, \
   andere emoticons, deze badge, meer chatkleuren en meer opslagruimte voor video's <a href='https://www.twitch.tv/products/turbo/ticket/new' \
   target='_blank'>Klik hier</a> als je meer info over Turbo wilt of het wilt kopen."
},
  'prime': {'name': 'Twitch Prime', 'short': 'Betaalde service in samenwerking met Amazon', 'link': 'http://i.imgur.com/jc0JCji.png', 'long':
  'Prime is een vernieuwde methode om Twitch en hun streamers te helpen. Door gebruik te maken van Amazon Prime kan je voor 11 dollar per maand veel extra \
   dingen krijgen. Hieronder valt; Spullen voor in games, geen ads, gratis sub voor 1 kanaal per maand,  all dingen van Turbo en alle dingen van Amazon Prime! \
   Dit is echter helaas nog niet beschikbaar in Nederland. Sommige mensen in Belgie of in grensgebieden kunnen het al wel halen. Voor meer info over Prime klik \
   <a href="https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide" target="_blank">HIER</a> (ENGELS).'
},
  'cheer': {'name': 'Cheers', 'short': 'Mensen die geld geven aan de streamer door middel van bits', 'link': 'http://i.imgur.com/NcrukQO.png', 'long':
  ' Cheers zijn een manier om de streamer die je aan het kijken bent te supporten! Dit kan je door  bits te doneren. Deze kan je kopen via Amazon. Elke bit \
   is 1 cent waard. Bij de zoveel bits krijg je steeds weer een nieuwe badge. Meer informatie  over cheering en bits kan je \
   <a href="https://help.twitch.tv/customer/nl/portal/articles/2449458" target="_blank">HIER</a> vinden.'
},
  'sub': {'name': 'Subscriber', 'short': "Mensen die maandelijks geld betalen voor extra's in de chat", 'link': 'http://i.imgur.com/GJilH8B.png', 'long':
  'Elke channel heeft zijn eigen subscriber icon. Je kan dit ook zien door met je muis over  de sub icon te gaan om te zien dat het een sub icon is en te \
   zien hoeveel maanden deze persoon al ongeveer is geabonneerd op de streamer. '
 },
}

for (key in chatMsg) {
  var link = chatMsg[key]['link']
  var text = chatMsg[key]['short']
  var name = chatMsg[key]['name']
  $("#chatMsgs").append('<div id="'+key+'" class="message"><img class="msgIcon" src='+link+'><p class="msgText"><b>'+name+"</b>: "+text+'</p></div>');
}

var msgs = document.getElementsByClassName("message");
for (var i = 0; i < msgs.length; i++) {
  msgs[i].addEventListener('click', function() {
    var link = chatMsg[this.id].link
    var text = chatMsg[this.id].long
    var name = chatMsg[this.id].name
    $("#modalInfo").html('<img id="modalImg" src='+link+'><b>&nbsp;'+name+"</b><br><p class='modalText'>"+text+'</p>')
    $('#modalInfo').removeClass('animated bounceOutUp');
    $('#modalInfo').addClass('animated bounceInDown');
    document.getElementById("modal").style.display = "block";
  });
}

window.onclick = function(event) {
  if(document.getElementById("modal").style.display == "block" && event.target == modal) {
    $('#modalInfo').removeClass('animated bounceInDown');
    $('#modalInfo').addClass('animated bounceOutUp');
    setTimeout(function () { document.getElementById("modal").style.display = "none" }, 1000);
  }
};
