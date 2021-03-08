$(document).ready(function () {
  $(".single-select").select2({ placeholder: "@General.Choose" });
});

$(function () {
  $("#status-toggle").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    style: "status_btn",
    height: 20,
  });
});

// AG-grid functions

self.actionCellRenderer = function () {};
self.actionCellRenderer.prototype = {
  init: function (params) {
    this.actionsButton = document.createElement("div");
    this.actionsButton.innerHTML = `
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            تفعيل <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#editModal"
                  >تعديل التفعيل</button>
                </li>
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#fingerPrintModal"
                  >تجميد</button>
                </li>
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#fingerPrintModal"
                  >تجميد اضافي</button>
                </li>
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#fingerPrintModal"
                  >فك تجميد</button>
                </li>
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#fingerPrintModal"
                  >تمديد</button>
                </li>
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#fingerPrintModal"
                  >الغاء</button>
                </li>
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#fingerPrintModal"
                  >ترقية</button>
                </li>
                <li>
                  <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#fingerPrintModal"
                  >تحويل</button>
                </li>
            </ul>
        </div>
        `;
  },
  getGui: function () {
    return this.actionsButton;
  },
  refresh: function () {
    return true;
  },
  destroy: function () {
    $(this.actionsButton).remove();
  },
};

self.attach = function () {};
self.attach.prototype = {
  init: function (params) {
    this.attachButton = document.createElement("div");
    this.attachButton.innerHTML = `
    <ul class="attach-list text-center">
      <li>
        <button
        type="button"
        class="btn green-color"
        data-toggle="modal"
        data-target="#fingerPrintModal"
        ><i class="fas fa-paperclip mx-1"></i>العقد</button>
      </li>
      <li>
        <button
        type="button"
        class="btn"
        data-toggle="modal"
        data-target="#fingerPrintModal"
        ><i class="fas fa-paperclip mx-1"></i>مرفقات اخرى</button>
      </li>
    </ul>
        `;
  },
  getGui: function () {
    return this.attachButton;
  },
  refresh: function () {
    return true;
  },
  destroy: function () {
    $(this.attachButton).remove();
  },
};

self.actions = function () {};
self.actions.prototype = {
  init: function (params) {
    this.actionsButton = document.createElement("div");
    this.actionsButton.innerHTML = `
    <ul class="actions-list list-inline">
        <li class="list-inline-item"><a><i class="fas fa-thumbs-up"></i><p>تنفيذ الاجراء</p></a></li>
        <li class="list-inline-item"><a><i class="fas fa-dollar-sign"></i><p>تحصيل</p></a></li>
        <li class="list-inline-item"><a><i class="fas fa-eye"></i><p>عرض</p></a></li>
    </ul>
        `;
  },
  getGui: function () {
    return this.actionsButton;
  },
  refresh: function () {
    return true;
  },
  destroy: function () {
    $(this.actionsButton).remove();
  },
};

self.actions2 = function () {};
self.actions2.prototype = {
  init: function (params) {
    this.actions2Button = document.createElement("div");
    this.actions2Button.innerHTML = `
    <ul class="actions-list list-inline">
        <li class="list-inline-item info-color"><a href="#"><i class="fas fa-paperclip"></i><p>مرفقات</p></a></li>
        <li class="list-inline-item"><a href="#"><i class="fas fa-eye"></i><p>عرض</p></a></li>
        <li class="list-inline-item warning-color"><a href="#"><i class="fas fa-pen"></i><p>تعديل</p></a></li>
        <li class="list-inline-item danger-color"><a href="#"><i class="fas fa-trash-alt"></i><p>الغاء </p></a></li>
    </ul>
        `;
  },
  getGui: function () {
    return this.actions2Button;
  },
  refresh: function () {
    return true;
  },
  destroy: function () {
    $(this.actions2Button).remove();
  },
};

// specify the columns
const columnDefs = [
  { headerName: "م", field: "id", resizable: true, minWidth: 50 },
  {
    headerName: "الفرع",
    field: "branch",
    resizable: true,
    minWidth: 100,
  },
  {
    headerName: "رقم الفاتورة",
    field: "recpNo",
    resizable: true,
    minWidth: 100,
  },
  {
    headerName: "رقم الخدمة",
    field: "serviceNo",
    resizable: true,
    minWidth: 100,
  },
  { headerName: "الخدمة", field: "service", resizable: true, minWidth: 200 },
  {
    headerName: "تاريخ الشراء",
    field: "datePurchase",
    resizable: true,
    minWidth: 140,
  },
  {
    headerName: "تاريخ التفعيل",
    field: "dateActive",
    resizable: true,
    minWidth: 140,
  },
  {
    headerName: "تاريخ الانتهاء",
    field: "dateExpire",
    resizable: true,
    minWidth: 140,
  },
  {
    headerName: "قيمة الاشتراك",
    field: "value",
    resizable: true,
    minWidth: 130,
  },
  { headerName: "المدفوع", field: "paid", resizable: true, minWidth: 100 },
  { headerName: "المتبقي", field: "remain", resizable: true, minWidth: 100 },
  {
    headerName: "الاجراء",
    field: "action",
    resizable: true,
    minWidth: 100,
    cellRenderer: actionCellRenderer,
    suppressSorting: true,
  },
  { headerName: "الحالة", field: "status", resizable: true, minWidth: 100 },
  {
    headerName: "المرفقات",
    field: "attach",
    resizable: true,
    minWidth: 100,
    cellRenderer: attach,
    suppressSorting: true,
  },
  {
    headerName: "اجراءات",
    field: "actions",
    resizable: true,
    minWidth: 200,
    cellRenderer: actions,
    suppressSorting: true,
  },
];

// specify the data
const dataSource = [
  {
    id: "1",
    branch: "",
    recpNo: "A-12342",
    serviceNo: "302",
    service: "12-month gym mem",
    datePurchase: "12-2-2020",
    dateActive: "18-2-2020",
    dateExpire: "18-5-2020",
    value: "3500 R.S",
    paid: "3000",
    remain: "500",
    status: "نشط",
    attach: "Celica",
    actions: 35000,
    height: 100,
  },
  {
    id: "1",
    branch: "",
    recpNo: "A-12342",
    serviceNo: "302",
    service: "12-month gym mem",
    datePurchase: "12-2-2020",
    dateActive: "18-2-2020",
    dateExpire: "18-5-2020",
    value: "3500 R.S",
    paid: "3000",
    remain: "500",
    status: "منتهي",
    attach: "Celica",
    actions: 35000,
    height: 100,
  },
];

var gridOptions = {
  columnDefs: columnDefs,
  rowData: dataSource,
  enableRowGroup: true,
  enableColResize: true,
  enableFilter: true,
  enableSorting: true,
  enableFilter: true,
  enableRtl: true,
  suppressRowTransform: true,
  // domLayout: "autoHeight",
  onGridReady: function (params) {
    params.api.sizeColumnsToFit();
  },
};

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

// services index grid
// specify the columns
const columnDefs3 = [
  {
    headerName: "م",
    field: "id",
    resizable: true,
    minWidth: 50,
    sortable: true,
  },
  {
    headerName: "الكود",
    field: "branch",
    resizable: true,
    minWidth: 100,
    sortable: true,
  },
  {
    headerName: "إسم التصنيف",
    field: "recpNo",
    resizable: true,
    minWidth: 100,
    sortable: true,
  },
  {
    headerName: "نوع التصنيف",
    field: "serviceNo",
    resizable: true,
    minWidth: 100,
    sortable: true,
  },
  {
    headerName: "الحالة",
    field: "recpNo",
    resizable: true,
    minWidth: 100,
    sortable: true,
  },
  {
    headerName: "تاريخ التفعيل",
    field: "serviceNo",
    resizable: true,
    minWidth: 100,
    sortable: true,
  },
  {
    headerName: "اجراءات",
    field: "actions",
    resizable: true,
    minWidth: 200,
    cellRenderer: actions2,
    suppressSorting: true,
  },
];

// specify the data
const dataSource3 = [
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
var gridOptions3 = {
  columnDefs: columnDefs3,
  rowData: dataSource3,
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

// services with grid 4
self.code = function () {};
self.code.prototype = {
  init: function (params) {
    this.codeButton = document.createElement("div");
    this.codeButton.innerHTML = `12342
    <button
        type="button"
        class="btn"
        data-toggle="modal"
        data-target="#codeModal"
        ><i class="fas fa-file-alt basic_text_color" style="font-size: 1.2rem;
        margin: 0 5px;"></i></button>`;
  },
  getGui: function () {
    return this.codeButton;
  },
  refresh: function () {
    return true;
  },
  destroy: function () {
    $(this.codeButton).remove();
  },
};
// specify the columns
const columnDefs4 = [
  {
    headerName: "حسابات الأستاذ",
    field: "id",
    resizable: true,
    minWidth: 50,
    sortable: true,
  },
  {
    headerName: "كود الحساب",
    field: "codeNo",
    resizable: true,
    minWidth: 150,
    cellRenderer: code,
    suppressSorting: true,
    editable: true,
  },
  {
    headerName: "إسم الحساب",
    field: "recpNo",
    resizable: true,
    minWidth: 100,
    sortable: true,
  },
];

// specify the data
const dataSource4 = [
  {
    id: "حساب إيرادات الخدمة",
    codeNo: "12342",
    recpNo: "إسم الحساب المختار",
    height: 100,
  },
  {
    id: "حساب مرتجع الخدمة",
    codeNo: "12342",
    recpNo: "إسم الحساب المختار",
    height: 100,
  },
];
var gridOptions4 = {
  columnDefs: columnDefs4,
  rowData: dataSource4,
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
  var gridDiv1 = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv1, gridOptions);

  var gridDiv2 = document.querySelector("#infoGrid");
  new agGrid.Grid(gridDiv2, gridOptions2);

  var gridDiv3 = document.querySelector("#servicesGrid");
  new agGrid.Grid(gridDiv3, gridOptions3);

  var gridDiv4 = document.querySelector("#AccountsGrid");
  new agGrid.Grid(gridDiv4, gridOptions4);
});
