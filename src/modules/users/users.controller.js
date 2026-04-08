export class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  getAllUsers = async (_req, res) => {
    try {
      const users = await this.usersService.getAllUsers();
      return res.status(200).json({ success: true, data: users });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error while fetching the users" });
    }
  };

  getUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await this.usersService.getUserById(id);

      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error while fetching user" });
    }
  };

  getMe = async (req, res) => {
    try {
      const id = req.id;

      const user = await this.usersService.getUserById(id);

      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error while fetching user" });
    }
  };

  createUser = async (req, res) => {
    try {
      const newUser = await this.usersService.createUser(req.body);
      return res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error while creating user" });
    }
  };
}
