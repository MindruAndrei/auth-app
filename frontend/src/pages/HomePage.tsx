import { useEffect, useState } from "react";
import { getWeatherData } from "../api/weather";
import LineChart from "../components/LineChart";
import { useAppContext } from "../context/AppContext";

function HomePage() {
  const [weatherData, setWeatherData] = useState<any>([]);
  const { setShowSnackbar } = useAppContext();

  useEffect(() => {
    getWeatherData()
      .then((resp) => setWeatherData(resp.data))
      .catch(() =>
        setShowSnackbar({
          visible: true,
          message: "There was an error fetching weather data",
          type: "error",
        })
      );
  }, []);

  return (
    <>
      <div className="text-[60px]/[30px] text-center my-12">Home</div>
      <div className="text-[40px]/[30px] text-center my-12">Wheather data</div>
      <LineChart data={weatherData} />
    </>
  );
}

export default HomePage;
