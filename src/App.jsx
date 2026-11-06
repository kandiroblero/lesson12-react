import { useState } from 'react'; 

import axios from 'axios'; 

 

function App() { 

 const [fact, setFact] = useState(''); 

 const [error, setError] = useState(null); 

 

 const handleSubmit = async (event) => { 

   event.preventDefault(); 

   try {
  setError(null);

  const response = await axios.get('https://catfact.ninja/fact');

  setFact(response.data.fact);
      } catch (error) {
  setFact('');
  setError('Something went wrong.');
     }

 }; 

 

 return ( 

   <div> 

     <h1>Cat Fact Finder</h1> 

     <form onSubmit={handleSubmit}> 

       <button type="submit">Get Cat Fact</button> 

     </form> 

     {fact && <p>{fact}</p>} 

     {error && <p style={{ color: 'red' }}>{error}</p>} 

   </div> 

 ); 

} 

 

export default App; 