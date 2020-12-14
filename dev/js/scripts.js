import {gsap} from "gsap";

import {toggleOnAnimation} from "./demo.js";
import {toggleOffAnimation} from "./demo.js";

const mainTL = gsap.timeline();

mainTL  .add(toggleOnAnimation())
        .add(toggleOffAnimation())
