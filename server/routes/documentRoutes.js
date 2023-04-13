const {
  getAllDocuments,
  createDocument,
} = require("../controller/document-controller");

const router = express.Router();

router.route("/docs/:id").post(createDocument);
