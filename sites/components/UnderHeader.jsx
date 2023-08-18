
import { useStoreState } from 'easy-peasy';
import { useState } from 'react';

const UnderHeader = () => {


  return (
    <div className="UnderHeader">
      <div className="UnderHeaderM">
        <p className="opis">
          "Nie chodzi tylko o to, ile zarabiasz, ale ile potrafisz zachować"
          <br /> Dołącz do nas i naucz się oszczędzać mądrze!
        </p>
        <a href="/register" className="join" >
          Dołącz
        </a>
      </div>
    </div>
  );
};

export default UnderHeader;
