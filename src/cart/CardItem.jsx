

import '../style/cardItem.css'


export const CardItem = ({ item }) => {
  const { id, title, author, price, img } = item;

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={img} />
      <div className='card-title'>
        <strong> {title} </strong>
      </div>
      <div className="card-body">
        <p className="card-text">{author}</p>
      </div>
      <div>
        <strong>{price}</strong>
      </div>
      <button className='button-add'>Add</button>
    </div>
  );
};
