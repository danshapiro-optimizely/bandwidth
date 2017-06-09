import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class BandwidthIndex extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <div>{ this.props.workload[0] }</div>
      </div>
    );
  }

}

function mapStateToProps({ workload }) {
  return { workload }
}

export default connect(mapStateToProps, { fetchData })(BandwidthIndex);
