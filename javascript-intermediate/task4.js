//email list clean up
/*
You’re given a messy string of names and emails — badly formatted, full of inconsistent casing, extra spaces, and broken structure.
*/
let rawData = `
  alex   smith @gmail.com,  
BEYONCE-KNOWLES@music.com,  
  taylor__swift@pop.com,   
madonna   ciccone   @queen.com ,   
Will_smith@hollywood.com  
`;
/*
Your job is to clean the data and produce a list of properly formatted contacts. Your output should be:

[
  "Alex Smith <smith@gmail.com>",
  "Beyonce Knowles <knowles@music.com>",
  "Madonna Ciccone <ciccone@queen.com>",
  "Taylor Swift <swift@pop.com>",
  "Will Smith <smith@hollywood.com>"
]

Requirements:
Don’t use .map() , regular expressions or any arrow functions.
Capitalize each word in the name.
Rebuild emails correctly (e.g. "smith@gmail.com", not just "@gmail.com").
Remove extra spaces inside emails.
Sort the final array alphabetically by name.
The function should work for more than 5 values as well.
*/
function cleanEmails(emails) {
  let splitEmails = emails.split(',');
  let cleanedContacts = [];
  for (let email of splitEmails) {
    let splitNameAndDomain = email.split('@');
    let namePart = splitNameAndDomain[0].trim();
    let domainPart = splitNameAndDomain[1].trim();
    
    let nameArray = [];
    let currentWord = '';
    for (let char of namePart) { //  Iterate through characters of the string
      if (char === ' ' || char === '-' || char === '_') {
        if (currentWord !== '') {
          nameArray.push(currentWord);
          currentWord = '';
        }
      } else {
        currentWord += char;
      }
    }
    if (currentWord !== '') {
      nameArray.push(currentWord);
    }
    let fullName = '';
    for (let word of nameArray) {
      fullName += word[0].toUpperCase() + word.substring(1).toLowerCase() + ' ';
    }
    fullName = fullName.trim();
    let lastName = nameArray[nameArray.length - 1].toLowerCase();
    let cleanedEmail = lastName + '@' + domainPart.toLowerCase();
    cleanedContacts.push(fullName + ' <' + cleanedEmail + '>');
  }
  cleanedContacts.sort();
  console.log(cleanedContacts);
  return cleanedContacts;
}
cleanEmails(rawData);