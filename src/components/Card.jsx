const Card = ({ equipment }) => {
  const { itemName, category, photo, price, rating } = equipment || {};
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          className="w-[360px] h-[360px] object-cover"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p>{category}</p>
        <div className="card-actions ">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
