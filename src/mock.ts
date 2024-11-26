const cars = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Mercedes", model: "EQA", price: 48890, electric: true },
  { make: "Fiat", model: "500", price: 15774, electric: false },
  { make: "Nissan", model: "Juke", price: 20675, electric: false },
];

const dataSample = Array(35)
  .fill(cars)
  .reduce((acc, item) => {
    return acc.concat(item);
  }, []);

async function getData(from: number, to: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dataSample.slice(from, to));
    }, 1000);
  })
}

export default getData;