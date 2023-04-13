import mongoose from "mongoose";

const Connection = async (password = "vats262001") => {
  const URL = `mongodb+srv://vats1801:${password}@google-docs-clone.7zyrtjq.mongodb.net/?retryWrites=true&w=majority`;

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("database connected successfully");
  } catch (error) {
    console.log("mongo error", error);
  }
};

export default Connection;
