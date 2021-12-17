import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components';
import { useSelector } from "react-redux"

function Home() {

  const {items} = useSelector(({pizzas}) => {  //      Используя state с помощью деструктуризации выносит нужные данные из общего хранилища 
    return { 
      items: pizzas.items
      
    }
  });
    
    return (
        <div className="container">
        <div className="content__top">
        <Categories onClick={(name) => console.log(name)} 
        items= {[
          'Лицо',
          'Тело',
          'Волосы',
          'Наборы',
          'Детские']}            
          />

        <SortPopup items = {[
          {name: 'популярности', type: 'popular'} ,
         {name:'цене', type:'price'} ,
          {name:'алфавиту', type: 'alphabet'}]} /> 

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
