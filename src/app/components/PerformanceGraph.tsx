"use client";

import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";


// Define the data type
interface DataItem {
  date: number; // timestamp in milliseconds (for DateAxis)
  value: number; // Value for the column or line chart
  close?: number; // For Candlestick chart: Close value
  open?: number; // For Candlestick chart: Open value
  low?: number; // For Candlestick chart: Low value
  high?: number; // For Candlestick chart: High value
}

interface PerformanceGraphProps {
  data: DataItem[]; // Array of data items
}

const PerformanceGraph: React.FC<PerformanceGraphProps> = ({ data }) => {

 useEffect(() => {
    // Root element
    // Root element
const root = am5.Root.new("chartdiv");
if (root._logo) {
  root._logo.dispose(); // Only call dispose if _logo exists
}
root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);
root.interfaceColors.set("grid", am5.color("#FFFFFF"));


    // Chart setup
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Date axis
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0,
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minorLabelsEnabled: true,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      fill: root.interfaceColors.get("alternativeText"),
      paddingTop: 10,
    });

    // Value axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      fill: root.interfaceColors.get("alternativeText"),
      paddingRight: 20,
    });

    // Column series
    const columnSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Column Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }),
      })
    );

    columnSeries.columns.template.setAll({
      width: am5.percent(50),
      fill: am5.color("#58A3FB"),
    });
    
    columnSeries.data.setAll(data);  // Ensure data is passed here

    // Area series
    const areaSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Area Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }),
      })
    );

    // Set area series appearance
    areaSeries.strokes.template.setAll({
      strokeWidth: 2,
    });
    
    areaSeries.fills.template.setAll({
      fill: am5.color("#58A3FB"),
      fillOpacity: 0.5,
      visible: true,
    });

    areaSeries.data.setAll(data);  // Ensure data is passed here

    // Candlestick series
    const candlestickSeries = chart.series.push(
      am5xy.CandlestickSeries.new(root, {
        name: "Candlestick Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "close",
        openValueYField: "open",
        lowValueYField: "low",
        highValueYField: "high",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText:
            "Open: {openValueY}\nHigh: {highValueY}\nLow: {lowValueY}\nClose: {valueY}",
        }),
      })
    );

    candlestickSeries.columns.template.states.create("riseFromOpen", {
      fill: am5.color("#58A3FB"),
      stroke: am5.color("#58A3FB"),
    });

    candlestickSeries.columns.template.states.create("dropFromOpen", {
      fill: am5.color("#09FF21"),
      stroke: am5.color("#09FF21"),
    });

    candlestickSeries.data.setAll(data);  // Ensure data is passed here

    // Add scrollbar
    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, { orientation: "horizontal", marginBottom: 80 })
    );

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, { behavior: "none" }));

    // Make series appear
    chart.appear(1000, 100);

    // Cleanup function
    return () => {
      root.dispose();
    };
  }, [data]); // Run the effect when data changes

  return <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>;
};

export default PerformanceGraph;
