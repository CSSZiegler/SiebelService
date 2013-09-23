//Form JS File
function frmActivity_frmActivity_preshow_seq0(eventobject, neworientation) {
    /* 


checkSessiondIDGen.call(this);




 */
};

function frmActivity_frmActivity_postshow_seq0(eventobject, neworientation) {
    /* 


frmActivity_preshow_Tablet.call(this);




 */
};

function frmActivity_btnTimeSheetEntries_onClick_seq0(eventobject) {
    frmLoginSucces_btnTimeSheetEntries.call(this);
};

function frmActivity_segActivity_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    getActivityDetails_Tablet.call(this);
};

function addWidgetsfrmActivity() {
    var lblTitleSPA = new kony.ui.Label({
        "id": "lblTitleSPA",
        "isVisible": true,
        "text": "Activities",
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
        "containerWeight": 8,
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
        "margin": [2, 1, 2, 0],
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
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
        "margin": [2, 1, 2, 0],
        "padding": [0, 1, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "toolTip": null
    });
    var btnTimeSheetEntries = new kony.ui.Button({
        "id": "btnTimeSheetEntries",
        "isVisible": true,
        "text": "Get time sheet activities",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmActivity_btnTimeSheetEntries_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 0, 30, 1],
        "padding": [1, 1, 1, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    var lblActivityHeader = new kony.ui.Label({
        "id": "lblActivityHeader",
        "isVisible": false,
        "text": "Activities",
        "skin": "sknLblBlueBGWhiteFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 1, 0],
        "padding": [1, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    var segActivitybox = new kony.ui.Box({
        "id": "segActivitybox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 93
    }, {});
    var segActivity = new kony.ui.SegmentedUI2({
        "id": "segActivity",
        "isVisible": true,
        "retainSelection": true,
        "widgetDataMap": {
            "lblActivity": "lblActivity"
        },
        "rowTemplate": segActivitybox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "b5b5b500",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": true,
        "onRowClick": frmActivity_segActivity_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {});
    var lblActivity = new kony.ui.Label({
        "id": "lblActivity",
        "isVisible": true,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "toolTip": null
    });
    segActivitybox.add(
    lblActivity);
    var scbMenu = new kony.ui.ScrollBox({
        "id": "scbMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 70,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    scbMenu.add(
    segActivity);
    var hbxMenu = new kony.ui.Box({
        "id": "hbxMenu",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 67,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMenu.add(
    scbMenu);
    var vbxMenu = new kony.ui.Box({
        "id": "vbxMenu",
        "isVisible": true,
        "skin": "sknVbxRoundedCorner",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 35,
        "margin": [0, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxMenu.add(
    hbxMenu);
    var lblActNameKey = new kony.ui.Label({
        "id": "lblActNameKey",
        "isVisible": true,
        "text": "Activity:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActName = new kony.ui.Label({
        "id": "lblActName",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActName = new kony.ui.Box({
        "id": "vbxActName",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActName.add(
    lblActNameKey, lblActName);
    var hbxActName = new kony.ui.Box({
        "id": "hbxActName",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActName.add(
    vbxActName);
    var linOne = new kony.ui.Line({
        "id": "linOne",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActOwnerKey = new kony.ui.Label({
        "id": "lblActOwnerKey",
        "isVisible": true,
        "text": "Owner name:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActOwner = new kony.ui.Label({
        "id": "lblActOwner",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActOwner = new kony.ui.Box({
        "id": "vbxActOwner",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActOwner.add(
    lblActOwnerKey, lblActOwner);
    var hbxActOwner = new kony.ui.Box({
        "id": "hbxActOwner",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActOwner.add(
    vbxActOwner);
    var linTwo = new kony.ui.Line({
        "id": "linTwo",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActStrTimeKey = new kony.ui.Label({
        "id": "lblActStrTimeKey",
        "isVisible": true,
        "text": "Start time:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActStrTime = new kony.ui.Label({
        "id": "lblActStrTime",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActStrTime = new kony.ui.Box({
        "id": "vbxActStrTime",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActStrTime.add(
    lblActStrTimeKey, lblActStrTime);
    var hbxActStrTime = new kony.ui.Box({
        "id": "hbxActStrTime",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActStrTime.add(
    vbxActStrTime);
    var linThree = new kony.ui.Line({
        "id": "linThree",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActEndTimeKey = new kony.ui.Label({
        "id": "lblActEndTimeKey",
        "isVisible": true,
        "text": "End time:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActEndTime = new kony.ui.Label({
        "id": "lblActEndTime",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActEndTime = new kony.ui.Box({
        "id": "vbxActEndTime",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActEndTime.add(
    lblActEndTimeKey, lblActEndTime);
    var hbxActEndTime = new kony.ui.Box({
        "id": "hbxActEndTime",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActEndTime.add(
    vbxActEndTime);
    var linFour = new kony.ui.Line({
        "id": "linFour",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActElaspedTimeKey = new kony.ui.Label({
        "id": "lblActElaspedTimeKey",
        "isVisible": true,
        "text": "Elasped time in hours:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActElaspedTime = new kony.ui.Label({
        "id": "lblActElaspedTime",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActElaspedTime = new kony.ui.Box({
        "id": "vbxActElaspedTime",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActElaspedTime.add(
    lblActElaspedTimeKey, lblActElaspedTime);
    var hbxActElaspedTime = new kony.ui.Box({
        "id": "hbxActElaspedTime",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActElaspedTime.add(
    vbxActElaspedTime);
    var linFive = new kony.ui.Line({
        "id": "linFive",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActProjectKey = new kony.ui.Label({
        "id": "lblActProjectKey",
        "isVisible": true,
        "text": "Project:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActProject = new kony.ui.Label({
        "id": "lblActProject",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActProject = new kony.ui.Box({
        "id": "vbxActProject",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActProject.add(
    lblActProjectKey, lblActProject);
    var hbxActProject = new kony.ui.Box({
        "id": "hbxActProject",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActProject.add(
    vbxActProject);
    var linTen = new kony.ui.Line({
        "id": "linTen",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActItemDateKey = new kony.ui.Label({
        "id": "lblActItemDateKey",
        "isVisible": true,
        "text": "Item date:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActItemDate = new kony.ui.Label({
        "id": "lblActItemDate",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActItemDate = new kony.ui.Box({
        "id": "vbxActItemDate",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActItemDate.add(
    lblActItemDateKey, lblActItemDate);
    var hbxActItemDate = new kony.ui.Box({
        "id": "hbxActItemDate",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActItemDate.add(
    vbxActItemDate);
    var linNine = new kony.ui.Line({
        "id": "linNine",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActSubmittedKey = new kony.ui.Label({
        "id": "lblActSubmittedKey",
        "isVisible": true,
        "text": "Is submitted or not (T/F)?:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActSubmitted = new kony.ui.Label({
        "id": "lblActSubmitted",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActSubmitted = new kony.ui.Box({
        "id": "vbxActSubmitted",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActSubmitted.add(
    lblActSubmittedKey, lblActSubmitted);
    var hbxActSubmitted = new kony.ui.Box({
        "id": "hbxActSubmitted",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActSubmitted.add(
    vbxActSubmitted);
    var linEight = new kony.ui.Line({
        "id": "linEight",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActReportedTimeKey = new kony.ui.Label({
        "id": "lblActReportedTimeKey",
        "isVisible": true,
        "text": "Reported time:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActReportedTime = new kony.ui.Label({
        "id": "lblActReportedTime",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActReportedTime = new kony.ui.Box({
        "id": "vbxActReportedTime",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActReportedTime.add(
    lblActReportedTimeKey, lblActReportedTime);
    var hbxActReportedTime = new kony.ui.Box({
        "id": "hbxActReportedTime",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActReportedTime.add(
    vbxActReportedTime);
    var linSeven = new kony.ui.Line({
        "id": "linSeven",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActTotalHrsKey = new kony.ui.Label({
        "id": "lblActTotalHrsKey",
        "isVisible": true,
        "text": "Total actual hours:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActTotalHrs = new kony.ui.Label({
        "id": "lblActTotalHrs",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActTotalHrs = new kony.ui.Box({
        "id": "vbxActTotalHrs",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActTotalHrs.add(
    lblActTotalHrsKey, lblActTotalHrs);
    var hbxActTotalHrs = new kony.ui.Box({
        "id": "hbxActTotalHrs",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxActDetails",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActTotalHrs.add(
    vbxActTotalHrs);
    var linSix = new kony.ui.Line({
        "id": "linSix",
        "isVisible": true,
        "skin": "skinLineGrey"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblActBillableHrsKey = new kony.ui.Label({
        "id": "lblActBillableHrsKey",
        "isVisible": true,
        "text": "Total billable hours:",
        "skin": "skinLblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "toolTip": null
    });
    var lblActBillableHrs = new kony.ui.Label({
        "id": "lblActBillableHrs",
        "isVisible": true,
        "text": null,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "toolTip": null
    });
    var vbxActBillableHrs = new kony.ui.Box({
        "id": "vbxActBillableHrs",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActBillableHrs.add(
    lblActBillableHrsKey, lblActBillableHrs);
    var hbxActBillableHrs = new kony.ui.Box({
        "id": "hbxActBillableHrs",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActBillableHrs.add(
    vbxActBillableHrs);
    var vbxActivityDetailInner = new kony.ui.Box({
        "id": "vbxActivityDetailInner",
        "isVisible": true,
        "skin": "sknVBoxWhiteBG",
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
    vbxActivityDetailInner.add(
    hbxActName, linOne, hbxActOwner, linTwo, hbxActStrTime, linThree, hbxActEndTime, linFour, hbxActElaspedTime, linFive, hbxActProject, linTen, hbxActItemDate, linNine, hbxActSubmitted, linEight, hbxActReportedTime, linSeven, hbxActTotalHrs, linSix, hbxActBillableHrs);
    var hbxActivityDetailInner = new kony.ui.Box({
        "id": "hbxActivityDetailInner",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 95,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActivityDetailInner.add(
    vbxActivityDetailInner);
    var scbActivityDetail = new kony.ui.ScrollBox({
        "id": "scbActivityDetail",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 70,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    scbActivityDetail.add(
    hbxActivityDetailInner);
    var hbxActivityDetail = new kony.ui.Box({
        "id": "hbxActivityDetail",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 97,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActivityDetail.add(
    scbActivityDetail);
    var vbxActivityDetail = new kony.ui.Box({
        "id": "vbxActivityDetail",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 65,
        "margin": [0, 0, 1, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxActivityDetail.add(
    hbxActivityDetail);
    var hbxMain = new kony.ui.Box({
        "id": "hbxMain",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 65,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMain.add(
    vbxMenu, vbxActivityDetail);
    frmActivity.add(
    hbxTitleSPA, lblLoginSuccessConfirm, lblSeesionID, btnTimeSheetEntries, lblActivityHeader, hbxMain);
};

function frmActivityGlobals() {
    var MenuId = [];
    frmActivity = new kony.ui.Form2({
        "id": "frmActivity",
        "title": "Activities",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "preShow": frmActivity_frmActivity_preshow_seq0,
        "postShow": frmActivity_frmActivity_postshow_seq0,
        "addWidgets": addWidgetsfrmActivity
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