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
const skindef_div = document.getElementById("skindef");
const skins1_div = document.getElementById("skin1");
const skin2_div = document.getElementById("skin2");
const skin3_div = document.getElementById("skin3");

const sabicon = document.getElementById("sabIC");
const lanicon = document.getElementById("lanIC");
const arcicon = document.getElementById("arcIC");
const casicon = document.getElementById("casIC");
const ridicon = document.getElementById("ridIC");
const assicon = document.getElementById("assIC");
const bericon = document.getElementById("berIC");
const mooicon = document.getElementById("mooIC");
const aveicon = document.getElementById("aveIC");
const rulicon = document.getElementById("rulIC");
const foricon = document.getElementById("forIC");
const alticon = document.getElementById("altIC");
const deficon = document.getElementById("choiceICdef");
const skin1icon = document.getElementById("choiceICs1");
const skin2icon = document.getElementById("choiceICs2");
const skin3icon = document.getElementById("choiceICs3");


const playerHp_span = document.getElementById("player-score");
const pcHp_span = document.getElementById("pc-score");
const playerIcon = document.getElementById("playerimg");
const pcIcon = document.getElementById("pcimg");
const scoreboard_div = document.querySelector(".scoreboard");
const results_div = document.getElementById("res");
const sab_div = document.getElementById("sab");
const lan_div = document.getElementById("lan");
const arc_div = document.getElementById("arc");
const cas_div = document.getElementById("cas");
const ass_div = document.getElementById("ass");
const rid_div = document.getElementById("rid");
const rul_div = document.getElementById("rul");
const ave_div = document.getElementById("ave");
const ber_div = document.getElementById("ber");
const moo_div = document.getElementById("moo");
const alt_div = document.getElementById("alt");
const for_div = document.getElementById("for");

function getPcChoice(){
  const choices = ["sab","lan","arc","cas","ass","rid","ber","rul","ave","moo","alt","for"];
  const ranchoice = Math.floor(Math.random() * 12);
  return choices[ranchoice];
}

function getDamageMods(choice,pcChoice){
  let multp = 1;
  let multpc = 1;
  switch (choice) {
    case "sab":
      switch (pcChoice) {
        case "arc":
           multp = 0.5;
           multpc = 2;
          break;
        case "lan":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "rul":
           multp = 0.5;
           multpc = 1;
          break;
        case "alt":
           multp = 1;
           multpc = 0.5;
          break;
        default:
           multp = 1;
           multpc = 1;
        }
      break;
    case "lan":
      switch (pcChoice) {
        case "sab":
           multp = 0.5;
           multpc = 2;
          break;
        case "arc":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "rul":
           multp = 0.5;
           multpc = 1;
          break;
        case "alt":
           multp = 1;
           multpc = 0.5;
          break;
        default:
           multp = 1;
           multpc = 1;
        }
      break;
    case "arc":
      switch (pcChoice) {
        case "lan":
           multp = 0.5;
           multpc = 2;
          break;
        case "sab":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "rul":
           multp = 0.5;
           multpc = 1;
          break;
        case "alt":
           multp = 1;
           multpc = 0.5;
          break;
        default:
           multp = 1;
           multpc = 1;
        }
      break;
    case "cas":
      switch (pcChoice) {
        case "rid":
           multp = 0.5;
           multpc = 2;
          break;
        case "ass":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "rul":
           multp = 0.5;
           multpc = 1;
          break;
        case "alt":
           multp = 1;
           multpc = 1.5;
          break;
        default:
           multp = 1;
           multpc = 1;
        }
      break;
    case "ass":
      switch (pcChoice) {
        case "cas":
           multp = 0.5;
           multpc = 2;
          break;
        case "rid":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "rul":
           multp = 0.5;
           multpc = 1;
          break;
        case "alt":
           multp = 1;
           multpc = 1.5;
          break;
        default:
           multp = 1;
           multpc = 1;
        }
      break;
    case "rid":
      switch (pcChoice) {
        case "ass":
           multp = 0.5;
           multpc = 2;
          break;
        case "cas":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "rul":
           multp = 0.5;
           multpc = 1;
          break;
        case "alt":
           multp = 1;
           multpc = 1.5;
          break;
        default:
           multp = 1;
           multpc = 1;
      }
      break;
    case "rul":
      switch (pcChoice) {
        case "ave":
           multp = 0.5;
           multpc = 2;
          break;
        case "moo":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "rul":
        case "alt":
        case "for":
           multp = 1;
           multpc = 1;
          break;
        default:
           multp = 1;
           multpc = 0.5;
      }
      break;

    case "ave":
      switch (pcChoice) {
        case "moo":
           multp = 0.5;
           multpc = 2;
          break;
        case "rul":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        default:
           multp = 1;
           multpc = 1;
        }
      break;
    case "ber":
      switch (pcChoice) {
        case "for":
           multp = 0.5;
           multpc = 2;
          break;
        case "ber":
           multp = 1.5;
           multpc = 1.5;
          break;
        default:
           multp = 1.5;
           multpc = 2;
        }
      break;
    case "moo":
      switch (pcChoice) {
        case "rul":
           multp = 0.5;
           multpc = 2;
          break;
        case "ave":
           multp = 2;
           multpc = 0.5;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        default:
           multp = 1;
           multpc = 1;
      }
      break;
    case "alt":
      switch (pcChoice) {
        case "sab":
        case "lan":
        case "arc":
           multp = 0.5;
           multpc = 1;
          break;
        case "cas":
        case "ass":
        case "rid":
           multp = 1.5;
           multpc = 1;
          break;
        case "ber":
           multp = 2;
           multpc = 1.5;
          break;
        case "for":
           multp = 0.5;
           multpc = 2;
          break;
        default:
           multp = 1;
           multpc = 1;
      }
      break;

    case "for":
      switch (pcChoice) {
        case "alt":
           multp = 0.5;
           multpc = 2;
          break;
        case "for":
           multp = 2;
           multpc = 2;
          break;
        case "ber":
           multp = 2;
           multpc = 0.5;
          break;
        default:
           multp = 1;
           multpc = 1;
      }
      break;
    default:
       multp = 1;
       multpc = 1;
  }
  return [multp,multpc]
}

function getresultstr(mod1,mod2){
    return "You deal "+mod1.toString()+" damage and take "+mod2.toString()+" damage"
}

function getImageSrc(servant) {
  let source="";
  switch (servant) {
    case "sab":
      source += sabicon.src;
      break;
    case "lan":
      source += lanicon.src;
      break;
    case "arc":
      source += arcicon.src;
      break;
    case "cas":
      source += casicon.src;
      break;
    case "ass":
      source += assicon.src;
      break;
    case "ber":
      source += bericon.src;
      break;
    case "moo":
      source += mooicon.src;
      break;
    case "alt":
      source += alticon.src;
      break;
    case "rul":
      source += rulicon.src;
      break;
    case "ave":
      source += aveicon.src;
      break;
    case "for":
      source += foricon.src;
      break;
    case "rid":
      source += ridicon.src;
      break;
    default:
      source += "images/init2.webp";
  }
  return source;
}

function game(choice){
  const pcChoice = getPcChoice();
  const mults = getDamageMods(choice,pcChoice);
  playerHp = playerHp - mults[1] * baseAtk;
  pcHp = pcHp - mults[0] * baseAtk;
  pcHp_span.innerHTML = pcHp;
  playerHp_span.innerHTML = playerHp;
  results_div.innerHTML = getresultstr(mults[0] * baseAtk, mults[1] * baseAtk);
  pcimg.src = getImageSrc(pcChoice);
  pcHp_span.innerHTML = pcHp;
  playerimg.src = getImageSrc(choice);
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

function main(){

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
