//Form JS File
function frmLogin_frmLogin_preshow_seq0(eventobject, neworientation) {
    /* 


frmLogin_preshow.call(this);




 */
};

function frmLogin_btnLoginSubmission_onClick_seq0(eventobject) {
    frmLogin_login_Tablet.call(this);
};

function addWidgetsfrmLogin() {
    var lblTitleSPA = new kony.ui.Label({
        "id": "lblTitleSPA",
        "isVisible": true,
        "text": "Login",
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
    var lblLogin = new kony.ui.Label({
        "id": "lblLogin",
        "isVisible": true,
        "text": "LOGIN",
        "skin": "sknLblGreyFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 4, 5, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 16
    }, {
        "toolTip": null
    });
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
        "skin": "skinTxtTrans",
        "focusSkin": "skinTxtTrans"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
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
        "autoCorrect": false,
        "autoComplete": false
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
        "skin": "skinTxtTrans",
        "focusSkin": "skinTxtTrans"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
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
        "autoCorrect": false,
        "autoComplete": false
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
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxUNamePassBox.add(
    txbUName, lineBetUnamePassword, txbPassword);
    var hbxUNamePassBox = new kony.ui.Box({
        "id": "hbxUNamePassBox",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxRoundCorner",
        "focusSkin": "sknHbxRoundCorner",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [8, 0, 8, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [1, 1, 1, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "toolTip": null
    });
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
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxRoundedCorners",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 37,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [17, 5, 17, 1],
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
        "margin": [18, 1, 18, 6],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    frmLogin.add(
    hbxTitleSPA, hbxUNamePass, lblHelp);
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