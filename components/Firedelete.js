import Reach, { Component } from 'react'
import firebase from 'firebase'
import Router from 'next/router'
import "firebase/storage"

class Firedelete extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      id_str: ''
    })
    this.doChange = this.doChange.bind(this)
    this.doAction = this.doAction.bind(this)
  }

  doChange(e) {
    this.setState({
      id_str: e.target.value
    })
  }
td
  doAction(e) {
    this.deleteFireData()
    Router.push('/fire')
  }

  deleteFireData() {
    let id = this.state.id_str
    let db = firebase.database()
    let ref = db.ref('sample/' + id)
    ref.remove()
  }

  render() {
    return (
      <div>
        <input type="text" className="inputtext" size="3" placeholder="ID"
          onChange={this.doChange} value={this.state.id_str} />
          <button className="btn" onClick={this.doAction}>Delete</button>
      </div>
    )
  }
}

export default Firedelete