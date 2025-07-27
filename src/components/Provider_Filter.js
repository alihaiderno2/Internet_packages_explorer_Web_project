import React, { useState } from "react";
import packages from "../Data/packages.json";
import "../styles/SearchResults.css"; 

function ProviderFilter() {
  const [selectedProvider, setSelectedProvider] = useState("All");

  const filteredPackages = selectedProvider === "All"
    ? packages
    : packages.filter(pkg => pkg.provider === selectedProvider);

  const providers = [...new Set(packages.map(pkg => pkg.provider))];

  return (
    <div className="search-results-container">
        <div className="Search-Result"><h2>Filter Packages by Provider</h2></div>

    <div className="Drop-down_div"><select className="Drop-down"
        value={selectedProvider}
        onChange={(e) => setSelectedProvider(e.target.value)}
      >
        <option value="All">All Providers</option>
        {providers.map((prov, index) => (
          <option key={index} value={prov}
          className={prov}
          >{prov}</option>
        ))}
      </select>
      </div>
      

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
    </div>
  );
}

export default ProviderFilter;
