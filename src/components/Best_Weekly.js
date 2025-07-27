import React from 'react';
import BestWeekly from '../Data/BestWeekly.json';
import '../styles/BestWeekly.css';

function Best_Weekly() {
  return (<section className='Best-Weekly'>
        <h2 className='Best_weekly_heading'>Top Weekly Internet Deals</h2>
      <div className="Best-weekly__list">
        {BestWeekly.map((pkg, idx) => (
          <div key={idx} className="best-weekly__card">
            <div className={`card__provider ${pkg.provider}`}>{pkg.provider}</div>
            <div className="card__name">{pkg.name}</div>
            <ul className="card__details">
              <li><strong>Data:</strong> {pkg.data}</li>
              <li><strong>Validity:</strong> {pkg.validity}</li>
              <li><strong>Price:</strong> {pkg.price}</li>
              <li><strong>Code:</strong> {pkg.code}</li>
            </ul>
          </div>
        ))}
      </div>
      </section>
  );
}

export default Best_Weekly;
