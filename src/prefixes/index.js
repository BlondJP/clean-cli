System.register([], function(exports_1) {
    var controllerPrefixes, useCasePrefixes, entityPrefixes, dataAccessPrefixes, actions;
    return {
        setters:[],
        execute: function() {
            exports_1("controllerPrefixes", controllerPrefixes = [
                "create",
                "get-one",
                "get-all",
                "update",
                "delete",
            ]);
            exports_1("useCasePrefixes", useCasePrefixes = [
                "add",
                "find-one",
                "find-all",
                "edit",
                "remove",
            ]);
            exports_1("entityPrefixes", entityPrefixes = []);
            exports_1("dataAccessPrefixes", dataAccessPrefixes = [
                "insert",
                "find-one",
                "find-all",
                "update",
                "remove",
            ]);
            exports_1("actions", actions = {
                creating: 0,
                gettingOne: 1,
                gettingAll: 2,
                updating: 3,
                removing: 4
            });
        }
    }
});
//# sourceMappingURL=index.js.map