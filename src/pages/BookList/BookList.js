import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";

const booksData = [
  {
    name: "کتاب اول",
    price: 20000,
    publisher: "ناشر ۱",
    author: "ابوالفضل پناهی",
  },
  {
    name: "کتاب دوم",
    price: 45000,
    publisher: "ناشر ۱",
    author: "ابوالفضل پناهی",
  },
  {
    name: "کتاب سوم",
    price: 32000,
    publisher: "ناشر ۱",
    author: "ابوالفضل پناهی",
  },
  {
    name: "کتاب اول",
    price: 130000,
    publisher: "ناشر ۱",
    author: "ابوالفضل پناهی",
  },
  {
    name: "کتاب دوم",
    price: 51000,
    publisher: "ناشر ۱",
    author: "ابوالفضل پناهی",
  },
  {
    name: "کتاب سوم",
    price: 20000,
    publisher: "ناشر ۱",
    author: "ابوالفضل پناهی",
  },
];

function BookList() {
  const transform = data => {
    return data.map(item => {
      return [item.name, item.price, item.publisher, item.author];
    });
  };

  return (
    <div>
      <PageTitle title="لیست کتاب ها موجود در انبار" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="کتاب ها"
            data={transform(booksData)}
            columns={["نام کتاب", "قیمت", "ناشر", "نویسنده"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default BookList;
