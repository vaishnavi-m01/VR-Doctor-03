import React from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

type BtnProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'light';
  className?: string;
} & PressableProps;

export function Btn({ children, variant = 'primary', className, ...props }: BtnProps) {
  const base = "px-4 py-3 rounded-xl items-center justify-center";
  
  const cls = variant === 'primary' 
    ? `${base} bg-brand-dark-green shadow-custom`  
    : `${base} bg-brand-light-green border border-brand-border-green`;
  
  const textColor = variant === 'primary' ? "text-white" : "text-brand-text-green";

  return (
    <Pressable 
      className={`${cls} ${className || ''}`} 
      {...props}
      accessible={true}
      accessibilityRole="button"
    >
      <Text className={`font-zen-medium ${textColor}`}>{children}</Text>
    </Pressable>
  );
}
