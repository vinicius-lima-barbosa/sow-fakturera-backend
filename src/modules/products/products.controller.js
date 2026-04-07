export class ProductsController {
  constructor(productsService) {
    this.productsService = productsService;
  }

  getAll = async (req, res) => {
    try {
      const response = await this.productsService.getAll();

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error creating product, try again" });
    }
  };

  create = async (req, res) => {
    try {
      const response = await this.productsService.create(req.body);

      return res.status(201).json({ success: true, data: response });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error creating product, try again" });
    }
  };

  update = async (req, res) => {
    try {
      const response = await this.productsService.update(
        req.params.id,
        req.body,
      );

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error updating product, try again" });
    }
  };
}
