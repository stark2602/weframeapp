
// import React from 'react';

// const Header = () => {
//   return (
//    <div className='current'>
//     <p> Home</p>
//     <div className="dot"> </div>
//     <div className="product-name">Art de la table</div>
//    </div>
//   );
// };



// export default Header;

import React from 'react';

interface CurrentProps {
  productName: string;
}

const Current: React.FC<CurrentProps> = ({ productName }) => {
  return (
    <div className="current">
      <p>Home</p>
      <div className="dot"></div>
      <div className="product-name">{productName}</div>
    </div>
  );
};

export default Current;
