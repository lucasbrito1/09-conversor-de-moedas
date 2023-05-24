import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const series: ApexOptions["series"] = [
  {
    name: "Cotação",
    data: [
      [1646265600000, 5.032398],
      [1646352000000, 5.062816],
      [1646438400000, 5.056623],
      [1646524800000, 5.064146],
      [1646611200000, 5.112015],
      [1646697600000, 5.060398],
      [1646784000000, 5.013197],
      [1646870400000, 5.011202],
      [1646956800000, 5.075041],
      [1647043200000, 5.075041],
      [1647129600000, 5.074995],
      [1647216000000, 5.123101],
      [1647302400000, 5.164706],
      [1647388800000, 5.078698],
      [1647475200000, 5.040901],
      [1647561600000, 5.02375],
      [1647648000000, 5.02375],
    ],
  },
];

const options: ApexOptions = {
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  yaxis: {
    tickAmount: 5,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace(".", ",");
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
  colors: ["#7C3AED"],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      /* eslint-disable indent */
      return `
        <div class="tooltip">
          <span>
            ${Number(series[seriesIndex][dataPointIndex])
              .toFixed(2)
              .replace(".", ",")}
          </span>
          <span>
            ${new Date(
              w.globals.seriesX[seriesIndex][dataPointIndex]
            ).toLocaleDateString("pt-BR", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      `;
    },
  },
};

const Graph = () => {
  return (
    <>
      <p className="font-semibold text-xl">Taxa de câmbio</p>
      <div className="h-[300px]">
        <ReactApexChart
          options={options}
          series={series}
          width="100%"
          height="100%"
          type="area"
        />
      </div>
      <div className="md:flex md:gap-[68px]">
        <button className="rounded-full w-12 h-8 hover:text-white hover:bg-[#7C3AED]">
          1D
        </button>
        <button className="rounded-full w-12 h-8 hover:text-white hover:bg-[#7C3AED]">
          5D
        </button>
        <button className="bg-[#7C3AED] rounded-full w-12 h-8 text-white">
          1M
        </button>
        <button className="rounded-full w-12 h-8 hover:text-white hover:bg-[#7C3AED]">
          1A
        </button>
        <button className="rounded-full w-12 h-8 hover:text-white hover:bg-[#7C3AED]">
          5A
        </button>
        <button className="rounded-full w-12 h-8 hover:text-white hover:bg-[#7C3AED]">
          Máx
        </button>
      </div>
    </>
  );
};

export default Graph;
