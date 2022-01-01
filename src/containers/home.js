import React from "react";
import { data } from "../data";
import Header from './header';
import Footer from './footer';

function MainPage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

const Body = () => {
  return <div className="mainPage">
      <Cards />
  </div>;
};

const Cards = () => {
  const [animes, setAnime] = React.useState(data);
  return (
    <>
      {animes.map((anime) => {
        const { id, img, title, desc } = anime;
        return (
          <div key={id}>
            <div>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <h4>{desc}</h4>
            </div>
            <h1></h1>
          </div>
        );
      })}
    </>
  );
};

export default MainPage;
