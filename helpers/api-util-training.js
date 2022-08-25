export async function getAllTraining() {
  const response = await fetch(
    "https://fitness-guide-9a598-default-rtdb.asia-southeast1.firebasedatabase.app/training.json"
  );

  const data = await response.json();

  const training = [];

  for (const key in data) {
    training.push({ id: key, key: data[key] });
  }

  return training;
}

export async function getFilteredTraining(training) {
  const { muscleGroup, level } = training;

  const askedTraining = await getAllTraining();

  var newArray = askedTraining.filter((selected) => {
    return selected.id === muscleGroup;
  });

  const [{ id, key }] = newArray;
  var results = Object.fromEntries(
    Object.entries(key).filter(([key]) => key.includes(level))
  );

  return results;
}
