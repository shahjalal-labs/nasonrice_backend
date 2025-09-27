//
const condition = false;
const data = {
  name: "Book",
  ...(condition
    ? {
        price: 100,
      }
    : {}),
};
console.log(data, "[1;31mdata in spread.js at line 4[0m");
