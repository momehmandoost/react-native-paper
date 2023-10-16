import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Banner, Text} from 'react-native-paper';
import {Card, Button} from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>

      <Card style={styles.card}>
        <Card.Cover
          style={styles.pic}
          source={{uri: 'https://picsum.photos/700'}}
        />
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Card title
          </Text>
          <Text variant="bodyMedium" style={styles.title}>
            Do commodo proident aliquip irure proident et magna excepteur
            commodo aliquip non excepteur voluptate.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10, // Add a margin of 10 pixels from the top
  },
  pic: {
    margin: 10, // Add a margin of 10 pixels from the top
  },
  title: {
    margin: 10,
  },
});

export default MyComponent;
