const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
  const response = await axios(url);
  console.log("response.data: ", response.data);
};

getData(url);
