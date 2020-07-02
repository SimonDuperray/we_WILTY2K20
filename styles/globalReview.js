import { StyleSheet } from 'react-native';

export const globalReviews = StyleSheet.create({
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        borderColor: 'grey',
        borderWidth: 3,
        paddingTop: 10,
        paddingBottom: 10,
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
        borderBottomWidth: 1.5,
        borderBottomColor: 'grey',
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 10
    },
    command: {
        fontWeight: 'bold',
        marginRight: 15,
        textDecorationLine: 'underline',
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
        backgroundColor: '#5D6D7E',
        borderRadius: 10,
    },
    titleSummary: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    summaryItem: {
        marginBottom: 10,
    },
    firstStage: {
        marginBottom: 5,
        paddingLeft: 0,
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10,
    },
    secondStage: {
        paddingLeft: 10
    }
})