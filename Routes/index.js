import express from "express";
import {
    getAllUsers,
    getUserByEmail,
    createUser,
    updateUser
} from "../Controller/UserController.js";

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:email', getUserByEmail);
router.post('/', createUser);
router.patch('/:email', updateUser);

export default router;