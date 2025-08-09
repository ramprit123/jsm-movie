import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabLayout;
