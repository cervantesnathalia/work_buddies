import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Marker from '../Marker';
import MarkerGroup from './MarkerGroup';
import MarkerCounter from './MarkerCounter';
import { Tooltip } from '@material-ui/core';


class ClusterMarker extends React.PureComponent {
  state = {
    clusterFaceMarkers: this.props.points.slice(0, 2),
  };


  render() {
    return (
      <MarkerGroup length={this.props.points.length}>
        {this.state.clusterFaceMarkers.map(marker =>

          <Marker
            key={`${marker.id}${marker.lat}`}
            lat={marker.lat}
            lng={marker.lng}
            name={marker.id}
            names={this.props.matchNamesToCoord({lat: marker.lat, lng: marker.lng})}
            inGroup
          />
        )}
        {this.props.points.length > 2 &&
          <MarkerCounter>
            {this.props.points.length - 2}
          </MarkerCounter>}
      </MarkerGroup>
    );
  }
}

ClusterMarker.propTypes = {
  points: PropTypes.array,
  users: PropTypes.instanceOf(List),
  selected: PropTypes.bool,
};

export default ClusterMarker;
