import styled from 'styled-components';
import { easyMove } from '../../style-constants';

const MarkerGroup = styled.div`
  display: flex;
  width: ${props => (props.length === 2 ? '55px' : '80px')};
 
  border-radius: 100px;
  animation: ${easyMove} 0.3s;
`;

export default MarkerGroup;
