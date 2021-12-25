import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Vars

const anime01 = {
  img: "https://cdn.myanimelist.net/images/anime/1988/119437.jpg",
  title: "Shingeki no Kyojin",
  desc: "Second part of Shingeki no Kyojin: The Final Season.",
};

const anime02 = {
  img: "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
  title: "Kimetsu no Yaiba",
  desc: "Tanjirou, Zenitsu, and Inosuke, aided by the Sound Hashira Tengen Uzui, travel to Yoshiwara red light district to hunt down a demon that has been terrorizing the town.",
};

const anime03 = {
  img: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
  title: "One Piece",
  desc: "Several anime-original arcs have been adapted into light novels, and the series has inspired 40+ video games as of 2021.",
};

function Cards() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <title>MakeMyList</title>
      <h1>Header</h1>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contect Us</h4>
    </header>
  );
};

const Body = () => {
  return (
    <div className="mainPage">
      <MainPage img={anime01.img} title={anime01.title} desc={anime01.desc} />
      <MainPage img={anime02.img} title={anime02.title} desc={anime02.desc} />
      <MainPage img={anime03.img} title={anime03.title} desc={anime03.desc} />
      <MainPage img={anime01.img} title={anime01.title} desc={anime01.desc} />
      <MainPage img={anime02.img} title={anime02.title} desc={anime02.desc} />
      <MainPage img={anime03.img} title={anime03.title} desc={anime03.desc} />
    </div>
  );
};

const MainPage = (props) => {
  const { img, title, desc } = props;
  return (
    <article className="anime">
      <img className="image" src={img} alt="" />
      <h2>{title}</h2>
      <h3>{desc}</h3>
    </article>
  );
};

const Footer = () => {
  return (
    <footer>
      <h3>Footer</h3>
    </footer>
  );
};

ReactDom.render(<Cards />, document.getElementById("root"));
