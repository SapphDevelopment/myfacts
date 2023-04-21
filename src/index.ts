import {
  biologyFacts,
  catFacts,
  discordFacts,
  dogFacts,
  geographyFacts,
  googleFacts,
  openaiFacts,
  penguinFacts,
  scienceFacts,
  softwareFacts,
  spaceFacts,
  urlcutfacts,
  youtubeFacts,
} from "./facts/imports.js";

type Category =
  | "Animals"
  | "Biology"
  | "Cats"
  | "Discord"
  | "Dogs"
  | "Geography"
  | "Google"
  | "OpenAI"
  | "Penguins"
  | "Research"
  | "Science"
  | "Software"
  | "Space"
  | "Urlcut"
  | "Youtube"
  | "Random";

interface Fact {
  category: Category;
  fact: string;
}

function getFact(category: Category, index?: number): Fact {
  let facts: string[] = [];
  if (category === "Animals"){
    facts = [
      ...catFacts,
      ...dogFacts,
      ...penguinFacts,
    ];
  } else if (category === "Biology"){
    facts = biologyFacts;
  } else if (category === "Cats"){
    facts = catFacts;
  } else if (category === "Discord") {
    facts = discordFacts;
  } else if (category === "Dogs") {
    facts = dogFacts;
  } else if (category === "Geography"){
    facts = geographyFacts;
  } else if (category === "Google") {
    facts = googleFacts;
  } else if (category === "OpenAI") {
    facts = openaiFacts;
  } else if (category === "Penguins") {
    facts = penguinFacts;
  } else if (category === "Research") {
    facts = [
      ...biologyFacts,
      ...geographyFacts,
      ...scienceFacts,
      ...spaceFacts,
    ];
  } else if (category === "Science") {
    facts = scienceFacts;
  } else if (category === "Software") {
    facts = softwareFacts;
  } else if (category === "Space") {
    facts = spaceFacts
  } else if (category === "Urlcut") {
    facts = urlcutfacts;
  } else if (category === "Youtube") {
    facts = youtubeFacts;
  } else if (category === "Random") {
    facts = [
      ...biologyFacts,
      ...catFacts,
      ...discordFacts,
      ...dogFacts,
      ...geographyFacts,
      ...googleFacts,
      ...openaiFacts,
      ...penguinFacts,
      ...scienceFacts,
      ...softwareFacts,
      ...spaceFacts,
      ...urlcutfacts,
      ...youtubeFacts,
    ];
  }

  const factIndex =
    index !== undefined ? index : Math.floor(Math.random() * facts.length);
  const fact = facts[factIndex];
  return { category, fact };
}

export default getFact;
