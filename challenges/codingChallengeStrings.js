// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const convertToCamelCase = function () {
  const textareaValue = document.querySelector('textarea').value;
  const words = textareaValue.split('\n');

  for (const [index, word] of words.entries()) {
    const [firstWord, secondWord] = word.trim().toLowerCase().split('_');
    const camelCaseWord = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;
    // const camelCaseWord = [
    //   firstWord,
    //   secondWord.replace(secondWord[0], secondWord[0].toUpperCase()),
    // ].join('');
    console.log(`${camelCaseWord.padEnd(20)} ${'✅'.repeat(index + 1)}`);
  }
};

document.querySelector('button').addEventListener('click', convertToCamelCase);
