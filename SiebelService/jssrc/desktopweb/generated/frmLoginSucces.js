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
    var lblTitleSPA = new kony.ui.Label({
        "id": "lblTitleSPA",
        "isVisible": true,
        "text": "Get Activities",
        "skin": "sknLblHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "toolTip": null
    });
    var hbxTitleSPA = new kony.ui.Box({
        "id": "hbxTitleSPA",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxTitleSPA.add(
    lblTitleSPA);
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
        "padding": [2, 4, 2, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
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
        "padding": [2, 4, 2, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
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
        "padding": [1, 4, 1, 4],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
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
        "margin": [4, 11, 4, 4],
        "padding": [1, 4, 1, 4],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    frmLoginSucces.add(
    hbxTitleSPA, lblLoginSuccessConfirm, lblSeesionID, btnTimeSheetEntries, btnRetry);
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
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        }
    });
};