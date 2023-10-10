import {styled} from 'styled-components/native';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  visibleIcon: boolean;
}

export const Check = styled(TouchableOpacity)<Props>`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid #5438dc;
  background-color: ${props => (props.visibleIcon ? '#5438dc' : '#fff')};
`;
