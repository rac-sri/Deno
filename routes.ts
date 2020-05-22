import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

const router = new Router();

router
  .get("/api/vi/products", getProducts)
  .get("/api/vi/products:id", getProduct)
  .post("/api/vi/products", addProduct)
  .put("/api/vi/products/:id", updateProduct)
  .delete("/api/vi/products/:id", deleteProduct);

export default router;
