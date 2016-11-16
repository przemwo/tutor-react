import React from 'react';

class FlexTest extends React.Component {
  render() {
    return(
      <div className="cards">
        <div className="card">
          <header>
            <h2>Bristol</h2>
          </header>

          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg" alt="Bristol harbour" />
          <div className="body">
          <p>I live in Bristol. It mostly rains, but when it isn't raining we have hot air balloons.</p>
            <p>The balloons sometimes congregate for mass launches, raising the possibility of one landing in your garden.</p>
          </div>

        </div>

        <div className="card">
          <header>
            <h2>Harbour Cranes</h2>
          </header>

          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour2.jpg" alt="Bristol harbour" />
          <div className="body">
          <p>We also have giant cranes, and historic boats. It is best if the balloons avoid these.</p>

          </div>
        </div>

        <div className="card">
          <header>
            <h2>Striped Balloon</h2>
          </header>

          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/coloured-balloon.jpg" alt="Coloured balloon" />
          <div className="body">
          <p>I like the nice standard balloons. Stripy. Solid looking basket.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FlexTest;
