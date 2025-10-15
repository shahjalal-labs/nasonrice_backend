//
async function fetchAllSequential() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
  ];

  for (const url of urls) {
    const data = await fetch(url).then((res) => res.json());
    console.log(data.id, "[1;31mdata in promiseAllAsyncAwait.js at line 11[0m");
  }

  const allData = await Promise.all(
    urls.map((u) => fetch(u).then((r) => r.json())),
  );
  console.log(
    allData.map((d) => d.id),
    "[1;31mallData in promiseAllAsyncAwait.js at line 14[0m",
  );
}

fetchAllSequential();
