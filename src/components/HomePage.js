import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    /*
    <div>
      <h1>MOST</h1>
      <div id="main">
        <form>
          <input type="text" id="search" placeholder="title of movie" />
          <input type="submit" class="solid" value="Search" />
        </form>
        </div>
    </div>
    */
    <section id="wrapper">
    <h1>MOST</h1>
    <div id="main">
      <form>
        <input type="text" id="search" placeholder="title of movie" />
        <input type="submit" class="solid" value="Search" />
      </form>
    </div>
  </section>
  );
};

export default HomePage;
