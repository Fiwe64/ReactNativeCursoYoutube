import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const style = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Alinha o modal na parte de baixo
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    height: '80%',

//////// Sombras

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
///////////////////////////

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#333'
  },

  ///Flags
  flagContainer:{
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  flagButton:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#EAEAEA',
    gap: 8,
  },
  flagSelected: {
    backgroundColor: colors.primary || '#007AFF',
  },
  flagText:{
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton:{
    backgroundColor: colors.primary || '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,

  },
  saveButtonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeBtn: {
    color: 'red',
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});