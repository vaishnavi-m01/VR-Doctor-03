
import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

export default function Card({ children, className, ...rest }: ViewProps & { children?: ReactNode }) {
  return (
    <View {...rest} className={'bg-white border border-[#e6eeeb] rounded-2xl shadow-card ' + (className ?? '')}>
      {children}
    </View>
  );
}
 