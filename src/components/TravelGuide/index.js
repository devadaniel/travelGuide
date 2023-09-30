import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelPackages from '../TravelPackages'

import './index.css'

class TravelGuide extends Component {
  state = {
    travelGuideList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getTravelGuide()
  }

  getTravelGuide = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = data.packages.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        imgUrl: eachData.image_url,
        description: eachData.description,
      }))
      this.setState({travelGuideList: updateData, isLoading: true})
    }
  }

  renderTravelGuide = () => {
    const {travelGuideList} = this.state
    return (
      <ul className="tavel-packages-items">
        {travelGuideList.map(eachItem => (
          <TravelPackages key={eachItem.id} travelPackage={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>

        {isLoading ? this.renderTravelGuide() : this.renderLoadingView()}
      </div>
    )
  }
}

export default TravelGuide
