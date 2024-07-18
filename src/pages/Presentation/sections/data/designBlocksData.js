/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import secOne from "assets/images/gifs/Animation.gif";
import secTwo from "assets/images/gifs/Animation1.gif";
import secThree from "assets/images/gifs/Animation2.gif";
import secFour from "assets/images/gifs/Animation3.gif";
import canOne from "assets/images/gifs/Animation4.gif";
import canTwo from "assets/images/gifs/Animation5.gif";
import canThree from "assets/images/gifs/Animation6.gif";
import canFour from "assets/images/gifs/Animation7.gif";
import zomOne from "assets/images/gifs/Animation8.gif";
import zomTwo from "assets/images/gifs/Animation9.gif";
import zomThree from "assets/images/gifs/Animation10.gif";
import zomFour from "assets/images/gifs/Animation11.gif";
import ueOne from "assets/images/gifs/Animation12.gif";
import ueTwo from "assets/images/gifs/Animation13.gif";
import ueThree from "assets/images/gifs/Animation14.gif";
import ueFour from "assets/images/gifs/Animation15.gif";
import airOne from "assets/images/gifs/Animation16.gif";
import airTwo from "assets/images/gifs/Animation17.gif";
import airThree from "assets/images/gifs/Animation18.gif";
import airFour from "assets/images/gifs/Animation19.gif";

export default [
  {
    title: "Security Installer",
    description:
      "An application built for windows which installs support tools, and grabs hardware info about the computer",
    items: [
      {
        image: secOne,
        name: "Check Boxes",
        count: "Easy and simple to understand interface",
      },
      {
        image: secTwo,
        name: "Hardware Info",
        count: "A single place to get all hardware info about a comptuer",
      },
      {
        image: secThree,
        name: "Logging Console",
        count: "See any errors or information about the running application",
      },
      {
        image: secFour,
        name: "Parallel Async",
        count: "Optimized task execution running tasks in parallel",
      },
    ],
  },
  {
    title: "Canvas Collective",
    description:
      "Fun and engaging website to draw small pieces of art and share them with other users.",
    items: [
      {
        image: canOne,
        name: "Perlin Noise",
        count: "Perlin noise built inside of the standard HTML SVG element used creatively",
      },
      {
        image: canTwo,
        name: "Canvas API",
        count: "Leverages the HTML Canvas element and API for creating art",
      },
      {
        image: canThree,
        name: "User Authentication",
        count: "Utilizes BCrypt library to properly store salted, hased, and encrypted passwords",
      },
      {
        image: canFour,
        name: "Custom React Hooks",
        count:
          "Abstracted canvas functionality into a custom React hook, for cleaner components that facilitate easy integration into new projects",
      },
    ],
  },
  {
    title: "Zombie Survival",
    description: "3D Physics environment that supports multiplayer",
    items: [
      {
        image: zomOne,
        name: "3D Enviroment",
        count: "Utilizing ThreeJS to create models",
      },
      {
        image: zomTwo,
        name: "Physics",
        count: "Intergrated RapierJS to provide an interactive and immersive enviroment",
      },
      {
        image: zomThree,
        name: "Server Authoritative",
        count: "Structured using a server to be the main logic handler",
      },
      {
        image: zomFour,
        name: "Multiplayer",
        count:
          "Using Websockets to facilitate real time player interactions with TCP communication",
      },
    ],
  },
  {
    title: "Uber Eats Clone",
    description:
      "Team project which was a model website of Uber Eats, sign up, create a restaurant, and order food.",
    items: [
      {
        image: ueOne,
        name: "Deployment",
        count: "Levarged Docker to streamline deployment of the application to Render",
      },
      {
        image: ueTwo,
        name: "Collaboration",
        count:
          "Working with teams from various areas around the globe at all different times, we were able to plan and effectively work together",
      },
      {
        image: ueThree,
        name: "Sign In / Sign Up",
        count: "Simple and easy to use modal to facilitate a user to sign up or sign in",
      },
      {
        image: ueFour,
        name: "Flask",
        count:
          "Constructed a robust API using Flask and SQLAlchemy, utilizing Python's built-in DB ORM to rapidly learn and develop a functional server",
      },
    ],
  },
  {
    title: "Book & Stay",
    description: "First full stack project which was modeled after Air BnB",
    items: [
      {
        image: airOne,
        name: "Loading States",
        count: "Using Redux, provided users with a visual indication that the page is loading",
      },
      {
        image: airTwo,
        name: "Dynamic Seeders",
        count:
          "Intergrated the Pexels Photo API to dynamically seed the application with a large amount of diverse data",
      },
      {
        image: airThree,
        name: "ExpressJS / Seuelize",
        count:
          "Developed a backend API with ExpressJS and Sequelize to manage and persist data effectively in a database",
      },
      {
        image: airFour,
        name: "Pointer Logic",
        count:
          "Created a custom cursor hook in React to track cursor movements, simplifying component design and enabling easy reuse in future projects",
      },
    ],
  },
];
