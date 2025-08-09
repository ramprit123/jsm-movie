import { icons } from "@/constants/icons";
import React from "react";
import {
  Image,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextInput,
  View,
} from "react-native";

interface Props {
  placeholder: string;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onChangeText?: (text: string) => void;
  value?: string;
}
const SearchTexbox = ({
  placeholder,
  onPress,
  onChangeText,
  value = "",
}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white placeholder:font-medium"
      />
    </View>
  );
};

export default SearchTexbox;
