import * as mysql from "mysql";

import Blogs from "./chirps";

export const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "chirps",
  password: "12345",
  database: "chirps",
});

export const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

export default {
  Blogs,
};
