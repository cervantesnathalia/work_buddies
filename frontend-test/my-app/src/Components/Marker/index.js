import React from 'react';
import PropTypes from 'prop-types';
import MarkerStyled from './MarkerStyled';
import MarkerInGroupStyled from './MarkerInGroupStyled';
import Ping from '../Ping';
import { Tooltip } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";


class Marker extends React.PureComponent {
  static defaultProps = {
    inGroup: false,
    isOpen: false
  };

  render() {
    return (
      <div>

        {this.props.inGroup ?
            <Tooltip
                key={`${this.props.names}`}
                title={<Typography>
                  {this.props.names.map((name, index) => {
                    return (
                        <div key={`${name}${index}`}>{name}</div>
                  )})}
                  </Typography>
                }
                placement="top">
              <MarkerInGroupStyled>
                <Ping scale="0.55" />
              </MarkerInGroupStyled>
            </Tooltip>

          :
            <Tooltip
                key={`${this.props.names}`}
                title={<Typography>{this.props.names}</Typography>}
                placement="top"
            >
              <MarkerStyled
                  onClick={() => {this.props.search(this.props.names, "Individual")}}
              >
                <Ping scale="0.55" />
              </MarkerStyled>
            </Tooltip>
           }

      </div>
    );
  }
}

Marker.propTypes = {
  inGroup: PropTypes.bool,
};

export default Marker;
