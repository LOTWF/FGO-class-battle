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
let curClass = 'sab';
function serv2Index(serv){
  switch (serv) {
    case 'sab':
      return 0;
      break;
    case 'lan':
      return 1;
      break;
    case 'arc':
      return 2;
      break;
    case 'cas':
      return 3;
      break;
    case 'ass':
      return 4;
      break;
    case 'rid':
      return 5;
      break;
    case 'ber':
      return 6;
      break;
    case 'rul':
      return 7;
      break;
    case 'ave':
      return 8;
        break;
    case 'moo':
      return 9;
      break;
    case 'alt':
      return 10;
      break;
    case 'for':
      return 11;
      break;
    default:
      return -1;
  }
}
function ind2Serv(ind){
  switch (ind) {
    case 0:
      return 'sab';
      break;
    case 1:
      return 'lan';
      break;
    case 2:
      return 'arc';
      break;
    case 3:
      return 'cas';
      break;
    case 4:
      return 'ass';
      break;
    case 5:
      return 'rid';
      break;
    case 6:
      return 'ber';
      break;
    case 7:
      return 'rul';
      break;
    case 8:
      return 'ave';
        break;
    case 9:
      return 'moo';
      break;
    case 10:
      return 'alt';
      break;
    case 11:
      return 'for';
      break;
    default:
      return 'nan';
  }
}

class player{
  constructor(){
    this.deck = new Array();
    this.curCost = 0;
    this.maxCost = parseInt(document.getElementById("maxCost").innerHTML,10);
    this.costhtml = document.getElementById("curCost");
  }
  addCard(card){
    this.deck.push(card);
    this.curCost += card.cost;
  }
  removeCard(card){
    for( var i = 0; i < this.deck.length; i++){
     if ( this.deck[i] === card) {
       this.deck.splice(i, 1);
     }
    }
    this.curCost -= card.cost;
  }
  selecter(card){
    if(this.deck.includes(card)==false){
      this.addCard(card);
    }
    else{
      this.removeCard(card);
    }
    costhtml.innerHTML = this.curCost.toString();
    if (this.curCost<= this.maxCost) {
      costhtml.style.color = 'white';
    }
    else {
      costhtml.style.color = 'red';
    }
  }
}
class viewSlot {
  constructor(pos, cardlist, pla){
    this.pos = pos;
    this.slot = document.getElementById("skin"+pos.toString());
    this.icon = document.getElementById("choiceIC"+pos.toString());
    this.cards = cardlist;
  }
  setSClass(sclass){
    if(this.cards[serv2Index(sclass)] != null){
      this.slot.style.display = 'inline-block';
      this.icon.src = 'images/'+sclass+this.pos+'.png';
      console.log(this.slot);
      this.slot.childNodes[3].childNodes[1].innerHTML = this.cards[serv2Index(sclass)].name;
      this.slot.childNodes[3].childNodes[3].innerHTML = 'Dmg:'+this.cards[serv2Index(sclass)].baseDmg.toString()+'   Cost:'+this.cards[serv2Index(sclass)].cost.toString();
    }
    else{
      this.slot.style.display = 'none';
    }
  }
}


class classSlot {
  constructor(serv){
    this.pos = serv;
    this.slot = document.getElementById(serv.toString());
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
    tiles[i].setSClass(curClass);
  }
}

function initCards(){
  var cardlist = new Array();
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 6; j++) {
      cardlist.push(new card(getId(i,j), ind2Serv(i), 2*(j+1), j+1, 'images/'+ind2Serv(i)+'s'+(j+1).toString()+'.png'));
    }
  }
  return cardlist;
}

function initViewSlots(cardlist,player){
  var viewslots = new Array();
  var cardSlotList = new Array();
  for (var i = 0; i < 6; i++) {
    cardSlotList=[];
    for (var j = 0; j < 12; j++) {
      cardSlotList.push(cardlist[j*6+i])
    }
    viewslots.push(new viewSlot('s'+(i+1).toString(), cardSlotList, player));
  }
  return viewslots;
}

function initViewSlots2(cardlist,player){
  var viewslots = new Array();
  for (var i = 0; i < 6; i++) {
    viewslots.push(new viewSlot('s'+(i+1).toString(), cardlist[i], player));
  }
  return viewslots;
}

function initClassSlots(){
  var classlist = new Array();
  for (var i = 0; i < 12; i++) {
    classlist.push(new classSlot(ind2Serv(i)))
  }
  return classlist;
}


function setskin(icon,choice){
  icon.src = "images/"+curClass+choice+".png";
}


function main(){
  //var cardlist = initCards();
  var cardlist = makeCards();
  var player1 = new player();
  console.log(cardlist);
  var viewslots = initViewSlots2(cardlist,player1);
  var classlist = initClassSlots();
  for (var i = 0; i < viewslots.length; i++) {
    viewslots[i].slot.addEventListener("click",function(){
      player1.selecter(viewslots[parseInt(this.id[this.id.length-1])-1].cards[serv2Index(curClass)]);
      console.log(this);
    });
  }
  for (var i = 0; i < classlist.length; i++) {
    classlist[i].slot.addEventListener("click",function(){
      curClass = classlist[serv2Index(this.id)].pos;
      refreshView(viewslots);
    });
  }
  document.getElementById('startGame').addEventListener("click",function(){
    window.location.href = "index.html";
  });
}
main();
