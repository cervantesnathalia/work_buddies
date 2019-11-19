import React from 'react';
import GoogleMapReact from 'google-map-react';
import supercluster from 'points-cluster';
import Marker from '../Marker';
import ClusterMarker from '../ClusterMarker';
import mapStyles from './mapStyles.json';
import { markersData, center } from '../../preData';
import MapWrapper from './MapWrapper';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const MAP = {
  defaultZoom: 0,
  defaultCenter: {lat: 13.149396, lng: 10.000353},
  options: {
    styles: mapStyles,
    minZoom:2,
    maxZoom: 19,
  },
};

export class GoogleMap extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      mapOptions: {
        center: MAP.defaultCenter,
        zoom: MAP.defaultZoom,
      },
      clusters: [],
    };
    this.getClusters = this.getClusters.bind(this);
    this.getClusters=this.getClusters.bind(this);
  }

  matchNameToCoord(coord) {
    for (let item of this.props.markersData) {
      if (item.lat === coord.lat && item.lng === coord.lng) {
        return item.name;
      }
    }
    return "Halp!"
  }

  matchNamesToCoord(coord) {
    let names = [];
    for (let item of this.props.markersData) {
      if (item.lat === coord.lat && item.lng === coord.lng) {
        names.push(item.name);
      }
    }
    return names;
  }

  getClusters = () => {
    console.log("calling ...");
    console.log(this.props.markersData);
    const clusters = supercluster(this.props.markersData, {
      maxZoom: 19,
      radius: 60,
    });

    return clusters(this.state.mapOptions);
  };

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
        this.matchNameToCoord=this.matchNameToCoord.bind(this);      }
    );
  };

  render() {
    return (
      <Card
        syle={{
          padding: "10px",
          borderRadius: "15px",
          minHeight: "auto",
          height: "100%",
          width: "100%"
        }}
      >
        <CardContent style={{height: "580px", backgroundColor:"#333a42"}}>
          <MapWrapper>
            <GoogleMapReact
                key={"map"}
                defaultZoom={MAP.defaultZoom}
                defaultCenter={MAP.defaultCenter}
                options={MAP.options}
                onChange={this.handleMapChange}
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: 'AIzaSyBAVa1tMJT6RuCDAiyYZGCVTFTE7VZXuaM' }}
            >
              {this.state.clusters.map(item => {
                if (item.numPoints === 1) {
                  return (
                      <Marker
                          key={`${item.id}${item.points[0].lng + item.points[0].lat}`}
                          lat={item.points[0].lat}
                          lng={item.points[0].lng}
                          names={this.matchNameToCoord({lat: item.points[0].lat, lng: item.points[0].lng})}
                          search={this.props.search}

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
        </CardContent>
      </Card>
    );
  }
}

export default GoogleMap;
