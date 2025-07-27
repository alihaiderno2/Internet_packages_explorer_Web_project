import React, { useState } from "react";
import packages from "../Data/packages.json";
import "../styles/SearchResults.css";

function BroadFilter({Valid}) {
  const [provider, setProvider] = useState("All");
  const [dataKeyword, setDataKeyword] = useState("");
  const [priceRange, setPriceRange] = useState("All");

  const allProviders = [...new Set(packages.map(p => p.provider))];

  const extractPrice = (priceStr) => {
  if (!priceStr) return NaN;

  const cleaned = priceStr.replace(/≈|Rs\.?|[^\d.]/g, "").trim();

  return parseFloat(cleaned);
};


  const filteredPackages = packages.filter(pkg => {
    const matchProvider = provider === "All" || pkg.provider === provider;
    const matchData = dataKeyword === "" || pkg.data.toLowerCase().includes(dataKeyword.toLowerCase());
    const matchvalidity=pkg.validity===Valid;

    const price = extractPrice(pkg.price);
    let matchPrice = true;

    if (priceRange === "<20") matchPrice = price < 20;
    else if (priceRange === "20-50") matchPrice = price >= 20 && price <= 50;
    else if (priceRange === ">50") matchPrice = price > 50;
    console.log(matchvalidity);
    return matchProvider && matchData && matchPrice && matchvalidity;
  });

  return (
    <div className="search-results-container">
      <h2 className="Search-Result2">Filter Packages Broadly</h2>

      <div className="Drop-down_div">

        <select className="Drop-down"
        value={provider} onChange={(e) => setProvider(e.target.value)}>
          <option value="All">All Providers</option>
          {allProviders.map((p, i) => <option key={i} value={p}>{p}</option>)}
        </select>


        <input className="Drop-down"
          type="text"
          placeholder="Search data (e.g. 500MB)"
          value={dataKeyword}
          onChange={(e) => setDataKeyword(e.target.value)}
        />

        
        <select className="Drop-down"
        value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="All">All Prices</option>
          <option value="<20">Below Rs. 20</option>
          <option value="20-50">Rs. 20 – 50</option>
          <option value=">50">Above Rs. 50</option>
        </select>
      </div>


      {filteredPackages.length === 0 ? (
        <p>No matching results found.</p>
      ) : (
        <div className="cards-container">
          {filteredPackages.map((pkg, index) => (
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

export default BroadFilter;
