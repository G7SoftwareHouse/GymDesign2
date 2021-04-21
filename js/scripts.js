$(document).ready(function () {

  $("[data-toggle=popover]").popover({
    html: true,
    trigger: "focus",
    content: function () {
      var content = $(this).attr("data-popover-content");
      return $(content).children(".popover-body").html();
    },
  });
  /*navbar scroll*/
  var prevScrollpos = window.pageYOffset,
    bH = $(window).height(),
    header = $("#header").height();
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var $height = $(window).scrollTop();
    if ($height > 50) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
        // $(".vertical_tabs .tab").css("top", header);
        // $(".vertical_tabs .tab").css("min-height", bH - header);
      } else if (header > 100) {
        document.getElementById("header").style.top = "-68px";
        // $(".vertical_tabs .tab").css("top", header - 68);
        // $(".vertical_tabs .tab").css("min-height", bH - (header - 68));
      }
      prevScrollpos = currentScrollPos;
    }
  };

  // fixed sidebar
  $(function () {
    "use strict";
      header = $("#header").innerHeight();
    $("main").css("margin-top", header);
  });

  // slick slider
  $(".slick_slider").slick({
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // select 2 input
  $(".single-select").select2({ placeholder: "@General.Choose" });
  $("#branches").select2();
  $("#branch").select2();
  $("#class").select2();
  $("#captin").select2();
  $("#place").select2();
  $("#duration").select2();
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
  $("#customer").select2();
  $("#responsible").select2();
  $("#Bcode").select2();
  $("#chCategories").select2();
  $("#reservType").select2();
  $("#infoType").select2();
  

  // click down button
  $(".btn_click_down").on("click", function () {
    $(".total_sale").slideToggle();
  });
});

$(function () {
  $("#status-toggle").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    style: "status_btn",
    height: 20,
  });
  $("#status-toggle-2").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    style: "status_btn",
    height: 20,
  });
  $("#status-toggle-3").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    style: "status_btn",
    height: 20,
  });
  $("#status-toggle-4").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    style: "status_btn",
    height: 20,
  });
  $("#status-toggle").change(function () {
    $("#activeModal").modal("show");
  });
  $("#status-toggle-2").change(function () {
    $("#activeModal").modal("show");
  });
  $("#status-toggle-3").change(function () {
    $("#activeModal").modal("show");
  });
  $("#status-toggle-4").change(function () {
    $("#activeModal").modal("show");
  });
  $("#toggle-btn").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    height: 20,
  });
});

/* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
function openSearch() {
  document.getElementById("search-dropdown").classList.add("show");
}

$(document).mouseup(function (e) {
  var container = $("#search-dropdown");
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("show");
  }
});

$(".tabbable .nav-tabs .nav-item .nav-link").click(function () {
  $(".customer_section .nav-tabs.d-flex").removeClass("showTab");
});

$("#customerInfo-tab").click(function () {
  $(".customer_section .nav-tabs.d-flex").addClass("showTab");
});

$(".in_follows").hide();
$("#cardOrder-tab").click(function () {
  $(".not_follows").show();
  $(".in_follows").hide();
});
$("#follows-tab").click(function () {
  $(".in_follows").show();
  $(".not_follows").hide();
});

// send whatsUp
$(".send-text").show();
$(".finish-send-text").hide();
$(".send_whatsapp").click(function () {
  $(this).toggleClass("send text-danger");
  $(".send-text").toggle();
  $(".finish-send-text").toggle();
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
  wrapText: true,
  sortable: true,
  resizable: true,
  rowDragManaged: true,
  animateRows: true,
  rowHeight: 45,
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
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  var gridDiv2 = document.querySelector("#infoGrid");
  new agGrid.Grid(gridDiv2, gridOptions2);
});
