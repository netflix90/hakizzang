import React from 'react';

function Food({fav}) {
  
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food qwe="kimchi"  />
      <Food fav="ramen"  />
      <Food fav="samgiopsal"  />
      <Food fav="chukumi"  />
    </div>
  );
}

export default App;