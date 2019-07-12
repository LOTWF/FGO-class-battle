class card {
  constructor(id_no,servant,bDmg,pcost,iconsrc,sname){
    this.id = id_no;
    this.name = sname;
    this.serv = servant;
    this.baseDmg = bDmg;
    this.cost = pcost;
    this.icon = iconsrc
    this.back = 'images/'+servant+'def.png';
  }
}
function makeCards(){
  var cardlist = new Array();
  for (var i = 0; i < 6 ; i++) {
    cardlist.push(new Array());
  }
  //sabers
  cardlist[0].push(new card(1,'sab',2,1,'images/sabs1.png','Chevalier d\'Eon'));
  cardlist[1].push(new card(13,'sab',4,2,'images/sabs2.png','Okita Souji'));
  cardlist[2].push(new card(25,'sab',6,3,'images/sabs3.png','Mordred'));
  cardlist[3].push(new card(37,'sab',8,4,'images/sabs4.png','Miyamoto Musashi'));
  cardlist[4].push(new card(49,'sab',10,5,'images/sabs5.png','Attila'));
  cardlist[5].push(new card(61,'sab',12,6,'images/sabs6.png','Arturia Pendragon'));
  //lancers
  cardlist[0].push(new card(2,'lan',2,1,'images/lans1.png','Cú Chulainn'));
  cardlist[1].push(new card(14,'lan',4,2,'images/lans2.png','Brinhildr'));
  cardlist[2].push(new card(26,'lan',6,3,'images/lans3.png','Elizabeth Batory'));
  cardlist[3].push(new card(38,'lan',8,4,'images/lans4.png','Karna'));
  cardlist[4].push(new card(50,'lan',10,5,'images/lans5.png','Ereshkigal'));
  cardlist[5].push(new card(62,'lan',12,6,'images/lans6.png','Scáthach'));
  //archers
  cardlist[0].push(new card(3,'arc',2,1,'images/arcs1.png','Oda Nobunaga'));
  cardlist[1].push(new card(15,'arc',4,2,'images/arcs2.png','Chloe Von Einzbern'));
  cardlist[2].push(new card(27,'arc',6,3,'images/arcs3.png','Nameless'));
  cardlist[3].push(new card(39,'arc',8,4,'images/arcs4.png','Arjuna'));
  cardlist[4].push(new card(51,'arc',10,5,'images/arcs5.png','Ishtar'));
  cardlist[5].push(new card(63,'arc',12,6,'images/arcs6.png','Gilgamesh'));
  //casters
  cardlist[0].push(new card(4,'cas',2,1,'images/cass1.png','Medea'));
  cardlist[1].push(new card(16,'cas',4,2,'images/cass2.png','Nitocris'));
  cardlist[2].push(new card(28,'cas',6,3,'images/cass3.png','Sherazade'));
  cardlist[3].push(new card(40,'cas',8,4,'images/cass4.png','Xuanzang Sanzang'));
  cardlist[4].push(new card(52,'cas',10,5,'images/cass5.png','Merlin'));
  cardlist[5].push(new card(64,'cas',12,6,'images/cass6.png','Tamamo no Mae'));
  //assassins
  cardlist[0].push(new card(5,'ass',2,1,'images/asss1.png','Sasaki Kōjiro'));
  cardlist[1].push(new card(17,'ass',4,2,'images/asss2.png','Carmilla'));
  cardlist[2].push(new card(29,'ass',6,3,'images/asss3.png','Ryōgi Shiki'));
  cardlist[3].push(new card(41,'ass',8,4,'images/asss4.png','Jack the Ripper'));
  cardlist[4].push(new card(53,'ass',10,5,'images/asss5.png','Shuten Dōji'));
  cardlist[5].push(new card(65,'ass',12,6,'images/asss6.png','King Hassan'));
  //riders
  cardlist[0].push(new card(6,'rid',2,1,'images/rids1.png','Medusa'));
  cardlist[1].push(new card(18,'rid',4,2,'images/rids2.png','Ushiwakamaru'));
  cardlist[2].push(new card(30,'rid',6,3,'images/rids3.png','Astolfo'));
  cardlist[3].push(new card(42,'rid',8,4,'images/rids4.png','Iskandar'));
  cardlist[4].push(new card(54,'rid',10,5,'images/rids5.png','Francis Drake'));
  cardlist[5].push(new card(66,'rid',12,6,'images/rids6.png','Quetzalcoatl'));
  //berserkers
  cardlist[0].push(new card(7,'ber',2,1,'images/bers1.png','Lancelot'));
  cardlist[1].push(new card(19,'ber',4,2,'images/bers2.png','Frankenstein'));
  cardlist[2].push(new card(31,'ber',6,3,'images/bers3.png','Penthisilea'));
  cardlist[3].push(new card(43,'ber',8,4,'images/bers4.png','Heracles'));
  cardlist[4].push(new card(55,'ber',10,5,'images/bers5.png','Minamoto no Raikou'));
  cardlist[5].push(new card(67,'ber',12,6,'images/bers6.png','Cu Culainn Alter'));
  //rulers
  cardlist[0].push(new card(8,'rul',2,1,'images/ruls1.png','Martha'));
  cardlist[1].push(new card(20,'rul',4,2,'images/ruls2.png','Sherlock Holmes'));
  cardlist[2].push(new card(32,'rul',8,4,'images/ruls3.png','Amakusa Shirou'));
  cardlist[3].push(new card(44,'rul',10,5,'images/ruls4.png','Jeanne d\'Arc'));
  cardlist[4].push(null);
  cardlist[5].push(null);
  //avengers
  cardlist[0].push(new card(9,'ave',2,1,'images/aves1.png','Hessian Lobo'));
  cardlist[1].push(new card(21,'ave',4,2,'images/aves2.png','Gorgon'));
  cardlist[2].push(new card(33,'ave',8,4,'images/aves3.png','Edmond Dantès'));
  cardlist[3].push(new card(45,'ave',12,6,'images/aves4.png','Jeanne Alter'));
  cardlist[4].push(null);
  cardlist[5].push(null);
  //mooncancers
  cardlist[0].push(new card(10,'moo',8,4,'images/moos1.png','Ganesha'));
  cardlist[1].push(new card(22,'moo',10,5,'images/moos2.png','BB Summer'));
  cardlist[2].push(new card(34,'moo',12,6,'images/moos3.png','BB'));
  cardlist[3].push(null);
  cardlist[4].push(null);
  cardlist[5].push(null);
  //alteregos
  cardlist[0].push(new card(11,'alt',2,1,'images/alts1.png','Sitonai'));
  cardlist[1].push(new card(23,'alt',4,2,'images/alts2.png','Sesshōin Kiara'));
  cardlist[2].push(new card(35,'alt',6,3,'images/alts3.png','Passionlip'));
  cardlist[3].push(new card(47,'alt',8,4,'images/alts4.png','Kingprotea'));
  cardlist[4].push(new card(59,'alt',10,5,'images/alts5.png','Okita Alter'));
  cardlist[5].push(new card(71,'alt',12,6,'images/alts6.png','Meltililith'));
  //foreigners
  cardlist[0].push(new card(12,'for',8,4,'images/fors1.png','Mysterious Heroine XX'));
  cardlist[1].push(new card(24,'for',10,5,'images/fors2.png','Katsushika Hokusai'));
  cardlist[2].push(new card(36,'for',12,6,'images/fors3.png','Abigail Williams'));
  cardlist[3].push(null);
  cardlist[4].push(null);
  cardlist[5].push(null);

return cardlist;
}

function get_defaultdecks(lv){
  var cardlist = makeCards();
  var newdeck = new Array();
  if (lv<4) {
    for (var i = 0; i < 7; i++) {
      newdeck.push(cardlist[lv][i]);
      newdeck.push(cardlist[lv+1][i]);
    }
  }
  else if (lv<6) {
    for (var i = 0; i < 7; i++) {
      newdeck.push(cardlist[lv][i]);
      newdeck.push(cardlist[lv+1][i]);
    }
    for (var i = 7; i < 12; i++) {
      newdeck.push(cardlist[lv-4][i]);
      newdeck.push(cardlist[lv-3][i]);
    }
  }
  return newdeck;
}
