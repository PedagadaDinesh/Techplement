document.addEventListener("DOMContentLoaded", function () {
  const getWeather = async (city) => {
    cityName.innerHTML = city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "409ff1a835msh84a80b82aac155dp1c60b2jsn1df3e8bdb527",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        const tempCelsius = data.temp;
        const windSpeedKmh = data.wind_speed;

        document.getElementById("temp").innerHTML = `${tempCelsius.toFixed(
          0
        )}°C`;
        document.getElementById(
          "temperature"
        ).innerHTML = `${tempCelsius.toFixed(0)}°C`;
        document.getElementById(
          "feels_like"
        ).innerHTML = `${data.feels_like.toFixed(2)}`;
        document.getElementById("humidity").innerHTML = `${data.humidity}%`;
        document.getElementById("humid").innerHTML = `${data.humidity}%`;
        document.getElementById(
          "min_temp"
        ).innerHTML = `${data.min_temp.toFixed(2)}°C`;
        document.getElementById(
          "max_temp"
        ).innerHTML = `${data.max_temp.toFixed(2)}°C`;
        document.getElementById(
          "wind_speed"
        ).innerHTML = `${windSpeedKmh.toFixed(0)} km/hr`;
        document.getElementById(
          "windspeed"
        ).innerHTML = `${windSpeedKmh.toFixed(0)} km/hr`;
        document.getElementById(
          "wind_degrees"
        ).innerHTML = `${data.wind_degrees}°`;
        document.getElementById("sunrise").innerHTML = new Date(
          data.sunrise * 1000
        ).toLocaleTimeString();
        document.getElementById("sunset").innerHTML = new Date(
          data.sunset * 1000
        ).toLocaleTimeString();
      } catch (error) {
        console.error(error);
      }
    }

    await fetchData();
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const city = document.getElementById("city").value;
    getWeather(city);
  };

  // Add event listener to the submit button
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", handleSubmit);

  // Set default city and fetch weather when DOM content is loaded
  const defaultCity = "Bhubaneswar";
  getWeather(defaultCity);

  // Set greeting and date
  const greeting = document.querySelector("h1");
  const dateHeading = document.querySelector("p");

  const currentDate = new Date();

  // Format time
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const timeOfDay = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  const currentTime =
    hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + timeOfDay;

  // Format date
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentDateFormatted =
    currentDayOfWeek +
    ", " +
    currentMonth +
    " " +
    currentDay +
    ", " +
    currentYear;

  // Set greeting
  let greetingText = "Good ";
  if (hours < 12) {
    greetingText += "Morning";
  } else if (hours >= 12 && hours < 17) {
    greetingText += "Afternoon";
  } else {
    greetingText += "Evening";
  }
  greetingText += " " + currentTime;

  greeting.textContent = greetingText;

  // Set date in h1 tag
  dateHeading.textContent = currentDateFormatted;
});
