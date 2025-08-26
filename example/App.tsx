import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Modal,
  Button,
  View,
  Text,
} from "react-native";

import { BasicCalendarList } from "./src/BasicCalendarList";
import { useDateRange } from "../src";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { calendarActiveDateRanges, onCalendarDayPress } = useDateRange();

  return (
    <SafeAreaView style={styles.sfeAreaView}>
      <Button title="Open" onPress={() => setIsOpen(true)} />
      {calendarActiveDateRanges.length > 0 && (
        <Text>
          {calendarActiveDateRanges
            .map((range) => `${range.startId} - ${range.endId}`)
            .join(", ")}
        </Text>
      )}
      <Modal animationType="slide" visible={isOpen}>
        <SafeAreaView style={styles.sfeAreaView}>
          <View style={styles.header}>
            <Text> Header</Text>
            <Button title="Close" onPress={() => setIsOpen(false)} />
          </View>
          <BasicCalendarList
            calendarActiveDateRanges={calendarActiveDateRanges}
            onCalendarDayPress={onCalendarDayPress}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sfeAreaView: {
    flex: 1,
    paddingVertical: 24,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
});
