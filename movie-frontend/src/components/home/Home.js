import React from 'react'
import Hero from '../hero/Hero'

const Home = ({movies}) => {

    
      if(movies != undefined) {
         return(<Hero movies={movies}/>);
      }else {
        return (
          <center>
            <div>
              <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif' className='gif-img'/>
            </div>
          </center>
        );
      }
      
    
    
  
}

export default Home