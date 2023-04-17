import {
  discordFacts,
  googleFacts,
  softwareFacts,
  youtubeFacts,
  urlcut
} from "./facts/imports.js";

function getFact(category, index) {
  let facts = [];

  if (category === "Discord") {
    facts = discordFacts;
  } else if (category === "Google") {
    facts = googleFacts;
  } else if (category === "Software") {
    facts = softwareFacts;
  } else if (category === "Youtube") {
    facts = youtubeFacts;
  } else if(category === "urlcut") {
    facts = urlcut
  }else {
    facts = [
      ...googleFacts,
      ...softwareFacts,
      ...discordFacts,
      ...youtubeFacts,
    ];
  }

  const factIndex =
    index !== undefined ? index : Math.floor(Math.random() * facts.length);
  const fact = facts[factIndex];
  return { category, fact };
}

export default getFact;
