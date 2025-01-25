import React from 'react';

function AthleteCard({ athlete }) {
  return (
    <div className="athlete-card">
      <h3>{athlete.name}</h3>
      <p>Position: {athlete.position}</p>
      <p>Height: {athlete.height}</p>
      <p>Wing: {athlete.wing}</p>
      <p>Hand: {athlete.hand}</p>

      {/* Image carousel or grid */}
      <div className="athlete-images">
        {athlete.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${athlete.name} year ${index + 1}`}
            className="athlete-image"
          />
        ))}
      </div>

      {/* Stats table */}
      <table className="stats-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Body Weight</th>
            <th>Vertical Jump</th>
            <th>Broad Jump</th>
            <th>10-Yard Dash</th>
            <th>Flying 10</th>
            <th>40-Yard Dash</th>
            <th>Pro Agility</th>
            <th>L-Drill</th>
            <th>Hang Clean</th>
            <th>Back Squat</th>
            <th>Incline Bench</th>
          </tr>
        </thead>
        <tbody>
          {athlete.stats.map((stat) => (
            <tr key={stat.year}>
              <td>{stat.year}</td>
              <td>{stat.bodyWeight}</td>
              <td>{stat.verticalJump}</td>
              <td>{stat.broadJump}</td>
              <td>{stat.tenYard}</td>
              <td>{stat.flyingTen}</td>
              <td>{stat.fortyYard}</td>
              <td>{stat.proAgility}</td>
              <td>{stat.lDrill}</td>
              <td>{stat.hangClean}</td>
              <td>{stat.backSquat}</td>
              <td>{stat.inclineBench}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AthleteCard;
