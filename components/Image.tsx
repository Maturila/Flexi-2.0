import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ImageContainer: {
    top: 165,
    left: 48,
    width: 269,
    height: 274,
    borderRadius: 56,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/09b25339-a79b-4c15-b312-97ba99ca3f5f.png',
};

interface ImageProps {
  image?: string;
}

const Image: React.FC<ImageProps> = (props) => {
  return (
    <View style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
