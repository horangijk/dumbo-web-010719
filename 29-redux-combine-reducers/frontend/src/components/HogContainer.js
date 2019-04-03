import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hog from './Hog'
import HogEditForm from './HogEditForm'
import { getHogs } from '../actions/hogActions'
// import hogs from '../data/porkers_data'

class HogContainer extends Component {
  componentDidMount() {
    this.props.getHogs()
  }

  render() {
    console.log(this.props);
    const hogsWithJogs = this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    return (
      <div>
        <div className="App-logo">Joggit Hoggit</div>
        <HogEditForm />
        <div className="hobbitsContainer">
          {hogsWithJogs}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   hogs: state.hogs
// })

const mapStateToProps = ({ hogs }) => ({ hogs })
const mapDispatchToProps = { getHogs }
// const mapDispatchToProps = (dispatch) => { getHogs: (hogs) => dispatch(getHogs(hogs)) }

export default connect(mapStateToProps, mapDispatchToProps)(HogContainer)
