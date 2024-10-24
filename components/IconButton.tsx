import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  onPress(): void;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

function IconButton(props: IconButtonProps) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => {
        return pressed && styles.pressed;
      }}
    >
      <Ionicons name={props.icon} size={24} color={props.color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
