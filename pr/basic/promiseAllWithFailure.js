//

async function testFail() {
  const promises = [
    Promise.resolve("success 1"),
    Promise.reject("Oops, failed"),
    Promise.resolve("success 2"),
  ];

  try {
    const results = await Promise.all(promises);
    console.log(
      results,
      "[1;31mresults in promiseAllWithFailure.js at line 12[0m",
    );
  } catch (error) {
    console.error("Promise.all rejected", error);
  }
}

testFail();
