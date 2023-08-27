// server/server.ts
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

const app = express();
const upload = multer({ dest: 'uploads/' }); // Uploads will be stored in the 'uploads/' directory
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
}));

app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file here
  const uploadedFilePath = req.file.path;
  // You can process the file further, store it, or respond to the client
  res.json({ message: 'File uploaded successfully', filePath: uploadedFilePath });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
