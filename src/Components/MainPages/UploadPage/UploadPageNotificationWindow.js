import { NotificationWindow } from "Components/NotificationWindow.js";

import "Styles/ColoredText.css"

export const UploadNotificationState = {
  IDLE: 'idle',
  SUCCESS: 'success',
  ERROR: 'error'
};

const mainTextSucess = "sucess"
const mainTextError = "upload failed"

const headerTextSucess = "yessssss"
const headerTextError = "nooooooo"

export const UploadPageNotificationWindow = ({notificationState}) => {


	const isShowingNotification = () => {
		console.log(notificationState !== UploadNotificationState.IDLE)
		console.log(notificationState)
		return notificationState !== UploadNotificationState.IDLE
	}



	const getNotificationData = () => {
		let notificationData = {
			headerText: "",
			mainText: "",
			mainTextClassName: ""
		}
		if (notificationState === UploadNotificationState.SUCCESS) {
			notificationData.mainText = mainTextSucess;
			notificationData.headerText = headerTextSucess;
			notificationData.mainTextColorClassName = 'green-text '
		} else if (notificationState === UploadNotificationState.ERROR) {
			notificationData.mainText = mainTextError;
			notificationData.headerText = headerTextError;
			notificationData.mainTextColorClassName = 'red-text '
		} else {
			console.log("UploadPageNotificationWindow:getNotificationData: unexpected state :", notificationState)
		}
		return notificationData

	}

	return (
		isShowingNotification() && (<NotificationWindow className="upload-notification-window" mainTextClassName="upload-page-notification-main-text" notificationData={getNotificationData()} />)
	)
}
