import '../styles/Statistics.css';

function Statistics() {
  return (
    <div className="statistics-container">
      <div className="stat-box stat-blue">
        <h2 className="stat-number">10K</h2>
        <p className="stat-label">Individuals Served</p>
      </div>

      <div className="stat-box stat-lightblue">
        <h2 className="stat-number">500</h2>
        <p className="stat-label">Volunteers</p>
      </div>

      <div className="stat-box stat-green">
        <h2 className="stat-number">100</h2>
        <p className="stat-label">Communities Reached</p>
      </div>
    </div>
  );
}

export default Statistics;
