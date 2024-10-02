function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
const widgetClass = document.querySelectorAll('section div')
widgetClass.forEach((element) =>  {
  element.classList.add("widget")
});
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
const quoteIndex = Math.floor(Math.random() * 10);
const randomQuote = quotes[quoteIndex];   //eslint-disable-line

const randomQuoteDiv = document.createElement('div');
randomQuoteDiv.textContent = randomQuote.quote;
const quoteDiv = document.querySelector('.quoteoftheday');
quoteDiv.appendChild(randomQuoteDiv)

const authorDiv = document.createElement('div');
const {author, date} = randomQuote;

if (date) {
  authorDiv.textContent = `${author} in ${date}`;
  quoteDiv.appendChild(authorDiv)
} else if (date === null) {
  authorDiv.textContent = `${author} in an unknown date`
  quoteDiv.appendChild(authorDiv)
}

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
const corporateSpeak = document.querySelector('.corporatespeak'); //main div name (parent)
const createElementP = document.createElement('p');  //create element p

const randomIndex1 = Math.floor(Math.random() * verbs.length);  //create random index no1
 const randomVerb1 = verbs[randomIndex1]; //get a random verb
 const randomNoun1 = nouns[randomIndex1]; //get a random noun
 const randomAdverb1 = adverbs[randomIndex1]; //get a random adverb

const randomIndex2 = Math.floor(Math.random() * verbs.length);  //create random index no2
 const randomVerb2 = verbs[randomIndex2]; //get a random verb2
 const randomNoun2 = nouns[randomIndex2]; //get a random noun2
 const randomAdverb2 = adverbs[randomIndex2]; //get a random adverb2

 //Adding text contents
createElementP.textContent = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`;
 //Append to DOM
corporateSpeak.appendChild(createElementP);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
const countDownDiv = document.querySelector('.countdown'); //parent
const CountDownParaElem = document.createElement('p'); //where countdown text goes

let count = 5;
CountDownParaElem.textContent = `T-minus ${count}...`; //final text content to p
countDownDiv.appendChild(CountDownParaElem); //append to DOM

let intervalId = setInterval(() => {
  if(count === 1) {
    CountDownParaElem.textContent = "Liftoff! 🚀"
    clearInterval(intervalId)
  } else {
    count--
    CountDownParaElem.textContent = `T-minus ${count}...`
  }
}, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
const randomPerson = people[Math.floor(Math.random() * people.length)]; // random person object
const friendsWidget = document.querySelector('.friends'); //parent element div
const textElement = document.createElement('p'); // create p element for text
friendsWidget.appendChild(textElement)
const year = randomPerson.dateOfBirth.split('-')[0]

const {fname, lname} = randomPerson
let fullName = fname + ' ' + lname;
let sentence = `${fullName} was born in ${year} and `;

if (!randomPerson.friends.length) {
  sentence += "has no friends."
} else {
  sentence += "is friends with "
  for (let idx = 0; idx < randomPerson.friends.length; idx++) {
    const friendId = randomPerson.friends[idx]
    const friend = people.find(per => per.id === friendId)
    const fullNameFriend = `${friend.fname} ${friend.lname}`;
    let isLastIndex = idx === randomPerson.friends.length - 1;
    let isNextToLastIndex = idx === randomPerson.friends.length - 2;

    if (isLastIndex) {
      sentence += `${fullNameFriend}.`
    } else if (isNextToLastIndex) {
      sentence += `${fullNameFriend} and `
    } else {
      sentence += `${fullNameFriend}, `
    }
  }
}

textElement.textContent = sentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
widgetClass.forEach((element, idx) =>  {
  element.setAttribute('tabindex', idx + 1 + '')
});


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
