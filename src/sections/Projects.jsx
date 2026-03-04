import React from "react";

function Projects() {
  return (
    <div className="project-wrapper">
      <h2>My Projects</h2>

      <section className="project">
        <h3>🍸 The Cocktail Catalogue</h3>

        <p>
          What do you do when you want to make a cocktail but only have a few
          ingredients and no recipe in mind?
        </p>

        <p>
          This is a problem I personally ran into time and time again —
          especially when hosting. That experience inspired me to build The
          Cocktail Catalogue.
        </p>

        <p>
          Powered by the CocktailDB API, users can enter up to three ingredients
          and instantly receive a list of matching cocktail recipes. For the
          adventurous, there is also a random cocktail generator.
        </p>

        <p>
          Beyond recipes, I wanted this to function as a true mixology resource.
          The app includes:
        </p>

        <ul>
          <li>An ingredient encyclopedia</li>
          <li>A glassware guide</li>
          <li>A techniques section covering foundational bartending skills</li>
        </ul>

        <p>
          Users can create accounts, log in, and save their favorite recipes —
          just like a digital recipe box.
        </p>

        <h4>Tech Used:</h4>
        <p>
          React, Node.js, Express, MongoDB, Axios, TheCocktailDB API
        </p>
      </section>

      <section className="project">
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

        <p>Additional features include:</p>

        <ul>
          <li>Sudden pressure change alerts (for headache awareness)</li>
          <li>Extreme heat and cold weather warnings</li>
        </ul>

        <p>
          The goal of this app is to empower users with environmental awareness
          that supports their inner well-being.
        </p>

        <h4>Tech Used:</h4>
        <p>
          React Native (with Expo), OpenWeather API, Google Places API
        </p>
      </section>
    </div>
  );
}

export default Projects;