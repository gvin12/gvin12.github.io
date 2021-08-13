let data1={
    photo: "images/bird-3732867__340.jpg",
    title: "Hóbagoly",
    description: "Külső megjelenésében az uhufajoktól főleg a fehér tollazatával és a tollakkal borított csüdjével és lábujjaival különbözik. Ezek a bélyegek a sarkvidéki klímához és élőhelyhez való alkalmazkodás folyamán alakultak ki a fajnál."
}
let data2={
    photo: "images/chicken-3741129__340.jpg",
    title: "Kakas",
    description: "Egyes madarak, jellemzően, de nem kizárólag a baromfiak egyes csoportjainak hímjeit jelölő elnevezés. Általánosságban elmondható az adott fajta tojóinál nagyobb testméret, díszesebb tollazat, összességében feltűnőbb megjelenés."
}
let data3={
    photo: "images/hedgehog-3703244__340.jpg",
    title: "Sün",
    description: "A keleti sünt leggyakrabban csak a sün névvel jelölik. Főleg a mesékben szerepel gyakran a régies sündisznó elnevezés is. Egyéb népies nevei a sül és a tüskésdisznó, sünkutya."
}
let data4={
    photo: "images/kingfisher-1068684__340.jpg",
    title: "Jégmadár",
    description: "Európa, Ázsia és Afrika lakója. Kisebb folyók és patakok partján halászik. Erdőszéleken is él."
}
let data5={
    photo: "images/kitten-3442257__340.jpg",
    title: "Macska",
    description: "Ügyes ragadozó, több mint 1000 faj tekinthető a zsákmányának. Emellett meglehetősen intelligens, beidomítható egyszerű parancsok végrehajtására vagy szerkezetek működtetésére – illetve képes önállóan is kisebb feladatok betanulására."
}
let data6={
    photo: "images/lion-3576045__340.jpg",
    title: "Oroszlán",
    description: " A tigris után ez a legnagyobb termetű és legelterjedtebb „nagymacska”. Vadon élő állománya rohamosan csökken, afrikai falkái tíz év alatt szinte megfeleződtek. A földrészen alig 25 000 példány maradt, természetvédelmi státusza sebezhetőre módosult."
}
let data7={
    photo: "images/raccoon-3538081__340.jpg",
    title: "Mosómedve",
    description: "Ez az állat gyűrűs farkú és jellegzetes banditamaszkot viselő mindenevő, amely remekül alkalmazkodott az emberek közelségéhez. Eredetileg Amerika lakója, de elvadult példányai Európa területén is életképes populációkat hoztak létre. Amerika egyes részein veszélyeztetett, mert gyakran ütik el a figyelmetlen autósok."
}
let data8={
    photo: "images/white-horse-3419146__340.jpg",
    title: "Ló",
    description: "Ma a legtöbb ló háziasított, vagy legalábbis háziasított ősöktől származik, még a vadon élő lovak legtöbbje is. Háziasítása Közép-Ázsiában, a botaji kultúrában kezdődött, nagyjából 4000 évvel ezelőtt, majd a mai Dél-Oroszország, illetve Mezopotámia területén folytatódott. Az első feljegyzések a lovak hadászati célú hasznosításáról szólnak."
}
let imagesData=[data1,data2,data3,data4,data5,data6,data7,data8]
let currentPhoto=0
currentPhoto=parseInt(currentPhoto)
function kepMegjelenes(sorszam){
    $("#kep").attr("src",imagesData[sorszam].photo)
    $("#kep").attr("alt",imagesData[sorszam].title)
    $("#photo-title").text(imagesData[sorszam].title)
    $("#photo-description").text(imagesData[sorszam].description)
    $(".thumbp").css("border-color","white")
    $(`.thumbp[sorszam=${sorszam}]`).css("border-color","black")
}
$("#kov").click(()=>{
    if (currentPhoto===imagesData.length-1) {
        currentPhoto=0
    } else {
        currentPhoto+=1
    }
    kepMegjelenes(currentPhoto)
})
$("#elo").click(()=>{
    if (currentPhoto<1) {
        currentPhoto=imagesData.length-1
    } else {
        currentPhoto-=1
    }
    kepMegjelenes(currentPhoto)
})
let i=0
imagesData.forEach((p)=>{
    $("#thumbc").append(`<div class="thumbi" sor=${i}><p class="title">${p.title}</p><img class='thumbp' sorszam=${i} src=${p.photo} alt=${p.title}></div>`)
    i++
})
$("#thumbc").on("click",".thumbp",(event)=>{
    //currentPhoto=$(event.target).attr("sorszam")*1//szöveget ad vissza ezért szorzom eggyel mert így szám lesz
    currentPhoto=parseInt($(event.target).attr("sorszam"))//ez nem Mekk Elek-es, mint az előző
    kepMegjelenes(currentPhoto)
})/*
$('#thumbc').on("hover",".thumbi",(event)=>{
    let tmp=parseInt($(event.target).attr("sor"));
    tmp=0.19+tmp*0.09;
    $(".title").css("left",tmp);
})*/
kepMegjelenes(currentPhoto)/*
$(document).ready(function(){
    $('.thumbi').hover(function(){
        $(this).find('.title').fadeIn(300);
    }),function(){
        $(this).find('.title').fadeOut(100);
    }
})*/
/*
$("#elo").click(()=>{
    $('#elo .nkep').css("opacity","0.4")
})

$("#kov").click(()=>{
    $('#kov .nkep').css("opacity","0.4")
})*/