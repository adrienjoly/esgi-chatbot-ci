const fetch = require("node-fetch"); // https://www.npmjs.com/package/node-fetch

async function exec() {
  const url = process.argv[2];
  let res;
  let body;
  if (url === undefined || !url) {
    console.error("please provide a URL");
    return;
  }
  try {
    res = await fetch(url);
    body = await res.text();
    console.log(body);
  } catch (error) {
    console.error(error);
  }
}

exec();
