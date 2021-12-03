import React from 'react'



// class Categories extends React.Component { 
//     state = {
//         activeItem: 1,
//         test: 123,
//     };
    
//     onSelectItem = (index, name) => {
//         this.setState({
//             activeItem: index,
            

//         });

//     };

//     render () {
//         const {items, onClick} = this.props;
//         console.log (this.state)
//         return (
//                     <div>
//                           <div className="categories">
//                         <ul>            
//                           <li>Все</li>
//                           {items.map((name, index) => (
//                               <li 
//                               className={this.state.activeItem === index ? 'active' : '' } 
//                               onClick={() => this.onSelectItem(index)} 
//                               key={`${name}_${index}`}> {name}
//                               </li>)// Более уникальное значение <li>
//                            ) }
                         
//                         </ul>
//                       </div>
//                     </div>
//                 )
//             }
//         }



// export default Categories;



export default 


function Categories({items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);
    

    const onSelectItem = (index) => {
        setActiveItem(index);
           };
   
    return (
        <div>
              <div className="categories">
            <ul>         
              <li  className={activeItem === null ? 'active' : '' } onClick={() => onSelectItem(null)}>
              Все
              </li>
              {items && items.map((name, index) => ( // Итерация по массиву с категориями 
                  <li 
                  className={activeItem === index ? 'active' : '' }
                  onClick={() => onSelectItem(index)} key={`${name}_${index}`}> {name}</li>)// Более уникальное значение <li> key={`${name}_${index}`}>
               ) }
             
            </ul>
          </div>
        </div>
    )
}
