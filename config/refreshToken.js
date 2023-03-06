const jwt = require("jsonwebtoken");

const generateRefreshToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET ? process.env.JWT_SECRET : "Are you Gay",
    { expiresIn: "3d" }
  );
};

module.exports = { generateRefreshToken };
