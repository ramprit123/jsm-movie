import { icons } from "@/constants/icons";
import { Movies } from "@/types/movie";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  item: Movies;
}
const MovieCard = ({ item }: Props) => {
  return (
    <Link href={`/movie/${item.id}`} asChild className="flex-1">
      <TouchableOpacity>
        <Image
          source={{ uri: item?.thumbnails[0]?.url }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white font-bold mt-2 line-clamp-2 max-w-sm">
          {item.primaryTitle}
        </Text>
        <View>
          <Text className="text-gray-400 mt-1 text-sm">{item.releaseDate}</Text>
          <Text className="text-gray-400 text-sm" numberOfLines={1}>
            {item.runtimeMinutes} min | {item.genres.join(", ")}
          </Text>
          <View className="flex-row items-center">
            <Image source={icons.star} className="mr-1 size-5" />
            <Text className="text-gray-400 text-sm">
              {item.averageRating}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
