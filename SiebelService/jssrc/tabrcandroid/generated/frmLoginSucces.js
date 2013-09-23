//Form JS File
function frmLoginSucces_frmLoginSucces_preshow_seq0(eventobject, neworientation) {
    frmLoginSucces_preshow.call(this);
};

function frmLoginSucces_frmLoginSucces_postshow_seq0(eventobject, neworientation) {
    checkSessiondIDGen.call(this);
};

function frmLoginSucces_btnTimeSheetEntries_onClick_seq0(eventobject) {
    frmLoginSucces_btnTimeSheetEntries.call(this);
};

function frmLoginSucces_btnRetry_onClick_seq0(eventobject) {
    frmLoginSucces_btnRetry.call(this);
};

function addWidgetsfrmLoginSucces() {
    var lblLoginSuccessConfirm = new kony.ui.Label({
        "id": "lblLoginSuccessConfirm",
        "isVisible": true,
        "text": "Login is successful and your session id is :",
        "skin": "sknLblBoldWhiteFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 5],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var lblSeesionID = new kony.ui.Label({
        "id": "lblSeesionID",
        "isVisible": true,
        "text": null,
        "skin": "skinLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 3, 4, 5],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var btnTimeSheetEntries = new kony.ui.Button({
        "id": "btnTimeSheetEntries",
        "isVisible": true,
        "text": "Get time sheet activities",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmLoginSucces_btnTimeSheetEntries_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [15, 5, 15, 4],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var btnRetry = new kony.ui.Button({
        "id": "btnRetry",
        "isVisible": false,
        "text": "Try Again",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmLoginSucces_btnRetry_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 35, 12, 12],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    frmLoginSucces.add(
    lblLoginSuccessConfirm, lblSeesionID, btnTimeSheetEntries, btnRetry);
};

function frmLoginSuccesGlobals() {
    var MenuId = [];
    frmLoginSucces = new kony.ui.Form2({
        "id": "frmLoginSucces",
        "title": "Get Activities",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "preShow": frmLoginSucces_frmLoginSucces_preshow_seq0,
        "postShow": frmLoginSucces_frmLoginSucces_postshow_seq0,
        "addWidgets": addWidgetsfrmLoginSucces
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};