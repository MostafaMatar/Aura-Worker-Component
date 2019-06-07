({
	init : function(component, event, helper) {
        var optionsMap = new Map();
        optionsMap.set('Egypt', ['Cairo', 'Alexandria', 'Aswan']);
        optionsMap.set('France', ['Paris', 'Nice']);
        optionsMap.set('England', ['London', 'Liverpool', 'Cardiff']);
        component.find("picklists").displayLists(optionsMap);
	}
})