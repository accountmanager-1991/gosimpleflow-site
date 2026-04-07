export interface Testimonial {
  name: string
  city: string
  state: string
  text: string
  rating: 5
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    city: "Long Island",
    state: "NY",
    text: "Switching to solar with Simple Flow was the easiest decision we made. They handled the permits, the install, everything. We started saving immediately.",
    rating: 5,
  },
  {
    name: "Mike R.",
    city: "Philadelphia",
    state: "PA",
    text: "100% virtual process. No pushy salespeople. They designed our system on a video call and we were installed within 5 weeks.",
    rating: 5,
  },
  {
    name: "Jennifer K.",
    city: "Baltimore",
    state: "MD",
    text: "I was skeptical at first but the Simple Flow team explained every incentive. We got the MD residential grant and SRECs. Highly recommend.",
    rating: 5,
  },
  {
    name: "David L.",
    city: "Westchester",
    state: "NY",
    text: "ConEd rates were killing us. Now we lock in our rate for 25 years. Best financial decision of the decade.",
    rating: 5,
  },
  {
    name: "Maria G.",
    city: "Brooklyn",
    state: "NY",
    text: "Got the NYC property tax abatement on top of the state credit. Simple Flow walked us through every step. No surprises.",
    rating: 5,
  },
]
