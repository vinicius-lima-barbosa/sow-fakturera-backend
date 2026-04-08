export class MetadataService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  getAll = async () => {
    const metadata = await this.prisma.loginPageMetadata.findMany();
    return metadata;
  };

  getById = async (id) => {
    const metadata = await this.prisma.loginPageMetadata.findUnique({
      where: { id },
    });

    if (!metadata) {
      throw new Error("Metadata doesn't exist");
    }

    return metadata;
  };

  create = async (data) => {
    const metadataExists = await this.prisma.loginPageMetadata.findUnique({
      where: { language: data.language },
    });
    if (metadataExists) {
      throw new Error("Metadata already in use");
    }

    // I really needed to use zod here ;-;
    if (!data.language || data.language === "") {
      throw new Error("Language is required or is not valid");
    }
    if (!data.iconUrl || data.iconUrl === "" || !new URL(data.iconUrl)) {
      throw new Error("Icon URL is required or is not valid");
    }

    // To Navbar
    if (!data.home || data.home === "") {
      throw new Error("Home is required or is not valid");
    }
    if (!data.order || data.order === "") {
      throw new Error("Order is required or is not valid");
    }
    if (!data.aboutUs || data.aboutUs === "") {
      throw new Error("About Us is required or is not valid");
    }
    if (!data.ourCostumers || data.ourCostumers === "") {
      throw new Error("Our Customers is required or is not valid");
    }
    if (!data.contactUs || data.contactUs === "") {
      throw new Error("Contact Us is required or is not valid");
    }

    // To login card
    if (!data.loginHeader || data.loginHeader === "") {
      throw new Error("Login Header is required or is not valid");
    }
    if (!data.emailLabel || data.emailLabel === "") {
      throw new Error("Email Label is required or is not valid");
    }
    if (!data.emailField || data.emailField === "") {
      throw new Error("Email Field is required or is not valid");
    }
    if (!data.passwordLabel || data.passwordLabel === "") {
      throw new Error("Password Label is required or is not valid");
    }
    if (!data.passwordField || data.passwordField === "") {
      throw new Error("Password Field is required or is not valid");
    }
    if (!data.loginButton || data.loginButton === "") {
      throw new Error("Login Button is required or is not valid");
    }
    if (!data.registerButton || data.registerButton === "") {
      throw new Error("Register Button is required or is not valid");
    }
    if (!data.forgottenPasswordButton || data.forgottenPasswordButton === "") {
      throw new Error("Forgotten Password Button is required or is not valid");
    }

    // To footer
    if (!data.footerTitle || data.footerTitle === "") {
      throw new Error("Footer Title is required or is not valid");
    }
    if (!data.footerHome || data.footerHome === "") {
      throw new Error("Footer Home is required or is not valid");
    }
    if (!data.footerOrder || data.footerOrder === "") {
      throw new Error("Footer Order is required or is not valid");
    }
    if (!data.footerContactUs || data.footerContactUs === "") {
      throw new Error("Footer Contact Us is required or is not valid");
    }
    if (!data.rights || data.rights === "") {
      throw new Error("Rights is required or is not valid");
    }

    const newMetadata = await this.prisma.loginPageMetadata.create({
      data,
    });

    return newMetadata;
  };

  update = async (id, data) => {
    const metadata = await this.prisma.loginPageMetadata.findUnique({
      where: { id },
    });

    if (!metadata) {
      throw new Error("This metadata doesn't exist");
    }

    if (data.language && data.language === "") {
      throw new Error("Language is not valid");
    }
    if (
      (data.iconUrl && data.iconUrl === "") ||
      (data.iconUrl && !new URL(data.iconUrl))
    ) {
      throw new Error("Icon URL is not valid");
    }

    // To Navbar
    if (data.home && data.home === "") {
      throw new Error("Home is not valid");
    }
    if (data.order && data.order === "") {
      throw new Error("Order is not valid");
    }
    if (data.ourCostumers && data.ourCostumers === "") {
      throw new Error("Our Customers is not valid");
    }
    if (data.aboutUs && data.aboutUs === "") {
      throw new Error("About Us is not valid");
    }
    if (data.contactUs && data.contactUs === "") {
      throw new Error("Contact Us is not valid");
    }

    // To login card
    if (data.loginHeader && data.loginHeader === "") {
      throw new Error("Login Header is not valid");
    }
    if (data.emailLabel && data.emailLabel === "") {
      throw new Error("Email Label is not valid");
    }
    if (data.emailField && data.emailField === "") {
      throw new Error("Email Field is not valid");
    }
    if (data.passwordLabel && data.passwordLabel === "") {
      throw new Error("Password Label is not valid");
    }
    if (data.passwordField && data.passwordField === "") {
      throw new Error("Password Field is not valid");
    }
    if (data.loginButton && data.loginButton === "") {
      throw new Error("Login Button is not valid");
    }
    if (data.registerButton && data.registerButton === "") {
      throw new Error("Register Button is not valid");
    }
    if (data.forgottenPasswordButton && data.forgottenPasswordButton === "") {
      throw new Error("Forgotten Password Button is not valid");
    }

    // To footer
    if (data.footerTitle && data.footerTitle === "") {
      throw new Error("Footer Title is not valid");
    }
    if (data.footerHome && data.footerHome === "") {
      throw new Error("Footer Home is not valid");
    }
    if (data.footerOrder && data.footerOrder === "") {
      throw new Error("Footer Order is not valid");
    }
    if (data.footerContactUs && data.footerContactUs === "") {
      throw new Error("Footer Contact Us is not valid");
    }
    if (data.rights && data.rights === "") {
      throw new Error("Rights is not valid");
    }

    const updatedMetadata = await this.prisma.loginPageMetadata.update({
      where: { id },
      data,
    });

    return updatedMetadata;
  };
}
