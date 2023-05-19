function substart() {
 attack1.onclick = function() {
  if (attackstorage1 === true) {
   attackstorage1 = false;
   Adp1.innerHTML = "たたかう";
   change1.style.visibility = "visible";
   MG1.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart1 = false;
   MAX1.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart1 = false;
   if (PM[ID1].MAX !== true) {
    skill11.style.borderColor = "#000000";
    skill12.style.borderColor = "#000000";
    skill13.style.borderColor = "#000000";
    skill14.style.borderColor = "#000000";
    skill11dp.innerHTML = skill[PM[ID1].skill1].name;
    skill12dp.innerHTML = skill[PM[ID1].skill2].name;
    skill13dp.innerHTML = skill[PM[ID1].skill3].name;
    skill14dp.innerHTML = skill[PM[ID1].skill4].name;
    skill11.style.backgroundColor = skill[PM[ID1].skill1].color;
    skill12.style.backgroundColor = skill[PM[ID1].skill2].color;
    skill13.style.backgroundColor = skill[PM[ID1].skill3].color;
    skill14.style.backgroundColor = skill[PM[ID1].skill4].color;
   };
   skillclose1();
   changeclose1();
  } else {
   attackstorage1 = true;
   Adp1.innerHTML = "戻る";
   change1.style.visibility = "hidden";
   skillopen1();
  };
 };
 attack2.onclick = function() {
  if (attackstorage2 === true) {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   change2.style.visibility = "visible";
   MG2.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart2 = false;
   MAX2.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart2 = false;
   if (PM[ID2].MAX !== true) {
    skill21.style.borderColor = "#000000";
    skill22.style.borderColor = "#000000";
    skill23.style.borderColor = "#000000";
    skill24.style.borderColor = "#000000";
    skill21dp.innerHTML = skill[PM[ID2].skill1].name;
    skill22dp.innerHTML = skill[PM[ID2].skill2].name;
    skill23dp.innerHTML = skill[PM[ID2].skill3].name;
    skill24dp.innerHTML = skill[PM[ID2].skill4].name;
    skill21.style.backgroundColor = skill[PM[ID2].skill1].color;
    skill22.style.backgroundColor = skill[PM[ID2].skill2].color;
    skill23.style.backgroundColor = skill[PM[ID2].skill3].color;
    skill24.style.backgroundColor = skill[PM[ID2].skill4].color;
   };
   skillclose2();
   changeclose2();
  } else {
   attackstorage2 = true;
   Adp2.innerHTML = "戻る";
   change2.style.visibility = "hidden";
   skillopen2();
  };
 };
 change1.onclick = function() {
  if (changestorage1 === true) {
   changestorage1 = false;
   Cdp1.innerHTML = "ポケモン";
   attack1.style.visibility = "visible";
   changeclose1();
  } else {
   changestorage1 = true;
   Cdp1.innerHTML = "戻る";
   attack1.style.visibility = "hidden";
   changeopen1();
  };
 };
 change2.onclick = function() {
  if (changestorage2 === true) {
   changestorage2 = false;
   Cdp2.innerHTML = "ポケモン";
   attack2.style.visibility = "visible";
   changeclose2();
  } else {
   changestorage2 = true;
   Cdp2.innerHTML = "戻る";
   attack2.style.visibility = "hidden";
   changeopen2();
  };
 };
 skill11.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill1];
   if (skill[PM[ID1].skill1].type === "change" && skill[PM[ID1].skill1].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID1].skill1].type === "special" || skill[PM[ID1].skill1].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill1].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill1].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill1].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill1].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill1].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill1].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill1];
  };
  if (recoil1 === true || (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ" || skiller1.name === "たまごうみ" || skiller1.name === "なまける"))) {
   alert("その技は使えないよ");
  } else {
   attackstorage1 = false;
   Adp1.innerHTML = "たたかう";
   attack1.style.visibility = "hidden";
   change1.style.visibility = "hidden";
   skillclose1();
   if (secondattack2 === true) {
    setTimeout(test1,100);
   } else {
    attack2.style.visibility = "visible";
    change2.style.visibility = "visible";
   };
  };
 };
 skill12.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill2];
   if (skill[PM[ID1].skill2].type === "change" && skill[PM[ID1].skill2].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID2].skill2].type === "special" || skill[PM[ID1].skill2].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill2].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill2].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill2].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill2].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill2].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill2].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill2];
  };
  if (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ" || skiller1.name === "たまごうみ" || skiller1.name === "なまける")) {
   alert("その技は使えないよ");
  } else {
   attackstorage1 = false;
   Adp1.innerHTML = "たたかう";
   attack1.style.visibility = "hidden";
   change1.style.visibility = "hidden";
   skillclose1();
   if (secondattack2 === true) {
    setTimeout(test1,100);
   } else {
    attack2.style.visibility = "visible";
    change2.style.visibility = "visible";
   };
  };
 };
 skill13.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill3];
   if (skill[PM[ID1].skill3].type === "change" && skill[PM[ID1].skill3].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID1].skill3].type === "special" || skill[PM[ID1].skill3].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill3].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill3].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill3].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill3].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill3].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill3].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill3];
  };
  if (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ" || skiller1.name === "たまごうみ" || skiller1.name === "なまける")) {
   alert("その技は使えないよ");
  } else {
   attackstorage1 = false;
   Adp1.innerHTML = "たたかう";
   attack1.style.visibility = "hidden";
   change1.style.visibility = "hidden";
   skillclose1();
   if (secondattack2 === true) {
    setTimeout(test1,100);
   } else {
    attack2.style.visibility = "visible";
    change2.style.visibility = "visible";
   };
  };
 };
 skill14.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill4];
   if (skill[PM[ID1].skill4].type === "change" && skill[PM[ID1].skill4].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID1].skill4].type === "special" || skill[PM[ID1].skill4].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill4].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill4].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill4].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill4].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill4].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill4].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill4];
  };
  if (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ" || skiller1.name === "たまごうみ" || skiller1.name === "なまける") || (PM[ID1].healout === true && skiller1.name === "さいきのいのり")) {
   alert("その技は使えないよ");
  } else {
   if (skiller1.name === "さいきのいのり") {
    againheal1 = true;
    change1.style.visibility = "hidden";
    changeopen1();
    skillclose1();
   } else {
    attackstorage1 = false;
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    change1.style.visibility = "hidden";
    skillclose1();
    if (secondattack2 === true) {
     setTimeout(test1,100);
    } else {
     attack2.style.visibility = "visible";
     change2.style.visibility = "visible";
    };
   };
  };
 };
 skill21.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill1];
   if (skill[PM[ID2].skill1].type === "change" && skill[PM[ID2].skill1].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill1].type === "special" || skill[PM[ID2].skill1].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill1].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill1].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill1].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill1].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill1].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill1].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill1];
  };
  if (recoil2 === true || (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ" || skiller2.name === "たまごうみ" || skiller2.name === "なまける"))) {
   alert("その技は使えないよ");
  } else {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   attack2.style.visibility = "hidden";
   change2.style.visibility = "hidden";
   skillclose2();
   setTimeout(test1,200);
  };
 };
 skill22.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill2];
   if (skill[PM[ID2].skill2].type === "change" && skill[PM[ID2].skill2].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill2].type === "special" || skill[PM[ID2].skill2].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill2].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill2].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill2].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill2].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill2].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill2].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill2];
  };
  if (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ" || skiller2.name === "たまごうみ" || skiller2.name === "なまける")) {
   alert("その技は使えないよ");
  } else {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   attack2.style.visibility = "hidden";
   change2.style.visibility = "hidden";
   skillclose2();
   setTimeout(test1,200);
  };
 };
 skill23.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill3];
   if (skill[PM[ID2].skill3].type === "change" && skill[PM[ID2].skill3].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill3].type === "special" || skill[PM[ID2].skill3].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill3].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill3].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill3].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill3].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill3].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill3].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill3];
  };
  if (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ" || skiller2.name === "たまごうみ" || skiller2.name === "なまける")) {
   alert("その技は使えないよ");
  } else {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   attack2.style.visibility = "hidden";
   change2.style.visibility = "hidden";
   skillclose2();
   setTimeout(test1,200);
  };
 };
 skill24.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill4];
   if (skill[PM[ID2].skill4].type === "change" && skill[PM[ID2].skill4].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill4].type === "special" || skill[PM[ID2].skill4].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill4].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill4].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill4].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill4].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill4].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill4].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill4];
  };
  if (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ" || skiller2.name === "たまごうみ" || skiller2.name === "なまける") || (PM[ID2].healout === true && skiller2.name === "さいきのいのり")) {
   alert("その技は使えないよ");
  } else {
   if (skiller2.name === "さいきのいのり") {
    againheal2 = true;
    change2.style.visibility = "hidden";
    changeopen2();
    skillclose2();
   } else {
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    change2.style.visibility = "hidden";
    skillclose2();
    setTimeout(test1,200);
   };
  };
 };
 MGdp1.onclick = function() {
  if (MGstart1 === false) {
   MG1.src = "../ポケモンクエスト画像/メガシンカ2.png";
   MGstart1 = true;
  } else {
   MG1.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart1 = false;
  };
 };
 MGdp2.onclick = function() {
  if (MGstart2 === false) {
   MG2.src = "../ポケモンクエスト画像/メガシンカ2.png";
   MGstart2 = true;
  } else {
   MG2.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart2 = false;
  };
 };
 MAXdp1.onclick = function() {
  if (MAXstart1 === false) {
   MAX1.src = "../ポケモンクエスト画像/ダイマックス2.png";
   MAXstart1 = true;
   skill11.style.borderColor = "#FF407F";
   skill12.style.borderColor = "#FF407F";
   skill13.style.borderColor = "#FF407F";
   skill14.style.borderColor = "#FF407F";
   skill11dp.innerHTML = MAXskill[PM[ID1].MAXskill1].name;
   skill12dp.innerHTML = MAXskill[PM[ID1].MAXskill2].name;
   skill13dp.innerHTML = MAXskill[PM[ID1].MAXskill3].name;
   skill14dp.innerHTML = MAXskill[PM[ID1].MAXskill4].name;
   skill11.style.backgroundColor = MAXskill[PM[ID1].MAXskill1].color;
   skill12.style.backgroundColor = MAXskill[PM[ID1].MAXskill2].color;
   skill13.style.backgroundColor = MAXskill[PM[ID1].MAXskill3].color;
   skill14.style.backgroundColor = MAXskill[PM[ID1].MAXskill4].color;
  } else {
   MAX1.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart1 = false;
   skill11.style.borderColor = "#000000";
   skill12.style.borderColor = "#000000";
   skill13.style.borderColor = "#000000";
   skill14.style.borderColor = "#000000";
   skill11dp.innerHTML = skill[PM[ID1].skill1].name;
   skill12dp.innerHTML = skill[PM[ID1].skill2].name;
   skill13dp.innerHTML = skill[PM[ID1].skill3].name;
   skill14dp.innerHTML = skill[PM[ID1].skill4].name;
   skill11.style.backgroundColor = skill[PM[ID1].skill1].color;
   skill12.style.backgroundColor = skill[PM[ID1].skill2].color;
   skill13.style.backgroundColor = skill[PM[ID1].skill3].color;
   skill14.style.backgroundColor = skill[PM[ID1].skill4].color;
  };
 };
 MAXdp2.onclick = function() {
  if (MAXstart2 === false) {
   MAX2.src = "../ポケモンクエスト画像/ダイマックス2.png";
   MAXstart2 = true;
   skill21.style.borderColor = "#FF407F";
   skill22.style.borderColor = "#FF407F";
   skill23.style.borderColor = "#FF407F";
   skill24.style.borderColor = "#FF407F";
   skill21dp.innerHTML = MAXskill[PM[ID2].MAXskill1].name;
   skill22dp.innerHTML = MAXskill[PM[ID2].MAXskill2].name;
   skill23dp.innerHTML = MAXskill[PM[ID2].MAXskill3].name;
   skill24dp.innerHTML = MAXskill[PM[ID2].MAXskill4].name;
   skill21.style.backgroundColor = MAXskill[PM[ID2].MAXskill1].color;
   skill22.style.backgroundColor = MAXskill[PM[ID2].MAXskill2].color;
   skill23.style.backgroundColor = MAXskill[PM[ID2].MAXskill3].color;
   skill24.style.backgroundColor = MAXskill[PM[ID2].MAXskill4].color;
  } else {
   MAX2.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart2 = false;
   skill21.style.borderColor = "#000000";
   skill22.style.borderColor = "#000000";
   skill23.style.borderColor = "#000000";
   skill24.style.borderColor = "#000000";
   skill21dp.innerHTML = skill[PM[ID2].skill1].name;
   skill22dp.innerHTML = skill[PM[ID2].skill2].name;
   skill23dp.innerHTML = skill[PM[ID2].skill3].name;
   skill24dp.innerHTML = skill[PM[ID2].skill4].name;
   skill21.style.backgroundColor = skill[PM[ID2].skill1].color;
   skill22.style.backgroundColor = skill[PM[ID2].skill2].color;
   skill23.style.backgroundColor = skill[PM[ID2].skill3].color;
   skill24.style.backgroundColor = skill[PM[ID2].skill4].color;
  };
 };
 subPK1.onclick = function() {
  if (PM[0].HP <= 0) {
   if (againheal1 === true) {
    againheal1 = false;
    attackstorage1 = false;
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID1 = 0;
    changeclose1();
    if (secondattack2 === true) {
     setTimeout(test1,100);
    } else {
     attack2.style.visibility = "visible";
     change2.style.visibility = "visible";
    };
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down1 === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
    };
    if (PM[ID1].mega === true) {
     PM[ID1].mega = false;
     PM[ID1].MHP = PMm.slice(ID1,(ID1 + 1))[0].MHP;
     PM[ID1].A = PMm.slice(ID1,(ID1 + 1))[0].A;
     PM[ID1].B = PMm.slice(ID1,(ID1 + 1))[0].B;
     PM[ID1].C = PMm.slice(ID1,(ID1 + 1))[0].C;
     PM[ID1].D = PMm.slice(ID1,(ID1 + 1))[0].D;
     PM[ID1].S = PMm.slice(ID1,(ID1 + 1))[0].S;
     PM[ID1].F = PMm.slice(ID1,(ID1 + 1))[0].F;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
     PM[ID1].color1 = PMm.slice(ID1,(ID1 + 1))[0].color1;
     PM[ID1].color2 = PMm.slice(ID1,(ID1 + 1))[0].color2;
     PM[ID1].heavy = PMm.slice(ID1,(ID1 + 1))[0].heavy;
     PM[ID1].img1 = PMm.slice(ID1,(ID1 + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID1].img1 = PM[ID1].shieldform1;
     PM[ID1].blade = false;
     PM[ID1].A = 70;
     PM[ID1].B = 160;
     PM[ID1].C = 70;
     PM[ID1].D = 160;
    };
    ID1 = 0;
    F1 = PM[ID1].F;
    if (F1 === "イリュージョン" && ID1 !== 2) {
     illusion1 = true;
     if (PM[2].HP === 0) {
      if (PM[1].HP === 0) {
       PN1 = PM[ID1].name;
       PKpic1 = PM[ID1].img1;
       namedp1.innerHTML = PM[ID1].name;
       type11.innerHTML = PM[ID1].bodytype1;
       type12.innerHTML = PM[ID1].bodytype2;
       type11.style.backgroundColor = PM[ID1].color1;
       type12.style.backgroundColor = PM[ID1].color2;
      } else {
       PN1 = PM[1].name;
       PKpic1 = PM[1].img1;
       namedp1.innerHTML = PM[1].name;
       type11.innerHTML = PM[1].bodytype1;
       type12.innerHTML = PM[1].bodytype2;
       type11.style.backgroundColor = PM[1].color1;
       type12.style.backgroundColor = PM[1].color2;
      };
     } else {
      PN1 = PM[2].name;
      PKpic1 = PM[2].img1;
      namedp1.innerHTML = PM[2].name;
      type11.innerHTML = PM[2].bodytype1;
      type12.innerHTML = PM[2].bodytype2;
      type11.style.backgroundColor = PM[2].color1;
      type12.style.backgroundColor = PM[2].color2;
     };
    } else {
     PN1 = PM[ID1].name;
     PKpic1 = PM[ID1].img1;
     namedp1.innerHTML = PM[ID1].name;
     type11.innerHTML = PM[ID1].bodytype1;
     type12.innerHTML = PM[ID1].bodytype2;
     type11.style.backgroundColor = PM[ID1].color1;
     type12.style.backgroundColor = PM[ID1].color2;
    };
    if (dies1 === (diept1 - 1) && audioed2 !== true) {
     audioed2 = true;
     audio1.pause();
     audio2.play();
    };
    changeclose1();
    changing1();
   } else {
    if (againheal1 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[0].name + "に入れ替えますか?");
     if (change === true) {
      if (ID1 !== 0) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
        PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
       };
       if (PM[ID1].F === "さいせいりょく") {
        PM[ID1].HP += Math.floor(PM[ID1].MHP / 3);
        if (PM[ID1].HP > PM[ID1].MHP) {
         PM[ID1].HP = PM[ID1].MHP;
        };
       };
       if (PM[ID1].MAX === true) {
        PM[ID1].MAX = false;
        PM[ID1].MHP = PM[ID1].MHP / 2;
        PM[ID1].HP = Math.ceil(PM[ID1].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID1].img1 = PM[ID1].shieldform1;
        PM[ID1].blade = false;
        PM[ID1].A = 70;
        PM[ID1].B = 160;
        PM[ID1].C = 70;
        PM[ID1].D = 160;
       };
       ID1 = 0;
       F1 = PM[ID1].F;
       changer1 = true;
       changestorage1 = false;
       skiller1 = skill[25].name;
       bothchange += 1;
       Cdp1.innerHTML = "ポケモン";
       change1.style.visibility = "hidden";
       changeclose1();
       if (secondattack2 === true) {
        setTimeout(test1,100);
       } else {
        attack2.style.visibility = "visible";
        change2.style.visibility = "visible";
       };
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK2.onclick = function() {
  if (PM[1].HP <= 0) {
   if (againheal1 === true) {
    againheal1 = false;
    attackstorage1 = false;
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID1 = 1;
    changeclose1();
    if (secondattack2 === true) {
     setTimeout(test1,100);
    } else {
     attack2.style.visibility = "visible";
     change2.style.visibility = "visible";
    };
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down1 === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
    };
    if (PM[ID1].mega === true) {
     PM[ID1].mega = false;
     PM[ID1].MHP = PMm.slice(ID1,(ID1 + 1))[0].MHP;
     PM[ID1].A = PMm.slice(ID1,(ID1 + 1))[0].A;
     PM[ID1].B = PMm.slice(ID1,(ID1 + 1))[0].B;
     PM[ID1].C = PMm.slice(ID1,(ID1 + 1))[0].C;
     PM[ID1].D = PMm.slice(ID1,(ID1 + 1))[0].D;
     PM[ID1].S = PMm.slice(ID1,(ID1 + 1))[0].S;
     PM[ID1].F = PMm.slice(ID1,(ID1 + 1))[0].F;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
     PM[ID1].color1 = PMm.slice(ID1,(ID1 + 1))[0].color1;
     PM[ID1].color2 = PMm.slice(ID1,(ID1 + 1))[0].color2;
     PM[ID1].heavy = PMm.slice(ID1,(ID1 + 1))[0].heavy;
     PM[ID1].img1 = PMm.slice(ID1,(ID1 + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID1].img1 = PM[ID1].shieldform1;
     PM[ID1].blade = false;
     PM[ID1].A = 70;
     PM[ID1].B = 160;
     PM[ID1].C = 70;
     PM[ID1].D = 160;
    };
    ID1 = 1;
    F1 = PM[ID1].F;
    if (F1 === "イリュージョン" && ID1 !== 2) {
     illusion1 = true;
     if (PM[2].HP === 0) {
      if (PM[1].HP === 0) {
       PN1 = PM[ID1].name;
       PKpic1 = PM[ID1].img1;
       namedp1.innerHTML = PM[ID1].name;
       type11.innerHTML = PM[ID1].bodytype1;
       type12.innerHTML = PM[ID1].bodytype2;
       type11.style.backgroundColor = PM[ID1].color1;
       type12.style.backgroundColor = PM[ID1].color2;
      } else {
       PN1 = PM[1].name;
       PKpic1 = PM[1].img1;
       namedp1.innerHTML = PM[1].name;
       type11.innerHTML = PM[1].bodytype1;
       type12.innerHTML = PM[1].bodytype2;
       type11.style.backgroundColor = PM[1].color1;
       type12.style.backgroundColor = PM[1].color2;
      };
     } else {
      PN1 = PM[2].name;
      PKpic1 = PM[2].img1;
      namedp1.innerHTML = PM[2].name;
      type11.innerHTML = PM[2].bodytype1;
      type12.innerHTML = PM[2].bodytype2;
      type11.style.backgroundColor = PM[2].color1;
      type12.style.backgroundColor = PM[2].color2;
     };
    } else {
     PN1 = PM[ID1].name;
     PKpic1 = PM[ID1].img1;
     namedp1.innerHTML = PM[ID1].name;
     type11.innerHTML = PM[ID1].bodytype1;
     type12.innerHTML = PM[ID1].bodytype2;
     type11.style.backgroundColor = PM[ID1].color1;
     type12.style.backgroundColor = PM[ID1].color2;
    };
    if (dies1 === (diept1 - 1) && audioed2 !== true) {
     audioed2 = true;
     audio1.pause();
     audio2.play();
    };
    changeclose1();
    changing1();
   } else {
    if (againheal1 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[1].name + "に入れ替えますか?");
     if (change === true) {
      if (ID1 !== 1) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
        PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
       };
       if (PM[ID1].F === "さいせいりょく") {
        PM[ID1].HP += Math.floor(PM[ID1].MHP / 3);
        if (PM[ID1].HP > PM[ID1].MHP) {
         PM[ID1].HP = PM[ID1].MHP;
        };
       };
       if (PM[ID1].MAX === true) {
        PM[ID1].MAX = false;
        PM[ID1].MHP = PM[ID1].MHP / 2;
        PM[ID1].HP = Math.ceil(PM[ID1].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID1].img1 = PM[ID1].shieldform1;
        PM[ID1].blade = false;
        PM[ID1].A = 70;
        PM[ID1].B = 160;
        PM[ID1].C = 70;
        PM[ID1].D = 160;
       };
       ID1 = 1;
       F1 = PM[ID1].F;
       changer1 = true;
       changestorage1 = false;
       skiller1 = skill[25].name;
       bothchange += 1;
       Cdp1.innerHTML = "ポケモン";
       change1.style.visibility = "hidden";
       changeclose1();
       if (secondattack2 === true) {
        setTimeout(test1,100);
       } else {
        attack2.style.visibility = "visible";
        change2.style.visibility = "visible";
       };
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK3.onclick = function() {
  if (PM[2].HP <= 0) {
   if (againheal1 === true) {
    againheal1 = false;
    attackstorage1 = false;
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID1 = 2;
    changeclose1();
    if (secondattack2 === true) {
     setTimeout(test1,100);
    } else {
     attack2.style.visibility = "visible";
     change2.style.visibility = "visible";
    };
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down1 === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
    };
    if (PM[ID1].mega === true) {
     PM[ID1].mega = false;
     PM[ID1].MHP = PMm.slice(ID1,(ID1 + 1))[0].MHP;
     PM[ID1].A = PMm.slice(ID1,(ID1 + 1))[0].A;
     PM[ID1].B = PMm.slice(ID1,(ID1 + 1))[0].B;
     PM[ID1].C = PMm.slice(ID1,(ID1 + 1))[0].C;
     PM[ID1].D = PMm.slice(ID1,(ID1 + 1))[0].D;
     PM[ID1].S = PMm.slice(ID1,(ID1 + 1))[0].S;
     PM[ID1].F = PMm.slice(ID1,(ID1 + 1))[0].F;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
     PM[ID1].color1 = PMm.slice(ID1,(ID1 + 1))[0].color1;
     PM[ID1].color2 = PMm.slice(ID1,(ID1 + 1))[0].color2;
     PM[ID1].heavy = PMm.slice(ID1,(ID1 + 1))[0].heavy;
     PM[ID1].img1 = PMm.slice(ID1,(ID1 + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID1].img1 = PM[ID1].shieldform1;
     PM[ID1].blade = false;
     PM[ID1].A = 70;
     PM[ID1].B = 160;
     PM[ID1].C = 70;
     PM[ID1].D = 160;
    };
    ID1 = 2;
    F1 = PM[ID1].F;
    PN1 = PM[ID1].name;
    PKpic1 = PM[ID1].img1;
    namedp1.innerHTML = PM[ID1].name;
    type11.innerHTML = PM[ID1].bodytype1;
    type12.innerHTML = PM[ID1].bodytype2;
    type11.style.backgroundColor = PM[ID1].color1;
    type12.style.backgroundColor = PM[ID1].color2;
    if (dies1 === (diept1 - 1) && audioed2 !== true) {
     audio1.pause();
     audioed2 = true;
     audio2.play();
    };
    changeclose1();
    changing1();
   } else {
    if (againheal1 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
　   let change = confirm(PM[2].name + "に入れ替えますか?");
     if (change === true) {
      if (ID1 !== 2) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
        PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
       };
       if (PM[ID1].F === "さいせいりょく") {
        PM[ID1].HP += Math.floor(PM[ID1].MHP / 3);
        if (PM[ID1].HP > PM[ID1].MHP) {
         PM[ID1].HP = PM[ID1].MHP;
        };
       };
       if (PM[ID1].MAX === true) {
        PM[ID1].MAX = false;
        PM[ID1].MHP = PM[ID1].MHP / 2;
        PM[ID1].HP = Math.ceil(PM[ID1].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID1].img1 = PM[ID1].shieldform1;
        PM[ID1].blade = false;
        PM[ID1].A = 70;
        PM[ID1].B = 160;
        PM[ID1].C = 70;
        PM[ID1].D = 160;
       };
       ID1 = 2;
       F1 = PM[ID1].F;
       changer1 = true;
       changestorage1 = false;
       skiller1 = skill[25].name;
       bothchange += 1;
       Cdp1.innerHTML = "ポケモン";
       change1.style.visibility = "hidden";
       changeclose1();
       if (secondattack2 === true) {
        setTimeout(test1,100);
       } else {
        attack2.style.visibility = "visible";
        change2.style.visibility = "visible";
       };
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK4.onclick = function() {
  if (PM[3].HP <= 0) {
   if (againheal2 === true) {
    againheal2 = false;
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    healID2 = 3;
    changeclose2();
    setTimeout(test1,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down2 === true) {
    if (formed2 === true) {
     formed2 = false;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
    };
    if (PM[ID2].mega === true) {
     PM[ID2].mega = false;
     PM[ID2].MHP = PMm.slice(ID2,(ID2 + 1))[0].MHP;
     PM[ID2].A = PMm.slice(ID2,(ID2 + 1))[0].A;
     PM[ID2].B = PMm.slice(ID2,(ID2 + 1))[0].B;
     PM[ID2].C = PMm.slice(ID2,(ID2 + 1))[0].C;
     PM[ID2].D = PMm.slice(ID2,(ID2 + 1))[0].D;
     PM[ID2].S = PMm.slice(ID2,(ID2 + 1))[0].S;
     PM[ID2].F = PMm.slice(ID2,(ID2 + 1))[0].F;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
     PM[ID2].color1 = PMm.slice(ID2,(ID2 + 1))[0].color1;
     PM[ID2].color2 = PMm.slice(ID2,(ID2 + 1))[0].color2;
     PM[ID2].heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
     PM[ID2].img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    };
    if (F2 === "バトルスイッチ") {
     PM[ID2].img2 = PM[ID2].shieldform2;
     PM[ID2].blade = false;
     PM[ID2].A = 70;
     PM[ID2].B = 160;
     PM[ID2].C = 70;
     PM[ID2].D = 160;
    };
    ID2 = 3;
    F2 = PM[ID2].F;
    if (F2 === "イリュージョン" && ID2 !== 5) {
     illusion2 = true;
     if (PM[5].HP === 0) {
      if (PM[4].HP === 0) {
       PN2 = PM[ID2].name;
       PKpic2 = PM[ID2].img2;
       namedp2.innerHTML = PM[ID2].name;
       type21.innerHTML = PM[ID2].bodytype1;
       type22.innerHTML = PM[ID2].bodytype2;
       type21.style.backgroundColor = PM[ID2].color1;
       type22.style.backgroundColor = PM[ID2].color2;
      } else {
       PN2 = PM[4].name;
       PKpic2 = PM[4].img2;
       namedp2.innerHTML = PM[4].name;
       type21.innerHTML = PM[4].bodytype1;
       type22.innerHTML = PM[4].bodytype2;
       type21.style.backgroundColor = PM[4].color1;
       type22.style.backgroundColor = PM[4].color2;
      };
     } else {
      PN2 = PM[5].name;
      PKpic2 = PM[5].img2;
      namedp2.innerHTML = PM[5].name;
      type21.innerHTML = PM[5].bodytype1;
      type22.innerHTML = PM[5].bodytype2;
      type21.style.backgroundColor = PM[5].color1;
      type22.style.backgroundColor = PM[5].color2;
     };
    } else {
     PN2 = PM[ID2].name;
     PKpic2 = PM[ID2].img2;
     namedp2.innerHTML = PM[ID2].name;
     type21.innerHTML = PM[ID2].bodytype1;
     type22.innerHTML = PM[ID2].bodytype2;
     type21.style.backgroundColor = PM[ID2].color1;
     type22.style.backgroundColor = PM[ID2].color2;
    };
    if (dies2 === (diept2 - 1) && audioed2 !== true) {
     audio1.pause();
     audioed2 = true;
     audio2.play();
    };
    changeclose2();
    changing2();
   } else {
    if (againheal2 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[3].name + "に入れ替えますか?");
     if (change === true) {
      if (ID2 !== 3) {
       if (formed2 === true) {
        formed2 = false;
        PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
        PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
       };
       if (PM[ID2].F === "さいせいりょく") {
        PM[ID2].HP += Math.floor(PM[ID2].MHP / 3);
        if (PM[ID2].HP > PM[ID2].MHP) {
         PM[ID2].HP = PM[ID2].MHP;
        };
       };
       if (PM[ID2].MAX === true) {
        PM[ID2].MAX = false;
        PM[ID2].MHP = PM[ID2].MHP / 2;
        PM[ID2].HP = Math.ceil(PM[ID2].HP / 2);
       };
       if (F2 === "バトルスイッチ") {
        PM[ID2].img2 = PM[ID2].shieldform2;
        PM[ID2].blade = false;
        PM[ID2].A = 70;
        PM[ID2].B = 160;
        PM[ID2].C = 70;
        PM[ID2].D = 160;
       };
       ID2 = 3;
       F2 = PM[ID2].F;
       changer2 = true;
       changestorage2 = false;
       skiller2 = skill[25].name;
       bothchange += 1;
       Cdp2.innerHTML = "ポケモン";
       change2.style.visibility = "hidden";
       changeclose2();
       setTimeout(test1,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK5.onclick = function() {
  if (PM[4].HP <= 0) {
   if (againheal2 === true) {
    againheal2 = false;
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    healID2 = 4;
    changeclose2();
    setTimeout(test1,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down2 === true) {
    if (formed2 === true) {
     formed2 = false;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
    };
    if (PM[ID2].mega === true) {
     PM[ID2].mega = false;
     PM[ID2].MHP = PMm.slice(ID2,(ID2 + 1))[0].MHP;
     PM[ID2].A = PMm.slice(ID2,(ID2 + 1))[0].A;
     PM[ID2].B = PMm.slice(ID2,(ID2 + 1))[0].B;
     PM[ID2].C = PMm.slice(ID2,(ID2 + 1))[0].C;
     PM[ID2].D = PMm.slice(ID2,(ID2 + 1))[0].D;
     PM[ID2].S = PMm.slice(ID2,(ID2 + 1))[0].S;
     PM[ID2].F = PMm.slice(ID2,(ID2 + 1))[0].F;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
     PM[ID2].color1 = PMm.slice(ID2,(ID2 + 1))[0].color1;
     PM[ID2].color2 = PMm.slice(ID2,(ID2 + 1))[0].color2;
     PM[ID2].heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
     PM[ID2].img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    };
    if (F2 === "バトルスイッチ") {
     PM[ID2].img2 = PM[ID2].shieldform2;
     PM[ID2].blade = false;
     PM[ID2].A = 70;
     PM[ID2].B = 160;
     PM[ID2].C = 70;
     PM[ID2].D = 160;
    };
    ID2 = 4;
    F2 = PM[ID2].F;
    if (F2 === "イリュージョン" && ID2 !== 5) {
     illusion2 = true;
     if (PM[5].HP === 0) {
      if (PM[4].HP === 0) {
       PN2 = PM[ID2].name;
       PKpic2 = PM[ID2].img2;
       namedp2.innerHTML = PM[ID2].name;
       type21.innerHTML = PM[ID2].bodytype1;
       type22.innerHTML = PM[ID2].bodytype2;
       type21.style.backgroundColor = PM[ID2].color1;
       type22.style.backgroundColor = PM[ID2].color2;
      } else {
       PN2 = PM[4].name;
       PKpic2 = PM[4].img2;
       namedp2.innerHTML = PM[4].name;
       type21.innerHTML = PM[4].bodytype1;
       type22.innerHTML = PM[4].bodytype2;
       type21.style.backgroundColor = PM[4].color1;
       type22.style.backgroundColor = PM[4].color2;
      };
     } else {
      PN2 = PM[5].name;
      PKpic2 = PM[5].img2;
      namedp2.innerHTML = PM[5].name;
      type21.innerHTML = PM[5].bodytype1;
      type22.innerHTML = PM[5].bodytype2;
      type21.style.backgroundColor = PM[5].color1;
      type22.style.backgroundColor = PM[5].color2;
     };
    } else {
     PN2 = PM[ID2].name;
     PKpic2 = PM[ID2].img2;
     namedp2.innerHTML = PM[ID2].name;
     type21.innerHTML = PM[ID2].bodytype1;
     type22.innerHTML = PM[ID2].bodytype2;
     type21.style.backgroundColor = PM[ID2].color1;
     type22.style.backgroundColor = PM[ID2].color2;
    };
    if (dies2 === (diept2 - 1) && audioed2 !== true) {
     audio1.pause();
     audioed2 = true;
     audio2.play();
    };
    changeclose2();
    changing2();
   } else {
    if (againheal2 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[4].name + "に入れ替えますか?");
     if (change === true) {
      if (ID2 !== 4) {
       if (formed2 === true) {
        formed2 = false;
        PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
        PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
       };
       if (PM[ID2].F === "さいせいりょく") {
        PM[ID2].HP += Math.floor(PM[ID2].MHP / 3);
        if (PM[ID2].HP > PM[ID2].MHP) {
         PM[ID2].HP = PM[ID2].MHP;
        };
       };
       if (PM[ID2].MAX === true) {
        PM[ID2].MAX = false;
        PM[ID2].MHP = PM[ID2].MHP / 2;
        PM[ID2].HP = Math.ceil(PM[ID2].HP / 2);
       };
       if (F2 === "バトルスイッチ") {
        PM[ID2].img2 = PM[ID2].shieldform2;
        PM[ID2].blade = false;
        PM[ID2].A = 70;
        PM[ID2].B = 160;
        PM[ID2].C = 70;
        PM[ID2].D = 160;
       };
       ID2 = 4;
       F2 = PM[ID2].F;
       changer2 = true;
       changestorage2 = false;
       skiller2 = skill[25].name;
       bothchange += 1;
       Cdp2.innerHTML = "ポケモン";
       change2.style.visibility = "hidden";
       changeclose2();
       setTimeout(test1,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK6.onclick = function() {
  if (PM[5].HP <= 0) {
   if (againheal2 === true) {
    againheal2 = false;
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    healID2 = 5;
    changeclose2();
    setTimeout(test1,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down2 === true) {
    if (formed2 === true) {
     formed2 = false;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
    };
    if (PM[ID2].mega === true) {
     PM[ID2].mega = false;
     PM[ID2].MHP = PMm.slice(ID2,(ID2 + 1))[0].MHP;
     PM[ID2].A = PMm.slice(ID2,(ID2 + 1))[0].A;
     PM[ID2].B = PMm.slice(ID2,(ID2 + 1))[0].B;
     PM[ID2].C = PMm.slice(ID2,(ID2 + 1))[0].C;
     PM[ID2].D = PMm.slice(ID2,(ID2 + 1))[0].D;
     PM[ID2].S = PMm.slice(ID2,(ID2 + 1))[0].S;
     PM[ID2].F = PMm.slice(ID2,(ID2 + 1))[0].F;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
     PM[ID2].color1 = PMm.slice(ID2,(ID2 + 1))[0].color1;
     PM[ID2].color2 = PMm.slice(ID2,(ID2 + 1))[0].color2;
     PM[ID2].heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
     PM[ID2].img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    };
    if (F2 === "バトルスイッチ") {
     PM[ID2].img2 = PM[ID2].shieldform2;
     PM[ID2].blade = false;
     PM[ID2].A = 70;
     PM[ID2].B = 160;
     PM[ID2].C = 70;
     PM[ID2].D = 160;
    };
    ID2 = 5;
    F2 = PM[ID2].F;
    PN2 = PM[ID2].name;
    PKpic2 = PM[ID2].img2;
    namedp2.innerHTML = PM[ID2].name;
    type21.innerHTML = PM[ID2].bodytype1;
    type22.innerHTML = PM[ID2].bodytype2;
    type21.style.backgroundColor = PM[ID2].color1;
    type22.style.backgroundColor = PM[ID2].color2;
    if (dies2 === (diept2 - 1) && audioed2 !== true) {
     audio1.pause();
     audioed2 = true;
     audio2.play();
    };
    changeclose2();
    changing2();
   } else {
    if (againheal2 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[5].name + "に入れ替えますか?");
     if (change === true) {
      if (ID2 !== 5) {
       if (formed2 === true) {
        formed2 = false;
        PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
        PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
       };
       if (PM[ID2].F === "さいせいりょく") {
        PM[ID2].HP += Math.floor(PM[ID2].MHP / 3);
        if (PM[ID2].HP > PM[ID2].MHP) {
         PM[ID2].HP = PM[ID2].MHP;
        };
       };
       if (PM[ID2].MAX === true) {
        PM[ID2].MAX = false;
        PM[ID2].MHP = PM[ID2].MHP / 2;
        PM[ID2].HP = Math.ceil(PM[ID2].HP / 2);
       };
       if (F2 === "バトルスイッチ") {
        PM[ID2].img2 = PM[ID2].shieldform2;
        PM[ID2].blade = false;
        PM[ID2].A = 70;
        PM[ID2].B = 160;
        PM[ID2].C = 70;
        PM[ID2].D = 160;
       };
       ID2 = 5;
       F2 = PM[ID2].F;
       changer2 = true;
       changestorage2 = false;
       skiller2 = skill[25].name;
       bothchange += 1;
       Cdp2.innerHTML = "ポケモン";
       change2.style.visibility = "hidden";
       changeclose2();
       setTimeout(test1,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 setTimeout(start2,100);
 body.style.visibility = "visible";
}