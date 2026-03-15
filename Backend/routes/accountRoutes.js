import express from "express"
import { getBalance, getStatement, doTransfer, getUsers} from "../controllers/accountController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const accountRoute = express.Router();

accountRoute.get("/account/balance", authMiddleware, getBalance);

accountRoute.get("/account/statement", authMiddleware, getStatement);

accountRoute.post("/account/transfer",authMiddleware, doTransfer);

accountRoute.get("/users", getUsers)
