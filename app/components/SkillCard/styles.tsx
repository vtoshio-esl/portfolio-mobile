import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5, 
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    techGroup: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    rating: {
        flexDirection: 'row',
        gap: 5
    }
});
