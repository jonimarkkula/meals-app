import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../colors/Colors';

interface ListProps {
  listData: string[];
}

function List(props: ListProps) {
  return (
    <>
      {props.listData.map((item, index) => (
        <View key={index} style={styles.listContainer}>
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 12,
    backgroundColor: Colors.SecondaryColor,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  listText: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
