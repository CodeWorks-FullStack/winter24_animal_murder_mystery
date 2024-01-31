
const animals = [
  {
    name: 'Tiger',
    emoji: '🐅',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'orange',
    age: 10,
    favoriteFoods: ['meat', 'gazelle', 'frosted flakes']
  },
  {
    name: 'Oslo',
    emoji: '🦧',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'orange',
    age: 50,
    favoriteFoods: ['fruit', 'leaves']
  },
  {
    name: 'Marty',
    emoji: '🦓',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'multi-colored',
    age: 20,
    favoriteFoods: ['fruit', 'leaves', 'grass']
  },
  {
    name: 'Larry',
    emoji: '🦆',
    isMurderer: false,
    isAlive: true,
    isMammal: false,
    color: 'multi-colored',
    age: 3,
    favoriteFoods: ['leaves', 'grass', 'seeds', 'bugs', 'fish']
  },
  {
    name: 'Gary',
    emoji: '🐙',
    isMurderer: false,
    isAlive: true,
    isMammal: false,
    color: 'red',
    age: 5,
    favoriteFoods: ['fish', 'bugs']
  },
  {
    name: 'Lil Baby Jeremy',
    emoji: '🦞',
    isMurderer: false,
    isAlive: true,
    isMammal: false,
    color: 'red',
    age: Infinity,
    favoriteFoods: ['fish', 'bugs', 'trash']
  },
  {
    name: 'Kangaroo Jack',
    emoji: '🦘',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'tan',
    age: 45,
    favoriteFoods: ['fruit', 'leaves', 'bloomin onion']
  },
  {
    name: 'Linguine',
    emoji: '🦙',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'white',
    age: 25,
    favoriteFoods: ['leaves', 'grass', 'fruit']
  },
  {
    name: 'Martha',
    emoji: '🐑',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'white',
    age: 15,
    favoriteFoods: ['leaves', 'grass', 'fruit']
  },
  {
    name: 'Mick',
    emoji: '🐏',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'white',
    age: 15,
    favoriteFoods: ['leaves', 'grass', 'fruit', 'nachos']
  },
  {
    name: 'Mantis',
    emoji: '🦗',
    isMurderer: false,
    isAlive: true,
    isMammal: false,
    color: 'green',
    age: 1,
    favoriteFoods: ['leaves', 'grass', 'fruit', 'bugs', 'trash']
  },
  {
    name: 'Doctor Alligator',
    emoji: '🐊',
    isMurderer: false,
    isAlive: true,
    isMammal: false,
    color: 'green',
    age: 80,
    favoriteFoods: ['meat', 'bugs', 'trash', 'gazelle', 'birds']
  },
  {
    name: 'Max',
    emoji: '🐕‍🦺',
    isMurderer: false,
    isAlive: true,
    isMammal: true,
    color: 'tan',
    age: 6,
    favoriteFoods: ['people']
  },
]


function drawSuspects() {
  // NOTE create placeholder string
  let animalEmojis = ''

  const animalSuspects = animals.filter(animal => animal.isAlive == true)

  // NOTE concat all animal emojis to placeholder string
  animalSuspects.forEach(animal => animalEmojis += animal.emoji)

  const animalLineupElement = document.getElementById('suspectLineup')
  animalLineupElement.innerText = animalEmojis

}
function drawVictims() {
  // NOTE create placeholder string
  let animalEmojis = ''

  const animalVictims = animals.filter(animal => animal.isAlive == false)

  // NOTE concat all animal emojis to placeholder string
  animalVictims.forEach(animal => animalEmojis += animal.emoji)

  const animalLineupElement = document.getElementById('victimLineup')
  animalLineupElement.innerText = animalEmojis
}

function drawAnimals() {
  drawSuspects()
  drawVictims()
}

function drawClueAboutMurderer() {
  // NOTE gets random number between 0-5 (1,2,3,4)
  // const randomNumber = Math.ceil(Math.random() * 4)

  // NOTE gets random number between 0-7, which will hit our default more often in switch statement
  const randomNumber = Math.ceil(Math.random() * 6)

  console.log(randomNumber);

  // if (randomNumber == 1) {
  // }
  // if (randomNumber == 2) {
  // }
  // if (randomNumber == 3) {
  // }
  // if (randomNumber == 4) {
  // }

  const murderer = findMurderer()

  let clue = ''

  switch (randomNumber) {
    case 1:
      clue = `The murderer ${murderer.isMammal == true ? 'is' : 'is not'} a mammal`
      break;

    case 2:
      clue = `The color of the murderer is ${murderer.color}`
      break;

    case 3:
      clue = `The murderer is ${murderer.age > 12 ? 'older than' : 'younger than'} 12`
      break;

    default:
      const randomFoodIndex = Math.floor(Math.random() * murderer.favoriteFoods.length)
      const randomFood = murderer.favoriteFoods[randomFoodIndex]
      console.log('random food:', randomFood);
      clue = `The murderer likes to eat ${randomFood}`
      break;
  }

  const clueElement = document.getElementById('murdererClues')
  clueElement.innerHTML += `<p>${clue}</p>`
}

function makeRandomAnimalMurderer() {
  // NOTE finds a random number between -1 and the length of the animal array (should all be valid indexes to access within the array)
  const randomIndex = Math.floor(Math.random() * animals.length)
  // console.log('random number:', randomIndex);

  // NOTE pulls random object out of array
  const animalWithMurderousIntent = animals[randomIndex]
  animalWithMurderousIntent.isMurderer = true
  // console.log(animalWithMurderousIntent)
}

function murderRandomAnimal() {
  // const potentialVictims = animals.filter(animal => !animal.isMurderer && animal.isAlive)
  const potentialVictims = animals.filter(animal => animal.isMurderer == false && animal.isAlive == true)
  console.log('potential victims:', potentialVictims);


  const randomIndex = Math.floor(Math.random() * potentialVictims.length)

  const victim = potentialVictims[randomIndex]

  victim.isAlive = false
  console.log(victim);
  drawAnimals()

  // TODO maybe refactor this
  if (potentialVictims.length == 1) {
    const murderer = findMurderer()
    window.alert(`${murderer.name} is a criminal mastermind, and they got away with it! ${murderer.emoji}`)
    // NOTE hard stop
    return
  }

  drawClueAboutMurderer()
}

function accuseAnimalOfMurder() {
  console.log('accusing!');

  // TODO allow user to type name as well
  const emojiOfAccusedAnimal = window.prompt("WHO DUNNIT?")
  console.log('you are accusing:', emojiOfAccusedAnimal);

  const murderer = findMurderer()

  console.log('the murderer:', murderer);

  if (murderer.emoji == emojiOfAccusedAnimal) {
    window.alert(`${murderer.name} ${murderer.emoji} is going to jail! You are the best detective we've ever seen! Here is your medal 🥇`)
  }
  else {
    murderRandomAnimal()
  }

}

function findMurderer() {
  const foundMurderer = animals.find(animal => animal.isMurderer == true)
  return foundMurderer
}



// ANCHOR run on page load

makeRandomAnimalMurderer()
murderRandomAnimal()

// NOTE murderRandomAnimal now calls this function, so we no longer need it to run on page load
// drawAnimals()