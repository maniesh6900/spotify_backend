import { UserLogin, UserLogout, UserSignup } from "../controller/user-controller.js";
import { Router } from "express";
import { userMiddlerware } from "../middlerware/user-middlerware.js";
const router = Router();
router.route("/signup").post(UserSignup);
router.route("/login").post(UserLogin);
router.route("/logout").post(userMiddlerware, UserLogout);
export default router;
//# sourceMappingURL=user-routes.js.map