import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function ProductCard({ id, name, price }) {
  return (
    <Link to={`/product/${id}`}>
      <h2>{name}</h2>
      <p>{price}</p>
    </Link>
  )
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCard
