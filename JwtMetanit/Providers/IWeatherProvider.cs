using System.Collections.Generic;
using JwtMetanit.Models;

namespace JwtMetanit.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
