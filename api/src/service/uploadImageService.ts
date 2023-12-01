import User from "../model/user";

export const uploadImage = async (
  email: string,
  image: { data: Buffer; contentType: string }
) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return "User not found";
    }

    // Update the user's profileImage field
    user.profileImage = {
      data: image.data,
      contentType: image.contentType,
    };

    await user.save();

    return "Image uploaded successfully";
  } catch (error) {
    console.error(error);
    throw new Error("Image upload failed");
  }
};
