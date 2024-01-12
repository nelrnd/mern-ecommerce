import { useParams } from "react-router-dom"

const Catalog = () => {
  const { slug } = useParams()

  return (
    <>
      <h1 className="heading">{slug}</h1>
    </>
  )
}

export default Catalog
