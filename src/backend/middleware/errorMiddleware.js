// Handle 404 errors
const notFound = (req, res, next) => {

    const error = new Error(`Not Found - ${req.originalUrl}`);
    
    res.status(404);
    next(error);
  };
  
  // Global error handler
  const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    console.error(`Error: ${err.message}`); // Log errors for debugging
    res.status(statusCode).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  };
  
  
  export { notFound, errorHandler };
  