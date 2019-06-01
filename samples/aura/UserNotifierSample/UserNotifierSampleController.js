({
	handleClick : function(component, event, helper) {
		var type = event.getSource().get("v.label");
        component.find("notifier").notifyUser(
            {type : type, title: type+" Message", message: "Test "+type}
        );
	}
})