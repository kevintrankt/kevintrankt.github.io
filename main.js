(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-layout__header-row {\n    padding: 0 16px 0 24px;\n}\n.mdl-layout__header{\n    position: fixed;\n}\n.content{\n    padding:64px 24px 0px 24px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n  <div class=\"mdl-layout__header\">\n    <div class=\"mdl-layout__header-row\">\n      <!-- Header Title -->\n      <span class=\"mdl-layout-title\">CSV Reader</span>\n    </div>\n  </div>\n  <div class=\"content\">\n    <!-- User Inputs -->\n    <app-inputs></app-inputs>\n    <!-- Outputted Data -->\n    <app-linechart></app-linechart>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs/inputs.component */ "./src/app/inputs/inputs.component.ts");
/* harmony import */ var _linechart_linechart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linechart/linechart.component */ "./src/app/linechart/linechart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_4__["InputsComponent"],
                _linechart_linechart_component__WEBPACK_IMPORTED_MODULE_5__["LinechartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/inputs/inputs.component.css":
/*!*********************************************!*\
  !*** ./src/app/inputs/inputs.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".load-csv-textfield {\n    padding-right:16px;\n    width:70%;\n    max-width: 300px;\n}\n\n#select-toggle {\n    font-family: \"Helvetica\",\"Arial\",sans-serif;\n    font-size:16px;\n    width: 100%;\n    display: none;\n    position: absolute;\n    z-index: 2;\n    border: none;\n    padding-top: 4px;\n}\n\n.date-label {\n    width: 100px;\n}\n\n.date-filter{\n    float: right;\n}\n\n.calendar-icon{\n    position: relative;\n    top: .35em;\n    right: .2em;\n    color: #757575;\n}\n\ntr + td {\n    padding-left: 50px;\n}"

/***/ }),

/***/ "./src/app/inputs/inputs.component.html":
/*!**********************************************!*\
  !*** ./src/app/inputs/inputs.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Load CSV -->\n<div class=\"load-csv\">\n  <div class=\"mdl-textfield mdl-js-textfield load-csv-textfield\">\n    <input class=\"mdl-textfield__input\" type=\"text\" disabled>\n    <label class=\"mdl-textfield__label\" id=\"file-name\">CSV File</label>\n  </div>\n  <button (click)=\"loadCsvClick('fileInput');\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\">\n    Load CSV\n  </button>\n  <input type=\"file\" id=\"fileInput\" accept=\".csv\" style=\"display:none;\" (change)=\"handleFileSelect($event)\" />\n</div>\n\n<!-- Filters -->\n<div class=\"filters\">\n  <!-- Toggle Series -->\n  <div class=\"mdl-textfield mdl-js-textfield load-csv-textfield\" id=\"toggle-series\">\n    <span class=\"toggle-textfield\" (click)=\"showSeriesToggle()\">\n      <input class=\"mdl-textfield__input\" type=\"text\" disabled>\n      <label class=\"mdl-textfield__label\">Toggle Series</label>\n    </span>\n    <!-- Hidden Toggles -->\n    <select multiple id=\"select-toggle\">\n      <option selected *ngFor=\"let column of columns\">{{column}}</option>\n    </select>\n  </div>\n\n  <!-- Date Filter -->\n  <span class=\"date-filter\">\n    <i class=\"material-icons calendar-icon\">\n      calendar_today\n    </i>\n    <!-- Start Date -->\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label date-label\">\n      <select class=\"mdl-textfield__input\" id=\"start-date\" (change)=\"applyToggles()\">\n        <option>Start Date</option>\n        <option *ngFor=\"let date of dates;let i = index\" [selected]=\"i == 0\">{{date}}</option>\n      </select>\n    </div>\n\n    <!-- End Date -->\n    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label date-label\">\n      <select class=\"mdl-textfield__input\" id=\"end-date\" (change)=\"applyToggles()\">\n        <option>End Date</option>\n        <option *ngFor=\"let date of dates; let i = index\" [selected]=\"i == dates.length-1\">{{date}}</option>\n      </select>\n    </div>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/inputs/inputs.component.ts":
/*!********************************************!*\
  !*** ./src/app/inputs/inputs.component.ts ***!
  \********************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputsComponent = /** @class */ (function () {
    function InputsComponent() {
    }
    InputsComponent.prototype.ngOnInit = function () {
        var parent = this;
        // Create event when key is pressed for toggle dropdown
        $("#select-toggle").keypress(function () {
            parent.showSeriesToggle();
        });
    };
    /*-------------------------------------------------------------------------|
    | -- applyToggles    ()                                                    |
    |--------------------------------------------------------------------------|
    | Refreshes chart and table with new toggled filters                       |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.applyToggles = function () {
        this.populateChart(this.data);
        this.populateTable(this.data);
    };
    /*-------------------------------------------------------------------------|
    | -- formatDate()                                                          |
    |--------------------------------------------------------------------------|
    | Checks to see if input date is valid and returns a date object.          |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.formatDate = function (date) {
        var dt = new Date(date);
        var parseTime = d3.timeParse("%Y%m%d");
        if (isNaN(dt.getTime())) {
            return false;
        }
        else {
            return dt;
        }
    };
    /*-------------------------------------------------------------------------|
    | -- formatValue(value)                                                    |
    |--------------------------------------------------------------------------|
    | Checks to see if input values are valid                                  |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.formatValue = function (value) {
        var output = +value;
        if (Number.isNaN(output) || value == "") {
            output = null;
        }
        return output;
    };
    /*-------------------------------------------------------------------------|
    | -- handleFileSelect(event)                                               |
    |--------------------------------------------------------------------------|
    | Creates a new FileReader object to handle selected input CSV.            |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.handleFileSelect = function (event) {
        var f = event.srcElement.files[0];
        var reader = new FileReader();
        var parent = this;
        reader.onload = function (event) {
            var upload = event.target;
            parent.loadD3(upload.result);
            $("#file-name").text(f.name);
        };
        // Read in the file as a data URL.
        reader.readAsText(f);
    };
    /*-------------------------------------------------------------------------|
    | -- loadCsvClick    ()                                                    |
    |--------------------------------------------------------------------------|
    | Simulates a click event on the file input element                        |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.loadCsvClick = function (elemId) {
        var elem = document.getElementById(elemId);
        if (elem && document.createEvent) {
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, false);
            elem.dispatchEvent(evt);
        }
    };
    /*-------------------------------------------------------------------------|
    | -- loadD3(fileHandler)                                                   |
    |--------------------------------------------------------------------------|
    | Parses and prepares data from CSV for d3.js                              |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.loadD3 = function (fileHandler) {
        var parsedCsv = d3.csvParse(fileHandler);
        // Add columns to filters
        this.columns = parsedCsv.columns;
        this.columns = this.columns.filter(function (item) {
            return !(item == "Period");
        });
        // Remove Invalid Data
        var dates = [];
        for (var i = 0; i < parsedCsv.length; i++) {
            if (parsedCsv[i] == "" || !this.formatDate(parsedCsv[i].Period)) {
                parsedCsv.splice(i, 1);
                i--;
            }
            else {
                parsedCsv[i].Period = this.formatDate(parsedCsv[i].Period);
                dates.push(parsedCsv[i].Period);
            }
        }
        this.dates = dates;
        // Sort data by date
        parsedCsv = parsedCsv.sort(this.sortByDateAscending);
        this.data = parsedCsv;
        var parent = this;
        setTimeout(function () {
            parent.populateChart(parsedCsv);
            parent.populateTable(parsedCsv);
        }, 500);
    };
    ;
    /*-------------------------------------------------------------------------|
    | -- populateChart(data)                                                   |
    |--------------------------------------------------------------------------|
    | Populates a line chart with given parsed CSV and filters.                |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.populateChart = function (data) {
        // Clear graph
        $("#line-chart-svg").empty();
        // Apply Series filters
        var toggles = $('#select-toggle').val();
        toggles.unshift("Period");
        data.columns = toggles;
        // Date Filter
        var startDate = new Date($('#start-date').val());
        var endDate = new Date($('#end-date').val());
        // Initialize D3 Objects
        var svg = d3.select("svg");
        var margin = { top: 20, right: 80, bottom: 30, left: 50 };
        var width = svg.attr("width") - margin.left - margin.right;
        var height = svg.attr("height") - margin.top - margin.bottom;
        var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);
        var z = d3.scaleOrdinal(d3.schemeCategory10);
        var line = d3.line()
            .curve(d3.curveBasis)
            .defined(function (d) { return d.performance != null; })
            .x(function (d) { return x(d.period); })
            .y(function (d) { return y(d.performance); });
        // Map values 
        var parent = this;
        var mappedValues = data.columns.slice(1).map(function (id) {
            return {
                id: id,
                values: data.map(function (d) {
                    return {
                        period: (d.Period),
                        performance: parent.formatValue(d[id])
                    };
                })
            };
        });
        // X Axis
        x.domain([startDate, endDate]);
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("class", "axis axis--x")
            .call(d3.axisBottom(x));
        y.domain([
            d3.min(mappedValues, function (c) { return d3.min(c.values, function (d) { return d.performance; }); }),
            d3.max(mappedValues, function (c) { return d3.max(c.values, function (d) { return d.performance; }); })
        ]);
        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("fill", "#000")
            .text("Performance ($)");
        z.domain(mappedValues.map(function (c) { return c.id; }));
        var group = g.selectAll(".group")
            .data(mappedValues)
            .enter().append("g")
            .attr("class", "group");
        // Create line for data
        group.append("path")
            .attr("class", "line")
            .attr("d", function (d) {
            return line(d.values);
        })
            .style("stroke", function (d) {
            return z(d.id);
        })
            .style("fill", "none");
        // Create label for data
        group.append("text")
            .datum(function (d) {
            return {
                id: d.id,
                value: d.values[d.values.length - 1]
            };
        })
            .attr("transform", function (d) { return "translate(" + x(d.value.period) + "," + y(d.value.performance) + ")"; })
            .attr("x", 3)
            .attr("dy", "0.35em")
            .style("font", "10px sans-serif")
            .text(function (d) { return d.id; });
    };
    /*-------------------------------------------------------------------------|
    | -- populateTable(data)                                                   |
    |--------------------------------------------------------------------------|
    | Populates a table with given parsed CSV and filters.                     |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.populateTable = function (data) {
        // Clear table
        $("#table-card").empty();
        // Apply Series filters
        var columns = $('#select-toggle').val();
        columns.unshift("Period");
        data.columns = columns;
        // Date Filter
        var startDate = new Date($('#start-date').val());
        var endDate = new Date($('#end-date').val());
        var table = d3.select('#table-card').append('table');
        var thead = table.append('thead');
        var tbody = table.append('tbody');
        thead.append('tr')
            .selectAll('th')
            .data(columns).enter()
            .append('th')
            .text(function (column) {
            return column;
        });
        var rows = tbody.selectAll('tr')
            .data(data)
            .enter()
            .append('tr');
        var cells = rows.selectAll('td')
            .data(function (row) {
            return columns.map(function (column) {
                if (row.Period < startDate || row.Period > endDate) {
                    return false;
                }
                else {
                    return { column: column, value: row[column] };
                }
            });
        })
            .enter()
            .append('td')
            .text(function (d) {
            return d.value;
        });
    };
    /*-------------------------------------------------------------------------|
    | -- showSeriesToggle()                                                    |
    |--------------------------------------------------------------------------|
    | Toggles visibility of toggle dropdown when triggered. When hidden,       |
    | series toggles are applied and data is refreshed.                        |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.showSeriesToggle = function () {
        if ($("#select-toggle").is(':visible')) {
            $("#select-toggle").hide();
            this.applyToggles();
        }
        else {
            $("#select-toggle").show();
        }
    };
    /*-------------------------------------------------------------------------|
    | -- sortByDateAscending(a, b)                                             |
    |--------------------------------------------------------------------------|
    | Sort function to sort dates in ascending order                           |
    |-------------------------------------------------------------------------*/
    InputsComponent.prototype.sortByDateAscending = function (a, b) {
        return a.Period - b.Period;
    };
    InputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__(/*! ./inputs.component.html */ "./src/app/inputs/inputs.component.html"),
            styles: [__webpack_require__(/*! ./inputs.component.css */ "./src/app/inputs/inputs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputsComponent);
    return InputsComponent;
}());



/***/ }),

/***/ "./src/app/linechart/linechart.component.css":
/*!***************************************************!*\
  !*** ./src/app/linechart/linechart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-cards{\n    margin-bottom: 1em;\n    width: 100%;\n}\n\n.line-chart{\n    overflow-x: scroll;\n}\n\n.table-card{\n    overflow-x: scroll;\n}\n\n.axis--x path {\n  display: none;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n}\n\n.first-tr {\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/linechart/linechart.component.html":
/*!****************************************************!*\
  !*** ./src/app/linechart/linechart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-shadow--2dp data-cards line-chart\">\n  <svg id=\"line-chart-svg\" width=\"1080\" height=\"500\"></svg>\n</div>\n\n<div id=\"table-card\" class=\"mdl-card mdl-shadow--2dp data-cards\">\n</div>"

/***/ }),

/***/ "./src/app/linechart/linechart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/linechart/linechart.component.ts ***!
  \**************************************************/
/*! exports provided: LinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinechartComponent", function() { return LinechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinechartComponent = /** @class */ (function () {
    function LinechartComponent() {
    }
    LinechartComponent.prototype.ngOnInit = function () {
        $("#line-chart-svg").attr("width", window.innerWidth - 100);
    };
    LinechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linechart',
            template: __webpack_require__(/*! ./linechart.component.html */ "./src/app/linechart/linechart.component.html"),
            styles: [__webpack_require__(/*! ./linechart.component.css */ "./src/app/linechart/linechart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinechartComponent);
    return LinechartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hmmm/Documents/GitHub/csv-reader/csv-reader/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map