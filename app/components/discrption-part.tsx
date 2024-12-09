
import React from "react";

const DiscriptionPart=() => {
    return(
        <div className="discriptionpart-body">
            <div className="discription">
                <header>
                Description produit
                </header>
                <p>Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
            </div>
            <div className="box">
            <Box name='Livraisons' />
            <Box name='Questions' />
            
            </div>
           

            
        </div>
    );
};



  interface BoxProps {
    name: string; 
}

const Box: React.FC<BoxProps> = (props) => {
    return (
        <div className="box-body">
            <p>{props.name}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};


export default DiscriptionPart;