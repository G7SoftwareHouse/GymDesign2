$(function () {
  // 6 create an instance when the DOM is ready
  $("#jstree_2").jstree();
  // 7 bind to events triggered on the tree
  $("#jstree_2").on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });
  // 8 interact with the tree - either way is OK
  $("button").on("click", function () {
    $("#jstree_2").jstree(true).select_node("child_node_1");
    $("#jstree_2").jstree("select_node", "child_node_1");
    $.jstree.reference("#jstree_2").select_node("child_node_1");
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
      <li class="list-inline-item"><a href="#" title="تنفيذ الاجراء"><i class="fas fa-thumbs-up mr-1"></i></a></li>
      <li class="list-inline-item"><a href="#" title="تحصيل"><i class="fas fa-dollar-sign mr-1"></i></a></li>
      <li class="list-inline-item"><a href="#" title="عرض"><i class="fas fa-eye mr-1"></i></a></li>
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
    this.codeButton.innerHTML = `<input readonly type="text" style="color: black" class="form-control col openPop" /> <button
      type="button"
      class="btn code-icon-btn"
      data-toggle="modal"
      data-target="#codeModal"
      ><i class="fas fa-file-alt basic_text_color" style="font-size: 1.2rem;
      margin: 0 5px;"></i></button>
    `;
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

self.checkBox = function () {};
self.checkBox.prototype = {
  init: function (params) {
    this.checkBoxButton = document.createElement("div");
    this.checkBoxButton.innerHTML =
      '<div class="form-group form-check m-0"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check out</label></div>';
  },
  getGui: function () {
    return this.checkBoxButton;
  },
  refresh: function () {
    return true;
  },
  destroy: function () {
    $(this.checkBoxButton).remove();
  },
};


self.getDatePicker = function () {};
self.getDatePicker.prototype = {
  init: function (params) {
    this.getDatePickerButton = document.createElement("div");
    this.getDatePickerButton.innerHTML =
      '<input type="date" style="width: 100%;height: 100%;border: 0;background:none">';
  },
  getGui: function () {
    return this.getDatePickerButton;
  },
  refresh: function () {
    return true;
  },
  destroy: function () {
    $(this.getDatePickerButton).remove();
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
    minWidth: 120,
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
  {
    headerName: "الحالة",
    field: "status",
    resizable: true,
    minWidth: 160,
    cellRenderer: checkBox,
  },
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
    resizable: true,
    minWidth: 140,
    cellRenderer: getDatePicker,
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
    service: "12-month gym mem 12-month gym mem 12-month gym mem 12-month gym mem",
    dateActive: "18-2-2020",
    dateExpire: "18-5-2020",
    value: "3500 R.S",
    paid: "3000",
    remain: "500",
    status: "نشط",
    // height: 100,
  },
  // {
  //   id: "1",
  //   gender: "انثي",
  //   recpNo: "A-12342",
  //   codeNo: "12342",
  //   serviceNo: "302",
  //   service: "12-month gym mem",
  //   dateActive: "18-2-2020",
  //   dateExpire: "18-5-2020",
  //   value: "3500 R.S",
  //   paid: "3000",
  //   remain: "500",
  //   status: "منتهي",
  //   // height: 100,
  // },
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
  domLayout: "autoHeight",
  wrapText: true,
  sortable: true,
  resizable: true,
  pagination: true,
  paginationPageSize: 10,
  rowDragManaged: true,
  animateRows: true,
  // rowHeight: 45,
  defaultColDef: {
    flex: 1,
    autoHeight: true,
    wrapText: true,
    sortable: true,
    resizable: true,
  },
  onGridReady: function (params) {
    params.api.sizeColumnsToFit();
  },
  components: {
    genderCellRenderer: GenderCellRenderer,
  },
  onCellValueChanged: onCellValueChanged,
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

