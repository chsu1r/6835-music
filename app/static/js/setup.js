// Import Famo.us dependencies
var Engine = famous.core.Engine;
// var Modifier = famous.core.Modifier;
// var Transform = famous.core.Transform;
var Surface = famous.core.Surface;
// var ImageSurface = famous.surfaces.ImageSurface;
// var StateModifier = famous.modifiers.StateModifier;
// var Draggable = famous.modifiers.Draggable;
// var GridLayout = famous.views.GridLayout;

var setupUserInterface = function() {
    var mainContext = Engine.createContext();

    background = new Surface({
        content: "<h1>Chords</h1>",
        properties: {
            backgroundColor: "rgb(255,255,255)",
            color:"black"
        }
    });

    mainContext.add(background);
};