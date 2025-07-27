import '../styles/Best_Daily.css'
import React from 'react';
import BestDaily from '../Data/BestDaily.json';

function Best_Daily() {
  return (
    <section className="best-daily">
      <h2 className='best-daily__heading'>Top Daily Internet Deals</h2>
      <div className="best-daily__list">
        {BestDaily.map((pkg, idx) => (
          <div key={idx} className="best-daily__card">
            <div className={`card__provider ${pkg.provider}`}>{pkg.provider}
            </div>
            <div className="card__name">
                    {pkg.name}
                </div>
                <div className='card_major__part'>
                <div className='card__data'>
                    <b>Perks:</b> {pkg.data}
                    </div>
                <div className='card__validity'>
                    <b>Validity:</b> {pkg.validity}
                </div>
                <div className='card__price'>
                    <b>Price:</b> {pkg.price}
                </div>
                <div className='card__code'>
                    <b>Code:</b>{pkg.code}
                </div>
                </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Best_Daily;
