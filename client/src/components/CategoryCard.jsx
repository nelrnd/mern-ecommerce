import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  if (!category) return null

  return (
    <Link to={`/category/${category.slug}`}>
      <div className="group bg-blue-200 p-12 rounded-xl aspect-square relative overflow-hidden shadow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="text-white absolute bottom-12">
          <h2 className="font-bold  text-4xl mb-2">{category.name}</h2>
          <p className="group-hover:underline">See more...</p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
