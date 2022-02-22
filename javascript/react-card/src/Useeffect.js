import React, { useEffect, useState } from "react";

const Home = () => {
  console.log("Initialize useEffect");

  const [FLG1, setFLG1] = useState(true);
  const [FLG2, setFLG2] = useState(true);

  useEffect(() => {
    console.log("EFFECT SUCCESS");
    //     CLICK FLAG1 AND EFFECT SUCCESS Otherwise INITIALIZE ONLY WHEN REFRESH
  }, [FLG1]);

  return (
    <React.Fragment>
      <h1>UseEffect</h1>
      <h2 className="text-info">FLG1:{FLG1.toString()}</h2>
      <h2 className="text-success">FLG2:{FLG2.toString()}</h2>

      <div className="p-1">
        <button
          onClick={() => {
            setFLG1(!FLG1);
          }}
          className="btn btn-info mx-1"
        >
          效果1
        </button>
        <button
          onClick={() => {
            setFLG2(!FLG2);
          }}
          className="btn btn-success mx-1"
        >
          效果2
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
