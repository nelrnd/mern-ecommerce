import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import ProductImage from "../components/ProductImage"
import CategoryCard from "../components/CategoryCard"

const Home = () => {
  const categories = useFetch("/category")
  const products = useFetch("/product")

  const selectedCategories = ["Hoodies", "T-Shirts"]

  if (!categories || !products) return null

  return (
    <>
      <h2 className="heading">Shop by category</h2>
      <Grid cols={2}>
        {selectedCategories.map((s) => (
          <CategoryCard
            key={s}
            category={categories.find((c) => c.name === s)}
          />
        ))}
      </Grid>

      <h2 className="heading">Latest</h2>
      <Grid cols="4">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </Grid>
    </>
  )
}

const Grid = ({ cols, children }) => (
  <div className={`mb-8 grid grid-cols-${cols} gap-4 gap-y-8`}>{children}</div>
)

const ProductCard = ({ product }) => {
  const { _id, name, slug, price, image } = product

  return (
    <Link to={`/product/${slug}`}>
      <ProductImage src={image} />

      <h2 className="mt-4 font-bold text-xl">{name}</h2>
      <p>${price}</p>
    </Link>
  )
}

export default Home
