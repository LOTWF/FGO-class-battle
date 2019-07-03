let curClass="sab";
let playerHp = 100;
let pcHp = 100;
const baseAtk =10;
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
class skin {
  constructor(number, name){
    this.slot = document.getElementById("skin"+number.toString());
    this.source = 'images/'+name+number.toString();
    this.icon = document.getElementById("choiceIC"+number.toString());
  }
  setSource(){
    this.icon.src = this.source;
  }
}
class servant{
  constructor(name,weak,moderate,strong) {
    this.name = name;
    this.slot = document.getElementById(name);
    this.icon = document.getElementById(name+"IC");
    this.weak = weak;
    this.baseDmg = 10;
    this.weakDmg = 0.5;
    this.moderateDmg=1.5;
    this.strongDmg=2;
    this.moderate = moderate;
    this.strong = strong;
    this.skins = new Array();
    this.skins.push(new skin("def",name));
    this.skins.push(new skin("s1",name));
    this.skins.push(new skin("s2",name));
    this.skins.push(new skin("s3",name));
    this.slot.addEventListener("click",function(){
      this.skinchoiceUpdate();
      game(this.name);
    })
    this.skin[0].
  }
  skinchoiceUpdate(){
    for(i = 0; i < skins.length; i++) {
      skins[i].setSource();
    }
  }
  play(opponent){
    if (weak.indexOf(opponent) >= 0) {
      return weakDmg*baseDmg;
    }
    else if (moderate.indexOf(opponent) >= 0) {
      return moderateDmg*baseDmg;
    }
    else if (strong.indexOf(opponent) >= 0) {
      return strongDmg*baseDmg;
    }
    else {
      return baseDmg;
    }
  }
}

const playerHp_span = document.getElementById("player-score");
const pcHp_span = document.getElementById("pc-score");
const playerIcon = document.getElementById("playerimg");
const pcIcon = document.getElementById("pcimg");
const scoreboard_div = document.querySelector(".scoreboard");
const results_div = document.getElementById("res");

function initClasses(){
  var sab = new servant('sab',['arc','rul'],['none'],['lan','ber']);
  var lan = new servant('lan',['sab','rul'],['none'],['arc','ber']);
  var arc = new servant('arc',['lan','rul'],['none'],['sab','ber']);
  var cas = new servant('cas',['rid','rul'],['none'],['ass','ber']);
  var rid = new servant('rid',['ass','rul'],['none'],['cas','ber']);
  var ass = new servant('ass',['cas','rul'],['none'],['rid','ber']);
  var ber = new servant('ber',['for'],['sab','lan','arc','cas','ass','ber','rid','alt','moo','ave','rul'],['none']);
  var rul = new servant('rul',['ave'],['none'],['moo','ber']);
  var ave = new servant('ave',['moo'],['none'],['rul','ber']);
  var moo = new servant('moo',['rul'],['none'],['ave','ber']);
  var alt = new servant('alt',['sab','arc','lan'],['ass','cas','rid'],['for','ber']);
  var for = new servant('for',['alt'],['none'],['for','ber']);
  var classlist = new Array(sab,lan,arc,cas,ass,rid,ber,rul,ave,moo,for,alt);
  return classlist;
}

function getPcChoice(choices){
  const ranchoice = Math.floor(Math.random() * classlist.length);
  return choices[ranchoice];
}

function getresultstr(mod1,mod2){
    return "You deal "+mod1.toString()+" damage and take "+mod2.toString()+" damage"
}

function game(choice,classlist){
  const pcChoice = getPcChoice(classlist);
  const mult1 = choice.play(pcChoice.name);
  const mult2 = pcChoice.play(choice.name);
  playerHp = playerHp - mult2;
  pcHp = pcHp - mult1;
  pcHp_span.innerHTML = pcHp;
  playerHp_span.innerHTML = playerHp;
  results_div.innerHTML = getresultstr(mult1, mult2);
  pcimg.src = pcChoice.icon.src;
  playerimg.src = choice.icon.src;
}

function setskin(icon,choice){
  icon.src = "images/"+curClass+choice+".png";
}

function updateSkinList() {
  choiceICdef.src = "images/"+curClass+"def.png";
  choiceICs1.src = "images/"+curClass+"s1.png";
  choiceICs2.src = "images/"+curClass+"s2.png";
  choiceICs3.src = "images/"+curClass+"s3.png";
}

function initSkinlist(){
  var skins = new Array();
  skins.push(new skin("def",name));
  skins.push(new skin("s1",name));
  skins.push(new skin("s2",name));
  skins.push(new skin("s3",name));
  return skins;
}

function main(){
  servants = initClasses();
  skins = initSkinlist();
  skindef_div.addEventListener("click",function(){
  switch (curClass) {
    case "sab":
      setskin(sabicon,"def");
      break;
    case "lan":
      setskin(lanicon,"def");
      break;
    case "arc":
      setskin(arcicon,"def");
      break;
    case "cas":
      setskin(casicon,"def");
      break;
    case "ass":
      setskin(assicon,"def");
      break;
    case "rid":
      setskin(ridicon,"def");
      break;
    case "ber":
      setskin(bericon,"def");
      break;
    case "rul":
      setskin(rulicon,"def");
      break;
    case "ave":
      setskin(aveicon,"def");
      break;
    case "moo":
      setskin(mooicon,"def");
      break;
    case "alt":
      setskin(alticon,"def");
      break;
    case "for":
      setskin(foricon,"def");
      break;
    default:
      setskin(sabicon,"def");
  }
})

skins1_div.addEventListener("click",function(){
  switch (curClass) {
    case "sab":
      setskin(sabicon,"s1");
      break;
    case "lan":
      setskin(lanicon,"s1");
      break;
    case "arc":
      setskin(arcicon,"s1");
      break;
    case "cas":
      setskin(casicon,"s1");
      break;
    case "ass":
      setskin(assicon,"s1");
      break;
    case "rid":
      setskin(ridicon,"s1");
      break;
    case "ber":
      setskin(bericon,"s1");
      break;
    case "rul":
      setskin(rulicon,"s1");
      break;
    case "ave":
      setskin(aveicon,"s1");
      break;
    case "moo":
      setskin(mooicon,"s1");
      break;
    case "alt":
      setskin(alticon,"s1");
      break;
    case "for":
      setskin(foricon,"s1");
      break;
    default:
      setskin(sabicon,"s1");
  }
})

skin2_div.addEventListener("click",function(){
  switch(curClass){
  case "sab":
    setskin(sabicon,"s2");
    break;
  case "lan":
    setskin(lanicon,"s2");
    break;
  case "arc":
    setskin(arcicon,"s2");
    break;
  case "cas":
    setskin(casicon,"s2");
    break;
  case "ass":
    setskin(assicon,"s2");
    break;
  case "rid":
    setskin(ridicon,"s2");
    break;
  case "ber":
    setskin(bericon,"s2");
    break;
  case "rul":
    setskin(rulicon,"s2");
    break;
  case "ave":
    setskin(aveicon,"s2");
    break;
  case "moo":
    setskin(mooicon,"s2");
    break;
  case "alt":
    setskin(alticon,"s2");
    break;
  case "for":
    setskin(foricon,"s2");
    break;
  default:
    setskin(sabicon,"s2");
}
  })
skin3_div.addEventListener("click",function(){
    switch(curClass){
  case "sab":
    setskin(sabicon,"s3");
    break;
  case "lan":
    setskin(lanicon,"s3");
    break;
  case "arc":
    setskin(arcicon,"s3");
    break;
  case "cas":
    setskin(casicon,"s3");
    break;
  case "ass":
    setskin(assicon,"s3");
    break;
  case "rid":
    setskin(ridicon,"s3");
    break;
  case "ber":
    setskin(bericon,"s3");
    break;
  case "rul":
    setskin(rulicon,"s3");
    break;
  case "ave":
    setskin(aveicon,"s3");
    break;
  case "moo":
    setskin(mooicon,"s3");
    break;
  case "alt":
    setskin(alticon,"s3");
    break;
  case "for":
    setskin(foricon,"s3");
    break;
  default:
    setskin(sabicon,"s3");
}
})

sab_div.addEventListener("click",function(){
  curClass="sab";
  updateSkinList();
  game("sab");
})

lan_div.addEventListener("click",function(){
  curClass="lan";
  updateSkinList();
  game("lan");
})

arc_div.addEventListener("click",function(){
  curClass="arc";
  updateSkinList();
  game("arc");
})

cas_div.addEventListener("click",function(){
  curClass="cas";
  updateSkinList();
  game("cas");
})

ass_div.addEventListener("click",function(){
  curClass="ass";
  updateSkinList();
  game("ass");
})

rid_div.addEventListener("click",function(){
  curClass="rid";
  updateSkinList();
  game("rid");
})

ber_div.addEventListener("click",function(){
  curClass="ber";
  updateSkinList();
  game("ber");
})

rul_div.addEventListener("click",function(){
  curClass="rul";
  updateSkinList();
  game("rul");
})

ave_div.addEventListener("click",function(){
  curClass="ave";
  updateSkinList();
  game("ave");
})

moo_div.addEventListener("click",function(){
  curClass="moo";
  updateSkinList();
  game("moo");
})

alt_div.addEventListener("click",function(){
  curClass="alt";
  updateSkinList();
  game("alt");
})

for_div.addEventListener("click",function(){
  curClass="for";
  updateSkinList();
  game("for");
})
}
main();
