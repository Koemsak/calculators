import { color } from "framer-motion";
import {
  CalendarRange,
  BookOpen,
  Settings,
  CircleHelp,
  LayoutDashboard,
  UserCog,
  School2,
  BadgeDollarSign,
  Coins,
  LandPlot,
  TrendingUpDown,
  Package,
  Zap,
  AudioLines,
  Fuel,
  Ruler,
  Weight,
  Cone,
  WindArrowDown,
  Rabbit,
  Thermometer,
  Hourglass,
  Volume2,
} from "lucide-react";

export const navItems = {
  user: {
    name: "Para Parag",
    email: "m@example.com",
    avatar: "../assets/para-pf.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Users",
      url: "/users",
      icon: UserCog,
      isActive: false,
    },
    {
      title: "Classes",
      url: "/classes",
      icon: School2,
      isActive: false,
    },
    {
      title: "Schedule",
      url: "/schedule",
      icon: CalendarRange,
      isActive: false,
    },
    {
      title: "Payments",
      url: "/payments",
      icon: BadgeDollarSign,
      isActive: false,
    },
    {
      title: "Attendance",
      url: "/attendance",
      icon: BookOpen,
    },
    {
      title: "Scores",
      url: "/scores",
      icon: Coins,
      isActive: false,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      isActive: false,
    },
    {
      title: "Help",
      url: "/help",
      icon: CircleHelp,
      isActive: false,
    },
  ],
};

export const tips = [
  {
    label: "5%",
    value: 5,
  },
  {
    label: "10%",
    value: 10,
  },
  {
    label: "15%",
    value: 15,
  },
  {
    label: "20%",
    value: 20,
  },
  {
    label: "25%",
    value: 25,
  },
  {
    label: "30%",
    value: 30,
  },
  {
    label: "35%",
    value: 35,
  },
  {
    label: "45%",
    value: 45,
  },
  {
    label: "50%",
    value: 50,
  },
];

export const terms = {
  months: {
    "Short-term": [
      { label: "1 months", value: 1 },
      { label: "3 months", value: 3 },
      { label: "6 months", value: 6 },
      { label: "9 months", value: 9 },
    ],
    "Medium-term": [
      { label: "12 months", value: 12 },
      { label: "18 months", value: 18 },
      { label: "24 months", value: 24 },
    ],
    "Long-term": [
      { label: "36 months", value: 36 },
      { label: "48 months", value: 48 },
      { label: "60 months", value: 60 },
    ],
  },
  years: {
    "Short-term": [
      { label: "1 year", value: 1 },
      { label: "2 years", value: 2 },
      { label: "3 years", value: 3 },
    ],
    "Medium-term": [
      { label: "4 years", value: 4 },
      { label: "5 years", value: 5 },
      { label: "6 years", value: 6 },
    ],
    "Long-term": [
      { label: "7 years", value: 7 },
      { label: "8 years", value: 8 },
      { label: "9 years", value: 9 },
      { label: "10 years", value: 10 },
      { label: "12 years", value: 12 },
      { label: "15 years", value: 15 },
      { label: "18 years", value: 18 },
      { label: "20 years", value: 20 },
      { label: "23 years", value: 23 },
      { label: "25 years", value: 25 },
      { label: "30 years", value: 30 },
    ],
  },
};

export const interestRates = {
  months: [
    {
      label: "0.25%",
      value: 0.25,
    },
    {
      label: "0.5%",
      value: 0.5,
    },
    {
      label: "0.75%",
      value: 0.75,
    },
    {
      label: "1%",
      value: 1,
    },
    {
      label: "1.25%",
      value: 1.25,
    },
    {
      label: "1.5%",
      value: 1.5,
    },
    {
      label: "1.75%",
      value: 1.75,
    },
    {
      label: "2%",
      value: 2,
    },
    {
      label: "2.25%",
      value: 2.25,
    },
    {
      label: "2.5%",
      value: 2.5,
    },
    {
      label: "2.75%",
      value: 2.75,
    },
    {
      label: "3%",
      value: 3,
    },
    {
      label: "3.5%",
      value: 3.5,
    },
    {
      label: "4%",
      value: 4,
    },
  ],
  years: [
    {
      label: "6%",
      value: 6,
    },
    {
      label: "9%",
      value: 9,
    },
    {
      label: "12%",
      value: 12,
    },
    {
      label: "15%",
      value: 15,
    },
    {
      label: "18%",
      value: 18,
    },
    {
      label: "21%",
      value: 21,
    },
    {
      label: "24%",
      value: 24,
    },
    {
      label: "27%",
      value: 27,
    },
    {
      label: "30%",
      value: 30,
    },
    {
      label: "33%",
      value: 33,
    },
    {
      label: "36%",
      value: 36,
    },
    {
      label: "42%",
      value: 42,
    },
    {
      label: "48%",
      value: 48,
    },
  ],
};

export const unitConvertors = [
  {
    label: "Area",
    value: "area",
    icon: LandPlot,
    color: "text-orange-500",
    subs: [
      { label: "Square Kilometre", value: "square-kilometre", scale: "km²" },
      { label: "Square Metre", value: "square-metre", scale: "m²" },
      { label: "Square Mile", value: "square-mile", scale: "mi²" },
      { label: "Square Yard", value: "square-yard", scale: "yd²" },
      { label: "Square Foot", value: "square-foot", scale: "ft²" },
      { label: "Square Inch", value: "square-inch", scale: "in²" },
      { label: "Hectare", value: "hectare", scale: "ha" },
      { label: "Acre", value: "acre", scale: "ac" },
    ],
  },
  {
    label: "Data Transfer Rate",
    value: "data-transfer-rate",
    icon: TrendingUpDown,
    color: "text-amber-500",
    subs: [
      { label: "Bit per Second", value: "bit-per-second", scale: "b/s" },
      {
        label: "Kilobit per Second",
        value: "kilobit-per-second",
        scale: "kb/s",
      },
      {
        label: "Kilobyte per Second",
        value: "kilobyte-per-second",
        scale: "kB/s",
      },
      {
        label: "Kibibit per Second",
        value: "kibibit-per-second",
        scale: "Kib/s",
      },
      {
        label: "Megabit per Second",
        value: "megabit-per-second",
        scale: "Mb/s",
      },
      {
        label: "Megabyte per Second",
        value: "megabyte-per-second",
        scale: "MB/s",
      },
      {
        label: "Mebibit per Second",
        value: "mebibit-per-second",
        scale: "Mib/s",
      },
      {
        label: "Gigabit per Second",
        value: "gigabit-per-second",
        scale: "Gb/s",
      },
      {
        label: "Gigabyte per Second",
        value: "gigabyte-per-second",
        scale: "GB/s",
      },
      {
        label: "Gibibit per Second",
        value: "gibibit-per-second",
        scale: "Gib/s",
      },
      {
        label: "Terabit per Second",
        value: "terabit-per-second",
        scale: "Tb/s",
      },
      {
        label: "Terabyte per Second",
        value: "terabyte-per-second",
        scale: "TB/s",
      },
      {
        label: "Tebibit per Second",
        value: "tebibit-per-second",
        scale: "Tib/s",
      },
    ],
  },
  {
    label: "Digital Storage",
    value: "digital-storage",
    icon: Package,
    color: "text-yellow-500",
    subs: [
      { label: "Bit", value: "bit", scale: "b" },
      { label: "Byte", value: "byte", scale: "B" },
      { label: "Kilobit", value: "kilobit", scale: "kb" },
      { label: "Kilobyte", value: "kilobyte", scale: "kB" },
      { label: "Kibibit", value: "kibibit", scale: "Kib" },
      { label: "Kibibyte", value: "kibibyte", scale: "KiB" },
      { label: "Megabit", value: "megabit", scale: "Mb" },
      { label: "Megabyte", value: "megabyte", scale: "MB" },
      { label: "Mebibit", value: "mebibit", scale: "Mib" },
      { label: "Mebibyte", value: "mebibyte", scale: "MiB" },
      { label: "Gigabit", value: "gigabit", scale: "Gb" },
      { label: "Gigabyte", value: "gigabyte", scale: "GB" },
      { label: "Gibibit", value: "gibibit", scale: "Gib" },
      { label: "Gibibyte", value: "gibibyte", scale: "GiB" },
      { label: "Terabit", value: "terabit", scale: "Tb" },
      { label: "Terabyte", value: "terabyte", scale: "TB" },
      { label: "Tebibit", value: "tebibit", scale: "Tib" },
      { label: "Tebibyte", value: "tebibyte", scale: "TiB" },
      { label: "Petabit", value: "petabit", scale: "Pb" },
      { label: "Petabyte", value: "petabyte", scale: "PB" },
      { label: "Pebibit", value: "pebibit", scale: "Pib" },
      { label: "Pebibyte", value: "pebibyte", scale: "PiB" },
    ],
  },
  {
    label: "Energy",
    value: "energy",
    icon: Zap,
    color: "text-lime-500",
    subs: [
      { label: "Joule", value: "joule", scale: "J" },
      { label: "Kilojoule", value: "kilojoule", scale: "kJ" },
      { label: "Gram calorie", value: "gram-calorie", scale: "cal" },
      { label: "Kilocalorie", value: "kilocalorie", scale: "kcal" },
      { label: "Watt hour", value: "watt-hour", scale: "Wh" },
      { label: "Kilowatt hour", value: "kilowatt-hour", scale: "kWh" },
      { label: "Megawatt hour", value: "megawatt-hour", scale: "MWh" },
      { label: "Electronvolt", value: "electronvolt", scale: "eV" },
      {
        label: "British thermal unit",
        value: "british-thermal-unit",
        scale: "BTU",
      },
      { label: "US therm", value: "us-therm", scale: "thm" },
      { label: "Foot-pound", value: "foot-pound", scale: "ft-lb" },
    ],
  },
  {
    label: "Frequency",
    value: "frequency",
    icon: AudioLines,
    color: "text-green-500",
    subs: [
      { label: "Hertz", value: "hertz", scale: "Hz" },
      { label: "Kilohertz", value: "kilohertz", scale: "kHz" },
      { label: "Megahertz", value: "megahertz", scale: "MHz" },
      { label: "Gigahertz", value: "gigahertz", scale: "GHz" },
    ],
  },
  {
    label: "Fuel Economy",
    value: "fuel-economy",
    icon: Fuel,
    color: "text-emerald-500",
    subs: [
      {
        label: "Kilometers per Liter",
        value: "kilometers-per-liter",
        scale: "km/L",
      },
      { label: "Miles per Gallon", value: "miles-per-gallon", scale: "mpg" },
      {
        label: "Kilometer per liter",
        value: "kilometer-per-liter",
        scale: "km/L",
      },
      {
        label: "Litre per 100 kilometres",
        value: "litre-per-100-kilometres",
        scale: "L/100 km",
      },
    ],
  },
  {
    label: "Length",
    value: "length",
    icon: Ruler,
    color: "text-teal-500",
    subs: [
      { label: "Kilometer", value: "kilometer", scale: "km" },
      { label: "Meter", value: "meter", scale: "m" },
      { label: "Centimeter", value: "centimeter", scale: "cm" },
      { label: "Millimeter", value: "millimeter", scale: "mm" },
      { label: "Micrometer", value: "micrometer", scale: "μm" },
      { label: "Nanometer", value: "nanometer", scale: "nm" },
      { label: "Mile", value: "mile", scale: "mi" },
      { label: "Yard", value: "yard", scale: "yd" },
      { label: "Foot", value: "foot", scale: "ft" },
      { label: "Inch", value: "inch", scale: "in" },
      { label: "Nautical Mile", value: "nautical-mile", scale: "nmi" },
    ],
  },
  {
    label: "Mass",
    value: "mass",
    icon: Weight,
    color: "text-cyan-500",
    subs: [
      { label: "Tonne", value: "tonne", scale: "t" },
      { label: "Kilogram", value: "kilogram", scale: "kg" },
      { label: "Gram", value: "gram", scale: "g" },
      { label: "Milligram", value: "milligram", scale: "mg" },
      { label: "Imperial Ton", value: "imperial-ton", scale: "ton" },
      { label: "US Ton", value: "us-ton", scale: "ton" },
      { label: "Stone", value: "stone", scale: "st" },
      { label: "Pound", value: "pound", scale: "lb" },
      { label: "Ounce", value: "ounce", scale: "oz" },
    ],
  },
  {
    label: "Plane Angle",
    value: "plane-angle",
    icon: Cone,
    color: "text-sky-500",
    subs: [
      { label: "Arcsecond", value: "arcsecond", scale: "″" },
      { label: "Degree", value: "degree", scale: "°" },
      { label: "Gradian", value: "gradian", scale: "grad" },
      { label: "Miligradian", value: "miligradian", scale: "mgrad" },
      { label: "Minute of arc", value: "minute-of-arc", scale: "′" },
      { label: "Radian", value: "radian", scale: "rad" },
    ],
  },
  {
    label: "Pressure",
    value: "pressure",
    icon: WindArrowDown,
    color: "text-blue-500",
    subs: [
      { label: "Bar", value: "bar", scale: "bar" },
      { label: "Pascal", value: "pascal", scale: "Pa" },
      {
        label: "Pound per square inch",
        value: "pound-per-square-inch",
        scale: "psi",
      },
      {
        label: "Standard atmosphere",
        value: "standard-atmosphere",
        scale: "atm",
      },
      { label: "Torr", value: "torr", scale: "Torr" },
    ],
  },
  {
    label: "Speed",
    value: "speed",
    icon: Rabbit,
    color: "text-indigo-500",
    subs: [
      { label: "Mile per hour", value: "mile-per-hour", scale: "mph" },
      { label: "Foot per second", value: "foot-per-second", scale: "ft/s" },
      { label: "Meter per second", value: "meter-per-second", scale: "m/s" },
      {
        label: "Kilometer per hour",
        value: "kilometer-per-hour",
        scale: "km/h",
      },
      { label: "Knot", value: "knot", scale: "kn" },
    ],
  },
  {
    label: "Temperature",
    value: "temperature",
    icon: Thermometer,
    color: "text-violet-500",
    subs: [
      { label: "Degree Celsius", value: "degree-celsius", scale: "°C" },
      { label: "Fahrenheit", value: "fahrenheit", scale: "°F" },
      { label: "Kelvin", value: "kelvin", scale: "K" },
    ],
  },
  {
    label: "Time",
    value: "time",
    icon: Hourglass,
    color: "text-purple-500",
    subs: [
      { label: "Nanosecond", value: "nanosecond", scale: "ns" },
      { label: "Microsecond", value: "microsecond", scale: "μs" },
      { label: "Millisecond", value: "millisecond", scale: "ms" },
      { label: "Second", value: "second", scale: "s" },
      { label: "Minute", value: "minute", scale: "min" },
      { label: "Hour", value: "hour", scale: "h" },
      { label: "Day", value: "day", scale: "d" },
      { label: "Week", value: "week", scale: "wk" },
      { label: "Month", value: "month", scale: "mo" },
      { label: "Calendar year", value: "calendar-year", scale: "yr" },
      { label: "Decade", value: "decade", scale: "dec" },
      { label: "Century", value: "century", scale: "c" },
    ],
  },
  {
    label: "Volume",
    value: "volume",
    icon: Volume2,
    color: "text-fuchsia-500",
    subs: [
      {
        label: "US liquid gallon",
        value: "us-liquid-gallon",
        scale: "gal (US)",
      },
      { label: "US liquid quart", value: "us-liquid-quart", scale: "qt (US)" },
      { label: "US liquid pint", value: "us-liquid-pint", scale: "pt (US)" },
      { label: "US legal cup", value: "us-legal-cup", scale: "cup (US)" },
      { label: "US fluid ounce", value: "us-fluid-ounce", scale: "fl oz (US)" },
      { label: "US tablespoon", value: "us-tablespoon", scale: "tbsp (US)" },
      { label: "US teaspoon", value: "us-teaspoon", scale: "tsp (US)" },
      { label: "Cubic Meter", value: "cubic-meter", scale: "m³" },
      { label: "Liter", value: "liter", scale: "L" },
      { label: "Milliliter", value: "milliliter", scale: "mL" },
      {
        label: "Imperial gallon",
        value: "imperial-gallon",
        scale: "gal (imp)",
      },
      { label: "Imperial quart", value: "imperial-quart", scale: "qt (imp)" },
      { label: "Imperial pint", value: "imperial-pint", scale: "pt (imp)" },
      { label: "Imperial cup", value: "imperial-cup", scale: "cup (imp)" },
      {
        label: "Imperial fluid ounce",
        value: "imperial-fluid-ounce",
        scale: "fl oz (imp)",
      },
      {
        label: "Imperial tablespoon",
        value: "imperial-tablespoon",
        scale: "tbsp (imp)",
      },
      {
        label: "Imperial teaspoon",
        value: "imperial-teaspoon",
        scale: "tsp (imp)",
      },
      { label: "Cubic Foot", value: "cubic-foot", scale: "ft³" },
      { label: "Cubic Inch", value: "cubic-inch", scale: "in³" },
    ],
  },
];
