import React, { Fragment } from "react";

const Component = () => {
  return (
    <Fragment>
      <div className="card m-3">
        <img
          src="https://pokemongolive.com/img/posts/anniversaryposter2019.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">精靈寶可夢</h5>
          <p className="card-text">Pokémon GO 三周年啦</p>
          <a
            href="https://pokemongolive.com/post/birthday2019/?hl=zh_hant"
            className="btn btn-primary"
          >
            去看看
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Component;
