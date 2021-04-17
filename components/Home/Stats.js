const Stats = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      className="stats-container"
    >
      <h1>VA Stats</h1>
      <div className="stats">
        <div className="total-hrs">
          <h4>
            Flown Hours <i className="fas fa-clock" />
          </h4>
          <h5>3,000+</h5>
        </div>
        <div className="total-pilots">
          <h4>
            Pilots <i className="fas fa-address-card" />
          </h4>
          <h5>40+</h5>
        </div>
        <div className="total-miles">
          <h4>
            Miles Flown <i className="fas fa-plane-departure" />
          </h4>
          <h5>8,54,000+</h5>
        </div>
        <div className="total-routes">
          <h4>
            Routes <i className="fas fa-route" />
          </h4>
          <h5>1850+</h5>
        </div>
      </div>
    </div>
  );
};

export default Stats;
