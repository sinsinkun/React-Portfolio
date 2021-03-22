import { useContext } from 'react';
import { winDimContext } from '../App';

function Homepage() {

  const winSize = useContext(winDimContext);

  return(
    <div className="my-2 mx-auto">
      <p>Main Page</p>
      <p>{winSize.x}x{winSize.y}</p>
    </div>
  )
}

export default Homepage;