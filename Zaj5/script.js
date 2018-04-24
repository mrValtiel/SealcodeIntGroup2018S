var kotki = [
  { imie: "Rufus", poziom_slodkosci: 5, obraz: { url: "https://i.ytimg.com/vi/FHH6hIc2GyE/0.jpg" , rozmiar: "M"  }},
  { imie: "Maciuś", poziom_slodkosci: 4, obraz: { url: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782" , rozmiar: "M"  }},
  { imie: "Ruzia", poziom_slodkosci: 8, obraz: { url: "https://i.pinimg.com/originals/5b/73/82/5b7382c685073fcebdac0e522af3883a.jpg" , rozmiar: "L"  }},
  { imie: "Sebastian", poziom_slodkosci: 9, obraz: { url: "https://vallaura.files.wordpress.com/2015/12/sweet-cat-prayering-image.jpg" , rozmiar: "L"  }},
  { imie: "Kajetan", poziom_slodkosci: 10, obraz: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomCRsvcTur_mvHS_aQbnITpo_4O4W_0kFpkNsRj_HuIEJFcLu" , rozmiar: "M"  }},
  { imie: "Isia", poziom_slodkosci: 9, obraz: { url: "http://wlpapers.com/images/closeup-sweet-cat-photo-1.jpg" , rozmiar: "M"  }}
];

function showInfo(e) {
    console.log(e);
    var msg = "Imie: " + kotki[e].imie + ", poziom słodkości: " + kotki[e].poziom_slodkosci;
    window.alert(msg);
}

var kot0 = document.getElementById("kot0");
var kot1 = document.getElementById("kot1");
var kot2 = document.getElementById("kot2");
var kot3 = document.getElementById("kot3");
var kot4 = document.getElementById("kot4");
var kot5 = document.getElementById("kot5");

kot0.addEventListener("click", function(){
    var msg = "Imie: " + kotki[0].imie + ", poziom słodkości: " + kotki[0].poziom_slodkosci;
    window.alert(msg);
});
kot1.addEventListener("click", function(){
    var msg = "Imie: " + kotki[1].imie + ", poziom słodkości: " + kotki[1].poziom_slodkosci;
    window.alert(msg);
});
kot2.addEventListener("click", function(){
    var msg = "Imie: " + kotki[2].imie + ", poziom słodkości: " + kotki[2].poziom_slodkosci;
    window.alert(msg);
});
kot3.addEventListener("click", function(){
    var msg = "Imie: " + kotki[3].imie + ", poziom słodkości: " + kotki[3].poziom_slodkosci;
    window.alert(msg);
});
kot4.addEventListener("click", function(){
    var msg = "Imie: " + kotki[4].imie + ", poziom słodkości: " + kotki[4].poziom_slodkosci;
    window.alert(msg);
});
kot5.addEventListener("click", function(){
    var msg = "Imie: " + kotki[5].imie + ", poziom słodkości: " + kotki[5].poziom_slodkosci;
    window.alert(msg);
});