const Router = require("express").Router;
const userController = require("../controller/user-controller");
const bookController = require("../controller/book-controller");
const router = new Router();
const authMiddleware = require("../middlewares/auth-middleware");
const { body } = require("express-validator");
const { nanoid } = require("nanoid");
const multer = require("multer");
const path = require("path");

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/create/book", bookController.createBook);

router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/books", bookController.getBooks);
router.get("/books/:id", bookController.getBookById);

router.delete("/delete/book/:id", authMiddleware, bookController.deleteBook);

router.put("/update/book/:id", authMiddleware, bookController.updateBook);

module.exports = router;
