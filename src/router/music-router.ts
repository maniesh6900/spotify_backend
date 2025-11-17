
import { addMusic, deleteSong, getAllSongs, getSongById } from "../controller/music-controller.js";
import { userMiddlerware } from "../middlerware/user-middlerware.js";
import { Router } from "express";
import { upload } from "../middlerware/multer.js";
const router = Router();


router.route("/add").post(
    userMiddlerware, // verfing user
    upload.fields([ // uploading audio file
        { name: 'audio', maxCount: 1 },
    ]),
    addMusic, // server logic
);

router.route("/getAll").get(getAllSongs);
router.route("/get/:id").get(getSongById);
router.route("/delete/:id").delete(deleteSong);



export default router;