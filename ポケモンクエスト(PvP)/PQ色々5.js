function PKCOMAX1() {
 if (changer1 === true) {
  if (F2 === "バトルスイッチ" && PM[ID2].blade === false && skiller2.type !== "change") {
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   PM[ID2].img2 = PM[ID2].bladeform2;
   PK2.src = PM[ID2].img2;
  };
  if (first === true) {
   last();
  } else {
   firsted = 1;
   if (PM[ID2].MAX === true) {
    PKCOMAX2();
   } else {
    PKCO2();
   };
  };
 } else {
  if (skiller1.type === "change") {
   alert(PN1 + "は" + skiller1.name + "を使った！");
  } else {
   alert(PN1 + "！ " + skiller1.name + "！");
  };
  skiller = skiller1.name + "1";
  if (skiller1.type === "change") {
   chaos = Math.random() * 100;
   if (shield2 === true || MAXshield2 === true || chaos > shieldrate[shieldpt1].rate) {
    alert("しかし、うまく決まらなかった…。");
    shieldpt1 = 0;
   } else {
    alert(Pnameon1 + "の" + PN1 + "は守りの体制に入った！");
    shieldpt1 += 1;
    MAXshield1 = true;
   };
   setTimeout(seconddp,200);
  } else {
   if (secondattack2 !== true) {
    if (MAXshield2 === true && skiller1.MAXshieldbreak !== true) {
     alert(PN2 + "は攻撃から身を守った！");
     last();
    } else {
     let power = skiller1.power;
     let weatherblock = 1;
     let calamity1 = 1;
     let calamity2 = 1;
     let ability1;
     let ability2;
     let ranks1;
     let ranks2;
     if (skiller1.type === "physics") {
      ability1 = PM[ID1].A;
      ability2 = PM[ID2].B;
      ranks1 = rank[AR1].R;
      ranks2 = rank[BR2].R;
     } else {
      ability1 = PM[ID1].C;
      ability2 = PM[ID2].D;
      ranks1 = rank[CR1].R;
      ranks2 = rank[DR2].R;
     };
     if (F2 === "てんねん" && F1 !== "かたやぶり") {
      ranks1 = 1;
     };
     vitalpt = plushit1;
     if (skiller1.hyperhitrate === true) {
      vitalpt = 3;
     } else {
      if (skiller1.highhitrate === true) {
       vitalpt += 1;
      };
     };
     chaos = Math.random() * 100;
     if (chaos <= vital[vitalpt].R && (F2 !== "シェルアーマー" || F1 === "かたやぶり")) {
      chaosdp = true;
     };
     vitalpt = 0;
     if (weather === "sandstrom" && skiller2.type === "special" && (PM[ID2].bodytype1 === "じめん" || PM[ID2].bodytype1 === "いわ" || PM[ID2].bodytype2 === "じめん" || PM[ID2].bodytype2 === "いわ")) {
      weatherblock = 1.5;
     };
     if (weather === "snowy" && skiller1.type === "physics" && (PM[ID2].bodytype1 === "こおり" || PM[ID2].bodytype2 === "こおり")) {
      weatherblock = 1.5;
     };

      minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor((power * ability1 * calamity1 * ranks1) / (ability2 * weatherblock * calamity2 * ranks2))) / 50 + 2);

     skilltype = skiller1.skilltype;
     if (skiller1.wince === true && F2 !== "せいしんりょく") {
      chaos = Math.random() * 100;
      if (chaos <= 30) {
       wince2 = true;
      };
     };
     if (skiller1.punch === true && F1 === "てつのこぶし") {
      minus = Math.floor(minus / 10 * 12);
     };
     if (F2 === "もふもふ") {
      if (skiller1.direct === true) {
       minus = Math.floor(minus / 2);
      };
      if (skilltype === "ほのお") {
       minus = minus * 2;
      };
     };
     if (F2 === "くだけるよろい") {
      if (breakarmored2 === false) {
       if (skiller1.type === "physics") {
        breakarmor = true;
       };
      };
     };
     if (F1 === "むしのしらせ") {
      if (PM[ID1].HP <= PM[ID1].MHP / 3) {
       if (skilltype === "bug") {
        minus = Math.floor(minus / 2 * 3);
       };
      };
     };
     if (F1 === "もうか") {
      if (PM[ID1].HP <= PM[ID1].MHP / 3) {
       if (skilltype === "fire") {
        minus = Math.floor(minus / 2 * 3);
       };
      };
     };
     if (afterback2 === true) {
      minus = minus * 2;
     };
     if (F2 === "ねつこうかん") {
      if (skilltype === "fire") {
       heatchange = true;
      };
     };
     if (F2 === "マルチスケイル") {
      if (F1 !== "かたやぶり") {
       if (PM[ID2].HP === PM[ID2].MHP) {
        minus = Math.floor(minus / 2);
       };
      };
     };
     if (F2 === "ふゆう" && skilltype === "じめん") {
      flying2 = true;
     };
     if ((F1 === "リベロ" || F1 === "へんげんじざい") && formed1 !== true) {
      PM[ID1].bodytype1 = skilltype;
      PM[ID1].bodytype2 = null;
      formed1 = true;
      transform1 = true;
      Fdp11.style.visibility = "visible";
      Fdp12.style.visibility = "visible";
     };
     if (skiller1.direct === true || F1 === "かたいつめ") {
      minus = Math.floor(minus / 10 * 13);
     };
     if (F1 === "てきおうりょく" && (skilltype === PM[ID1].bodytype1 || skilltype === PM[ID1].bodytype2)) {
      minus = Math.floor(minus / 2 * 3);
     };
     if (weather === "sunny") {
      if (skilltype === "ほのお") {
       minus = Math.floor(minus / 2 * 3);
      };
      if (skilltype === "みず") {
       minus = Math.floor(minus / 2);
      };
     };
     if (weather === "rainy") {
      if (skilltype === "みず") {
       minus = Math.floor(minus / 2 * 3);
      };
      if (skilltype === "ほのお") {
       minus = Math.floor(minus / 2);
      };
     };
     if (field === "phycho") {
      if (skilltype === "エスパー") {
       minus = Math.floor(minus / 10 * 13);
      };
     };
     if (field === "elec") {
      if (skilltype === "でんき") {
       minus = Math.floor(minus / 10 * 13);
      };
     };
     if (field === "mist") {
      if (skilltype === "ドラゴン") {
       minus = Math.floor(minus / 2);
      };
     };
     if (skiller1.sunny === true && weather !== "sunny") {
      sunny = true;
     };
     if (skiller1.rainy === true && weather !== "rainy") {
      rainy = true;
     };
     if (skiller1.sandstrom === true && weather !== "sandstrom") {
      sandstrom = true;
     };
     if (skiller1.snowy === true && weather !== "snowy") {
      snowy = true;
     };
     if (skiller1.phycho === true && field !== "phycho") {
      phycho = true;
     };
     if (skiller1.elec === true && field !== "elec") {
      elec = true;
     };
     if (skiller1.mist === true && field !== "mist") {
      mist = true;
     };
     if (skiller1.grass === true && field !== "grass") {
      grass = true;
     };
     if (shield2 === true) {
      shielddp2 = true;
      minus = Math.floor(minus / 4);
     };
     if (skiller1.barrier === true && Obarrier1 !== true) {
      Obarrier1 = true;
      OBing1 = true;
     };
     if (F1 !== "すりぬけ" && Pbarrier2 === true && skiller1.type === "physics" && chaosdp !== true) {
      PBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F1 !== "すりぬけ" && Sbarrier2 === true && skiller1.type === "special" && chaosdp !== true) {
      SBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F1 !== "すりぬけ" && Obarrier2 === true && chaosdp !== true) {
      OBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F2 === "こおりのりんぷん" && skiller1.type === "special") {
      minus = Math.floor(minus / 2);
     };
     if (skiller1.nofield === true) {
      weather = "unknown";
      field = "unknown";
      Pbarrier2 = false;
      Sbarrier2 = false;
      Obarrier2 = false;
      weatherpt = 0;
      fieldpt = 0;
      PBpt2 = 0;
      SBpt2 = 0;
      OBpt2 = 0;
     };
     if (skiller1.AMH === true) {
      AMH = true;
     };
     if (F2 === "あついしぼう" && (skilltype === "ほのお" || skilltype === "こおり")) {
      minus = Math.floor(minus / 2);
     };
     if (chaosdp === true) {
      minus = Math.ceil(minus / 2 * 3);
     };
     shieldpt1 = 0;
     bodytype1 = PM[ID2].bodytype1;
     bodytype2 = PM[ID2].bodytype2;
     type();
    };
   } else {
    shieldpt1 = 0;
    alert(Pnameon2 +"の" + PN2 + "には当たらなかった…。");
    if (first === true) {
     last();
    } else {
     firsted = 1;
     if (PM[ID2].MAX === true) {
      PKCOMAX2(); 
     } else {
      PKCO2();
     };
    };
   };
  };
 };
}
function PKCOMAX2() {
 if (changer2 === true) {
  if (F1 === "バトルスイッチ" && PM[ID1].blade === false && skiller1.type !== "change") {
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   PM[ID1].img1 = PM[ID1].bladeform1;
   PK1.src = PM[ID1].img1;
  };
  if (first === true) {
   firsted = 1;
   if (PM[ID1].MAX === true) {
    PKCOMAX1();
   } else {
    PKCO1();
   };
  } else {
   last();
  };
 } else {
  if (skiller2.type === "change") {
   alert(PN2 + "は" + skiller2.name + "を使った！");
  } else {
   alert(PN2 + "！ " + skiller2.name + "！");
  };
  skiller = skiller2.name + "2";
  if (skiller2.type === "change") {
   chaos = Math.random() * 100;
   if (shield1 === true || MAXshield1 === true || chaos > shieldrate[shieldpt2].rate) {
    alert("しかし、うまく決まらなかった…。");
    shieldpt2 = 0;
   } else {
    alert(Pnameon2 + "の" + PN2 + "は守りの体制に入った！");
    shieldpt2 += 1;
    MAXshield2 = true;
   };
   setTimeout(seconddp,200);
  } else {
   if (secondattack1 !== true) {
    if (MAXshield1 === true && skiller2.MAXshieldbreak !== true) {
     alert(PN1 + "は攻撃から身を守った！");
     last();
    } else {
     let power = skiller2.power;
     let weatherblock = 1;
     let calamity1 = 1;
     let calamity2 = 1;
     let ability1;
     let ability2;
     let ranks1;
     let ranks2;
     if (skiller2.type === "physics") {
      ability1 = PM[ID2].A;
      ability2 = PM[ID1].B;
      ranks1 = rank[AR2].R;
      ranks2 = rank[BR1].R;
     } else {
      ability1 = PM[ID2].C;
      ability2 = PM[ID1].D;
      ranks1 = rank[CR2].R;
      ranks2 = rank[DR1].R;
     };
     if (F1 === "てんねん" && F1 !== "かたやぶり") {
      ranks1 = 1;
     };
     vitalpt = plushit1;
     if (skiller2.hyperhitrate === true) {
      vitalpt = 3;
     } else {
      if (skiller2.highhitrate === true) {
       vitalpt += 1;
      };
     };
     chaos = Math.random() * 100;
     if (chaos <= vital[vitalpt].R && (F1 !== "シェルアーマー" || F2 === "かたやぶり")) {
      chaosdp = true;
     };
     vitalpt = 0;
     if (weather === "sandstrom" && skiller1.type === "special" && (PM[ID1].bodytype1 === "じめん" || PM[ID1].bodytype1 === "いわ" || PM[ID1].bodytype2 === "じめん" || PM[ID1].bodytype2 === "いわ")) {
      weatherblock = 1.5;
     };
     if (weather === "snowy" && skiller2.type === "physics" && (PM[ID1].bodytype1 === "こおり" || PM[ID1].bodytype2 === "こおり")) {
      weatherblock = 1.5;
     };

      minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor((power * ability1 * calamity1 * ranks1) / (ability2 * weatherblock * calamity2 * ranks2))) / 50 + 2);

     skilltype = skiller2.skilltype;
     if (skiller2.wince === true && F1 !== "せいしんりょく") {
      chaos = Math.random() * 100;
      if (chaos <= 30) {
       wince1 = true;
      };
     };
     if (skiller2.punch === true && F2 === "てつのこぶし") {
      minus = Math.floor(minus / 10 * 12);
     };
     if (F1 === "もふもふ") {
      if (skiller2.direct === true) {
       minus = Math.floor(minus / 2);
      };
      if (skilltype === "ほのお") {
       minus = minus * 2;
      };
     };
     if (F1 === "くだけるよろい") {
      if (breakarmored1 === false) {
       if (skiller2.type === "physics") {
        breakarmor = true;
       };
      };
     };
     if (F2 === "むしのしらせ") {
      if (PM[ID2].HP <= PM[ID2].MHP / 3) {
       if (skilltype === "bug") {
        minus = Math.floor(minus / 2 * 3);
       };
      };
     };
     if (F2 === "もうか") {
      if (PM[ID2].HP <= PM[ID2].MHP / 3) {
       if (skilltype === "fire") {
        minus = Math.floor(minus / 2 * 3);
       };
      };
     };
     if (afterback1 === true) {
      minus = minus * 2;
     };
     if (F1 === "ねつこうかん") {
      if (skilltype === "fire") {
       heatchange = true;
      };
     };
     if (F1 === "マルチスケイル") {
      if (F2 !== "かたやぶり") {
       if (PM[ID1].HP === PM[ID1].MHP) {
        minus = Math.floor(minus / 2);
       };
      };
     };
     if (F1 === "ふゆう" && skilltype === "じめん") {
      flying1 = true;
     };
     if ((F2 === "リベロ" || F2 === "へんげんじざい") && formed2 !== true) {
      PM[ID2].bodytype1 = skilltype;
      PM[ID2].bodytype2 = null;
      formed2 = true;
      transform2 = true;
      Fdp21.style.visibility = "visible";
      Fdp22.style.visibility = "visible";
     };
     if (skiller2.direct === true || F2 === "かたいつめ") {
      minus = Math.floor(minus / 10 * 13);
     };
     if (F2 === "てきおうりょく" && (skilltype === PM[ID2].bodytype1 || skilltype === PM[ID2].bodytype2)) {
      minus = Math.floor(minus / 2 * 3);
     };
     if (weather === "sunny") {
      if (skilltype === "ほのお") {
       minus = Math.floor(minus / 2 * 3);
      };
      if (skilltype === "みず") {
       minus = Math.floor(minus / 2);
      };
     };
     if (weather === "rainy") {
      if (skilltype === "みず") {
       minus = Math.floor(minus / 2 * 3);
      };
      if (skilltype === "ほのお") {
       minus = Math.floor(minus / 2);
      };
     };
     if (skiller2.sunny === true && weather !== "sunny") {
      sunny = true;
     };
     if (skiller2.rainy === true && weather !== "rainy") {
      rainy = true;
     };
     if (skiller2.sandstrom === true && weather !== "sandstrom") {
      sandstrom = true;
     };
     if (skiller2.snowy === true && weather !== "snowy") {
      snowy = true;
     };
     if (skiller2.phycho === true && field !== "phycho") {
      phycho = true;
     };
     if (skiller2.elec === true && field !== "elec") {
      elec = true;
     };
     if (skiller2.mist === true && field !== "mist") {
      mist = true;
     };
     if (skiller2.grass === true && field !== "grass") {
      grass = true;
     };
     if (field === "phycho") {
      if (skilltype === "エスパー") {
       minus = Math.floor(minus / 10 * 13);
      };
     };
     if (field === "elec") {
      if (skilltype === "でんき") {
       minus = Math.floor(minus / 10 * 13);
      };
     };
     if (field === "mist") {
      if (skilltype === "ドラゴン") {
       minus = Math.floor(minus / 2);
      };
     };
     if (shield1 === true) {
      shielddp1 = true;
      minus = Math.floor(minus / 4);
     };
     if (skiller2.barrier === true && Obarrier2 !== true) {
      Obarrier2 = true;
      OBing2 = true;
     };
     if (F2 !== "すりぬけ" && Pbarrier1 === true && skiller2.type === "physics" && chaosdp !== true) {
      PBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F2 !== "すりぬけ" && Sbarrier1 === true && skiller2.type === "special" && chaosdp !== true) {
      SBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F2 !== "すりぬけ" && Obarrier1 === true && chaosdp !== true) {
      OBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F1 === "こおりのりんぷん" && skiller2.type === "special") {
      minus = Math.floor(minus / 2);
     };
     if (skiller2.nofield === true) {
      weather = "unknown";
      field = "unknown";
      Pbarrier1 = false;
      Sbarrier1 = false;
      Obarrier1 = false;
      weatherpt = 0;
      fieldpt = 0;
      PBpt1 = 0;
      SBpt1 = 0;
      OBpt1 = 0;
     };
     if (skiller2.AMH === true) {
      AMH = true;
     };
     if (skiller2.hyperhitrate === true) {
      hyperhitrate = true;
     };
     if (F1 === "あついしぼう" && (skilltype === "ほのお" || skilltype === "こおり")) {
      minus = Math.floor(minus / 2);
     };
     if (chaosdp === true) {
      minus = Math.ceil(minus / 2 * 3);
     };
     shieldpt2 = 0;
     bodytype1 = PM[ID1].bodytype1;
     bodytype2 = PM[ID1].bodytype2;
     type();
    };
   } else {
    shieldpt2 = 0;
    alert(Pnameon1 +"の" + PN1 + "には当たらなかった…。");
    if (first === true) {
     firsted = 1;
     if (PM[ID1].MAX === true) {
      PKCOMAX1();
     } else {
      PKCO1();
     };
    } else {
     last();
    };
   };
  };
 };
}