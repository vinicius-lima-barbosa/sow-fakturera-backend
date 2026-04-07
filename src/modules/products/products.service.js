export class ProductsService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  getAll = async () => {
    const products = await this.prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });

    return products;
  };

  create = async (data) => {
    if (!data.articleNumber || typeof data.articleNumber !== "number") {
      throw new Error("Article number is required or is not valid");
    }

    if (!data.name || data.name === "") {
      throw new Error("Name is required");
    }

    if (!data.inPrice || typeof data.inPrice !== "number") {
      throw new Error("In price is required or is not valid");
    }

    if (!data.price || typeof data.price !== "number") {
      throw new Error("Price is required or is not valid");
    }

    if (!data.unit || data.unit === "") {
      throw new Error("Unit is required");
    }

    if (!data.inStock || typeof data.inStock !== "number") {
      throw new Error("In stock is required or is not valid");
    }

    if (!data.description || data.description === "") {
      throw new Error("Description is required");
    }

    const productExists = await this.prisma.product.findUnique({
      where: { articleNumber: data.articleNumber },
    });
    if (productExists) {
      throw new Error("Article number already exists");
    }

    const newProduct = await this.prisma.product.create({
      data: {
        articleNumber: parseInt(data.articleNumber),
        name: data.name,
        inPrice: parseInt(data.inPrice),
        price: parseInt(data.price),
        unit: data.unit,
        inStock: parseInt(data.inStock),
        description: data.description,
      },
    });

    return newProduct;
  };

  update = async (id, data) => {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new Error("This product doesn't exist");
    }

    if (data.articleNumber && typeof data.articleNumber !== "number") {
      throw new Error("Article number is not valid");
    }

    if (data.name && data.name === "") {
      throw new Error("Name is not valid");
    }

    if (data.inPrice && typeof data.inPrice !== "number") {
      throw new Error("In price is not valid");
    }

    if (data.price && typeof data.price !== "number") {
      throw new Error("Price is not valid");
    }

    if (data.unit && data.unit === "") {
      throw new Error("Unit is not valid");
    }

    if (data.inStock && typeof data.inStock !== "number") {
      throw new Error("In stock is not valid");
    }

    if (data.description && data.description === "") {
      throw new Error("Description is not valid");
    }

    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data,
    });

    return updatedProduct;
  };
}
