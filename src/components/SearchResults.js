import React from "react";
import { useLocation } from "react-router-dom";
import packages from "../Data/packages.json"; 
import "../styles/SearchResults.css"; 

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const filteredResults = packages.filter(pkg =>
    Object.values(pkg).some(value =>
      value.toLowerCase().includes(query)
    )
  );

  return (
    <div className="search-results-container">
      <div className="Search-Result"><h2 >Search Results for "{query}"</h2></div>
      
      {filteredResults.length === 0 ? (
        <p>No matching results found.</p>
      ) : (
        <div className="cards-container">
          {filteredResults.map((pkg, index) => (
            <div key={index} className="package-card ">
              <h3 className={`${pkg.provider}`}>{pkg.name}</h3>
              <div className="card-values">
              <p><b>Provider:</b> {pkg.provider}</p>
              <p><b>Data:</b> {pkg.data}</p>
              <p><b>Validity:</b> {pkg.validity}</p>
              <p><b>Price:</b> {pkg.price}</p>
              <p><b>Code:</b> {pkg.code}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
