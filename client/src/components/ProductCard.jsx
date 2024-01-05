import PropTypes from "prop-types"

function ProductCard({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCard
