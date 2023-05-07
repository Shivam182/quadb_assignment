import React, { Fragment, useEffect, useState } from "react";
import "./DetailShow.css";
import BookingForm from "./BookingForm";
import { useParams } from "react-router-dom";

const DetailShow = () => {
  const { id } = useParams();
  const url = "https://api.tvmaze.com/search/shows?q=all";

  // console.log('item id: '+ id)

  const [myItem, setMyItem] = useState({});

  const fetchItem = async () => {
    const res = await fetch(url);
    const data = await res.json();

    var myItem = data.filter((item) => {
      // console.log(item.show.id == id);

      return item.show.id == id;
    });

    // console.log(myItem)

    return setMyItem(myItem);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      {" "}
      <div className="show-box">
        <div className="show-det">
          <div className="show-image">
            <img
              src={
                "https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869__480.jpg"
              }
              alt="show image"
              id="image"
            />
          </div>
          <div className="summary">
            <p id="summary">
              {myItem[0] && myItem.map((item) => item.show.summary)}
            </p>
          </div>
        </div>
        <button id="book-btn" onClick={showForm}>
          Book
        </button>
      </div>
      <BookingForm show={show} />
    </Fragment>
  );
};

export default DetailShow;
