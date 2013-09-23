//Form JS File
function frmLogin_frmLogin_preshow_seq0(eventobject, neworientation) {
    frmLogin_preshow.call(this);
};

function frmLogin_btnLoginSubmission_onClick_seq0(eventobject) {
    frmLogin_login_Tablet.call(this);
};

function addWidgetsfrmLogin() {
    var lblLogin = new kony.ui.Label({
        "id": "lblLogin",
        "isVisible": true,
        "text": "LOGIN",
        "skin": "sknLblGreyFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 2, 5, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 16
    }, {});
    var linUnderLoginLblOne = new kony.ui.Line({
        "id": "linUnderLoginLblOne",
        "isVisible": true,
        "skin": "sknLineNormal"
    }, {
        "thickness": 4,
        "margin": [3, 0, 5, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var linUnderLoginLblTwo = new kony.ui.Line({
        "id": "linUnderLoginLblTwo",
        "isVisible": true,
        "skin": "sknLineNormal"
    }, {
        "thickness": 4,
        "margin": [3, 0, 5, 5],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var txbUName = new kony.ui.TextBox2({
        "id": "txbUName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "User ID",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "skinTxtTrans",
        "focusSkin": "skinTxtTrans",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 42
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lineBetUnamePassword = new kony.ui.Line({
        "id": "lineBetUnamePassword",
        "isVisible": true,
        "skin": "sknLineGrey2"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var txbPassword = new kony.ui.TextBox2({
        "id": "txbPassword",
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Password",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "skinTxtTrans",
        "focusSkin": "skinTxtTrans",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var vbxUNamePassBox = new kony.ui.Box({
        "id": "vbxUNamePassBox",
        "isVisible": true,
        "skin": "sknVBoxWhiteBG",
        "focusSkin": "sknVBoxWhiteBG",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxUNamePassBox.add(
    txbUName, lineBetUnamePassword, txbPassword);
    var hbxUNamePassBox = new kony.ui.Box({
        "id": "hbxUNamePassBox",
        "isVisible": true,
        "skin": "sknHbxRoundCorner",
        "focusSkin": "sknHbxRoundCorner",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [8, 0, 8, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxUNamePassBox.add(
    vbxUNamePassBox);
    var btnLoginSubmission = new kony.ui.Button({
        "id": "btnLoginSubmission",
        "isVisible": true,
        "text": "Submit",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmLogin_btnLoginSubmission_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [8, 8, 8, 4],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 17
    }, {});
    var vbxUNamePass = new kony.ui.Box({
        "id": "vbxUNamePass",
        "isVisible": true,
        "skin": "sknVbxTrans",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxUNamePass.add(
    lblLogin, linUnderLoginLblOne, linUnderLoginLblTwo, hbxUNamePassBox, btnLoginSubmission);
    var hbxUNamePass = new kony.ui.Box({
        "id": "hbxUNamePass",
        "isVisible": true,
        "skin": "sknHbxRoundedCorners",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 37,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [17, 13, 17, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxUNamePass.add(
    vbxUNamePass);
    var lblHelp = new kony.ui.Label({
        "id": "lblHelp",
        "isVisible": true,
        "text": "Note: Default Username/Password is sadmin/sadmin",
        "skin": "skinLblSmall"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [18, 1, 18, 5],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmLogin.add(
    hbxUNamePass, lblHelp);
};

function frmLoginGlobals() {
    var MenuId = [];
    frmLogin = new kony.ui.Form2({
        "id": "frmLogin",
        "title": "Login",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "preShow": frmLogin_frmLogin_preshow_seq0,
        "addWidgets": addWidgetsfrmLogin
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