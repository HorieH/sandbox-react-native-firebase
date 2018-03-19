import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import firebase from './firebase'

const db = firebase.database()
const ref = db.ref('test')

export default class App extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    ref.on('value', snapshot => this.setState(snapshot.val()))
  }

  componentWillUnmount() {
    ref.off('value')
  }

  plus = () => {
    ref.update({
      count: this.state.count + 1
    })
  }

  minus = () => {
    ref.update({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        <Button title="+" onPress={this.plus} />
        <Button title="-" onPress={this.minus} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
