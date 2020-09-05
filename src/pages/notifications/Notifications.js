import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import classnames from "classnames";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../../components/Notification";
import { Typography, Button } from "../../components/Wrappers/Wrappers";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default function NotificationsPage(props) {
  var classes = useStyles();

  // local
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);

  return (
    <>
      <PageTitle title="اعلان ها" />
      <Grid container spacing={8}>
        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
        />
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="تنظیمات ساختار" disableWidgetMenu>
            <Typography>
              چند ساختار و پوزیشن متفاوت برای اعلان ها موجود است. شما میتوانید
              با کلیک روی هر بخش آن را انتخاب کنید
            </Typography>
            <div className={classes.layoutContainer}>
              <div className={classes.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(0)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 0,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(1)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 1,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(2)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 2,
                  })}
                />
              </div>
              <Typography className={classes.layoutText} size="md">
                محل ورود را انتخاب کنید
              </Typography>
              <div className={classes.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(3)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 3,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(4)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 4,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(5)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 5,
                  })}
                />
              </div>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="انواع اعلان" disableWidgetMenu>
            <Typography>
              انواع اعلان مختلفی برای کاربرد های مختلفی موجود است. کلاس های
              اختصاصی هم قابل استفاده هستند
            </Typography>
            <div className={classes.buttonsContainer}>
              <Button
                variant="contained"
                color="primary"
                style={{ fontFamily: "Shabnam" }}
                onClick={() => handleNotificationCall("info")}
                className={classnames(classes.notificationCallButton)}
              >
                پیام اطلاع رسانی Info
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ fontFamily: "Shabnam" }}
                onClick={() => handleNotificationCall("error")}
                className={classnames(classes.notificationCallButton)}
              >
                خطا ها و تلاش مجدد Error
              </Button>
              <Button
                variant="contained"
                color="success"
                style={{ fontFamily: "Shabnam" }}
                onClick={() => handleNotificationCall("success")}
                className={classnames(classes.notificationCallButton)}
              >
                اعلان موفقیت Success
              </Button>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="استفاده" disableWidgetMenu>
            <Typography>
              اعلان ها به کمک{" "}
              <a href="https://github.com/fkhadra/react-toastify">
                react-toastify
              </a>{" "}
              ساخته شده اند
            </Typography>
            <div className={classes.codeContainer}>
              <SyntaxHighlighter
                className={classes.codeComponent}
                language="javascript"
                style={docco}
              >{`
  // import needed components, functions and styles
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const Page = () => {
    <div>
      <ToastContainer />
      <button onClick={() => toast('Toast Message')}>
        show notification
      </button>
    </div>
  };
            `}</SyntaxHighlighter>
              <Typography variant="caption" style={{ direction: "rtl" }}>
                برای اطلاعات بیشتر به documentation مراجعه کنید
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="مثال انواع اعلان ها" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              shadowless
              type="message"
              message="ممنون بابت چک کردن پیام های ما - message"
              variant="contained"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="feedback"
              message="یه بازخورد جدید ثبت شد - feedback"
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="customer"
              message="ثبت نام جدید - customer"
              variant="contained"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="shipped"
              message="سفارش فرستاده شد - shipped"
              variant="contained"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="delivered"
              message="سفارش تحویل داده شد - delivered"
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="defence"
              message="اعلان پیشگیری - defence"
              variant="contained"
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="مثال انواع اعلان ها" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="message"
              message="ممنون بابت چک کردن پیام های ما - message"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message="یه بازخورد جدید ثبت شد - feedback"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="customer"
              message="ثبت نام جدید - customer"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message="سفارش فرستاده شد - shipped"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="delivered"
              message="سفارش تحویل داده شد - delivered"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="defence"
              message="اعلان پیشگیری - defence"
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="Notification Types Examples" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="message"
              message="ممنون بابت چک کردن پیام های ما - message"
              variant="rounded"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message="یه بازخورد جدید ثبت شد - feedback"
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="customer"
              message="ثبت نام جدید - customer"
              variant="rounded"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message="سفارش فرستاده شد - shipped"
              variant="rounded"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="delivered"
              message="سفارش تحویل داده شد - delivered"
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="defence"
              message="اعلان پیشگیری - defence"
              variant="rounded"
              color="info"
            />
          </Widget>
        </Grid>
      </Grid>
    </>
  );

  // #############################################################
  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "success",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "success",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;

    switch (notificationType) {
      case "info":
        componentProps = {
          type: "feedback",
          message: "New user feedback received",
          variant: "contained",
          color: "primary",
        };
        break;
      case "error":
        componentProps = {
          type: "message",
          message: "Message was not sent!",
          variant: "contained",
          color: "secondary",
          extraButton: "Resend",
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: "The item was shipped",
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
