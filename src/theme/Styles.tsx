import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 5
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    bigButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuButton: {
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
    }
})