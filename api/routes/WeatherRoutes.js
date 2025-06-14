const router = require("express").Router();
const WeatherController = require("../controllers/WeatherController");
router.get("/:city", WeatherController.addWeather);
router.get('/list/:city', WeatherController.listCities)
router.get("/", WeatherController.addWeather);

module.exports = router;
