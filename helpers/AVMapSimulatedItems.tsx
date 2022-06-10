// just for convenient typing

export enum P {
  h = "hailing",
  req = "requesting-assistance",
  av = "av",
  cs = "charging-station",
  rds = "roadside-assistance",
}

export const simulatedMapItems = [
  [P.h, 35, 72],
  [P.h, 40, 75],
  [P.h, 30, 73],
  [P.h, 50, 50],
  [P.h, 37, 67],
  [P.h, 59, 79],
  [P.h, 30, 32],
  [P.h, 82, 70],
  [P.cs, 44, 66],
  [P.cs, 37, 39],
  [P.cs, 77, 43],
  [P.req, 60, 60],
  [P.req, 75, 87],
  [P.rds, 54, 65, "moving-6"],
  [P.rds, 70, 76, "moving-9"],
  [P.av, 29, 62],
  [P.av, 47, 82],
  [P.av, 64, 86, "moving-5"],
  [P.av, 35, 49],
  [P.av, 25, 43, "moving-3"],
  [P.av, 44, 18, "moving-8"],
  [P.av, 74, 76, "moving-4"],
  [P.av, 79, 35, "moving-7"],
  [P.av, 53, 39, "moving-1"],
  [P.av, 40, 58],
  [P.av, 33, 81, "moving-2"],
];
