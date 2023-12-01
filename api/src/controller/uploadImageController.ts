import { Request, Response } from "express";
import { uploadImage } from "../service/uploadImageService";

export const uploadImageHandler = async (req: Request, res: Response) => {
  try {
    const { email } = req.params; // Assuming you have the email address in the request parameters
    const profileImage: Express.Multer.File | undefined = req.file; // Assuming the image file is uploaded using a middleware

    if (!profileImage) {
      return res.status(400).json({ message: "No image file provided." });
    }
    // Call the image upload function from your service
    const message = await uploadImage(email, {
      data: profileImage.buffer, // Binary image data
      contentType: profileImage.mimetype, // Content type of the image (e.g., 'image/jpeg')
    });

    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Image upload failed." });
  }
};
