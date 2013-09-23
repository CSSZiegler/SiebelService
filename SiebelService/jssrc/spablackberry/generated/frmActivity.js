//Form JS File
function frmActivity_frmActivity_preshow_seq0(eventobject, neworientation) {
    frmActivity_preshow.call(this);
};

function frmActivity_segActivity_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    getActivityDetails.call(this);
};

function addWidgetsfrmActivity() {
    var segActivitybox = new kony.ui.Box({
        "id": "segActivitybox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 38
    }, {});
    var segActivity = new kony.ui.SegmentedUI2({
        "id": "segActivity",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblActivity": "lblActivity"
        },
        "rowTemplate": segActivitybox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmActivity_segActivity_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38
    }, {});
    var lblActivity = new kony.ui.Label({
        "id": "lblActivity",
        "isVisible": true,
        "skin": "skinLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {});
    segActivitybox.add(
    lblActivity);
    frmActivity.add(
    segActivity);
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
        "addWidgets": addWidgetsfrmActivity
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};