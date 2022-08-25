export function i18n(strings, ...vars) {
  // how does it know strings, vars
  // basic localization utility
  // TODO: replace each text fragment with its translation below, do not touch interpolated value;

  let newStr = strings.reduce((out, str, i) => {
    // i =0, str = Hello -> Bonjour, out = Bonjour Jean
    // i =1, str = you have -> vous avez, out = Bonjour Jean, vous avez 5
    // i =2 , str = new emails -> nouveaux messages ,out = final string
    return `${out}${translations[str]}${vars[i] || ""}`;
  }, "");

  return newStr;
}

const translations = {
  "Hello ": "Bonjour ",
  ", you have ": ", vous avez ",
  " new mails.": " nouveaux messages."
};

// Exemple d'utilisation

const name = "Bob",
  nbMails = 3;

console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);
