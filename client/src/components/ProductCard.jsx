import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function ProductCard({ slug, name, price }) {
  return (
    <Link to={`/product/${slug}`}>
      <h2>{name}</h2>
      <p>{price}</p>
    </Link>
  )
}

ProductCard.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCard
