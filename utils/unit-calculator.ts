type AreaUnit =
  | "square-kilometre"
  | "square-metre"
  | "square-mile"
  | "square-yard"
  | "square-foot"
  | "square-inch"
  | "hectare"
  | "acre";

const areaCalculator = (
  unit_one: AreaUnit,
  unit_two: AreaUnit,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToM2: Record<AreaUnit, number> = {
    "square-kilometre": 1000000, // 1 km² = 1,000,000 m²
    "square-metre": 1, // 1 m² = 1 m²
    "square-mile": 2589988.1103, // 1 mi² = 2,589,988.1103 m²
    "square-yard": 0.836127, // 1 yd² = 0.836127 m²
    "square-foot": 0.092903, // 1 ft² = 0.092903 m²
    "square-inch": 0.00064516, // 1 in² = 0.00064516 m²
    hectare: 10000, // 1 ha = 10,000 m²
    acre: 4046.86, // 1 ac = 4,046.86 m²
  };

  const unitSymbols: Record<AreaUnit, string> = {
    "square-kilometre": "km²",
    "square-metre": "m²",
    "square-mile": "mi²",
    "square-yard": "yd²",
    "square-foot": "ft²",
    "square-inch": "in²",
    hectare: "ha",
    acre: "ac",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToM2) || !(unit_two in conversionsToM2)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const m2Value = unit_value * conversionsToM2[unit_one];
  const result = m2Value / conversionsToM2[unit_two];
  const factor = formatNumber(conversionsToM2[unit_one] / conversionsToM2[unit_two]);
  const explanation = `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Area is converted via square metres as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`;
  const formula = `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`;

  return { result, explanation, formula };
};

type DataTransferUnit =
  | "bit-per-second"
  | "kilobit-per-second"
  | "kilobyte-per-second"
  | "kibibit-per-second"
  | "megabit-per-second"
  | "megabyte-per-second"
  | "mebibit-per-second"
  | "gigabit-per-second"
  | "gigabyte-per-second"
  | "tebibit-per-second"
  | "terabit-per-second"
  | "terabyte-per-second";
const dataTransferCalculator = (
  unit_one: DataTransferUnit,
  unit_two: DataTransferUnit,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToBps: Record<DataTransferUnit, number> = {
    "bit-per-second": 1, // 1 bit/s = 1 bps
    "kilobit-per-second": 1000, // 1 kb/s = 1000 bps (10³ bits)
    "kilobyte-per-second": 8000, // 1 kB/s = 1000 bytes × 8 = 8000 bps
    "kibibit-per-second": 1024, // 1 Kib/s = 1024 bps (2¹⁰ bits)
    "megabit-per-second": 1000000, // 1 Mb/s = 1,000,000 bps (10⁶ bits)
    "megabyte-per-second": 8000000, // 1 MB/s = 1,000,000 bytes × 8 = 8,000,000 bps
    "mebibit-per-second": 1048576, // 1 Meb/s = 1,048,576 bps (2²⁰ bits)
    "gigabit-per-second": 1000000000, // 1 Gb/s = 1,000,000,000 bps (10⁹ bits)
    "gigabyte-per-second": 8000000000, // 1 GB/s = 1,000,000,000 bytes × 8 = 8,000,000,000 bps
    "tebibit-per-second": 1099511627776, // 1 Teb/s = 1,099,511,627,776 bps (2⁴⁰ bits)
    "terabit-per-second": 1000000000000, // 1 Tb/s = 1,000,000,000,000 bps (10¹² bits)
    "terabyte-per-second": 8000000000000, // 1 TB/s = 1,000,000,000,000 bytes × 8 = 8,000,000,000,000 bps
  };

  const unitSymbols: Record<DataTransferUnit, string> = {
    "bit-per-second": "bit/s",
    "kilobit-per-second": "kb/s",
    "kilobyte-per-second": "kB/s",
    "kibibit-per-second": "Kib/s",
    "megabit-per-second": "Mb/s",
    "megabyte-per-second": "MB/s",
    "mebibit-per-second": "Meb/s",
    "gigabit-per-second": "Gb/s",
    "gigabyte-per-second": "GB/s",
    "tebibit-per-second": "Teb/s",
    "terabit-per-second": "Tb/s",
    "terabyte-per-second": "TB/s",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToBps) || !(unit_two in conversionsToBps)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const bpsValue = unit_value * conversionsToBps[unit_one];
  const result = bpsValue / conversionsToBps[unit_two];
  const factor = formatNumber(conversionsToBps[unit_one] / conversionsToBps[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Data is converted via bits per second as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type DigitalStorageUnit =
  | "bit"
  | "byte"
  | "kilobit"
  | "kilobyte"
  | "kibibit"
  | "kibibyte"
  | "megabit"
  | "megabyte"
  | "mebibit"
  | "mebibyte"
  | "gigabit"
  | "gigabyte"
  | "tebibit"
  | "tebibyte"
  | "terabit"
  | "terabyte"
  | "petabit"
  | "petabyte"
  | "pebibit"
  | "pebibyte";
const digitalStorageCalculator = (
  unit_one: DigitalStorageUnit,
  unit_two: DigitalStorageUnit,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToBytes: Record<DigitalStorageUnit, number> = {
    bit: 0.125, // 1 bit = 1/8 byte (0.125 bytes)
    byte: 1, // 1 byte = 1 byte
    kilobit: 125, // 1 kb = 1000 bits = 1000 / 8 = 125 bytes
    kilobyte: 1000, // 1 kB = 1000 bytes
    kibibit: 128, // 1 Kib = 1024 bits = 1024 / 8 = 128 bytes
    kibibyte: 1024, // 1 KiB = 1024 bytes
    megabit: 125000, // 1 Mb = 1,000,000 bits = 1,000,000 / 8 = 125,000 bytes
    megabyte: 1000000, // 1 MB = 1,000,000 bytes
    mebibit: 131072, // 1 Mib = 1,048,576 bits = 1,048,576 / 8 = 131,072 bytes
    mebibyte: 1048576, // 1 MiB = 1,048,576 bytes
    gigabit: 125000000, // 1 Gb = 1,000,000,000 bits = 1,000,000,000 / 8 = 125,000,000 bytes
    gigabyte: 1000000000, // 1 GB = 1,000,000,000 bytes
    tebibit: 137438953472, // 1 Tib = 1,099,511,627,776 bits = 1,099,511,627,776 / 8 = 137,438,953,472 bytes
    tebibyte: 1099511627776, // 1 TiB = 1,099,511,627,776 bytes
    terabit: 125000000000, // 1 Tb = 1,000,000,000,000 bits = 1,000,000,000,000 / 8 = 125,000,000,000 bytes
    terabyte: 1000000000000, // 1 TB = 1,000,000,000,000 bytes
    petabit: 125000000000000, // 1 Pb = 1,000,000,000,000,000 bits = 1,000,000,000,000,000 / 8 = 125,000,000,000,000 bytes
    petabyte: 1000000000000000, // 1 PB = 1,000,000,000,000,000 bytes
    pebibit: 140737488355328, // 1 Pib = 1,125,899,906,842,624 bits = 1,125,899,906,842,624 / 8 = 140,737,488,355,328 bytes
    pebibyte: 1125899906842624, // 1 PiB = 1,125,899,906,842,624 bytes
  };

  const unitSymbols: Record<DigitalStorageUnit, string> = {
    bit: "bit",
    byte: "byte",
    kilobit: "kb",
    kilobyte: "kB",
    kibibit: "Kib",
    kibibyte: "KiB",
    megabit: "Mb",
    megabyte: "MB",
    mebibit: "Mib",
    mebibyte: "MiB",
    gigabit: "Gb",
    gigabyte: "GB",
    tebibit: "Tib",
    tebibyte: "TiB",
    terabit: "Tb",
    terabyte: "TB",
    petabit: "Pb",
    petabyte: "PB",
    pebibit: "Pib",
    pebibyte: "PiB",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToBytes) || !(unit_two in conversionsToBytes)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const bytesValue = unit_value * conversionsToBytes[unit_one];
  const result = bytesValue / conversionsToBytes[unit_two];
  const factor = formatNumber(conversionsToBytes[unit_one] / conversionsToBytes[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Data is converted via bytes as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type EnergyUnit =
  | "joule"
  | "kilojoule"
  | "gram-calorie"
  | "kilocalorie"
  | "watt-hour"
  | "kilowatt-hour"
  | "megawatt-hour"
  | "electronvolt"
  | "british-thermal-unit"
  | "us-therm"
  | "foot-pound";

const energyCalculator = (
  unit_one: EnergyUnit,
  unit_two: EnergyUnit,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToJoules: Record<EnergyUnit, number> = {
    joule: 1, // 1 J = 1 J
    kilojoule: 1000, // 1 kJ = 1000 J
    "gram-calorie": 4.184, // 1 cal = 4.184 J
    kilocalorie: 4184, // 1 kcal = 1000 cal = 4184 J
    "watt-hour": 3600, // 1 Wh = 3600 J (1 W × 3600 s)
    "kilowatt-hour": 3600000, // 1 kWh = 1000 Wh = 3,600,000 J
    "megawatt-hour": 3600000000, // 1 MWh = 1000 kWh = 3,600,000,000 J
    electronvolt: 1.602176634e-19, // 1 eV = 1.602176634 × 10⁻¹⁹ J
    "british-thermal-unit": 1055.056, // 1 BTU ≈ 1055.056 J
    "us-therm": 105505600, // 1 thm = 100,000 BTU ≈ 105,505,600 J
    "foot-pound": 1.355818, // 1 ft-lb ≈ 1.355818 J
  };
  const unitSymbols: Record<EnergyUnit, string> = {
    joule: "J",
    kilojoule: "kJ",
    "gram-calorie": "cal",
    kilocalorie: "kcal",
    "watt-hour": "Wh",
    "kilowatt-hour": "kWh",
    "megawatt-hour": "MWh",
    electronvolt: "eV",
    "british-thermal-unit": "BTU",
    "us-therm": "thm",
    "foot-pound": "ft-lb",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (
    !(unit_one in conversionsToJoules) ||
    !(unit_two in conversionsToJoules)
  ) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const joulesValue = unit_value * conversionsToJoules[unit_one];
  const result = joulesValue / conversionsToJoules[unit_two];
  const factor = formatNumber(conversionsToJoules[unit_one] / conversionsToJoules[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Energy is converted via joules as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type FrequencyUnit = "hertz" | "kilohertz" | "megahertz" | "gigahertz";

const frequencyCalculator = (
  unit_one: FrequencyUnit,
  unit_two: FrequencyUnit,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToHz: Record<FrequencyUnit, number> = {
    hertz: 1, // 1 Hz = 1 Hz
    kilohertz: 1000, // 1 kHz = 1000 Hz (10³)
    megahertz: 1000000, // 1 MHz = 1,000,000 Hz (10⁶)
    gigahertz: 1000000000, // 1 GHz = 1,000,000,000 Hz (10⁹)
  };

  const unitSymbols: Record<FrequencyUnit, string> = {
    hertz: "Hz",
    kilohertz: "kHz",
    megahertz: "MHz",
    gigahertz: "GHz",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToHz) || !(unit_two in conversionsToHz)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const hertzValue = unit_value * conversionsToHz[unit_one];
  const result = hertzValue / conversionsToHz[unit_two];
  const factor = formatNumber(conversionsToHz[unit_one] / conversionsToHz[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Frequency is converted via hertz as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type FuelEconomy =
  | "kilometers-per-liter"
  | "miles-per-gallon"
  | "liters-per-100-kilometres";

const fuelEconomyCalculator = (
  unit_one: FuelEconomy,
  unit_two: FuelEconomy,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToKmL: Record<FuelEconomy, number> = {
    "kilometers-per-liter": 1, // 1 km/L = 1 km/L
    "miles-per-gallon": 0.425143707, // 1 mpg ≈ 0.425143707 km/L
    "liters-per-100-kilometres": -1, // Special case (see explanation)
  };

  const unitSymbols: Record<FuelEconomy, string> = {
    "kilometers-per-liter": "km/L",
    "miles-per-gallon": "mpg",
    "liters-per-100-kilometres": "L/100 km",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToKmL) || !(unit_two in conversionsToKmL)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const kmLValue =
    unit_one === "liters-per-100-kilometres"
      ? 100 / unit_value
      : unit_value * conversionsToKmL[unit_one];
  const result =
    unit_two === "liters-per-100-kilometres"
      ? 100 / kmLValue
      : kmLValue / conversionsToKmL[unit_two];
  const factor = formatNumber(conversionsToKmL[unit_one] / conversionsToKmL[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Fuel Economy is converted via km/L as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type Length =
  | "kilometer"
  | "meter"
  | "centimeter"
  | "millimeter"
  | "micrometer"
  | "nanometer"
  | "mile"
  | "yard"
  | "foot"
  | "inch"
  | "nautical-mile";

const lengthCalculator = (
  unit_one: Length,
  unit_two: Length,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToKm: Record<Length, number> = {
    kilometer: 1, // 1 km = 1 km
    meter: 0.001, // 1 m = 0.001 km
    centimeter: 0.00001, // 1 cm = 0.00001 km
    millimeter: 0.000001, // 1 mm = 0.000001 km
    micrometer: 0.000000001,
    nanometer: 0.000000000001,
    mile: 1.60934, // 1 mi = 1.60934 km
    yard: 0.0009144, // 1 yd = 0.0009144 km
    foot: 0.0003048, // 1 ft = 0.0003048 km
    inch: 0.0000254, // 1 in = 0.0000254 km
    "nautical-mile": 1.852, // 1 nmi = 1.852 km
  };

  const unitSymbols: Record<Length, string> = {
    kilometer: "km",
    meter: "m",
    centimeter: "cm",
    millimeter: "mm",
    micrometer: "μm",
    nanometer: "nm",
    mile: "mi",
    yard: "yd",
    foot: "ft",
    inch: "in",
    "nautical-mile": "nmi",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToKm) || !(unit_two in conversionsToKm)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const kmValue = unit_value * conversionsToKm[unit_one];
  const result = kmValue / conversionsToKm[unit_two];
  const factor = formatNumber(conversionsToKm[unit_one] / conversionsToKm[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Length is converted via km as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type Mass =
  | "tonne"
  | "kilogram"
  | "gram"
  | "milligram"
  | "imperial-ton"
  | "us-ton"
  | "stone"
  | "pound"
  | "ounce";

const massCalculator = (
  unit_one: Mass,
  unit_two: Mass,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToKg: Record<Mass, number> = {
    tonne: 1000, // 1 tonne (metric) = 1000 kg
    kilogram: 1, // 1 kg = 1 kg
    gram: 0.001, // 1 g = 0.001 kg
    milligram: 0.000001, // 1 mg = 0.000001 kg
    "imperial-ton": 1016.0469088, // 1 imperial ton = 2240 lb × 0.45359237 kg/lb
    "us-ton": 907.18474, // 1 US ton = 2000 lb × 0.45359237 kg/lb
    stone: 6.35029318, // 1 stone = 14 lb × 0.45359237 kg/lb
    pound: 0.45359237, // 1 lb = 0.45359237 kg
    ounce: 0.028349523125, // 1 oz = 0.028349523125 kg (1/16 lb)
  };

  const unitSymbols: Record<Mass, string> = {
    tonne: "t",
    kilogram: "kg",
    gram: "g",
    milligram: "mg",
    "imperial-ton": "ton",
    "us-ton": "ton",
    stone: "st",
    pound: "lb",
    ounce: "oz",
  };

  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToKg) || !(unit_two in conversionsToKg)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const kgValue = unit_value * conversionsToKg[unit_one];
  const result = kgValue / conversionsToKg[unit_two];
  const factor = formatNumber(conversionsToKg[unit_one] / conversionsToKg[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Mass is converted via kg as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type PlaneAngle =
  | "arcsecond"
  | "degree"
  | "gradian"
  | "miligradian"
  | "minute-of-arc"
  | "radian";

const planeAngle = (
  unit_one: PlaneAngle,
  unit_two: PlaneAngle,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToRadians: Record<PlaneAngle, number> = {
    arcsecond: Math.PI / 648000, // 1 arcsecond = π / 648,000 radians
    degree: Math.PI / 180, // 1 degree = π / 180 radians
    gradian: Math.PI / 200, // 1 gradian = π / 200 radians
    miligradian: Math.PI / 200000, // 1 milligradian = π / 200,000 radians
    "minute-of-arc": Math.PI / 10800, // 1 minute of arc = π / 10,800 radians
    radian: 1, // 1 radian = 1 radian
  };

  const unitSymbols: Record<PlaneAngle, string> = {
    arcsecond: "″",
    degree: "°",
    gradian: "grad",
    miligradian: "mgrad",
    "minute-of-arc": "′",
    radian: "rad",
  };

  if (
    !(unit_one in conversionsToRadians) ||
    !(unit_two in conversionsToRadians)
  ) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const radiansValue = unit_value * conversionsToRadians[unit_one];
  const result = radiansValue / conversionsToRadians[unit_two];
  const factor = formatNumber(conversionsToRadians[unit_one] / conversionsToRadians[unit_two]);
  const explanation = `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Angle is converted via radians as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`;
  const formula = `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`;

  return { result, explanation, formula };
};

type Pressure =
  | "bar"
  | "pascal"
  | "pound-per-square-inch"
  | "standard-atmosphere"
  | "torr";

const pressureCalculator = (
  unit_one: Pressure,
  unit_two: Pressure,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToPascal: Record<Pressure, number> = {
    bar: 100000, // 1 bar = 100,000 Pa
    pascal: 1, // 1 Pa = 1 Pa
    "pound-per-square-inch": 6894.75729, // 1 psi ≈ 6894.75729 Pa
    "standard-atmosphere": 101325, // 1 atm = 101,325 Pa
    torr: 133.322368421, // 1 torr ≈ 133.322368421 Pa
  };
  const unitSymbols: Record<Pressure, string> = {
    bar: "bar",
    pascal: "Pa",
    "pound-per-square-inch": "psi",
    "standard-atmosphere": "atm",
    torr: "torr",
  };
  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (
    !(unit_one in conversionsToPascal) ||
    !(unit_two in conversionsToPascal)
  ) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }
  const pascalValue = unit_value * conversionsToPascal[unit_one];
  const result = pascalValue / conversionsToPascal[unit_two];
  const factor = formatNumber(conversionsToPascal[unit_one] / conversionsToPascal[unit_two]);
  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Pressure is converted via pascal as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type Speed =
  | "miles-per-hour"
  | "foot-per-second"
  | "meters-per-second"
  | "kilometers-per-hour"
  | "knots";

const speedCalculator = (
  unit_one: Speed,
  unit_two: Speed,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToMps: Record<Speed, number> = {
    "miles-per-hour": 0.44704, // 1 mph = 0.44704 m/s
    "foot-per-second": 0.3048, // 1 ft/s = 0.3048 m/s
    "meters-per-second": 1, // 1 m/s = 1 m/s
    "kilometers-per-hour": 0.2777777777777778, // 1 km/h ≈ 0.2777777777777778 m/s
    knots: 0.5144444444444444, // 1 knot ≈ 0.5144444444444444 m/s
  };
  const unitSymbols: Record<Speed, string> = {
    "miles-per-hour": "mph",
    "foot-per-second": "ft/s",
    "meters-per-second": "m/s",
    "kilometers-per-hour": "km/h",
    knots: "kn",
  };
  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (!(unit_one in conversionsToMps) || !(unit_two in conversionsToMps)) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }

  const mpsValue = unit_value * conversionsToMps[unit_one];
  const result = mpsValue / conversionsToMps[unit_two];
  const factor = formatNumber(conversionsToMps[unit_one] / conversionsToMps[unit_two]);
  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Speed is converted via meters per second as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type Temperature = "degree-celsius" | "fahrenheit" | "kelvin";

const temperatureCalculator = (
  unit_one: Temperature,
  unit_two: Temperature,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const unitSymbols: Record<Temperature, string> = {
    "degree-celsius": "°C",
    fahrenheit: "°F",
    kelvin: "K",
  };
  const conversionsToCelsius: Record<Temperature, number> = {
    "degree-celsius": 1, // 1 °C = 1 °C (scale factor)
    fahrenheit: 0.5555555555555556, // 1 °F = 5/9 °C (scale factor only, offset needed)
    kelvin: 1, // 1 K = 1 °C (scale factor, offset needed)
  };
  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (
    !(unit_one in conversionsToCelsius) ||
    !(unit_two in conversionsToCelsius)
  ) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }
  const toCelsius = (unit: Temperature, value: number) => {
    switch (unit) {
      case "degree-celsius":
        return value;
      case "fahrenheit":
        return (value - 32) * (5 / 9);
      case "kelvin":
        return value - 273.15;
    }
  };
  const fromCelsius = (unit: Temperature, value: number) => {
    switch (unit) {
      case "degree-celsius":
        return value;
      case "fahrenheit":
        return value * (9 / 5) + 32;
      case "kelvin":
        return value + 273.15;
    }
  };
  const celsiusValue = toCelsius(unit_one, unit_value);
  const result = fromCelsius(unit_two, celsiusValue);
  const factor = formatNumber(conversionsToCelsius[unit_one] / conversionsToCelsius[unit_two]);
  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Temperature is converted via Celsius as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type TimeUnit =
  | "nanosecond"
  | "microsecond"
  | "millisecond"
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "calendar-year"
  | "decade"
  | "century";

const timeCalculator = (
  unit_one: TimeUnit,
  unit_two: TimeUnit,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToSeconds: Record<TimeUnit, number> = {
    nanosecond: 1e-9, // 1 ns = 10⁻⁹ s
    microsecond: 1e-6, // 1 μs = 10⁻⁶ s
    millisecond: 0.001, // 1 ms = 10⁻³ s
    second: 1, // 1 s = 1 s
    minute: 60, // 1 min = 60 s
    hour: 3600, // 1 h = 3600 s
    day: 86400, // 1 d = 86,400 s
    week: 604800, // 1 w = 604,800 s
    month: 2629746, // 1 mo ≈ 2,629,746 s (average month in a 365.2425-day year)
    "calendar-year": 31556952, // 1 yr ≈ 31,556,952 s (average Gregorian year)
    decade: 315569520, // 1 dec ≈ 315,569,520 s (10 × average year)
    century: 3155695200, // 1 cent ≈ 3,155,695,200 s (100 × average year)
  };
  const unitSymbols: Record<TimeUnit, string> = {
    nanosecond: "ns",
    microsecond: "μs",
    millisecond: "ms",
    second: "s",
    minute: "min",
    hour: "h",
    day: "d",
    week: "w",
    month: "mo",
    "calendar-year": "yr",
    decade: "dec",
    century: "cent",
  };
  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (
    !(unit_one in conversionsToSeconds) ||
    !(unit_two in conversionsToSeconds)
  ) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }
  const secondsValue = unit_value * conversionsToSeconds[unit_one];
  const result = secondsValue / conversionsToSeconds[unit_two];
  const factor = formatNumber(conversionsToSeconds[unit_one] / conversionsToSeconds[unit_two]);
  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Time is converted via seconds as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

type VolumneUnit =
  | "us-liquid-gallon"
  | "us-liquid-quart"
  | "us-liquid-pint"
  | "us-fluid-ounce"
  | "us-tablespoon"
  | "us-teaspoon"
  | "cubic-meter"
  | "liter"
  | "milliliter"
  | "imperial-liter"
  | "imperial-gallon"
  | "imperial-quart"
  | "imperial-pint"
  | "imperial-cup"
  | "imperial-fluid-ounce"
  | "imperial-tablespoon"
  | "imperial-teaspoon"
  | "cubic-foot"
  | "cubic-inch";

const volumeCalculator = (
  unit_one: VolumneUnit,
  unit_two: VolumneUnit,
  unit_value: number
): { result: number; explanation: string; formula: string } => {
  const conversionsToLiters: Record<VolumneUnit, number> = {
    "us-liquid-gallon": 3.785411784, // 1 gal (US) = 3.785411784 L
    "us-liquid-quart": 0.946352946, // 1 qt (US) = 0.946352946 L
    "us-liquid-pint": 0.473176473, // 1 pt (US) = 0.473176473 L
    "us-fluid-ounce": 0.0295735295625, // 1 fl oz (US) = 0.0295735295625 L
    "us-tablespoon": 0.01478676478125, // 1 tbsp (US) = 0.01478676478125 L
    "us-teaspoon": 0.00492892159375, // 1 tsp (US) = 0.00492892159375 L
    "cubic-meter": 1000, // 1 m³ = 1000 L
    liter: 1, // 1 L = 1 L
    milliliter: 0.001, // 1 mL = 0.001 L
    "imperial-liter": 1, // 1 L (UK) = 1 L
    "imperial-gallon": 4.54609, // 1 gal (UK) = 4.54609 L
    "imperial-quart": 1.1365225, // 1 qt (UK) = 1.1365225 L
    "imperial-pint": 0.56826125, // 1 pt (UK) = 0.56826125 L
    "imperial-cup": 0.284130625, // 1 cup (UK) = 0.284130625 L
    "imperial-fluid-ounce": 0.0284130625, // 1 fl oz (UK) = 0.0284130625 L
    "imperial-tablespoon": 0.01775816375, // 1 tbsp (UK) = 0.01775816375 L
    "imperial-teaspoon": 0.00591938791667, // 1 tsp (UK) ≈ 0.00591938791667 L
    "cubic-foot": 28.316846592, // 1 ft³ ≈ 28.316846592 L
    "cubic-inch": 0.016387064, // 1 in³ = 0.016387064 L
  };

  const unitSymbols: Record<VolumneUnit, string> = {
    "us-liquid-gallon": "gal (US)",
    "us-liquid-quart": "qt (US)",
    "us-liquid-pint": "pt (US)",
    "us-fluid-ounce": "fl oz (US)",
    "us-tablespoon": "tbsp (US)",
    "us-teaspoon": "tsp (US)",
    "cubic-meter": "m³",
    liter: "L",
    milliliter: "mL",
    "imperial-liter": "L (UK)",
    "imperial-gallon": "gal (UK)",
    "imperial-quart": "qt (UK)",
    "imperial-pint": "pt (UK)",
    "imperial-cup": "cup (UK)",
    "imperial-fluid-ounce": "fl oz (UK)",
    "imperial-tablespoon": "tbsp (UK)",
    "imperial-teaspoon": "tsp (UK)",
    "cubic-foot": "ft³",
    "cubic-inch": "in³",
  };
  // TypeScript doesn't allow direct `in` checks on string without type assertion
  if (
    !(unit_one in conversionsToLiters) ||
    !(unit_two in conversionsToLiters)
  ) {
    return {
      result: unit_value,
      explanation: "No conversion applied; unit not recognized.",
      formula: "N/A",
    };
  }
  const litersValue = unit_value * conversionsToLiters[unit_one];
  const result = litersValue / conversionsToLiters[unit_two];
  const factor = formatNumber(conversionsToLiters[unit_one] / conversionsToLiters[unit_two]);

  return {
    result,
    explanation: `1 ${unitSymbols[unit_one]} = ${factor} ${unitSymbols[unit_two]}.;Volume is converted via liters as a base unit.;Thus, to convert from ${unitSymbols[unit_one]} to ${unitSymbols[unit_two]}, multiply by ${factor}.`,
    formula: `${unitSymbols[unit_two]} = ${unitSymbols[unit_one]} × ${factor}`,
  };
};

export const unitCalculator = <T extends string>(
  expression: string,
  unit_one: T,
  unit_two: T,
  unit_value: number
) => {
  switch (expression) {
    case "area":
      return areaCalculator(
        unit_one as AreaUnit,
        unit_two as AreaUnit,
        unit_value
      );
    case "data-transfer-rate":
      return dataTransferCalculator(
        unit_one as DataTransferUnit,
        unit_two as DataTransferUnit,
        unit_value
      );
    case "digital-storage":
      return digitalStorageCalculator(
        unit_one as DigitalStorageUnit,
        unit_two as DigitalStorageUnit,
        unit_value
      );
    case "energy":
      return energyCalculator(
        unit_one as EnergyUnit,
        unit_two as EnergyUnit,
        unit_value
      );
    case "frequency":
      return frequencyCalculator(
        unit_one as FrequencyUnit,
        unit_two as FrequencyUnit,
        unit_value
      );
    case "fuel-economy":
      return fuelEconomyCalculator(
        unit_one as FuelEconomy,
        unit_two as FuelEconomy,
        unit_value
      );
    case "length":
      return lengthCalculator(
        unit_one as Length,
        unit_two as Length,
        unit_value
      );
    case "mass":
      return massCalculator(unit_one as Mass, unit_two as Mass, unit_value);
    case "plane-angle":
      return planeAngle(
        unit_one as PlaneAngle,
        unit_two as PlaneAngle,
        unit_value
      );
    case "pressure":
      return pressureCalculator(
        unit_one as Pressure,
        unit_two as Pressure,
        unit_value
      );
    case "speed":
      return speedCalculator(unit_one as Speed, unit_two as Speed, unit_value);
    case "temperature":
      return temperatureCalculator(
        unit_one as Temperature,
        unit_two as Temperature,
        unit_value
      );
    case "time":
      return timeCalculator(
        unit_one as TimeUnit,
        unit_two as TimeUnit,
        unit_value
      );
    case "volume":
      return volumeCalculator(
        unit_one as VolumneUnit,
        unit_two as VolumneUnit,
        unit_value
      );
    default:
      break;
  }
};


const formatNumber = (value: number) => {
  if (isNaN(value)) return "";

  if (value >= 0.01) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    // Find how many decimal places until we get a non-zero digit
    const str = value.toString();
    const decimalPart = str.split(".")[1] || "";
    let significantDigits = 0;

    for (let i = 0; i < decimalPart.length; i++) {
      if (decimalPart[i] !== "0") {
        significantDigits = i + 1;
        break;
      }
    }

    return value.toLocaleString("en-US", {
      minimumFractionDigits: significantDigits,
      maximumFractionDigits: significantDigits,
    });
  }
};