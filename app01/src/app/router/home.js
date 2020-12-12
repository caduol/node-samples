import { Router } from "express";
import HomeController from "../controllers/HomeController";

let router = new Router();
router.get("/", HomeController.index);

export default router;
