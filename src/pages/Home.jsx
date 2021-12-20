import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components';
import { useSelector, useDispatch } from "react-redux"
import { setCategory} from '../redux/actions/filters'


const categoryNames = ['Лицо', 'Тело', 'Волосы','Наборы','Детские'];
const sortItems = [  {name: 'популярности', type: 'popular'} ,  {name:'цене', type:'price'} ,  {name:'алфавиту', type: 'alphabet'}];


function Home() {

  const items = useSelector(({pizzas}) => pizzas.items);  //      Используя state с помощью деструктуризации выносит нужные данные из общего хранилища 
  const dispatch = useDispatch();  

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[]);
  


    return (
        <div className="container">
        <div className="content__top">
        <Categories 
        onClickItem={onSelectCategory} 
        items= {categoryNames}            
          />

        <SortPopup items = {sortItems} /> 

        </div>
          <h2 className="content__title">Все наборы</h2>
            <div className="content__items">  

          {
            items && items.map((obj) => 
              (
            <PizzaBlock key={obj.id} {...obj}  />  )    )
          }          

        </div>        
      </div>
    )
};

export default Home;
