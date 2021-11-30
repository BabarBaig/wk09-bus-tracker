# Real Time Bus Tracker

Load a map centered on the MIT campus.  
Press button on map to show animation of the bus route between MIT and Harvard.  

## Improvements to the core project

1. Original button looked more like a label.  This meant some users might-not realize it's a button, and not press it.  Change button to a 3D rounded button in MIT cardinal red with shadow effect.  When pressed, button shows an animated button-press.
2. Original project ran only once/load.  Reset counter in code so that when marker animation ends, pressing the button on the map restarts it from beginning
3. Change refresh speed from 1000ms to 750ms.   This hopefully makes the animation a bit more engaging.

## To Execute

Clone this repo on your computer and load file index.html into a browser.

## Future Improvements

1. Replace current animation with realtime updates of buses between MIT and Harvard.
2. Add a drop-down menu option to see realtime location of buses on any route in the grater Boston area.  Users planning to take the bus, can then monitor the closest bus from a sheltered location, stepping-over to the bus-stop only when the map shows the bus is approaching.  This can be helpful in inclement or extreme weather.

## See Also

<https://openweathermap.org/>

**Credit: MIT xPRO: Professional Certificate in Coding: Full Stack Development with MERN - September 2021**
