import React from "react";
import Website from "../assets/Images/website.png"; 
import App from "../assets/Images/App.png";         

function Projects() {
  return (
    <div className="project-wrapper">
      <h2>My Projects</h2>

      <section className="project">
        <div className="project-content">
          <div className="project-text">
            <h3>🍸 The Cocktail Catalogue</h3>
            <p>
              What do you do when you want to make a cocktail but only have a few
              ingredients and no recipe in mind?
            </p>
            <p>
              This is a problem I personally ran into time and time again —
              especially when hosting. These experiences inspired me to build The
              Cocktail Catalogue.
            </p>
            <p>
              Powered by the CocktailDB API, users can enter up to three ingredients
              and instantly receive a list of matching cocktail recipes.
            </p>
            <p>
              In addition to the main functionality, the Catalogue also includes:
            </p>
            <ul>
              <li>An ingredient encyclopedia</li>
              <li>A glassware guide</li>
              <li>A techniques section covering foundational bartending skills</li>
            </ul>
            <h4>Tech Used:</h4>
            <p>React, Node.js, Express, MongoDB, Axios, TheCocktailDB API</p>
          </div>

          <div className="project-image">
            <img src={Website} alt="Cocktail Catalogue Website" />
            <a href="https://cocktail-catalogue.vercel.app/" target="_blank" className="project-btn">Go to Website</a>
          </div>
        </div>
      </section>


      <section className="project">
        <div className="project-content">
          <div className="project-text">
            <h3>🌤 HeyDay – Weather Forecast + Self-Care</h3>
            <p>
              Weather has a measurable impact on mood and overall well-being. I
              built HeyDay to help users better understand and respond to that
              connection.
            </p>
            <p>
              Using OpenWeather API and Google Places API, the app provides a
              5-day forecast based on user location.
            </p>
            <p>
              Twice-daily check-ins track mood and energy levels, which are
              analyzed alongside forecast data to offer personalized self-care
              suggestions.
            </p>
            <p>
              Other features:
            </p>
            <ul>
              <li>Sudden pressure change alerts (for headache awareness)</li>
              <li>Extreme heat and cold weather warnings, alerting the user to the impact this may have on their overall well-being</li>
            </ul>
            <h4>Tech Used:</h4>
            <p>React Native (with Expo), OpenWeather API, Google Places API</p>
          </div>

          <div className="project-image">
            <img src={App} alt="HeyDay App Screenshot" />
            <a href="https://github.com/amandamackinnon/moodmap" target="_blank" className="project-btn">Visit GitHub Repo</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;