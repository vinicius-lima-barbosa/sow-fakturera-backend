export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  login = async (req, res) => {
    try {
      const response = await this.authService.login(req.body);

      res.cookie("token", response.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "prod",
        sameSite: process.env.NODE_ENV === "prod" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      });

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error Login in, try again" });
    }
  };
}
