import React, { Fragment } from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import ShowCard from "../Show/ShowCard";

const Home = () => {
  return (
    <Fragment>
      <div className="home-container">
        {/* Home Header  */}

        <header className="home-header">
          <div id="home-title">
            <h1 id="title-text" className="head">
              Our Shows
            </h1>
            <div id="underline"></div>
          </div>
        </header>

        {/* Main Content  */}

        <main className="home-main">
          <div className="card-container">
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
          </div>
        </main>

        {/* Footer */}

        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
