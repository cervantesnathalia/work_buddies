import React from 'react';
import PropTypes from 'prop-types';

import MarkerStyled from './MarkerStyled';
import MarkerInGroupStyled from './MarkerInGroupStyled';
import Ping from '../Ping';
import Tooltip from '@hig/tooltip';
import Typography from '@hig/typography';
import { Tooltip } from 'antd';

class Marker extends React.PureComponent {
//   eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    inGroup: false,
    isOpen: false
  };


  render() {

    return (
      <div>

        {this.props.inGroup

          ?
            <Tooltip
                key={`${this.props.names}`}
                content={<span className="css-1x6j4q8" style={{color: "rgb(60, 60, 60)",fontSize: "12px"}}>{this.props.names.map((name, index) => {
                  return (
                      <div key={`${name}${index}`}>{name}</div>
                  )
                })}</span>}
                anchorPoint="bottom-center"
                openOnHover
            >
              <MarkerInGroupStyled

              >
                  <Ping scale="0.55" />
              </MarkerInGroupStyled>
            </Tooltip>
          :
            <Tooltip
                key={`${this.props.names}`}
                content={<span className="css-1x6j4q8" style={{color: "rgb(60, 60, 60)",fontSize: "12px"}}>{this.props.names}</span>}
                anchorPoint="bottom-center"
                openOnHover
            >
              <MarkerStyled

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
