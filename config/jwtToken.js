const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET ? process.env.JWT_SECRET : "Are you Gay",
    { expiresIn: "1d" }
  );
};

module.exports = { generateToken };
