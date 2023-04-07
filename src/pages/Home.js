import React, { useEffect, useState } from "react";

function Home() {
    const [moviesList, setmoviesList] = useState([]);

    useEffect(() => {
      const moviesData = "https://hoblist.com/api/movieList";

      fetch(moviesData, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          'Access-Control-Allow-Origin': 'https://movies-list-ap.netlify.app'
        },
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        }),
      })
        .then((response) => response.json())
        .then((data) => setmoviesList(data.result))
        .catch((err) => {
          console.log(err);
        });
    }, []);

    console.log(moviesList);
  return (
    
    <div className="App">
      {moviesList.map((item) => {
        return (
          <div key={item.title} className="card shadow-lg py-2 border-0 mb-2">
            <div class="row d-flex align-items-center">
              <div class="col-sm-2">
                <div>
                  <span role="img" aria-label="">
                    🔼
                  </span>
                </div>
                <div>{item.voting}</div>
                <div>
                  <span role="img" aria-label="">
                    🔽
                  </span>
                </div>
                <div class="mt-3">Votes</div>
              </div>
              <div class="col-sm-3">
                <div>
                  <img src={item.poster} alt="" width="125" class="rounded"/>
                </div>
              </div>
              <div class="col-sm-7 d-flex justify-content-start">
                <div>
                  <h4 class="d-flex justify-content-start">{item.title}</h4>
                  <div class="d-flex justify-content-start">
                    <span class="me-1 text-secondary font-bold">Genre:</span>{item.genre}
                  </div>
                  <div class="d-flex justify-content-start">
                    <span class="me-1 text-secondary font-bold">Director:</span>{item.director}
                  </div>
                  <div class="d-flex justify-content-start align-items-center mb-1">
                    <span class="me-1 text-secondary font-bold">Starring:</span><span class="d-inline-block text-truncate" style={{maxWidth: "175px"}}>{item.stars}</span>
                  </div>
                  <div class="d-flex justify-content-start fs-7 mb-1">
                    Mins<div class="vr mx-2"></div>{item.language}
                    <div class="vr mx-2"></div>{item.releasedDate}
                  </div>
                  <div class="text-primary d-flex justify-content-start fs-7">
                    {item.pageViews} views<div class="vr mx-2"></div>Voted by {item.totalVoted} people
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-primary mx-3 my-2">Watch Trailer</button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;