import Army from "../assets/army.jpg";
import Code from "../assets/code.svg";
import Creation from "../assets/creation.svg";
import Hike from "../assets/hike.jpg";
import Profile from "../assets/profile.png";
import Wireframe from "../assets/wireframe.svg";
import E1 from "../assets/projects/e1.png";
import E2 from "../assets/projects/e2.png";
import E3 from "../assets/projects/e3.png";
import It1 from "../assets/projects/it1.png";
import It2 from "../assets/projects/it2.png";
import It3 from "../assets/projects/it3.png";
import M1 from "../assets/projects/m1.png";
import M2 from "../assets/projects/m2.png";
import OldP from "../assets/projects/oldport.png";
import OldP2 from "../assets/projects/oldport2.png";
import Ss1 from "../assets/projects/ss1.png";
import Ss2 from "../assets/projects/ss2.png";
import Ss3 from "../assets/projects/ss3.png";
export const data = {
  images: {
    Army,
    Code,
    Creation,
    Hike,
    Profile,
    Wireframe,
    E1,
    E2,
    E3,
    It1,
    It2,
    It3,
    M1,
    M2,
    OldP,
    OldP2,
    Ss1,
    Ss2,
    Ss3
  },
  home: [
    {
      id: 1,
      subTitle: "Jeremy Barber",
      title: "Full Stack Developer",
      body:
        "I solve problems and create solutions by developing websites and applications.",
      button: {
        label: "Contact Me",
        type: "primary",
        link: "/contact"
      }
    }
  ],
  projects: [
    {
      id: 1,
      name: "ITrack",
      description:
        "Issue Tracker enables you to monitor what people are currently working and reassign work to different users.",
      goal:
        "Build something that can be used to manage projects or issues using SQL and ReactJS.",
      tech: ["ReactJS", "MySQL", "NGINX", "Linux", "PM2"],
      links: [
        { label: "View", link: "https://itrack.unlimitedcode.dev/" },
        { label: "Code", link: "https://github.com/onlytruejeremy/itrack" }
      ],
      images: [It1, It2, It3]
    },
    {
      id: 2,
      name: "Mr. Electronics",
      description:
        "Mr. Electronics is an ecommerce application. Users can register, sign-in and view the latest products. They can also view products by category. Once a user has added the items they wish to purchase to the cart they can check out using stripe.",
      goal:
        "Increase knowledge about document based databases and payment gateways.",
      tech: [
        "ReactJS",
        "FireBase FireStore",
        "FireBase Cloud Functions",
        "Stripe API"
      ],
      links: [
        { label: "View", link: "https://mr-electronics.web.app/" },
        {
          label: "Code",
          link: "https://github.com/onlytruejeremy/mr-electronics"
        }
      ],
      images: [E1, E2, E3]
    },
    {
      id: 3,
      name: "Nothing But Movies",
      description:
        "Nothing but movies is a movie directory application. Users can register, sign-on, comment and add movies to their favorites.",
      goal: "Learn more about authentication and document based databases.",
      tech: [
        "ReactJS",
        "FireBase FireStore",
        "Bootstrap",
        "The Movie Database API"
      ],
      links: [
        { label: "View", link: "https://movies-c4251.web.app/" },
        { label: "Code", link: "https://github.com/onlytruejeremy/movies" }
      ],
      images: [M1, M2]
    }
  ]
};
