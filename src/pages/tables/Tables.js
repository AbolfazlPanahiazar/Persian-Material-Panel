import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["ابوالفضل پناهی آذر", "مهندس کامپیوتر", "۳۳", "تهران"],
  ["مهدی علوی", "مهندس کامپیوتر", "۲۵", "قم"],
  ["سارا قاسمی", "مهندس کامپیوتر", "۴۲", "البرز"],
  ["محمد فرخاری", "مهندس کامپیوتر", "۱۹", "زنجان"],
  ["علی جعفری", "مهندس کامپیوتر", "۲۵", "قزوین"],
  ["مهناز محمودی", "طراح", "۳۳", "همدان"],
  ["حسین امیری", "طراح", "۲۵", "اصفحان"],
  ["علیرضا عامری", "طراح", "۴۲", "مازندران"],
  ["ایلیا پناهی", "طراح", "۲۵", "گیلان"],
  ["اردشیر ازاد", "بازاریاب", "۳۳", "گلستان"],
  ["امیرمهدی کشن زارع", "بازاریاب", "۱۹", "خراسان رضوی"],
  ["فرزاد عطایی", "بازاریاب", "۳۳", "سیستان و بلوچستان"],
  ["علیرضا کاظمی", "بازاریاب", "۱۹", "بوشهر"],
  ["فاطمه گیلک", "آزاد", "۳۳", "خوزستان"],
  ["زهرا موحد", "آزاد", "۲۵", "کرمان"],
];

export default function Tables() {
  return (
    <>
      <PageTitle title="جدول ها" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="جدول MUI"
            data={datatableData}
            columns={["نام", "شغل", "سن", "استان"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="جدول متریال" upperTitle noBodyPadding>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
