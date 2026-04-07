export interface StateData {
  state: string
  stateCode: string
  priority: 1 | 2
  avgBill: number
  blurb: string
  incentiveHighlight: string
  majorCities: string[]
}

export const STATES: StateData[] = [
  {
    state: "New York",
    stateCode: "ny",
    priority: 1,
    avgBill: 200,
    blurb: "New York homeowners pay some of the highest electric rates in the country. Solar locks in your rate for 25 years, and NY's incentive stack is one of the strongest in the US.",
    incentiveHighlight: "NYSERDA NY-Sun rebate + 25% NY State tax credit (up to $5,000) + NYC property tax abatement",
    majorCities: ["Long Island", "NYC", "Hudson Valley", "Westchester", "Buffalo", "Rochester", "Albany"],
  },
  {
    state: "Pennsylvania",
    stateCode: "pa",
    priority: 1,
    avgBill: 160,
    blurb: "PECO, PPL, and Duquesne Light rates keep climbing. Pennsylvania homeowners benefit from full retail net metering and the active SREC market.",
    incentiveHighlight: "PA SREC market + full retail net metering + property tax exemption",
    majorCities: ["Philadelphia", "Pittsburgh", "Lancaster", "Allentown", "Erie", "Harrisburg"],
  },
  {
    state: "Maryland",
    stateCode: "md",
    priority: 1,
    avgBill: 180,
    blurb: "BGE rate hikes are pushing Maryland homeowners to lock in solar pricing now. Maryland offers a $1,000 residential grant plus an active SREC market.",
    incentiveHighlight: "MD residential solar grant ($1,000) + SREC market + property + sales tax exemption",
    majorCities: ["Baltimore", "Montgomery County", "Annapolis", "Frederick", "Columbia"],
  },
  {
    state: "New Jersey",
    stateCode: "nj",
    priority: 2,
    avgBill: 175,
    blurb: "PSE&G, JCP&L, and ACE customers benefit from NJ's strong SuSI program and full retail net metering.",
    incentiveHighlight: "NJ SuSI program + property + sales tax exemption + net metering",
    majorCities: ["Newark", "Jersey City", "Trenton", "Cherry Hill", "Edison"],
  },
  {
    state: "Connecticut",
    stateCode: "ct",
    priority: 2,
    avgBill: 215,
    blurb: "Eversource and UI rates make Connecticut one of the most expensive electricity markets in the US — solar pays back fast.",
    incentiveHighlight: "CT Residential Solar Investment Program + property + sales tax exemption",
    majorCities: ["Hartford", "New Haven", "Stamford", "Bridgeport", "Waterbury"],
  },
  {
    state: "Massachusetts",
    stateCode: "ma",
    priority: 2,
    avgBill: 195,
    blurb: "Eversource and National Grid rate hikes make Massachusetts one of the highest-savings solar markets in the country.",
    incentiveHighlight: "MA SMART program + 15% state tax credit (up to $1,000) + property tax exemption",
    majorCities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
  },
  {
    state: "California",
    stateCode: "ca",
    priority: 2,
    avgBill: 210,
    blurb: "PG&E, SCE, and SDG&E customers offset most of their bill with the right system size. California still has strong solar economics under NEM 3.0.",
    incentiveHighlight: "CA NEM 3.0 net billing + property tax exclusion",
    majorCities: ["Los Angeles", "San Diego", "Sacramento", "San Jose", "Fresno"],
  },
]

export function getStateByCode(code: string): StateData | undefined {
  return STATES.find(s => s.stateCode === code)
}

export function getAllStatePaths() {
  return STATES.map(s => ({ state: s.stateCode }))
}
