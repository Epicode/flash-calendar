import React from "react";

import { Calendar } from "../../src";
import { useDateRange } from "../../src/hooks/useDateRange";

export const BasicCalendarList = () => {
  const { calendarActiveDateRanges, onCalendarDayPress } = useDateRange();
  return (
    <Calendar.List
      calendarPreActiveDateRanges={preActiveDateRanges}
      calendarActiveDateRanges={calendarActiveDateRanges}
      onCalendarDayPress={onCalendarDayPress}
      showSixWeeks
      calendarMaxDateId="2026-12-31"
      calendarMinDateId="2024-01-31"
    />
  );
};

// Helper function to generate random colors
const getRandomColor = () => {
  const colors = [
    "rgb(255, 182, 193)", // Light pink
    "rgb(173, 216, 230)", // Light blue
    "rgb(144, 238, 144)", // Light green
    "rgb(255, 218, 185)", // Peach
    "rgb(221, 160, 221)", // Plum
    "rgb(176, 224, 230)", // Powder blue
    "rgb(255, 228, 196)", // Bisque
    "rgb(240, 248, 255)", // Alice blue
    "rgb(245, 245, 220)", // Beige
    "rgb(255, 240, 245)", // Lavender blush
    "rgb(240, 255, 240)", // Honeydew
    "rgb(255, 250, 240)", // Floral white
    "rgb(248, 248, 255)", // Ghost white
    "rgb(255, 245, 238)", // Seashell
    "rgb(245, 255, 250)", // Mint cream
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const preActiveDateRanges = [
  // Individual days with random colors
  {
    color: getRandomColor(),
    endId: "2024-06-03",
    startId: "2024-06-03",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-04",
    startId: "2024-06-04",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-05",
    startId: "2024-06-05",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-06",
    startId: "2024-06-06",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-07",
    startId: "2024-06-07",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-10",
    startId: "2024-06-10",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-11",
    startId: "2024-06-11",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-12",
    startId: "2024-06-12",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-13",
    startId: "2024-06-13",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-14",
    startId: "2024-06-14",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-17",
    startId: "2024-06-17",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-18",
    startId: "2024-06-18",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-19",
    startId: "2024-06-19",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-20",
    startId: "2024-06-20",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-21",
    startId: "2024-06-21",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-24",
    startId: "2024-06-24",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-25",
    startId: "2024-06-25",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-26",
    startId: "2024-06-26",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-27",
    startId: "2024-06-27",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-06-28",
    startId: "2024-06-28",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-01",
    startId: "2024-07-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-02",
    startId: "2024-07-02",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-03",
    startId: "2024-07-03",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-04",
    startId: "2024-07-04",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-05",
    startId: "2024-07-05",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-08",
    startId: "2024-07-08",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-09",
    startId: "2024-07-09",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-10",
    startId: "2024-07-10",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-11",
    startId: "2024-07-11",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-12",
    startId: "2024-07-12",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-15",
    startId: "2024-07-15",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-16",
    startId: "2024-07-16",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-17",
    startId: "2024-07-17",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-18",
    startId: "2024-07-18",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-19",
    startId: "2024-07-19",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-22",
    startId: "2024-07-22",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-23",
    startId: "2024-07-23",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-24",
    startId: "2024-07-24",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-25",
    startId: "2024-07-25",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-26",
    startId: "2024-07-26",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-29",
    startId: "2024-07-29",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-30",
    startId: "2024-07-30",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-07-31",
    startId: "2024-07-31",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-01",
    startId: "2024-08-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-02",
    startId: "2024-08-02",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-05",
    startId: "2024-08-05",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-06",
    startId: "2024-08-06",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-07",
    startId: "2024-08-07",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-08",
    startId: "2024-08-08",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-09",
    startId: "2024-08-09",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-12",
    startId: "2024-08-12",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-13",
    startId: "2024-08-13",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-14",
    startId: "2024-08-14",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-15",
    startId: "2024-08-15",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-16",
    startId: "2024-08-16",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-19",
    startId: "2024-08-19",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-20",
    startId: "2024-08-20",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-21",
    startId: "2024-08-21",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-26",
    startId: "2024-08-26",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-08-28",
    startId: "2024-08-28",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-09-02",
    startId: "2024-09-02",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-07",
    startId: "2024-10-07",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-08",
    startId: "2024-10-08",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-09",
    startId: "2024-10-09",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-10",
    startId: "2024-10-10",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-28",
    startId: "2024-10-28",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-29",
    startId: "2024-10-29",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-30",
    startId: "2024-10-30",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-10-31",
    startId: "2024-10-31",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-11-04",
    startId: "2024-11-04",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-11-05",
    startId: "2024-11-05",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2024-11-06",
    startId: "2024-11-06",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-01-20",
    startId: "2025-01-20",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-01-22",
    startId: "2025-01-22",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-01-27",
    startId: "2025-01-27",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-01-28",
    startId: "2025-01-28",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-01-29",
    startId: "2025-01-29",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-01-30",
    startId: "2025-01-30",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-01-31",
    startId: "2025-01-31",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-03",
    startId: "2025-02-03",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-04",
    startId: "2025-02-04",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-05",
    startId: "2025-02-05",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-06",
    startId: "2025-02-06",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-07",
    startId: "2025-02-07",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-10",
    startId: "2025-02-10",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-11",
    startId: "2025-02-11",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-12",
    startId: "2025-02-12",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-13",
    startId: "2025-02-13",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-14",
    startId: "2025-02-14",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-17",
    startId: "2025-02-17",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-18",
    startId: "2025-02-18",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-20",
    startId: "2025-02-20",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-21",
    startId: "2025-02-21",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-24",
    startId: "2025-02-24",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-25",
    startId: "2025-02-25",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-26",
    startId: "2025-02-26",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-27",
    startId: "2025-02-27",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-02-28",
    startId: "2025-02-28",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-03",
    startId: "2025-03-03",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-04",
    startId: "2025-03-04",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-05",
    startId: "2025-03-05",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-06",
    startId: "2025-03-06",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-07",
    startId: "2025-03-07",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-10",
    startId: "2025-03-10",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-11",
    startId: "2025-03-11",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-12",
    startId: "2025-03-12",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-13",
    startId: "2025-03-13",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-14",
    startId: "2025-03-14",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-18",
    startId: "2025-03-18",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-19",
    startId: "2025-03-19",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-20",
    startId: "2025-03-20",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-24",
    startId: "2025-03-24",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-26",
    startId: "2025-03-26",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-28",
    startId: "2025-03-28",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-30",
    startId: "2025-03-30",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-31",
    startId: "2025-03-31",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-01",
    startId: "2025-04-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-02",
    startId: "2025-04-02",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-03",
    startId: "2025-04-03",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-04",
    startId: "2025-04-04",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-05",
    startId: "2025-04-05",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-07",
    startId: "2025-04-07",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-08",
    startId: "2025-04-08",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-09",
    startId: "2025-04-09",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-10",
    startId: "2025-04-10",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-17",
    startId: "2025-04-17",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-18",
    startId: "2025-04-18",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-24",
    startId: "2025-04-24",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-27",
    startId: "2025-04-27",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-04-28",
    startId: "2025-04-28",
    textColor: "rgb(81,86,97)",
  },

  // Selected periods for 2025 - max 60 days total
  {
    color: getRandomColor(),
    endId: "2025-01-15",
    startId: "2025-01-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-03-07",
    startId: "2025-03-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-05-14",
    startId: "2025-05-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-07-07",
    startId: "2025-07-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-09-14",
    startId: "2025-09-01",
    textColor: "rgb(81,86,97)",
  },
  {
    color: getRandomColor(),
    endId: "2025-11-07",
    startId: "2025-11-01",
    textColor: "rgb(81,86,97)",
  },
];
