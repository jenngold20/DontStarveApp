// components/SharedStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');


export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#e3c07b",
    textAlign: "center",
  },

  tipContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  tipTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  tipText: {
    color: "#ccc",
    fontSize: 16,
    fontStyle: "italic",
  },

  button: {
    backgroundColor: "#6a4f4b",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonText: {
    color: "#f0e7db",
    fontSize: 18,
    fontWeight: "600",
  },

  buttonCenter: {
    alignSelf: "center",
    paddingHorizontal: 40,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  subtitleText: {
    color: "#d9d9d9",
    fontStyle: "italic",
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },


   container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#222222',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#333333',
    borderRadius: 8,
  },
  personajeImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  personajeName: {
    color: '#fff',
    fontSize: 18,
  },
  personajeDetailImage: {
    width: width - 20,
    height: width - 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  listItemText: {
    fontSize: 16,
    color: '#ccc',
    marginLeft: 10,
    marginBottom: 4,
  },

  card: {
    backgroundColor: '#444',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },

  personajeDetailImageSmall: {
  width: width * 0.7,
  height: width * 0.7,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginBottom: 10,
},

scrollContainer: {
  flexGrow: 1,
  justifyContent: 'flex-start', 
  padding: 20,
},

input: {
  height: 45,
  borderColor: "#555",
  borderWidth: 1,
  marginBottom: 15,
  fontSize: 16,
  color: "#000",
},

subtitulo: {
  fontSize: 20,
  fontWeight: '600',
  color: '#f0c96d',
  marginBottom: 10,
  textAlign: 'center',
},

});
