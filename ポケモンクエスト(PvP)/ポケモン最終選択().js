const body = document.getElementById("body");
const Pnameon1 = localStorage.getItem("names1");
const Pnameon2 = localStorage.getItem("names2");
const PM = [0,1,2,3,4,5,6,7,8,9,10,11];
PM[0] = JSON.parse(localStorage.getItem("PK11"));
PM[1] = JSON.parse(localStorage.getItem("PK12"));
PM[2] = JSON.parse(localStorage.getItem("PK13"));
PM[3] = JSON.parse(localStorage.getItem("PK14"));
PM[4] = JSON.parse(localStorage.getItem("PK15"));
PM[5] = JSON.parse(localStorage.getItem("PK16"));
PM[6] = JSON.parse(localStorage.getItem("PK21"));
PM[7] = JSON.parse(localStorage.getItem("PK22"));
PM[8] = JSON.parse(localStorage.getItem("PK23"));
PM[9] = JSON.parse(localStorage.getItem("PK24"));
PM[10] = JSON.parse(localStorage.getItem("PK25"));
PM[11] = JSON.parse(localStorage.getItem("PK26"));
alert("続いてバトルに出すポケモンを選択してください");

let PK11;
let PK12;
let PK13;
let PK14;
let PK15;
let PK16;
let PK21;
let PK22;
let PK23;
let PK24;
let PK25;
let PK26;
let PK1;
let PK2;
let PK3;
let PK4;
let PK5;
let PK6;
let setbutton;
let P11 = null;
let P12 = null;
let P13 = null;
let P21 = null;
let P22 = null;
let P23 = null;
let change = false;

window.onload = function() {
 start();
}
function start() {
 PK11 = document.getElementById("PK11");
 PK12 = document.getElementById("PK12");
 PK13 = document.getElementById("PK13");
 PK14 = document.getElementById("PK14");
 PK15 = document.getElementById("PK15");
 PK16 = document.getElementById("PK16");
 PK21 = document.getElementById("PK21");
 PK22 = document.getElementById("PK22");
 PK23 = document.getElementById("PK23");
 PK24 = document.getElementById("PK24");
 PK25 = document.getElementById("PK25");
 PK26 = document.getElementById("PK26");
 PK1 = document.getElementById("PK1");
 PK2 = document.getElementById("PK2");
 PK3 = document.getElementById("PK3");
 PK4 = document.getElementById("PK4");
 PK5 = document.getElementById("PK5");
 PK6 = document.getElementById("PK6");
 setbutton = document.getElementById("setbutton");
 PK11.src = PM[0].img;
 PK12.src = PM[1].img;
 PK13.src = PM[2].img;
 PK14.src = PM[3].img;
 PK15.src = PM[4].img;
 PK16.src = PM[5].img;
 PK21.src = PM[6].img;
 PK22.src = PM[7].img;
 PK23.src = PM[8].img;
 PK24.src = PM[9].img;
 PK25.src = PM[10].img;
 PK26.src = PM[11].img;
 setbutton.onclick = function() {
  if (change === true) {
   alert("Let's go!");
   setbutton.style.visibility = "hidden";
   window.location.href = "ポケモンクエスト(PvP).html";
  } else {
   change = true;
   setbutton.style.visibility = "hidden";
   PK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   PK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   PK3.src = "../ポケモンクエスト画像/モンスターボール.png";
   setTimeout(hidden,200);
  };
 };
 PK11.onclick = function() {
  if (change === false) {
   if (P11 !== null) {
    if (PM[0].select !== true) {
     if (P12 !== null) {
      if (P13 === null) {
       PK3.src = PM[0].img;
       localStorage.setItem("PK3",JSON.stringify(PM[0]));
       PM[0].select = true;
       setbutton.style.visibility = "visible";
       P13 = 0;
      };
     } else {
      PK2.src = PM[0].img;
      localStorage.setItem("PK2",JSON.stringify(PM[0]));
      PM[0].select = true;
      P12 = 0;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK1.src = PM[0].img;
    localStorage.setItem("PK1",JSON.stringify(PM[0]));
    PM[0].select = true;
    P11 = 0;
   };
  };
 };
 PK12.onclick = function() {
  if (change === false) {
   if (P11 !== null) {
    if (PM[1].select !== true) {
     if (P12 !== null) {
      if (P13 === null) {
       PK3.src = PM[1].img;
       localStorage.setItem("PK3",JSON.stringify(PM[1]));
       PM[1].select = true;
       setbutton.style.visibility = "visible";
       P13 = 1;
      };
     } else {
      PK2.src = PM[1].img;
      localStorage.setItem("PK2",JSON.stringify(PM[1]));
      PM[1].select = true;
      P12 = 1;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK1.src = PM[1].img;
    localStorage.setItem("PK1",JSON.stringify(PM[1]));
    PM[1].select = true;
    P11 = 1;
   };
  };
 };
 PK13.onclick = function() {
  if (change === false) {
   if (P11 !== null) {
    if (PM[2].select !== true) {
     if (P12 !== null) {
      if (P13 === null) {
       PK3.src = PM[2].img;
       localStorage.setItem("PK3",JSON.stringify(PM[2]));
       PM[2].select = true;
       setbutton.style.visibility = "visible";
       P13 = 2;
      };
     } else {
      PK2.src = PM[2].img;
      localStorage.setItem("PK2",JSON.stringify(PM[2]));
      PM[2].select = true;
      P12 = 2;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK1.src = PM[2].img;
    localStorage.setItem("PK1",JSON.stringify(PM[2]));
    PM[2].select = true;
    P11 = 2;
   };
  };
 };
 PK14.onclick = function() {
  if (change === false) {
   if (P11 !== null) {
    if (PM[3].select !== true) {
     if (P12 !== null) {
      if (P13 === null) {
       PK3.src = PM[3].img;
       localStorage.setItem("PK3",JSON.stringify(PM[3]));
       PM[3].select = true;
       setbutton.style.visibility = "visible";
       P13 = 3;
      };
     } else {
      PK2.src = PM[3].img;
      localStorage.setItem("PK2",JSON.stringify(PM[3]));
      PM[3].select = true;
      P12 = 3;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK1.src = PM[3].img;
    localStorage.setItem("PK1",JSON.stringify(PM[3]));
    PM[3].select = true;
    P11 = 3;
   };
  };
 };
 PK15.onclick = function() {
  if (change === false) {
   if (P11 !== null) {
    if (PM[4].select !== true) {
     if (P12 !== null) {
      if (P13 === null) {
       PK3.src = PM[4].img;
       localStorage.setItem("PK3",JSON.stringify(PM[4]));
       PM[4].select = true;
       setbutton.style.visibility = "visible";
       P13 = 4;
      };
     } else {
      PK2.src = PM[4].img;
      localStorage.setItem("PK2",JSON.stringify(PM[4]));
      PM[4].select = true;
      P12 = 4;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK1.src = PM[4].img;
    localStorage.setItem("PK1",JSON.stringify(PM[4]));
    PM[4].select = true;
    P11 = 4;
   };
  };
 };
 PK16.onclick = function() {
  if (change === false) {
   if (P11 !== null) {
    if (PM[5].select !== true) {
     if (P12 !== null) {
      if (P13 === null) {
       PK3.src = PM[5].img;
       localStorage.setItem("PK3",JSON.stringify(PM[5]));
       PM[5].select = true;
       setbutton.style.visibility = "visible";
       P13 = 5;
      };
     } else {
      PK2.src = PM[5].img;
      localStorage.setItem("PK2",JSON.stringify(PM[5]));
      PM[5].select = true;
      P12 = 5;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK1.src = PM[5].img;
    localStorage.setItem("PK1",JSON.stringify(PM[5]));
    PM[5].select = true;
    P11 = 5;
   };
  };
 };
 PK21.onclick = function() {
  if (change === true) {
   if (P21 !== null) {
    if (PM[6].select !== true) {
     if (P22 !== null) {
      if (P23 === null) {
       PK6.src = PM[6].img;
       localStorage.setItem("PK6",JSON.stringify(PM[6]));
       PM[6].select = true;
       setbutton.style.visibility = "visible";
       P23 = 6;
      };
     } else {
      PK5.src = PM[6].img;
      localStorage.setItem("PK5",JSON.stringify(PM[6]));
      PM[6].select = true;
      P22 = 6;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK4.src = PM[6].img;
    localStorage.setItem("PK4",JSON.stringify(PM[6]));
    PM[6].select = true;
    P21 = 6;
   };
  };
 };
 PK22.onclick = function() {
  if (change === true) {
   if (P21 !== null) {
    if (PM[7].select !== true) {
     if (P22 !== null) {
      if (P23 === null) {
       PK6.src = PM[7].img;
       localStorage.setItem("PK6",JSON.stringify(PM[7]));
       PM[7].select = true;
       setbutton.style.visibility = "visible";
       P23 = 7;
      };
     } else {
      PK5.src = PM[7].img;
      localStorage.setItem("PK5",JSON.stringify(PM[7]));
      PM[7].select = true;
      P22 = 7;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK4.src = PM[7].img;
    localStorage.setItem("PK4",JSON.stringify(PM[7]));
    PM[7].select = true;
    P21 = 7;
   };
  };
 };
 PK23.onclick = function() {
  if (change === true) {
   if (P21 !== null) {
    if (PM[8].select !== true) {
     if (P22 !== null) {
      if (P23 === null) {
       PK6.src = PM[8].img;
       localStorage.setItem("PK6",JSON.stringify(PM[8]));
       PM[8].select = true;
       setbutton.style.visibility = "visible";
       P23 = 8;
      };
     } else {
      PK5.src = PM[8].img;
      localStorage.setItem("PK5",JSON.stringify(PM[8]));
      PM[8].select = true;
      P22 = 8;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK4.src = PM[8].img;
    localStorage.setItem("PK4",JSON.stringify(PM[8]));
    PM[8].select = true;
    P21 = 8;
   };
  };
 };
 PK24.onclick = function() {
  if (change === true) {
   if (P21 !== null) {
    if (PM[9].select !== true) {
     if (P22 !== null) {
      if (P23 === null) {
       PK6.src = PM[9].img;
       localStorage.setItem("PK6",JSON.stringify(PM[9]));
       PM[9].select = true;
       setbutton.style.visibility = "visible";
       P23 = 9;
      };
     } else {
      PK5.src = PM[9].img;
      localStorage.setItem("PK5",JSON.stringify(PM[9]));
      PM[9].select = true;
      P22 = 9;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK4.src = PM[9].img;
    localStorage.setItem("PK4",JSON.stringify(PM[9]));
    PM[9].select = true;
    P21 = 9;
   };
  };
 };
 PK25.onclick = function() {
  if (change === true) {
   if (P21 !== null) {
    if (PM[10].select !== true) {
     if (P22 !== null) {
      if (P23 === null) {
       PK6.src = PM[10].img;
       localStorage.setItem("PK6",JSON.stringify(PM[10]));
       PM[10].select = true;
       setbutton.style.visibility = "visible";
       P23 = 10;
      };
     } else {
      PK5.src = PM[10].img;
      localStorage.setItem("PK5",JSON.stringify(PM[10]));
      PM[10].select = true;
      P22 = 10;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK4.src = PM[10].img;
    localStorage.setItem("PK4",JSON.stringify(PM[10]));
    PM[10].select = true;
    P21 = 10;
   };
  };
 };
 PK26.onclick = function() {
  if (change === true) {
   if (P21 !== null) {
    if (PM[11].select !== true) {
     if (P22 !== null) {
      if (P23 === null) {
       PK6.src = PM[11].img;
       localStorage.setItem("PK6",JSON.stringify(PM[11]));
       PM[11].select = true;
       setbutton.style.visibility = "visible";
       P23 = 11;
      };
     } else {
      PK5.src = PM[11].img;
      localStorage.setItem("PK5",JSON.stringify(PM[11]));
      PM[11].select = true;
      P22 = 11;
     };
    } else {
     alert("そのポケモンは選択済みです");
    };
   } else {
    PK4.src = PM[11].img;
    localStorage.setItem("PK4",JSON.stringify(PM[11]));
    PM[11].select = true;
    P21 = 11;
   };
  };
 };
 PK1.onclick = function() {
  PK1.src = "../ポケモンクエスト画像/モンスターボール.png";
  PM[P11].select = false;
  if (P12 !== null) {
   P11 = P12;
   PK1.src = PM[P11].img;
   PK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   localStorage.setItem("PK1",JSON.stringify(PM[P11]));
   if (P13 !== null) {
    P12 = P13;
    PK2.src = PM[P12].img;
    PK3.src = "../ポケモンクエスト画像/モンスターボール.png";
    localStorage.setItem("PK2",JSON.stringify(PM[P12]));
    setbutton.style.visibility = "hidden";
    P13 = null;
   } else {
    P12 = null;
   };
  } else {
   P11 = null;
  };
 };
 PK2.onclick = function() {
  PK2.src = "../ポケモンクエスト画像/モンスターボール.png";
  PM[P12].select = false;
  if (P13 !== null) {
   P12 = P13;
   PK2.src = PM[P12].img;
   PK3.src = "../ポケモンクエスト画像/モンスターボール.png";
   localStorage.setItem("PK2",JSON.stringify(PM[P12]));
   setbutton.style.visibility = "hidden";
   P13 = null;
  } else {
   P12 = null;
  };
 };
 PK3.onclick = function() {
  PK3.src = "../ポケモンクエスト画像/モンスターボール.png";
  PM[P13].select = false;
  setbutton.style.visibility = "hidden";
  P13 = null;
 };
 PK4.onclick = function() {
  PK4.src = "../ポケモンクエスト画像/モンスターボール.png";
  PM[P21].select = false;
  if (P22 !== null) {
   P21 = P22;
   PK4.src = PM[P21].img;
   PK5.src = "../ポケモンクエスト画像/モンスターボール.png";
   localStorage.setItem("PK4",JSON.stringify(PM[P21]));
   if (P23 !== null) {
    P22 = P23;
    PK5.src = PM[P22].img;
    PK6.src = "../ポケモンクエスト画像/モンスターボール.png";
    localStorage.setItem("PK5",JSON.stringify(PM[P22]));
    setbutton.style.visibility = "hidden";
    P23 = null;
   } else {
    P22 = null;
   };
  } else {
   P21 = null;
  };
 };
 PK5.onclick = function() {
  PK5.src = "../ポケモンクエスト画像/モンスターボール.png";
  PM[P22].select = false;
  if (P23 !== null) {
   P22 = P23;
   PK5.src = PM[P22].img;
   PK6.src = "../ポケモンクエスト画像/モンスターボール.png";
   localStorage.setItem("PK5",JSON.stringify(PM[P22]));
   setbutton.style.visibility = "hidden";
   P23 = null;
  } else {
   P22 = null;
  };
 };
 PK6.onclick = function() {
  PK6.src = "../ポケモンクエスト画像/モンスターボール.png";
  PM[P23].select = false;
  setbutton.style.visibility = "hidden";
  P23 = null;
 };
 body.style.visibility = "visible";
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