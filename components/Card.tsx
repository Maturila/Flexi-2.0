import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import Text from './Text';

interface CardProps extends ViewProps {
  children?: React.ReactNode;
  title?: string;
  date?: string;
  description?: string;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});

const Card: React.FC<CardProps> = ({ children, style, title, date, description, ...props }) => {
  if (title || date || description) {
    return (
      <View style={[styles.card, style]} {...props}>
        {title && <Text text={title} style={styles.title} />}
        {date && <Text text={date} style={styles.date} />}
        {description && <Text text={description} style={styles.description} />}
      </View>
    );
  }

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

export default Card;
