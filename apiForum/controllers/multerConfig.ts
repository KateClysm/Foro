// import multer from "multer";
// import { Request} from 'express';

// export const storageForPostsPictures = multer.diskStorage({
//   destination: function (req:Request, file, cb){
//     cb(null, '../uploads/posts')
//   },
//   filename: function (req:Request, file, cb){
//     cb(null, Date.now()+file.originalname);
//   }
// });
// const upload = multer({ storageForPostsPictures });
// app.post('/apiForum/upload', upload.single('file'), (req: Request, res: Response) => { 
//   const file = req.file;
//   if(file){
//     return res.status(200).json(file.filename)
//   }
// })