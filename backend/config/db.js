import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

export default connectDB;
