(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/josegarces/Angular projects/ngx-translate-app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_filesaver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");
      /* harmony import */


      var _services_object_toolbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/object-toolbox.service */
      "m7mh");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_recursive_json_recursive_json_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/recursive-json/recursive-json.component */
      "ycl8");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function AppComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AppComponent_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5);

            var translationFile_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r4.onClickOnTranslationFile(translationFile_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var translationFile_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Language: ", translationFile_r3.languageCode, "");
        }
      }

      function AppComponent_span_17_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\xA0>\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function AppComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, AppComponent_span_17_span_2_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var e_r6 = ctx.$implicit;
          var isLast_r7 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", e_r6, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !isLast_r7);
        }
      }

      function AppComponent_div_19_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AppComponent_div_19_mat_form_field_1_Template_mat_form_field_input_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r15);

            var translationFile_r12 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r14.onFieldChange($event, translationFile_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "textarea", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var translationFile_r12 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](translationFile_r12.languageCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("placeholder", "Write here the text for language ", translationFile_r12.languageCode, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r11.getValueOnEdit(translationFile_r12));
        }
      }

      function AppComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AppComponent_div_19_mat_form_field_1_Template, 5, 3, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var tfs_r9 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", tfs_r9);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "nv-file-over": a0
        };
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(fileSaver, ot) {
          _classCallCheck(this, AppComponent);

          this.fileSaver = fileSaver;
          this.ot = ot;
          this.fileUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({});
          this.translationFiles = [];
          this.selectedContent = [];
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.fileUploader.onAfterAddingFile = function (fi) {
              return _this.afterAddingFiles(fi);
            };
          } // region Listeners

        }, {
          key: "onFileHooverOnBase",
          value: function onFileHooverOnBase($event) {
            this.hasBaseDropZoneOver = $event;
          }
        }, {
          key: "onFileDropOnBase",
          value: function onFileDropOnBase($event) {
            console.log(AppComponent.TAG, {
              $event: $event
            });
          }
        }, {
          key: "afterAddingFiles",
          value: function afterAddingFiles(fi) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var fn, regexRes, fileName, fileExtension, content;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      fn = fi.file.name;
                      regexRes = /^([a-zA-Z]{2})\.(json)$/.exec(fn);

                      if (!(regexRes && regexRes.length > 0)) {
                        _context.next = 10;
                        break;
                      }

                      fileName = regexRes[1];
                      fileExtension = regexRes[2];

                      if (!(fileExtension === 'json')) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 8;
                      return this.readFileAsText(fi._file);

                    case 8:
                      content = _context.sent;

                      if (this.translationFiles && this.translationFiles.some(function (t) {
                        return t.languageCode === fileName;
                      })) {
                        if (confirm('There is already content for this language. Do you want to overwrite current content for "' + fileName + '"?')) {
                          this.loadLanguage({
                            fileName: fileName + '.' + fileExtension,
                            languageCode: fileName,
                            content: JSON.parse(content)
                          });
                        } else {
                          alert('Your file was NOT loaded');
                        }
                      } else {
                        this.loadLanguage({
                          fileName: fileName + '.' + fileExtension,
                          languageCode: fileName,
                          content: JSON.parse(content)
                        });
                      }

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onClickOnTranslationFile",
          value: function onClickOnTranslationFile(translationFile) {
            this.clickedFile = translationFile;
          }
        }, {
          key: "onClickOnElement",
          value: function onClickOnElement($event) {
            this.pathOnEdit = $event;
            this.selectedContent = [];

            var _iterator = _createForOfIteratorHelper(this.translationFiles),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var translationFile = _step.value;
                this.selectedContent[translationFile.languageCode] = this.ot.getValueForObjectPath(translationFile.content, this.pathOnEdit);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "onFieldChange",
          value: function onFieldChange($event, translationFile) {
            this.ot.setValueForObjectPath($event.target.value, translationFile.content, this.pathOnEdit);
          }
        }, {
          key: "onClickOnSave",
          value: function onClickOnSave() {
            if (this.translationFiles) {
              var _iterator2 = _createForOfIteratorHelper(this.translationFiles),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var tf = _step2.value;
                  var blob = JSON.stringify(tf.content, null, 3);
                  this.fileSaver.saveText(blob, tf.fileName);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } // endregion

        }, {
          key: "readFileAsText",
          value: function readFileAsText(file) {
            return new Promise(function (resolve, reject) {
              var fr = new FileReader();

              fr.onload = function () {
                return resolve(fr.result);
              };

              fr.onerror = reject;
              fr.readAsText(file);
            });
          }
        }, {
          key: "loadLanguage",
          value: function loadLanguage(translationFile) {
            var mIndex = this.translationFiles.findIndex(function (e) {
              return e.languageCode === translationFile.languageCode;
            });

            if (mIndex >= 0) {
              this.translationFiles[mIndex] = translationFile;
            } else {
              this.translationFiles.push(translationFile);
            }

            if (!this.keyTree) {
              this.keyTree = {};
            }

            var _iterator3 = _createForOfIteratorHelper(this.translationFiles),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var tf = _step3.value;
                this.ot.mergeStructureIntoTarget(tf.content, this.keyTree);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "getValueOnEdit",
          value: function getValueOnEdit(translationFile) {
            return this.ot.getValueForObjectPath(translationFile.content, this.pathOnEdit);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.TAG = 'AppComponent';

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_3__["FileSaverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_object_toolbox_service__WEBPACK_IMPORTED_MODULE_4__["ObjectToolboxService"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 20,
        vars: 9,
        consts: [["mat-app-background", "", "fxLayout", "row", 2, "height", "100%", "width", "100%"], ["fxLayout", "column", "fxFlex", "30%"], ["fxFlex", "100%"], [3, "click", 4, "ngFor", "ngForOf"], [2, "background", "#eee", "width", "100%", "overflow", "scroll"], [3, "jsonObject", "showValues", "clickOnElement"], ["ng2FileDrop", "", 1, "well", "my-drop-zone", 3, "ngClass", "uploader", "fileOver", "onFileDrop"], ["fxLayout", "column", "fxLayoutAlign", "start start", 2, "width", "100%"], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "click"], ["id", "path-container", "fxLayout", "row", "fxLayoutAlign", "start center"], [4, "ngFor", "ngForOf"], [1, "example-form", 2, "width", "100%", "height", "100%"], ["fxLayout", "column", "fxLayoutAlign", "space-around stretch", "style", "height: 100%;", 4, "ngIf"], [3, "click"], ["style", "color: #536DFE", 4, "ngIf"], [2, "color", "#536DFE"], ["fxLayout", "column", "fxLayoutAlign", "space-around stretch", 2, "height", "100%"], ["class", "example-full-width", "style", "height: 100%", 3, "input", 4, "ngFor", "ngForOf"], [1, "example-full-width", 2, "height", "100%", 3, "input"], ["matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", 3, "placeholder", "value"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, AppComponent_div_3_Template, 3, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "app-recursive-json", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("clickOnElement", function AppComponent_Template_app_recursive_json_clickOnElement_5_listener($event) {
              return ctx.onClickOnElement($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("fileOver", function AppComponent_Template_div_fileOver_6_listener($event) {
              return ctx.onFileHooverOnBase($event);
            })("onFileDrop", function AppComponent_Template_div_onFileDrop_6_listener($event) {
              return ctx.onFileDropOnBase($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, " Drop here your files ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-toolbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "ngx-translate editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AppComponent_Template_button_click_13_listener() {
              return ctx.onClickOnSave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, AppComponent_span_17_Template, 3, 2, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, AppComponent_div_19_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.translationFiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("jsonObject", ctx.keyTree)("showValues", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](7, _c0, ctx.hasBaseDropZoneOver))("uploader", ctx.fileUploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.pathOnEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.translationFiles);
          }
        },
        directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_recursive_json_recursive_json_component__WEBPACK_IMPORTED_MODULE_7__["RecursiveJsonComponent"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatTextareaAutosize"]],
        styles: [".nv-file-over[_ngcontent-%COMP%] {\n  background: lavender !important;\n  border: 2px black solid !important;\n}\n\n.my-drop-zone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: large;\n  height: 75px;\n  background: lightblue;\n  border-radius: 10px;\n  border: 2px black dashed;\n}\n\n#path-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #C5CAE9;\n  color: #212121;\n  border-top: #BDBDBD 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnYtZmlsZS1vdmVyIHtcbiAgYmFja2dyb3VuZDogbGF2ZW5kZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQgIWltcG9ydGFudDtcbn1cblxuLm15LWRyb3Atem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggYmxhY2sgZGFzaGVkO1xufVxuXG4jcGF0aC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0M1Q0FFOTtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlci10b3A6ICNCREJEQkQgMXB4IHNvbGlkO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var ngx_filesaver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({
        providers: [FileReader],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_7__["FileSaverModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_7__["FileSaverModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _recursive_json_recursive_json_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recursive-json/recursive-json.component */
      "ycl8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.??fac = function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      };

      ComponentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ComponentsModule, {
          declarations: [_recursive_json_recursive_json_component__WEBPACK_IMPORTED_MODULE_0__["RecursiveJsonComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_recursive_json_recursive_json_component__WEBPACK_IMPORTED_MODULE_0__["RecursiveJsonComponent"]]
        });
      })();
      /***/

    },

    /***/
    "m7mh":
    /*!****************************************************!*\
      !*** ./src/app/services/object-toolbox.service.ts ***!
      \****************************************************/

    /*! exports provided: ObjectToolboxService */

    /***/
    function m7mh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectToolboxService", function () {
        return ObjectToolboxService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ObjectToolboxService = /*#__PURE__*/function () {
        function ObjectToolboxService() {
          _classCallCheck(this, ObjectToolboxService);
        }

        _createClass(ObjectToolboxService, [{
          key: "getValueForObjectPath",
          value: function getValueForObjectPath(object, path) {
            if (!path) {
              return null;
            } else if (path.length === 0) {
              return object;
            } else {
              var p = _toConsumableArray(path);

              var child = object[p.shift()];

              if (child) {
                return this.getValueForObjectPath(child, p);
              } else {
                return null;
              }
            }
          }
        }, {
          key: "setValueForObjectPath",
          value: function setValueForObjectPath(value, object, path) {
            if (!path) {
              return;
            } else if (path.length === 1) {
              object[path[0]] = value;
            } else {
              var p = _toConsumableArray(path);

              var firstStep = p.shift();

              if (!object[firstStep]) {
                object[firstStep] = {};
              }

              this.setValueForObjectPath(value, object[firstStep], p);
            }
          }
          /**
           * Merges recursively the object of the first parameter in the object of the second parameter.
           * The second parameter will be overwritten
           * @param obj the object to be merged onto the target (will not be written)
           * @param target the target objet, to its structure will be added the whole first param object
           */

        }, {
          key: "mergeIntoTarget",
          value: function mergeIntoTarget(obj, target) {
            if (!target) {
              target = {};
            }

            var keys = Object.keys(obj);

            for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
              var key = _keys[_i];

              if (this.isLeaf(obj[key])) {
                target[key] = obj[key];
              } else {
                target[key] = {};
                this.mergeIntoTarget(obj[key], target[key]);
              }
            }
          }
          /**
           * Same as mergeIntoTarget but will not copy the values of the leaves, instead will only write null. The also means that target object
           * will get null on every leaf that exists in first parameter object (thus overwritten)
           * @param obj the object which structure will be merge into target (will to be written)
           * @param target the target object (might get overwritten)
           */

        }, {
          key: "mergeStructureIntoTarget",
          value: function mergeStructureIntoTarget(obj, target) {
            console.log(ObjectToolboxService.TAG, 'mergeStructureIntoTarget', {
              obj: obj,
              target: target
            });

            if (!target) {
              target = {};
            }

            var keys = Object.keys(obj);

            for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
              var key = _keys2[_i2];

              if (this.isLeaf(obj[key])) {
                target[key] = null;
              } else {
                target[key] = {};
                this.mergeStructureIntoTarget(obj[key], target[key]);
              }
            }
          }
        }, {
          key: "isLeaf",
          value: function isLeaf(o) {
            return typeof o !== 'object';
          }
        }]);

        return ObjectToolboxService;
      }();

      ObjectToolboxService.TAG = 'ObjectToolboxService';

      ObjectToolboxService.??fac = function ObjectToolboxService_Factory(t) {
        return new (t || ObjectToolboxService)();
      };

      ObjectToolboxService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ObjectToolboxService,
        factory: ObjectToolboxService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ycl8":
    /*!***********************************************************************!*\
      !*** ./src/app/components/recursive-json/recursive-json.component.ts ***!
      \***********************************************************************/

    /*! exports provided: RecursiveJsonComponent */

    /***/
    function ycl8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecursiveJsonComponent", function () {
        return RecursiveJsonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_object_toolbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/object-toolbox.service */
      "m7mh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RecursiveJsonComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RecursiveJsonComponent_div_0_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.onClickOnElement(key_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.jsonObject[key_r1], " ");
        }
      }

      function RecursiveJsonComponent_div_0_app_recursive_json_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-recursive-json", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("clickOnElement", function RecursiveJsonComponent_div_0_app_recursive_json_4_Template_app_recursive_json_clickOnElement_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r8.onClickOnChild($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showValues", ctx_r3.showValues)("jsonObject", ctx_r3.jsonObject[key_r1])("ownPath", ctx_r3.pathForChild(key_r1));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "margin-left": a0
        };
      };

      function RecursiveJsonComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RecursiveJsonComponent_div_0_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var key_r1 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.onClickOnElement(key_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, RecursiveJsonComponent_div_0_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, RecursiveJsonComponent_div_0_app_recursive_json_4_Template, 1, 3, "app-recursive-json", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var key_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, 10 * ctx_r0.level + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](key_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isLeaf(ctx_r0.jsonObject[key_r1]) && ctx_r0.showValues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.isLeaf(ctx_r0.jsonObject[key_r1]));
        }
      }

      var RecursiveJsonComponent = /*#__PURE__*/function () {
        function RecursiveJsonComponent(ot) {
          _classCallCheck(this, RecursiveJsonComponent);

          this.ot = ot;
          this.ownPath = [];
          this.showValues = true;
          this.clickOnElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.level = 0;
        }

        _createClass(RecursiveJsonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.jsonObject) {
              this.keys = Object.keys(this.jsonObject);
            }

            this.level = this.ownPath.length;
          }
        }, {
          key: "onClickOnElement",
          value: function onClickOnElement(key) {
            this.clickOnElement.emit([].concat(_toConsumableArray(this.ownPath), [key]));
          }
        }, {
          key: "isLeaf",
          value: function isLeaf(o) {
            return this.ot.isLeaf(o);
          }
        }, {
          key: "pathForChild",
          value: function pathForChild(key) {
            return [].concat(_toConsumableArray(this.ownPath), [key]);
          }
        }, {
          key: "onClickOnChild",
          value: function onClickOnChild($event) {
            this.clickOnElement.emit($event);
          }
        }]);

        return RecursiveJsonComponent;
      }();

      RecursiveJsonComponent.TAG = 'RecursiveJsonComponent';

      RecursiveJsonComponent.??fac = function RecursiveJsonComponent_Factory(t) {
        return new (t || RecursiveJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_object_toolbox_service__WEBPACK_IMPORTED_MODULE_1__["ObjectToolboxService"]));
      };

      RecursiveJsonComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RecursiveJsonComponent,
        selectors: [["app-recursive-json"]],
        inputs: {
          jsonObject: "jsonObject",
          ownPath: "ownPath",
          showValues: "showValues"
        },
        outputs: {
          clickOnElement: "clickOnElement"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], [3, "click"], ["class", "leaf", 3, "click", 4, "ngIf"], [3, "showValues", "jsonObject", "ownPath", "clickOnElement", 4, "ngIf"], [1, "leaf", 3, "click"], [3, "showValues", "jsonObject", "ownPath", "clickOnElement"]],
        template: function RecursiveJsonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, RecursiveJsonComponent_div_0_Template, 5, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.keys);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], RecursiveJsonComponent],
        styles: [".leaf[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  color: darkgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY3Vyc2l2ZS1qc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InJlY3Vyc2l2ZS1qc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWYge1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBjb2xvcjogZGFya2dyZWVuO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map