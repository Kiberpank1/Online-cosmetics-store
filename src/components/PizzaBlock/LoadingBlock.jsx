import React from 'react'
import ContentLoader from "react-content-loader"


function PizzaLoadingBlock() {   
        return (
          <ContentLoader           
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          
        >
          <rect x="2" y="292" rx="6" ry="6" width="237" height="84" /> 
          <rect x="2" y="248" rx="3" ry="3" width="237" height="30" /> 
          <rect x="10" y="392" rx="4" ry="4" width="67" height="31" /> 
          <rect x="134" y="390" rx="22" ry="22" width="110" height="36" /> 
          <rect x="0" y="41" rx="0" ry="0" width="241" height="190" />
        </ContentLoader>)
    
}

export default PizzaLoadingBlock;
