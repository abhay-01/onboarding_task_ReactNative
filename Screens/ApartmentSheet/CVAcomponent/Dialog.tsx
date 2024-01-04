import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { cva } from 'class-variance-authority';

// Define CVA styles
const dialogStyles = cva('h-full w-full justify-center items-center', {
  variants: {
    variant: {
      default: 'bg-white',
      success: 'bg-green-200',
      error: 'bg-red-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

// Create the Dialog component
const Dialog = ({ children, visible, onClose, variant }) => {
  const styles = dialogStyles({ variant });

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles}>
        <View style={dialogStyles('p-4 bg-white rounded shadow')}>
          <Text>{children}</Text>
          <TouchableOpacity onPress={onClose} style={dialogStyles('mt-4 p-2 bg-blue-500')}>
            <Text style={dialogStyles('text-white')}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;


