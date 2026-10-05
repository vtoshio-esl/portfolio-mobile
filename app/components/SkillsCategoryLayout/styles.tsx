import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },

  headerCard: {
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 28,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  eyebrow: {
    marginBottom: 8,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  title: {
    marginBottom: 12,
    fontSize: 30,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
  },

  content: {
    marginTop: 12,
  },
});
