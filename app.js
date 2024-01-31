
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

function makeRandomAnimalMurderer() {
  // NOTE finds a random number between -1 and the length of the animal array (should all be valid indexes to access within the array)
  const randomIndex = Math.floor(Math.random() * animals.length)
  console.log('random number:', randomIndex);

  // NOTE pulls random object out of array
  const animalWithMurderousIntent = animals[randomIndex]
  animalWithMurderousIntent.isMurderer = true
  console.log(animalWithMurderousIntent)
}

function murderRandomAnimal() {
  // const potentialVictims = animals.filter(animal => !animal.isMurderer && animal.isAlive)
  const potentialVictims = animals.filter(animal => animal.isMurderer == false && animal.isAlive == true)
  console.log('potential victims:', potentialVictims);

  // TODO maybe refactor this
  if (potentialVictims.length == 0) {
    window.alert('GAME OVER')
    // NOTE hard stop
    return
  }

  const randomIndex = Math.floor(Math.random() * potentialVictims.length)

  const victim = potentialVictims[randomIndex]

  victim.isAlive = false
  console.log(victim);
  drawAnimals()
}

function accuseAnimalOfMurder() {
  console.log('accusing!');
}

// ANCHOR run on page load

makeRandomAnimalMurderer()
murderRandomAnimal()

// NOTE murderRandomAnimal now calls this function, so we no longer need it to run on page load
// drawAnimals()