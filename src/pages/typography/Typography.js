import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="تایپوگرافی" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="عنوان ها" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" className={classes.text}>
                h1. متن آزمایشی
              </Typography>
              <Typography variant="h2" className={classes.text}>
                h2. متن آزمایشی
              </Typography>
              <Typography variant="h3" className={classes.text}>
                h3. متن آزمایشی
              </Typography>
              <Typography variant="h4" className={classes.text}>
                h4. متن آزمایشی
              </Typography>
              <Typography variant="h5" className={classes.text}>
                h5. متن آزمایشی
              </Typography>
              <Typography variant="h6">h6. متن آزمایشی</Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="رنگ ها" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" color="primary" className={classes.text}>
                primary متن آزمایشی
              </Typography>
              <Typography variant="h2" color="success" className={classes.text}>
                success متن آزمایشی
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.text}
              >
                secondary متن آزمایشی
              </Typography>
              <Typography variant="h4" color="warning" className={classes.text}>
                warning متن آزمایشی
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                colorBrightness="light"
                className={classes.text}
              >
                primary light متن آزمایشی
              </Typography>
              <Typography variant="h6" color="info">
                info متن آزمایشی
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="تنظیمات پایه ای" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text}> متن آزمایشی</Typography>
              <Typography className={classes.text} weight="light">
                weight light متن آزمایشی
              </Typography>
              <Typography className={classes.text} weight="medium">
                weight medium متن آزمایشی
              </Typography>
              <Typography className={classes.text} weight="bold">
                weight bold متن آزمایشی
              </Typography>
              <Typography className={classes.text}>
                BASIC UPPERCASE TEXT
              </Typography>
              <Typography className={classes.text}>
                basic lowercase text
              </Typography>
              <Typography className={classes.text}>
                Basic Capitalized Text
              </Typography>
              <Typography>
                <i>Basic Cursive Text</i>
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="اندازه متن" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text} size="sm">
                متن آزمایشی Typography SM
              </Typography>
              <Typography className={classes.text}>
                متن آزمایشی Typography Regular
              </Typography>
              <Typography className={classes.text} size="md">
                متن آزمایشی Typography MD
              </Typography>
              <Typography className={classes.text} size="xl">
                متن آزمایشی Typography XL
              </Typography>
              <Typography className={classes.text} size="xxl">
                متن آزمایشی Typography XXL
              </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
