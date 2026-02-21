import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const style = StyleSheet.create({
    cardContainer:{

    backgroundColor: '#fff',
    borderRadius:12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 6,

        // Sombrinha leve
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    },
    content:{
        flex:1,
        paddingRight:10,

    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,

    },description:{
        fontSize: 14,
        color: '#777',
        marginBottom: 8,

    },time:{
        fontSize: 12,
        fontWeight: '600',
        color: '#555',

    },flagBox:{
        alignContent: 'center',
        justifyContent: 'center',
    },ball:{
        width: 12,
        height: 12,
        borderRadius: 6,
        marginBottom: 4,
    },flagText:{
        fontSize: 10,
        fontWeight: 'bold'
    },

});


