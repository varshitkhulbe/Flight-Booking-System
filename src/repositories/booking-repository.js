const  CrudRepository = require("./crud-repository");
const { StatusCodes } = require("http-status-codes");
const { Booking } = require("../models");
class BookingRepository extends CrudRepository {
  constructor() {
    super(Booking);
  }
}
module.exports = BookingRepository;
