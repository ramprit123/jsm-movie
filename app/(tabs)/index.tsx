import MovieCard from "@/components/movie-card";
import SearchTexbox from "@/components/search-texbox";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetchMovies();
      return res;
    },
  });
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {isLoading && (
          <ActivityIndicator
            size={"large"}
            className="my-5"
            color={"#0000ff"}
          />
        )}
        {error && <Text>Error fetching movies</Text>}
        <SearchTexbox placeholder="Search movies" />

        <Text className="text-white font-bold text-lg mt-5">Latest Movies</Text>

        <FlatList
          className="mt-5"
          data={data}
          renderItem={({ item }) => <MovieCard item={item} />}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,
          }}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
