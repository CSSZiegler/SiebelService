//startup.js file
var appConfig = {
    appId: "siebel",
    appName: "SiebelSample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "localhost",
    serverPort: "8080",
    secureServerPort: null,
    url: "http://localhost:8080/middleware/MWServlet",
    secureurl: "https://localhost/middleware/MWServlet",
    middlewareContext: "middleware"
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
    kony.theme.packagedthemes(
    ["default", "KonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
kony.print = function() {
    return;
};