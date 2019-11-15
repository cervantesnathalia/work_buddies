import React from 'react';
import GoogleMapReact from 'google-map-react';
import supercluster from 'points-cluster';

import Marker from '../Marker';
import ClusterMarker from '../ClusterMarker';

import mapStyles from './mapStyles.json';
import { markersData, center } from '../../fakeData';

import MapWrapper from './MapWrapper';
import Surface from "@hig/surface";
import Tooltip from "@hig/tooltip";

const MAP = {
  defaultZoom: 0,
  defaultCenter: center,
  options: {
    styles: mapStyles,
    minZoom:2,
    maxZoom: 19,
  },
};

export class GoogleMap extends React.PureComponent {
//   eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)
    this.state = {
      mapOptions: {
        center: MAP.defaultCenter,
        zoom: MAP.defaultZoom,
      },
      clusters: [],
      geoData: []
    };
    this.getClusters = this.getClusters.bind(this);
  }


  getClusters = () => {
    let pings = markersData;

    if(this.state.geoData !== undefined) {
      pings = this.state.geoData;

    }
    const clusters = supercluster(pings, {
      minZoom: 0,
      maxZoom: 19,
      radius: 60,
    });

    return clusters(this.state.mapOptions);
  };
  componentDidMount() {
    this.setState({geoData: this.props.geoData});
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.geoData != this.props.geoData) {
        this.setState({geoData: this.props.geoData});
        this.handleMapChange(this.state.mapOptions)
      }
  }

  matchNameToCoord(coord) {
    for (let item of this.state.geoData) {
      if (item.lat === coord.lat && item.lng === coord.lng) {
        return item.name;
      }
    }
    return "Halp!"
  }

  matchNamesToCoord(coord) {
    let names = [];
    for (let item of this.state.geoData) {
      if (item.lat === coord.lat && item.lng === coord.lng) {
        names.push(item.name);
      }
    }
    return names;
  }

  createClusters = props => {
    this.setState({
      clusters: this.state.mapOptions.bounds
        ? this.getClusters(props).map(({ wx, wy, numPoints, points }) => ({
            lat: wy,
            lng: wx,
            numPoints,
            id: `${numPoints}_${points[0].id}`,
            points,
          }))
        : [],
    });
  };

  handleMapChange = ({ center, zoom, bounds }) => {
    this.setState(
      {
        mapOptions: {
          center,
          zoom,
          bounds,
        },
      },
      () => {
        this.createClusters(this.props);
        this.matchNamesToCoord=this.matchNamesToCoord.bind(this);
        this.matchNameToCoord=this.matchNameToCoord.bind(this);
      }
    );
  };

  render() {
    return (
      <div
          horizontalPadding="s"
          verticalPadding="s"
          shadow="low"
          borderRadius="s"
      >
        <MapWrapper>
          <GoogleMapReact
              key={"map"}
            defaultZoom={MAP.defaultZoom}
            defaultCenter={MAP.defaultCenter}
            options={MAP.options}
            onChange={this.handleMapChange}
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: 'AIzaSyCnIlil19N8uYUH2TV0lQRxBpfv82lTpJQ' }}
          >
            {this.state.clusters.map(item => {
              if (item.numPoints === 1) {
                return (
                  <Marker
                    key={`${item.id}${item.points[0].lng + item.points[0].lat}`}
                    lat={item.points[0].lat}
                    lng={item.points[0].lng}
                    names={this.matchNameToCoord({lat: item.points[0].lat, lng: item.points[0].lng})}
                  >

                  </Marker>
                );
              }

              return (

                <ClusterMarker
                  key={item.id}
                  lat={item.lat}
                  lng={item.lng}
                  points={item.points}
                  matchNamesToCoord={this.matchNamesToCoord}
                />

              );
            })}
          </GoogleMapReact>
        </MapWrapper>
      </div>
    );
  }
}

export default GoogleMap;
