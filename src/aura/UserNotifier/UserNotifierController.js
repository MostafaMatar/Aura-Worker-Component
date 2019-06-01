({
    notifyUser : function(component, event, helper) {
        var notification = event.getParam('arguments').notification;
        var toastEvent = $A.get("e.force:showToast");
        if(notification){
            if(toastEvent){
                toastEvent.setParams({
                    "title": notification.title,
                    "message": notification.message,
                    "type": notification.type
                });
                toastEvent.fire();
            }else{
                alert(notification.message);
            }
        }

    }
})
