import React from "react";
import {Home,} from './pages'
import {Header} from './components';
import { Route, Routes,  } from "react-router-dom";
import axios from 'axios'
import { setPizzas} from "./redux/actions/pizzas";
import {connect} from "react-redux"



// function App() {
//   const [pizzas, setPizzas] = React.useState([])

//    React.useEffect(() => {
//      axios.get ('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas);
//      });

//   }, []);

  

//   return 
// }

class App extends React.Component {

  componentDidMount() {
    axios.get ('http://localhost:3000/db.json').then(({data}) => {
        this.props.setPizzas(data.pizzas);
     });
  }


  render() {
    console.log(this.props)
    return(
    (
   

      <div className="wrapper">
       <Header />
       <div className="content">   
       
      <Routes>
      <Route path ="/" element={<Home items={this.props.items}/>}/>
      
      </Routes>
  
  
       </div>
    </div>
    )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
}
  
  



export default connect(mapStateToProps, mapDispatchToProps)(App);
