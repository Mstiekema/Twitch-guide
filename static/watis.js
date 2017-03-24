var clicks = document.getElementsByClassName("click");
var allImgs = {
  followSub: 'http://i.imgur.com/kbczwui.png', followSubWidth: 175,
  channelInfo: 'http://i.imgur.com/6rT0pnY.png', channelInfoWidth: 370,
  aanbevolen: 'http://i.imgur.com/rh1XZI8.png ', aanbevolenWidth: 167,
  infoPanels: 'http://i.imgur.com/XDtdMx2.png', infoPanelsWidth: 392,
  feed: 'http://i.imgur.com/FeZB3RH.png', feedWidth: 233,
  meerTwitch: 'http://i.imgur.com/aNcPkar.png', meerTwitchWidth: 167,
  volgenBladeren: 'http://i.imgur.com/KsIur1Q.png', volgenBladerenWidth: 167,
  vrienden: 'http://i.imgur.com/PEK7Jwx.png', vriendenWidth: 167,
  titleGame: 'http://i.imgur.com/HcIBbJv.png', titleGameWidth: 653,
  playerVod: 'http://i.imgur.com/7zGfc1x.png', playerVodWidth: 649,
  chat: 'http://i.imgur.com/xCJ1RAM.png', chatWidth: 226,
  login: 'http://i.imgur.com/7b0Tuql.png', loginWidth: 167
}
var allTexts = {
  followSub: {text:"Met deze knoppen kan je een kanaal volgen of erop abonneren. Er is een groot verschil tussen deze twee. Volgen kan je vergelijken met abonneren \
  op YouTube. Door te abonneren op een kanaal betaal je per maand zo'n 5,50 a 6 euro (5 dollar + 21% BTW). Hiermee support je de streamer die je kijkt en krijgt \
  allemaal extra features. Twitch zelf geeft je een speciale badge in die chat die laat zien dat je een sub bent. Daarnaast heb je geen last van slow-mode, kan \
  je praten tijdens sub-only mode en zie je minder reclames. Meestal hebben streamers zelf ook extra dingen voor hun subs, maar daarvoor moet je naar hun informatie \
  panels kijken of daarnaar vragen aan de mods of de streamer zelf.", name:"Follows & subs", short:["Followen = subben op YouTube", "Subben = betalen voor extra's \
  en support de streamer"]},
  channelInfo: {text:"In deze balk kan je redelijk wat dingen zien en naar toe gaan. Als eerste zie je links de naam van de channel die je aan het kijken bent met het \
  logo daarnaast. Hiernaast kan je alle opgeslagen video's van dat kanaal zien. Dit kunnen eerdere streams zijn, highlight van streams of zelf geüploade video's. \
  Rechts staan alle clips die zijn gemaakt. Je kan deze sorteren op de top clips per tijdsvak. In deze balk staan ook het aantal volgers dat de stream heeft en \
  hoeveel mensen de streamer zelf volgt.", name:"Channel info", short:["Links met meer dingen dan de stream", "Oude streams en clips terugkijken"]},
  aanbevolen: {text:"Dit deel van de website laat een aantal aanbevolen kanalen zien. Deze kanalen kunnen kanalen zijn die je recent hebt gezien of kanalen die lijken op \
  andere kanalen die je recent hebt gezien. Het is altijd handig om een kijkje te nemen bij deze streams, misschien zit er wat leuks tussen!", name:"Aanbevolen",
  short:["Laat andere, nieuwe kanalen zien voor je om te kijken"]},
  feed: {text:"In deze panels kan je allemaal zien wat een streamer te zeggen heeft over zijn stream. Hier kan onderanderen staan welke dagen en tijde de streamer \
  streamt, hun setup, informatie over de stream of een donatie link. Vaak staan hier ook regels waar je je aan moet houden in de chat. Het is altijd handig om deze \
  te lezen voordat je gaat chatten.", name:"Info", short:["Kleine panels met informatie over de stream en streamer"]},
  infoPanels: {text:"Dit is de feed. Hier kunnen streamers updates achterlaten. Dit kunnen updates zijn over wanneer ze gaan streamen of misschien over iets totaal anders. \
  Kijkers kunnen ook op deze berichten in de feed reageren door middel van een reactie of alleen een emote. De feed is niet iets wat iedereen aan heeft staan, \
  dus je zal het niet altijd op elk kanaal terugvinden.", name:"Berichten", short:["Update feed van de streamer waar je op kan reageren"]},
  meerTwitch: {text:"Meer op Twitch is een kleine zijbalk met verschillende links die je meer informatie kunnen geven. Dit is eigenlijk niet echt iets waar je veel mee \
  doet, maar je kan altijd een kijkje nemen voor meer informatie over dat deel.", name:"Meer op Twitch", short:["Extra informatie over Twitch en je account"]},
  volgenBladeren: {text:"Dit zijn waarschijnlijk wel twee van de belangrijkste dingen op Twitch. Als je op volgend drukt, kan je alle kanalen zien die jij hebt gevolgd. \
  Bladeren geeft alle kanalen weer die op dat moment live zijn. Deze staan automatisch gesorteerd op het aantal kijkers. Zelf kan je ook nog een taal filter \
  aanzetten zodat je bijvoorbeeld alleen nog maar Nederlandse kanalen ertussen ziet staan. Dit is erg handig om nieuwe streams te ontdekken. Als je plugins \
  installeerd voor Twitch kunnen er meerdere balken komen te staan. Klik er dan gewoon is een keer erop zodat je kan zien wat je daar allemaal kan ontdekken.",
  name:"Volgend en bladeren", short:["Volgend geeft al jou gevolgde kanalen weer die live zijn", "Bladeren laat alle streams zien die live zijn"]},
  vrienden: {text:"Vrienden is een feature op Twitch waarbij je met anderen bevriend kan raken. Zodra je bevriend met iemand bent, kan je het zien wanneer deze persoon \
  online is op Twitch en kan je zien welke stream deze persoon aan het kijken is. Op deze manier kan je ook weer nieuwe streams ontdekken. Ook kan je hierdoor zien \
  wanneer een vriend het kanaal joined wat jij aan het kijken bent. Het is altijd wel handig om te wachten met hallo zeggen tegen die persoon totdat hij zelf hallo \
  zegt, omdat niet altijd iedereen zin heeft om te chatten.", name:"Vrienden", short:["Voeg vrienden toe op Twitch", "Zie welke streams zij aan het kijken zijn"] },
  titleGame: {text:"Hier kan je heel makkelijk en overzichtelijk zien wat de titel van de stream is en welke game er wordt gespeeld op het moment. Ook zie je naast \
  de game in welk team de streamer ziet en onder welke community hij streamt. Als je op een van deze klikt, wordt je doorverwezen naar een pagina met alle andere \
  streamers die ook deze game spelen of onder dezelfde community streamen.", name:"Titel en game", short:["Zie de titel en de game die de streamer aan het doen is",
  "Laat ook team en community zien waarin de streamer live is"] },
  playerVod: {text:"Dit is de player. Als de stream live is kan je hier alle actie bekijken. Als de stream offline is, zie je de balk erboven staan. Deze balk heeft een \
  link voor je klaarstaan van de vorige stream (de VOD). Als je halverwege was gestopt met kijken, kan je op de video klikken en meteen weer verder gaan kijken \
  vanaf het punt waar je was gestopt.", name:"Speler en VOD", short:["Hier kan je de livestream zien", "Bovenste balk geeft laatste stream weer als de stream offline is"] },
  chat: {text:"De chat is HET belangrijkste deel van heel Twitch. Hier kan jij namelijk met andere mensen en de stream praten. Hierdoor kan je invloed hebben op de stream \
  die je aan het kijken bent. Je moet wel rekening houden met andere mensen die ook graag willen praten. Er zijn ook mods aanwezig in de chat die de chat rustig \
  houden. Zij kunnen berichten verwijderen en mensen verbannen. Denk dus goed na voordat je wat zegt in de chat.", name:"Chat", short:["Hier kan je live met \
  andere mensen en de streamer praten", "Mods houden de chat rustig"] },
  login: {text:"Hier kan je al jou informatie zien zodra je bent ingelogd. Het is altijd wel handig om te kijken wat alles precies is, zodat je weet waar je alles kan \
  vinden.", name:"Login", short:["Hier log je in"] }
}

for (var i = 0; i < clicks.length; i++) {
  clicks[i].addEventListener('click', function() {
    var link = allImgs[this.id]
    var text = allTexts[this.id].text
    var title = allTexts[this.id].name
    var short = allTexts[this.id].short
    var imgWidth = this.id + "Width"
    $("#modalImg").attr("src", link)
    $("#modalText").html(title+"<br>")
    for(var i = 0; i < short.length; i++) {
      $("#modalText").append("<br>" + "x " + short[i])
    }
    $("#modalText").append("<br><br>" + text)
    var width = allImgs[imgWidth] + 320
    $("#modalInfo").width(width)
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
