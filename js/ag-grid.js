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

self.code = function () {};
self.code.prototype = {
  init: function (params) {
    this.codeButton = document.createElement("div");
    this.codeButton.innerHTML = `12342
    <button
        type="button"
        class="btn"
        data-toggle="modal"
        data-target="#editModal"
        ><i class="fas fa-file-alt" style="font-size: 1.2rem;
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

function GenderCellRenderer() {}

GenderCellRenderer.prototype.init = function (params) {
  this.eGui = document.createElement("span");
  var img = params.value === "Male" ? "male.png" : "female.png";
  this.eGui.innerHTML =
    '<img src="https://www.ag-grid.com/example-assets/genders/' +
    img +
    '"/> ' +
    params.value;
};

GenderCellRenderer.prototype.getGui = function () {
  return this.eGui;
};

// specify the columns
const columnDefs = [
  {
    headerName: "م",
    field: "id",
    resizable: true,
    minWidth: 50,
  },
  {
    headerName: "النوع",
    field: "gender",
    cellRenderer: "genderCellRenderer",
    cellEditor: "agRichSelectCellEditor",
    cellEditorParams: {
      values: ["ذكر", "انثي"],
      cellRenderer: "genderCellRenderer",
    },
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
];

// specify the data
const dataSource = [
  {
    id: "1",
    gender: "انثي",
    recpNo: "A-12342",
    codeNo: "12342",
    serviceNo: "302",
    service: "12-month gym mem",
    datePurchase: "12-2-2020",
    dateActive: "18-2-2020",
    dateExpire: "18-5-2020",
    value: "3500 R.S",
    paid: "3000",
    remain: "500",
    status: "نشط",
    height: 100,
  },
  {
    id: "1",
    gender: "انثي",
    recpNo: "A-12342",
    codeNo: "12342",
    serviceNo: "302",
    service: "12-month gym mem",
    datePurchase: "12-2-2020",
    dateActive: "18-2-2020",
    dateExpire: "18-5-2020",
    value: "3500 R.S",
    paid: "3000",
    remain: "500",
    status: "منتهي",
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
  editable: true,
  defaultColDef: {
    flex: 1,
    minWidth: 130,
    editable: true,
    resizable: true,
  },
  components: {
    genderCellRenderer: GenderCellRenderer,
  },
  onCellValueChanged: onCellValueChanged,
  // domLayout: "autoHeight",
  onGridReady: function (params) {
    params.api.sizeColumnsToFit();
  },
};

function countyToCityMap(match) {
  var map = {
    Ireland: ["Dublin", "Cork", "Galway"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston"],
  };

  return map[match];
}

function onCellValueChanged(params) {
  var colId = params.column.getId();

  if (colId === "country") {
    var selectedCountry = params.data.country;
    var selectedCity = params.data.city;
    var allowedCities = countyToCityMap(selectedCountry);
    var cityMismatch = allowedCities.indexOf(selectedCity) < 0;

    if (cityMismatch) {
      params.node.setDataValue("city", null);
    }
  }
}

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  var gridDiv1 = document.querySelector("#Grid");
  new agGrid.Grid(gridDiv1, gridOptions);
});
