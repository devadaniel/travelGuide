import './index.css'

const TravelPackages = props => {
  const {travelPackage} = props
  const {imgUrl, name, description} = travelPackage
  return (
    <li className="package-list-items">
      <div className="each-travel-card">
        <img src={imgUrl} alt={name} className="img-url" />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TravelPackages
