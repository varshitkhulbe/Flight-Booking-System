const axios = require("axios");
const db = require("../models");
const { serverConfig } = require("../config");
const { BookingRepository } = require("../repositories");
const appError = require("../utils/error/app-error");
const { StatusCodes } = require("http-status-codes");

async function createBooking(data) {
  return new Promise((resolve, reject) => {
    const result = db.sequelize.transaction(async function bookingImpl(t) {
      console.log("Using FLIGHT_SERVICE_URL:", serverConfig.FLIGHT_SERVICE_URL);
      const flight = await axios.get(
        `${serverConfig.FLIGHT_SERVICE_URL}/api/v1/flights/${data.flightId}`
      );
      if (data.noOfSeats > flight.data.data.totalSeats) {
        reject(
          new appError("Not enough seats available", StatusCodes.BAD_REQUEST)
        );
      }
      console.log(flight);
      resolve(true);
    });
  });
}

module.exports = {
  createBooking,
};
