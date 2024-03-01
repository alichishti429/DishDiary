import { Router } from "express";
import { validate } from "./../middlewares/validate";
import {
  createRecipeSchema,
  getRecipeSchema,
  getUserRecipesSchema,
  searchRecipeSchema,
} from "./../schema-validation";

const router = Router();

router.post("/join");

router.get("/find", validate(searchRecipeSchema));
router.get("/");
router.get("/create", validate(createRecipeSchema));
router.get("/user/:userId", validate(getUserRecipesSchema));
router.get("/:id", validate(getRecipeSchema));

export { router };
