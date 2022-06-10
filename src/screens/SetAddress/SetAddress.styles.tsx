import styled from 'styled-components';
import Button from '@src/components/Button';

export const SetAddressButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.green};
  width: 90%;
  align-self: center;
  border-radius: 5px;
  padding: 20px;
`;
