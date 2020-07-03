import { StyleSheet } from 'react-native';

export const globalReviews = StyleSheet.create({
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#EC7063',
        letterSpacing: 2,
        borderColor: '#E74C3C',
        borderWidth: 2,
        marginBottom: 10,
        fontWeight: 'bold',

    },
    container: {
        flex: 1,
        padding: 20,
    },
    commandContainer: {
        marginRight: 0,
        marginBottom: 10,
    },
    newCommand: {
        paddingBottom: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        paddingTop: 10,
        marginBottom: 10,
        backgroundColor: '#F1C40F',
    },
    command: {
        fontWeight: 'bold',
        marginRight: 15,
        textDecorationLine: 'underline',
        color: "#fff",
    },
    description: {
        color: 'grey',
        flexWrap: 'wrap',
        flex: 1,
    },
    chapitre: {
        marginRight: 0,
        marginBottom: 10,
    },
    part: {
        marginTop: 10,
    },
    partTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    linkedText: {
        color: 'blue',
        marginBottom: 10,
    },
    summary: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 15,
        backgroundColor: '#E59866',
        borderRadius: 10,
        borderColor: '#DC7633',
        borderWidth: 3,
    },
    titleSummary: {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 16,
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: "roboto-bold"
    },
    summaryItem: {
        marginBottom: 10,
    },
    firstStage: {
        marginBottom: 5,
        paddingLeft: 0,
        fontSize: 14,
        color: "#fff",
        flexWrap: 'wrap',
        marginBottom: 5,
        fontFamily: "roboto-bold"
    },
    secondStage: {
        paddingLeft: 15,
        color: "#fff",
        marginBottom: 5,
    }
})