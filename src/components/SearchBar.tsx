
import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default function SearchBar({ 
  placeholder='Search participant',
  value,
  onChangeText
}: {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}) {
  return (
    <View className="flex-row items-center gap-3">
      {/* Search Bar - Rounded pill shape */}
      <View className="flex-1 flex-row items-center bg-white border border-[#e6eeeb] rounded-full px-4 py-3">
        <Text className="text-[#19B888] mr-2">🔎</Text>
        <TextInput 
          placeholder={placeholder} 
          placeholderTextColor="#9CA3AF"
          className="flex-1 text-base text-[#374151]"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      
      {/* Filter Icon */}
      <View className="w-10 h-10 rounded-xl bg-white border border-[#e6eeeb] items-center justify-center">
        <View className="flex-col items-center justify-center gap-1">
          <View className="flex-row items-center">
            <View className="w-1.5 h-1.5 rounded-full bg-[#6B7280] mr-1" />
            <View className="w-3 h-0.5 bg-[#6B7280] rounded-full" />
          </View>
          <View className="flex-row items-center">
            <View className="w-3 h-0.5 bg-[#6B7280] rounded-full" />
            <View className="w-1.5 h-1.5 rounded-full bg-[#6B7280] mx-1" />
          </View>
          <View className="flex-row items-center">
            <View className="w-3 h-0.5 bg-[#6B7280] rounded-full" />
            <View className="w-1.5 h-1.5 rounded-full bg-[#6B7280] ml-1" />
          </View>
        </View>
      </View>
    </View>
  );
}
