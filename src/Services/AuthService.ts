import jwt from "jsonwebtoken";

export class AuthServices {
  public createToken(id: number) {
    const token = jwt.sign({ id: id }, "itbi", {
      expiresIn: 900,
    });

    return token;
  }
}