//let sabpath = document.getElementById("sabimg").innerHTML;
//let lanpath = document.getElementById("lanimg").innerHTML;
//let arcpath = document.getElementById("arcimg").innerHTML;
//let caspath = document.getElementById("casimg").innerHTML;
//let ridpath = document.getElementById("ridimg").innerHTML;
//let asspath = document.getElementById("assimg").innerHTML;
//let berpath = document.getElementById("berimg").innerHTML;
//let moopath = document.getElementById("mooimg").innerHTML;
//let avepath = document.getElementById("aveimg").innerHTML;
//let rulpath = document.getElementById("rulimg").innerHTML;
//let forpath = document.getElementById("forimg").innerHTML;
//let altpath = document.getElementById("altimg").innerHTML;

var cAff2 = {sab:['lan','ber'],lan:['ber','arc'],arc:['sab,ber'],cas:['ass','ber'],ass:['rid','arc'],ber:[],rid:['cas,ber'],moo:['ber','ave'],for:['for','ber'],ave:['ber','rul'],rul:['moo','ber'],alt:['for']};
var cAff05 = {sab:['arc','rul'],lan:['sab','rul'],arc:['lan','rul'],cas:['rid','rul'],ass:['cas','rul'],rid:['ass','rul'],ber:['for'],alt:['sab','lan','arc'],for:['alt'],rul:['ave'],moo:['rul'],ave:['moo']};
var cAff15 = {sab:[],lan:[],arc:[],cas:[],ass:[],rid:[],ber:['sab','lan','arc','rul','ave','cas','rid','ass','ber','moo','alt'],rul:[],ave:[],moo:[],alt:['cas','rid','ass'],for:[]};
function classAff(c1,c2){
  var a1 = 1;
  var a2 = 1;
  console.log(c1,c2);
  if (cAff2[c1].includes(c2)){
    a1 = 2;
  }
  else if (cAff05[c1].includes(c2)) {
    a1 = 0.5;
  }
  else if (cAff15[c1].includes(c2)) {
    a1 = 1.5;
  }
  if (cAff2[c2].includes(c1)){
    a2 = 2;
  }
  else if (cAff05[c2].includes(c1)) {
    a2 = 0.5;
  }
  else if (cAff15[c2].includes(c1)) {
    a2 = 1.5;
  }
  return [a1,a2];
}
function initHand(deck) {
  var hand = new Array();
  var i = deck.length,
      j = 0,
      temp;

      while (i--) {

          j = Math.floor(Math.random() * (i+1));

          // swap randomly chosen element with current element
          temp = deck[i];
          deck[i] = deck[j];
          deck[j] = temp;

      }
      for (var i = 0; i < 4; i++) {
        hand.push(deck.pop());
      }
      return [deck,hand];
}
class player{
  constructor(InDeck,name,hp){
    this.name = name;
    this.playicon = document.getElementById(name+'img');
    var x = initHand(InDeck);
    this.deck = x[0];
    this.hand = x[1];
    this.hp = hp;
    this.scoreHTML = document.getElementById(name+'-score');
    this.scoreHTML.innerHTML = hp.toString();
  }
  draw(){
    this.hand.push(this.deck.pop());
  }
  play(n){
    console.log(n);
    this.playicon.src = this.hand[n].icon;
    var played = this.hand[n];
    this.hand.splice(n,1);
    this.draw();
    return played;
  }
}

class viewSlot {
  constructor(pos, pla){
    this.pos = pos;
    this.player = pla;
    this.slot = document.getElementById(pla.name+"hand"+pos.toString());
    this.icon = document.getElementById(pla.name+"IC"+pos.toString());
  }
  setSClass(){
    if(this.player.hand[this.pos] != null && this.player.hand[this.pos] != undefined){
      this.slot.style.display = 'inline-block';
      if (this.player.name == 'pc') {
        this.icon.src = this.player.hand[this.pos].back;
      }
      else {
         this.icon.src = this.player.hand[this.pos].icon;
         this.slot.childNodes[3].childNodes[1].innerHTML = this.player.hand[this.pos].name;
         this.slot.childNodes[3].childNodes[3].innerHTML = 'Dmg:'+this.player.hand[this.pos].baseDmg.toString();
      }
    }
    else{
      this.slot.style.display = 'none';
    }
  }
}


const costhtml = document.getElementById("curCost");
const playerIcon = document.getElementById("playerimg");
const pcIcon = document.getElementById("pcimg");
const scoreboard_div = document.querySelector(".scoreboard");
const results_div = document.getElementById("res");
function getId(i,j){
  return (i+1)*6+(j);
}

function refreshView(tiles){
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].setSClass();
  }
}

function initViewSlots2(player){
  var viewslots = new Array();
  for (var i = 0; i < 4; i++) {
    viewslots.push(new viewSlot(i, player[0]));
  }
  for (var i = 0; i < 4; i++) {
    viewslots.push(new viewSlot(i, player[1]));
  }
  return viewslots;
}

function game(players,hands){
  var x,y;
  x = players[0].play(hands[0]);
  y = players[1].play(hands[1]);
  atkmods = classAff(x.serv,y.serv);
  results_div.innerHTML = 'You deal ' + (atkmods[1] * y.baseDmg).toString() + ' damage and take ' + (atkmods[0] * x.baseDmg).toString() + 'damage';
  players[0].scoreHTML.innerHTML = (parseInt(players[0].scoreHTML.innerHTML) - (atkmods[1] * y.baseDmg)).toString();
  players[1].scoreHTML.innerHTML = (parseInt(players[1].scoreHTML.innerHTML) - (atkmods[0] * x.baseDmg)).toString();
  console.log(players[1].hand,players[1].hand.every(element => element == null));
  if (players[0].hand.every(element => element == null) || parseInt(players[0].scoreHTML.innerHTML)<=0) {
    window.localStorage.setItem('costxp',(parseInt(window.localStorage.getItem('costxp')) + parseInt(window.localStorage.getItem('difficulty'))));
    window.location.href = "win.html";
  }
  if (players[1].hand.every(element => element == null) || parseInt(players[1].scoreHTML.innerHTML)<=0){
    window.localStorage.setItem('costxp',(parseInt(window.localStorage.getItem('costxp'))-1));
    window.location.href = "lose.html";
  }
}


function main(){
  //var cardlist = initCards();
  console.log(window.localStorage.getItem('difficulty'));
  var player1 = new player(JSON.parse(window.localStorage.getItem("player1")),'pl',50);
  var player0 = new player(get_defaultdecks(2),'pc',(parseInt(window.localStorage.getItem('difficulty'))+1)*20);
  var viewslots = initViewSlots2([player0,player1]);
  for (var i = 4; i < viewslots.length; i++) {
    viewslots[i].slot.addEventListener("click",function(){
      refreshView(viewslots);
      game([player0,player1],[Math.floor(Math.random()*4),parseInt(this.id[this.id.length-1])]);
      console.log(player1.hand);
      refreshView(viewslots);
      console.log();
    });
  }
  refreshView(viewslots);
  }
main();
