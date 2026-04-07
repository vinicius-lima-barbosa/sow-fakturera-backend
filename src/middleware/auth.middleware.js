import "dotenv/config";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const secret = process.env.SECRET_KEY;
  if (!secret) {
    return res
      .status(500)
      .json({ success: false, error: "Secret key is not defined" });
  }

  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const { id, email } = decoded;

    req.id = id;
    req.email = email;

    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid token" });
  }
};
