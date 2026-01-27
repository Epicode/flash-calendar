import React, { useMemo, useState } from "react";

import { Calendar } from "../../src";
import { useDateRange } from "../../src/hooks/useDateRange";
import { View } from "react-native";

export const BasicCalendarList = ({
  calendarActiveDateRanges,
  onCalendarDayPress,
  dateRange,
}) => {
  const filteredRestrictions = useMemo(() => {
    return filterRestrictions(restrictions, dateRange);
  }, [dateRange]);

  return (
    <View style={{ flex: 1 }}>
      <Calendar.List
        calendarActiveDateRanges={calendarActiveDateRanges}
        calendarPreActiveDateRanges={preActiveDateRanges}
        onCalendarDayPress={onCalendarDayPress}
        showSixWeeks
        calendarMaxDateId="2026-12-31"
        calendarMinDateId="2026-01-15"
        calendarMaxSelectedDateId="2026-08-31"
        calendarMinSelectedDateId="2026-01-27"
      />
    </View>
  );
};

const restrictions = [
  { startId: undefined, endId: "2025-09-03" },
  { startId: "2025-09-05", endId: "2025-09-25" },
];

export const filterRestrictions = (
  restrictions: { startId?: string; endId?: string }[] | null | undefined,
  selectedRange: { startId?: string; endId?: string },
) => {
  const startSelectedRangeId = selectedRange.startId;
  if (!startSelectedRangeId) {
    return restrictions;
  }
  const filteredRestrictions = restrictions?.filter((restriction) => {
    // jezeli nie ma startId to sprawdzaj czy endId jest mniejszy od startSelectedRangeId

    if (
      !restriction.startId &&
      restriction.endId &&
      startSelectedRangeId <= restriction.endId
    ) {
      return restriction;
    }

    // jezeli nie ma endId to sprawdzaj czy startId jest wiekszy od startSelectedRangeId

    if (
      !restriction.endId &&
      restriction.startId &&
      startSelectedRangeId >= restriction.startId
    ) {
      return restriction;
    }

    // jezeli jest jedno i drugie to sprawdzaj czy jest w przedziale

    if (
      restriction.startId &&
      restriction.endId &&
      startSelectedRangeId >= restriction.startId &&
      startSelectedRangeId <= restriction.endId
    ) {
      return restriction;
    }

    return null;
  });

  return filteredRestrictions;
};

const preActiveDateRanges = [
  {
    color: "#33FEAE",
    endId: "2024-07-18",
    startId: "2024-07-17",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2024-07-25",
    startId: "2024-07-24",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2024-08-19",
    startId: "2024-08-15",
    textColor: undefined,
  },
  {
    color: "#fec74b",
    endId: "2024-08-21",
    startId: "2024-08-20",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2024-09-19",
    startId: "2024-09-04",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2024-09-20",
    startId: "2024-09-18",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2024-10-17",
    startId: "2024-10-17",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2024-10-18",
    startId: "2024-10-18",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2024-11-15",
    startId: "2024-10-28",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2024-12-31",
    startId: "2024-12-23",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-01-01",
    startId: "2025-01-01",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-01-15",
    startId: "2025-01-15",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-01-22",
    startId: "2025-01-22",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-02-19",
    startId: "2025-02-19",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-02-20",
    startId: "2025-02-20",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-03-06",
    startId: "2025-03-04",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-03-07",
    startId: "2025-03-05",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-03-24",
    startId: "2025-03-24",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-03-27",
    startId: "2025-03-26",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-04-06",
    startId: "2025-04-01",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-04-10",
    startId: "2025-04-07",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-04-11",
    startId: "2025-04-11",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-04-17",
    startId: "2025-04-16",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-04-18",
    startId: "2025-04-18",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-04-25",
    startId: "2025-04-21",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-04-30",
    startId: "2025-04-29",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-05-02",
    startId: "2025-05-01",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-05-08",
    startId: "2025-05-07",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-05-08",
    startId: "2025-05-07",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-05-15",
    startId: "2025-05-15",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-05-20",
    startId: "2025-05-19",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-05-27",
    startId: "2025-05-27",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-05-29",
    startId: "2025-05-29",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-06-02",
    startId: "2025-06-02",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-06-06",
    startId: "2025-06-05",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-06-13",
    startId: "2025-06-12",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-06-17",
    startId: "2025-06-17",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-06-27",
    startId: "2025-06-25",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-07-04",
    startId: "2025-07-02",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-07-08",
    startId: "2025-07-07",
    textColor: undefined,
  },
  {
    color: "#9C27B0",
    endId: "2025-07-09",
    startId: "2025-07-09",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-07-10",
    startId: "2025-07-10",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-07-14",
    startId: "2025-07-14",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-07-14",
    startId: "2025-07-14",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-07-14",
    startId: "2025-07-14",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-07-15",
    startId: "2025-07-15",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-07-19",
    startId: "2025-07-17",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-07-23",
    startId: "2025-07-23",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-07-26",
    startId: "2025-07-24",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-07-29",
    startId: "2025-07-29",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-08-03",
    startId: "2025-08-01",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-08-05",
    startId: "2025-08-05",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-08-06",
    startId: "2025-08-06",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-08-09",
    startId: "2025-08-07",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-08-15",
    startId: "2025-08-13",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-08-18",
    startId: "2025-08-18",
    textColor: undefined,
  },
  {
    color: "#cbcbcb",
    endId: "2025-08-20",
    startId: "2025-08-20",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-08-23",
    startId: "2025-08-21",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-08-29",
    startId: "2025-08-26",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-09-05",
    startId: "2025-09-04",
    textColor: undefined,
  },
  {
    color: "#33FEAE",
    endId: "2025-09-11",
    startId: "2025-09-10",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2025-09-17",
    startId: "2025-09-17",
    textColor: undefined,
  },
  {
    color: "#CDDC39",
    endId: "2025-09-18",
    startId: "2025-09-18",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2026-01-13",
    startId: "2026-01-12",
    textColor: undefined,
  },
  {
    color: "#feae8b",
    endId: "2026-02-13",
    startId: "2026-02-12",
    textColor: undefined,
  },
];
