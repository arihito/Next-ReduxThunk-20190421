import React, { Component } from 'react'
import firebase from 'firebase'
import Router from 'next/router'
import "firebase/storage"

class Fireadd extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name_str: '',
      msg_str: '',
      lastID: -1,
      data: []
    }
    this.getLastID();// 最後のIDのチェック
    this.doChangeName = this.doChangeName.bind(this)
    this.doChangeMsg = this.doChangeMsg.bind(this)
    this.doAction = this.doAction.bind(this)
  }

  doChangeName(e) {
    this.setState({
      name_str: e.target.value
    })
  }

  doChangeMsg(e) {
    this.setState({
      msg_str: e.target.value
    })
  }

  doAction(e) {
    this.addFireData()
    Router.push('/fire')
  }

  getLastID() {
    let db = firebase.database()
    let ref = db.ref('sample/')
    let self = this
    ref.orderByKey().limitToLast(1).on('value', (snapshot) => {
      let res = snapshot.val()
      for (let i in res) {
        self.setState({
          lastID: i
        })
        return
      }
    })
  }

  addFireData() {
    if (this.state.lastID == -1) {
      return
    }
    let id = this.state.lastID * 1 + 1
    let db = firebase.database()
    let ref = db.ref('sample/' + id)
    ref.set({
      ID: id,
      message: this.state.msg_str,
      name: this.state.name_str
    })
  }

  render() {
    if (this.state.lastID == -1) {
      this.getLastID()
    }
    return (
      <div>
        {(this.state.lastID == -1)
          ?
          <p>please wait...</p>
          :
          <table className="firetable">
            <tr>
              <td>name</td>
              <td><input type="text" className="inputtext" size="50" placeholder="your name"
                onChange={this.doChangeName} value={this.state.name_str} /></td>
            </tr>
            <tr>
              <td>message</td>
              <td><input type="text" className="inputtext" size="50" placeholder="your message"
                onChange={this.doChangeMsg} value={this.state.msg_str} /></td>
            </tr>
            <tr><td></td>
              <td><button className="btn" onClick={this.doAction}>Add</button></td></tr>
          </table>}
      </div>
    )
  }
}

export default Fireadd