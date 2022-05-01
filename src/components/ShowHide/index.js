import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    show1: false,
    show2: false,
  }

  changeMode1 = () => {
    this.setState(prevState => ({show1: !prevState.show1}))
    // console.log('clicked', show)
  }

  changeMode2 = () => {
    this.setState(prevState => ({show2: !prevState.show2}))
    // console.log('clicked', show)
  }

  render() {
    const {show1, show2} = this.state
    return (
      <div className="bg-cont">
        <div className="app-cont">
          <h1 className="heading">Show/Hide</h1>
          <div className="card-cont">
            <div className="card1">
              <div className="btn-class">
                <button
                  className="button"
                  onClick={this.changeMode1}
                  type="button"
                >
                  Show/Hide FirstName
                </button>
              </div>
              {show1 && <p className="name">Joe</p>}
            </div>
            <div className="card2">
              <div className="btn-class">
                <button
                  className="button"
                  onClick={this.changeMode2}
                  type="button"
                >
                  Show/Hide LastName
                </button>
              </div>
              {show2 && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
