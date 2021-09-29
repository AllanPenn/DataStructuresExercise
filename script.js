const jedi = [];
jedi[0] = "Luke";
const obiWan = jedi.push("Obi-Wan Kenobi");
const yoda = jedi.unshift("Yoda");
console.log(jedi[1]);
const obiGhost = jedi.pop();
const yodaGhost = jedi.shift();
console.log(jedi);
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
console.log(starWarsVillains.slice(0, 2));
const droids = {astromech: "R2-D2", protocol: "C-3P0", assassin: "IG-88"};
console.log(droids["astromech"]);
console.log(droids.protocol);
droids["assassin"] = "IG-11"