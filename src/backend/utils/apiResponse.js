export const successResponse = (res, message, data) => {
    return res.status(200).json({ message, data });
  };
  
  export const errorResponse = (res, message) => {
    return res.status(500).json({ message });
  };
  