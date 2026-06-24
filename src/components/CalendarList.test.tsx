// @ts-nocheck

import React, { useImperativeHandle } from "react";
import { act, create } from "react-test-renderer";
import { describe, expect, it, mock } from "bun:test";

const NativeComponent = ({ children }) => {
  return React.createElement("View", null, children);
};

mock.module("react-native", () => ({
  Pressable: ({ children }) =>
    React.createElement(
      "Pressable",
      null,
      typeof children === "function" ? children({ pressed: false }) : children,
    ),
  StyleSheet: {
    create: (styles) => styles,
    flatten: (styles) => styles,
  },
  Text: NativeComponent,
  useColorScheme: () => "light",
  View: NativeComponent,
}));

mock.module("@shopify/flash-list", () => ({
  FlashList: React.forwardRef(() => null),
}));

const { CalendarList } = await import("../components/CalendarList");

const CalendarItemComponent = React.memo(() => null);

const getMonthIds = (props) => props.data.map((month) => month.id);

describe("CalendarList", () => {
  it("paginates in both directions and forwards start threshold props", () => {
    let scrollProps;
    let onEndReachedCalls = 0;
    let onStartReachedCalls = 0;

    const CalendarScrollComponent = React.forwardRef((props, ref) => {
      scrollProps = props;

      useImperativeHandle(ref, () => ({
        scrollToOffset: () => {},
      }));

      return null;
    });

    act(() => {
      create(
        <CalendarList
          CalendarItemComponent={CalendarItemComponent}
          CalendarScrollComponent={CalendarScrollComponent}
          calendarFutureScrollRangeInMonths={1}
          calendarInitialMonthId="2024-07-01"
          calendarPastScrollRangeInMonths={1}
          maintainVisibleContentPosition={{ autoscrollToTopThreshold: 0.1 }}
          onEndReached={() => {
            onEndReachedCalls++;
          }}
          onStartReached={() => {
            onStartReachedCalls++;
          }}
          onStartReachedThreshold={0.4}
        />,
      );
    });

    expect(getMonthIds(scrollProps)).toEqual([
      "2024-06-01",
      "2024-07-01",
      "2024-08-01",
    ]);
    expect(scrollProps.initialScrollIndex).toBe(1);
    expect(scrollProps.onStartReachedThreshold).toBe(0.4);
    expect(scrollProps.maintainVisibleContentPosition).toEqual({
      disabled: false,
      autoscrollToTopThreshold: 0.1,
    });

    act(() => {
      scrollProps.onEndReached();
    });

    expect(onEndReachedCalls).toBe(1);
    expect(getMonthIds(scrollProps)).toEqual([
      "2024-06-01",
      "2024-07-01",
      "2024-08-01",
      "2024-09-01",
    ]);

    act(() => {
      scrollProps.onStartReached();
    });

    expect(onStartReachedCalls).toBe(1);
    expect(getMonthIds(scrollProps)).toEqual([
      "2024-05-01",
      "2024-06-01",
      "2024-07-01",
      "2024-08-01",
      "2024-09-01",
    ]);
  });

  it("lets consumers disable maintainVisibleContentPosition explicitly", () => {
    let scrollProps;

    const CalendarScrollComponent = React.forwardRef((props, ref) => {
      scrollProps = props;

      useImperativeHandle(ref, () => ({
        scrollToOffset: () => {},
      }));

      return null;
    });

    act(() => {
      create(
        <CalendarList
          CalendarItemComponent={CalendarItemComponent}
          CalendarScrollComponent={CalendarScrollComponent}
          maintainVisibleContentPosition={{ disabled: true }}
        />,
      );
    });

    expect(scrollProps.maintainVisibleContentPosition).toEqual({
      disabled: true,
    });
  });
});
