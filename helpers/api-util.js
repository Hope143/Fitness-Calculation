export async function getAllArticles() {
  const response = await fetch(
    "https://fitness-guide-9a598-default-rtdb.asia-southeast1.firebasedatabase.app/articles.json"
  );

  const data = await response.json();

  const articles = [];

  for (const key in data) {
    articles.push({ id: key, ...data[key] });
  }

  return articles;
}

export async function isFeaturedArticles() {
  const allEvents = await getAllArticles();

  return allEvents.filter((event) => event.isFeatured);
}

export async function weightLossHandler() {
  const allEvents = await getAllArticles();

  return allEvents.filter((event) => event.objective === "weightLoss");
}

export async function weightGainHandler() {
  const allEvents = await getAllArticles();

  return allEvents.filter((event) => event.objective === "weightGain");
}

export async function HealthyLifestyleHandler() {
  const allEvents = await getAllArticles();

  return allEvents.filter((event) => event.objective === "healthyLifestyle");
}

export async function SupplementsHandler() {
  const allEvents = await getAllArticles();

  return allEvents.filter((event) => event.objective === "supplement");
}

export async function ArticleIdHandler(paramsId) {
  const allEvents = await getAllArticles();

  return allEvents.find((event) => event.id === paramsId);
}
