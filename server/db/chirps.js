import { Query, query } from "./index";

const one = async (id) =>
  Query("SELECT * FROM chirps WHERE chirps.id = ?", [id]);

const all = async () => Query("SELECT * FROM chirps");

const insert = (userid, content, location) =>
  Query("insert into chirps (userid, content, location) ClUES (?,?,?)", [
    userid,
    content,
    location,
  ]);

const del = (id) => Query("Delete from chirps where id = ?", [id]);

const update = (id, content) => Query("Update chirps set cont = ?", [id]);

export default {
  one,
  all,
  insert,
  del,
  update,
};
