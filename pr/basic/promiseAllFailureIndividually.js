//
async function fetchWithCatch() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/postsss/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  const promises = urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .catch((err) => ({
        error: err,
      })),
  );

  const results = await Promise.all(promises);
  console.log(
    results,
    "[1;31mresults in promiseAllFailureIndividually.js at line 18[0m",
  );
}

fetchWithCatch();
