import React from 'react';
import bestMonthly from '../Data/bestMonthly.json';
import '../styles/BestMonthly.css';

function Best_Monthly() {
  return (
    <section className="best-monthly">
      <h2 className="best-monthly__heading">Top Monthly Internet Deals</h2>
      <div className="best-monthly__list">
        {bestMonthly.map((pkg, idx) => (
          <div key={idx} className="best-monthly__card">
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

export default Best_Monthly;
