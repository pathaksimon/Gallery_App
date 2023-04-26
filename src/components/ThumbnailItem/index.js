import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  clicking = () => {
    const {each, changing, transfer} = this.props
    const {imageUrl, id} = each
    changing(id)
  }

  nimba = () => {
    const {each, changing, transfer} = this.props
    const {id1} = transfer
    if (each.id === id1) {
      return 'photu1'
    }
    return ''
  }

  render() {
    const {each} = this.props
    const {thumbnailUrl, thumbnailAltText} = each
    return (
      <li className="lista">
        <button onClick={this.clicking} className="bitta">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`photu ${this.nimba()}`}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
