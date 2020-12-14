import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";  

gsap.registerPlugin(MotionPathPlugin);


//toggle on
const toggleOnTL = gsap.timeline();
toggleOnTL.to("#circle-toggle", {duration:.5, x:85})
          .to("#circle-toggle", {duration:.5, fill:"#e8e2a0"}, "on")
                   
export function toggleOnAnimation(){
    return toggleOnTL;
}

//toggle off
const toggleOffTL = gsap.timeline();
toggleOffTL
            
            .to("#circle-toggle", {duration:.5, x:0})
            .to("#circle-toggle", {duration:1, fill:"#4f4f4a"}, "off")
            .to("#content", {duration:1, backgroundColor:"#000000"}, "off")

        
export function toggleOffAnimation(){
    return toggleOffTL;
}


