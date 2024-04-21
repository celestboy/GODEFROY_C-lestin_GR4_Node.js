import express from "express";
import UsersControllers from "../controllers/UsersControllers.js";
import AuthentificationController from "../controllers/AuthentificationController.js";
import AuthentificationMiddleware from "../middlewares/AuthentificationMiddleware.js";

const router = express.Router();

router.get("/users", UsersControllers.index);

router.get("/users/:id", UsersControllers.show);

router.post("/users", UsersControllers.store);

router.put("/users/:id", UsersControllers.update);

router.delete("/users/:id", UsersControllers.destroy);

router.get(
  "/getMyProfile",
  AuthentificationMiddleware.authentification,
  UsersControllers.getMyProfile
);

router.post("/login", AuthentificationController.login);

export default router;
