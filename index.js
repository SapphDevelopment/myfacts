const facts = {
  discord: [
    "Discord was originally designed to be a communication tool for gamers.",
    "Discord's logo is a game controller combined with a chat bubble.",
    "Discord was founded in 2015 by Jason Citron and Stanislav Vishnevskiy.",
    "Discord has over 150 million monthly active users as of 2021.",
    "Discord was valued at $7 billion in a funding round in December 2020.",
  ],
  google: [
    "Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.",
    "Google's first name was 'Backrub'.",
    "Google's mission statement is 'to organize the world's information and make it universally accessible and useful'.",
    "Google's search engine is so powerful that it can process more than 1.2 trillion web searches per year.",
    "Google has over 135,000 employees worldwide as of 2021.",
  ],
  software: [
    "The first computer program was written by Ada Lovelace in the mid-1800s.",
    "The first software bug was a real bug - a moth stuck in a Harvard Mark II computer in 1947.",
    "The first computer virus was created in 1971 and was called the 'Creeper' virus.",
    "The term 'open source' was first used in 1998 to describe software that is free and open for anyone to use and modify.",
    "The most popular programming language as of 2021 is JavaScript.",
  ],
};

function getFact(category, index) {
  let factsArray = [];

  if (category === "discord") {
    factsArray = facts.discord;
  } else if (category === "google") {
    factsArray = facts.google;
  } else if (category === "software") {
    factsArray = facts.software;
  } else {
    factsArray = [...facts.discord, ...facts.google, ...facts.software];
  }

  const factIndex =
    index !== undefined ? index : Math.floor(Math.random() * factsArray.length);
  return factsArray[factIndex];
}

export default getFact;
