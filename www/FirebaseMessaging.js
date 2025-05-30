var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseMessaging";
var noop = function() {};

module.exports = {
    subscribe: function(topic) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "subscribe", [topic]);
        });
    },
    unsubscribe: function(topic) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "unsubscribe", [topic]);
        });
    },
    onTokenRefresh: function(success, error) {
        exec(success, error, PLUGIN_NAME, "onTokenRefresh", []);
    },
    onMessage: function(callack, error) {
        exec(callack, error, PLUGIN_NAME, "onMessage", []);
    },
    onBackgroundMessage: function(callack, error) {
        exec(callack, error, PLUGIN_NAME, "onBackgroundMessage", []);
    },
    clearNotifications: function(callack, error) {
        exec(callack, error, PLUGIN_NAME, "clearNotifications", []);
    },
    deleteToken: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "deleteToken", []);
        });
    },
    getToken: function(type) {
        return new Promise(function(resolve, reject) {
            if (type && typeof type !== "string") {
                return reject(new TypeError("type argument must be a string"));
            }

            exec(resolve, reject, PLUGIN_NAME, "getToken", [type || ""]);
        });
    },
    setBadge: function(value) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setBadge", [value]);
        });
    },
    getBadge: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "getBadge", []);
        });
    },
    requestPermission: function(options) {
        return new Promise(function(resolve, reject) {
            if (options) {
                if (typeof options.forceShow !== "boolean" && typeof options.forceShow !== "undefined") {
                    return reject(new TypeError("forceShow option must be a boolean"));
                }
            }

            exec(resolve, reject, PLUGIN_NAME, "requestPermission", [options || {}]);
        });
    },
    hasPermission: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "hasPermission", []);
        });
    },
    requestPermissionHelper: function(options) {
        return new Promise(function(resolve, reject) {
            if (options) {
                if (typeof options.forceShow !== "boolean" && typeof options.forceShow !== "undefined") {
                    return reject(new TypeError("forceShow option must be a boolean"));
                }
            }

            exec(resolve, reject, PLUGIN_NAME, "requestPermissionHelper", [options || {}]);
        });
    },
    findChannel: function(channelId) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "findChannel", [channelId]);
        });
    },
    listChannels: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "listChannels", []);
        });
    },
    createChannel: function(options) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "createChannel", [options]);
        });
    },
    deleteChannel: function(channelId) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "deleteChannel", [channelId]);
        });
    }
};
