import express from "express";
import { ruruHTML } from "ruru/server";
import { yoga } from "./graphql/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin" });

const app = express();

app
  .all("/graphql", yoga)
  .get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
  })
  .listen(4000, () => {
    console.log("Running on http://localhost:4000");
  });
