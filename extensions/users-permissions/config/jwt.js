module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'e0c1fde4-8ec9-4432-a2a8-cbff2d7e8bb1',
  jwt: {
    expiresIn: "1d",
  }
};