import React from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components';
import { useSelector, useDispatch } from "react-redux"
import { setCategory} from '../redux/actions/filters'
import { fetchPizzas} from "../redux/actions/pizzas";



const categoryNames = ['Лицо', 'Тело', 'Волосы','Наборы','Детские'];
const sortItems = [  {name: 'популярности', type: 'popular'} ,  {name:'цене', type:'price'} ,  {name:'алфавиту', type: 'alphabet'}];


function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category , sortBy} = useSelector(({filters}) => filters); //      Используя state с помощью деструктуризации выносит нужные данные из общего хранилища 
  
  console.log(category , sortBy);
  
  React.useEffect (() => {
              dispatch(fetchPizzas());
           
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[]);
  
  

    return (
      
        <div className="container">
        <div className="content__top">
        <Categories 
        activeCategory={category}
        onClickItem={onSelectCategory} 
        items= {categoryNames}            
          />

        <SortPopup items = {sortItems} /> 
        
        </div>
          <h2 className="content__title">Все наборы</h2>
            <div className="content__items">  

          {isLoaded 
          ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj}  />  ) 
          : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
                    

        </div>        
      </div>
    )
};



export default Home;
