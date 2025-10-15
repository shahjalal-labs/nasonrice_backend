//
async function fetchWithCatch() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  const promises = urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .catch((err) => ({
        error: err.message;
      }),
  );
}
