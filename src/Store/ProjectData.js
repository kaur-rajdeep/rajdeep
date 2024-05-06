import ecom from "./../assets/Project/ecom.png";
import Weather from "./../assets/Project/Weather App.png";
import Game from "./../assets/Project/Game.png";
import group from "./../assets/Project/group.jpg";
// import Airwe from "./../assets/Project/Airwe.png";

var projects = [
  {
    id: "1",
    name: "Eternal University Dummy Website",
    image: group,
    description:
      "Group Project made using Reactjs, tailwind css, used github to mantain the repository.",
    live: "https://eu-website-tau.vercel.app/",
  },
  {
    id: "2",
    name: "E-commerce App",
    image: ecom,
    description:
      "Made this Vite+React E-com App using Reactjs, material-Ui, Redux toolkit.",
    live: "https://e-commerce-app-2022.netlify.app/",
  },
  {
    id: "3",
    name: "Weather App",
    image: Weather,
    description:
      "Made this Weather Forecast App using JavaScript, CSS and html.",
    live: "https://kaur-rajdeep.github.io/Weather-App/",
  },
  {
    id: "4",
    name: "Stone-Paper-Scissors",
    image: Game,
    description:
      "Made this small Stone-Paper-Scissors game for fun using html, css and javaScript",
    live: "https://scissors-paper-stone.netlify.app/",
  },
  // {
  //   id: "5",
  //   name: "Airwe Website",
  //   image: Airwe,
  //   description:
  //     "Website for Akal Institute for Rural Women Empowerment using tailwind css first time.",
  //   live: "https://airwe.netlify.app/",
  // },
];

export default projects;
