import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

class BandwidthIndex extends Component {

  componentDidMount() {
    this.props.fetchData();
    console.log(this.props.workload);
  }

  render() {
    return (
      <div>
        <div>Hello World!</div>
      </div>
    );
  }

}

function mapStateToProps({ workload }) {
  return { workload }
}

export default connect(mapStateToProps, { fetchData })(BandwidthIndex);
