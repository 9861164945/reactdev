const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // 1. Extract and Validate Token Format:
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send({
        message: "Invalid authorization format. Expected 'Bearer <token>'.",
        success: false
      });
    }

    const token = authHeader.split(' ')[1];

    // 2. Verify JWT Using Secret Key:
    const decoded = await JWT.verify(token, process.env.JWT_SECRET); // Use async/await for cleaner syntax

    // 3. Extract User ID from Decoded Payload and Attach to Request:
    req.body.userId = decoded.id;

    // 4. Proceed to Next Middleware or Route Handler:
    next();
  } catch (error) {
    console.error(error);

    // 5. Handle Errors Appropriately:
    if (error.name === 'JsonWebTokenError') { // Specific error handling for JWT issues
      return res.status(401).send({
        message: "Invalid or expired token.",
        success: false
      });
    } else { // Handle other general errors
      return res.status(500).send({
        message: "Internal server error during authentication.",
        success: false
      });   
    }
  }
};