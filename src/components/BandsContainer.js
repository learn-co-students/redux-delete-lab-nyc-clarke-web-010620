import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.deleteBand} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", payload: band }),
  deleteBand: bandId => dispatch({ type: "DELETE_BAND", payload: bandId })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
