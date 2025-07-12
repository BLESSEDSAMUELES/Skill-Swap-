import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';


dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('DB Error:', err));

// Routes
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
app.get("/", (req, res) => {
  res.send("Skill Swap API is running 🎯");
});

