"use strict";

import { CountdownTimer } from "./timer.js";
import refs from "./refs.js";
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("01 01, 2030 12:00:00")
});
timer.initTimer(refs.body);
