/*****************************************************************
 *	Name    : showActivities
 *	Author  : Kony
 *	Purpose : This function is used to set data to segment and invoke frmActivity form.
 *****************************************************************/
function showActivities(status, TimeSheetItems) {
    if (status == 400) {
        tsItems = TimeSheetItems;
        kony.print("##### tsItems: " + JSON.stringify(tsItems))
        if (TimeSheetItems != null && TimeSheetItems != undefined && TimeSheetItems["RETURN"] != null && TimeSheetItems["RETURN"] != undefined) {
            var frmActivity_segActivity_temp = [];
            for (var i1 = 0; i1 < TimeSheetItems["RETURN"].length; i1++) {
                if (TimeSheetItems["RETURN"][i1]["Activity"] == "") {
                    TimeSheetItems["RETURN"][i1]["Activity"] = TimeSheetItems["RETURN"][i1]["Project"] + " project activity";
                }
                frmActivity_segActivity_temp.push({
                    "lblActivity": TimeSheetItems["RETURN"][i1]["Activity"]
                })
            }
            frmActivity.segActivity.setData(frmActivity_segActivity_temp);
        }
        if (!(TimeSheetItems == null || TimeSheetItems == undefined || TimeSheetItems["RETURN"] == null || TimeSheetItems["RETURN"] == undefined)) {
            frmActivity.show();
        } else {
            kony.application.dismissLoadingScreen();
            alert("Sorry..... try it again");
            //for rest of channel no activity to do 
        }
    }
}
/*****************************************************************
 *	Name    : getActivities
 *	Author  : Kony
 *	Purpose : This function is used to invoke service and get data .
 *****************************************************************/
function getActivities(eventobject) {
    var TimeSheetItems_inputparam = {};
    TimeSheetItems_inputparam["serviceID"] = "TimeSheetItems";
    TimeSheetItems_inputparam["sessionid"] = frmLoginSucces.lblSeesionID.text;
    TimeSheetItems_inputparam["httpheaders"] = {};
    TimeSheetItems_inputparam["httpconfigs"] = {};
    TimeSheetItems = appmiddlewareinvokerasync(TimeSheetItems_inputparam, showActivities);
}
/*****************************************************************
 *	Name    : getActivityDetails
 *	Author  : Kony
 *	Purpose : This function is used to map activity details with widgets of frmActivityDetails .
 *****************************************************************/
function getActivityDetails() {
    var selActIndex = frmActivity.segActivity.selectedIndex[1];
    frmActivityDetails.lblActName.text = tsItems["RETURN"][selActIndex]["Activity"];
    frmActivityDetails.lblActOwner.text = tsItems["RETURN"][selActIndex]["Owner First Name"];
    frmActivityDetails.lblActStrTime.text = tsItems["RETURN"][selActIndex]["Start Time"];
    frmActivityDetails.lblActEndTime.text = tsItems["RETURN"][selActIndex]["End Time"]
    frmActivityDetails.lblActElaspedTime.text = tsItems["RETURN"][selActIndex]["Elasped Time in Hours"];
    frmActivityDetails.lblActProject.text = tsItems["RETURN"][selActIndex]["Project"];
    frmActivityDetails.lblActItemDate.text = tsItems["RETURN"][selActIndex]["Item Date"];
    frmActivityDetails.lblActSubmitted.text = tsItems["RETURN"][selActIndex]["Is Submitted Or Approved"];
    frmActivityDetails.lblActReportedTime.text = tsItems["RETURN"][selActIndex]["Reported Time not NULL"];
    frmActivityDetails.lblActTotalHrs.text = tsItems["RETURN"][selActIndex]["Total Actual Hours"];
    frmActivityDetails.lblActBillableHrs.text = tsItems["RETURN"][selActIndex]["Total Billable Hours"];
    frmActivityDetails.show();
}
/*****************************************************************
 *	Name    : checkSessiondIDGen
 *	Author  : Kony
 *	Purpose : This function is used to check SessionID generation.
 *****************************************************************/
function checkSessiondIDGen() {
    if (frmLoginSucces.lblSeesionID.text == "" || frmLoginSucces.lblSeesionID.text == null) {
        if (kony.os.deviceInfo().name == "iPad") {
            alert("Login failed.");
        } else {
            frmLoginSucces.lblLoginSuccessConfirm.text = "Login failed.";
            frmLoginSucces.lblSeesionID.text = "Sorry,Session ID is not generated.Please try again.";
            frmLoginSucces.btnRetry.setVisibility(true);
            frmLoginSucces.btnTimeSheetEntries.setVisibility(false);
        }
    } else {
        frmLoginSucces.lblLoginSuccessConfirm.text = "Login is successful and your session id is :";
        frmLoginSucces.btnTimeSheetEntries.setVisibility(true);
    }
}
/*****************************************************************
 *	Name    : frmLoginSucces_btnTimeSheetEntries
 *	Author  : Kony Solutions
 *	Purpose : This function is used to show loading screen and call getActivities function.
 *****************************************************************/
function frmLoginSucces_btnTimeSheetEntries() {
    if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: true,
        separatorHeight: 30
    });
    else kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    getActivities();
    //do nothing
}
/*****************************************************************
 *	Name    : getActivityDetails_Tablet
 *	Author  : Kony
 *	Purpose : This function is used to map activity details with widgets of frmActivityDetails .
 *****************************************************************/
function getActivityDetails_Tablet() {
    var selActIndex = frmActivity.segActivity.selectedIndex[1];
    frmActivity.lblActName.text = tsItems["RETURN"][selActIndex]["Activity"];
    frmActivity.lblActOwner.text = tsItems["RETURN"][selActIndex]["Owner First Name"];
    frmActivity.lblActStrTime.text = tsItems["RETURN"][selActIndex]["Start Time"];
    frmActivity.lblActEndTime.text = tsItems["RETURN"][selActIndex]["End Time"]
    frmActivity.lblActElaspedTime.text = tsItems["RETURN"][selActIndex]["Elasped Time in Hours"];
    frmActivity.lblActProject.text = tsItems["RETURN"][selActIndex]["Project"];
    frmActivity.lblActItemDate.text = tsItems["RETURN"][selActIndex]["Item Date"];
    frmActivity.lblActSubmitted.text = tsItems["RETURN"][selActIndex]["Is Submitted Or Approved"];
    frmActivity.lblActReportedTime.text = tsItems["RETURN"][selActIndex]["Reported Time not NULL"];
    frmActivity.lblActTotalHrs.text = tsItems["RETURN"][selActIndex]["Total Actual Hours"];
    frmActivity.lblActBillableHrs.text = tsItems["RETURN"][selActIndex]["Total Billable Hours"];
}
/*****************************************************************
 *	Name    : frmActivity_preshow_Tablet
 *	Author  : Kony
 *	Purpose : This function is used to dismiss loading screen before frmActivity form will show.
 *****************************************************************/
function frmActivity_preshow_Tablet() {
    kony.application.dismissLoadingScreen();
    frmActivity.lblActName.text = tsItems["RETURN"][0]["Activity"];
    frmActivity.lblActOwner.text = tsItems["RETURN"][0]["Owner First Name"];
    frmActivity.lblActStrTime.text = tsItems["RETURN"][0]["Start Time"];
    frmActivity.lblActEndTime.text = tsItems["RETURN"][0]["End Time"]
    frmActivity.lblActElaspedTime.text = tsItems["RETURN"][0]["Elasped Time in Hours"];
    frmActivity.lblActProject.text = tsItems["RETURN"][0]["Project"];
    frmActivity.lblActItemDate.text = tsItems["RETURN"][0]["Item Date"];
    frmActivity.lblActSubmitted.text = tsItems["RETURN"][0]["Is Submitted Or Approved"];
    frmActivity.lblActReportedTime.text = tsItems["RETURN"][0]["Reported Time not NULL"];
    frmActivity.lblActTotalHrs.text = tsItems["RETURN"][0]["Total Actual Hours"];
    frmActivity.lblActBillableHrs.text = tsItems["RETURN"][0]["Total Billable Hours"];
    frmActivity.segActivity.selectedIndex = [0, 0];
}
/*****************************************************************
 *	Name    : frmLogin_btnLoginSubmission_onClick_response_Tablet
 *	Author  : Kony
 *	Purpose : This function is used to check status and according to
 * 			  that set sessionID to lblSeesionID and nevigate to frmLoginSucces.
 *****************************************************************/
function frmLogin_btnLoginSubmission_onClick_response_Tablet(status, login) {
    kony.print(status);
    if (status == 400) {
        if (login.sessionid == " " || login.sessionid == null) {
            kony.application.dismissLoadingScreen();
            frmLogin.txbUName.text = "";
            frmLogin.txbPassword.text = "";
            alert("Login failed");
        } else {
            frmLoginSucces.lblSeesionID.text = login.sessionid;
            frmLoginSucces.lblLoginSuccessConfirm.text = "";
            frmLoginSucces.btnRetry.setVisibility(false);
            frmLoginSucces.show();
        }
    }
}
/*****************************************************************
 *	Name    : frmLogin_login_Tablet
 *	Author  : Kony
 *	Purpose : This function is used to do login varification.
 *****************************************************************/
function frmLogin_login_Tablet() {
    if (frmLogin.txbUName.text == "" || frmLogin.txbUName.text == null || frmLogin.txbPassword.text == "" || frmLogin.txbPassword.text == null) {
        //Defining basicConf parameter for alert
        var basicConf = {
            message: "Username/Password field can't be empty.",
            alertType: constants.
            ALERT_TYPE_INFO,
            alertTitle: "Empty Field",
            yesLabel: "OK",
            noLabel: "no",
            alertHandler: handleAlert
        };
        //Defining pspConf parameter for alert
        var pspConf = {};
        //Alert definition
        var infoAlert = kony.ui.Alert(basicConf, pspConf);
    } else {
        if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            shouldShowLabelInBottom: true,
            separatorHeight: 30
        });
        else kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
        var login_inputparam = {};
        login_inputparam["serviceID"] = "login";
        login_inputparam["url"] = "siebel.tcpip.none.none://23.21.131.36:2321/SBA_81/SCCObjMgr_enu";
        login_inputparam["username"] = frmLogin.txbUName.text;
        login_inputparam["password"] = frmLogin.txbPassword.text;
        login_inputparam["language"] = "enu";
        login_inputparam["httpheaders"] = {};
        login_inputparam["httpconfigs"] = {};
        login = appmiddlewareinvokerasync(login_inputparam, frmLogin_btnLoginSubmission_onClick_response_Tablet);
    }
}