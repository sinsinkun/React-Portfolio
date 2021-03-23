import { useContext } from 'react';
import { winDimContext } from '../App';

function Homepage() {

  const winSize = useContext(winDimContext);

  return(
    <div className="my-2 mx-auto">
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Habitant tortor molestie ridiculus habitant posuere dictum; 
        dignissim euismod. Torquent pulvinar inceptos turpis nulla; 
        tortor potenti venenatis egestas feugiat. Purus augue ultricies 
        class amet nulla primis mus nisl. Mattis justo turpis tortor 
        fames ullamcorper primis primis tellus. Mattis parturient mattis 
        sem erat placerat. Aliquam consectetur montes ad nibh tempor 
        taciti sapien per accumsan.</p>
      <p>{winSize.x}x{winSize.y}</p>
    </div>
  )
}

export default Homepage;