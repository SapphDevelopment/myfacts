import axios from 'axios';

type Category = "Bird" | "Cat" | "Dog" | "Fox" | "Koala" | "Panda" | "Random";

interface Fact {
  category: Category;
  fact: string;
}

async function getFact(category: Category, index?: number): Promise<Fact> {
  const baseUrl: string = "https://some-random-api.com/facts/";
  const url: string = category !== "Random" ? `${baseUrl}${category.toLowerCase()}` : baseUrl;

  try {
    const response = await axios.get(url);
    const facts: string[] = category !== "Random" ? [response.data.fact] : response.data.facts;
    const fact: string = index !== undefined ? facts[index] : facts[Math.floor(Math.random() * facts.length)];

    return { category, fact };
  } catch (error) {
    console.error("Failed to fetch facts:", error);
    throw new Error("Failed to fetch facts. Please try again later.");
  }
}

export default getFact;
