const body1 = document.getElementById("body1");
const body2 = document.getElementById("body2");
let Pnameon1 = null;
while (Pnameon1 === null || Pnameon1 === "") {
 Pnameon1 = prompt("あなたの名前は？");
}
localStorage.setItem("names1",Pnameon1);
let Pnameon2 = null;
while (Pnameon2 === null || Pnameon2 === "") {
 Pnameon2 = prompt("対戦相手の名前は？");
}
localStorage.setItem("names2",Pnameon2);
alert("ポケモンバトルの申請が完了しました。");
alert("まずはポケモンを決める方法を選択してください");
if ((Pnameon1 === "α" && Pnameon2 === "off") || (Pnameon2 === "α" && Pnameon1 === "off")) {
 window.location.href = "ポケモンクエスト選択().html"
}