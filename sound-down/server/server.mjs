// server/server.ts
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('track'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // You can save the file information to a database or perform any necessary actions
  const file = req.file;
  console.log('Uploaded file:', file);

  return res.status(200).json({ message: 'File uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
