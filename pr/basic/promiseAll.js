//
const urls = [
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
];

async function fetchAll() {
  const promises = urls.map((url) => fetch(url).then((res) => res.json()));

  const results = await Promise.all(promises);
  // console.log(results, "[1;31mresults in promiseAll.js at line 13[0m");
}

fetchAll();

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));

}

async function testPromiseAll() {
  const promise = [delay(1000, "a"), delay(500, "b"), delay(1500, "c")];

  const results = await Promise.all(promise);
  console.log(results, "[1;31mresults in promiseAll.js at line 26[0m");
}

testPromiseAll();
