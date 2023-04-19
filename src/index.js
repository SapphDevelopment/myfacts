import {
  catFacts,
  discordFacts,
  dogFacts,
  googleFacts,
  openaiFacts,
  penguinFacts,
  softwareFacts,
  urlcutfacts,
  youtubeFacts,
} from "./facts/imports.js";

function getFact(category, index) {
  let facts = [];
  if (category === "Animals"){
    facts = [
      ...catFacts,
      ...dogFacts,
      ...penguinFacts,
    ];
  } else if (category === "Cats"){
    facts = catFacts;
  } else if (category === "Discord") {
    facts = discordFacts;
  } else if (category === "Dogs") {
    facts = dogFacts;
  } else if (category === "Google") {
    facts = googleFacts;
  } else if (category === "OpenAI") {
    facts = openaiFacts;
  } else if (category === "Penguins") {
    facts = penguinFacts;
  } else if (category === "Software") {
    facts = softwareFacts;
  } else if (category === "Urlcut") {
    facts = urlcutfacts;
  } else if (category === "Youtube") {
    facts = youtubeFacts;
  } else {
    facts = [
      ...catFacts,
      ...discordFacts,
      ...dogFacts,
      ...googleFacts,
      ...openaiFacts,
      ...penguinFacts,
      ...softwareFacts,
      ...urlcutfacts,
      ...youtubeFacts,
    ];
  }

  const factIndex = index !== undefined ? index : Math.floor(Math.random() * facts.length);
  const fact = facts[factIndex];
  return { category, fact };
}

export default getFact;
