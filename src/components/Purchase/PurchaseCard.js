function PurchaseCard({ title, price }) {
  return (
    <div className="card w-70 bg-base-100 shadow-xl">
      <div className="font-['Poppins'] card-body">
        <h2 className="card-title text-3xl justify-center">{title}</h2>
        <span className="text-xl text-center">{price}$</span>
        <div className="card-actions justify-center">
          <a href="./BuyTicket">
            <button type="button" className="btn btn-info">
              PURCHASE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PurchaseCard;
