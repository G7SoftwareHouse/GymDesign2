$(document).ready(function () {
  $(".single-select").select2({ placeholder: "@General.Choose" });
  $("#branches").select2();
  $("#nationality").select2();
  $("#gender").select2();
  $("#city").select2();
  $("#specialest").select2();
  $("#QStatus").select2();
  $("#roundK").select2();
  $("#shareBy").select2();
  $("#status").select2();
  $("#bestTime").select2();
  $("#typeOfDiscount").select2();
  $("#typeOfDiscount2").select2();
  $("#typeOfDiscount3").select2();
  $("#allocation").select2();
  $("#categories").select2();
  $("#services").select2();
  $("#choice").select2();
});

// date inputs format
// $("input")
//   .on("change", function () {
//     this.setAttribute(
//       "data-date",
//       moment(this.value, "YYYY-MM-DD").format(
//         this.getAttribute("data-date-format")
//       )
//     );
//   })
//   .trigger("change");

$(function () {
  $("#status-toggle").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    style: "status_btn",
    height: 20,
  });
  $("#toggle-btn").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    height: 20,
  });
});

// AG-grid functions
// specify the columns
const columnDefs2 = [
  { headerName: "مدة الخدمة", field: "id", resizable: true, minWidth: 50 },
  {
    headerName: "عدد الجلسات",
    field: "branch",
    resizable: true,
    minWidth: 100,
  },
  {
    headerName: "المسئول",
    field: "recpNo",
    resizable: true,
    minWidth: 100,
  },
  {
    headerName: "المدرب",
    field: "serviceNo",
    resizable: true,
    minWidth: 100,
  },
  {
    headerName: "اجراءات",
    field: "actions",
    resizable: true,
    minWidth: 200,
    suppressSorting: true,
  },
];

// specify the data
const dataSource2 = [
  {
    id: "1",
    branch: "",
    recpNo: "A-12342",
    serviceNo: "302",
    service: "12-month gym mem",
    datePurchase: "12-2-2020",
    height: 100,
  },
];
var gridOptions2 = {
  columnDefs: columnDefs2,
  rowData: dataSource2,
  enableRowGroup: true,
  enableColResize: true,
  enableFilter: true,
  enableSorting: true,
  enableFilter: true,
  enableRtl: true,
  suppressRowTransform: true,
  domLayout: "autoHeight",
  onGridReady: function (params) {
    params.api.sizeColumnsToFit();
  },
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  var gridDiv2 = document.querySelector("#infoGrid");
  new agGrid.Grid(gridDiv2, gridOptions2);
});
