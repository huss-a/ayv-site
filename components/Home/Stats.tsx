import CountUp from "react-countup";

const Stats: React.FC = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      className="stats-container p-4"
    >
      <h1>VA Statistics</h1>
      <div className="stats">
        <div className="total-hrs">
          <h4>
            Flown Hours <i className="fas fa-clock" />
          </h4>
          <h5>
            <CountUp
              duration={1.5}
              start={0}
              end={3950}
              suffix="+"
              separator=","
            />
          </h5>
        </div>
        <div className="total-pilots">
          <h4>
            Pilots <i className="fas fa-address-card" />
          </h4>
          <h5>
            <CountUp duration={1.5} start={0} end={45} suffix="+" delay={1.5} />
          </h5>
        </div>
        <div className="total-miles">
          <h4>
            Miles Flown <i className="fas fa-plane-departure" />
          </h4>
          <h5>
            <CountUp
              duration={1.5}
              start={0}
              end={1202600}
              suffix="+"
              delay={3}
              separator=","
            />
          </h5>
        </div>
        <div className="total-routes">
          <h4>
            Routes <i className="fas fa-route" />
          </h4>
          <h5>
            <CountUp
              duration={1.5}
              start={0}
              end={2200}
              suffix="+"
              delay={4.5}
              separator=","
            />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Stats;
