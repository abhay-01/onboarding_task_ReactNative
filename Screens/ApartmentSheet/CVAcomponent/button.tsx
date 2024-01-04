import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

interface ButtonProps extends VariantProps<typeof button> {
  style?: ViewStyle;
  children?: React.ReactNode;
}

const button = cva('button', {
  variants: {
    intent: {
      primary: {
        backgroundColor: 'blue',
        color: 'yellow',
      },
      secondary: {
        backgroundColor: 'white',
        color: 'gray',
      },
    },
    size: {
      small: {
        fontSize: 12,
        paddingVertical: 4,
        paddingHorizontal: 8,
      },
      medium: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
      },

      large: {
        fontSize: 24,
        paddingVertical: 12,
        paddingHorizontal: 24,
      },
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      class: {
        textTransform: 'uppercase',
      },
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'large',
  },
});

export const Button: React.FC<ButtonProps> = ({ intent, size, style, children, ...props }) => (
  <TouchableOpacity style={[button({ intent, size }), style]} {...props}>
    <Text>{children}</Text>
  </TouchableOpacity>
);
