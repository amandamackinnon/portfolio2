import React from "react";
import Website from "../assets/Images/website.png"; 
import App from "../assets/Images/App.png";     
import Yield2 from "../assets/Images/Yield2.png";     

function Projects() {
  return (
    <section id= "projects" className="project-wrapper">
      <h2>My Projects</h2>
      <div className="project-item">
          <div className= "project-content">
            <div className="project-text">
              <h3>🥕 Yield: Waste Less Cook Smarter</h3>
              <p>
              Every year, tonnes of food end up in landfills, contributing to food insecurity and climate change. Yield is your personal kitchen assistant, designed to help you track groceries, eliminate food waste, discover delicious recipes, and have fun doing it!
            </p>
            <p>
              Key features include:
            </p>
            <ul>
              <li>Your Virtual Fridge: Easily log your food items</li>
              <li>Smart Expiration Alerts: Get notified when items are within 3 days of expiring</li>
              <li>Recipe Suggestions: Tap any ingredient to discover recipes</li>
              <li>Waste & Consumption Dashboard: Snapshot of your weekly food habits </li>
              <li>Food Trivia & Facts: Food facts to test your knowledge with multiple-choice trivia</li>
            </ul>
            <h4>Tech Used:</h4>
            <p>React, Node.js, Express, Spoonacular API, The Trivia API</p>
          </div>

          <div className="project-image">
            <img src={Yield2} alt="Yield App" />
            <div className ="project-actions">
              <div className ="top-row1">
                <a href="https://apps.apple.com/app/yield-waste-less-cook-smarter/id6806539251" target="_blank" className="project-btn">Apple App Store</a>
                <div className ="bottom-row">
                <a href="https://github.com/amandamackinnon/YieldMyCode" target="_blank" className="project-btn btn-outline">Visit GitHub Repo</a>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <div className="project-item">
          <div className="project-content">
          <div className="project-text">
            <h3>🌤 CareCast – Weather Forecast + Self-Care</h3>
            <p>
              Weather has a measurable impact on mood and overall well-being. I
              built CareCast to help users better understand and respond to that
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
            <div className="project-actions">
              <div className="top-row">
            <a href="https://play.google.com/store/apps/details?id=com.barcelonacodeschool.heyday" target="_blank" className="project-btn">Google Play Store</a>
            <a href="https://apps.apple.com/us/app/carecast/id6760472628" target="_blank" className="project-btn">Apple App Store</a>
            </div>
            <div className ="bottom-row">
            <a href="https://github.com/amandamackinnon/moodmap" target="_blank" className="project-btn btn-outline">Visit GitHub Repo</a>
            </div>
            </div>
          </div>
          </div>
        </div>


        <div className="project-item">
          <div className= "project-content">
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
            <div className ="project-actions">
              <div className ="top-row1">
                <a href="https://cocktail-catalogue.vercel.app/" target="_blank" className="project-btn">Go to Website</a>
                <div className ="bottom-row">
                <a href="https://github.com/amandamackinnon/Cocktail-Catalogue" target="_blank" className="project-btn btn-outline">Visit GitHub Repo</a>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}

export default Projects;