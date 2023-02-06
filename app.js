const personnages = [
  {
    nom: "VAULTERS",
    url: "img/vaulters-portrait.jpeg",
    urlAvatar: "img/vaulters-avatar.jpg",
    desc: "VAULTERS  Lorem ipsum  Maxime consequuntur sequi excepturi repudiandae, quidem provident.",
    hp: 250,
    maxLife: 250,
    currentHp: 250,
    hpBar: 1,
    dmg: 30,
    heal: 10,
    criticalDmg: 50,
    criticalChance: 70,
  },
  {
    nom: "NECROPHAGES",
    url: "img/necrophage-portrait.jpg",
    urlAvatar: "img/necrophage-avatar.jpg",
    desc: "NECROPHAGES  adipisicing elit. Maxime consequuntur sequi excepturi repudiandae, quidem provident.",
    hp: 300,
    maxLife: 300,
    currentHp: 300,
    hpBar: 1,
    dmg: 15,
    heal: 20,
    criticalDmg: 100,
    criticalChance: 90,
  },
  {
    nom: "DECHUS",
    url: "img/dechus-portrait.jpg",
    urlAvatar: "img/dechus-avatar.jpg",
    desc: "DECHUS  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur sequi excepturi repudiandae, quidem provident.",
    hp: 200,
    maxLife: 200,
    currentHp: 200,
    hpBar: 1,
    dmg: 40,
    heal: 20,
    criticalDmg: 60,
    criticalChance: 70,
  },
  {
    nom: "NOMADES",
    url: "img/nomades-portrait.jpg",
    urlAvatar: "img/nomades-avatar.jpg",
    desc: "NOMADES  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur sequi excepturi repudiandae, quidem provident.",
    hp: 150,
    maxLife: 150,
    currentHp: 150,
    hpBar: 1,
    dmg: 30,
    heal: 20,
    criticalDmg: 40,
    criticalChance: 60,
  },
];
//change bcg////////////////////////////////////////////////
const bgs = ["bg.jpg", "bg2.jpg", "bg3.jpg", "bg4.png", "bg5.webp", "bg6.jpg"];
const container = document.querySelector(".container");
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomBg = getRandomIntInclusive(0, 5);
container.style.backgroundImage = "url(../img/" + bgs[randomBg] + ")";
//select caractere////////////////////////////////////////
const caracteresPictures = document.querySelectorAll(".caractere .picture");
let player1 = document.querySelector(".s1 img");
let player2 = document.querySelector(".s2 img");
let count = 1;
let caractereContainer = document.querySelector(".selected");
let player1Selected;
let player2Selected;
for (let i = 0; i < caracteresPictures.length; i++) {
  caracteresPictures[i].addEventListener("click", function () {
    addPictures(i);
  });
}
function addPictures(index) {
  if (count == 1) {
    player1.src = personnages[index].url;
    count++;
    player1Selected = personnages[index];
    console.log(player1Selected, "player1");
  } else {
    player2.src = personnages[index].url;
    count = 1;
    player2Selected = personnages[index];
    console.log(player2Selected, "player2");
  }
}

//preview///////////////////////////////////////////////////
const imgPreview = document.querySelector(".picture-container img");
const descPreview = document.querySelector(".preview-text p");
const titlePreview = document.querySelector(".preview-title h2");
const lifeP = document.querySelector(".hp");
const dmgP = document.querySelector(".dommage");
const soinP = document.querySelector(".soin");
const chanceP = document.querySelector(".chance");
const criticalP = document.querySelector(".critical");
for (i = 0; i < caracteresPictures.length; i++) {
  addMouseEvent(i);
}

function addMouseEvent(index) {
  caracteresPictures[index].addEventListener("mouseover", function () {
    changePreview(index);
  });
}
function changePreview(index) {
  imgPreview.src = personnages[index].urlAvatar;
  titlePreview.textContent = personnages[index].nom;
  previewParagraphe.textContent = personnages[index].desc;
  lifeP.textContent = "point de vie : " + personnages[index].hp;
  dmgP.textContent = "dommages :" + personnages[index].dmg;
  soinP.textContent = "soin : " + personnages[index].heal;
  chanceP.textContent =
    "chance critique : " + (100 - personnages[index].criticalChance) + " %";
  criticalP.textContent =
    " dommages critiques " + personnages[index].criticalDmg;
}
//gestion du volume///////////////////////////////////////////
const soundContainer = document.querySelector(".sound-bar-container");
const controller = document.querySelector(".controller");
const soundBar = document.querySelector(".sound-bar");
const icone = document.querySelector(".fa-volume-xmark");
console.log(icone);
let volume = 0;
soundContainer.addEventListener("click", function (event) {
  volume = event.x - soundContainer.offsetLeft;
  controller.style.left = volume + "px";
  soundBar.style.width = volume + "%";
  icone.classList.remove("fa-volume-xmark");
  icone.classList.remove("fa-volume-low");
  icone.classList.remove("fa-volume-high");
  if (volume < 50) {
    icone.classList.add("fa-volume-low");
  } else {
    icone.classList.add("fa-volume-high");
  }
});

icone.addEventListener("click", function () {
  controller.style.left = 0 + "px";
  soundBar.style.width = 0 + "%";
  icone.classList.add("fa-volume-xmark");
});
//son à l'actionStrike
function soundStrike() {
  let swordSound = new Audio("sounds/epee.mp3");
  swordSound.play();
}
function soundHeal() {
  let healSound = new Audio("sounds/healSound.mp3");
  healSound.play();
}
function soundWin() {
  let winSound = new Audio("sounds/win.mp3");
  winSound.play();
}
//add players on interface/////////////////////////////////
let selectedPlayers = [];
const goBtn = document.querySelector(".go button");
const previewDiv = document.querySelector(".preview");
const selectDiv = document.querySelector(".select-container");
const playerDiv = document.querySelectorAll(".players-container");
const histo = document.querySelector(".histo-container");
const previewParagraphe = document.querySelector(".preview-text p");
const warriorName = document.querySelectorAll(".players-card h2");
const warriorImg = document.querySelectorAll(".players-img img");
function addPlayers() {
  selectedPlayers.push(player1Selected);
  selectedPlayers.push(player2Selected);
}
function displayDiv() {
  previewDiv.style.display = "none";
  selectDiv.style.display = "none";
}
function showPlayers(element) {
  element.style.display = "flex";
}
function showWarriors(index) {
  warriorName[index].textContent = selectedPlayers[index].nom;
  warriorImg[index].src = selectedPlayers[index].urlAvatar;
}
goBtn.addEventListener("click", function (e) {
  console.log(warriorImg[0], "👍👍👍👍👍👍👍");
  e.preventDefault();
  addPlayers();
  displayDiv();
  showPlayers(playerDiv[0]);
  showPlayers(playerDiv[1]);
  showPlayers(histo);
  showWarriors(0);
  showWarriors(1);
  const randomBg = getRandomIntInclusive(0, 2);
  const title = document.querySelector("h1");
  container.style.backgroundImage = "url(../img/" + bgs[randomBg] + ")";
  ////////////variable for fight system
  const barLife = document.querySelectorAll(".bar");
  const span = document.querySelectorAll(".label-container span");
  const strikeButton = document.querySelectorAll(".strike");
  const healButton = document.querySelectorAll(".heal");
  span[0].textContent =
    selectedPlayers[0].currentHp + "/" + selectedPlayers[0].maxLife;
  span[1].textContent =
    selectedPlayers[1].currentHp + "/" + selectedPlayers[1].maxLife;
  let dice;
  let actionIndex = 0;
  let divAction = document.querySelector(" .histo-card .action");
  function showAction(personnage, value, action) {
    let actionDiv = document.createElement("div");
    let actionP = document.createElement("p");
    divAction.prepend(actionDiv);
    actionDiv.appendChild(actionP);
    actionDiv.classList.add("action-div");
    actionP.textContent =
      actionIndex + " " + personnage + " " + value + " " + action;
  }

  function showWhoPlay(indice) {
    title.textContent = "joueur " + indice + " doit jouer";
  }
  showWhoPlay(1);
  function disabledButtonP1(indice) {
    strikeButton[indice].disabled = true;
    healButton[indice].disabled = true;
    strikeButton[indice + 1].disabled = false;
    healButton[indice + 1].disabled = false;
  }
  function disabledButtonP2(indice) {
    strikeButton[indice].disabled = true;
    healButton[indice].disabled = true;
    strikeButton[indice - 1].disabled = false;
    healButton[indice - 1].disabled = false;
  }
  function showWhoWhin(personnage) {
    title.textContent = "joueur " + personnage.nom + " Gagne";
  }
  disabledButtonP2(1);
  const back = document.querySelector(".back-button");
  const warriorImgDiv = document.querySelectorAll(".players-img");
  function removeShake(index) {
    warriorImgDiv[index].classList.remove("shake");
  }
  function shakeOnStrike(index) {
    warriorImgDiv[index].classList.add("shake");
  }
  function removeShade(index) {
    warriorImg[index].classList.remove("pulse");
  }
  function shadeOnHeal(index) {
    warriorImg[index].classList.add("pulse");
  }

  ////////////strike ///////////////////////////////////
  for (let i = 0; i < strikeButton.length; i++) {
    strikeButton[i].addEventListener("click", function () {
      if (i == 0) {
        soundStrike();
        actionIndex++;
        dice = getRandomIntInclusive(0, 100);
        console.log(dice, "⚔⚔⚔⚔⚔", selectedPlayers[i].nom);
        strike(selectedPlayers[i], selectedPlayers[i + 1], barLife[1]);
        showLifeStrike(selectedPlayers[i], selectedPlayers[i + 1], 1);
        showWhoPlay(2);
        disabledButtonP1(i);
        removeShake(i);
        shakeOnStrike(i + 1);
        removeShade(i + 1);
        if (selectedPlayers[1].currentHp <= 0) {
          showWhoWhin(selectedPlayers[0]);
          soundWin();
          back.style.display = "flex";
          for (i = 0; i < 2; i++) {
            strikeButton[i].disabled = true;
            healButton[i].disabled = true;
          }
        }
      } else {
        soundStrike();
        actionIndex++;
        dice = getRandomIntInclusive(0, 100);
        console.log(dice, "⚔⚔⚔⚔⚔", selectedPlayers[i].nom);
        strike(selectedPlayers[i], selectedPlayers[i - 1], barLife[0]);
        showLifeStrike(selectedPlayers[i], selectedPlayers[i - 1], 0);
        showWhoPlay(1);
        disabledButtonP2(i);
        removeShake(i);
        shakeOnStrike(i - 1);
        removeShade(i - 1);
        if (selectedPlayers[0].currentHp <= 0) {
          showWhoWhin(selectedPlayers[1]);
          soundWin();
          back.style.display = "flex";
          for (i = 0; i < 2; i++) {
            strikeButton[i].disabled = true;
            healButton[i].disabled = true;
          }
        }
      }
    });
  }
  /////////////////////heal///////////////////////////
  for (let j = 0; j < healButton.length; j++) {
    healButton[j].addEventListener("click", function () {
      if (j == 0) {
        soundHeal();
        actionIndex++;
        console.log(selectedPlayers[j].nom, "se guerit");
        heal(selectedPlayers[j], barLife[j]);
        showLifeheal(selectedPlayers[j], j);
        disabledButtonP1(j);
        removeShade(j + 1);
        shadeOnHeal(j);
        removeShake(j);
      } else {
        soundHeal();
        actionIndex++;
        console.log(selectedPlayers[j].nom, "se guerit");
        heal(selectedPlayers[j], barLife[j]);
        showLifeheal(selectedPlayers[j], j);
        showWhoPlay(1);
        disabledButtonP2(j);
        removeShade(j - 1);
        shadeOnHeal(j);
        removeShake(j);
      }
    });
  }
  //////////////////function strike////////////////////
  function strike(attaquant, defenseur, lifeW) {
    if (attaquant.criticalChance < dice) {
      console.log("coup critique");
      defenseur.hpBar = defenseur.hpBar - attaquant.criticalDmg / defenseur.hp;
      showAction(attaquant.nom, attaquant.criticalDmg, "degats critique");
    } else {
      console.log("coup normal");
      defenseur.hpBar = defenseur.hpBar - attaquant.dmg / defenseur.hp;
      showAction(attaquant.nom, attaquant.dmg, "degats");
    }
    if (defenseur.hpBar <= 0) {
      defenseur.hpBar = 0;
    }
    lifeW.style.width = defenseur.hpBar * 100 + "%";
    if (defenseur.currentHp <= 0) {
      lifeW.style.width = 0 + "%";
      showWhoWhin(attaquant);
    }
  }
  ///////////////////affichage point de vie après strike //////////////
  function showLifeStrike(attaquant, defenseur, indice) {
    if (attaquant.criticalChance < dice) {
      defenseur.currentHp = defenseur.currentHp - attaquant.criticalDmg;
      span[indice].textContent =
        selectedPlayers[indice].currentHp +
        "/" +
        selectedPlayers[indice].maxLife;
    } else {
      defenseur.currentHp = defenseur.currentHp - attaquant.dmg;
      span[indice].textContent =
        selectedPlayers[indice].currentHp +
        "/" +
        selectedPlayers[indice].maxLife;
    }
    if (defenseur.currentHp < 0) {
      defenseur.currentHp = 0;
      span[indice].textContent =
        selectedPlayers[indice].currentHp +
        "/" +
        selectedPlayers[indice].maxLife;
    }
  }
  //////////////////////fonction heal /////////////////////////////
  function heal(healer, lifeW) {
    healer.hpBar = healer.hpBar + (healer.hpBar + healer.heal) / healer.hp;
    lifeW.style.width = healer.hpBar * 100 + "%";
    if (healer.hpBar * 100 > 100) {
      lifeW.style.width = 100 + "%";
    }
    showAction(healer.nom, healer.heal, "de soin");
  }
  ///////////////////affichage point de vie après heal //////////////
  function showLifeheal(healer, indice) {
    healer.currentHp = healer.currentHp + healer.heal;
    span[indice].textContent =
      selectedPlayers[indice].currentHp + "/" + selectedPlayers[indice].maxLife;
    if (healer.currentHp > healer.maxLife) {
      healer.currentHp = healer.maxLife;
      span[indice].textContent =
        selectedPlayers[indice].currentHp +
        "/" +
        selectedPlayers[indice].maxLife;
    }
  }

  /////end of event //////////////////////////////////
});
