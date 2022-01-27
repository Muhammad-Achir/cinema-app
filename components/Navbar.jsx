import { StyleSheet, Text, View } from "react-native"

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Text style={styles.list}>Action</Text>
            <Text style={styles.list}>Romance</Text>
            <Text style={styles.list}>Sci-Fi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    list: {
        marginHorizontal: 4,
        marginVertical: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: "salmon",
        borderRadius: 10,
    }
})