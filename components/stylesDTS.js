import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const estiloDST = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#1b1b1b',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(30,30,30,0.9)',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  nombre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f2e2c4',
    textAlign: 'center',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    color: '#d9d9d9',
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#f0c96d',
    marginBottom: 10,
    textAlign: 'center',
  },
  habilidad: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 6,
    textAlign: 'center',
  },
});
