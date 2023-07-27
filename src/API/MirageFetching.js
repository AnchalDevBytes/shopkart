import { createServer } from "miragejs"
import data from "./data.json"

createServer({
  routes() {

    this.get("/api/products", () => {
      return data;
    })
  },
})