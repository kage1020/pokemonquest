function PKCO2() {
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
  if (wince2 === true) {
   alert(PN2 + "はひるんで技が出せない！");
   last();
  } else {
   if (nosong2=== true && skiller2.song === true) {
    alert(PN2 + "はじこくづきの効果で技が出せない！");
    setTimeout(seconddp,200);
   } else {
    if (F2 === "バトルスイッチ" && PM[ID2].blade === true && skiller2.type === "change") {
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     PM[ID2].blade = false;
     PM[ID2].A = 70;
     PM[ID2].B = 160;
     PM[ID2].C = 70;
     PM[ID2].D = 160;
     alert("シールドフォルムチェンジ！");
    };
    if (F2 === "バトルスイッチ" && PM[ID2].blade === false && skiller2.type !== "change") {
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     PM[ID2].blade = true;
     PM[ID2].A = 160;
     PM[ID2].B = 70;
     PM[ID2].C = 160;
     PM[ID2].D = 70;
     alert("ブレードフォルムチェンジ！");
    };
    if (Wattack !== true) {
     alert(PN2 + "の" + skiller2.name + "!");
    };
    skiller = skiller2.name + "2";
    Wattack = false;
    if (field === "phycho" && firster2 === true && PM[ID1].bodytype1 !== "ひこう" && PM[ID1].bodytype2 !== "ひこう" && F1 !== "ふゆう") {
     alert(PN1 + "はサイコフィールドで守られている！");
     nodmg = true;
     setTimeout(seconddp,200);
    } else {
     if (skiller2.type === "change" && skiller2.mything === true) {
      if (skiller2.up === true) {
       if (skiller === "ソウルビート2") {
        if (PM[ID2].HP <= PM[ID2].MHP / 3) {
         alert("しかし、うまく決まらなかった…。");
         setTimeout(seconddp,200);
        } else {
         futurehp2 = PM[ID2].HP - Math.floor(PM[ID2].MHP / 3);
         setTimeout(dmganimation2,200);
        };
       } else {
        setTimeout(seconddp,200);
       };
      } else {
       if (skiller2.backwind === true) {
        alert(Pnameon2 + "側に追い風が吹き始めた");
        backwind2 = true;
        windrate2 = 2;
        setTimeout(seconddp,200);
       } else {
        if (skiller2.againheal === true) {
         PM[healID2].HP = Math.floor(PM[healID2].MHP / 2);
         diept2 += 1;
         PM[ID2].healout = true;
         alert(PM[healID2].name + "は元気を取り戻した！");
         alert(PM[healID2].name + "は回復して戦える");
         setTimeout(seconddp,200);
        } else {
         if (skiller2.un === true) {
          if (unspeed === true) {
           unspeed = false;
           unspeedpt = 0;
           alert(PN2 + "はゆがめられた時空をもとに戻した！");
          } else {
           unspeed = true;
           alert(PN2 + "は時空をゆがめた！");
          };
          setTimeout(seconddp,200);
         } else {
          if (skiller2.heal === true) {
           heal2 = true;
           PM[ID2].heal -= 1;
           if (PM[ID2].HP === PM[ID2].MHP) {
            alert("しかし、" + PN2 + "は体力が満タンだ！");
            setTimeout(dp2,200);
           } else {
            futurehp2 = PM[ID2].HP + Math.floor(PM[ID2].MHP / 2);
            if (futurehp2 > PM[ID2].MHP) {
             futurehp2 = PM[ID2].MHP;
            };
            healdp2 = true;
            if (skiller2.name === "はねやすめ") {
             skyoff2 = true;
             PM[ID2].bodytype2 = "null";
            };
            if (skiller2.egg === true) {
             if (AR2 < 6) {
              AR2 = 6;
             };
             if (BR2 < 6) {
              BR2 = 6;
             };
             if (CR2 < 6) {
              CR2 = 6;
             };
             if (DR2 < 6) {
              DR2 = 6;
             };
             if (SR2 < 6) {
              SR2 = 6;
             };
            };
            setTimeout(grow2,500);
           };
          } else {
           if (skiller2.barrier === true) {
            if (skiller2.Pbarrier === true) {
             if (Pbarrier2 === true) {
              alert("しかし、うまく決まらなかった…。");
             } else {
              Pbarrier2 = true;
              PBing2 = true;
             };
            };
            if (skiller2.Sbarrier === true) {
             if (Sbarrier2 === true) {
              alert("しかし、うまく決まらなかった…。");
             } else {
              Sbarrier2 = true;
              SBing2 = true;
             };
            };
            setTimeout(dp2,200);
           } else {
            if (skiller2.drum === true) {
             if (PM[ID2].HP <= Math.ceil(PM[ID2].MHP / 2)) {
              alert("しかし、うまく決まらなかった…。");
              setTimeout(seconddp,200);
             } else {
              if (AR2 === 12) {
               alert(PN2 + "のこうげきはもう上がらない！");
               setTimeout(seconddp,200);
              } else {
               drum = true;
               AR2 = 12;
               ARdp2.innerHTML = rank[AR2].dp;
               futurehp2 = Math.floor(PM[ID2].HP - PM[ID2].MHP / 2);
               setTimeout(dmganimation2,200);
              };
             };
            } else {
             if (skiller2.shield === true) {
              chaos = Math.random() * 100;
              if (shield1 === true || MAXshield1 === true || chaos > shieldrate[shieldpt2].rate) {
               alert("しかし、うまく決まらなかった…。");
               shieldpt2 = 0;
              } else {
               alert(Pnameon2 + "の" + PN2 + "は守りの体制に入った！");
               shieldpt2 += 1;
               shield2 = true;
              };
              setTimeout(seconddp,200);
             };
            };
           };
          };
         };
        };
       };
      };
     } else {
      if (skiller2.secondattack === true && secondattack2 === false) {
       secondattack2 = true;
       if (skiller === "ゴーストダイブ2") {
        alert(PN2 + "はどこかへ消えてしまった。");
        PK2.style.visibility = "hidden";
        setTimeout(seconddp,200);
       };
       if (skiller === "ソーラービーム2") {
        alert(PN2 + "は光を吸収した！");
        if (weather === "sunny") {
         Wattack = true;
         setTimeout(PKCO2,200);
        } else {
         setTimeout(seconddp,200);
        };
       };
      } else {
       let hitrate = 0;
       chaos = Math.random() * 100;
       hitrate = skiller2.hitrate;
       if (weather === "sunny" && skiller2.name === "ぼうふう") {
        hitrate = 50;
       };
       if (F1 === "すながくれ" && weather === "sandstrom") {
        hitrate = Math.floor(hitrate / 5 * 4);
       };
       if ((chaos <= hitrate || F1 === "ノーガード" || F2 === "ノーガード" || (weather === "rainy" && (skiller2.name === "かみなり" || skiller2.name === "ぼうふう")) || (weather === "hail" && skiller2.name === "ふぶき")) && secondattack1 !== true) {
        if ((shield1 === true || MAXshield1 === true) && skiller2.shieldbreak !== true && (skiller2.direct !== true || F2 !== "ふかしのこぶし")) {
         alert(PN1 + "は攻撃から身を守った！");
         if (skiller2.reaction === true) {
          reaction2 = true;
          minus = Math.floor(PM[ID2].MHP / 2);
          if (PM[ID2].HP < minus) {
           minus = PM[ID2].HP;
          };
          futurehp2 = PM[ID2].HP - minus;
          setTimeout(dmganimation2,200);
         } else {
          last();
         };
        } else {
         if (skiller2.type === "change") {
          if (skiller2.putgift === true) {
           suicide2 = true;
           futurehp2 = 0;
           setTimeout(dmganimation2,200);
          } else {
           if (skiller2.halves === true) {
            futurehp1 = Math.floor((PM[ID1].HP + PM[ID2].HP) / 2);
            futurehp2 = futurehp1;
            if (futurehp1 > PM[ID1].MHP) {
             futurehp1 = PM[ID1].MHP;
            };
            if (futurehp2 > PM[ID2].MHP) {
             futurehp2 = PM[ID2].MHP;
            };
            setTimeout(bothgrowcontract,300);
           } else {
            if (skiller2.obsessed === true) {
             let subminus;
             subminus = PM[ID1].HP - PM[ID2].HP;
             if (subminus <= 0) {
              subminus = 0;
             };
             futurehp1 = PM[ID1].HP - subminus;
             if (PM[ID1].bodytype1 === "ゴースト" || PM[ID1].bodytype2 === "ゴースト") {
              dmg = 4;
              futurehp1 = PM[ID1].HP;
             };
             setTimeout(dmganimation1,200);
            } else {
             if (skiller2.onekill === true) {
              if (PM[ID1].MAX === true) {
               alert(PN1 + "には効果がないようだ…。");
               setTimeout(seconddp,200);
              } else {
               if (F1 === "がんじょう" || (skiller2.name === "じわれ" && F1 === "ふゆう")) {
                onekilloff1 = true;
                Fdp11.style.visibility = "visible";
                Fdp12.style.visibility = "visible";
                setTimeout(dp2,200);
               } else {
                if (skiller2.name === "じわれ" && (PM[ID1].bodytype1 === "ひこう" || PM[ID1].bodytype2 === "ひこう")) {
                 alert(PN1 + "には効果がないようだ…。");
                 setTimeout(seconddp,200);
                } else {
                 futurehp1 = 0;
                 onekilloff1 = true;
                 setTimeout(dmganimation1,200);
                };
               };
              };
             } else {
              if (skiller2.sleepy === true) {
               if (abnormal1 === "sleepy") {
                alert(PN1 + "はすでに眠っている！");
                setTimeout(seconddp,200);
               } else {
                alert("しかし、うまく決まらなかった…。");
                setTimeout(seconddp,200);
               };
              } else {
               if (skiller2.halflockdmg === true) {
                futurehp1 = Math.floor(PM[ID1].HP / 2);
                setTimeout(dmganimation1,200);
               };
              };
             };
            };
           };
          };
         } else {
          if (PM[ID2].lightout === true && skiller === "でんこうそうげき2") {
           alert("しかし、うまく決まらなかった");
           setTimeout(seconddp,200);
          } else {
           let power = skiller2.power;
           let weatherblock = 1;
           let calamity1 = 1;
           let calamity2 = 1;
           let ability1;
           let ability2;
           let ranks1;
           let ranks2;
           if (skiller2.type === "heavy" || skiller2.type === "angry" || skiller2.type === "vitalpoint" || skiller2.type === "bodypress" || skiller2.type === "physics") {
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
           if (skiller2.type === "heavy" || skiller2.type === "assist" || skiller2.type === "angry" || skiller2.type === "vitalpoint" || skiller2.type === "bodypress" || skiller2.type === "specialblock" || skiller2.type === "hpboost") {
            if (skiller2.type === "heavy") {
             if (PM[ID1].heavy < 10) {
              power = 20;
             } else {
              if (PM[ID1].heavy < 25) {
               power = 40;
              } else {
               if (PM[ID1].heavy < 50) {
                power = 60;
               } else {
                if (PM[ID1].heavy < 100) {
                 power = 80;
                } else {
                 if (PM[ID1].heavy < 200) {
                  power = 100;
                 } else {
                  power = 120;
                 };
                };
               };
              };
             };
            } else {
             if (skiller2.type === "assist") {
              let AS = AR2 + BR2 + CR2 + DR2 + SR2 - 30;
              if (AS < 0) {
               AS = 0;
              };
              power = skiller2.power + 20 * AS;
             } else {
              if (skiller2.type === "angry") {
               power = skiller2.power + 50 * PM[ID2].done;
              } else {
               if (skiller2.type === "vitalpoint") {
                if (AR2 <= 5) {
                 ranks1 = 1;
                };
                if (BR1 > 6) {
                 ranks2 = 1;
                }
               } else {
                if (skiller2.type === "bodypress") {
                 ability1 = PM[ID2].B;
                 ranks1 = rank[BR2].R;
                } else {
                 if (skiller2.type === "specialblock") {
                  ability2 = PM[ID1].B;
                  ranks2 = rank[BR1].R;
                 } else {
                  if (skiller2.type === "hpboost") {
                   power = Math.ceil(150 * PM[ID2].HP / PM[ID2].MHP);
                  };
                 };
                };
               };
              };
             };
            };
           };
           if (F1 === "てんねん" && F2 !== "かたやぶり") {
            ranks1 = 1;
           };
           if (F2 === "てんねん" || skiller2.noR === true) {
            ranks2 = 1;
           };
           vitalpt = plushit2;
           if (skiller2.highrate === true) {
            vitalpt += 1;
           };
           if (skiller2.hyperhitrate === true) {
            vitalpt += 3;
           };
           chaos = Math.random() * 100;
           if (chaos <= vital[vitalpt].R && (F1 !== "シェルアーマー" || F2 === "かたやぶり")) {
            chaosdp = true;
            if (ranks1 < 1) {
             ranks1 = 1;
            };
            if (ranks2 > 1) {
             ranks2 = 1;
            };
           };
           vitalpt = 0;
           if (F2 === "わざわいのつるぎ") {
            calamity2 = 0.75;
           };
           if (F2 === "わざわいのたま") {
            calamity2 = 0.75;
           };
           if (weather === "sandstrom" && (skiller2.type === "special" || skiller2.type === "assist") && (PM[ID1].bodytype1 === "じめん" || PM[ID1].bodytype1 === "いわ" || PM[ID1].bodytype2 === "じめん" || PM[ID1].bodytype2 === "いわ")) {
            weatherblock = 1.5;
           };
           if (weather === "snowy" && (skiller2.type === "heavy" || skiller2.type === "angry" || skiller2.type === "vitalpoint" || skiller2.type === "bodypress" || skiller2.type === "physics") && (PM[ID1].bodytype1 === "こおり" || PM[ID1].bodytype2 === "こおり")) {
            weatherblock = 1.5;
           };
           
           minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor((power * ability1 * calamity1 * ranks1) / (ability2 * weatherblock * calamity2 * ranks2))) / 50 + 2);
           
           if (skiller2.wince === true && F1 !== "せいしんりょく") {
            chaos = Math.random() * 100;
            if (F2 === "てんのめぐみ") {
             blessing = 2;
            };
            if (chaos <= (30 * blessing)) {
             wince1 = true;
            };
            blessing = 1;
           };
           if (skiller2.wince2 === true && F1 !== "せいしんりょく") {
            chaos = Math.random() * 100;
            if (F2 === "てんのめぐみ") {
             blessing = 2;
            };
            if (chaos <= (20 * blessing)) {
             wince1 = true;
            };
            blessing = 1;
           };
           if (F2 === "あくしゅう" && F1 !== "せいしんりょく" && wince1 !== true) {
            chaos = Math.random() * 100;
            if (chaos <= 10) {
             wince1 = true;
            };
           };
           if (skiller2.highrate === true) {
            highhitrate = true;
           };
           if (skiller2.hyperhitrate === true) {
            hyperhitrate = true;
           };
           skilltype = skiller2.skilltype;
           if (skilltype === "ノーマル" && F2 === "フェアリースキン") {
            skilltype = "フェアリー";
            minus = Math.floor(minus / 10 * 13);
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
             if (skiller2.type === "physics" || skiller2.type === "angry" || skiller2.type === "heavy" || skiller2.type === "bodypress") {
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
           if (skiller2.AH === true) {
            AH = true;
           };
           if (skiller2.AH2 === true) {
            AH2 = true;
           };
           if (afterback2 === true) {
            afterback2 = false;
           };
           if (afterback1 === true) {
            minus = minus * 2;
           };
           if (skiller2.afterback === true) {
            afterback2 = true;
           };
           if (F1 === "ねつこうかん") {
            if (skilltype === "ほのお") {
             heatchange = true;
            };
           };
           if (skiller2.CR1h === true) {
            chaos = Math.random() * 100;
            if (chaos <= 50) {
             CR1h2 = true;
            };
           };
           if (skiller2.Wattack === true) {
            WApt += 1;
            if (Wattacked === false) {
             Wattack = true;
            };
           };
           if (F1 === "マルチスケイル") {
            if (F2 !== "かたやぶり") {
             if (PM[ID1].HP === PM[ID1].MHP) {
              minus = Math.floor(minus / 2);
             };
            };
           };
           recoil2 = false;
           if (skiller2.recoil === true) {
            recoil2 = true;
           };
           if (F1 === "ふゆう" && skilltype === "じめん" && F2 !== "かたやぶり") {
            flying1 = true;
           };
           if (skiller === "でんこうそうげき2") {
            PM[ID2].lightout = true;
            PM[ID2].bodytype2 = "null";
           };
           if ((F2 === "リベロ" || F2 === "へんげんじざい") && formed2 !== true) {
            PM[ID2].bodytype1 = skilltype;
            PM[ID2].bodytype2 = null;
            formed2 = true;
            transform2 = true;
            Fdp21.style.visibility = "visible";
            Fdp22.style.visibility = "visible";
           };
           if (skiller2.direct === true || F2 === "かたいツメ") {
            minus = Math.floor(minus / 10 * 13);
           };
           if (skiller2.AR1two === true) {
            chaos = Math.random() * 100;
            if (chaos <= 20) {
             AR1five2 = true;
            };
           };
           if (snowdown2 === true) {
            snowdown2 = false;
            minus = minus * 2;
           };
           if (skiller1.snowdown === true) {
            snowdown1 = true;
           };
           if (F2 === "てきおうりょく" && (skilltype === PM[ID2].bodytype1 || skilltype === PM[ID2].bodytype2)) {
            minus = Math.floor(minus / 2 * 3);
           };
           if (F2 === "トランジスタ" && skilltype === "でんき") {
            minus = Math.floor(minus / 2 * 3);
           };
           if (F2 === "りゅうのあぎと" && skilltype === "ドラゴン") {
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
            if (skiller2.force === true) {
             minus = Math.floor(minus / 2 * 3);
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
           if (skiller2.name === "かわらわり" && (Pbarrier1 === true || Sbarrier1 === true || Obarrier1 === true)) {
            if (Pbarrier1 === true) {
             breakPB1 = true;
             Pbarrier1 = false;
             PBpt1 = 0;
            };
            if (Sbarrier1 === true) {
             breakSB1 = true;
             Sbarrier1 = false;
             SBpt1 = 0;
            };
            if (Obarrier1 === true) {
             breakOB1 = true;
             Obarrier1 = false;
             OBpt1 = 0;
            };
           } else {
            if (F2 !== "すりぬけ" && Pbarrier1 === true && (skiller2.type === "physics" || skiller2.type === "angry" || skiller2.type === "heavy" || skiller2.type === "bodypress") && chaosdp !== true) {
             PBed = true;
             minus = Math.floor(minus / 2);
            };
            if (F2 !== "すりぬけ" && Sbarrier1 === true && (skiller2.type === "special" || skiller2.type === "assist" || skiller2.type === "specialblock") && chaosdp !== true) {
             SBed = true;
             minus = Math.floor(minus / 2);
            };
            if (F2 !== "すりぬけ" && Obarrier1 === true && chaosdp !== true) {
             OBed = true;
             minus = Math.floor(minus / 2);
            };
           };
           if (F2 === "テクニシャン" && skiller2.power <= 60) {
            minus = Math.floor(minus / 2 * 3);
           };
           if (F2 === "ちからもち" && (skiller2.type === "physics" || skiller2.type === "heavy" || skiller2.type === "bodypress")) {
            minus = minus * 2;
           };
           if (secondattack2 === true) {
            secondattack2 = false;
            PK2.style.visibility = "visible";
           };
           if (skiller2.reset === true) {
            if (PM[ID1].bodytype1 !== "はがね" && PM[ID1].bodytype2 !== "はがね") {
             smog = true;
             AR1 = 6;
             BR1 = 6;
             CR1 = 6;
             DR1 = 6;
             SR1 = 6;
             ARdp1.innerHTML = rank[AR1].dp;
             BRdp1.innerHTML = rank[BR1].dp;
             CRdp1.innerHTML = rank[CR1].dp;
             DRdp1.innerHTML = rank[DR1].dp;
             SRdp1.innerHTML = rank[SR1].dp;
            };
           };
           if (F1 === "こおりのりんぷん" && (skiller2.type === "special" || skiller2.type === "assist" || skiller2.type === "specialblock")) {
            minus = Math.floor(minus / 2);
           };
           if (F2 === "きれあじ" && skiller2.slice === true) {
            minus = Math.floor(minus / 2 * 3);
           };
           if (skiller2.nosong === true) {
            nosongpt1 = 0;
            nosong1 = true;
           };
           if (F1 === "あついしぼう" && (skilltype === "ほのお" || skilltype === "こおり")) {
            minus = Math.floor(minus / 2);
           };
           if (F2 === "すなのちから" && (skilltype === "じめん" || skilltype === "いわ" || skilltype === "はがね") && weather === "sandstrom") {
            minus = Math.floor(minus / 10 * 13);
           };
           if (first === false && skiller2.name === "しっぺがえし") {
            minus = minus * 2;
           };
           if (skiller === "ライジングボルト2" && field === "elec") {
            minus = minus * 2;
           };
           if (skiller === "ソーラービーム2" && (weather === "rainy" || weather === "sandstrom" || weather === "snowy")) {
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
         };
        };
       } else {
        if (Wattack === true) {
         PKCO2();
        } else {
         shieldpt2 = 0;
         alert(Pnameon1 +"の" + PN1 + "には当たらなかった…。");
         if (skiller2.reaction === true) {
          reaction2 = true;
          minus = Math.floor(PM[ID2].MHP / 2);
          if (PM[ID2].HP < minus) {
           minus = PM[ID2].HP;
          };
          futurehp2 = PM[ID2].HP - minus;
          setTimeout(dmganimation2,200);
         } else {
          if (secondattack2 === true) {
           secondattack2 = false;
           PK2.style.visibility = "visible";
          };
          if (first === true) {
           firsted = 1;
           if (PM[ID1].MAX === true) {
            setTimeout(PKCOMAX1,100);
           } else {
            setTimeout(PKCO1,100);
           };
          } else {
           last();
          };
         };
        };
       };
      };
     };
    };
   };
  };
 };
}