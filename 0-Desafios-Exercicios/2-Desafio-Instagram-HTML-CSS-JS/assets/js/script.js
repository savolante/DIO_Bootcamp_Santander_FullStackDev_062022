// APRESENTAÇÃO DE IMAGENS COMO SLIDE AUTOMATICO

function slide1() {
    console.log("slide1");
    document.getElementById("banner-insta").src="./assets/imagens/insta_feed.png";
    setTimeout("slide2()", 2000);
}

function slide2() {
    document.getElementById("banner-insta").src="./assets/imagens/insta_roll.png";
    setTimeout("slide3()", 2000);
}

function slide3() {
    document.getElementById("banner-insta").src="./assets/imagens/insta_stories.png";
    setTimeout("slide4()", 2000);
}

function slide4() {
    document.getElementById("banner-insta").src="./assets/imagens/insta_msg.png";
    setTimeout("slide1()", 2000);
}

