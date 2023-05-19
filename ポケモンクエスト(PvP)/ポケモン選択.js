const Pnameon1 = localStorage.getItem("names1");
const Pnameon2 = localStorage.getItem("names2");
let Sdohi = [55,57,59,61,63,65,67,69,71,73];
let Srithe = [112,114,116,118,120,122,124,126,128,130];
let Sulu = [112,114,116,118,120,122,124,126,128,130];
let Sban = [77,78,79,80,81,82,83,84,85,86];
let Sburi = [49,51,53,55,57,59,61,63,65,67];
let Skite = [93,95,97,99,101,103,105,107,109,111];
let Ssou = [97,99,101,103,105,107,109,111,113,115];
let Ssegu = [96,98,100,102,104,106,108,110,112,114];
let Sdora = [154,156,158,160,162,164,166,168,170,172];
let Skai = [92,94,96,98,100,102,104,106,108,110];
let chaos = 0;
let data = [
 { "name": "ドヒドイデ", "level": 50, "MHP": 125, "HP": 125, "A": 83, "B": 172, "C": 73, "D": 162, "S": 0, "img1": "../ポケモンクエスト画像/ドヒドイデ1.png", "img2": "../ポケモンクエスト画像/ドヒドイデ2.png","bodytype1": "water", "bodytype2": "poison", "skill1": 4, "skill2": 5, "skill3": 6, "skill4": 7, "F": "ひとでなし"},
 { "name": "リザードン", "level": 50, "MHP": 153, "HP": 153, "A": 104, "B": 98, "C": 129, "D": 105, "S": 0, "img1": "../ポケモンクエスト画像/リザードン1.png", "img2": "../ポケモンクエスト画像/リザードン2.png","bodytype1": "fire", "bodytype2": "sky", "skill1": 0, "skill2": 1, "skill3": 2, "skill4": 3, "F": "もうか"},
 { "name": "ウルガモス", "level": 50, "MHP": 160, "HP": 160, "A": 80, "B": 85, "C": 155, "D": 125, "S": 0, "img1": "../ポケモンクエスト画像/ウルガモス1.png", "img2": "../ポケモンクエスト画像/ウルガモス2.png","bodytype1": "bug", "bodytype2": "fire", "skill1": 29, "skill2": 8, "skill3": 9, "skill4": 10, "F": "むしのしらせ"},
 { "name": "バンギラス", "level": 50, "MHP": 175, "HP": 175, "A": 154, "B": 130, "C": 115, "D": 120, "S": 0, "img1": "../ポケモンクエスト画像/バンギラス1.png", "img2": "../ポケモンクエスト画像/バンギラス2.png","bodytype1": "rock", "bodytype2": "evil", "skill1": 11, "skill2": 12, "skill3": 2, "skill4": 13, "F": "きんちょうかん"},
 { "name": "ブリムオン", "level": 50, "MHP": 132, "HP": 132, "A": 110, "B": 115, "C": 156, "D": 123, "S": 0, "img1": "../ポケモンクエスト画像/ブリムオン1.png", "img2": "../ポケモンクエスト画像/ブリムオン2.png","bodytype1": "esper", "bodytype2": "fairy", "skill1": 14, "skill2": 15, "skill3": 16, "skill4": 17, "F": "いやしのこころ"},
 { "name": "キテルグマ", "level": 50, "MHP": 201, "HP": 201, "A": 160, "B": 119, "C": 97, "D": 101, "S": 0, "img1": "../ポケモンクエスト画像/キテルグマ.png", "img2": "../ポケモンクエスト画像/キテルグマ.png","bodytype1": "normal", "bodytype2": "fight", "skill1": 18, "skill2": 19, "skill3": 20, "skill4": 21, "F": "もふもふ"},
 { "name": "ソウブレイズ", "level": 50, "MHP": 150, "HP": 150, "A": 162, "B": 100, "C": 92, "D": 120, "S": 0, "img1": "../ポケモンクエスト画像/ソウブレイズ1.png", "img2": "../ポケモンクエスト画像/ソウブレイズ2.png","bodytype1": "fire", "bodytype2": "ghost", "skill1": 21, "skill2": 22, "skill3": 23, "skill4": 24, "F": "くだけるよろい"},
 { "name": "セグレイブ", "level": 50, "MHP": 190, "HP": 190, "A": 165, "B": 112, "C": 95, "D": 106, "S": 0, "img1": "../ポケモンクエスト画像/セグレイブ1.png", "img2": "../ポケモンクエスト画像/セグレイブ2.png","bodytype1": "dragon", "bodytype2": "ice", "skill1": 26, "skill2": 11, "skill3": 27, "skill4": 28, "F": "ねつこうかん"},
 { "name": "ドラパルト", "level": 50, "MHP": 163, "HP": 163, "A": 140, "B": 95, "C": 120, "D": 95, "S": 0, "img1": "../ポケモンクエスト画像/ドラパルト.png", "img2": "../ポケモンクエスト画像/ドラパルト.png","bodytype1": "dragon", "bodytype2": "ghost", "skill1": 26, "skill2": 11, "skill3": 27, "skill4": 28, "F": "クリアボディ"},
 { "name": "カイリュー", "level": 50, "MHP": 166, "HP": 166, "A": 154, "B": 115, "C": 120, "D": 120, "S": 0, "img1": "../ポケモンクエスト画像/カイリュー.png", "img2": "../ポケモンクエスト画像/カイリュー.png","bodytype1": "dragon", "bodytype2": "sky", "skill1": 26, "skill2": 11, "skill3": 27, "skill4": 28, "F": "マルチスケイル"},
]
let setbutton1;
let setbutton2;
let P1;
let P2;
let PK1;
let PK2;
let PK3;
let PK4;
let PK5;
let PK6;
let PK7;
let PK8;
let PK9;
let PK10;
let firstPK1;
let secondPK1;
let thirdPK1;
let firstPK2;
let secondPK2;
let thirdPK2;
let player = false;
let PM11 = false;
let PM12 = false;
let PM13 = false;
let PM21 = false;
let PM22 = false;
let PM23 = false;

window.onload = function() {
 start();
}

function start() {
 setbutton1 = document.getElementById("set1");
 setbutton2 = document.getElementById("set2");
 P1 = document.getElementById("P1");
 P2 = document.getElementById("P2");
 PK1 = document.getElementById("dohi");
 PK2 = document.getElementById("rithe");
 PK3 = document.getElementById("ulu");
 PK4 = document.getElementById("ban");
 PK5 = document.getElementById("buri");
 PK6 = document.getElementById("kite");
 PK7 = document.getElementById("sou");
 PK8 = document.getElementById("segu");
 firstPK1 = document.getElementById("PK11");
 secondPK1 = document.getElementById("PK12");
 thirdPK1 = document.getElementById("PK13");
 firstPK2 = document.getElementById("PK21");
 secondPK2 = document.getElementById("PK22");
 thirdPK2 = document.getElementById("PK23");
 setbutton1.style.visibility = "hidden";
 setbutton2.style.visibility = "hidden";
 P1.innerHTML = Pnameon1;
 P2.innerHTML = Pnameon2;
 firstPK1.style.width = 150;
 secondPK1.style.width = 150;
 thirdPK1.style.width = 150;
 firstPK2.style.width = 150;
 secondPK2.style.width = 150;
 thirdPK2.style.width = 150;
 setbutton1.onclick = function() {
  player = true;
  setbutton1.style.visibility = "hidden";
  firstPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
  secondPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
  thirdPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
  setTimeout(hidden,35);
 };
 setbutton2.onclick = function() {
  setbutton2.style.visibility = "hidden";
  alert("Let's go!");
  testfor();
 };
 PK1.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[0].img2;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[0].S = Sdohi[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[0]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[0].img2;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[0].S = Sdohi[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[0]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[0].img2;
     chaos = Math.floor(Math.random(chaos) * 10);
     data[0].S = Sdohi[chaos];
     localStorage.setItem("PK1",JSON.stringify(data[0]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[0].img2;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[0].S = Sdohi[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[0]))
      PM23 = true;
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[0].img2;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[0].S = Sdohi[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[0]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[0].img2;
     chaos = Math.floor(Math.random(chaos) * 10);
     data[0].S = Sdohi[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[0]))
     PM21 = true;
    };
   };
  };
 };
 PK2.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[1].img1;
      chaos = Math.floor(Math.random() * 10);
      data[1].S = Srithe[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[1]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[1].img1;
      chaos = Math.floor(Math.random() * 10);
      data[1].S = Srithe[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[1]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[1].img1;
     chaos = Math.floor(Math.random() * 10);
     data[1].S = Srithe[chaos];
     localStorage.setItem("PK1",JSON.stringify(data[1]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[1].img1;
      chaos = Math.floor(Math.random() * 10);
      data[1].S = Srithe[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[1]))
      PM23 = true;
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[1].img1;
      chaos = Math.floor(Math.random() * 10);
      data[1].S = Srithe[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[1]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[1].img1;
     chaos = Math.floor(Math.random() * 10);
     data[1].S = Srithe[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[1]))
     PM21 = true;
    };
   };
  };
 };
 PK3.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[2].img2;
      chaos = Math.floor(Math.random() * 10);
      data[2].S = Sulu[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[2]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[2].img2;
      chaos = Math.floor(Math.random() * 10);
      data[2].S = Sulu[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[2]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[2].img2;
     chaos = Math.floor(Math.random() * 10);
     data[2].S = Sulu[chaos];
     localStorage.setItem("PK1",JSON.stringify(data[2]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[2].img2;
      chaos = Math.floor(Math.random() * 10);
      data[2].S = Sulu[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[2]))
      PM23 = true;
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[2].img2;
      chaos = Math.floor(Math.random() * 10);
      data[2].S = Sulu[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[2]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[2].img2;
     chaos = Math.floor(Math.random() * 10);
     data[2].S = Sulu[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[2]))
     PM21 = true;
    };
   };
  };
 };
 PK4.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[3].img2;
      chaos = Math.floor(Math.random() * 10);
      data[3].S = Sban[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[3]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[3].img2;
      chaos = Math.floor(Math.random() * 10);
      data[3].S = Sban[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[3]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[3].img2;
     chaos = Math.floor(Math.random() * 10);
     data[3].S = Sban[chaos];
     localStorage.setItem("PK1",JSON.stringify(data[3]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[3].img2;
      chaos = Math.floor(Math.random() * 10);
      data[3].S = Sban[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[3]))
      PM23 = true;
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[3].img2;
      chaos = Math.floor(Math.random() * 10);
      data[3].S = Sban[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[3]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[3].img2;
     chaos = Math.floor(Math.random() * 10);
     data[3].S = Sban[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[3]))
     PM21 = true;
    };
   };
  };
 };
 PK5.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[4].img2;
      chaos = Math.floor(Math.random() * 10);
      data[4].S = Sburi[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[4]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[4].img2;
      chaos = Math.floor(Math.random() * 10);
      data[4].S = Sburi[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[4]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[4].img2;
      chaos = Math.floor(Math.random() * 10);
      data[4].S = Sburi[chaos];
      localStorage.setItem("PK1",JSON.stringify(data[4]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[4].img2;
      PM23 = true;
      chaos = Math.floor(Math.random() * 10);
      data[4].S = Sburi[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[4]))
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[4].img2;
      chaos = Math.floor(Math.random() * 10);
      data[4].S = Sburi[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[4]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[4].img2;
     chaos = Math.floor(Math.random() * 10);
     data[4].S = Sburi[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[4]))
     PM21 = true;
    };
   };
  };
 };
 PK6.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[5].img1;
      chaos = Math.floor(Math.random() * 10);
      data[5].S = Skite[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[5]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[5].img1;
      chaos = Math.floor(Math.random() * 10);
      data[5].S = Skite[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[5]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[5].img1;
     chaos = Math.floor(Math.random() * 10);
     data[5].S = Skite[chaos];
     localStorage.setItem("PK1",JSON.stringify(data[5]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[5].img1;
      chaos = Math.floor(Math.random() * 10);
      data[5].S = Skite[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[5]))
      PM23 = true;
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[5].img1;
      chaos = Math.floor(Math.random() * 10);
      data[5].S = Skite[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[5]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[5].img1;
     chaos = Math.floor(Math.random() * 10);
     data[5].S = Skite[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[5]))
     PM21 = true;
    };
   };
  };
 };
 PK7.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[6].img2;
      chaos = Math.floor(Math.random() * 10);
      data[6].S = Ssou[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[6]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[6].img2;
      chaos = Math.floor(Math.random() * 10);
      data[6].S = Ssou[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[6]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[6].img2;
     chaos = Math.floor(Math.random() * 10);
     data[6].S = Ssou[chaos];
     localStorage.setItem("PK1",JSON.stringify(data[6]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[6].img2;
      chaos = Math.floor(Math.random() * 10);
      data[6].S = Ssou[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[6]))
      PM23 = true;
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[6].img2;
      chaos = Math.floor(Math.random() * 10);
      data[6].S = Ssou[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[6]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[6].img2;
     chaos = Math.floor(Math.random() * 10);
     data[6].S = Ssou[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[6]))
     PM21 = true;
    };
   };
  };
 };
 PK8.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[7].img2;
      chaos = Math.floor(Math.random() * 10);
      data[7].S = Ssegu[chaos];
      localStorage.setItem("PK3",JSON.stringify(data[7]))
      PM13 = true;
      setbutton1.style.visibility = "visible";
     } else {
      secondPK1.src = data[7].img2;
      chaos = Math.floor(Math.random() * 10);
      data[7].S = Ssegu[chaos];
      localStorage.setItem("PK2",JSON.stringify(data[7]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[7].img2;
     chaos = Math.floor(Math.random() * 10);
     data[7].S = Ssegu[chaos];
     localStorage.setItem("PK1",JSON.stringify(data[7]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[7].img2;
      chaos = Math.floor(Math.random() * 10);
      data[7].S = Ssegu[chaos];
      localStorage.setItem("PK6",JSON.stringify(data[7]))
      PM23 = true;
      setbutton2.style.visibility = "visible";
     } else {
      secondPK2.src = data[7].img2;
      chaos = Math.floor(Math.random() * 10);
      data[7].S = Ssegu[chaos];
      localStorage.setItem("PK5",JSON.stringify(data[7]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[7].img2;
     chaos = Math.floor(Math.random() * 10);
     data[7].S = Ssegu[chaos];
     localStorage.setItem("PK4",JSON.stringify(data[7]))
     PM21 = true;
    };
   };
  };
 };
 firstPK1.onclick = function() {
  if (player === false) {
   if (PM12 === false) {
    firstPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM11 = false;
   };
  };
 };
 secondPK1.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    secondPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM12 = false;
   };
  };
 };
 thirdPK1.onclick = function() {
  if (player === false) {
   thirdPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM13 = false;
   setbutton1.style.visibility = "hidden";
  };
 };
 firstPK2.onclick = function() {
  if (player === true) {
   if (PM22 === false) {
    firstPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM21 = false;
   };
  };
 };
 secondPK2.onclick = function() {
  if (player === true) {
   if (PM23 === false) {
    secondPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM22 = false;
   };
  };
 };
 thirdPK2.onclick = function() {
  if (player === true) {
   thirdPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM23 = false;
   setbutton2.style.visibility = "hidden";
  };
 };
}
function hidden() {
 alert("次は" + Pnameon2 + "さんがポケモンを選びます。" + Pnameon2 + "さんに端末を渡してください。");
 while (true) {
  let OK = confirm(Pnameon2 + "さんに端末を渡した！");
  if (OK === true) {
   alert("それでは" + Pnameon2 + "さん、ポケモンを選んでください");
  } else {
   alert("次は" + Pnameon2 + "さんがポケモンを選びます。" + Pnameon2 + "さんに端末を渡してください。");
   continue;
  };
  break;
 };
}
function testfor() {
 window.location.href = "ポケモンクエスト(PvP).html"
}