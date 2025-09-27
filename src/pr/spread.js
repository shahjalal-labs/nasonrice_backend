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
// console.log(data, "[1;31mdata in spread.js at line 4[0m");

const existing = {
  images: ["old1.png", "old2.png"],
};

const newUrls = [];

const updatedData = {
  ...existing,
  ...(newUrls?.length ? { images: newUrls } : {}),
};

// console.log(updatedData, "[1;31mupdatedData in spread.js at line 20[0m");

const payload = {
  name: "laptop",
};

const discount = "watch";

const data3 = {
  ...payload,
  ...(discount ? { discount } : {}),
};

// console.log(data3, "[1;31mdata3 in spread.js at line 33[0m");

const user = {
  id: 1,
  name: "John",
};

const includeProfile = true;
