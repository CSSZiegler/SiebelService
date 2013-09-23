//startup.js file
var appConfig = {
    appId: "siebel",
    appName: "SiebelSample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "14.99.125.233",
    serverPort: "8080",
    secureServerPort: null,
    url: "http://14.99.125.233:8080/middleware/MWServlet",
    secureurl: "https://14.99.125.233/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmActivityGlobals();
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