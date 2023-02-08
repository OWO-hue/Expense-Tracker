import ChartBars from "./ChartBars";
import "./Charts.css";

const Charts = (props) => {
  const maxArray = props.chartdatas.map((expense) => expense.value);
  const totalMax = Math.max(...maxArray);

  return (
    <div className="chart">
      {props.chartdatas.map((chartdata) => (
        <ChartBars
          key={chartdata.label}
          value={chartdata.value}
          maxValue={totalMax}
          label={chartdata.label}
        />
      ))}
    </div>
  );
};

export default Charts;
