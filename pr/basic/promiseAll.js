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
  console.log(results, "[1;31mresults in promiseAll.js at line 13[0m");
}

fetchAll();
