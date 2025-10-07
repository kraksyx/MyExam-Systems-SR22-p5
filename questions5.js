const questions = [
  {
    "question": "209. What is the structure of the SR22?",
    "options": ["Truss", "Monocoque", "Semi-monocoque", "Framework"],
    "correct": 1
  },
  {
    "question": "210. What type of landing gear does the SR22 have?",
    "options": ["Fixed", "Retractable", "Tricycle", "Taildragger"],
    "correct": 2
  },
  {
    "question": "211. What are the ailerons made of?",
    "options": ["Carbon fiber", "Composite", "Aluminium", "Steel"],
    "correct": 2
  },
  {
    "question": "212. How many flap settings are available on the SR22?",
    "options": ["One (UP)", "Four (UP, 25, 50, 100)", "Two (UP, 50)", "Three (UP, 50, 100)"],
    "correct": 3
  },
  {
    "question": "213. How many blades does the propeller have?",
    "options": ["Four", "Five", "Two", "Three"],
    "correct": 3
  },
  {
    "question": "214. How many engine controls does the SR22 have?",
    "options": ["Four (throttle, mixture, prop, carb heat)", "One (throttle)", "Two (throttle and mixture)", "Three (throttle, mixture, prop)"],
    "correct": 2
  },
  {
    "question": "215. What is the purpose of the mixture control?",
    "options": ["To control cabin temperature", "To increase engine power", "To avoid damage to the engine", "To adjust propeller speed"],
    "correct": 2
  },
  {
    "question": "216. Which trim is not available in flight?",
    "options": ["Aileron", "Rudder", "Elevator", "Flaps"],
    "correct": 1
  },
  {
    "question": "217. How is the baggage compartment locked?",
    "options": ["Keylock + batteries", "Batteries only", "Keylock only", "Manual latch"],
    "correct": 0
  },
  {
    "question": "218. Is it true that ALT1 is belt driven?",
    "options": ["True", "Only in flight", "Only during startup", "False"],
    "correct": 3
  },
  {
    "question": "219. What type of fire extinguisher is used?",
    "options": ["Foam", "Dry powder", "CO2", "Halon"],
    "correct": 3
  },
  {
    "question": "220. Where is the airspeed indicator located?",
    "options": ["Upper right side of the PFD", "Upper left side of the PFD", "Lower left side of the PFD", "Lower right side of the PFD"],
    "correct": 1
  },
  {
    "question": "221. How many keys are used for both cabin doors and the baggage compartment?",
    "options": ["Three", "Four", "Two", "One"],
    "correct": 3
  },
  {
    "question": "222. What is the total number of keys for the SR22?",
    "options": ["One", "Two", "Three", "Four"],
    "correct": 2
  },
  {
    "question": "223. What instruments are available on the SAM (Stand By) Module?",
    "options": ["Altitude, Airspeed, RPM", "Altitude, Attitude, Airspeed", "Airspeed, Heading, Vertical Speed", "Attitude, Heading, RPM"],
    "correct": 1
  },
  {
    "question": "224. At what density altitude should you keep the mixture full rich?",
    "options": ["Below 10,000 ft", "Below 3000 ft", "Below 5000 ft", "Below 7000 ft"],
    "correct": 2
  },
  {
    "question": "225. What lights are available on the SR22?",
    "options": ["NAV and landing lights only", "Landing and strobe lights only", "NAV, strobe, landing, and ice lights", "Strobe and ice lights only"],
    "correct": 2
  },
  {
    "question": "226. What is the fuel imbalance advisory threshold?",
    "options": ["12 USG", "8 USG", "6 USG", "10 USG"],
    "correct": 1
  },
  {
    "question": "227. What is the fuel imbalance caution threshold?",
    "options": ["6 USG", "10 USG", "8 USG", "12 USG"],
    "correct": 1
  },
  {
    "question": "228. What is the fuel imbalance warning threshold?",
    "options": ["8 USG", "6 USG", "10 USG", "12 USG"],
    "correct": 3
  },
  {
    "question": "229. What triggers the fuel quantity warning?",
    "options": ["Left + Right less than 6 USG", "Left + Right less than 9 USG", "Left + Right less than 12 USG", "Left + Right less than 15 USG"],
    "correct": 1
  },
  {
    "question": "230. How many spark plugs are in each cylinder in the SR22 engine?",
    "options": ["4", "2", "3", "1"],
    "correct": 1
  },
  {
    "question": "231. Where is the alternate Induction Air Control knob located?",
    "options": ["On the right console near the pilot's left knee", "On the bolster panel", "On the Baggage compartment.", "On the left console near the pilot's right knee"],
    "correct": 3
  },
  {
    "question": "232. What's the expected descent rate once the CAPS parachute is fully inflated?",
    "options": ["3500ft/min", "1500ft/min", "1700ft/min", "2500ft/min"],
    "correct": 2
  },
  {
    "question": "233. From the Annunciation and Alert System: What does CAS stand for?",
    "options": ["Crew Alerting System", "Crew Attention System", "Cabin Alerting System", "Cabin Attention System"],
    "correct": 0
  },
  {
    "question": "234. The Pitot-Static system consists of:",
    "options": ["A heated Pitot tube mounted on the left wing and a static port mounted in the fuselage.", "2 heated Pitot tubes mounted on both wings and 2 static ports mounted in the fuselage.", "2 heated Pitot tubes mounted on both wings and a single static port mounted in the fuselage.", "A single heated Pitot tube mounted on the left wing and dual static ports mounted in the fuselage"],
    "correct": 3
  },
  {
    "question": "235. The SR22 is equipped with:",
    "options": ["A two-alternator, two-battery, 28-volt direct current (VDC) electrical system.", "A one-alternator, one-battery, 28-volt direct current (VDC) electrical system.", "A one-alternator, one-battery, 24-volt direct current (VDC) electrical system.", "A two-alternator, two-battery, 24-volt direct current (VDC) electrical system."],
    "correct": 0
  },
  {
    "question": "236. How is the SR22 engine cooled?",
    "options": ["Air cooled", "Liquid cooled", "Wind cooled", "Water cooled"],
    "correct": 0
  },
  {
    "question": "237. Where are the fuel drains located in the SR22?",
    "options": ["1 on each wing (2), 1 on each collector (2) and 1 on the gascolator.", "1 on each wing (2) and 1 on the gascolator.", "2 on each wing (2), 2 on each collector (2) and 1 on the gascolator.", "1 on each wing collector tank (2) and 2 on the gascolator."],
    "correct": 0
  },
  {
    "question": "238. What pulls fuel from the collector tanks?",
    "options": ["Fuel is gravity fed from the collector tanks down to the throttle metering valve.", "The engine driven fuel pump.", "The engine driven and the electrical fuel pump.", "The electric fuel pump."],
    "correct": 1
  },
  {
    "question": "239. What is the Normal Fuel Flow range in U.S. Gal/HR for the SR22?",
    "options": ["5 - 35", "10 - 30", "0 - 25", "0 - 30"],
    "correct": 2
  },
  {
    "question": "240. What is the Maximum Warning range of the Essential Bus Volts for the SR22?",
    "options": ["> 30", "< 30", "> 32", "24.5 - 32"],
    "correct": 2
  },
  {
    "question": "241. Which maneuvers are prohibited in the SR22?",
    "options": ["Slow flight", "Normal stalls, chandelles, lazy eights and turns in which the angle of bank is limited to 60°.", "Acrobatic maneuvers and spins", "Steep turns at 45° angle of bank."],
    "correct": 2
  },
  {
    "question": "242. When must the fuel pump be set to BOOST in the SR22?",
    "options": ["For descend, landing, steep turns and for switching fuel tanks.", "For takeoff, climb, landing and for switching fuel tanks", "For takeoff and landing only.", "Only when switching fuel tanks."],
    "correct": 1
  },
  {
    "question": "243. The use of Recirculation Mode during flight is:",
    "options": ["Only permitted above +40°C", "Permitted", "Only permitted during cruise flight", "Prohibited"],
    "correct": 3
  },
  {
    "question": "244. What is the MAXIMUM allowable fuel imbalance?",
    "options": ["9.0 U.S. Gallon", "8.0 U.S. Gallon", "10.0 U.S. Gallon", "12.0 U.S. Gallon"],
    "correct": 2
  },
  {
    "question": "245. What type of nose wheel does the SR22 have?",
    "options": ["Steerable nose wheel.", "Fixed Nose wheel.", "Free castering nose wheel.", "Flexible nose wheel."],
    "correct": 2
  },
  {
    "question": "246. Essential engine information in backup mode is displayed on the:",
    "options": ["LH edge of MFD", "PFD top edge", "RH edge of MFD", "Annunciator panel"],
    "correct": 0
  },
  {
    "question": "247. Oil pressure sensor helps trigger PRIME mode when oil pressure is:",
    "options": ["Below 10 PSI", "At idle", "Below 5 PSI", "Over 10 PSI"],
    "correct": 0
  },
  {
    "question": "248. How much force is needed to activate the CAPS rocket?",
    "options": ["20.4 lb (5kg)", "Above 45 kg", "45.0 lb (20.4kg)", "Between 20 and 45 lb"],
    "correct": 2
  },
  {
    "question": "249. What does PITOT HEAT RECD Caution message mean?",
    "options": ["OAT < 3°C", "OAT < 5°C", "OAT < 3°C and Pitot heat OFF", "OAT < 5°C and Pitot heat OFF"],
    "correct": 3
  },
  {
    "question": "250. What are some advantages of fuel injection?",
    "options": ["Faster throttle response.", "Reduction in evaporative icing.", "All of the above.", "Better fuel flow."],
    "correct": 2
  },
  {
    "question": "251. What's the maximum weight in the SR22 baggage compartment?",
    "options": ["130 lb", "59 lb", "59 N", "130 kg"],
    "correct": 0
  },
  {
    "question": "252. If Air-conditioning is used during flight, Cruise performance is reduced by approx:",
    "options": ["2", "1", "4", "5"],
    "correct": 0
  },
  {
    "question": "253. What type of fuselage structure does the SR22 have?",
    "options": ["Truss structure", "Geodesic structure", "Semi-monocoque", "Monocoque fuselage"],
    "correct": 3
  },
  {
    "question": "254. When does a FUEL QTY Warning message appear?",
    "options": ["imbalance >15 gallons", "imbalance >8 gallons", "<9 gallons total", "<8 gallons total"],
    "correct": 2
  },
  {
    "question": "255. What is the total oil capacity of the SR22 engine?",
    "options": ["7 quarts", "8 quarts", "6 quarts", "12 quarts"],
    "correct": 1
  },
  {
    "question": "256. What is the function of TVS (Transient Voltage Suppressors)?",
    "options": ["Control alternator charge", "Not equipped", "Prevent battery drain", "Protect from lightning"],
    "correct": 3
  },
  {
    "question": "257. What is the purpose of diodes between Distribution BUS?",
    "options": ["Current both directions", "Allow current one way", "Block voltage", "Regulate both directions"],
    "correct": 1
  },
  {
    "question": "258. What type of flaps are on the SR22?",
    "options": ["Plain flaps", "Normal flaps", "Single-slotted flaps", "Split flaps"],
    "correct": 2
  },
  {
    "question": "259. If no RPM drop noted during mag check, possible cause?",
    "options": ["Improper power check", "Faulty ignition ground or advanced timing", "Spark plug fouling", "Shutdown engine"],
    "correct": 1
  },
  {
    "question": "260. What is the turning radius for the wing tip?",
    "options": ["28.3 ft", "22.3 ft", "26.3 ft", "24.3 ft"],
    "correct": 3
  },
];

