export class MetadataController {
  constructor(metadataService) {
    this.metadataService = metadataService;
  }

  getAll = async (_req, res) => {
    try {
      const response = await this.metadataService.getAll();

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error fetching metadata" });
    }
  };

  getById = async (req, res) => {
    try {
      const response = await this.metadataService.getById(req.params.id);

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error fetching the metadata" });
    }
  };

  create = async (req, res) => {
    try {
      const response = await this.metadataService.create(req.body);

      return res.status(201).json({ success: true, data: response });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ success: false, error: error.message });
      }

      return res
        .status(500)
        .json({ success: false, error: "Error creating metadata, try again" });
    }
  };

  update = async (req, res) => {
    try {
      const response = await this.metadataService.update(
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
        .json({ success: false, error: "Error updating metadata, try again" });
    }
  };
}
