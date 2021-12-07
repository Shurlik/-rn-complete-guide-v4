import React from "react";
import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";
import HeaderButton from "../components/HeaderButton";

const PlacesListScreen = (props) => {
    const places = useSelector((state) => state.places.places);
    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <PlaceItem
                    image={null}
                    title={itemData.item.title}
                    address={null}
                    onSelect={() => {
                        props.navigation.navigate("PlaceDetail", {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id,
                        });
                    }}
                />
            )}
        />
    );
};

PlacesListScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "All places",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title={"Add place"}
                    iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                    onPress={() => navData.navigation.navigate("NewPlace")}
                />
            </HeaderButtons>
        ),
    };
};

export default PlacesListScreen;

const styles = StyleSheet.create({});
