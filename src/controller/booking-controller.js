const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function createBooking(req, res) {
  try {
    console.log("Booking data:", req.body);
    const response = await BookingService.createBooking({
      flightId: req.body.flightId,
      userId: req.body.userId,
      noOfSeats: req.body.noOfSeats,
    });
    successResponse.data = response;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log("Error:", error);
    errorResponse.message = "Something went wrong while booking";
    errorResponse.error = error;
    return res
      .status(error?.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(errorResponse);
  }
}

module.exports = {
  createBooking,
};
