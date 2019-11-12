import styled from 'styled-components';

const MapWrapper = styled.div`
  position: flex;
  width: 100%;
  height: calc(100vh - 56px -  32px - 40px - 24px - 24px - 24px); // Navbar bar - padding X2 top/buttom - searchbar - padding - surfacePadding x2
  min-height: 500px;
`;

export default MapWrapper;
