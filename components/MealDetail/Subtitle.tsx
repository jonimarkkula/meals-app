import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../colors/Colors';

interface SubTitleProps extends PropsWithChildren {}

function SubTitle({ children }: SubTitleProps) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: Colors.SecondaryColor,
  },
});
