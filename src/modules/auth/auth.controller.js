export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  login = async (req, res) => {
    try {
      const response = await this.authService.login(req.body);
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
