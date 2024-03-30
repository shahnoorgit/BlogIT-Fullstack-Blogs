const Card = () => {
  return (
    <div className=" hover:border-4 card card-compact h-30 w-30 bg-base-100 shadow-xl border border-1 border-blue-800">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Card;
