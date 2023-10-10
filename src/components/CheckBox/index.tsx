import React from 'react';

import {TouchableOpacityProps} from 'react-native';

import {Check} from './styles';
import CheckIcon from 'react-native-vector-icons/Feather';

interface CheckboxProps extends TouchableOpacityProps {
  visibleIcon: boolean;
}
export function Checkbox({visibleIcon, ...rest}: CheckboxProps) {
  return (
    <Check visibleIcon={visibleIcon} {...rest}>
      {visibleIcon && <CheckIcon size={16} color="#fff" name="check" />}
    </Check>
  );
}
