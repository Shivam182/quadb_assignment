import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import ShowCard from "../Show/ShowCard";

const Home = () => {
  const [shows, setShows] = useState([]);

  const url = "https://api.tvmaze.com/search/shows?q=all";

  // const {id,name,language,runtime,genres,image: {original}} = item.show;
 

  const fetchInfo = async () => {
    const res = await fetch(url);
    const d = await res.json();
    return setShows(d);
  };

 

  useEffect(() => {
    fetchInfo();
  }, [shows]);

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
            {shows && shows.map((item) => (
                  <ShowCard
                    key={item.show.id}
                    image={item.show.image ? item.show.original:'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg'}
                    name={item.show.name}
                    lang={item.show.language}
                    runtime={item.show.runtime}
                    genre={item.show.genres}
                    id ={item.show.id}
                  />
                ))}
          </div>
        </main>

        {/* Footer */}

        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
