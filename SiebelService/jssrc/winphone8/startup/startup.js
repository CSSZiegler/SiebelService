//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "siebel",
    appName: "SiebelSample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "localhost",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://localhost:8080/middleware/MWServlet",
    secureurl: "https://localhost/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmActivityGlobals();
    frmActivityDetailsGlobals();
    frmAppDescriptionGlobals();
    frmLoginGlobals();
    frmLoginSuccesGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmAppDescription.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};