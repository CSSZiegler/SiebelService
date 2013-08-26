/*****************************************************************
*	Name    : showFrmLogin
*	Author  : Kony
*	Purpose : This function is used to invoke the frmLogin form.
*****************************************************************/
function showFrmLogin(){
	frmLogin.show();
}


/*****************************************************************
*	Name    : frmLogin_preshow
*	Author  : Kony
*	Purpose : This function is used to set visibility to btnTimeSheetEntries and reset the lblSeesionID.
*****************************************************************/
function frmLogin_preshow() {
    frmLoginSucces.lblSeesionID.text = "";
    frmLoginSucces.btnTimeSheetEntries.setVisibility(false);
}


/*****************************************************************
*	Name    : frmLogin_btnLoginSubmission_onClick_response
*	Author  : Kony
*	Purpose : This function is used to check status and according to 
* 			  that set sessionID to lblSeesionID and nevigate to frmLoginSucces.
*****************************************************************/
function frmLogin_btnLoginSubmission_onClick_response(status, login) {
	kony.print(status);
    if (status == 400) {
    		
    			frmLoginSucces.lblSeesionID.text = login.sessionid;
        		frmLoginSucces.lblLoginSuccessConfirm.text = "";
        		frmLoginSucces.btnRetry.setVisibility(false);
        		frmLoginSucces.show();			
    }
}


/*****************************************************************
*	Name    : handleAlert
*	Author  : Kony
*	Purpose : This function is used to invoke the frmLogin form.
*****************************************************************/
function handleAlert(response)
{
	frmLogin.show();
}


/*****************************************************************
*	Name    : frmLogin_login
*	Author  : Kony
*	Purpose : This function is used to do login varification.
*****************************************************************/
function frmLogin_login(){
	if(frmLogin.txbUName.text=="" || frmLogin.txbUName.text==null || frmLogin.txbPassword.text=="" || frmLogin.txbPassword.text==null) {
		//Defining basicConf parameter for alert
		var basicConf = {message: "Username/Password field can't be empty.",alertType: constants.
		ALERT_TYPE_INFO,alertTitle: "Empty Field",yesLabel:"OK",
		noLabel: "no", alertHandler: handleAlert};
		//Defining pspConf parameter for alert
		var pspConf = {};
		//Alert definition
		var infoAlert = kony.ui.Alert(basicConf,pspConf);
	}
	else {
		if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") 
			kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
	        		shouldShowLabelInBottom: true,
	        		separatorHeight: 30
	    		});
	    else 
	    	kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
	    var login_inputparam = {};
	    login_inputparam["serviceID"] = "login";
	    login_inputparam["url"] = "siebel.tcpip.none.none://23.21.131.36:2321/SBA_81/SCCObjMgr_enu";
	    login_inputparam["username"] = frmLogin.txbUName.text;
	    login_inputparam["password"] = frmLogin.txbPassword.text;
	    login_inputparam["language"] = "enu";
	    login_inputparam["httpheaders"] = {};
	    login_inputparam["httpconfigs"] = {};
	    login = appmiddlewareinvokerasync(login_inputparam, frmLogin_btnLoginSubmission_onClick_response);
    }	
}


/*****************************************************************
*	Name    : frmLoginSucces_preshow
*	Author  : Kony
*	Purpose : This function is used to dismiss loading screen.
*****************************************************************/
function frmLoginSucces_preshow() {
    kony.application.dismissLoadingScreen();
}


/*****************************************************************
*	Name    : frmActivity_preshow
*	Author  : Kony
*	Purpose : This function is used to dismiss loading screen before frmActivity form will show.
*****************************************************************/
function frmActivity_preshow() {
    kony.application.dismissLoadingScreen();   
}


/*****************************************************************
*	Name    : frmLoginSucces_btnRetry
*	Author  : Kony
*	Purpose : This function is used to reset txbUName and TXBPassword and invoke frmLogin form.
*****************************************************************/
function frmLoginSucces_btnRetry(){
	frmLogin.txbUName.text="";
	frmLogin.txbPassword.text="";
	frmLogin.show();
}

