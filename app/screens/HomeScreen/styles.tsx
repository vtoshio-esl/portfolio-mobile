import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
  },

  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },

  userContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 10,
    margin: 10,
  },

  userPfp: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 10,
    elevation: 5
  },

  nameTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  jobTitle: {
    fontSize: 12,
    letterSpacing: 1.5,
    fontWeight: '700',
    textAlign: 'center'
  },

  catchPhrash: {
    fontSize: 14,
    fontWeight: 'ultralight',
    textAlign: 'center',
    fontStyle: 'italic',
    marginHorizontal: 50,
    marginBottom: 10
  },

  linksContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
});
