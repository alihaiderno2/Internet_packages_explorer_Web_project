import react from 'react';
import ProviderFilter from '../components/Provider_Filter';
import Networks_main from '../components/Networks_main';
import "../styles/Networks.css"
function Networks() {
  return (
    <div className='Net'>
      <Networks_main/>
      <ProviderFilter/>
    </div>
  );
}
export default Networks;