let setbutton;
let VS;
let P1;
let P2;
let PK;
let PKname;
let left;
let right;
let highleft;
let highright;
let subPKL;
let subPKR;
let SL1;
let SL2;
let SL3;
let SL4;
let skill1;
let skilldp1;
let skill2;
let skilldp2;
let skill3;
let skilldp3;
let skill4;
let skilldp4;
let icon1;
let icon2;
let icon3;
let icon4;
let type;
let damage;
let rate;
let dp;
let subdp;
let HP;
let Lv;
let F;
let Fdp;
let type1;
let type2;
let attack;
let block;
let contact;
let defense;
let speed;
let firstPK1;
let secondPK1;
let thirdPK1;
let firstPK2;
let secondPK2;
let thirdPK2;
let Imrotom;
let third;
let sixthird;
let player = false;
let PM11 = false;
let PM12 = false;
let PM13 = false;
let PM21 = false;
let PM22 = false;
let PM23 = false;
let semi = false;
let MAXer1 = false;
let MAXer2 = false;
let six = false;
let ID = 0;
let semiID = 0;

window.onload = function() {
 start();
}

function start() {
 setbutton = document.getElementById("set");
 VS = document.getElementById("VS");
 P1 = document.getElementById("P1");
 P2 = document.getElementById("P2");
 PK = document.getElementById("PK");
 PKname = document.getElementById("PKname");
 F = document.getElementById("F");
 Fdp = document.getElementById("Fdp");
 SL1 = document.getElementById("SL1");
 SL2 = document.getElementById("SL2");
 SL3 = document.getElementById("SL3");
 SL4 = document.getElementById("SL4");
 skilldp1 = document.getElementById("skilldp1");
 skilldp2 = document.getElementById("skilldp2");
 skilldp3 = document.getElementById("skilldp3");
 skilldp4 = document.getElementById("skilldp4");
 icon1 = document.getElementById("icon1");
 icon2 = document.getElementById("icon2");
 icon3 = document.getElementById("icon3");
 icon4 = document.getElementById("icon4");
 type = document.getElementById("type");
 damage = document.getElementById("damage");
 rate = document.getElementById("rate");
 dp = document.getElementById("dp");
 subdp = document.getElementById("subdp");
 HP = document.getElementById("HP");
 Lv = document.getElementById("Lv");
 type1 = document.getElementById("type1");
 type2 = document.getElementById("type2");
 attack = document.getElementById("attack");
 block = document.getElementById("block");
 contact = document.getElementById("contact");
 defense = document.getElementById("defense");
 speed = document.getElementById("speed");
 firstPK1 = document.getElementById("PK11");
 secondPK1 = document.getElementById("PK12");
 thirdPK1 = document.getElementById("PK13");
 firstPK2 = document.getElementById("PK21");
 secondPK2 = document.getElementById("PK22");
 thirdPK2 = document.getElementById("PK23");
 left = document.getElementById("left");
 highright = document.getElementById("highright");
 highleft = document.getElementById("highleft");
 right = document.getElementById("right");
 subPKL = document.getElementById("subPKL");
 subPKR = document.getElementById("subPKR");
 Imrotom = document.getElementById("Imrotom");
 third = document.getElementById("third");
 sixthird = document.getElementById("sixinthird");
 setbutton.style.visibility = "hidden";
 P1.innerHTML = Pnameon1;
 P2.innerHTML = Pnameon2;
 firstPK1.style.width = 150;
 secondPK1.style.width = 150;
 thirdPK1.style.width = 150;
 firstPK2.style.width = 150;
 secondPK2.style.width = 150;
 thirdPK2.style.width = 150;
 type1.style.backgroundColor = data[0].color1;
 type2.style.backgroundColor = data[0].color2;
 subPKL.src = data[67].img;
 subPKR.src = data[ID + 1].img;
 Imrotom.style.visibility = "hidden";
 change();
 dp.style.visibility = "hidden";
 third.onclick = function() {
  body1.style.visibility = "hidden";
  setTimeout(rulefinish,200);
 };
 sixthird.onclick = function() {
  six = true;
  P2.style.left = "320";
  P2.style.visibility = "hidden";
  VS.style.left = "1050";
  firstPK2.style.right = "640";
  secondPK2.style.right = "480";
  thirdPK2.style.right = "320";
  body1.style.visibility = "hidden";
  setTimeout(rulefinish,200);
 };
 skill1 = document.getElementById("skill1").addEventListener( "click",function() {
  SL2.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL1.style.backgroundColor = "#FFE44E";
  if (semi === true) {
   type.innerHTML = skill[semidata[semiID].skill1].type;
   damage.innerHTML = skill[semidata[semiID].skill1].power;
   rate.innerHTML = skill[semidata[semiID].skill1].hitrate;
   subdp.innerHTML = skill[semidata[semiID].skill1].sub;
  } else {
   type.innerHTML = skill[data[ID].skill1].type;
   damage.innerHTML = skill[data[ID].skill1].power;
   rate.innerHTML = skill[data[ID].skill1].hitrate;
   subdp.innerHTML = skill[data[ID].skill1].sub;
  };
  dp.style.visibility = "visible";
 });
 skill2 = document.getElementById("skill2").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFE44E";
  if (semi === true) {
   type.innerHTML = skill[semidata[semiID].skill2].type;
   damage.innerHTML = skill[semidata[semiID].skill2].power;
   rate.innerHTML = skill[semidata[semiID].skill2].hitrate;
   subdp.innerHTML = skill[semidata[semiID].skill2].sub;
  } else {
   type.innerHTML = skill[data[ID].skill2].type;
   damage.innerHTML = skill[data[ID].skill2].power;
   rate.innerHTML = skill[data[ID].skill2].hitrate;
   subdp.innerHTML = skill[data[ID].skill2].sub;
  };
  dp.style.visibility = "visible";
 });
 skill3 = document.getElementById("skill3").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFE44E";
  if (semi === true) {
   type.innerHTML = skill[semidata[semiID].skill3].type;
   damage.innerHTML = skill[semidata[semiID].skill3].power;
   rate.innerHTML = skill[semidata[semiID].skill3].hitrate;
   subdp.innerHTML = skill[semidata[semiID].skill3].sub;
  } else {
   type.innerHTML = skill[data[ID].skill3].type;
   damage.innerHTML = skill[data[ID].skill3].power;
   rate.innerHTML = skill[data[ID].skill3].hitrate;
   subdp.innerHTML = skill[data[ID].skill3].sub;
  };
  dp.style.visibility = "visible";
 });
 skill4 = document.getElementById("skill4").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFE44E";
  if (semi === true) {
   type.innerHTML = skill[semidata[semiID].skill4].type;
   damage.innerHTML = skill[semidata[semiID].skill4].power;
   rate.innerHTML = skill[semidata[semiID].skill4].hitrate;
   subdp.innerHTML = skill[semidata[semiID].skill4].sub;
  } else {
   type.innerHTML = skill[data[ID].skill4].type;
   damage.innerHTML = skill[data[ID].skill4].power;
   rate.innerHTML = skill[data[ID].skill4].hitrate;
   subdp.innerHTML = skill[data[ID].skill4].sub;
  };
  dp.style.visibility = "visible";
 });
 setbutton.onclick = function() {
  if (player === true) {
   setbutton.style.visibility = "hidden";
   if (six === false) {
    alert("Let's go!");
   };
   testfor();
  } else {
   player = true;
   semi = false;
   setbutton.style.visibility = "hidden";
   firstPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   secondPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   thirdPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   firstPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   secondPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   thirdPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   ID = 0;
   semiID = 0;
   highleft.style.visibility = "visible";
   highright.style.visibility = "visible";
   subPKR.src = data[ID + 1].img;
   subPKL.src = data[67].img;
   Imrotom.style.visibility = "hidden";
   if (six === true) {
    PM11 = false;
    PM12 = false;
    PM13 = false;
    PM21 = false;
    PM22 = false;
    PM23 = false;
    VS.style.left = "100";
    firstPK1.style.left = "320";
    secondPK1.style.left = "480";
    thirdPK1.style.left = "640";
    firstPK2.style.right = "330";
    secondPK2.style.right = "170";
    thirdPK2.style.right = "10";
    P1.style.visibility = "hidden";
    P2.style.visibility = "visible";
   };
   change();
   setTimeout(hidden,200);
  };
 };
 window.addEventListener("keydown",function(e) {
  if (e.code === "ArrowDown") {
   semi = false;
   if (67 < ID + 1) {
    subPKR.src = data[0].img;
   } else {
    subPKR.src = data[ID + 1].img;
   };
   if (ID - 1 < 0) {
    subPKL.src = data[67].img;
   } else {
    subPKL.src = data[ID - 1].img;
   };
   highleft.style.visibility = "visible";
   highright.style.visibility = "visible";
   change();
  };
  if (e.code === "Space") {
   VS.ondrag = function() {
    VS.style.color = "#33bb88";
    semi = true;
    if (10 < semiID + 1) {
     subPKR.src = semidata[0].img;
    } else {
     subPKR.src = semidata[semiID + 1].img;
    };
    if (semiID - 1 < 0) {
     subPKL.src = semidata[10].img;
    } else {
     subPKL.src = semidata[semiID - 1].img;
    };
    highleft.style.visibility = "hidden";
    highright.style.visibility = "hidden";
    semichange();
   };
  };
  if (e.code === "KeyS") {
   if (data[ID].skill4 === 99 && ID === 59) {
    data[ID].skill4 = 24;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   };
   if (data[ID].skill3 === 116 && ID === 62) {
    data[ID].skill3 = 149;
    skilldp3.innerHTML = skill[data[ID].skill3].name;
    icon3.src = skill[data[ID].skill3].icon;
    type.innerHTML = skill[data[ID].skill3].type;
    damage.innerHTML = skill[data[ID].skill3].power;
    rate.innerHTML = skill[data[ID].skill3].hitrate;
    subdp.innerHTML = skill[data[ID].skill3].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFE44E";
    SL4.style.backgroundColor = "#FFFFFF";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyD") {
   if (data[ID].skill4 === 24 && ID === 59) {
    data[ID].skill4 = 99;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyH") {
   if (data[ID].skill3 === 149 && ID === 62) {
    data[ID].skill3 = 116;
    skilldp3.innerHTML = skill[data[ID].skill3].name;
    icon3.src = skill[data[ID].skill3].icon;
    type.innerHTML = skill[data[ID].skill3].type;
    damage.innerHTML = skill[data[ID].skill3].power;
    rate.innerHTML = skill[data[ID].skill3].hitrate;
    subdp.innerHTML = skill[data[ID].skill3].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFE44E";
    SL4.style.backgroundColor = "#FFFFFF";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyW") {
   if (data[ID].skill4 === 46 && ID === 65) {
    data[ID].skill4 = 155;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyM" && (PM11 === true || PM21 === true)) {
   if (data[ID].skill4 === 155 && ID === 65) {
    data[ID].skill4 = 46;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   } else {
    if ((player === false && MAXer1 === true) || (player === true && MAXer2 === true)) {
     alert("ダイマックスアメがありません。");
    } else {
     let MAX = confirm("選択したポケモンにダイマックスアメをあげますか？");
     let subdata;
     if (MAX === true) {
      if (player === false) {
       if (PM13 === true) {
        subdata = JSON.parse(localStorage.getItem("PK3"));
        if (subdata.MAX !== null) {
         if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
          alert("そのポケモンに使っても効果はないよ…。");
         } else {
          MAXer1 = true;
          subdata.MAX = null;
          subdata.MAXimg1 = subdata.img1;
          subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
          subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
          subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
          subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
          localStorage.setItem("PK3",JSON.stringify(subdata));
          alert(subdata.name + "はダイマックスができるようになった！");
         };
        } else {
         alert("そのポケモンはキョダイマックスするぞ！");
        };
       } else {
        if (PM12 === true) {
         subdata = JSON.parse(localStorage.getItem("PK2"));
         if (subdata.MAX !== null) {
          if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
           alert("そのポケモンに使っても効果はないよ…。");
          } else {
           MAXer1 = true;
           subdata.MAX = null;
           subdata.MAXimg1 = subdata.img1;
           subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
           subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
           subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
           subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
           localStorage.setItem("PK2",JSON.stringify(subdata));
           alert(subdata.name + "はダイマックスができるようになった！");
          };
         } else {
          alert("そのポケモンはキョダイマックスするぞ！");
         };
        } else {
         if (PM11 === true) {
          subdata = JSON.parse(localStorage.getItem("PK1"));
          if (subdata.MAX !== null) {
           if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
            alert("そのポケモンに使っても効果はないよ…。");
           } else {
            MAXer1 = true;
            subdata.MAX = null;
            subdata.MAXimg1 = subdata.img1;
            subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
            subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
            subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
            subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
            localStorage.setItem("PK1",JSON.stringify(subdata));
            alert(subdata.name + "はダイマックスができるようになった！");
           };
          } else {
           alert("そのポケモンはキョダイマックスするぞ！");
          };
         };
        };
       };
      } else {
       if (PM23 === true) {
        subdata = JSON.parse(localStorage.getItem("PK6"));
        if (subdata.MAX !== null) {
         if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
          alert("そのポケモンに使っても効果はないよ…。");
         } else {
          MAXer2 = true;
          subdata.MAX = null;
          subdata.MAXimg2 = subdata.img2;
          subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
          subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
          subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
          subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
          localStorage.setItem("PK6",JSON.stringify(subdata));
          alert(subdata.name + "はダイマックスができるようになった！");
         };
        } else {
         alert("そのポケモンはキョダイマックスするぞ！");
        };
       } else {
        if (PM22 === true) {
         subdata = JSON.parse(localStorage.getItem("PK5"));
         if (subdata.MAX !== null) {
          if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
           alert("そのポケモンに使っても効果はないよ…。");
          } else {
           MAXer2 = true;
           subdata.MAX = null;
           subdata.MAXimg2 = subdata.img2;
           subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
           subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
           subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
           subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
           localStorage.setItem("PK5",JSON.stringify(subdata));
           alert(subdata.name + "はダイマックスができるようになった！");
          };
         } else {
          alert("そのポケモンはキョダイマックスするぞ！");
         };
        } else {
         if (PM21 === true) {
          subdata = JSON.parse(localStorage.getItem("PK4"));
          if (subdata.MAX !== null) {
           if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
            alert("そのポケモンに使っても効果はないよ…。");
           } else {
            MAXer2 = true;
            subdata.MAX = null;
            subdata.MAXimg2 = subdata.img2;
            subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
            subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
            subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
            subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
            localStorage.setItem("PK4",JSON.stringify(subdata));
            alert(subdata.name + "はダイマックスができるようになった！");
           };
          } else {
           alert("そのポケモンはキョダイマックスするぞ！");
          };
         };
        };
       };
      };
     };
    };
   };
  };
 });
 PK.onclick = function() {
  if (six === false) {
   if (semi === true) {
    if (player === false) {
     if (PM13 === false) {
      if (PM11 === true) {
       if (PM12 === true) {
        thirdPK1.src = semidata[semiID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        semidata[semiID].S = semiS[semiID][chaos];
        localStorage.setItem("PK3",JSON.stringify(semidata[semiID]))
        PM13 = true;
        setbutton.style.visibility = "visible";
       } else {
        secondPK1.src = semidata[semiID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        semidata[semiID].S = semiS[semiID][chaos];
        localStorage.setItem("PK2",JSON.stringify(semidata[semiID]))
        PM12 = true;
       };
      } else {
       firstPK1.src = semidata[semiID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       semidata[semiID].S = semiS[semiID][chaos];
       localStorage.setItem("PK1",JSON.stringify(semidata[semiID]))
       PM11 = true;
      };
     };
    } else {
     if (PM23 === false) {
      if (PM21 === true) {
       if (PM22 === true) {
        thirdPK2.src = semidata[semiID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        semidata[semiID].S = semiS[semiID][chaos];
        localStorage.setItem("PK6",JSON.stringify(semidata[semiID]))
        PM23 = true;
        setbutton.style.visibility = "visible";
       } else {
        secondPK2.src = semidata[semiID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        semidata[semiID].S = semiS[semiID][chaos];
        localStorage.setItem("PK5",JSON.stringify(semidata[semiID]))
        PM22 = true;
       };
      } else {
       firstPK2.src = semidata[semiID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       semidata[semiID].S = semiS[semiID][chaos];
       localStorage.setItem("PK4",JSON.stringify(semidata[semiID]))
       PM21 = true;
      };
     };
    };
   } else {
    if (player === false) {
     if (PM13 === false) {
      if (PM11 === true) {
       if (PM12 === true) {
        thirdPK1.src = data[ID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        data[ID].S = S[ID][chaos];
        localStorage.setItem("PK3",JSON.stringify(data[ID]))
        PM13 = true;
        setbutton.style.visibility = "visible";
       } else {
        secondPK1.src = data[ID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        data[ID].S = S[ID][chaos];
        localStorage.setItem("PK2",JSON.stringify(data[ID]))
        PM12 = true;
       };
      } else {
       firstPK1.src = data[ID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       data[ID].S = S[ID][chaos];
       localStorage.setItem("PK1",JSON.stringify(data[ID]))
       PM11 = true;
      };
     };
    } else {
     if (PM23 === false) {
      if (PM21 === true) {
       if (PM22 === true) {
        thirdPK2.src = data[ID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        data[ID].S = S[ID][chaos];
        localStorage.setItem("PK6",JSON.stringify(data[ID]))
        PM23 = true;
        setbutton.style.visibility = "visible";
       } else {
        secondPK2.src = data[ID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        data[ID].S = S[ID][chaos];
        localStorage.setItem("PK5",JSON.stringify(data[ID]))
        PM22 = true;
       };
      } else {
       firstPK2.src = data[ID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       data[ID].S = S[ID][chaos];
       localStorage.setItem("PK4",JSON.stringify(data[ID]))
       PM21 = true;
      };
     };
    }; 
   };
  } else {
   if (semi === true) {
    if (PM11 === true) {
     if (PM12 === true) {
      if (PM13 === true) {
       if (PM21 === true) {
        if (PM22 === true) {
         thirdPK2.src = semidata[semiID].img;
         chaos = Math.floor(Math.random(chaos) * 10);
         semidata[semiID].S = semiS[semiID][chaos];
         if (player === true) {
          localStorage.setItem("PK26",JSON.stringify(semidata[semiID]));
         } else {
          localStorage.setItem("PK16",JSON.stringify(semidata[semiID]));
         };
         PM23 = true;
         setbutton.style.visibility = "visible";
        } else {
         secondPK2.src = semidata[semiID].img;
         chaos = Math.floor(Math.random(chaos) * 10);
         semidata[semiID].S = semiS[semiID][chaos];
         if (player === true) {
          localStorage.setItem("PK25",JSON.stringify(semidata[semiID]));
         } else {
          localStorage.setItem("PK15",JSON.stringify(semidata[semiID]));
         };
         PM22 = true;
        };
       } else {
        firstPK2.src = semidata[semiID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        semidata[semiID].S = semiS[semiID][chaos];
        if (player === true) {
         localStorage.setItem("PK24",JSON.stringify(semidata[semiID]));
        } else {
         localStorage.setItem("PK14",JSON.stringify(semidata[semiID]))
        };
        PM21 = true;
       };
      } else {
       thirdPK1.src = semidata[semiID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       semidata[semiID].S = semiS[semiID][chaos];
       if (player === true) {
        localStorage.setItem("PK23",JSON.stringify(semidata[semiID]));
       } else {
        localStorage.setItem("PK13",JSON.stringify(semidata[semiID]));
       };
       PM13 = true;
      };
     } else {
      secondPK1.src = semidata[semiID].img;
      chaos = Math.floor(Math.random(chaos) * 10);
      semidata[semiID].S = semiS[semiID][chaos];
      if (player === true) {
       localStorage.setItem("PK22",JSON.stringify(semidata[semiID]));
      } else {
       localStorage.setItem("PK12",JSON.stringify(semidata[semiID]));
      };
      PM12 = true;
     };
    } else {
     firstPK1.src = semidata[semiID].img;
     chaos = Math.floor(Math.random(chaos) * 10);
     semidata[semiID].S = semiS[semiID][chaos];
     if (player === true) {
      localStorage.setItem("PK21",JSON.stringify(semidata[semiID]));
     } else {
      localStorage.setItem("PK11",JSON.stringify(semidata[semiID]));
     };
     PM11 = true;
    };
   } else {
    if (PM11 === true) {
     if (PM12 === true) {
      if (PM13 === true) {
       if (PM21 === true) {
        if (PM22 === true) {
         thirdPK2.src = data[ID].img;
         chaos = Math.floor(Math.random(chaos) * 10);
         data[ID].S = S[ID][chaos];
         if (player === true) {
          localStorage.setItem("PK26",JSON.stringify(data[ID]));
         } else {
          localStorage.setItem("PK16",JSON.stringify(data[ID]));
         };
         PM23 = true;
         setbutton.style.visibility = "visible";
        } else {
         secondPK2.src = data[ID].img;
         chaos = Math.floor(Math.random(chaos) * 10);
         data[ID].S = S[ID][chaos];
         if (player === true) {
          localStorage.setItem("PK25",JSON.stringify(data[ID]));
         } else {
          localStorage.setItem("PK15",JSON.stringify(data[ID]));
         };
         PM22 = true;
        };
       } else {
        firstPK2.src = data[ID].img;
        chaos = Math.floor(Math.random(chaos) * 10);
        data[ID].S = S[ID][chaos];
        if (player === true) {
         localStorage.setItem("PK24",JSON.stringify(data[ID]));
        } else {
         localStorage.setItem("PK14",JSON.stringify(data[ID]));
        };
        PM21 = true;
       };
      } else {
       thirdPK1.src = data[ID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       data[ID].S = S[ID][chaos];
       if (player === true) {
        localStorage.setItem("PK23",JSON.stringify(data[ID]));
       } else {
        localStorage.setItem("PK13",JSON.stringify(data[ID]));
       };
       PM13 = true;
      };
     } else {
      secondPK1.src = data[ID].img;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[ID].S = S[ID][chaos];
      if (player === true) {
       localStorage.setItem("PK22",JSON.stringify(data[ID]));
      } else {
       localStorage.setItem("PK12",JSON.stringify(data[ID]));
      };
      PM12 = true;
     };
    } else {
     firstPK1.src = data[ID].img;
     chaos = Math.floor(Math.random(chaos) * 10);
     data[ID].S = S[ID][chaos];
     if (player === true) {
      localStorage.setItem("PK21",JSON.stringify(data[ID]));
     } else {
      localStorage.setItem("PK11",JSON.stringify(data[ID]));
     };
     PM11 = true;
    };
   };
  };
 };
 left.onclick = function() {
  if (semi === true) {
   semiID -= 1;
   semilefter();
  } else {
   ID -= 1;
   lefter();
  };
 };
 right.onclick = function() {
  if (semi === true) {
   semiID += 1;
   semirighter();
  } else {
   ID += 1;
   righter();
  };
 };
 highleft.onclick = function() {
  ID -= 3;
  lefter();
 };
 highright.onclick = function() {
  ID += 3;
  righter();
 };
 firstPK1.onclick = function() {
  if (PM12 === false) {
   firstPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM11 = false;
  };
 };
 secondPK1.onclick = function() {
  if (PM13 === false) {
   secondPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM12 = false;
  };
 };
 thirdPK1.onclick = function() {
  if (six === true) {
   if (PM21 === false) {
    thirdPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM13 = false;
   };
  } else {
   if (player === false) {
    thirdPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM13 = false;
    setbutton.style.visibility = "hidden";
   };
  };
 };
 firstPK2.onclick = function() {
  if (PM22 === false) {
   firstPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM21 = false;
  };
 };
 secondPK2.onclick = function() {
  if (PM23 === false) {
   secondPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM22 = false;
  };
 };
 thirdPK2.onclick = function() {
  thirdPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
  PM23 = false;
  if ((player === true && six === false) || six === true) {
   setbutton.style.visibility = "hidden";
  };
 };
 body1.style.visibility = "visible";
}
function rulefinish() {
 alert("ルールの申請が完了しました");
 alert("次に" + Pnameon1 + "さん、ポケモンを選んでください");
 body2.style.visibility = "visible";
}
function lefter() {
 if (ID < 0) {
  ID = 67 + (ID + 1);
 };
 subPKR.style.visibility = "visible";
 change();
 if (ID === 0) {
  subPKR.src = data[ID + 1].img;
  subPKL.src = data[67].img;
 } else {
  if (ID === 67) {
   subPKR.src = data[0].img;
  } else {
   subPKR.src = data[ID + 1].img;
  };
  subPKL.src = data[ID - 1].img;
 };
}
function righter() {
 if (ID > 67) {
  ID = 0 + (ID - 68) ;
 };
 subPKL.style.visibility = "visible";
 change();
 if (ID === 67) {
  subPKR.src = data[0].img;
  subPKL.src = data[ID - 1].img;
 } else {
  if (ID === 0) {
   subPKL.src = data[67].img;
  } else {
   subPKL.src = data[ID - 1].img;
  };
  subPKR.src = data[ID + 1].img;
 };
}
function semilefter() {
 if (semiID < 0) {
  semiID = 10 + (semiID + 1);
 };
 subPKR.style.visibility = "visible";
 semichange();
 if (semiID === 0) {
  subPKR.src = semidata[semiID + 1].img;
  subPKL.src = semidata[10].img;
 } else {
  if (semiID === 10) {
   subPKR.src = semidata[0].img;
  } else {
   subPKR.src = semidata[semiID + 1].img;
  };
  subPKL.src = semidata[semiID - 1].img;
 };
}
function semirighter() {
 if (semiID > 10) {
  semiID = 0 + (semiID - 11) ;
 };
 subPKL.style.visibility = "visible";
 semichange();
 if (semiID === 10) {
  subPKR.src = semidata[0].img;
  subPKL.src = semidata[semiID - 1].img;
 } else {
  if (semiID === 0) {
   subPKL.src = semidata[10].img;
  } else {
   subPKL.src = semidata[semiID - 1].img;
  };
  subPKR.src = semidata[semiID + 1].img;
 };
}
function change() {
 PK.src = data[ID].img;
 PKname.innerHTML = data[ID].name;
 Lv.innerHTML = data[ID].level;
 F.innerHTML = data[ID].F
 Fdp.innerHTML = data[ID].Fdp;
 type1.style.backgroundColor = data[ID].color1;
 type2.style.backgroundColor = data[ID].color2;
 type1.innerHTML = data[ID].bodytype1;
 type2.innerHTML = data[ID].bodytype2;
 HP.innerHTML = data[ID].HP;
 attack.innerHTML = data[ID].A;
 block.innerHTML = data[ID].B;
 contact.innerHTML = data[ID].C;
 defense.innerHTML = data[ID].D;
 speed.innerHTML = S[ID][4];
 skilldp1.innerHTML = skill[data[ID].skill1].name;
 skilldp2.innerHTML = skill[data[ID].skill2].name;
 skilldp3.innerHTML = skill[data[ID].skill3].name;
 skilldp4.innerHTML = skill[data[ID].skill4].name;
 icon1.src = skill[data[ID].skill1].icon;
 icon2.src = skill[data[ID].skill2].icon;
 icon3.src = skill[data[ID].skill3].icon;
 icon4.src = skill[data[ID].skill4].icon;
 SL1.style.backgroundColor = "#FFFFFF";
 SL2.style.backgroundColor = "#FFFFFF";
 SL3.style.backgroundColor = "#FFFFFF";
 SL4.style.backgroundColor = "#FFFFFF";
 dp.style.visibility = "hidden";
 if (data[ID].changing === true) {
  Imrotom.style.visibility = "visible";
 } else {
  Imrotom.style.visibility = "hidden";
 };
};
function semichange() {
 PK.src = semidata[semiID].img;
 PKname.innerHTML = semidata[semiID].name;
 Lv.innerHTML = semidata[semiID].level;
 F.innerHTML = semidata[semiID].F
 Fdp.innerHTML = semidata[semiID].Fdp;
 type1.style.backgroundColor = semidata[semiID].color1;
 type2.style.backgroundColor = semidata[semiID].color2;
 type1.innerHTML = semidata[semiID].bodytype1;
 type2.innerHTML = semidata[semiID].bodytype2;
 HP.innerHTML = semidata[semiID].HP;
 attack.innerHTML = semidata[semiID].A;
 block.innerHTML = semidata[semiID].B;
 contact.innerHTML = semidata[semiID].C;
 defense.innerHTML = semidata[semiID].D;
 speed.innerHTML = semiS[semiID][4];
 skilldp1.innerHTML = skill[semidata[semiID].skill1].name;
 skilldp2.innerHTML = skill[semidata[semiID].skill2].name;
 skilldp3.innerHTML = skill[semidata[semiID].skill3].name;
 skilldp4.innerHTML = skill[semidata[semiID].skill4].name;
 icon1.src = skill[semidata[semiID].skill1].icon;
 icon2.src = skill[semidata[semiID].skill2].icon;
 icon3.src = skill[semidata[semiID].skill3].icon;
 icon4.src = skill[semidata[semiID].skill4].icon;
 SL1.style.backgroundColor = "#FFFFFF";
 SL2.style.backgroundColor = "#FFFFFF";
 SL3.style.backgroundColor = "#FFFFFF";
 SL4.style.backgroundColor = "#FFFFFF";
 dp.style.visibility = "hidden";
 if (semidata[semiID].changing === true) {
  Imrotom.style.visibility = "visible";
 } else {
  Imrotom.style.visibility = "hidden";
 };
};
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
function changerotom() {
 let number = Number(document.getElementById("rotom").value);
 let display = document.getElementById("rotom");
 display.style.backgroundImage = rotom[number].url;
 data[ID].img1 = rotom[number].img1;
 data[ID].img2 = rotom[number].img2;
 data[ID].img = rotom[number].img;
 PK.src = data[ID].img;
 data[ID].bodytype2 = rotom[number].type;
 data[ID].color2 = rotom[number].color;
 type2.innerHTML = data[ID].bodytype2;
 type2.style.backgroundColor = data[ID].color2;
 data[ID].skill1 = rotom[number].skill1;
 data[ID].skill2 = rotom[number].skill2;
 data[ID].skill3 = rotom[number].skill3;
 data[ID].skill4 = rotom[number].skill4;
 skilldp1.innerHTML = skill[data[ID].skill1].name;
 skilldp2.innerHTML = skill[data[ID].skill2].name;
 skilldp3.innerHTML = skill[data[ID].skill3].name;
 skilldp4.innerHTML = skill[data[ID].skill4].name;
 attack.innerHTML = rotom[number].A;
 block.innerHTML = rotom[number].B;
 contact.innerHTML = rotom[number].C;
 defense.innerHTML = rotom[number].D;
 speed.innerHTML = rotomS[rotom[number].subN][4];
 skilldp1.innerHTML = skill[data[ID].skill1].name;
 skilldp2.innerHTML = skill[data[ID].skill2].name;
 skilldp3.innerHTML = skill[data[ID].skill3].name;
 skilldp4.innerHTML = skill[data[ID].skill4].name;
 icon1.src = skill[data[ID].skill1].icon;
 icon2.src = skill[data[ID].skill2].icon;
 icon3.src = skill[data[ID].skill3].icon;
 icon4.src = skill[data[ID].skill4].icon;
 SL1.style.backgroundColor = "#FFFFFF";
 SL2.style.backgroundColor = "#FFFFFF";
 SL3.style.backgroundColor = "#FFFFFF";
 SL4.style.backgroundColor = "#FFFFFF";
 dp.style.visibility = "hidden"
}
function testfor() {
 if (six === true) {
  window.location.href = "ポケモン最終選択.html";
 } else {
  window.location.href = "ポケモンクエスト(PvP).html";
 };
}