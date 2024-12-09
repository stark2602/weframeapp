
// import React from 'react';

// const NavLinks = () => {
//   return (
//     <header>
//         <div className='link-header'>
//             <a href='#'>Art de la table</a>
//             <a href='#'>Mobilier   </a>
//             <a href='#'>Nappage</a>
//             <a href='#'>Matériel de salle</a>
//             <a href='#'>Cuisine</a>
//             <a href='#'>Barbecue    </a>
//             <a href='#'>Tente</a>
//             <a href='#'>Chauffage</a>
//             <a href='#'>Podium - Piste de danse</a>
//             <a href='#'>Son et lumière</a>
//             <a href='#'>Packs</a>
//             <a href='#'>Consommables</a>

//         </div>
      
//     </header>
//   );
// };


// export default NavLinks;
import React from 'react';

interface NavLinksProps {
  onProductChange: (name: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onProductChange }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const productName = (e.target as HTMLAnchorElement).textContent || 'Art de la table';
    onProductChange(productName);
  };

  return (
    <header>
      <div className="link-header">
        <a href="#" onClick={handleClick}>Art de la table</a>
        <a href="#" onClick={handleClick}>Mobilier</a>
        <a href="#" onClick={handleClick}>Nappage</a>
        <a href="#" onClick={handleClick}>Matériel de salle</a>
        <a href="#" onClick={handleClick}>Cuisine</a>
        <a href="#" onClick={handleClick}>Barbecue</a>
        <a href="#" onClick={handleClick}>Tente</a>
        <a href="#" onClick={handleClick}>Chauffage</a>
        <a href="#" onClick={handleClick}>Podium - Piste de danse</a>
        <a href="#" onClick={handleClick}>Son et lumière</a>
        <a href="#" onClick={handleClick}>Packs</a>
        <a href="#" onClick={handleClick}>Consommables</a>
      </div>
    </header>
  );
};

export default NavLinks;
