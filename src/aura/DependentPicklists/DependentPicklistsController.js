({
    displayLists : function(component, event, helper) {
        var optionsMap = event.getParam('arguments').optionsMap;
        component.set("v.opts", optionsMap);
        var masterOptions = [];
        for (var key of optionsMap.keys()) {
            masterOptions.push(key);
        }
        component.set("v.masterPicklistOptions", masterOptions);
    },
    masterValueChanged : function(component, event, helper) {
        component.set('v.slavePicklistValue', '');
        var newMasterValue = component.get("v.masterPicklistValue");
        var optionsMap =  component.get("v.opts");
        var newSlaveValues = optionsMap.get(newMasterValue);
        component.set('v.slavePicklistOptions', newSlaveValues);
    }
})