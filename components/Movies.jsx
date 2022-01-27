import { FlatList, StyleSheet, View } from "react-native"
import Movie from "./Movie"

export default function Movies(props) {
    const movies = props.movies

    return (
        <FlatList

            data={movies}
            renderItem={({ item }) => (
                    <Movie item={item}></Movie>
            )}
            keyExtractor={(item) => item.title}
        >

        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
})