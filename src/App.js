import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  
  return (
  <div>
  <h2>I like {name}</h2>;
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'KImchi',
    image: 'https://geumchi.com/web/product/big/20200408/5101ab42188f723f9fd82276d50b82d2.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal' ,
    image: 'https://cdn.imweb.me/thumbnail/20200324/876cb6cbe8132.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap' ,
    image: 'https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg',
    rating:4.8
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002274/img/basic/a0002274_main.jpg?20200626102550&q=80&rw=750&rh=536',
    rating:4.7
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating:4.6
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name}picture={dish.image}rating={dish.rating} />))}
    </div>
  );
}

export default App;