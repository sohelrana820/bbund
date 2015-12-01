app.factory("flash", function($rootScope) {
    var queue = [];
    var currentMessage = "";
    var currentMessageType = "";

    $rootScope.$on("$routeChangeSuccess", function() {
        currentMessage = queue.shift() || "";
        currentMessageType = queue.shift() || "";
    });

    return {
        setMessageType: function(type) {
            queue.push(type);
        },
        getMessageType: function() {
            return currentMessageType;
        },
        setMessage: function(message) {
            queue.push(message);
        },
        getMessage: function() {
            return currentMessage;
        }
    };
});