function skillclose1() {
 skill11.style.visibility = "hidden";
 skill12.style.visibility = "hidden";
 skill13.style.visibility = "hidden";
 skill14.style.visibility = "hidden";
 MGdp1.style.visibility = "hidden";
 MAXdp1.style.visibility = "hidden";
}
function skillclose2() {
 skill21.style.visibility = "hidden";
 skill22.style.visibility = "hidden";
 skill23.style.visibility = "hidden";
 skill24.style.visibility = "hidden";
 MGdp2.style.visibility = "hidden";
 MAXdp2.style.visibility = "hidden";
}
function skillopen1() {
 skill11.style.visibility = "visible";
 skill12.style.visibility = "visible";
 skill13.style.visibility = "visible";
 skill14.style.visibility = "visible";
 if (PM[ID1].mega === null && MGed1 === false) {
  MGdp1.style.visibility = "visible";
 };
 if (PM[ID1].MAX === null && MAXed1 === false) {
  MAXdp1.style.visibility = "visible";
 };
}
function skillopen2() {
 skill21.style.visibility = "visible";
 skill22.style.visibility = "visible";
 skill23.style.visibility = "visible";
 skill24.style.visibility = "visible";
 if (PM[ID2].mega === null && MGed2 === false) {
  MGdp2.style.visibility = "visible";
 };
 if (PM[ID2].MAX === null && MAXed2 === false) {
  MAXdp2.style.visibility = "visible";
 };
}
function changeclose1() {
 subPK1.style.visibility = "hidden";
 subPK2.style.visibility = "hidden";
 subPK3.style.visibility = "hidden";
}
function changeclose2() {
 subPK4.style.visibility = "hidden";
 subPK5.style.visibility = "hidden";
 subPK6.style.visibility = "hidden";
}
function changeopen1() {
 subPK1.style.visibility = "visible";
 subPK2.style.visibility = "visible";
 subPK3.style.visibility = "visible";
}
function changeopen2() {
 subPK4.style.visibility = "visible";
 subPK5.style.visibility = "visible";
 subPK6.style.visibility = "visible";
}