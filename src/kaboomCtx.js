import kaboom from "kaboom";
export const k =kaboom({
    global:false,// for kaboom not to be used globally
    touchToMouse:true,//tranform all touch events so that it can be used even on a phone
    canvas:document.getElementById("game"),
    debug:false,
})