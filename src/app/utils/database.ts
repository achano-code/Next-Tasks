import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || '');
  } catch (error) {
    console.log('Error connecting to MongoDB', error);
    throw new Error('Error connecting to MongoDB');
  }
}
