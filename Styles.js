import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F9FCFF',
      flex: 1,
      alignSelf:'stretch',
    },
    welcome: {
      fontSize: 22,
      textAlign: 'center',
      margin: 10,
      fontWeight: '600',
      color: '#554E8F'
    },
    instructions: {
      textAlign: 'center',
      color: '#82A0B7',
      marginBottom: 5,
      fontSize: 17,
      width: 285
    },
    task: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 10,
        width: 350,
        marginVertical: 10
    }
})
