webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/components/blog-post/blog-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.close {\r\n    top: 0;\r\n    right: 0;\r\n    padding: 20px;\r\n    position: fixed;\r\n}\r\n\r\n.close::before,\r\n.close::after {\r\n    background-color: #000;\r\n}\r\n\r\n/* side-content */\r\n\r\n.author:hover {\r\n    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);\r\n            box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);\r\n}\r\n\r\n.author {\r\n    border-radius: 10px;\r\n    background-color: #fafafa;\r\n    padding: 20px 10px 10px 10px;\r\n}\r\n\r\n.image {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.author-title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.body,\r\n.footer {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    padding: 10px;\r\n}\r\n\r\n.likes {\r\n    margin-top: -5px;\r\n}\r\n\r\n.author-image {\r\n    background-image: url('https://firebasestorage.googleapis.com/v0/b/iamsainikhil-portfolio.appspot.com/o/images%2Fabout-me%2Fabout_avatar.jpg?alt=media&token=1f6e059b-ce69-48f6-8518-db28f23925aa');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    border-radius: 50%;\r\n    width: 75px;\r\n    height: 75px;\r\n    /* box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22); */\r\n}\r\n\r\n/* main content */\r\n\r\n.title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    padding: 20px 10px 0px 10px;\r\n}\r\n\r\n.tags {\r\n    text-align: center;\r\n}\r\n\r\n.tags span {\r\n    margin-left: 10px;\r\n}\r\n\r\n.content {\r\n    padding: 20px 10px;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    color: #808080;\r\n    border-radius: 20px;\r\n}\r\n\r\n.content-code {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border-radius: 20px;\r\n    background-color: #fdf6e3;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .wrapper {\r\n        padding: 10px;\r\n        /* border-radius: 20px; */\r\n        text-align: center;\r\n    }\r\n    .likes {\r\n        padding-left: 35px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 0.3fr 1fr;\r\n            grid-template-columns: 0.3fr 1fr;\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n            grid-template-areas: 'side main main main';\r\n        grid-gap: 20px;\r\n        /* padding: 20px; */\r\n    }\r\n    .side-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        grid-area: side;\r\n        max-width: 400px;\r\n    }\r\n    .side-content>div {\r\n        top: 0;\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n    }\r\n    .main-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 3;\r\n        grid-area: main;\r\n        min-height: 50vh;\r\n        overflow: auto;\r\n    }\r\n    /* .side-content {\r\n        animation: fadeIn 2s ease-in-out;\r\n        -webkit-animation: fadeIn 2s ease-in-out;\r\n    }\r\n    .close,\r\n    .tags {\r\n        animation: fadeIn 3s ease-in-out;\r\n        -webkit-animation: fadeIn 3s ease-in-out;\r\n    }\r\n    .title,\r\n    .comment-form {\r\n        animation: moveDown 2s ease-in;\r\n        -webkit-animation: moveDown 2s ease-in;\r\n    }\r\n    .content,\r\n    .content-code,\r\n    .comments {\r\n        animation: moveUp 2s ease-in;\r\n        -webkit-animation: moveUp 2s ease-in;\r\n    } */\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1299px) {\r\n    .body,\r\n    .footer {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column nowrap;\r\n                flex-flow: column nowrap;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n        text-align: center;\r\n    }\r\n    .likes {\r\n        padding-left: 35px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1300px) {\r\n    .body,\r\n    .footer {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row nowrap;\r\n                flex-flow: row nowrap;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/components/blog-post/blog-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-loader *ngIf=\"showLoader\"></app-site-loader>\r\n\r\n<div class=\"close\" (click)=\"closePost()\"></div>\r\n<div class=\"wrapper\" *ngIf=\"postData | async as data\">\r\n    <div class=\"side-content\">\r\n        <div class=\"author fade-in-bottom\">\r\n            <div class=\"header\">\r\n                <div class=\"image\">\r\n                    <div class=\"author-image\"></div>\r\n                </div>\r\n                <h5 class=\"author-title\">Sai Nikhil</h5>\r\n            </div>\r\n            <div class=\"body\">\r\n                <p><i class=\"far fa-calendar\"></i>&nbsp;{{data.data.date | date: 'd MMM, y'}}</p>\r\n                <p><i class=\"far fa-clock\"></i>&nbsp;{{data.data.time}} min read</p>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <p class=\"likes\">\r\n                    <app-likes [docId]=\"data.id\" [collectionName]=\"'blogs'\"></app-likes>\r\n                </p>\r\n                <p *ngIf=\"data.data.comments === 1\"><span class=\"number\">{{data.data.comments}}</span>&nbsp;Comment</p>\r\n                <p *ngIf=\"data.data.comments > 1 || data.data.comments === 0\"><span class=\"number\">{{data.data.comments}}</span>&nbsp;Comments</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-content fade-in-bottom\">\r\n        <h2 class=\"title\">{{data.data.title}}</h2>\r\n        <div class=\"tags\">\r\n            <span class=\"chip\" *ngFor=\"let tag of data.data.tags\">{{tag}}</span>\r\n        </div>\r\n        <div *ngIf=\"postSubCollectionDocumentData | async as content\" [ngClass]=\"{'content-code' : content.code, 'content': !content.code}\">\r\n            <app-site-loader *ngIf=\"postContentLoader\"></app-site-loader>\r\n            <div *ngIf=\"!postContentLoader\">\r\n                <!-- blog article with code -->\r\n                <div *ngIf=\"content.code\">\r\n                    <app-gist [htmlData]=\"content.data\"></app-gist>\r\n\r\n                </div>\r\n                <!-- blog articles without code and plain HTML -->\r\n                <div *ngIf=\"!content.code\">\r\n                    <div class=\"article\" [innerHTML]=\"getSanitizedHtml(content.data)\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"comment-form\">\r\n            <app-comment-form [docId]=\"data.id\" [collectionName]=\"'blogs'\"></app-comment-form>\r\n        </div>\r\n        <div class=\"comments\">\r\n            <app-comments [docId]=\"data.id\" [collectionName]=\"'blogs'\"></app-comments>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/components/blog-post/blog-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogPostComponent = /** @class */ (function () {
    function BlogPostComponent(route, router, commonService, _sanitizer) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
        this._sanitizer = _sanitizer;
        this.showLoader = true;
        this.postContentLoader = true;
    }
    Object.defineProperty(BlogPostComponent.prototype, "id", {
        get: function () {
            var segments = this.route.snapshot.url;
            var url = '';
            if (segments.length === 3) {
                url = segments[2].path;
            }
            return url;
        },
        enumerable: true,
        configurable: true
    });
    BlogPostComponent.prototype.ngOnInit = function () {
        // to support both blog?title=id link and direct blog/:id link
        if (this.id === '') {
            this.getBlogPostData(this.docId);
            this.getBlogPostSCDData(this.docId);
        }
        else {
            this.getBlogPostData(this.id);
            this.getBlogPostSCDData(this.id);
        }
    };
    BlogPostComponent.prototype.getBlogPostData = function (id) {
        var _this = this;
        this.subscription = this.commonService.getDocumentData('blogs', id, { timestamp: true })
            .subscribe(function () {
            _this.postData = _this.commonService.getDocumentData('blogs', id, { timestamp: true });
            _this.showLoader = false;
        });
    };
    BlogPostComponent.prototype.getBlogPostSCDData = function (id) {
        var _this = this;
        var subscription = this.commonService.getSubCollectionDocumentData('blogs', id, 'content', 'post')
            .subscribe(function () {
            _this.postSubCollectionDocumentData =
                _this.commonService.getSubCollectionDocumentData('blogs', id, 'content', 'post');
            _this.postContentLoader = false;
        });
        this.subscription.add(subscription);
    };
    /**
     * Sanitize the html tags of about Info
     * @param data
     */
    BlogPostComponent.prototype.getSanitizedHtml = function (data) {
        return this._sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, this.escapeHtml(data));
    };
    BlogPostComponent.prototype.escapeHtml = function (unsafe) {
        return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    };
    BlogPostComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BlogPostComponent.prototype.closePost = function () {
        this.router.navigate(['/about/blog'], { queryParams: { show: 'all' } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogPostComponent.prototype, "docId", void 0);
    BlogPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-post',
            template: __webpack_require__("../../../../../src/app/about/components/blog-post/blog-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/components/blog-post/blog-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], BlogPostComponent);
    return BlogPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n    border-radius: 10px;\r\n}\r\n\r\n.panel:hover {\r\n    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);\r\n            box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);\r\n    cursor: pointer;\r\n}\r\n\r\n.content {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    padding: 20px 10px 10px 10px;\r\n}\r\n\r\n.title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    color: #353839;\r\n}\r\n\r\n.tags {\r\n    text-align: center;\r\n    color: #808080;\r\n}\r\n\r\n.footer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    padding-top: 20px;\r\n    color: #808080;\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .blog-wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .content {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-rows: 0.6fr 0.4fr 0.4fr;\r\n            grid-template-rows: 0.6fr 0.4fr 0.4fr;\r\n        grid-gap: 5px;\r\n        -ms-flex-line-pack: justify;\r\n            align-content: space-between;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1279px) {\r\n    .blog-wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[2];\r\n            grid-template-columns: repeat(2, 1fr);\r\n        grid-gap: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) and (max-width: 1979px) {\r\n    .blog-wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[3];\r\n            grid-template-columns: repeat(3, 1fr);\r\n        grid-gap: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1980px) {\r\n    .blog-wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[6];\r\n            grid-template-columns: repeat(6, 1fr);\r\n        grid-gap: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"a-title\">My own platform to share my thoughts with the world</h3>\r\n<p class=\"a-subtitle\">\"Collection of Articles, Coding Tutorials, Gists, and Fun , etc.\"</p>\r\n<div *ngIf=\"!showLoader\">\r\n    <div class=\"blog-wrapper\">\r\n        <div *ngFor=\"let data of blogData | async\">\r\n            <a (click)=\"openModal(data.id)\">\r\n                <div class=\"panel\">\r\n                    <div class=\"content\">\r\n                        <div class=\"header\">\r\n                            <h2 class=\"title\">{{data.data.shortTitle}}</h2>\r\n                        </div>\r\n                        <div class=\"tags\">\r\n                            <span class=\"chip\" *ngFor=\"let tag of data.data.tags\">{{tag}}</span>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <p><i class=\"far fa-calendar\"></i>&nbsp;{{data.data.date | date: 'd MMM, y'}}</p>\r\n                            <p><i class=\"far fa-clock\"></i>&nbsp;{{data.data.time}} min read</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-site-loader *ngIf=\"showLoader\"></app-site-loader>\r\n\r\n<div *ngIf=\"showModal\">\r\n    <app-site-modal [docId]=\"docId\" [name]=\"'blog-post'\"></app-site-modal>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = /** @class */ (function () {
    function BlogComponent(router, route, commonService, modalService, gaService) {
        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.modalService = modalService;
        this.gaService = gaService;
        this.blogPostLoader = false;
        this.showLoader = true;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBlogsData();
        // query params
        this.route.queryParams.subscribe(function (params) {
            if (params.title !== undefined) {
                var name_1 = params.title;
                _this.openModal(name_1);
            }
            else {
                _this.modalService.showModal.next(false);
            }
        });
        this.modalService.scroll.next(true);
        this.modalService.showModal.subscribe(function (res) {
            _this.showModal = res;
        });
    };
    BlogComponent.prototype.getBlogsData = function () {
        var _this = this;
        this.subscription = this.commonService.getCollectionData('blogs', {
            operator: '==',
            value: false,
            complexField: 'archive',
            order: true,
            timestamp: true
        }).subscribe(function () {
            _this.blogData = _this.commonService.getCollectionData('blogs', {
                operator: '==',
                value: false,
                complexField: 'archive',
                order: true,
                timestamp: true
            });
            _this.showLoader = false;
        });
    };
    BlogComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BlogComponent.prototype.openModal = function (id) {
        this.gaService.emitEvent(id + "-post-view", 'blog-post', 'click');
        this.router.navigate(['/about/blog'], { queryParams: { title: id } });
        this.docId = id;
        this.modalService.showModal.next(true);
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/about/components/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_ga_service__["a" /* GAService */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/components/image-gallery/image-gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .wrapper {\r\n    overflow-y: scroll;\r\n} \r\n.button {\r\n    text-align: center;\r\n}\r\n\r\n.load-more {\r\n    color: #808080;\r\n    border: 1px solid #808080;\r\n}\r\n\r\n.load-more:hover {\r\n    color: #f5f5f5;\r\n    background-color: #808080;\r\n}\r\n\r\n*/\r\n\r\n.done-text {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n\r\n.panel {\r\n    padding: 0;\r\n    border: none;\r\n}\r\n\r\n.panel:nth-child(odd) {\r\n    grid-row: span 3;\r\n}\r\n\r\n.panel:nth-child(even) {\r\n    grid-row: span 2;\r\n}\r\n\r\n.panel:nth-child(2n+3) {\r\n    grid-row: span 4;\r\n}\r\n\r\n.panel:last-of-type {\r\n    grid-row: span 3;\r\n}\r\n\r\n.content {\r\n    background-size: cover;\r\n    background-position: 75% 75%;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.content .mask {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    text-align: center;\r\n}\r\n\r\n.content h2 {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 24px;\r\n    text-transform: capitalize;\r\n    color: #fff;\r\n    padding: 10px;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    margin: 20px 0 0 0;\r\n}\r\n\r\n.content p {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n    padding: 20px;\r\n}\r\n\r\n.content a.info {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 3px;\r\n    padding: 5px 25px;\r\n    border-radius: 20px;\r\n    background: #000;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.content a.info:hover {\r\n    cursor: -webkit-zoom-in;\r\n    cursor: zoom-in;\r\n    -webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\r\n            box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\r\n}\r\n\r\n/* effects */\r\n\r\n.content {\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.effects .mask {\r\n    opacity: 0;\r\n    background-color: rgba(251, 91, 25, 0.7);\r\n    -webkit-transition: all 0.4s ease-in-out;\r\n    transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.effects h2 {\r\n    -webkit-transform: translateY(-100px);\r\n            transform: translateY(-100px);\r\n    opacity: 0;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.effects p {\r\n    -webkit-transform: translateY(100px);\r\n            transform: translateY(100px);\r\n    opacity: 0;\r\n    -webkit-transition: all 0.2s linear;\r\n    transition: all 0.2s linear;\r\n}\r\n\r\n.effects a.info {\r\n    opacity: 0;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n/* hover effects */\r\n\r\n.content:hover {\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n}\r\n\r\n.effects:hover .mask {\r\n    opacity: 1;\r\n}\r\n\r\n.effects:hover h2,\r\n.effects:hover p,\r\n.effects:hover a.info {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0px);\r\n            transform: translateY(0px);\r\n}\r\n\r\n.effects:hover p {\r\n    -webkit-transition-delay: 0.1s;\r\n            transition-delay: 0.1s;\r\n}\r\n\r\n.effects:hover a.info {\r\n    -webkit-transition-delay: 0.2s;\r\n            transition-delay: 0.2s;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .content {\r\n        min-height: 40vh;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .content {\r\n        min-height: 25vh;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1399px) {\r\n    .gallery-wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[2];\r\n            grid-template-columns: repeat(2, 1fr);\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        grid-gap: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1400px) {\r\n    .gallery-wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[3];\r\n            grid-template-columns: repeat(3, 1fr);\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        grid-gap: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/components/image-gallery/image-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"a-title\">Welcome to my gallery of beautiful photos</h3>\r\n<p class=\"a-subtitle\">\"Most of the photos were taken by me while some are royality free images collected from various sources on the web.\"</p>\r\n<div class=\"gallery-wrapper\" appScrollable (scrollPosition)=\"scrollHandler($event)\">\r\n    <div class=\"panel wow fade-in-bottom\" *ngFor=\"let image of page.data | async\">\r\n        <div class=\"content effects\" [ngStyle]=\"{'background-image': 'url(' + image.url + ')'}\">\r\n            <div class=\"mask\">\r\n                <h2>{{image.title}}</h2>\r\n                <p>{{image.date | date: 'MMM d, y'}}</p>\r\n                <a class=\"info\" (click)=\"openModal(image.id)\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<p class=\"done-text\" *ngIf=\"page.done | async\">You have reached the end of Gallery!</p>\r\n<app-site-loader *ngIf=\"page.loading | async\"></app-site-loader>\r\n<!-- <div class=\"button\">\r\n                        <button class=\"load-more\" (click)=\"loadMoreImages()\">Load more</button>\r\n                    </div>\r\n                -->\r\n<div *ngIf=\"showModal\">\r\n    <app-site-modal [docId]=\"docId\" [name]=\"'photo'\"></app-site-modal>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/components/image-gallery/image-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_pagination_service__ = __webpack_require__("../../../../../src/app/shared/services/pagination.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(router, route, page, modalService, gaService) {
        this.router = router;
        this.route = route;
        this.page = page;
        this.modalService = modalService;
        this.gaService = gaService;
        this.loadMore = false;
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // query params
        this.route.queryParams.subscribe(function (params) {
            if (params.title !== undefined) {
                _this.imageTitle = params.title;
                _this.openModal(_this.imageTitle);
            }
            else {
                _this.modalService.showModal.next(false);
            }
        });
        this.modalService.scroll.next(true);
        this.modalService.showModal.subscribe(function (res) {
            _this.showModal = res;
        });
        // since, _done is false in the service which stops fetching data
        // In order to revert the above condition, make _done true on init to load data
        this.page._done.next(false);
        this.page.init('photos', 'date', { limit: 10, reverse: false, prepend: false });
    };
    ImageGalleryComponent.prototype.loadMoreImages = function () {
        this.loadMore = true;
    };
    ImageGalleryComponent.prototype.scrollHandler = function (e) {
        if (e === 'bottom') {
            this.page.more();
        }
    };
    ImageGalleryComponent.prototype.openModal = function (id) {
        this.gaService.emitEvent(id + "-photo-view", 'photo-view', 'button');
        this.router.navigate(['/about/photos'], { queryParams: { title: id } });
        this.docId = id;
        this.modalService.showModal.next(true);
    };
    ImageGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image-gallery',
            template: __webpack_require__("../../../../../src/app/about/components/image-gallery/image-gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/components/image-gallery/image-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_pagination_service__["a" /* PaginationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_ga_service__["a" /* GAService */]])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/components/photo/photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo-wrapper {\r\n    text-align: center;\r\n    background-color: #000;\r\n    overflow: hidden;\r\n}\r\n\r\n.close {\r\n    right: 10px;\r\n}\r\n\r\n.image {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n.title {\r\n    color: #fff;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    text-transform: capitalize;\r\n    position: absolute;\r\n    z-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    padding: 10px 20px 10px 5px;\r\n}\r\n\r\n.sub-title {\r\n    color: #fff;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    text-transform: capitalize;\r\n    position: absolute;\r\n    z-index: 10;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .image {\r\n        background-size: contain;\r\n    }\r\n    .fa-times {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .fa-times {\r\n        font-size: 24px;\r\n    }\r\n    .image {\r\n        background-size: cover;\r\n    }\r\n    .mask {\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: rgba(0, 0, 0, 0.2);\r\n    }\r\n    .sub-title {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row nowrap;\r\n                flex-flow: row nowrap;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n    }\r\n    .sub-title p {\r\n        padding: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/components/photo/photo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-loader *ngIf=\"showLoader\"></app-site-loader>\r\n\r\n<div class=\"photo-wrapper\" *ngIf=\"!showLoader\">\r\n    <div class=\"close\" (click)=\"closeModal()\"></div>\r\n    <div *ngIf=\"photoData | async as data\">\r\n        <div class=\"image\" [ngStyle]=\"{'background-image': 'url('+ data.data.url +')'}\"></div>\r\n        <div class=\"mask\">\r\n        </div>\r\n        <div class=\"title\">\r\n            <h2>{{data.data.title}}</h2>\r\n        </div>\r\n        <div class=\"sub-title\">\r\n            <p><i class=\"far fa-calendar\"></i>&nbsp;{{data.data.date | date: 'MMM d, y'}}</p>\r\n            <p><i class=\"fas fa-map-marker-alt\"></i>&nbsp;{{data.data.city}}, {{data.data.state}}, {{data.data.country}}\r\n            </p>\r\n            <p><i class=\"far fa-copyright\"></i>&nbsp;Sai Nikhil Bheemanathini</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/components/photo/photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(route, router, commonService) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
        this.showLoader = true;
    }
    Object.defineProperty(PhotoComponent.prototype, "id", {
        get: function () {
            var segments = this.route.snapshot.url;
            var url = '';
            if (segments.length === 3) {
                url = segments[2].path;
            }
            return url;
        },
        enumerable: true,
        configurable: true
    });
    PhotoComponent.prototype.ngOnInit = function () {
        // to support both photos?title=id link and direct photos/:id link
        if (this.id === '') {
            this.getPhotoData(this.docId);
        }
        else {
            this.getPhotoData(this.id);
        }
    };
    PhotoComponent.prototype.getPhotoData = function (id) {
        var _this = this;
        //
        this.subscription = this.commonService.getDocumentData('photos', id, { timestamp: true })
            .subscribe(function () {
            _this.photoData = _this.commonService.getDocumentData('photos', id, { timestamp: true });
            _this.showLoader = false;
        });
    };
    PhotoComponent.prototype.closeModal = function () {
        this.router.navigate(['about/photos'], { queryParams: { show: 'all' } });
    };
    PhotoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PhotoComponent.prototype, "docId", void 0);
    PhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__("../../../../../src/app/about/components/photo/photo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/components/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_common_service__["a" /* CommonService */]])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/components/tab-list/tab-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-item a {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    color: #808080;\r\n    border-bottom-color: #f5f5f5;\r\n}\r\n\r\n.tab-item a:hover {\r\n    color: #000;\r\n    border-bottom-color: #808080;\r\n    cursor: pointer;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.active a,\r\n.active a:hover {\r\n    border-bottom-color: #000;\r\n    color: #000;\r\n}\r\n\r\n.tab-content {\r\n    padding: 20px 0px;\r\n}\r\n\r\n/* temporary css  */\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    padding-top: 40px;\r\n    font-size: 48px;\r\n}\r\n\r\n.puc-image {\r\n    background-image: url('https://firebasestorage.googleapis.com/v0/b/iamsainikhil-portfolio.appspot.com/o/errors%2Fpage_under_construction.svg?alt=media&token=52ccaefb-f21d-4364-bcd5-531686a1e65f');\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/components/tab-list/tab-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"tab tab-block\">\r\n    <li class=\"tab-item\" [ngClass]=\"{'active': bioActive}\">\r\n        <a (click)=\"bioClick()\">Biography</a>\r\n    </li>\r\n    <li class=\"tab-item\" [ngClass]=\"{'active': blogActive}\">\r\n        <a (click)=\"blogClick()\">Blog</a>\r\n    </li>\r\n    <li class=\"tab-item\" [ngClass]=\"{'active': photoActive}\">\r\n        <a (click)=\"photoClick()\">Photos</a>\r\n    </li>\r\n    <li class=\"tab-item\" [ngClass]=\"{'active': videoActive}\">\r\n        <a (click)=\"videoClick()\">Videos</a>\r\n    </li>\r\n</ul>\r\n\r\n<div class=\"tab-content\">\r\n    <div *ngIf=\"bioActive\">\r\n        <app-timeline></app-timeline>\r\n    </div>\r\n    <div *ngIf=\"blogActive\">\r\n        <app-blog></app-blog>\r\n    </div>\r\n    <div *ngIf=\"photoActive\">\r\n        <!-- <app-image-gallery></app-image-gallery> -->\r\n        <p class=\"text-center\">Photos section under progress...</p>\r\n        <div class=\"svg-image puc-image\"></div>\r\n    </div>\r\n    <div *ngIf=\"videoActive\">\r\n        <p class=\"text-center\">Video section under progress...</p>\r\n        <div class=\"svg-image puc-image\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/components/tab-list/tab-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabListComponent = /** @class */ (function () {
    function TabListComponent(route, router, modalService, gaService) {
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.gaService = gaService;
        this.bioActive = true;
        this.blogActive = false;
        this.photoActive = false;
        this.videoActive = false;
    }
    TabListComponent.prototype.ngOnInit = function () {
        var segments = this.route.snapshot.url;
        if (segments[1] !== undefined) {
            this.routeUrl = segments[1].path;
            this.activeCondition(this.routeUrl);
        }
    };
    TabListComponent.prototype.activeCondition = function (data) {
        if (data === 'biography') {
            this.bioActive = true;
            this.blogActive = false;
            this.photoActive = false;
            this.videoActive = false;
            this.modalService.scroll.next(false);
        }
        else if (data === 'blog') {
            this.bioActive = false;
            this.blogActive = true;
            this.photoActive = false;
            this.videoActive = false;
            this.modalService.scroll.next(false);
        }
        else if (data === 'photos') {
            this.bioActive = false;
            this.blogActive = false;
            this.photoActive = true;
            this.videoActive = false;
            this.modalService.scroll.next(true);
        }
        else {
            this.bioActive = false;
            this.blogActive = false;
            this.photoActive = false;
            this.videoActive = true;
            this.modalService.scroll.next(false);
        }
    };
    TabListComponent.prototype.bioClick = function () {
        // to not make biography load under other sub-pages of about
        // instead re-direct to about and usual tab behavior follows
        if (this.routeUrl === undefined) {
            this.activeCondition('biography');
            this.gaService.emitEvent('bio-active-about-page', 'about-page', 'tab-button');
        }
        else {
            this.router.navigateByUrl('/about');
        }
    };
    TabListComponent.prototype.blogClick = function () {
        if (this.routeUrl === undefined) {
            this.activeCondition('blog');
            this.gaService.emitEvent('blog-active-about-page', 'about-page', 'tab-button');
        }
        else if (this.routeUrl === 'blog') {
            this.activeCondition('blog');
            this.gaService.emitEvent('blog-active-blog-page', 'blog-page', 'tab-button');
        }
        else {
            this.router.navigateByUrl('/about/blog');
        }
    };
    TabListComponent.prototype.photoClick = function () {
        if (this.routeUrl === undefined) {
            this.activeCondition('photos');
            this.gaService.emitEvent('photos-active-about-page', 'about-page', 'tab-button');
        }
        else if (this.routeUrl === 'photos') {
            this.activeCondition('photos');
            this.gaService.emitEvent('photos-active-photos-page', 'photos-page', 'tab-button');
        }
        else {
            this.router.navigateByUrl('/about/photos');
        }
    };
    TabListComponent.prototype.videoClick = function () {
        if (this.routeUrl === undefined) {
            this.activeCondition('videos');
            this.gaService.emitEvent('videos-active-about-page', 'about-page', 'tab-button');
        }
        else if (this.routeUrl === 'videos') {
            this.activeCondition('videos');
            this.gaService.emitEvent('videos-active-videos-page', 'videos-page', 'tab-button');
        }
        else {
            this.router.navigateByUrl('/about/videos');
        }
    };
    TabListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tab-list',
            template: __webpack_require__("../../../../../src/app/about/components/tab-list/tab-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/components/tab-list/tab-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__["a" /* GAService */]])
    ], TabListComponent);
    return TabListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/components/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline-wrapper {\r\n    padding: 20px 5px;\r\n}\r\n\r\n.main-timeline {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.main-timeline .timeline {\r\n    width: 50%;\r\n    float: left;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.main-timeline .timeline:before,\r\n.main-timeline .timeline:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.main-timeline .timeline:before {\r\n    content: \"\";\r\n    width: 40px;\r\n    height: 80%;\r\n    background: #00a480;\r\n    position: absolute;\r\n    top: 10%;\r\n    right: -20px;\r\n}\r\n\r\n.main-timeline .timeline:last-child:before {\r\n    height: 0;\r\n}\r\n\r\n.main-timeline .timeline-icon {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    background: #00a480;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    right: -40px;\r\n    z-index: 3;\r\n}\r\n\r\n.main-timeline .timeline-icon:before {\r\n    content: \"\";\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    border: 2px solid #00a480;\r\n    -webkit-box-shadow: 0 0 0 4px #f5f5f5;\r\n            box-shadow: 0 0 0 4px #f5f5f5;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.main-timeline .timeline-icon i {\r\n    font-size: 35px;\r\n    color: #303a3b;\r\n    line-height: 80px;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.icon-image {\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center;\r\n    display: inline-block;\r\n    z-index: 10;\r\n    width: 35px;\r\n    height: 35px;\r\n    margin-top: 20px;\r\n    position: relative;\r\n}\r\n\r\n.main-timeline .year {\r\n    display: block;\r\n    padding: 0 90px 0 30px;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    color: #343434;\r\n    text-align: right;\r\n    border-bottom: 1px solid #808080;\r\n    z-index: 2;\r\n    position: relative;\r\n}\r\n\r\n.main-timeline .year:before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background: #00a480;\r\n    border: 5px solid #fff;\r\n    -webkit-box-shadow: 0 0 0 4px #00a480;\r\n            box-shadow: 0 0 0 4px #00a480;\r\n    margin: auto;\r\n    position: absolute;\r\n    bottom: -15px;\r\n    left: 3.75px;\r\n}\r\n\r\n/* .main-timeline .year:after {\r\n    content: \"\";\r\n    border-left: 10px solid #808080;\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    bottom: -11px;\r\n    left: 50px;\r\n} */\r\n\r\n.main-timeline .timeline-content {\r\n    padding: 18px 90px 18px 40px;\r\n    text-align: right;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.main-timeline .timeline-content:before,\r\n.main-timeline .timeline-content:after {\r\n    content: \"\";\r\n    width: 80px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    position: absolute;\r\n    top: -7%;\r\n    right: 15px;\r\n    z-index: -1;\r\n}\r\n\r\n.main-timeline .timeline-content:after {\r\n    left: auto;\r\n    right: -95px;\r\n}\r\n\r\n.main-timeline .timeline:last-child .timeline-content:before,\r\n.main-timeline .timeline:last-child .timeline-content:after {\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.main-timeline .title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    color: #00a480;\r\n    margin-top: 0;\r\n}\r\n\r\n.main-timeline .description {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    color: #808080;\r\n    line-height: 25px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2) {\r\n    margin-top: 130px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(even) {\r\n    margin-bottom: 80px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(odd) {\r\n    margin: -140px 0 0 0;\r\n}\r\n\r\n.main-timeline .timeline:first-child,\r\n.main-timeline .timeline:last-child:nth-child(even) {\r\n    margin: 0 !important;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n):before,\r\n.main-timeline .timeline:nth-child(2n) .timeline-icon {\r\n    right: auto;\r\n    left: -20px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .timeline-icon {\r\n    left: -40px\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .year {\r\n    padding: 0 30px 0 90px;\r\n    text-align: left;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .year:before {\r\n    left: auto;\r\n    right: 3px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .year:after {\r\n    border-left: none;\r\n    border-right: 10px solid #303a3b;\r\n    right: 50px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .timeline-content {\r\n    padding: 18px 40px 18px 90px;\r\n    text-align: left;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .timeline-content:before {\r\n    left: -95px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .timeline-content:after {\r\n    left: 15px;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n):before,\r\n.main-timeline .timeline:nth-child(2n) .timeline-icon {\r\n    background: #ff6a00;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .timeline-icon:before {\r\n    border-color: #ff6a00;\r\n    -webkit-box-shadow: 0 0 0 4px #f5f5f5;\r\n            box-shadow: 0 0 0 4px #f5f5f5;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .year:before {\r\n    background: #ff6a00;\r\n    -webkit-box-shadow: 0 0 0 4px #ff6a00;\r\n            box-shadow: 0 0 0 4px #ff6a00;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .title {\r\n    color: #ff6a00;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(3n):before,\r\n.main-timeline .timeline:nth-child(3n) .timeline-icon {\r\n    background: #1e88e5;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(3n) .timeline-icon:before {\r\n    border-color: #1e88e5;\r\n    -webkit-box-shadow: 0 0 0 4px #f5f5f5;\r\n            box-shadow: 0 0 0 4px #f5f5f5;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(3n) .year:before {\r\n    background: #1e88e5;\r\n    -webkit-box-shadow: 0 0 0 4px #1e88e5;\r\n            box-shadow: 0 0 0 4px #1e88e5;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(3n) .title {\r\n    color: #1e88e5;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(4n):before,\r\n.main-timeline .timeline:nth-child(4n) .timeline-icon {\r\n    background: #e60000;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(4n) .timeline-icon:before {\r\n    border-color: #e60000;\r\n    -webkit-box-shadow: 0 0 0 4px #f798a8;\r\n            box-shadow: 0 0 0 4px #f798a8;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(4n) .year:before {\r\n    background: #e60000;\r\n    -webkit-box-shadow: 0 0 0 4px #e60000;\r\n            box-shadow: 0 0 0 4px #e60000;\r\n}\r\n\r\n.main-timeline .timeline:nth-child(4n) .title {\r\n    color: #e60000;\r\n}\r\n\r\n@media only screen and (min-width: 1300px) and (max-width: 1499px) {\r\n    .main-timeline .timeline:nth-child(even) {\r\n        margin-bottom: 100px;\r\n    }\r\n    .main-timeline .timeline:nth-child(odd) {\r\n        margin-bottom: 120px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1299px) {\r\n    .main-timeline .timeline {\r\n        width: 100%;\r\n    }\r\n    .main-timeline .timeline:nth-child(even),\r\n    .main-timeline .timeline:nth-child(odd) {\r\n        margin: 0;\r\n    }\r\n    .main-timeline .timeline:before,\r\n    .main-timeline .timeline:nth-child(2n):before {\r\n        width: 30px;\r\n        height: 100%;\r\n        left: 25px;\r\n    }\r\n    .main-timeline .timeline-icon,\r\n    .main-timeline .timeline:nth-child(2n) .timeline-icon {\r\n        left: 0;\r\n    }\r\n    .main-timeline .year,\r\n    .main-timeline .timeline:nth-child(2n) .year {\r\n        text-align: left;\r\n        padding: 0 35px 0px 100px;\r\n    }\r\n    .main-timeline .year:before,\r\n    .main-timeline .timeline:nth-child(2n) .year:before {\r\n        left: auto;\r\n        right: 4px;\r\n    }\r\n    .main-timeline .year:after {\r\n        left: auto;\r\n        right: 50px;\r\n        border-right: 10px solid #808080;\r\n        border-left: none;\r\n    }\r\n    .main-timeline .timeline-content,\r\n    .main-timeline .timeline:nth-child(2n) .timeline-content {\r\n        text-align: left;\r\n        padding: 18px 40px 18px 100px;\r\n    }\r\n    .main-timeline .timeline-content:before,\r\n    .main-timeline .timeline-content:after {\r\n        width: 0;\r\n        height: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/components/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"a-title\">Timeline of main events in my life</h3>\r\n<p class=\"a-subtitle\">\"Event timeline gives a grasp of my career quickly instead of plain storytelling.\"</p>\r\n<app-site-loader *ngIf=\"showLoader\"></app-site-loader>\r\n<div class=\"timeline-wrapper\" *ngIf=\"!showLoader\">\r\n    <div class=\"main-timeline\">\r\n        <div class=\"timeline\" *ngFor=\"let data of timelineData | async\">\r\n            <div class=\"timeline-icon\">\r\n                <div class=\"icon-image\" [ngStyle]=\"{'background-image': 'url(' + data.data.icon + ')'}\"></div>\r\n            </div>\r\n            <span class=\"year\" *ngIf=\"data.data.status === undefined\">{{data.data.year}}</span>\r\n            <span class=\"year\" *ngIf=\"data.data.status !== undefined\">\r\n                {{data.data.year}}&nbsp;-&nbsp;{{data.data.status}}</span>\r\n            <div class=\"timeline-content\">\r\n                <h5 class=\"title\">{{data.data.title}}</h5>\r\n                <p class=\"description\">\r\n                    {{data.data.details}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/components/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(commonService) {
        this.commonService = commonService;
        this.showLoader = true;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.getTimelineData();
    };
    TimelineComponent.prototype.getTimelineData = function () {
        var _this = this;
        this.subscription =
            this.commonService.getCollectionData('biography', { timestamp: false })
                .subscribe(function () {
                _this.timelineData = _this.commonService.getCollectionData('biography', { timestamp: false });
                _this.showLoader = false;
            });
    };
    TimelineComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/about/components/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/components/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__["a" /* CommonService */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/pages/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content img {\r\n    background: #f5f5f5;\r\n}\r\n\r\n.about-card {\r\n    z-index: 99;\r\n}\r\n\r\n.card-image {\r\n    background: #B88454;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.card-avatar {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    border: 1px solid #f5f5f5;\r\n    border-radius: 50%;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-bottom: -75px;\r\n    -webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\r\n            box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\r\n}\r\n\r\n.card-title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    color: #000;\r\n}\r\n\r\n.card-subtitle {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 22px;\r\n}\r\n\r\n.card-body {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.card-footer {\r\n    background: #353839;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: no-wrap;\r\n        flex-wrap: no-wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.card-content {\r\n    margin-top: 75px;\r\n}\r\n\r\n.contact-button {\r\n    color: #808080;\r\n    border-color: #808080;\r\n    padding: 5px 15px;\r\n}\r\n\r\n.contact-button:hover {\r\n    color: #f5f5f5;\r\n    background: #808080;\r\n    border-color: transparent;\r\n}\r\n\r\n.icon-svg {\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    display: inline-block;\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\n.icon-svg:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.linkedin {\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/icons/social-icons/linkedin.svg")) + ");\r\n}\r\n\r\n.codepen {\r\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22%3F%3E%0D%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 viewBox%3D%220 0 46.965 46.965%22 style%3D%22enable-background%3Anew 0 0 46.965 46.965%3B%22 xml%3Aspace%3D%22preserve%22 width%3D%22512px%22 height%3D%22512px%22 class%3D%22%22%3E%3Cg%3E%3Cpath id%3D%22codepen%22 d%3D%22M46.815%2C22.775c-0.2-4.2-0.2-8.4-0.5-9.2c-0.3-0.8-4.4-3.6-6.1-4.3c-1.6-0.7-8.6-4.3-10.6-5.3  c-2-1.1-5.9-3.8-6.5-3.8s-1.6%2C0.6-2.6%2C1.1s-4.9%2C3.1-7.7%2C4.5c-2.8%2C1.5-6%2C3.5-9.3%2C5c-3.4%2C1.5-3.2%2C1.7-3.4%2C2.3  c-0.1%2C0.4%2C0.2%2C2.5%2C0.3%2C5.6c0.1%2C3.1-0.3%2C9-0.4%2C10.7c-0.1%2C1.6%2C0.3%2C2.6%2C1%2C3.6s3.6%2C2.5%2C6.8%2C4.3c3.2%2C1.8%2C8.4%2C5.5%2C11%2C7.4s3.2%2C1.8%2C4.3%2C2.1  c1.1%2C0.3%2C7.9-3.8%2C13.3-7.1c5.4-3.3%2C10.3-6.3%2C10.4-6.9C47.015%2C32.275%2C47.015%2C26.975%2C46.815%2C22.775z M45.815%2C30.075  c-0.2-0.2-3.4-3.8-3.6-3.7c-0.2%2C0.2-0.3%2C0.5-0.3%2C0.7c0.1%2C0.1%2C3.4%2C3.5%2C3.5%2C3.8c0.1%2C0.2-0.2%2C0.6-0.4%2C0.5c-0.2-0.1-3-2.9-3.4-2.9  c-0.4-0.1-0.9%2C0.4-0.5%2C0.7c0.3%2C0.3%2C3.1%2C2.6%2C3.1%2C2.8c0%2C0.2-0.7%2C0.9-0.9%2C0.8c-0.2-0.1-2.7-2.7-3.1-2.7s-0.8%2C0.4-0.6%2C0.5  c0.2%2C0.2%2C2.9%2C2.6%2C2.7%2C2.8c-0.1%2C0.2-0.7%2C1-1%2C0.7s-2.4-2.7-2.8-2.7s-0.7%2C0.4-0.6%2C0.6c0.2%2C0.2%2C2.5%2C2.4%2C2.5%2C2.6s-0.7%2C0.5-0.9%2C0.5  c-0.2-0.1-2.3-2.6-2.6-2.6s-0.7%2C0.3-0.6%2C0.4s2.5%2C2.7%2C2.5%2C2.8s-0.6%2C0.6-0.8%2C0.5c-0.2-0.2-2-2.6-2.6-2.6c-0.5%2C0-0.7%2C0.3-0.6%2C0.4  s2.5%2C2.5%2C2.3%2C2.6c-0.2%2C0.2-0.8%2C0.5-1%2C0.4c-0.2-0.2-2.4-2.3-2.7-2.4c-0.3-0.1-0.7%2C0.4-0.6%2C0.6c0.2%2C0.2%2C2.7%2C2.2%2C2.4%2C2.4  c-0.3%2C0.2-1.2%2C1-1.5%2C0.8s-2.1-2.3-2.6-2.3s-0.9%2C0.3-0.6%2C0.5c0.3%2C0.3%2C2.3%2C2.1%2C2.1%2C2.3c-0.2%2C0.2-0.5%2C0.6-0.7%2C0.4c-0.2-0.2-2.1-2-2.4-2  s-0.8%2C0.2-0.6%2C0.4s2.5%2C1.8%2C2.3%2C2.2s-1%2C0.9-1.2%2C0.7c-0.2-0.2-2.2-2.2-2.5-2.2c-0.3%2C0.1-0.6%2C0.3-0.4%2C0.5s2.2%2C2%2C2.1%2C2.2  s-0.6%2C0.7-0.8%2C0.5c-0.1-0.2-2.5-2.6-2.7-2.5s-0.6%2C0.7-0.4%2C0.9c0.3%2C0.2%2C2.5%2C1.8%2C2.3%2C2s-0.8%2C0.8-1.1%2C0.6s-2.1-1.9-2.4-1.9  s-0.6%2C0.4-0.3%2C0.7c0.4%2C0.3%2C1.9%2C1.5%2C1.9%2C1.6s-0.3%2C0.4-0.6%2C0.3c-0.3-0.1-2-1.6-2.3-1.6s-0.8%2C0.4-0.6%2C0.6c0.2%2C0.2%2C2%2C1.2%2C1.9%2C1.5  s-0.5%2C0.7-0.8%2C0.5s-8.7-5.3-11.4-6.9c-2.7-1.6-6.1-3.7-8.1-4.9c-1.9-1.2-2.9-1.4-3.1-2.5s0.2-5.9%2C0.3-8.6c0.1-2.7-0.1-4.9-0.2-5.5  c-0.1-0.7-0.2-2-0.1-2.4c0.1-0.7%2C1.5-1.3%2C4.4-2.6c2.8-1.3%2C11.9-6.6%2C13.4-7.5s3.5-2.1%2C4-2s5%2C3.3%2C8.2%2C4.6c3.1%2C1.3%2C9.7%2C4.5%2C10.7%2C5.2  s1.5%2C1.1%2C1.5%2C1.2s-0.2%2C0.4%2C0.1%2C0.6c0.4%2C0.2%2C2%2C1.6%2C2.1%2C1.8c0%2C0.2%2C0.2%2C1.6%2C0.1%2C1.5s-1.8-2.2-2.2-2.2s-0.7%2C0.4-0.5%2C0.7  c0.2%2C0.3%2C2.6%2C2.4%2C2.8%2C2.7c0.1%2C0.3%2C0.3%2C1%2C0.1%2C0.9c-0.2-0.2-1.9-2-2.1-2s-0.5%2C0.2-0.4%2C0.6s2.4%2C2.5%2C2.5%2C2.7s0.1%2C1.7-0.1%2C1.6  s-1.9-2.4-2.1-2.3s-0.2%2C0.6-0.2%2C0.6s2.2%2C2.6%2C2.3%2C2.9s0.3%2C2.3%2C0.1%2C2c-0.2-0.3-1.9-2.3-2.1-2.3s-0.4%2C0.3-0.3%2C0.6s2.3%2C2.7%2C2.4%2C2.9  c0.1%2C0.2%2C0.2%2C2.1%2C0%2C1.8c-0.1-0.3-2.2-2.6-2.4-2.5s-0.5%2C0.4-0.3%2C0.7c0.2%2C0.2%2C2.7%2C2.9%2C2.7%2C3.1  C45.915%2C28.875%2C46.015%2C30.175%2C45.815%2C30.075z M7.315%2C16.575c0.6%2C0.3%2C5.4%2C3.5%2C5.9%2C3.8s1.8%2C0.1%2C3.3-0.6s4.2-2%2C4.3-2.3s0.1-5.1%2C0-5.9  s0-4-0.3-4.1s-6.3%2C3-8.1%2C4s-6.2%2C3.3-6.4%2C3.5C5.715%2C15.475%2C6.715%2C16.275%2C7.315%2C16.575z M9.215%2C15.875c0.1-0.2%2C4.9-2.9%2C6.6-4  s3.6-2.2%2C3.7-1.9c0.2%2C0.3%2C0.7%2C6.4%2C0.2%2C6.9c-0.5%2C0.4-5.3%2C2.8-6%2C2.4C13.215%2C18.975%2C8.915%2C16.775%2C9.215%2C15.875z M25.315%2C17.175  c0.1%2C0.3%2C5%2C2.6%2C5.4%2C2.7s1.1-0.1%2C1.8-0.4c0.7-0.3%2C7.1-3.7%2C7.8-4c0.7-0.3%2C1-0.5%2C1.1-1.1c0-0.6-1-1.4-3.1-2.6s-7.1-3.4-9.2-4.3  s-2.8-0.7-3.2-0.4c-0.7%2C0.4-0.5%2C1.9-0.5%2C2.7C25.315%2C10.675%2C25.215%2C16.875%2C25.315%2C17.175z M26.515%2C7.875c0.1-0.2%2C4.4%2C1.6%2C8.2%2C3.5  c3.8%2C2%2C5.4%2C2.8%2C5.3%2C3.2s-4.5%2C2.4-6.4%2C3.3c-1.9%2C0.9-2.4%2C1.1-2.7%2C1c-0.2-0.1-4.3-1.9-4.4-2.3c-0.2-0.5%2C0-4.1-0.1-5.2  C26.515%2C10.175%2C26.315%2C8.075%2C26.515%2C7.875z M27.515%2C21.275c-0.3-0.4-4-2.4-4.4-2.5c-0.5-0.1-1.3%2C0.5-2.3%2C1.1s-2.4%2C1.5-2.3%2C1.8  c0.1%2C0.8%2C4%2C2.5%2C4.7%2C2.6s3.4-1.6%2C3.9-2C27.415%2C22.075%2C27.715%2C21.675%2C27.515%2C21.275z M23.115%2C23.075c-0.4-0.2-1.3-0.8-1.3-0.9  c-0.1-0.2%2C2.4-1.6%2C2.7-1.4c0.4%2C0.3%2C1.2%2C0.5%2C1.3%2C0.8C25.815%2C21.775%2C23.515%2C23.275%2C23.115%2C23.075z M18.415%2C6.375  c0.5-0.4%2C3.5-1.8%2C4-2.2c0.6-0.3%2C1.4%2C0.3%2C1.7%2C0.5c0.3%2C0.1%2C0.7-0.1%2C0.8-0.4c0.1-0.3-1.1-0.9-1.5-1.1s-0.8-0.2-1.5%2C0.1  c-0.7%2C0.3-4.4%2C2.3-4.6%2C2.5s0%2C0.7%2C0.2%2C0.8C17.715%2C6.575%2C17.915%2C6.775%2C18.415%2C6.375z M5.015%2C13.575c0.3-0.3%2C0-0.4-0.4-0.6  s-2.4%2C0.7-2.6%2C1.1c-0.2%2C0.3%2C0.2%2C2.2%2C0.5%2C2.3c0.3%2C0.2%2C0.7-0.1%2C0.9-0.4c0.2-0.3-0.1-1-0.2-1.3C3.215%2C14.275%2C4.715%2C13.775%2C5.015%2C13.575  z M6.815%2C24.475c0.8-0.5%2C2.2-1.1%2C2-1.5s-2.9-2.2-3.5-2.6s-1.6%2C0.1-1.7%2C0.4c-0.1%2C0.2%2C0%2C3.2%2C0%2C3.7s-0.1%2C1.1%2C0.5%2C1.4  C4.815%2C26.075%2C5.915%2C24.975%2C6.815%2C24.475z M5.915%2C22.375c0.1-0.2%2C1.2%2C0.6%2C1.1%2C0.8c0%2C0.2-0.9%2C0.9-1.2%2C0.7S5.815%2C22.575%2C5.915%2C22.375z   M19.715%2C28.275c-0.6-0.3-6.2-3.3-6.6-3.3c-0.4-0.1-8.9%2C4.5-8.9%2C4.7c0%2C0.5%2C2.5%2C1.5%2C5.8%2C3.4c3.2%2C1.8%2C9.1%2C5.2%2C9.6%2C5.5s1.2%2C0.2%2C1.5-0.2  c0.3-0.3%2C0.1-7.9%2C0.1-8.6C21.115%2C29.275%2C20.315%2C28.675%2C19.715%2C28.275z M20.015%2C37.375c-0.4-0.1-8-4.4-9.2-5s-2.1-1.3-2.1-1.4  c0.1-0.4%2C5.2-4.1%2C5.8-3.9c0.5%2C0.1%2C5.3%2C2.5%2C5.5%2C2.9C20.215%2C30.275%2C20.415%2C37.475%2C20.015%2C37.375z M31.515%2C24.875  c-0.7-0.1-6.7%2C3-6.8%2C3.5c-0.1%2C0.4%2C0.6%2C7.5%2C0.6%2C7.8c0.1%2C0.2%2C0.4%2C0.7%2C0.9%2C0.8c0.5%2C0.1%2C1.7-0.4%2C3.6-1.4s9.1-5.2%2C9.3-5.6  c0.3-0.4%2C0.1-1.1-0.1-1.3C38.915%2C28.375%2C32.215%2C24.975%2C31.515%2C24.875z M31.715%2C33.375c-2.5%2C1.5-4.7%2C2.8-5.1%2C2.5s-0.8-5.2-0.8-5.6  c0-0.3%2C6.5-3.8%2C7.2-3.6c0.7%2C0.3%2C5.1%2C2.2%2C5.1%2C2.6C38.215%2C29.675%2C34.315%2C31.875%2C31.715%2C33.375z M41.615%2C18.175c-0.4%2C0-5.8%2C3.3-5.8%2C3.5  c-0.1%2C1.2%2C2.7%2C1.7%2C3.9%2C2.2c1.2%2C0.5%2C2.4%2C1%2C2.7%2C0.7s0.1-3.3%2C0.1-4.8C42.515%2C18.075%2C42.015%2C18.175%2C41.615%2C18.175z M41.515%2C23.375  c-0.4-0.1-3.6-1.5-3.9-1.7s3.5-2.3%2C3.8-2.1C41.715%2C19.875%2C41.815%2C23.475%2C41.515%2C23.375z%22 data-original%3D%22%23000000%22 class%3D%22active-path%22 data-old_color%3D%22%2376DAFF%22 fill%3D%22%23000000%22%2F%3E%3C%2Fg%3E %3C%2Fsvg%3E%0D\");\r\n}\r\n\r\n.github {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg width%3D%22158.52%22 height%3D%22155.031%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0D %3Cg%3E%0D  %3Ctitle%3Ebackground%3C%2Ftitle%3E%0D  %3Crect fill%3D%22none%22 id%3D%22canvas_background%22 height%3D%22402%22 width%3D%22582%22 y%3D%22-1%22 x%3D%22-1%22%2F%3E%0D %3C%2Fg%3E%0D %3Cg%3E%0D  %3Ctitle%3ELayer 1%3C%2Ftitle%3E%0D  %3Cpath id%3D%22svg_2%22 fill%3D%22%23ffffff%22 d%3D%22m145.221%2C38.278c-4.759%2C-12.357 -15.236%2C-19.948 -27.938%2C-22.849c-9.148%2C-2.089 -27.515%2C-2.916 -47.722%2C-3.365c-16.76%2C-0.373 -33.779%2C-1.864 -47.09%2C8.964c-12.289%2C9.995 -14.721%2C28.028 -15.719%2C42.895c-0.867%2C12.899 1.53%2C51.537 7.168%2C63.657c8.101%2C17.413 22.343%2C23.696 41.42%2C24.832c-0.021%2C-4.155 -0.069%2C-11.879 -0.095%2C-16.883c-21.669%2C4.712 -26.242%2C-7.19 -26.242%2C-7.19c-3.543%2C-9.003 -4.996%2C-8.968 -7.648%2C-10.397c-4.307%2C-2.321 -2.368%2C-8.116 -0.467%2C-7.735c8.703%2C1.747 11.94%2C8.028 11.94%2C8.028c6.947%2C11.907 18.222%2C8.465 22.667%2C6.474c0.699%2C-5.034 2.717%2C-8.471 4.945%2C-10.416c-17.301%2C-1.969 -35.489%2C-8.649 -35.489%2C-38.494c0%2C-8.504 3.043%2C-15.452 8.026%2C-20.907c-0.809%2C-1.963 -0.949%2C-11.438 3.755%2C-20.614c0%2C0 3.541%2C-2.092 18.425%2C7.985c6.214%2C-1.726 12.877%2C-2.592 19.496%2C-2.622c6.62%2C0.03 13.288%2C0.896 19.513%2C2.622c14.867%2C-10.078 21.398%2C-7.985 21.398%2C-7.985c4.24%2C10.73 1.573%2C18.651 0.765%2C20.614c4.995%2C5.455 8.016%2C12.404 8.016%2C20.907c0%2C25.55 -17.082%2C32.681 -25.86%2C35.525c-4.047%2C1.311 -5.694%2C2.36 -5.707%2C4.908c-0.021%2C4.354 3.283%2C6.157 3.283%2C13.424c0%2C7.274 -0.043%2C15.989 -0.07%2C21.464c36.688%2C-3.997 41.676%2C-15.994 47.356%2C-35.592c3.638%2C-12.552 4.264%2C-28.046 5.269%2C-41.077c0.908%2C-11.783 0.903%2C-25.009 -3.395%2C-36.173z%22%2F%3E%0D  %3Cpath fill%3D%22%23000000%22 id%3D%22svg_3%22 d%3D%22m154.552%2C21.082c-2.524%2C-7.053 -7.848%2C-13.298 -14.59%2C-16.63c-4.375%2C-2.162 -8.94%2C-2.694 -13.721%2C-2.825c-7.565%2C-0.207 -15.05%2C-0.246 -22.607%2C0c-6.353%2C0.206 -12.71%2C-0.639 -19.065%2C-0.627c-8.854%2C0.018 -17.719%2C0.547 -26.571%2C0.774c-8.864%2C0.227 -17.698%2C-0.794 -26.536%2C-0.405c-6.937%2C0.306 -13.075%2C1.7 -18.709%2C6.099c-5.871%2C4.584 -9.869%2C11.091 -11.007%2C18.47c-0.5%2C3.246 -0.269%2C6.651 -0.276%2C9.924c-0.008%2C4.258 -0.04%2C8.516 -0.017%2C12.774c0.049%2C8.947 0.28%2C17.892 0.433%2C26.838c0.291%2C17.043 0.085%2C34.1 0.712%2C51.136c0.301%2C8.176 2.861%2C16.46 9.589%2C21.613c6.924%2C5.303 14.845%2C4.78 23.053%2C5.457c14.27%2C1.213 28.612%2C1.324 42.922%2C1.211c0.63%2C-0.014 1.26%2C-0.029 1.891%2C-0.043c15.038%2C-0.345 30.075%2C-0.559 45.116%2C-0.765c8.577%2C-0.118 16.299%2C-2.134 22.523%2C-8.405c6.158%2C-6.205 7.64%2C-13.306 7.897%2C-21.732c0.531%2C-17.425 0.016%2C-34.816 0.067%2C-52.241c0.026%2C-8.873 0.292%2C-16.73 0.195%2C-25.603c-0.052%2C-4.757 -0.066%2C-9.505 0.025%2C-14.261c0.07%2C-3.724 -0.053%2C-7.205 -1.324%2C-10.759zm-78.208%2C127.948c-5.065%2C-0.048 -10.129%2C-0.062 -15.193%2C-0.098c0.05%2C-1.474 0.096%2C-2.948 0.117%2C-4.423c0.033%2C-2.316 0.066%2C-4.632 0.099%2C-6.948c0.046%2C-3.191 -2.991%2C-2.393 -5.105%2C-2.075c-2.996%2C0.451 -6.066%2C0.554 -9.086%2C0.356c-5.722%2C-0.375 -10.452%2C-4.057 -12.677%2C-9.185c-2.13%2C-4.91 -5.033%2C-10.406 -10.041%2C-12.883c0.301%2C0.164 0.139%2C0.009 -0.186%2C-0.262c9.197%2C1.087 11.236%2C12.183 19.581%2C15.181c3.808%2C1.368 7.614%2C1.223 11.52%2C0.366c1.409%2C-0.415 5.358%2C-1.026 5.676%2C-2.782c0.349%2C-0.772 0.407%2C-2.019 0.599%2C-2.844c0.531%2C-2.546 2.332%2C-4.625 4.278%2C-6.223c4.276%2C-3.51 -3.194%2C-4.565 -5.067%2C-4.85c-10.162%2C-1.544 -19.742%2C-4.672 -25.487%2C-13.749c-3.977%2C-6.284 -4.745%2C-13.983 -4.807%2C-21.259c-0.025%2C-2.972 0.202%2C-5.893 0.93%2C-8.78c0.711%2C-2.818 1.843%2C-5.478 3.374%2C-7.953c1.42%2C-2.295 4.572%2C-4.52 4.006%2C-7.419c-2.029%2C-5.943 -1.482%2C-11.642 0.202%2C-17.464c1.241%2C0.112 3.129%2C0.122 3.65%2C0.263c2.235%2C0.609 4.443%2C1.373 6.512%2C2.424c2.906%2C1.477 5.614%2C3.565 8.549%2C4.915c2.517%2C1.158 6.567%2C-0.761 9.273%2C-1.231c5.702%2C-0.992 11.713%2C-1.546 17.493%2C-0.964c3.138%2C0.316 6.26%2C0.635 9.356%2C1.26c1.575%2C0.318 3.134%2C0.746 4.697%2C1.119c1.639%2C0.39 3.218%2C-1.037 4.514%2C-1.845c4.663%2C-2.909 10.683%2C-6.544 16.45%2C-6.396c2.079%2C5.655 3.229%2C11.833 1.073%2C17.683c-0.738%2C2.002 0.599%2C2.906 1.746%2C4.36c2.193%2C2.833 3.696%2C5.907 4.643%2C9.353c0.764%2C2.779 0.828%2C6.479 0.776%2C8.928c-0.467%2C6.955 -0.037%2C13.66 -3.472%2C19.991c-2.836%2C5.228 -7.507%2C10.241 -12.849%2C12.991c-2.485%2C1.279 -4.981%2C2.297 -7.635%2C3.152c-1.659%2C0.534 -3.409%2C0.946 -5.139%2C1.165c-1.699%2C0.308 -4.07%2C0.087 -5.631%2C0.798c-2.734%2C1.245 1.739%2C5.302 2.438%2C6.724c1.317%2C2.681 1.794%2C5.605 1.951%2C8.56c0.356%2C6.708 0.049%2C13.503 0.019%2C20.221c-7.038%2C0.009 -14.079%2C-0.07 -21.147%2C-0.177zm74.198%2C-23.181c-0.524%2C8.389 -4.14%2C15.137 -11.501%2C19.548c-7.059%2C4.23 -15.425%2C3.292 -23.328%2C3.544c-4.96%2C0.159 -9.906%2C0.221 -14.85%2C0.249c0.099%2C-2.444 0.204%2C-4.889 0.259%2C-7.334c0.188%2C-8.351 1.475%2C-18.199 -3.396%2C-25.311c12.959%2C-2.88 27.28%2C-7.643 31.816%2C-21.41c2.326%2C-7.059 2.696%2C-14.444 2.327%2C-21.833c-0.366%2C-7.338 -3.284%2C-13.817 -7.843%2C-19.456c1.194%2C-3.838 1.557%2C-7.754 1.171%2C-11.789c-0.234%2C-2.447 -0.966%2C-10.192 -3.967%2C-10.746c-4.304%2C-1.38 -10.627%2C1.097 -14.316%2C2.861c-2.833%2C1.355 -5.453%2C2.912 -8.067%2C4.613c-7.552%2C-1.533 -14.944%2C-3.007 -22.71%2C-2.331c-5.629%2C0.49 -11.019%2C1.874 -16.531%2C2.982c-6.03%2C-4.351 -15.27%2C-10.384 -23.032%2C-8.333c-2.739%2C1.346 -3.314%2C8.218 -3.545%2C10.928c-0.345%2C4.046 0.051%2C7.97 1.275%2C11.806c-4.661%2C5.896 -8.075%2C12.235 -8.445%2C19.899c-0.136%2C2.819 0.088%2C5.628 0.74%2C8.388c1.078%2C4.566 1.855%2C9.455 3.701%2C13.788c2.114%2C4.961 5.044%2C9.393 9.38%2C12.712c6.565%2C5.024 13.977%2C6.782 21.861%2C7.901c-1.71%2C2.499 -2.692%2C5.279 -3.29%2C8.4c-5.94%2C2.442 -13.957%2C2.744 -18.176%2C-2.994c-1.96%2C-2.241 -3.131%2C-5.015 -5.157%2C-7.222c-2.452%2C-2.672 -5.804%2C-4.906 -9.451%2C-5.456c-1.605%2C-0.242 -3.075%2C-0.271 -4.674%2C0.286c-4.854%2C1.83 -1.146%2C6.594 1.863%2C8.032c3.995%2C2.731 5.742%2C6.771 7.492%2C11.082c-0.303%2C-0.776 1.026%2C2.126 1.153%2C2.348c0.886%2C1.4 1.912%2C2.726 3.122%2C3.865c3.058%2C2.623 6.357%2C4.161 10.289%2C4.998c4.178%2C0.889 8.505%2C0.378 12.688%2C-0.381c0.095%2C3.14 0.191%2C6.28 0.286%2C9.419c-6.353%2C-0.061 -12.704%2C-0.179 -19.055%2C-0.469c-5.422%2C-0.247 -11.421%2C0.083 -16.628%2C-1.737c-5.749%2C-2.009 -9.075%2C-6.584 -10.957%2C-12.35c-2.131%2C-6.529 -1.533%2C-14.136 -1.833%2C-20.93c-0.328%2C-7.42 -0.654%2C-14.84 -0.911%2C-22.263c-0.429%2C-12.438 -2.036%2C-29.869 -1.984%2C-42.314c0.036%2C-8.546 1.436%2C-12.252 2.026%2C-20.78c0.535%2C-7.738 5.615%2C-14.648 12.342%2C-18.293c6.998%2C-3.791 15.921%2C-2.958 23.592%2C-2.57c8.772%2C0.444 17.587%2C-0.642 26.369%2C-0.698c13.115%2C-0.083 25.235%2C0.477 38.349%2C0.563c4.544%2C0.03 9.093%2C0.08 13.632%2C0.302c3.741%2C0.183 7.655%2C0.148 11.243%2C1.344c6.622%2C2.207 11.985%2C7.732 14.311%2C14.275c1.442%2C4.056 1.388%2C8.242 1.733%2C12.482c0.354%2C4.343 0.453%2C8.66 0.51%2C13.016c0.114%2C8.761 0.627%2C16.509 0.723%2C25.269c0.189%2C17.422 0.482%2C34.696 -0.606%2C52.1z%22%2F%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n}\r\n\r\n.about-card-button {\r\n    width: 100px;\r\n    height: 35px;\r\n    color: #f5f5f5;\r\n    border: 1px solid #f5f5f5;\r\n}\r\n\r\n.about-card-button:hover {\r\n    color: #353839;\r\n    background: #f5f5f5;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n        -ms-grid-rows: auto 1fr;\r\n            grid-template-rows: auto 1fr;\r\n        grid-gap: 20px;\r\n        padding: 30px 10px 20px 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 0.3fr 1fr;\r\n            grid-template-columns: 0.3fr 1fr;\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n            grid-template-areas: 'side main main main';\r\n        grid-gap: 20px;\r\n        padding: 20px;\r\n    }\r\n    .side-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        grid-area: side;\r\n        max-width: 400px;\r\n    }\r\n    .side-content>div {\r\n        top: 0;\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n    }\r\n    .main-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 3;\r\n        grid-area: main;\r\n        min-height: 50vh;\r\n        overflow: auto;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/pages/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'position': modalVisible ? 'fixed' : 'relative'}\">\r\n    <app-site-header>\r\n    </app-site-header>\r\n    <div class=\"centered\" *ngIf=\"showLoader\">\r\n        <app-site-loader></app-site-loader>\r\n    </div>\r\n    <div class=\"wrapper\" *ngIf=\"!showLoader\">\r\n        <div class=\"side-content\">\r\n            <div class=\"about-card\">\r\n                <div *ngFor=\"let data of aboutCardData | async\">\r\n                    <div class=\"card text-center\">\r\n                        <div class=\"card-image\">\r\n                            <div class=\"card-avatar\" [ngStyle]=\"{'background-image': 'url('+ data.avatar + ')'}\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"card-header\">\r\n                                <h2 class=\"card-title\">{{data.name}}</h2>\r\n                                <div class=\"card-subtitle\">{{data.jobTitle}}&nbsp;at&nbsp;{{data.company}}</div>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <p>{{data.education}} at&nbsp;{{data.university}}</p>\r\n                                <p>{{data.city}}, {{data.state}}</p>\r\n                                <p><a routerLink=\"/contact\"><button class=\"contact-button\" (click)=\"cardItemClick('contact')\">Contact</button></a></p>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <a href=\"https://www.linkedin.com/in/iamsainikhil\" target=\"_blank\" (click)=\"cardItemClick('linkedin')\">\r\n                                    <p class=\"icon-svg linkedin\"></p>\r\n                                </a>\r\n                                <a href=\"https://codepen.io/iamsainikhil\" target=\"_blank\" (click)=\"cardItemClick('codepen')\">\r\n                                    <p class=\"icon-svg codepen\"></p>\r\n                                </a>\r\n                                <a href=\"https://github.com/iamsainikhil\" target=\"_blank\" (click)=\"cardItemClick('github')\">\r\n                                    <p class=\"icon-svg github\"></p>\r\n                                </a>\r\n                                <button class=\"about-card-button\" routerLink=\"/resume\" (click)=\"cardItemClick('resume')\">Resume</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-content\">\r\n            <app-tab-list></app-tab-list>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/pages/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_about_service__ = __webpack_require__("../../../../../src/app/shared/services/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(aboutService, modalService, gaService) {
        this.aboutService = aboutService;
        this.modalService = modalService;
        this.gaService = gaService;
        this.showLoader = true;
        this.yPosition = 0;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalService.showModal.subscribe(function (res) {
            setTimeout(function () {
                _this.modalVisible = res;
            }, 50);
            if (!res) {
                // once closes the modal go to the previous user position
                // when they tried to open the modal
                _this.modalService.scroll.subscribe(function (logic) {
                    if (logic) {
                        _this.scrollEnable = logic;
                        if (sessionStorage.getItem('y')) {
                            _this.yPosition = Number(sessionStorage.getItem('y'));
                            setTimeout(function () {
                                window.scrollTo({
                                    top: _this.yPosition,
                                    behavior: 'smooth'
                                });
                            }, 100);
                        }
                    }
                    else {
                        sessionStorage.removeItem('y');
                    }
                });
            }
        });
        this.subscription = this.aboutService.getAboutCardData().subscribe(function (res) {
            _this.aboutCardData = _this.aboutService.getAboutCardData();
            _this.showLoader = false;
        });
    };
    AboutPageComponent.prototype.cardItemClick = function (name) {
        this.gaService.emitEvent(name + "-about-card", 'about-card', 'link');
    };
    AboutPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__("../../../../../src/app/about/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/pages/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_about_service__["a" /* AboutService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__["a" /* GAService */]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/achievements-page/achievements-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-items {\r\n    padding-left: 10px;\r\n}\r\n\r\n.title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.selected-chip {\r\n    color: #f5f5f5;\r\n    background: #808080;\r\n}\r\n\r\n.chip:hover {\r\n    color: #f5f5f5;\r\n    background: #808080;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .title {\r\n        text-align: center;\r\n    }\r\n    .filter-items {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .filter {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        padding: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/achievements-page/achievements-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<app-achievements [achievementsData]=\"achievementsData\" [page]=\"page\" [showLoader]=\"showLoader\"></app-achievements>"

/***/ }),

/***/ "../../../../../src/app/achievements-page/achievements-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_achievements_service__ = __webpack_require__("../../../../../src/app/shared/services/achievements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_filter_service__ = __webpack_require__("../../../../../src/app/shared/services/filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AchievementsPageComponent = /** @class */ (function () {
    function AchievementsPageComponent(achievementsService, filterService) {
        this.achievementsService = achievementsService;
        this.filterService = filterService;
        this.page = 'achievements';
    }
    AchievementsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterService.chipName.subscribe(function (name) {
            _this.chipName = name;
            _this.chipCondition(_this.chipName);
        });
    };
    /**
   * conditions to highlight respective chips
   */
    AchievementsPageComponent.prototype.chipCondition = function (data) {
        if (data === '' || data === 'show all') {
            this.defaultClick();
        }
        else if (data === 'awards') {
            this.awardsClick();
        }
        else if (data === 'testdome') {
            this.testDomeClick();
        }
        else if (data === 'certificates') {
            this.certificatesClick();
        }
    };
    AchievementsPageComponent.prototype.defaultClick = function () {
        var _this = this;
        this.showLoader = true;
        this.subscription = this.achievementsService.getAchievementsData().subscribe(function () {
            _this.achievementsData = _this.achievementsService.getAchievementsData();
            _this.loaderOff();
        });
    };
    AchievementsPageComponent.prototype.certificatesClick = function () {
        var _this = this;
        this.showLoader = true;
        var subscription = this.achievementsService.getQueriedAchievementsData('certificate', '==', true).subscribe(function () {
            _this.achievementsData = _this.achievementsService.getQueriedAchievementsData('certificate', '==', true);
            _this.loaderOff();
        });
        // adding child subscription to the parent
        this.subscription.add(subscription);
    };
    AchievementsPageComponent.prototype.awardsClick = function () {
        var _this = this;
        this.showLoader = true;
        var subscription = this.achievementsService.getQueriedAchievementsData('award', '==', true).subscribe(function () {
            _this.achievementsData = _this.achievementsService.getQueriedAchievementsData('award', '==', true);
            _this.loaderOff();
        });
        // adding child subscription to the parent
        this.subscription.add(subscription);
    };
    AchievementsPageComponent.prototype.testDomeClick = function () {
        var _this = this;
        this.showLoader = true;
        var subscription = this.achievementsService.getQueriedAchievementsData('testdome', '==', true).subscribe(function () {
            _this.achievementsData = _this.achievementsService.getQueriedAchievementsData('testdome', '==', true);
            _this.loaderOff();
        });
        // adding child subscription to the parent
        this.subscription.add(subscription);
    };
    AchievementsPageComponent.prototype.loaderOff = function () {
        var _this = this;
        setTimeout(function () {
            _this.showLoader = false;
        }, 100);
    };
    AchievementsPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.filterService.chipName.next('');
    };
    AchievementsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-achievements-page',
            template: __webpack_require__("../../../../../src/app/achievements-page/achievements-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/achievements-page/achievements-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_achievements_service__["a" /* AchievementsService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_filter_service__["a" /* FilterService */]])
    ], AchievementsPageComponent);
    return AchievementsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* offline message */\r\n\r\n.main {\r\n    margin: 10% auto;\r\n}\r\n\r\n.text {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    padding: 20px;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.loader {\r\n    width: 100%;\r\n    height: auto;\r\n    position: absolute;\r\n    margin: 30% 20%;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n}\r\n\r\n.loader svg {\r\n    width: 60%;\r\n    height: auto;\r\n}\r\n\r\n.loader:before {\r\n    display: none;\r\n}\r\n\r\n.drawit {\r\n    fill: transparent;\r\n    stroke: #000;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 300;\r\n    stroke-dashoffset: -300;\r\n    -webkit-animation: dash 5s linear .5s infinite alternate;\r\n            animation: dash 5s linear .5s infinite alternate;\r\n}\r\n\r\n.letters {\r\n    stroke: #343434;\r\n    fill: #f5f7f7;\r\n}\r\n\r\n/* Keyframes */\r\n\r\n@-webkit-keyframes dash {\r\n    0% {\r\n        stroke-dashoffset: -300;\r\n    }\r\n    30% {\r\n        stroke-dashoffset: 0;\r\n    }\r\n    60% {\r\n        stroke-dashoffset: 0;\r\n    }\r\n    100% {\r\n        stroke-dashoffset: -300;\r\n    }\r\n}\r\n\r\n@keyframes dash {\r\n    0% {\r\n        stroke-dashoffset: -300;\r\n    }\r\n    30% {\r\n        stroke-dashoffset: 0;\r\n    }\r\n    60% {\r\n        stroke-dashoffset: 0;\r\n    }\r\n    100% {\r\n        stroke-dashoffset: -300;\r\n    }\r\n}\r\n\r\n.scroll-top-icon {\r\n    display: block;\r\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 512 512%22 style%3D%22enable-background%3Anew 0 0 512 512%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Cpath d%3D%22M368.1%2C0H143.9c-21.023%2C0-38.128%2C17.105-38.128%2C38.128v55.647v324.45v55.646c0%2C21.023%2C17.105%2C38.128%2C38.128%2C38.128H368.1%0D%09%09%09c21.023%2C0%2C38.128-17.105%2C38.128-38.128v-55.646V93.775V38.128C406.228%2C17.105%2C389.123%2C0%2C368.1%2C0z M375.81%2C473.872%0D%09%09%09c0%2C4.251-3.459%2C7.711-7.711%2C7.711H143.9c-4.251%2C0-7.711-3.459-7.711-7.711v-55.646H375.81V473.872z M375.81%2C387.809H136.19%0D%09%09%09V124.193H375.81V387.809z M375.81%2C93.775H136.19V38.128c0-4.251%2C3.459-7.711%2C7.711-7.711H368.1c4.251%2C0%2C7.711%2C3.459%2C7.711%2C7.711%0D%09%09%09V93.775z%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Crect x%3D%22191.841%22 y%3D%2246.883%22 width%3D%2269.781%22 height%3D%2230.417%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Crect x%3D%22232.347%22 y%3D%22434.693%22 width%3D%2247.316%22 height%3D%2230.417%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Crect x%3D%22292.035%22 y%3D%2246.883%22 width%3D%2228.119%22 height%3D%2230.417%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Cpolygon points%3D%22256%2C147.256 168.816%2C234.44 190.324%2C255.948 240.791%2C205.481 240.791%2C343.236 271.209%2C343.236 271.209%2C205.481 %0D%09%09%09321.675%2C255.948 343.183%2C234.44 %09%09%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n    background-size: contain;\r\n    width: 50px;\r\n    height: 50px;\r\n    bottom: 30px;\r\n    right: 20px;\r\n    position: fixed;\r\n    z-index: 999;\r\n}\r\n\r\n.scroll-top-icon:hover {\r\n    cursor: pointer;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    transition-duration: 1s;\r\n    -webkit-transition-duration: 1s;\r\n    -moz-transition-duration: 1s;\r\n    -o-transition-duration: 1s;\r\n    transition-delay: 0.2s;\r\n    -webkit-transition-delay: 0.2s;\r\n    -moz-transition-delay: 0.2s;\r\n    -o-transition-delay: 0.2s;\r\n}\r\n\r\n/* wrapper */\r\n\r\n@supports ((display: -ms-grid) or (display: grid)) {\r\n    .wrapper {\r\n        min-height: 100vh;\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-rows: 1fr auto;\r\n            grid-template-rows: 1fr auto;\r\n        -ms-grid-columns: 100%;\r\n            grid-template-columns: 100%;\r\n    }\r\n}\r\n\r\n/* for IE 10, 11 or later versions */\r\n\r\n@supports not ((display: -ms-grid) or (display: grid)) {\r\n    .wrapper {\r\n        display: -ms-grid;\r\n        overflow-x: hidden;\r\n        min-height: 100vh;\r\n        -ms-grid-rows: 2fr 1fr;\r\n        -ms-grid-columns: 100%;\r\n    }\r\n}\r\n\r\nmain {\r\n    padding-top: 70px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .scroll-top-icon {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" id=\"top\" *ngIf=\"isConnected\">\r\n    <main>\r\n        <router-outlet (deactivate)=\"onDeactivate()\" appScrollable (scrollPosition)=\"getPosition($event)\"></router-outlet>\r\n\r\n        <span class=\"scroll-top-icon\" pageScroll [pageScrollOffset]=\"200\" href=\"#top\" *ngIf=\"showIcon\" (click)=\"trackST()\"></span>\r\n    </main>\r\n    <footer>\r\n        <!-- footer -->\r\n        <app-site-footer></app-site-footer>\r\n    </footer>\r\n</div>\r\n<div class=\"main\" *ngIf=\"!isConnected\">\r\n    <div class=\"image\">\r\n        <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5NiA0OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5NiA0OTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM4RUE1QTQ7IiBkPSJNNDk2LDQ3Ni44YzAsMTAuNC04LjgsMTkuMi0xOS4yLDE5LjJIMTkuMkM4LjgsNDk2LDAsNDg3LjIsMCw0NzYuOFYxOS4yQzAsOC44LDguOCwwLDE5LjIsMGg0NTcuNg0KCUM0ODcuMiwwLDQ5Niw4LjgsNDk2LDE5LjJWNDc2Ljh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkRGRkZGOyIgZD0iTTE2LDgwdjM4MS42QzE2LDQ3MiwyMy4yLDQ4MCwzMi44LDQ4MGg0MzAuNGM5LjYsMCwxNi44LTgsMTYuOC0xOC40VjgwSDE2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U4RUZFRjsiIGQ9Ik00NjMuMiw0ODBjOS42LDAsMTYuOC04LDE2LjgtMTguNFY4MEgxNiIvPg0KPHJlY3QgeD0iMTYiIHk9IjgwIiBzdHlsZT0iZmlsbDojRENFNUU1OyIgd2lkdGg9IjQ2NCIgaGVpZ2h0PSIyNCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZERkZGRjsiIGQ9Ik0zOTUuMiw0MGMwLDkuNi04LDE2LTE3LjYsMTZIMzJjLTkuNiwwLTgtNi40LTgtMTZsMCwwYzAtOS42LTEuNi0xNiw4LTE2aDM0NS42DQoJQzM4Ny4yLDI0LDM5NS4yLDMwLjQsMzk1LjIsNDBMMzk1LjIsNDB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTZFRkVGOyIgZD0iTTI0LDQwLjhMMjQsNDAuOGMwLTkuNi0xLjYtMTYuOCw4LTE2LjhoMzQ1LjZjOS42LDAsMTcuNiw3LjIsMTcuNiwxNi44bDAsMCIvPg0KPGNpcmNsZSBzdHlsZT0ib3BhY2l0eTowLjQ7ZmlsbDojQjFCQ0JDO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBjeD0iNDI2LjQiIGN5PSI0MS42IiByPSI4LjgiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGN4PSI0MjYuNCIgY3k9IjM3LjYiIHI9IjguOCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U4RUZFRTsiIGQ9Ik00MjAsMzEuMmMzLjItMy4yLDkuNi0zLjIsMTIuOCwwYzMuMiwzLjIsMy4yLDkuNiwwLDEyLjgiLz4NCjxjaXJjbGUgc3R5bGU9Im9wYWNpdHk6MC40O2ZpbGw6I0IxQkNCQztlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgY3g9IjQ2Mi40IiBjeT0iNDEuNiIgcj0iOC44Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iNDYyLjQiIGN5PSIzNy42IiByPSI4LjgiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFOEVGRUU7IiBkPSJNNDU2LDMxLjJjMy4yLTMuMiw5LjYtMy4yLDEyLjgsMGMzLjIsMy4yLDMuMiw5LjYsMCwxMi44Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOEVBNUE0OyIgZD0iTTEwMC44LDMybC0wLjgtMC44aC0yLjRjLTAuOCwwLTAuOCwwLTAuOCwwLjhsLTEuNiw2LjRsMCwwbDAsMEw5Mi44LDMyYy0wLjgsMC0wLjgsMC0xLjYsMGgtMi40DQoJQzg4LDMyLDg4LDMyLDg4LDMyLjhMODUuNiw0MGwwLDBsMCwwTDg0LDMzLjZjMC0xLjYsMC0xLjYtMC44LTEuNmgtMi40SDgwaC0wLjhoLTIuNEM3NiwzMiw3NiwzMiw3NiwzMi44bC0xLjYsNi40bDAsMGwwLDBMNzIsMzIuOA0KCWMwLTAuOC0wLjgtMC44LTEuNi0wLjhoLTEuNmMtMC44LDAtMC44LDAtMS42LDAuOGwtMS42LDYuNGwwLDBsMCwwbC0yLjQtNi40YzAtMC44LDAtMC44LTAuOC0wLjhINjBoLTAuOGMwLDAsMCwwLTAuOCwwSDU2DQoJYzAsMC0wLjgsMC0wLjgsMC44bC0xLjYsNi40bDAsMGwwLDBsLTIuNC02LjRjMC0wLjgtMC44LTAuOC0xLjYtMC44SDQ4Yy0wLjgsMC0wLjgsMC0wLjgsMC44bC0yLjQsNi40bDAsMGwwLDBsLTEuNi02LjQNCglDNDIuNCwzMiw0Mi40LDMyLDQxLjYsMzJoLTIuNGMwLDAtMC44LDAtMC44LDAuOHYwLjhsNCwxMy42YzAsMC44LDAuOCwwLjgsMC44LDAuOGgyLjRjMC44LDAsMC44LDAsMC44LTAuOGwyLjQtNy4yYzAsMCwwLDAsMC0wLjgNCgljMCwwLDAsMCwwLDAuOGwyLjQsNi40YzAsMC44LDAuOCwwLjgsMC44LDAuOGgyLjRjMC44LDAsMC44LDAsMC44LTAuOGw0LTEybDMuMiwxMmMwLDAuOCwwLjgsMC44LDAuOCwwLjhoMi40YzAuOCwwLDAuOCwwLDAuOC0wLjgNCglsMy4yLTYuNGMwLDAsMCwwLDAtMC44YzAsMCwwLDAsMCwwLjhsMi40LDYuNGMwLDAuOCwwLjgsMC44LDAuOCwwLjhoMi40YzAuOCwwLDAuOCwwLDAuOC0wLjhsNC0xMmwzLjIsMTJjMCwwLjgsMC44LDAuOCwwLjgsMC44DQoJaDIuNGMwLjgsMCwwLjgsMCwwLjgtMC44bDMuMi02LjRjMCwwLDAsMCwwLTAuOGMwLDAsMCwwLDAsMC44bDIuNCw2LjRjMCwwLjgsMC44LDAuOCwwLjgsMC44SDk2YzAuOCwwLDAuOCwwLDAuOC0wLjhsNC0xMy42DQoJQzEwMS42LDMyLjgsMTAxLjYsMzIsMTAwLjgsMzJ6Ii8+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNEQ0U1RTU7IiBjeD0iMTExLjIiIGN5PSIyNDgiIHI9IjIzLjIiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNEQ0U1RTU7IiBjeD0iMzg0LjgiIGN5PSIyNDgiIHI9IjIzLjIiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRENFNUU1OyIgZD0iTTMwNC44LDM2MGMtNi40LDAtMTItNS42LTEyLTEyYzAtMjQuOC0yMC00NC44LTQ0LjgtNDQuOHMtNDQuOCwyMC00NC44LDQ0LjhjMCw2LjQtNS42LDEyLTEyLDEyDQoJCXMtMTItNS42LTEyLTEyYzAtMzguNCwzMS4yLTY4LjgsNjguOC02OC44czY4LjgsMzEuMiw2OC44LDY4LjhDMzE2LjgsMzU0LjQsMzEyLDM2MCwzMDQuOCwzNjB6Ii8+DQo8L2c+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM3MzgxODI7IiBjeD0iMTExLjIiIGN5PSIyMzYiIHI9IjIzLjIiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM3MzgxODI7IiBjeD0iMzg0LjgiIGN5PSIyMzYiIHI9IjIzLjIiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNzM4MTgyOyIgZD0iTTMwNC44LDM0OGMtNi40LDAtMTItNS42LTEyLTEyYzAtMjQuOC0yMC00NC44LTQ0LjgtNDQuOHMtNDQuOCwyMC00NC44LDQ0LjhjMCw2LjQtNS42LDEyLTEyLDEyDQoJCXMtMTItNS42LTEyLTEyYzAtMzguNCwzMS4yLTY4LjgsNjguOC02OC44czY4LjgsMzEuMiw2OC44LDY4LjhDMzE2LjgsMzQyLjQsMzEyLDM0OCwzMDQuOCwzNDh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==\"\r\n            alt=\"sad-face-browser\">\r\n    </div>\r\n    <div class=\"text\">Check your connection or try again.</div>\r\n    <div class=\"loader\">\r\n        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"1082.2\" height=\"74.702\" viewBox=\"0 0 1082.2 74.702\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#000\" stroke-width=\"0.25mm\" fill=\"none\" style=\"stroke:#000;stroke-width:0.25mm;fill:none\"><path class=\"drawit letters\" d=\"M 40.1 73.501 L 9 15.701 L 9 73.501 L 0 73.501 L 0 3.501 L 12.6 3.501 L 43.5 61.701 L 43.5 3.501 L 52.5 3.501 L 52.5 73.501 L 40.1 73.501 Z M 673.5 21.501 L 673.5 30.201 Q 676.3 26.001 680.65 23.151 Q 685 20.301 691 20.301 Q 699.8 20.301 704.15 25.601 Q 708.5 30.901 708.5 39.601 L 708.5 73.501 L 699.5 73.501 L 699.5 40.601 Q 699.5 34.901 696.9 31.551 Q 694.3 28.201 689.5 28.201 Q 687.2 28.201 685 29.051 Q 682.8 29.901 680.75 31.401 Q 678.7 32.901 676.95 34.901 Q 675.2 36.901 673.8 39.101 L 673.8 73.501 L 664.8 73.501 L 664.8 21.501 L 673.5 21.501 Z M 193 21.501 L 193 30.201 Q 195.8 26.001 200.15 23.151 Q 204.5 20.301 210.5 20.301 Q 219.3 20.301 223.65 25.601 Q 228 30.901 228 39.601 L 228 73.501 L 219 73.501 L 219 40.601 Q 219 34.901 216.4 31.551 Q 213.8 28.201 209 28.201 Q 206.7 28.201 204.5 29.051 Q 202.3 29.901 200.25 31.401 Q 198.2 32.901 196.45 34.901 Q 194.7 36.901 193.3 39.101 L 193.3 73.501 L 184.3 73.501 L 184.3 21.501 L 193 21.501 Z M 1018 21.501 L 1018 30.201 Q 1020.8 26.001 1025.15 23.151 Q 1029.5 20.301 1035.5 20.301 Q 1044.3 20.301 1048.65 25.601 Q 1053 30.901 1053 39.601 L 1053 73.501 L 1044 73.501 L 1044 40.601 Q 1044 34.901 1041.4 31.551 Q 1038.8 28.201 1034 28.201 Q 1031.7 28.201 1029.5 29.051 Q 1027.3 29.901 1025.25 31.401 Q 1023.2 32.901 1021.45 34.901 Q 1019.7 36.901 1018.3 39.101 L 1018.3 73.501 L 1009.3 73.501 L 1009.3 21.501 L 1018 21.501 Z M 732.7 21.501 L 732.7 30.201 Q 735.5 26.001 739.85 23.151 Q 744.2 20.301 750.2 20.301 Q 759 20.301 763.35 25.601 Q 767.7 30.901 767.7 39.601 L 767.7 73.501 L 758.7 73.501 L 758.7 40.601 Q 758.7 34.901 756.1 31.551 Q 753.5 28.201 748.7 28.201 Q 746.4 28.201 744.2 29.051 Q 742 29.901 739.95 31.401 Q 737.9 32.901 736.15 34.901 Q 734.4 36.901 733 39.101 L 733 73.501 L 724 73.501 L 724 21.501 L 732.7 21.501 Z M 384.2 21.501 L 384.2 30.201 Q 387 26.001 391.35 23.151 Q 395.7 20.301 401.7 20.301 Q 410.5 20.301 414.85 25.601 Q 419.2 30.901 419.2 39.601 L 419.2 73.501 L 410.2 73.501 L 410.2 40.601 Q 410.2 34.901 407.6 31.551 Q 405 28.201 400.2 28.201 Q 397.9 28.201 395.7 29.051 Q 393.5 29.901 391.45 31.401 Q 389.4 32.901 387.65 34.901 Q 385.9 36.901 384.5 39.101 L 384.5 73.501 L 375.5 73.501 L 375.5 21.501 L 384.2 21.501 Z M 825.3 51.201 L 788.9 51.201 Q 789.8 58.501 794 62.601 Q 798.2 66.701 805.1 66.701 Q 809.6 66.701 813.2 65.751 Q 816.8 64.801 820.1 63.301 L 822.2 71.001 Q 818.6 72.701 814.1 73.701 Q 809.6 74.701 804 74.701 Q 798.4 74.701 793.9 72.851 Q 789.4 71.001 786.25 67.551 Q 783.1 64.101 781.4 59.051 Q 779.7 54.001 779.7 47.501 Q 779.7 41.701 781.4 36.701 Q 783.1 31.701 786.2 28.051 Q 789.3 24.401 793.6 22.351 Q 797.9 20.301 803.2 20.301 Q 808.8 20.301 813 22.201 Q 817.2 24.101 820 27.401 Q 822.8 30.701 824.2 35.101 Q 825.6 39.501 825.6 44.401 Q 825.6 47.901 825.3 51.201 Z M 476.8 51.201 L 440.4 51.201 Q 441.3 58.501 445.5 62.601 Q 449.7 66.701 456.6 66.701 Q 461.1 66.701 464.7 65.751 Q 468.3 64.801 471.6 63.301 L 473.7 71.001 Q 470.1 72.701 465.6 73.701 Q 461.1 74.701 455.5 74.701 Q 449.9 74.701 445.4 72.851 Q 440.9 71.001 437.75 67.551 Q 434.6 64.101 432.9 59.051 Q 431.2 54.001 431.2 47.501 Q 431.2 41.701 432.9 36.701 Q 434.6 31.701 437.7 28.051 Q 440.8 24.401 445.1 22.351 Q 449.4 20.301 454.7 20.301 Q 460.3 20.301 464.5 22.201 Q 468.7 24.101 471.5 27.401 Q 474.3 30.701 475.7 35.101 Q 477.1 39.501 477.1 44.401 Q 477.1 47.901 476.8 51.201 Z M 323.3 51.201 L 286.9 51.201 Q 287.8 58.501 292 62.601 Q 296.2 66.701 303.1 66.701 Q 307.6 66.701 311.2 65.751 Q 314.8 64.801 318.1 63.301 L 320.2 71.001 Q 316.6 72.701 312.1 73.701 Q 307.6 74.701 302 74.701 Q 296.4 74.701 291.9 72.851 Q 287.4 71.001 284.25 67.551 Q 281.1 64.101 279.4 59.051 Q 277.7 54.001 277.7 47.501 Q 277.7 41.701 279.4 36.701 Q 281.1 31.701 284.2 28.051 Q 287.3 24.401 291.6 22.351 Q 295.9 20.301 301.2 20.301 Q 306.8 20.301 311 22.201 Q 315.2 24.101 318 27.401 Q 320.8 30.701 322.2 35.101 Q 323.6 39.501 323.6 44.401 Q 323.6 47.901 323.3 51.201 Z M 245.7 23.401 L 247.6 7.001 L 254.5 7.001 L 254.5 23.401 L 268.9 23.401 L 268.9 31.201 L 254.5 31.201 L 254.5 56.301 Q 254.5 59.201 255.15 61.201 Q 255.8 63.201 256.9 64.401 Q 258 65.601 259.55 66.151 Q 261.1 66.701 262.8 66.701 Q 265.3 66.701 267.5 65.901 Q 269.7 65.101 271.7 64.001 L 274.2 71.201 Q 272.2 72.401 268.8 73.551 Q 265.4 74.701 261.7 74.701 Q 254.2 74.701 249.85 69.801 Q 245.5 64.901 245.5 55.601 L 245.5 31.201 L 236.5 31.201 L 236.5 23.401 L 245.7 23.401 Z M 887 23.401 L 888.9 7.001 L 895.8 7.001 L 895.8 23.401 L 910.2 23.401 L 910.2 31.201 L 895.8 31.201 L 895.8 56.301 Q 895.8 59.201 896.45 61.201 Q 897.1 63.201 898.2 64.401 Q 899.3 65.601 900.85 66.151 Q 902.4 66.701 904.1 66.701 Q 906.6 66.701 908.8 65.901 Q 911 65.101 913 64.001 L 915.5 71.201 Q 913.5 72.401 910.1 73.551 Q 906.7 74.701 903 74.701 Q 895.5 74.701 891.15 69.801 Q 886.8 64.901 886.8 55.601 L 886.8 31.201 L 877.8 31.201 L 877.8 23.401 L 887 23.401 Z M 491.3 23.401 L 493.2 7.001 L 500.1 7.001 L 500.1 23.401 L 514.5 23.401 L 514.5 31.201 L 500.1 31.201 L 500.1 56.301 Q 500.1 59.201 500.75 61.201 Q 501.4 63.201 502.5 64.401 Q 503.6 65.601 505.15 66.151 Q 506.7 66.701 508.4 66.701 Q 510.9 66.701 513.1 65.901 Q 515.3 65.101 517.3 64.001 L 519.8 71.201 Q 517.8 72.401 514.4 73.551 Q 511 74.701 507.3 74.701 Q 499.8 74.701 495.45 69.801 Q 491.1 64.901 491.1 55.601 L 491.1 31.201 L 482.1 31.201 L 482.1 23.401 L 491.3 23.401 Z M 873.5 23.401 L 870.8 31.001 Q 867.9 29.601 865.4 28.951 Q 862.9 28.301 859.8 28.301 Q 856.3 28.301 853.25 29.601 Q 850.2 30.901 848 33.351 Q 845.8 35.801 844.55 39.301 Q 843.3 42.801 843.3 47.301 Q 843.3 51.401 844.45 54.901 Q 845.6 58.401 847.7 61.051 Q 849.8 63.701 852.7 65.201 Q 855.6 66.701 859.2 66.701 Q 863 66.701 865.7 65.901 Q 868.4 65.101 871.5 63.401 L 874.3 71.001 Q 871.1 72.701 867.3 73.701 Q 863.5 74.701 858.6 74.701 Q 853 74.701 848.5 72.701 Q 844 70.701 840.8 67.101 Q 837.6 63.501 835.85 58.501 Q 834.1 53.501 834.1 47.501 Q 834.1 41.901 835.85 36.951 Q 837.6 32.001 840.9 28.301 Q 844.2 24.601 848.85 22.451 Q 853.5 20.301 859.3 20.301 Q 863.8 20.301 867.1 21.101 Q 870.4 21.901 873.5 23.401 Z M 594.7 23.401 L 592 31.001 Q 589.1 29.601 586.6 28.951 Q 584.1 28.301 581 28.301 Q 577.5 28.301 574.45 29.601 Q 571.4 30.901 569.2 33.351 Q 567 35.801 565.75 39.301 Q 564.5 42.801 564.5 47.301 Q 564.5 51.401 565.65 54.901 Q 566.8 58.401 568.9 61.051 Q 571 63.701 573.9 65.201 Q 576.8 66.701 580.4 66.701 Q 584.2 66.701 586.9 65.901 Q 589.6 65.101 592.7 63.401 L 595.5 71.001 Q 592.3 72.701 588.5 73.701 Q 584.7 74.701 579.8 74.701 Q 574.2 74.701 569.7 72.701 Q 565.2 70.701 562 67.101 Q 558.8 63.501 557.05 58.501 Q 555.3 53.501 555.3 47.501 Q 555.3 41.901 557.05 36.951 Q 558.8 32.001 562.1 28.301 Q 565.4 24.601 570.05 22.451 Q 574.7 20.301 580.5 20.301 Q 585 20.301 588.3 21.101 Q 591.6 21.901 594.7 23.401 Z M 366.5 20.901 L 363.8 30.201 Q 361.9 29.401 359.3 29.401 Q 356.5 29.401 353.85 30.601 Q 351.2 31.801 349.15 34.201 Q 347.1 36.601 345.85 40.351 Q 344.6 44.101 344.6 49.201 L 344.6 73.501 L 335.6 73.501 L 335.6 21.501 L 344.3 21.501 L 344.3 32.801 Q 345.2 30.401 346.7 28.101 Q 348.2 25.801 350.25 24.101 Q 352.3 22.401 355 21.351 Q 357.7 20.301 361 20.301 Q 362.5 20.301 363.95 20.451 Q 365.4 20.601 366.5 20.901 Z M 945.5 47.501 Q 945.5 41.201 947.5 36.151 Q 949.5 31.101 952.95 27.601 Q 956.4 24.101 961.15 22.201 Q 965.9 20.301 971.4 20.301 Q 976.8 20.301 981.55 22.201 Q 986.3 24.101 989.8 27.601 Q 993.3 31.101 995.3 36.101 Q 997.3 41.101 997.3 47.301 Q 997.3 53.501 995.35 58.551 Q 993.4 63.601 989.9 67.201 Q 986.4 70.801 981.65 72.751 Q 976.9 74.701 971.4 74.701 Q 965.8 74.701 961.05 72.701 Q 956.3 70.701 952.85 67.101 Q 949.4 63.501 947.45 58.501 Q 945.5 53.501 945.5 47.501 Z M 65.5 47.501 Q 65.5 41.201 67.5 36.151 Q 69.5 31.101 72.95 27.601 Q 76.4 24.101 81.15 22.201 Q 85.9 20.301 91.4 20.301 Q 96.8 20.301 101.55 22.201 Q 106.3 24.101 109.8 27.601 Q 113.3 31.101 115.3 36.101 Q 117.3 41.101 117.3 47.301 Q 117.3 53.501 115.35 58.551 Q 113.4 63.601 109.9 67.201 Q 106.4 70.801 101.65 72.751 Q 96.9 74.701 91.4 74.701 Q 85.8 74.701 81.05 72.701 Q 76.3 70.701 72.85 67.101 Q 69.4 63.501 67.45 58.501 Q 65.5 53.501 65.5 47.501 Z M 601 47.501 Q 601 41.201 603 36.151 Q 605 31.101 608.45 27.601 Q 611.9 24.101 616.65 22.201 Q 621.4 20.301 626.9 20.301 Q 632.3 20.301 637.05 22.201 Q 641.8 24.101 645.3 27.601 Q 648.8 31.101 650.8 36.101 Q 652.8 41.101 652.8 47.301 Q 652.8 53.501 650.85 58.551 Q 648.9 63.601 645.4 67.201 Q 641.9 70.801 637.15 72.751 Q 632.4 74.701 626.9 74.701 Q 621.3 74.701 616.55 72.701 Q 611.8 70.701 608.35 67.101 Q 604.9 63.501 602.95 58.501 Q 601 53.501 601 47.501 Z M 933.5 21.501 L 933.5 73.501 L 924.5 73.501 L 924.5 21.501 L 933.5 21.501 Z M 168.3 21.501 L 168.3 73.501 L 159.3 73.501 L 159.3 21.501 L 168.3 21.501 Z M 988.1 47.501 Q 988.1 43.601 986.85 40.101 Q 985.6 36.601 983.35 34.001 Q 981.1 31.401 978.05 29.851 Q 975 28.301 971.4 28.301 Q 963.5 28.301 959.1 33.501 Q 954.7 38.701 954.7 47.301 Q 954.7 51.201 955.95 54.751 Q 957.2 58.301 959.45 60.951 Q 961.7 63.601 964.75 65.151 Q 967.8 66.701 971.4 66.701 Q 975.3 66.701 978.4 65.301 Q 981.5 63.901 983.65 61.351 Q 985.8 58.801 986.95 55.301 Q 988.1 51.801 988.1 47.501 Z M 108.1 47.501 Q 108.1 43.601 106.85 40.101 Q 105.6 36.601 103.35 34.001 Q 101.1 31.401 98.05 29.851 Q 95 28.301 91.4 28.301 Q 83.5 28.301 79.1 33.501 Q 74.7 38.701 74.7 47.301 Q 74.7 51.201 75.95 54.751 Q 77.2 58.301 79.45 60.951 Q 81.7 63.601 84.75 65.151 Q 87.8 66.701 91.4 66.701 Q 95.3 66.701 98.4 65.301 Q 101.5 63.901 103.65 61.351 Q 105.8 58.801 106.95 55.301 Q 108.1 51.801 108.1 47.501 Z M 643.6 47.501 Q 643.6 43.601 642.35 40.101 Q 641.1 36.601 638.85 34.001 Q 636.6 31.401 633.55 29.851 Q 630.5 28.301 626.9 28.301 Q 619 28.301 614.6 33.501 Q 610.2 38.701 610.2 47.301 Q 610.2 51.201 611.45 54.751 Q 612.7 58.301 614.95 60.951 Q 617.2 63.601 620.25 65.151 Q 623.3 66.701 626.9 66.701 Q 630.8 66.701 633.9 65.301 Q 637 63.901 639.15 61.351 Q 641.3 58.801 642.45 55.301 Q 643.6 51.801 643.6 47.501 Z M 788.8 43.901 L 817.3 43.901 Q 817.3 36.301 813.5 32.201 Q 809.7 28.101 803 28.101 Q 797.1 28.101 793.35 32.101 Q 789.6 36.101 788.8 43.901 Z M 286.8 43.901 L 315.3 43.901 Q 315.3 36.301 311.5 32.201 Q 307.7 28.101 301 28.101 Q 295.1 28.101 291.35 32.101 Q 287.6 36.101 286.8 43.901 Z M 440.3 43.901 L 468.8 43.901 Q 468.8 36.301 465 32.201 Q 461.2 28.101 454.5 28.101 Q 448.6 28.101 444.85 32.101 Q 441.1 36.101 440.3 43.901 Z M 1068.8 68.001 Q 1068.8 64.901 1070.55 63.101 Q 1072.3 61.301 1075.5 61.301 Q 1078.1 61.301 1080.15 63.301 Q 1082.2 65.301 1082.2 68.001 Q 1082.2 71.001 1080.3 72.851 Q 1078.4 74.701 1075.5 74.701 Q 1072.8 74.701 1070.8 72.701 Q 1068.8 70.701 1068.8 68.001 Z M 929 12.601 Q 926.4 12.601 924.55 10.751 Q 922.7 8.901 922.7 6.301 Q 922.7 3.401 924.4 1.701 Q 926.1 0.001 929 0.001 Q 931.6 0.001 933.45 1.851 Q 935.3 3.701 935.3 6.301 Q 935.3 9.201 933.6 10.901 Q 931.9 12.601 929 12.601 Z M 163.8 12.601 Q 161.2 12.601 159.35 10.751 Q 157.5 8.901 157.5 6.301 Q 157.5 3.401 159.2 1.701 Q 160.9 0.001 163.8 0.001 Q 166.4 0.001 168.25 1.851 Q 170.1 3.701 170.1 6.301 Q 170.1 9.201 168.4 10.901 Q 166.7 12.601 163.8 12.601 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_wow__ = __webpack_require__("../../../../ngx-wow/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(afs, modalService, gaService, router, wowService) {
        var _this = this;
        this.afs = afs;
        this.modalService = modalService;
        this.gaService = gaService;
        this.router = router;
        this.wowService = wowService;
        this.analyticsId = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].analyticsId;
        /**
         * To know whether the user device is connected online
         */
        this.isConnected = navigator.onLine;
        /**
         * Icon show/hide condition & user device height
         */
        this.showIcon = false;
        afs.firestore.settings({ timestampsInSnapshots: true });
        /**
         * To detect web status
         */
        window.addEventListener('online', function () { _this.isConnected = true; });
        window.addEventListener('offline', function () { _this.isConnected = false; });
        /**
         * overriding default options for ng-page-scroll
         */
        __WEBPACK_IMPORTED_MODULE_3_ngx_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = 0;
        __WEBPACK_IMPORTED_MODULE_3_ngx_page_scroll__["b" /* PageScrollConfig */].defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0) {
                    return b;
                }
                if (t === d) {
                    return b + c;
                }
                if ((t /= d / 2) < 1) {
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                }
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    AppComponent.prototype.getPosition = function (e) {
        var _this = this;
        if (e === 'bottom') {
            this.modalService.showModal.subscribe(function (res) {
                if (res) {
                    _this.showIcon = false;
                }
                else {
                    _this.showIcon = true;
                }
            });
        }
        else {
            this.showIcon = false;
        }
    };
    AppComponent.prototype.trackST = function () {
        this.gaService.emitEvent('scrollTop', 'click', 'scollToTop', 10);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.distinctUntilChanged(function (previous, current) {
            // Subscribe to any `NavigationEnd` events where the url has changed
            if (current instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                return previous.url === current.url;
            }
            return true;
        }).subscribe(function (x) {
            gtag('config', _this.analyticsId, { 'page_path': x.url });
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.wowService.init();
    };
    AppComponent.prototype.onDeactivate = function () {
        window.scrollTo(0, 0);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_ga_service__["a" /* GAService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_wow__["b" /* NgwWowService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_wow__ = __webpack_require__("../../../../ngx-wow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_components_blog_post_blog_post_component__ = __webpack_require__("../../../../../src/app/about/components/blog-post/blog-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_components_blog_blog_component__ = __webpack_require__("../../../../../src/app/about/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_components_image_gallery_image_gallery_component__ = __webpack_require__("../../../../../src/app/about/components/image-gallery/image-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_components_photo_photo_component__ = __webpack_require__("../../../../../src/app/about/components/photo/photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_components_tab_list_tab_list_component__ = __webpack_require__("../../../../../src/app/about/components/tab-list/tab-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_components_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/about/components/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_pages_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about/pages/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__achievements_page_achievements_page_component__ = __webpack_require__("../../../../../src/app/achievements-page/achievements-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__disclaimer_disclaimer_component__ = __webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_components_about_about_component__ = __webpack_require__("../../../../../src/app/home/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_components_achievements_achievements_component__ = __webpack_require__("../../../../../src/app/home/components/achievements/achievements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_components_contact_contact_component__ = __webpack_require__("../../../../../src/app/home/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_components_home_header_home_header_component__ = __webpack_require__("../../../../../src/app/home/components/home-header/home-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_components_projects_projects_component__ = __webpack_require__("../../../../../src/app/home/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_components_skills_skills_component__ = __webpack_require__("../../../../../src/app/home/components/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__home_pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__projects_components_content_card_content_card_component__ = __webpack_require__("../../../../../src/app/projects/components/content-card/content-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__projects_components_project_list_project_list_component__ = __webpack_require__("../../../../../src/app/projects/components/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__projects_pages_project_page_project_page_component__ = __webpack_require__("../../../../../src/app/projects/pages/project-page/project-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__projects_pages_projects_page_projects_page_component__ = __webpack_require__("../../../../../src/app/projects/pages/projects-page/projects-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_components_avatar_avatar_component__ = __webpack_require__("../../../../../src/app/shared/components/avatar/avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_components_comment_form_comment_form_component__ = __webpack_require__("../../../../../src/app/shared/components/comment-form/comment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_components_comments_comments_component__ = __webpack_require__("../../../../../src/app/shared/components/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_components_devices_devices_component__ = __webpack_require__("../../../../../src/app/shared/components/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_components_filter_filter_component__ = __webpack_require__("../../../../../src/app/shared/components/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_components_gist_gist_component__ = __webpack_require__("../../../../../src/app/shared/components/gist/gist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shared_components_likes_likes_component__ = __webpack_require__("../../../../../src/app/shared/components/likes/likes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shared_components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__shared_components_site_footer_site_footer_component__ = __webpack_require__("../../../../../src/app/shared/components/site-footer/site-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shared_components_site_header_site_header_component__ = __webpack_require__("../../../../../src/app/shared/components/site-header/site-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__shared_components_site_loader_site_loader_component__ = __webpack_require__("../../../../../src/app/shared/components/site-loader/site-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__shared_components_site_modal_site_modal_component__ = __webpack_require__("../../../../../src/app/shared/components/site-modal/site-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__shared_directives_disable_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/disable-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__shared_directives_scrollable_directive__ = __webpack_require__("../../../../../src/app/shared/directives/scrollable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__shared_services_about_service__ = __webpack_require__("../../../../../src/app/shared/services/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__shared_services_achievements_service__ = __webpack_require__("../../../../../src/app/shared/services/achievements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__shared_services_avatar_service__ = __webpack_require__("../../../../../src/app/shared/services/avatar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__shared_services_contact_service__ = __webpack_require__("../../../../../src/app/shared/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__shared_services_filter_service__ = __webpack_require__("../../../../../src/app/shared/services/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_services_likes_comments_service__ = __webpack_require__("../../../../../src/app/shared/services/likes-comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__shared_services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__shared_services_pagination_service__ = __webpack_require__("../../../../../src/app/shared/services/pagination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__shared_services_projects_service__ = __webpack_require__("../../../../../src/app/shared/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__shared_services_skills_service__ = __webpack_require__("../../../../../src/app/shared/services/skills.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__skills_page_skills_page_component__ = __webpack_require__("../../../../../src/app/skills-page/skills-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__shared_pipes_slice_string_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/slice-string.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__shared_pipes_url_name_extract_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/url-name-extract.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__shared_pipes_github_link_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/github-link.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_46__shared_components_site_footer_site_footer_component__["a" /* SiteFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_26__home_components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_29__home_components_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__home_components_achievements_achievements_component__["a" /* AchievementsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__home_pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__home_components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_41__shared_components_devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_48__shared_components_site_loader_site_loader_component__["a" /* SiteLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_36__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_34__projects_pages_project_page_project_page_component__["a" /* ProjectPageComponent */],
                __WEBPACK_IMPORTED_MODULE_33__projects_components_project_list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_35__projects_pages_projects_page_projects_page_component__["a" /* ProjectsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_47__shared_components_site_header_site_header_component__["a" /* SiteHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__about_pages_about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__achievements_page_achievements_page_component__["a" /* AchievementsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_32__projects_components_content_card_content_card_component__["a" /* ContentCardComponent */],
                __WEBPACK_IMPORTED_MODULE_44__shared_components_likes_likes_component__["a" /* LikesComponent */],
                __WEBPACK_IMPORTED_MODULE_40__shared_components_comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__shared_components_avatar_avatar_component__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_39__shared_components_comment_form_comment_form_component__["a" /* CommentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_page_contact_page_component__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__about_components_tab_list_tab_list_component__["a" /* TabListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__home_components_home_header_home_header_component__["a" /* HomeHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_45__shared_components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_components_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_components_image_gallery_image_gallery_component__["a" /* ImageGalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_51__shared_directives_scrollable_directive__["a" /* ScrollableDirective */],
                __WEBPACK_IMPORTED_MODULE_12__about_components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_components_blog_post_blog_post_component__["a" /* BlogPostComponent */],
                __WEBPACK_IMPORTED_MODULE_43__shared_components_gist_gist_component__["a" /* GistComponent */],
                __WEBPACK_IMPORTED_MODULE_37__safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_14__about_components_photo_photo_component__["a" /* PhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_49__shared_components_site_modal_site_modal_component__["a" /* SiteModalComponent */],
                __WEBPACK_IMPORTED_MODULE_50__shared_directives_disable_scroll_directive__["a" /* DisableScrollDirective */],
                __WEBPACK_IMPORTED_MODULE_64__terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__disclaimer_disclaimer_component__["a" /* DisclaimerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_42__shared_components_filter_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_65__skills_page_skills_page_component__["a" /* SkillsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_66__shared_pipes_slice_string_pipe__["a" /* SliceStringPipe */],
                __WEBPACK_IMPORTED_MODULE_67__shared_pipes_url_name_extract_pipe__["a" /* UrlNameExtractPipe */],
                __WEBPACK_IMPORTED_MODULE_68__shared_pipes_github_link_pipe__["a" /* GithubLinkPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                // AngularFirestoreModule.enablePersistence(), // Just like that, you're offline enabled!
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_page_scroll__["a" /* NgxPageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_wow__["a" /* NgwWowModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_52__shared_services_about_service__["a" /* AboutService */],
                __WEBPACK_IMPORTED_MODULE_63__shared_services_skills_service__["a" /* SkillsService */],
                __WEBPACK_IMPORTED_MODULE_62__shared_services_projects_service__["a" /* ProjectsService */],
                __WEBPACK_IMPORTED_MODULE_53__shared_services_achievements_service__["a" /* AchievementsService */],
                __WEBPACK_IMPORTED_MODULE_56__shared_services_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_54__shared_services_avatar_service__["a" /* AvatarService */],
                __WEBPACK_IMPORTED_MODULE_61__shared_services_pagination_service__["a" /* PaginationService */],
                __WEBPACK_IMPORTED_MODULE_59__shared_services_likes_comments_service__["a" /* LikesCommentsService */],
                __WEBPACK_IMPORTED_MODULE_55__shared_services_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_60__shared_services_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_58__shared_services_ga_service__["a" /* GAService */],
                __WEBPACK_IMPORTED_MODULE_57__shared_services_filter_service__["a" /* FilterService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_components_blog_post_blog_post_component__ = __webpack_require__("../../../../../src/app/about/components/blog-post/blog-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_pages_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about/pages/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__achievements_page_achievements_page_component__ = __webpack_require__("../../../../../src/app/achievements-page/achievements-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__disclaimer_disclaimer_component__ = __webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_pages_project_page_project_page_component__ = __webpack_require__("../../../../../src/app/projects/pages/project-page/project-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_pages_projects_page_projects_page_component__ = __webpack_require__("../../../../../src/app/projects/pages/projects-page/projects-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts");











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_pages_home_page_home_page_component__["a" /* HomePageComponent */], pathMatch: 'full' },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */], pathMatch: 'full' },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_page_contact_page_component__["a" /* ContactPageComponent */], pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_pages_about_page_about_page_component__["a" /* AboutPageComponent */], pathMatch: 'full' },
    { path: 'about/blog', component: __WEBPACK_IMPORTED_MODULE_1__about_pages_about_page_about_page_component__["a" /* AboutPageComponent */], pathMatch: 'full' },
    { path: 'about/blog/:blogId', component: __WEBPACK_IMPORTED_MODULE_0__about_components_blog_post_blog_post_component__["a" /* BlogPostComponent */], pathMatch: 'full' },
    { path: 'about/photos', component: __WEBPACK_IMPORTED_MODULE_1__about_pages_about_page_about_page_component__["a" /* AboutPageComponent */], pathMatch: 'full' },
    // {path: 'about/photos/:id', component: PhotoComponent, pathMatch: 'full'},
    { path: 'about/videos', component: __WEBPACK_IMPORTED_MODULE_1__about_pages_about_page_about_page_component__["a" /* AboutPageComponent */], pathMatch: 'full' },
    // {path: 'skills', component: SkillsPageComponent, pathMatch: 'full'},
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_8__projects_pages_projects_page_projects_page_component__["a" /* ProjectsPageComponent */], pathMatch: 'full' },
    { path: 'projects/:projectId', component: __WEBPACK_IMPORTED_MODULE_7__projects_pages_project_page_project_page_component__["a" /* ProjectPageComponent */], pathMatch: 'full' },
    { path: 'achievements', component: __WEBPACK_IMPORTED_MODULE_2__achievements_page_achievements_page_component__["a" /* AchievementsPageComponent */], pathMatch: 'full' },
    // {path: 'terms-and-conditions', component: TermsComponent, pathMatch: 'full'},
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_6__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], pathMatch: 'full' },
    { path: 'disclaimer', component: __WEBPACK_IMPORTED_MODULE_4__disclaimer_disclaimer_component__["a" /* DisclaimerComponent */], pathMatch: 'full' },
    // {path: 'frequently-asked-questions', component: FaqComponent, pathMatch: 'full'},
    // {path: 'sitemap', component: FaqComponent, pathMatch: 'full'},
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_10__shared_components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], pathMatch: 'full' },
    { path: '**', redirectTo: '404' }
];


/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<app-contact></app-contact>"

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__("../../../../../src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<h2 class=\"legal-title\">Disclaimer</h2>\r\n\r\n<div class=\"legal-content\">\r\n    <p>If you require any more information or have any questions about my site's disclaimer, please feel free to contact me by email at bheemasl@mail.uc.edu</p>\r\n\r\n    <p>All the information on this website - <a routerLink=\"/\">https://iamsainikhil.github.io</a> - is published in good faith and for general information purpose only. Sai Nikhil Bheemanathini does not make any warranties about the completeness, reliability\r\n        and accuracy of this information. Any action you take upon the information you find on this website (Sai Nikhil Portfolio), is strictly at your own risk. Sai Nikhil Bheemanathini will not be liable for any losses and/or damages in connection with\r\n        the use of this website.</p>\r\n\r\n    <p>From this website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links\r\n        to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>\r\n\r\n    <p>Please be also aware that when you leave my website, other sites may have different privacy policies and terms which are beyond my control. Please be sure to check the Privacy Policies of these sites as well as their \"Terms of Service\" before engaging\r\n        in any business or uploading any information.</p>\r\n\r\n    <h3>Credits</h3>\r\n    <p>Avatar Icons used in comments form are made by <a href=\"https://www.flaticon.com/authors/monkik\" title=\"monkik\" target=\"_blank\">monkik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\" target=\"_blank\">www.flaticon.com</a> is licensed by\r\n        <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0</a>\r\n    </p>\r\n    <p><a href=\"https://www.freepik.com/free-vector/404-error-background-with-a-robot_1719278.htm\" target=\"_blank\">404 Page not found vector created by Freepik</a>&nbsp; where svg animations were designed & developed by me!</p>\r\n\r\n    <p><a href=\"https://www.freepik.com/free-vector/under-construction-template-in-flat-style_1705550.htm\" target=\"_blank\">Page under construction vector created by Freepik</a>&nbsp; where svg animation was designed & developed by me!</p>\r\n\r\n    <p>Animations used on this website were inspired from&nbsp;<a href=\"http://www.animista.net/\" target=\"_blank\">Animista</a></p>\r\n\r\n\r\n    <h3>Consent</h3>\r\n\r\n    <p>By using my website, you hereby consent to this disclaimer and agree to its terms.</p>\r\n\r\n    <h3>Update</h3>\r\n\r\n    <p>Should I update, amend or make any changes to this document, those changes will be prominently posted here.</p>\r\n\r\n    <p><em>Last updated on {{date | date}}</em></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisclaimerComponent = /** @class */ (function () {
    function DisclaimerComponent() {
        this.date = new Date();
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
    };
    DisclaimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-disclaimer',
            template: __webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisclaimerComponent);
    return DisclaimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<h2 class=\"error-title\">Frequently Asked Questions</h2>\r\n<div class=\"svg-image error-image\"></div>"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    /* about section */\r\n    \r\n    .about-content {\r\n        font-family: 'Poppins', sans-serif;\r\n        letter-spacing: 1px;\r\n    }\r\n    \r\n    .gradient {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        background-color: #008080;\r\n    }\r\n    \r\n    .buttons-group a:hover,\r\n    .about-button:hover {\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .about-button {\r\n        font-size: 16px;\r\n        border: 1px solid #fff;\r\n        color: #fff;\r\n        background: transparent;\r\n    }\r\n    \r\n    .about-button:hover {\r\n        background-color: #fff;\r\n        color: #008080;\r\n    }\r\n    \r\n    @media only screen and (max-width: 767px) {\r\n        .element {\r\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw));\r\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw));\r\n        }\r\n        /* about section */\r\n        .about-content {\r\n            padding: 50px 25px 150px 25px;\r\n            text-align: left;\r\n        }\r\n        .about-caption {\r\n            font-size: 24px;\r\n        }\r\n        .mobile-about-info {\r\n            display: -ms-grid;\r\n            display: grid;\r\n            -ms-grid-columns: 1fr;\r\n                grid-template-columns: 1fr;\r\n            -ms-grid-rows: 1fr;\r\n                grid-template-rows: 1fr;\r\n            grid-gap: 10px;\r\n        }\r\n        .desktop-about-info {\r\n            display: none;\r\n        }\r\n        .buttons-group {\r\n            text-align: center;\r\n        }\r\n        .about-button {\r\n            margin: 20px;\r\n        }\r\n    }\r\n    \r\n    @media only screen and (min-width: 768px) {\r\n        .element {\r\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw));\r\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw));\r\n        }\r\n        /* about section */\r\n        .about-content {\r\n            padding: 100px 50px 200px 50px;\r\n        }\r\n        .mobile-about-info {\r\n            display: none;\r\n        }\r\n        .desktop-about-info {\r\n            display: -ms-grid;\r\n            display: grid;\r\n            -ms-grid-columns: (1fr)[2];\r\n                grid-template-columns: repeat(2, 1fr);\r\n            -ms-grid-rows: 1fr;\r\n                grid-template-rows: 1fr;\r\n            grid-gap: 20px;\r\n            text-align: left;\r\n        }\r\n        .buttons-group {\r\n            display: -webkit-box;\r\n            display: -ms-flexbox;\r\n            display: flex;\r\n            -webkit-box-orient: horizontal;\r\n            -webkit-box-direction: normal;\r\n                -ms-flex-direction: row;\r\n                    flex-direction: row;\r\n            -ms-flex-wrap: nowrap;\r\n                flex-wrap: nowrap;\r\n            -ms-flex-pack: distribute;\r\n                justify-content: space-around;\r\n            padding: 25px;\r\n        }\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-body\">\r\n    <div class=\"container\">\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <h2 class=\"section-title text-center\">About</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <div class=\"element gradient\">\r\n                    <div class=\"section-content about-content\">\r\n                        <div *ngIf=\"showLoader\">\r\n                            <app-site-loader></app-site-loader>\r\n                        </div>\r\n                        <div *ngIf=\"!showLoader\">\r\n                            <div class=\"wow fade-in-bottom\" *ngFor=\"let about of aboutData | async\">\r\n                                <h2 class=\"about-caption caption\" [innerHTML]=about.caption></h2>\r\n                                <p>{{about.education}} and {{about.job}}</p>\r\n                                <div class=\"buttons-group\">\r\n                                    <button class=\"about-button wow zoomIn\" routerLink=\"/resume\" (click)=\"buttonClick('resume')\">VIEW MY RESUME</button>\r\n                                    <button class=\"about-button wow zoomIn\" routerLink=\"/about\" (click)=\"buttonClick('story')\">READ MY STORY</button>\r\n                                </div>\r\n                                <div class=\"mobile-about-info wow fade-in-bottom\" [innerHTML]=\"getSanitizedHtml(about.mobileInfo)\"></div>\r\n                                <div class=\"desktop-about-info wow fade-in-bottom\" [innerHTML]=\"getSanitizedHtml(about.desktopInfo)\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_about_service__ = __webpack_require__("../../../../../src/app/shared/services/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(aboutService, _sanitizer, gaService) {
        this.aboutService = aboutService;
        this._sanitizer = _sanitizer;
        this.gaService = gaService;
        this.showLoader = true;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.aboutService.getAboutData().subscribe(function () {
            _this.aboutData = _this.aboutService.getAboutData();
            _this.showLoader = false;
        });
    };
    AboutComponent.prototype.buttonClick = function (name) {
        this.gaService.emitEvent(name + "-about-section", 'buttons-about-section', 'button');
    };
    /**
     * Sanitize the html tags of about Info
     * @param data
     */
    AboutComponent.prototype.getSanitizedHtml = function (data) {
        return this._sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, data);
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/home/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_about_service__["a" /* AboutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_ga_service__["a" /* GAService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/achievements/achievements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* achievements section */\r\n\r\n.gradient {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: auto;\r\n        grid-template-rows: auto;\r\n    background: #4988CF;\r\n}\r\n\r\n/* card */\r\n\r\n.card-header {\r\n    color: #000;\r\n}\r\n\r\n.card-body {\r\n    color: #808080;\r\n}\r\n\r\n.img-responsive {\r\n    border-top-left-radius: 15px !important;\r\n    border-top-right-radius: 15px !important;\r\n}\r\n\r\n.card-footer {\r\n    padding: 20px;\r\n}\r\n\r\n.achievement-button {\r\n    border: 1px solid #4988CF;\r\n    color: #4988CF;\r\n    width: 100px;\r\n}\r\n\r\n.achievement-button:hover {\r\n    background-color: #4988CF;\r\n    color: #fff;\r\n}\r\n\r\n.explore-button {\r\n    padding-top: 50px;\r\n}\r\n\r\n.explore-button button {\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.explore-button button:hover {\r\n    background-color: #fff;\r\n    color: #4988CF;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(1% - 1vw), 100% calc(100% - 4vw), 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(1% - 1vw), 100% calc(100% - 4vw), 0 100%);\r\n    }\r\n    .a-element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(1% - 1vw), 100% 100%, 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(1% - 1vw), 100% 100%, 0 100%);\r\n    }\r\n    .a-content {\r\n        padding: 50px 20px;\r\n    }\r\n    .achievements {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 0.85fr;\r\n            grid-template-columns: 0.85fr;\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        grid-gap: 20px;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n}\r\n\r\n/* ipad only */\r\n\r\n@media only screen and (min-width: 767px) and (max-width: 1279px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% calc(100% - 3vw), 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% calc(100% - 3vw), 0 100%);\r\n    }\r\n    .a-element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% 100%, 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% 100%, 0 100%);\r\n    }\r\n    .a-content {\r\n        padding: 150px 20px;\r\n    }\r\n    .card-image img {\r\n        height: 250px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .achievements {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[2];\r\n            grid-template-columns: repeat(2, 1fr);\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        grid-gap: 20px;\r\n    }\r\n    .card-content {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n        -ms-grid-rows: 100px 50px;\r\n            grid-template-rows: 100px 50px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1279px) {\r\n    .achievements {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[3];\r\n            grid-template-columns: repeat(3, 1fr);\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        grid-gap: 20px;\r\n    }\r\n    .card-content {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n        -ms-grid-rows: 100px 50px;\r\n            grid-template-rows: 100px 50px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% calc(100% - 2vw), 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% calc(100% - 2vw), 0 100%);\r\n    }\r\n    .a-element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% 100%, 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% 100%, 0 100%);\r\n    }\r\n    .a-content {\r\n        padding: 150px 100px;\r\n    }\r\n    .achievements {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[4];\r\n            grid-template-columns: repeat(4, 1fr);\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n        grid-gap: 20px;\r\n    }\r\n    .card-content {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n        -ms-grid-rows: 150px 75px;\r\n            grid-template-rows: 150px 75px;\r\n    }\r\n    .card-image img {\r\n        height: 250px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1920px) {\r\n    .card-image img {\r\n        height: 300px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/achievements/achievements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"columns\">\r\n        <div class=\"column\">\r\n            <h2 class=\"text-center\" [ngClass]=\"{'section-title': page === 'home', 'pa-title': page === 'achievements'}\">Achievements</h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"columns\">\r\n        <div class=\"column\">\r\n            <div class=\"gradient\" [ngClass]=\"{'element': page === 'home', 'a-element': page === 'achievements'}\">\r\n                <div class=\"section-content a-content\">\r\n                    <div *ngIf=\"page === 'achievements'\">\r\n                        <app-filter [chipData]=\"chipData\" [page]=\"page\"></app-filter>\r\n                    </div>\r\n                    <div *ngIf=\"showLoader\">\r\n                        <app-site-loader></app-site-loader>\r\n                    </div>\r\n                    <div *ngIf=\"!showLoader\">\r\n                        <div class=\"achievements\">\r\n                            <div *ngFor=\"let item of achievementsData | async\">\r\n                                <div class=\"card wow fade-in-bottom\">\r\n                                    <div class=\"card-image\">\r\n                                        <img class=\"img-responsive\" [src]=\"item.imageUrl\" alt=\"achievement-image\">\r\n                                    </div>\r\n                                    <div class=\"card-content\">\r\n                                        <div class=\"card-header\">\r\n                                            <div class=\"card-title h3\">{{item.title}}</div>\r\n                                        </div>\r\n                                        <div class=\"card-body\">\r\n                                            <p>{{item.caption}}</p>\r\n                                        </div>\r\n                                        <div class=\"card-footer\">\r\n                                            <a [href]=\"item.url\" target=\"_blank\">\r\n                                                <button class=\"achievement-button\" (click)=\"buttonClick('view', item.title)\">View</button>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div><br>\r\n                        <!-- button -->\r\n                        <div class=\"explore-button wow zoomIn\" *ngIf=\"page === 'home'\">\r\n                            <button routerLink=\"/achievements\" (click)=\"buttonClick('explore-more')\">explore more</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/achievements/achievements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_achievements_service__ = __webpack_require__("../../../../../src/app/shared/services/achievements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent(achievementsService, gaService) {
        this.achievementsService = achievementsService;
        this.gaService = gaService;
        // filter chips
        this.chipData = [
            {
                name: 'show all',
                selected: true
            },
            {
                name: 'awards',
                selected: false
            },
            {
                name: 'testdome',
                selected: false
            },
            {
                name: 'certificates',
                selected: false
            }
        ];
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent.prototype.buttonClick = function (name, id) {
        if (id === void 0) { id = null; }
        if (id !== null) {
            this.gaService.emitEvent(id + "-view", 'achievement-view', 'button');
        }
        else {
            this.gaService.emitEvent(name + "-achievements-on-" + this.page, 'achievements-section', 'button');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AchievementsComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AchievementsComponent.prototype, "achievementsData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AchievementsComponent.prototype, "showLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AchievementsComponent.prototype, "chipData", void 0);
    AchievementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-achievements',
            template: __webpack_require__("../../../../../src/app/home/components/achievements/achievements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/achievements/achievements.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_achievements_service__["a" /* AchievementsService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__["a" /* GAService */]])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* contact section */\r\n\r\n.contact-content {\r\n    padding: 150px 20px 50px 20px;\r\n}\r\n\r\n.element {\r\n    -webkit-clip-path: polygon(0 calc(5% - 3vw), 100% 0, 100% 100%, 0 100%);\r\n    clip-path: polygon(0 calc(5% - 3vw), 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n.gradient {\r\n    background: #f5f5f5;\r\n}\r\n\r\n.contact-caption {\r\n    color: #808080;\r\n}\r\n\r\n.contact-caption::before,\r\n.contact-caption::after {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg width%3D%221792%22 height%3D%221792%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0D %3Cg%3E%0D  %3Ctitle%3Ebackground%3C%2Ftitle%3E%0D  %3Crect fill%3D%22none%22 id%3D%22canvas_background%22 height%3D%22402%22 width%3D%22582%22 y%3D%22-1%22 x%3D%22-1%22%2F%3E%0D %3C%2Fg%3E%0D %3Cg%3E%0D  %3Ctitle%3ELayer 1%3C%2Ftitle%3E%0D  %3Cpath fill%3D%22%23808080%22 id%3D%22svg_1%22 d%3D%22m832%2C960l0%2C384q0%2C80 -56%2C136t-136%2C56l-384%2C0q-80%2C0 -136%2C-56t-56%2C-136l0%2C-704q0%2C-104 40.5%2C-198.5t109.5%2C-163.5t163.5%2C-109.5t198.5%2C-40.5l64%2C0q26%2C0 45%2C19t19%2C45l0%2C128q0%2C26 -19%2C45t-45%2C19l-64%2C0q-106%2C0 -181%2C75t-75%2C181l0%2C32q0%2C40 28%2C68t68%2C28l224%2C0q80%2C0 136%2C56t56%2C136zm896%2C0l0%2C384q0%2C80 -56%2C136t-136%2C56l-384%2C0q-80%2C0 -136%2C-56t-56%2C-136l0%2C-704q0%2C-104 40.5%2C-198.5t109.5%2C-163.5t163.5%2C-109.5t198.5%2C-40.5l64%2C0q26%2C0 45%2C19t19%2C45l0%2C128q0%2C26 -19%2C45t-45%2C19l-64%2C0q-106%2C0 -181%2C75t-75%2C181l0%2C32q0%2C40 28%2C68t68%2C28l224%2C0q80%2C0 136%2C56t56%2C136z%22%2F%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n}\r\n\r\n.form-label {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    padding-left: 10px;\r\n    text-align: left;\r\n    color: #808080;\r\n}\r\n\r\n.contact-form-button-group {\r\n    padding: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    color: #808080;\r\n    border: 2px solid #caced7;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n    border: 2px solid #00c3b3;\r\n    outline: none;\r\n}\r\n\r\n.submit-button {\r\n    border: 1px solid #808080;\r\n    color: #808080;\r\n    max-width: 300px !important;\r\n    padding: 5px 10px !important;\r\n}\r\n\r\n.submit-button:hover {\r\n    background-color: #808080;\r\n    color: #fff;\r\n}\r\n\r\n.submit-button:disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\ninput {\r\n    border-radius: 15px;\r\n}\r\n\r\n/* errors */\r\n\r\n.error {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: left;\r\n        -ms-flex-pack: left;\r\n            justify-content: left;\r\n    padding-left: 10px;\r\n    color: #f54000;\r\n}\r\n\r\n/* success message */\r\n\r\n.success-message {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.success-message button {\r\n    width: 250px;\r\n}\r\n\r\n.empty-icon {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.empty {\r\n    color: #343434;\r\n    background: #f4f5f6;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.email-success {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg version%3D%221.1%22 id%3D%22HJXe644piRf%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22 viewBox%3D%220 0 512 512%22 style%3D%22enable-background%3Anew 0 0 512 512%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle%3E%40-webkit-keyframes SJf-pENao0f_HJmMRZaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40keyframes SJf-pENao0f_HJmMRZaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40-webkit-keyframes rkybT4E6oCz_ryA-0WaRM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40keyframes rkybT4E6oCz_ryA-0WaRM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40-webkit-keyframes rk0l6VEpjCz_rJf-RWaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40keyframes rk0l6VEpjCz_rJf-RWaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%23HJXe644piRf *%7B-webkit-animation-duration%3A 2s%3Banimation-duration%3A 2s%3B-webkit-animation-iteration-count%3A infinite%3Banimation-iteration-count%3A infinite%3B-webkit-animation-timing-function%3A cubic-bezier(0%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0%2C 0%2C 1%2C 1)%3B%7D%23r1El6VNasRf%7Bfill%3A %23FF4719%3B%7D%23BkSg6VNaiRf%7Bfill%3A %23B7D9DD%3B%7D%23ry8xT4NpiAG%7Bfill%3A %2388ACB5%3B%7D%23rJwl6NV6j0f%7Bfill%3A %23C7E7EB%3B%7D%23S1_xaNEpiRG%7Bfill%3A %23B7D9DD%3B%7D%23HkKlTNV6oCG%7Bfill%3A %23FFBE35%3B%7D%23rJclpV4aoRG%7Bfill%3A %23FFCD60%3B%7D%23SkieTEV6jCz%7Bfill%3A %23F3A933%3B%7D%23Hy3xaE4aoCf%7Bfill%3A %23FFCD60%3B%7D%23ryaxaEN6s0M%7Bfill%3A %23FFBE35%3B%7D%23rk0l6VEpjCz%7Bfill%3A %2327467A%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B%7D%23rkybT4E6oCz%7Bfill%3A %2388ACB5%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B%7D%23SJf-pENao0f%7B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B%7D%23rk0l6VEpjCz_rJf-RWaAM%7B-webkit-animation-name%3A rk0l6VEpjCz_rJf-RWaAM_Animation%3Banimation-name%3A rk0l6VEpjCz_rJf-RWaAM_Animation%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B-webkit-animation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3B%7D%23rkybT4E6oCz_ryA-0WaRM%7B-webkit-animation-name%3A rkybT4E6oCz_ryA-0WaRM_Animation%3Banimation-name%3A rkybT4E6oCz_ryA-0WaRM_Animation%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B-webkit-animation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3B%7D%23SJf-pENao0f_HJmMRZaAM%7B-webkit-animation-name%3A SJf-pENao0f_HJmMRZaAM_Animation%3Banimation-name%3A SJf-pENao0f_HJmMRZaAM_Animation%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B-webkit-animation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3B%7D%3C%2Fstyle%3E%0D%3Cpath d%3D%22M500.442%2C155.572l-67.453%2C248.625H79.011L11.558%2C155.572c2.135-2.168%2C5.087-3.519%2C8.355-3.519%26%2310%3B%26%239%3Bh472.173C495.355%2C152.053%2C498.307%2C153.404%2C500.442%2C155.572z%22 id%3D%22r1El6VNasRf%22%2F%3E%0D%3Cpolygon points%3D%22435.08%2C8.17 435.08%2C176.455 374.795%2C260.575 402.399%2C8.17 %22 id%3D%22BkSg6VNaiRf%22%2F%3E%0D%3Cpolygon points%3D%22435.08%2C176.455 435.08%2C437.913 369.718%2C437.913 385.688%2C227.894 %22 id%3D%22ry8xT4NpiAG%22%2F%3E%0D%3Cpolygon points%3D%2276.92%2C8.17 76.92%2C176.455 256%2C395.656 402.399%2C210.497 402.399%2C8.17 %22 id%3D%22rJwl6NV6j0f%22%2F%3E%0D%3Cpolygon points%3D%22256%2C362.975 126.311%2C227.894 76.92%2C176.455 76.92%2C437.913 402.399%2C437.913 402.399%2C210.497 %26%2310%3B%26%239%3B%22 id%3D%22S1_xaNEpiRG%22%2F%3E%0D%3Cpath d%3D%22M503.83%2C163.796v328.29c0%2C3.192-1.296%2C6.111-3.388%2C8.225l-51.875-9.554l21.787-303.845l30.088-31.341%26%2310%3B%26%239%3BC502.533%2C157.685%2C503.83%2C160.605%2C503.83%2C163.796z%22 id%3D%22HkKlTNV6oCG%22%2F%3E%0D%3Cpolygon points%3D%22470.354%2C186.913 470.354%2C490.757 334.946%2C327.941 %22 id%3D%22rJclpV4aoRG%22%2F%3E%0D%3Cpath d%3D%22M470.354%2C468.97l-11.743%2C34.86h33.476c3.268%2C0%2C6.22-1.351%2C8.355-3.519L470.354%2C468.97z%22 id%3D%22SkieTEV6jCz%22%2F%3E%0D%3Cpath d%3D%22M177.054%2C327.941L11.558%2C155.572c-2.092%2C2.113-3.388%2C5.033-3.388%2C8.225v328.29%26%2310%3B%26%239%3Bc0%2C3.192%2C1.296%2C6.111%2C3.388%2C8.225l72.867-8.726L177.054%2C327.941z%22 id%3D%22Hy3xaE4aoCf%22%2F%3E%0D%3Cpath d%3D%22M334.946%2C327.941l-63.858%2C66.506c-8.301%2C8.639-21.874%2C8.639-30.175%2C0l-63.858-66.506L11.558%2C500.311%26%2310%3B%26%239%3Bc2.135%2C2.168%2C5.087%2C3.519%2C8.355%2C3.519H458.61c3.268%2C0%2C6.22-1.351%2C8.355-3.519c2.092-2.113%2C3.388-5.033%2C3.388-8.225V468.97%26%2310%3B%26%239%3BL334.946%2C327.941z%22 id%3D%22ryaxaEN6s0M%22%2F%3E%0D%3Cg id%3D%22rk0l6VEpjCz_rJf-RWaAM%22 data-animator-group%3D%22true%22 data-animator-type%3D%222%22%3E%3Cpath d%3D%22M352.517%2C140.506c0-9.586-7.767-17.364-17.354-17.364h-21.33l0%2C0l-38.847%2C0.011%26%2310%3B%26%239%3Bc11.754-18.04%2C17.571-41.243%2C17.571-64.948c0-9.586-7.767-17.354-17.354-17.354c-9.586%2C0-17.354%2C7.767-17.354%2C17.354%26%2310%3B%26%239%3Bc0%2C35.873-29.075%2C64.937-64.948%2C64.937l-21.787%2C69.425l21.787%2C69.425h120.93l0%2C0c9.586%2C0%2C17.364-7.767%2C17.364-17.354%26%2310%3B%26%239%3Bs-7.778-17.354-17.364-17.354l0%2C0h7.114c9.586%2C0%2C17.354-7.778%2C17.354-17.364c0-9.575-7.767-17.354-17.354-17.354h7.114%26%2310%3B%26%239%3Bc9.575%2C0%2C17.354-7.767%2C17.354-17.354c0-9.586-7.778-17.354-17.354-17.354h7.103C344.75%2C157.859%2C352.517%2C150.092%2C352.517%2C140.506z%22 id%3D%22rk0l6VEpjCz%22%2F%3E%3C%2Fg%3E%0D%3Cg id%3D%22rkybT4E6oCz_ryA-0WaRM%22 data-animator-group%3D%22true%22 data-animator-type%3D%222%22%3E%3Crect x%3D%22159.483%22 y%3D%22123.152%22 width%3D%2233.422%22 height%3D%22138.839%22 id%3D%22rkybT4E6oCz%22%2F%3E%3C%2Fg%3E%0D%3Cpath d%3D%22M506.678%2C150.293C506.678%2C150.292%2C506.678%2C150.292%2C506.678%2C150.293c-3.641-3.931-8.827-6.41-14.595-6.41h-48.828V8.17%26%2310%3B%26%239%3Bc0-4.513-3.657-8.17-8.17-8.17H76.914c-4.513%2C0-8.17%2C3.657-8.17%2C8.17v135.712H19.916c-5.767%2C0-10.954%2C2.479-14.594%2C6.41%26%2310%3B%26%239%3Bc0%2C0%2C0%2C0-0.001%2C0.001C2.029%2C153.846%2C0%2C158.584%2C0%2C163.798v328.287C0%2C503.066%2C8.934%2C512%2C19.916%2C512h472.169%26%2310%3B%26%239%3Bc10.982%2C0%2C19.916-8.934%2C19.916-19.916V163.798C512%2C158.584%2C509.97%2C153.846%2C506.678%2C150.293z M76.914%2C184.634%26%2310%3B%26%239%3Bc4.513%2C0%2C8.17-3.657%2C8.17-8.17V16.34h341.83v160.123c0%2C4.513%2C3.658%2C8.17%2C8.17%2C8.17c4.513%2C0%2C8.17-3.657%2C8.17-8.17v-16.241h41.404%26%2310%3B%26%239%3BL265.195%2C388.786c-2.459%2C2.561-5.725%2C3.971-9.195%2C3.971s-6.738-1.411-9.195-3.971L27.341%2C160.222h41.403v16.241%26%2310%3B%26%239%3BC68.744%2C180.977%2C72.402%2C184.634%2C76.914%2C184.634z M492.084%2C495.66H19.916c-1.938%2C0-3.575-1.637-3.575-3.575V172.359l149.389%2C155.583%26%2310%3B%26%239%3BL34.281%2C464.84c-3.124%2C3.254-3.02%2C8.426%2C0.235%2C11.552c1.584%2C1.521%2C3.622%2C2.277%2C5.657%2C2.277c2.147%2C0%2C4.29-0.84%2C5.895-2.512%26%2310%3B%26%239%3Bl130.988-136.42l57.962%2C60.365c5.569%2C5.8%2C13.021%2C8.995%2C20.983%2C8.995s15.413-3.195%2C20.983-8.995l57.962-60.365l51.233%2C53.357%26%2310%3B%26%239%3Bc1.605%2C1.671%2C3.749%2C2.512%2C5.895%2C2.512c2.035%2C0%2C4.073-0.756%2C5.657-2.277c3.255-3.125%2C3.36-8.298%2C0.235-11.553l-51.693-53.836%26%2310%3B%26%239%3BL495.66%2C172.359v319.725C495.66%2C494.022%2C494.022%2C495.66%2C492.084%2C495.66z%22 id%3D%22rygZa4NpoRz%22%2F%3E%0D%3Cpath d%3D%22M423.969%2C408.86c-3.125-3.256-8.297-3.359-11.552-0.235c-3.255%2C3.125-3.36%2C8.298-0.235%2C11.552l53.749%2C55.979%26%2310%3B%26%239%3Bc1.605%2C1.671%2C3.747%2C2.512%2C5.895%2C2.512c2.035%2C0%2C4.073-0.756%2C5.657-2.277c3.255-3.125%2C3.36-8.298%2C0.235-11.552L423.969%2C408.86z%22 id%3D%22rk-ZTNVTj0z%22%2F%3E%0D%3Cg id%3D%22SJf-pENao0f_HJmMRZaAM%22 data-animator-group%3D%22true%22 data-animator-type%3D%222%22%3E%3Cpath d%3D%22M159.478%2C270.162h33.428h120.932c14.075%2C0%2C25.526-11.451%2C25.526-25.526c0-5.025-1.461-9.718-3.977-13.673%26%2310%3B%26%239%3Bc6.692-4.607%2C11.086-12.32%2C11.086-21.039c0-5.025-1.46-9.717-3.977-13.671c6.692-4.607%2C11.086-12.32%2C11.086-21.039%26%2310%3B%26%239%3Bc0-5.025-1.461-9.718-3.978-13.673c6.693-4.607%2C11.088-12.32%2C11.088-21.039c0-14.075-11.451-25.526-25.526-25.526l-46.344%2C0.001%26%2310%3B%26%239%3Bc7.737-16.57%2C11.908-36.237%2C11.908-56.771c0-14.075-11.451-25.526-25.526-25.526s-25.526%2C11.451-25.526%2C25.526%26%2310%3B%26%239%3Bc0%2C31.303-25.467%2C56.77-56.77%2C56.77H159.48c-4.513%2C0-8.17%2C3.657-8.17%2C8.17v138.845C151.308%2C266.505%2C154.966%2C270.162%2C159.478%2C270.162%26%2310%3B%26%239%3Bz M266.018%2C58.207c0-5.064%2C4.12-9.185%2C9.186-9.185c5.064%2C0%2C9.185%2C4.12%2C9.185%2C9.185c0%2C22.918-5.77%2C44.398-16.247%2C60.482%26%2310%3B%26%239%3Bc-1.636%2C2.512-1.766%2C5.718-0.338%2C8.353c1.429%2C2.635%2C4.185%2C4.277%2C7.183%2C4.277l60.177-0.001c5.064%2C0%2C9.186%2C4.12%2C9.186%2C9.186%26%2310%3B%26%239%3Bc0%2C5.064-4.12%2C9.186-9.186%2C9.186h-7.108H313.84c-4.513%2C0-8.17%2C3.657-8.17%2C8.17s3.657%2C8.17%2C8.17%2C8.17h14.217%26%2310%3B%26%239%3Bc5.064%2C0%2C9.185%2C4.121%2C9.185%2C9.187s-4.12%2C9.186-9.185%2C9.186h-7.108h-7.108c-4.513%2C0-8.17%2C3.657-8.17%2C8.17%26%2310%3B%26%239%3Bc0%2C4.512%2C3.657%2C8.17%2C8.17%2C8.17h7.108c5.064%2C0%2C9.186%2C4.12%2C9.186%2C9.186c0%2C5.066-4.12%2C9.186-9.186%2C9.186h-7.108%26%2310%3B%26%239%3Bc-4.513%2C0-8.17%2C3.657-8.17%2C8.17s3.657%2C8.17%2C8.17%2C8.17c5.064%2C0%2C9.185%2C4.121%2C9.185%2C9.187c0%2C5.064-4.12%2C9.186-9.185%2C9.186H201.078%26%2310%3B%26%239%3BV130.849C237.558%2C126.772%2C266.018%2C95.757%2C266.018%2C58.207z M167.648%2C131.317h17.088v122.504h-17.088V131.317z%22 id%3D%22SJf-pENao0f%22%2F%3E%3C%2Fg%3E%0D%3Cg id%3D%22H1Xb64NpjAM%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22H1N-T4NToCz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rkrbTVN6iAz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22ryL-TN46sAz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rJPb64EaiCz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22HkdWpNNpsRG%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rytZpEVasAf%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22SJ9bpVETo0f%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rysWTV46o0G%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22ByhZTE46s0f%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22BJaZ64NTsRz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22SyA-a4ETj0f%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22SJ1f6VE6s0z%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22ryef6VETsRG%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22Hy-zpNVpiAf%22%3E%0D%3C%2Fg%3E%0D%3Cscript%3E(function()%7Bvar a%3Ddocument.querySelector('%23HJXe644piRf')%2Cb%3Da.querySelectorAll('style')%2Cc%3Dfunction(d)%7Bb.forEach(function(f)%7Bvar g%3Df.textContent%3Bg%26amp%3B%26amp%3B(f.textContent%3Dg.replace(%2Ftransform-box%3A%5B%5E%3B%5Cr%5Cn%5D*%2Fgi%2C'transform-box%3A '%2Bd))%7D)%7D%3Bc('initial')%2Cwindow.requestAnimationFrame(function()%7Breturn c('fill-box')%7D)%7D)()%3B%3C%2Fscript%3E%3C%2Fsvg%3E\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 75px;\r\n    height: 75px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1399px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 calc(7% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n        clip-path: polygon(0 calc(7% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .contact-caption {\r\n        font-size: 24px;\r\n    }\r\n    .submit-button:disabled {\r\n        cursor: not-allowed;\r\n        pointer-events: none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1400px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 calc(10% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n        clip-path: polygon(0 calc(10% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-section\">\r\n    <div class=\"container\">\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <h2 class=\"section-title text-center\">Contact</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <div class=\"element gradient\">\r\n                    <div class=\"section-content contact-content wow fade-in-bottom\">\r\n                        <h2 class=\"contact-caption caption\">\r\n                            Whether you’d like to discuss a project, ask me about my website or simply say “hello”,&nbsp;I’d love to hear from you.\r\n                        </h2>\r\n                        <div class=\"contact-form\" *ngIf=\"!successMessage\">\r\n                            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n                                <div class=\"columns\">\r\n                                    <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-label\" for=\"name\">Name</label>\r\n                                            <input class=\"form-input\" type=\"text\" id=\"name\" placeholder=\"Name\" autocomplete='name' ngModel required name=\"name\" #name=\"ngModel\">\r\n                                        </div>\r\n                                        <div [hidden]=\"name.valid || !name.touched\">\r\n                                            <span class=\"error\" [hidden]=\"!name.hasError('required')\">Name is required!</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"columns\">\r\n                                    <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-label\" for=\"email\">Email</label>\r\n                                            <input class=\"form-input\" type=\"email\" id=\"email\" placeholder=\"Email\" autocomplete='email' ngModel required name=\"email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                                        </div>\r\n                                        <div [hidden]=\"email.valid || !email.touched\" class=\"text-right\">\r\n                                            <span class=\"error\" *ngIf=\"email.hasError('pattern') || email.dirty\">Please, enter a valid email address!</span>\r\n                                            <span class=\"error\" [hidden]=\"!email.hasError('required')\">Email is required!</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"columns\">\r\n                                    <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-label\" for=\"message\">Message</label>\r\n                                            <textarea class=\"form-input\" id=\"message\" placeholder=\"Type your message...\" rows=\"3\" ngModel required name=\"message\" #message=\"ngModel\"></textarea>\r\n                                        </div>\r\n                                        <div [hidden]=\"message.valid || !message.touched\">\r\n                                            <span class=\"error\" [hidden]=\"!message.hasError('required')\">Message is required!</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"columns\">\r\n                                    <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                                        <div class=\"accept-checkbox\">\r\n                                            <input type=\"checkbox\" name=\"accepted\" id=\"accepted\" ngModel required>\r\n                                            <label for=\"accepted\">I have read and accept the\r\n                                                <!-- <a href=\"https://iamsainikhil.github.io/terms-and-conditions\" target=\"_blank\" (click)=\"legalItemsClick('terms')\">Terms</a>&nbsp;&&nbsp; -->\r\n                                                <a href=\"https://iamsainikhil.github.io/privacy-policy\" target=\"_blank\" (click)=\"legalItemsClick('privacy')\">Privacy Policy</a>.\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"columns\">\r\n                                    <div class=\"column contact-form-button-group\">\r\n                                        <button type=\"submit\" class=\"submit-button wow zoomIn\" [disabled]=\"!f.valid\">Submit</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                        <!-- success message -->\r\n                        <div class=\"container success-message fade-in-bottom\" *ngIf=\"successMessage\">\r\n                            <div class=\"columns\">\r\n                                <div class=\"column col-sm-12 col-md-10 col-8 centered\">\r\n                                    <div class=\"empty\">\r\n                                        <div class=\"empty-icon\">\r\n                                            <p class=\"email-success\"></p>\r\n                                        </div>\r\n                                        <p class=\"empty-title h5\">Message has been sent successfully!</p>\r\n                                        <div class=\"empty-action centered\">\r\n                                            <button class=\"submit-button\" (click)=\"sendMessage()\">Send&nbsp;another&nbsp;message</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_contact_service__ = __webpack_require__("../../../../../src/app/shared/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService, gaService) {
        this.contactService = contactService;
        this.gaService = gaService;
        this.successMessage = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (f) {
        var data = {
            name: f.value.name,
            email: f.value.email,
            message: f.value.message,
            dateAdded: new Date()
        };
        this.contactService.addData(data);
        this.successMessage = true;
        this.gaService.emitEvent('submitted-contact-message', 'contact-form', 'button');
    };
    ContactComponent.prototype.sendMessage = function () {
        this.successMessage = false;
    };
    ContactComponent.prototype.legalItemsClick = function (name) {
        this.gaService.emitEvent(name + "-contact-form", 'legal-items-contact-form', 'accept-checkbox');
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/home/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__["a" /* GAService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/home-header/home-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* common */\r\n \r\n .sticky.mobile-menu,\r\n .sticky.desktop-menu {\r\n     top: -100%;\r\n }\r\n \r\n .non-sticky {\r\n     background-color: #f5f5f5 !important;\r\n }\r\n \r\n .non-sticky .desktop-items-container a {\r\n     color: #808080;\r\n     background-color: #f5f5f5 !important;\r\n     margin: 0 !important;\r\n }\r\n \r\n .non-sticky .desktop-items-container a:hover {\r\n     color: #000;\r\n }\r\n \r\n .desktop-menu,\r\n .mobile-menu {\r\n     width: 100%;\r\n     top: 0;\r\n     position: fixed;\r\n     z-index: 999;\r\n     background-color: transparent;\r\n     height: 70px;\r\n }\r\n \r\n .desktop-logo,\r\n .mobile-logo {\r\n     background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 22.0.1%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 511 511%22 style%3D%22enable-background%3Anew 0 0 511 511%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3Anone%3B%7D%0D%09.st1%7Benable-background%3Anew    %3B%7D%0D%3C%2Fstyle%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M471.5%2C56h-432C17.7%2C56%2C0%2C73.7%2C0%2C95.5v320C0%2C437.3%2C17.7%2C455%2C39.5%2C455h432c21.8%2C0%2C39.5-17.7%2C39.5-39.5v-320%0D%09%09C511%2C73.7%2C493.3%2C56%2C471.5%2C56z M39.5%2C71h432C485%2C71%2C496%2C82%2C496%2C95.5V120H15V95.5C15%2C82%2C26%2C71%2C39.5%2C71z M471.5%2C440h-432%0D%09%09C26%2C440%2C15%2C429%2C15%2C415.5V135h481v280.5C496%2C429%2C485%2C440%2C471.5%2C440z%22%2F%3E%0D%09%3Cpath d%3D%22M39.5%2C103c2%2C0%2C3.9-0.8%2C5.3-2.2c1.4-1.4%2C2.2-3.3%2C2.2-5.3s-0.8-3.9-2.2-5.3S41.5%2C88%2C39.5%2C88s-3.9%2C0.8-5.3%2C2.2%0D%09%09c-1.4%2C1.4-2.2%2C3.3-2.2%2C5.3s0.8%2C3.9%2C2.2%2C5.3C35.6%2C102.2%2C37.5%2C103%2C39.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M63.5%2C103c2%2C0%2C3.9-0.8%2C5.3-2.2c1.4-1.4%2C2.2-3.3%2C2.2-5.3s-0.8-3.9-2.2-5.3c-1.4-1.4-3.3-2.2-5.3-2.2c-2%2C0-3.9%2C0.8-5.3%2C2.2%0D%09%09c-1.4%2C1.4-2.2%2C3.3-2.2%2C5.3s0.8%2C3.9%2C2.2%2C5.3C59.6%2C102.2%2C61.5%2C103%2C63.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M87.5%2C103c2%2C0%2C3.9-0.8%2C5.3-2.2c1.4-1.4%2C2.2-3.3%2C2.2-5.3s-0.8-3.9-2.2-5.3c-1.4-1.4-3.3-2.2-5.3-2.2s-3.9%2C0.8-5.3%2C2.2%0D%09%09c-1.4%2C1.4-2.2%2C3.3-2.2%2C5.3s0.8%2C3.9%2C2.2%2C5.3C83.6%2C102.2%2C85.5%2C103%2C87.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M366%2C192.4c-3.8-3.2-10.1-3.2-13.9%2C0s-3.8%2C8.4%2C0%2C11.6l87.7%2C73L352%2C350c-3.8%2C3.2-3.8%2C8.4%2C0%2C11.6c2%2C1.6%2C4.5%2C2.4%2C7%2C2.4%0D%09%09s5-0.8%2C7-2.4l94.6-78.8c3.8-3.2%2C3.8-8.4%2C0-11.6L366%2C192.4z%22%2F%3E%0D%09%3Cpath d%3D%22M160.9%2C192.4c-4.2-3.2-11-3.2-15.2%2C0L42.6%2C271.2c-4.2%2C3.2-4.2%2C8.4%2C0%2C11.6l103.1%2C78.8c2.1%2C1.6%2C4.9%2C2.4%2C7.6%2C2.4%0D%09%09s5.4-0.8%2C7.6-2.4c4.2-3.2%2C4.2-8.4%2C0-11.6l-95.5-73l95.5-73C165.1%2C200.8%2C165.1%2C195.6%2C160.9%2C192.4z%22%2F%3E%0D%09%3Cpath d%3D%22M119.5%2C103h304c4.1%2C0%2C7.5-3.4%2C7.5-7.5s-3.4-7.5-7.5-7.5h-304c-4.1%2C0-7.5%2C3.4-7.5%2C7.5S115.4%2C103%2C119.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M455.5%2C103h16c4.1%2C0%2C7.5-3.4%2C7.5-7.5s-3.4-7.5-7.5-7.5h-16c-4.1%2C0-7.5%2C3.4-7.5%2C7.5S451.4%2C103%2C455.5%2C103z%22%2F%3E%0D%3C%2Fg%3E%0D%3Crect x%3D%22212%22 y%3D%22219%22 class%3D%22st0%22 width%3D%2226%22 height%3D%22145%22%2F%3E%0D%3Cg class%3D%22st1%22%3E%0D%09%3Cpath d%3D%22M250.6%2C238.4c0%2C5.3-1.2%2C9.6-3.4%2C13.3c-2.2%2C3.7-5%2C5.4-8.1%2C5.4s-5.8-1.9-8-5.4c-2.2-3.6-3.4-8-3.4-13.3%0D%09%09c0-1.1%2C0.1-2.9%2C0.3-4.7c-1.3-0.1-2.1-0.4-2.4-0.4c-4.3%2C0-6.5%2C3.4-6.5%2C9.9c0%2C3.4%2C1.3%2C11%2C3.8%2C22.9c2.5%2C11.9%2C3.8%2C21.1%2C3.8%2C27.8%0D%09%09c0%2C14.3-4.3%2C25.2-12.9%2C32.3c-6.5%2C5.3-14%2C7.9-22.5%2C7.9c-7.9%2C0-14.9-2-20.9-6c-8.6-5.6-12.8-14.3-12.8-26.1%0D%09%09c0-17.1%2C7.9-25.5%2C23.7-25.5h16.3l3.1%2C12.6H188c-3.2%2C0-6%2C1-8.3%2C3c-3.1%2C2.6-4.6%2C6.6-4.6%2C11.9c0%2C5.9%2C2.1%2C10.5%2C6.4%2C13.9%0D%09%09c3.2%2C2.6%2C6.8%2C3.7%2C10.5%2C3.7c4.7%2C0%2C8.7-1.9%2C11.8-5.9c3.7-4.3%2C5.5-10.8%2C5.5-18.9c0-5.6-1.2-13.8-3.5-24.4c-2.3-10.5-3.5-18.8-3.5-24.7%0D%09%09c0-19.2%2C8.8-28.7%2C26.5-28.7h10.5c2.9%2C0%2C5.5%2C1.9%2C7.7%2C5.4C249.3%2C228.6%2C250.6%2C233.2%2C250.6%2C238.4z%22%2F%3E%0D%09%3Cpath d%3D%22M339%2C237.8c0%2C5.4-1.2%2C9.9-3.6%2C13.5c-2.2%2C3.6-4.9%2C5.2-7.9%2C5.2s-5.7-1.7-7.7-5.2l-14.2%2C72.3c-1.4%2C7-3.7%2C10.5-6.9%2C10.5%0D%09%09c-4.4%2C0-7.1-3.6-7.9-10.5l-7.1-61.8l-9.6%2C52.2c-1%2C5.4-2.9%2C9.7-5.7%2C12.9c-2.7%2C3.1-5.5%2C4.7-8.8%2C4.7h-20.2c1.3-5.8%2C2.3-9.7%2C3.2-12.2%0D%09%09c1.7-4.5%2C3.6-6.8%2C5.9-6.8c1.4%2C0%2C3.5%2C0.6%2C6.2%2C1.7c2.8%2C1.2%2C4.9%2C1.7%2C6.2%2C1.7c3%2C0%2C5.1-3.3%2C6.4-10.2l13.2-70.1c1.2-6%2C2.1-9.9%2C2.9-11.6%0D%09%09c1.4-3.2%2C3.5-4.7%2C6.4-4.7c4.3%2C0%2C7.1%2C5.7%2C8.3%2C16.7l5.9%2C53.8l8.8-45.7c3.2-16.9%2C8.2-25.3%2C14.9-25.3c3%2C0%2C5.7%2C1.7%2C7.9%2C5.2%0D%09%09C337.8%2C227.7%2C339%2C232.2%2C339%2C237.8z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cpolygon class%3D%22st0%22 points%3D%22260%2C286 312%2C286 312%2C286 %09%22%2F%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     width: 50px;\r\n     height: 50px;\r\n     position: absolute;\r\n }\r\n \r\n .desktop-banner,\r\n .mobile-banner {\r\n     top: 0;\r\n     margin-top: -70px;\r\n }\r\n \r\n .desktop-logo:hover,\r\n .desktop-items-container a:hover {\r\n     color: #000;\r\n     cursor: pointer;\r\n }\r\n \r\n /* scroll mouse */\r\n \r\n @-webkit-keyframes ani-mouse {\r\n     0% {\r\n         opacity: 1;\r\n         top: 29%;\r\n     }\r\n     15% {\r\n         opacity: 1;\r\n         top: 50%;\r\n     }\r\n     50% {\r\n         opacity: 0;\r\n         top: 50%;\r\n     }\r\n     100% {\r\n         opacity: 0;\r\n         top: 29%;\r\n     }\r\n }\r\n \r\n @keyframes ani-mouse {\r\n     0% {\r\n         opacity: 1;\r\n         top: 29%;\r\n     }\r\n     15% {\r\n         opacity: 1;\r\n         top: 50%;\r\n     }\r\n     50% {\r\n         opacity: 0;\r\n         top: 50%;\r\n     }\r\n     100% {\r\n         opacity: 0;\r\n         top: 29%;\r\n     }\r\n }\r\n \r\n .scroll-btn {\r\n     display: block;\r\n     position: absolute;\r\n     left: 0;\r\n     right: 0;\r\n     text-align: center;\r\n }\r\n \r\n .scroll-btn>* {\r\n     display: inline-block;\r\n     line-height: 18px;\r\n     font-size: 13px;\r\n     font-weight: normal;\r\n     color: #7f8c8d;\r\n     color: #ffffff;\r\n     font-family: Helvetica, Arial, sans-serif;\r\n     letter-spacing: 2px;\r\n }\r\n \r\n .scroll-btn>*:hover,\r\n .scroll-btn>*:focus,\r\n .scroll-btn>*.active {\r\n     color: #ffffff;\r\n     cursor: pointer;\r\n }\r\n \r\n .scroll-btn>*:hover,\r\n .scroll-btn>*:focus,\r\n .scroll-btn>*:active,\r\n .scroll-btn>*.active {\r\n     opacity: 0.8;\r\n     filter: alpha(opacity=80);\r\n }\r\n \r\n .scroll-btn .mouse {\r\n     position: relative;\r\n     display: block;\r\n     width: 35px;\r\n     height: 55px;\r\n     margin: 0 auto 20px;\r\n     -webkit-box-sizing: border-box;\r\n     box-sizing: border-box;\r\n     border: 3px solid white;\r\n     border-radius: 23px;\r\n }\r\n \r\n .scroll-btn .mouse>* {\r\n     position: absolute;\r\n     display: block;\r\n     top: 29%;\r\n     left: 50%;\r\n     width: 8px;\r\n     height: 8px;\r\n     margin: -4px 0 0 -4px;\r\n     background: white;\r\n     border-radius: 50%;\r\n     -webkit-animation: ani-mouse 2.5s linear infinite;\r\n     animation: ani-mouse 2.5s linear infinite;\r\n }\r\n \r\n .tip span.message::after {\r\n     left: 15px;\r\n     top: 23px;\r\n }\r\n \r\n /* desktop */\r\n \r\n .desktop-menu {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-orient: horizontal;\r\n     -webkit-box-direction: normal;\r\n         -ms-flex-direction: row;\r\n             flex-direction: row;\r\n     -ms-flex-wrap: nowrap;\r\n         flex-wrap: nowrap;\r\n     -webkit-box-pack: justify;\r\n         -ms-flex-pack: justify;\r\n             justify-content: space-between;\r\n }\r\n \r\n .desktop-logo {\r\n     z-index: 999;\r\n     top: 15px;\r\n     left: 25px;\r\n }\r\n \r\n .desktop-items-container {\r\n     top: 20px;\r\n     right: 0;\r\n     position: absolute;\r\n     z-index: 999;\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-orient: horizontal;\r\n     -webkit-box-direction: normal;\r\n         -ms-flex-direction: row;\r\n             flex-direction: row;\r\n     -ms-flex-wrap: nowrap;\r\n         flex-wrap: nowrap;\r\n     -ms-flex-pack: distribute;\r\n         justify-content: space-around;\r\n     opacity: 0.9;\r\n }\r\n \r\n .desktop-items-container a {\r\n     padding: 0 20px;\r\n     color: #f5f5f5;\r\n     font-family: 'Poppins', sans-serif, monospace;\r\n     letter-spacing: 1px;\r\n     font-weight: bold;\r\n     font-size: 22px;\r\n     text-transform: capitalize;\r\n }\r\n \r\n /* to display better menu when hover on parallax banner [ desktop ] */\r\n \r\n /* .navbar:hover .desktop-items-container a {\r\n     background-color: rgba(0, 0, 0, 0.5);\r\n     border-radius: 15px;\r\n     margin: 0 3px;\r\n }\r\n  */\r\n \r\n .parallax-back {\r\n     background-image: url(" + escape(__webpack_require__("../../../../../src/assets/icons/layer3.svg")) + ");\r\n     background-size: cover;\r\n     background-repeat: no-repeat;\r\n     background-attachment: fixed;\r\n     height: 100vh;\r\n }\r\n \r\n .parallax-front {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-orient: vertical;\r\n     -webkit-box-direction: normal;\r\n         -ms-flex-direction: column;\r\n             flex-direction: column;\r\n     color: #fff;\r\n     font-weight: bold;\r\n     background: rgba(0, 0, 0, 0.5);\r\n }\r\n \r\n .parallax-front h1 {\r\n     font-size: 64px;\r\n     font-family: 'Poppins', sans-serif;\r\n     font-weight: bold;\r\n }\r\n \r\n .parallax-front p {\r\n     font-family: 'Poppins', sans-serif;\r\n     font-size: 22px;\r\n     letter-spacing: 1px;\r\n }\r\n \r\n /* mobile menu */\r\n \r\n .mobile-menu {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-orient: horizontal;\r\n     -webkit-box-direction: normal;\r\n         -ms-flex-direction: row;\r\n             flex-direction: row;\r\n     -ms-flex-wrap: nowrap;\r\n         flex-wrap: nowrap;\r\n     -webkit-box-pack: justify;\r\n         -ms-flex-pack: justify;\r\n             justify-content: space-between;\r\n }\r\n \r\n .mobile-logo {\r\n     z-index: 10;\r\n     top: 10px;\r\n     left: 10px;\r\n }\r\n \r\n .mobile-icon {\r\n     position: absolute;\r\n     z-index: 999;\r\n     top: 5px;\r\n     padding-right: 10px;\r\n     right: 0;\r\n }\r\n \r\n /* mobile menu items */\r\n \r\n .mobile-items-container {\r\n     position: absolute;\r\n     background: #f5f5f5;\r\n     width: 100%;\r\n     height: 100%;\r\n     min-height: 200vh;\r\n     z-index: 99;\r\n     overflow-y: auto;\r\n }\r\n \r\n .mobile-nav-links {\r\n     margin-top: 50px;\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-orient: vertical;\r\n     -webkit-box-direction: normal;\r\n         -ms-flex-direction: column;\r\n             flex-direction: column;\r\n     text-align: center;\r\n }\r\n \r\n .mobile-nav-links a {\r\n     color: #353839;\r\n     font-family: 'Poppins', sans-serif;\r\n     font-size: 32px;\r\n     text-transform: capitalize;\r\n     padding-top: 50px;\r\n }\r\n \r\n /* icon  */\r\n \r\n .menu-icon {\r\n     width: 54px;\r\n     height: 54px;\r\n     margin: auto;\r\n     position: relative;\r\n     border-radius: 50%;\r\n }\r\n \r\n .menu-icon span {\r\n     position: absolute;\r\n     top: 50%;\r\n     left: 50%;\r\n     -webkit-transform: translateX(-50%) translateY(-50%);\r\n             transform: translateX(-50%) translateY(-50%);\r\n     display: block;\r\n     width: 22px;\r\n     height: 2px;\r\n     background-color: #000;\r\n }\r\n \r\n .menu-icon span:before,\r\n .menu-icon span:after {\r\n     content: \"\";\r\n     background-color: #000;\r\n     width: 22px;\r\n     height: 2px;\r\n     position: absolute;\r\n     top: 0;\r\n     left: 0;\r\n     -webkit-transform: translateY(-6px);\r\n             transform: translateY(-6px);\r\n     -webkit-transition: -webkit-transform 0.5s;\r\n     transition: -webkit-transform 0.5s;\r\n     transition: transform 0.5s;\r\n     transition: transform 0.5s, -webkit-transform 0.5s;\r\n }\r\n \r\n .menu-icon span:after {\r\n     -webkit-transform: translateY(6px);\r\n             transform: translateY(6px);\r\n }\r\n \r\n .menu-icon:hover span:before {\r\n     -webkit-transform: translateY(-8px);\r\n             transform: translateY(-8px);\r\n }\r\n \r\n .menu-icon:hover span:after {\r\n     -webkit-transform: translateY(8px);\r\n             transform: translateY(8px);\r\n }\r\n \r\n /* icon cross animation */\r\n \r\n .menu-icon-cross {\r\n     background-color: transparent;\r\n     -webkit-transition: -webkit-transform 0.5s;\r\n     transition: -webkit-transform 0.5s;\r\n     transition: transform 0.5s;\r\n     transition: transform 0.5s, -webkit-transform 0.5s;\r\n }\r\n \r\n .menu-icon-cross span::before,\r\n .menu-icon-cross span::after {\r\n     -webkit-transform-origin: 50% 50%;\r\n             transform-origin: 50% 50%;\r\n }\r\n \r\n .menu-icon-cross span {\r\n     -webkit-transition: background 0.5s, -webkit-transform 0.5s;\r\n     transition: background 0.5s, -webkit-transform 0.5s;\r\n     transition: background 0.5s, transform 0.5s;\r\n     transition: background 0.5s, transform 0.5s, -webkit-transform 0.5s;\r\n }\r\n \r\n .menu-icon-cross svg {\r\n     fill: transparent;\r\n     stroke-width: 2px;\r\n     stroke: #fff;\r\n     stroke-dashArray: 165;\r\n     stroke-dashOffset: 165;\r\n     -webkit-transition: stroke-dashOffset 1s, fill 0.5s;\r\n     transition: stroke-dashOffset 1s, fill 0.5s;\r\n }\r\n \r\n .menu-icon-cross.isOpen {\r\n     -webkit-transform: rotate(180deg);\r\n             transform: rotate(180deg);\r\n     background-color: #808080;\r\n }\r\n \r\n .menu-icon-cross.isOpen span {\r\n     background: transparent;\r\n }\r\n \r\n .menu-icon-cross.isOpen span:before {\r\n     -webkit-transform: translateY(0) rotate(45deg);\r\n             transform: translateY(0) rotate(45deg);\r\n }\r\n \r\n .menu-icon-cross.isOpen span:after {\r\n     -webkit-transform: translateY(0) rotate(-45deg);\r\n             transform: translateY(0) rotate(-45deg);\r\n }\r\n \r\n .menu-icon-cross.isOpen svg {\r\n     stroke-dashOffset: 0;\r\n }\r\n \r\n .menu-icon-cross.isOpen:hover svg {\r\n     fill: rgba(255, 255, 255, 0.1);\r\n }\r\n \r\n @media only screen and (max-width: 991px) {\r\n     .desktop-logo,\r\n     .desktop-menu,\r\n     .desktop-banner {\r\n         display: none;\r\n         /* hide desktop menu on mobile devices */\r\n     }\r\n     .mobile-banner {\r\n         width: 100%;\r\n         height: auto;\r\n     }\r\n     .parallax-front {\r\n         background: rgba(0, 0, 0, 0.5);\r\n     }\r\n     .parallax-front p {\r\n         font-size: 20px;\r\n     }\r\n     .parallax-back {\r\n         background-position: center center;\r\n     }\r\n     .scroll-btn {\r\n         bottom: 25px;\r\n     }\r\n }\r\n \r\n @media only screen and (min-width: 992px) {\r\n     .mobile-logo,\r\n     .mobile-menu,\r\n     .mobile-banner {\r\n         display: none;\r\n     }\r\n     .desktop-banner {\r\n         width: 100%;\r\n         height: auto;\r\n     }\r\n     .scroll-btn {\r\n         z-index: 999;\r\n     }\r\n     /* To increase contrast on text when hover on parallax banner */\r\n     .parallax:hover .parallax-front {\r\n         background: rgba(0, 0, 0, 0.5);\r\n     }\r\n     .parallax-front .sub-title {\r\n         display: -webkit-box;\r\n         display: -ms-flexbox;\r\n         display: flex;\r\n         -webkit-box-orient: horizontal;\r\n         -webkit-box-direction: normal;\r\n             -ms-flex-flow: row nowrap;\r\n                 flex-flow: row nowrap;\r\n         width: 100%;\r\n     }\r\n     .sub-title p {\r\n         width: 33.33%;\r\n     }\r\n     .scroll-btn {\r\n         bottom: 0;\r\n     }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/home-header/home-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar\" appScrollable (scrollDirection)=\"getPosition($event)\">\r\n    <!-- desktop menu & banner -->\r\n    <div class=\"desktop-menu\" [ngClass]=\"{'sticky': !showHeader, 'non-sticky slide-bottom': animateHeader}\">\r\n        <div class=\"desktop-logo\" routerLink=\"/\" (click)=\"linksClick('logo')\"></div>\r\n        <div class=\"desktop-items-container\">\r\n            <a routerLink=\"/about\" (click)=\"linksClick('about')\">About</a>\r\n            <!-- <a routerLink=\"/skills\" (click)=\"linksClick('skills')\">Skills</a> -->\r\n            <a routerLink=\"/projects\" (click)=\"linksClick('projects')\">Projects</a>\r\n            <a routerLink=\"/achievements\" (click)=\"linksClick('achievements')\">Achievements</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"parallax desktop-banner\">\r\n        <!-- <div class=\"parallax-top-left\"></div>\r\n        <div class=\"parallax-top-right\"></div>\r\n        <div class=\"parallax-bottom-left\" tabindex=\"1\"></div>\r\n        <div class=\"parallax-bottom-right\" tabindex=\"2\"></div> -->\r\n        <div class=\"parallax-content\">\r\n            <div class=\"parallax-front\">\r\n                <h1 class=\"tracking-in-expand\">Sai Nikhil</h1>\r\n                <div class=\"sub-title\">\r\n                    <p class=\"tracking-in-expand-fwd\">UI/UX&nbsp;Designer</p>\r\n                    <p class=\"tracking-in-expand-fwd\">Web&nbsp;Application&nbsp;Developer</p>\r\n                    <p class=\"tracking-in-expand-fwd\">Front&nbsp;End&nbsp;Web&nbsp;Developer</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"parallax-back\">\r\n            </div>\r\n        </div>\r\n        <span class=\"scroll-btn\">\r\n                <a pageScroll href=\"#about\" class=\"tip\" (click)=\"linksClick('scroll-down-desktop')\">\r\n                    <span class=\"message\">Scroll Down</span>\r\n        <span class=\"mouse\">\r\n                        <span></span>\r\n        </span>\r\n        </a>\r\n        </span>\r\n    </div>\r\n\r\n    <!-- desktop menu & banner end -->\r\n    <!-- mobile menu & banner -->\r\n    <div class=\"mobile-menu\" [ngClass]=\"{'sticky': !showHeader, 'non-sticky slide-bottom': animateHeader}\">\r\n        <div class=\"mobile-logo\" routerLink=\"/\"></div>\r\n        <div class=\"mobile-icon\">\r\n            <div class=\"menu-icon menu-icon-cross\" [ngClass]=\"{'isOpen' : !menuIcon}\" (click)=\"menuIconClick('menu')\">\r\n                <span></span>\r\n                <svg x=\"0\" y=\"0\" width=\"54px\" height=\"54px\" viewbox=\"0 0 54 54\">\r\n                    <circle cx=\"27\" cy=\"27\" r=\"26\"></circle>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n        <div class=\"mobile-items-container\" *ngIf=\"!menuIcon\">\r\n            <div class=\"mobile-nav-links\">\r\n                <a routerLink=\"/about\" (pageScrollFinish)=\"menuIconClick('about')\">About</a>\r\n                <!-- <a routerLink=\"/skills\" (pageScrollFinish)=\"menuIconClick('skills')\">Skills</a> -->\r\n                <a pageScroll href=\"#projects\" (pageScrollFinish)=\"menuIconClick('projects')\">Projects</a>\r\n                <a routerLink=\"/achievements\" (pageScrollFinish)=\"menuIconClick('achievements')\">Achievements</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"parallax mobile-banner\">\r\n        <div class=\"parallax-content\">\r\n            <div class=\"parallax-front\">\r\n                <h1 class=\"wow tracking-in-expand\">Sai Nikhil</h1>\r\n                <div class=\"sub-title\">\r\n                    <p class=\"wow tracking-in-expand-fwd\">UI/UX&nbsp;Designer</p>\r\n                    <p class=\"wow tracking-in-expand-fwd\">Web&nbsp;Application&nbsp;Developer</p>\r\n                    <p class=\"wow tracking-in-expand-fwd\">Full&nbsp;Stack&nbsp;Web&nbsp;Developer</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"parallax-back\">\r\n                <!-- image is placed here from css -->\r\n            </div>\r\n        </div>\r\n        <span class=\"scroll-btn\">\r\n                <a pageScroll href=\"#about\" (click)=\"linksClick('scroll-down-mobile')\">\r\n                    <span class=\"mouse\">\r\n                        <span></span>\r\n        </span>\r\n        </a>\r\n        </span>\r\n    </div>\r\n    <!-- mobile menu & banner end -->\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/home/components/home-header/home-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeHeaderComponent = /** @class */ (function () {
    function HomeHeaderComponent(gaService) {
        this.gaService = gaService;
        this.menuIcon = true;
        this.showHeader = true;
        this.animateHeader = false;
    }
    HomeHeaderComponent.prototype.ngOnInit = function () {
    };
    HomeHeaderComponent.prototype.menuIconClick = function (name) {
        if (this.menuIcon === false) {
            this.menuIcon = true;
        }
        else {
            this.menuIcon = false;
        }
        this.gaService.emitEvent(name + "-home-header-mobile", 'mobile-menu-links', 'link');
    };
    HomeHeaderComponent.prototype.linksClick = function (name) {
        this.gaService.emitEvent(name + "-home-header-desktop", 'home-header-desktop', 'link');
    };
    // show header when user scrolls up
    HomeHeaderComponent.prototype.getPosition = function (e) {
        if (e === 'up') {
            this.showHeader = true;
            this.animateHeader = true;
        }
        else if (e === 'zero') {
            this.showHeader = true;
            this.animateHeader = false;
        }
        else {
            this.showHeader = false;
            this.animateHeader = false;
        }
    };
    HomeHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-header',
            template: __webpack_require__("../../../../../src/app/home/components/home-header/home-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/home-header/home-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_ga_service__["a" /* GAService */]])
    ], HomeHeaderComponent);
    return HomeHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* projects section */\r\n\r\n.gradient {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: auto;\r\n        grid-template-rows: auto;\r\n    background: #6a5acd;\r\n}\r\n\r\n/* card */\r\n\r\n.card-header {\r\n    color: #000;\r\n}\r\n\r\n.card-body {\r\n    color: #808080;\r\n}\r\n\r\n.project-button {\r\n    border: 1px solid #6a5acd;\r\n    color: #6a5acd;\r\n    margin: 10px 0;\r\n}\r\n\r\n.project-button:hover {\r\n    background-color: #6a5acd;\r\n    color: #fff;\r\n}\r\n\r\n.explore-button {\r\n    padding-top: 50px;\r\n}\r\n\r\n.explore-button button {\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.explore-button button:hover {\r\n    background-color: #fff;\r\n    color: #6a5acd;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 calc(1% - 1vw), 100% 0, 100% 100%, 0 calc(100% - 4vw));\r\n        clip-path: polygon(0 calc(1% - 1vw), 100% 0, 100% 100%, 0 calc(100% - 4vw));\r\n    }\r\n    .projects-element {\r\n        -webkit-clip-path: polygon(0 calc(1% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n        clip-path: polygon(0 calc(1% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n    }\r\n    .projects-content {\r\n        padding: 100px 10px;\r\n    }\r\n    .projects {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 0.85fr;\r\n            grid-template-columns: 0.85fr;\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        grid-gap: 20px;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n    .card {\r\n        padding: 35px 10px 20px 10px;\r\n    }\r\n}\r\n\r\n/* ipad only */\r\n\r\n@media only screen and (min-width: 767px) and (max-width: 1279px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 calc(2% - 1vw), 100% 0, 100% 100%, 0 calc(100% - 4vw));\r\n        clip-path: polygon(0 calc(2% - 1vw), 100% 0, 100% 100%, 0 calc(100% - 4vw));\r\n    }\r\n    .projects-element {\r\n        -webkit-clip-path: polygon(0 calc(3% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n        clip-path: polygon(0 calc(3% - 1vw), 100% 0, 100% 100%, 0 100%);\r\n    }\r\n    .projects-content {\r\n        padding: 150px 20px;\r\n    }\r\n    .projects {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[2];\r\n            grid-template-columns: repeat(2, 1fr);\r\n        -ms-grid-rows: none;\r\n            grid-template-rows: none;\r\n        grid-gap: 30px;\r\n        -webkit-box-pack: center !important;\r\n            -ms-flex-pack: center !important;\r\n                justify-content: center !important;\r\n    }\r\n    .card {\r\n        padding: 40px 10px 30px 10px;\r\n    }\r\n    .card-content {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: none;\r\n            grid-template-columns: none;\r\n        -ms-grid-rows: 100px 225px 75px;\r\n            grid-template-rows: 100px 225px 75px;\r\n    }\r\n    .card-body {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: none;\r\n            grid-template-columns: none;\r\n        -ms-grid-rows: 150px 75px;\r\n            grid-template-rows: 150px 75px;\r\n    }\r\n    .card-footer {\r\n        margin-top: 15px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);\r\n        clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);\r\n    }\r\n    .projects-element {\r\n        -webkit-clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%);\r\n        clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%);\r\n    }\r\n    .projects-content {\r\n        padding: 150px 100px;\r\n    }\r\n    .projects {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[3];\r\n            grid-template-columns: repeat(3, 1fr);\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n        grid-gap: 30px;\r\n        -webkit-box-pack: center !important;\r\n            -ms-flex-pack: center !important;\r\n                justify-content: center !important;\r\n    }\r\n    .card {\r\n        padding: 50px 10px 30px 10px;\r\n    }\r\n    .card-content {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: none;\r\n            grid-template-columns: none;\r\n        -ms-grid-rows: 100px 250px;\r\n            grid-template-rows: 100px 250px;\r\n    }\r\n    .card-body {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: none;\r\n            grid-template-columns: none;\r\n        -ms-grid-rows: 150px 100px;\r\n            grid-template-rows: 150px 100px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"columns\">\r\n        <div class=\"column\">\r\n            <h2 class=\"text-center\" [ngClass]=\"{'section-title': page === 'home', 'pa-title': page === 'projects'}\">Projects</h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"columns\">\r\n        <div class=\"column\">\r\n            <div class=\"gradient\" [ngClass]=\"{'element': page === 'home', 'projects-element': page === 'projects'}\">\r\n                <div class=\"section-content projects-content\">\r\n                    <div *ngIf=\"page === 'projects'\">\r\n                        <app-filter [chipData]=\"chipData\" [page]=\"page\"></app-filter>\r\n                    </div>\r\n                    <div *ngIf=\"showLoader\">\r\n                        <app-site-loader></app-site-loader>\r\n                    </div>\r\n                    <div *ngIf=\"!showLoader\">\r\n                        <div class=\"projects\">\r\n                            <div *ngFor=\"let project of projectsData | async\">\r\n                                <div class=\"card wow fade-in-bottom\">\r\n                                    <div class=\"card-image\">\r\n                                        <app-devices [imageUrl]=\"project.data.imageUrl\"></app-devices>\r\n                                    </div>\r\n                                    <div class=\"card-content\">\r\n                                        <div class=\"card-header\">\r\n                                            <div class=\"card-title h3\">{{project.data.title}}</div>\r\n                                        </div>\r\n                                        <div class=\"card-body\">\r\n                                            <p>{{project.data.shortInfo}}</p>\r\n                                            <p>\r\n                                                <span class=\"chip\" *ngFor=\"let tag of project.data.tags\">{{tag}}</span>\r\n                                            </p>\r\n                                        </div>\r\n                                        <div class=\"card-footer\">\r\n                                            <button class=\"project-button\" [routerLink]=\"['/projects', project.id]\" (click)=\"buttonClick('read-story', project.id)\">Read the story</button>\r\n                                            <a [href]=\"project.data.url\" target=\"_blank\"><button class=\"project-button\" (click)=\"buttonClick('visit', project.id)\">View project</button></a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div><br>\r\n                        <!-- button -->\r\n                        <div class=\"explore-button wow zoomIn\" *ngIf=\"page === 'home'\">\r\n                            <button routerLink=\"/projects\" (click)=\"buttonClick('explore-more')\">explore more</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_projects_service__ = __webpack_require__("../../../../../src/app/shared/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService, gaService) {
        this.projectsService = projectsService;
        this.gaService = gaService;
        // filter chips
        this.chipData = [
            {
                name: 'latest',
                selected: true
            },
            {
                name: 'oldest',
                selected: false
            },
            {
                name: 'websites',
                selected: false
            },
            {
                name: 'web applications',
                selected: false
            }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.buttonClick = function (name, id) {
        if (id === void 0) { id = null; }
        if (id !== null) {
            this.gaService.emitEvent(id + "-view", 'project-view', 'button');
        }
        else {
            this.gaService.emitEvent(name + "-projects-on-" + this.page, 'projects-section', 'button');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProjectsComponent.prototype, "projectsData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProjectsComponent.prototype, "showLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "chipData", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/home/components/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_ga_service__["a" /* GAService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* skills section */\r\n\r\n.section-title {\r\n    padding-top: 100px;\r\n}\r\n\r\n.skills-content {\r\n    padding: 100px 25px 150px 25px;\r\n}\r\n\r\n.gradient {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: auto;\r\n        grid-template-rows: auto;\r\n    background: #ed4101;\r\n}\r\n\r\n/* specialities */\r\n\r\n.speciality-image {\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n/* categories */\r\n\r\n.category {\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-radius: 15px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column wrap;\r\n            flex-flow: column wrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 30px 20px 0 20px;\r\n    min-height: 200px;\r\n    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);\r\n            box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);\r\n}\r\n\r\n.front-end.category,\r\n.back-end.category {\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.category-images {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.category-image {\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 100px;\r\n    height: 60px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.ui-ux-design .category-image,\r\n.front-end .category-image {\r\n    margin-right: -15px;\r\n}\r\n\r\n.back-end .category-image {\r\n    margin-left: 30px;\r\n}\r\n\r\n.category-image .message {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.speciality-title,\r\n.sub-title,\r\n.category-title {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.explore-button {\r\n    padding-top: 50px;\r\n}\r\n\r\n.explore-button button {\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.explore-button button:hover {\r\n    background-color: #fff;\r\n    color: #ed4101;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(2% - 1vw), 100% calc(100% - 4vw), 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(2% - 1vw), 100% calc(100% - 4vw), 0 100%);\r\n    }\r\n    .skills-content {\r\n        text-align: left;\r\n    }\r\n    .skills-caption {\r\n        font-size: 24px;\r\n    }\r\n    /* specialities */\r\n    .specialities {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        justify-items: center;\r\n    }\r\n    .speciality-image {\r\n        width: 200px;\r\n        height: 200px;\r\n    }\r\n    .speciality-title {\r\n        margin-top: -20px;\r\n        text-align: center;\r\n    }\r\n    /* categories */\r\n    .sub-title {\r\n        font-size: 22px;\r\n    }\r\n    .category-title {\r\n        font-size: 24px;\r\n    }\r\n    .categories {\r\n        text-align: center;\r\n        padding: 20px 10px;\r\n    }\r\n    .category {\r\n        margin: 20px auto;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .element {\r\n        -webkit-clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% calc(100% - 3vw), 0 100%);\r\n        clip-path: polygon(0 0, 100% calc(3% - 1vw), 100% calc(100% - 3vw), 0 100%);\r\n    }\r\n    .skills-caption {\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n    }\r\n    /* specialities */\r\n    .specialities {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal !important;\r\n        -webkit-box-direction: normal !important;\r\n            -ms-flex-direction: row !important;\r\n                flex-direction: row !important;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n    }\r\n    .speciality-image {\r\n        width: 250px;\r\n        height: 250px;\r\n    }\r\n    .speciality-title {\r\n        margin-top: -30px;\r\n    }\r\n    /* categories */\r\n    .sub-title {\r\n        padding: 10px;\r\n    }\r\n    .categories {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (1fr)[2];\r\n            grid-template-columns: repeat(2, 1fr);\r\n        -ms-grid-rows: auto;\r\n            grid-template-rows: auto;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        grid-gap: 25px;\r\n        padding: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"columns\">\r\n        <div class=\"column\">\r\n            <h2 class=\"section-title text-center\">Skills</h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"skills-section container-fluid\">\r\n    <div class=\"columns\">\r\n        <div class=\"column\">\r\n            <div class=\"element gradient\">\r\n                <div class=\"section-content skills-content\">\r\n                    <div *ngIf=\"showLoader\">\r\n                        <app-site-loader></app-site-loader>\r\n                    </div>\r\n                    <div *ngIf=\"!showLoader\">\r\n                        <div class=\"wow fade-in-bottom\" *ngFor=\"let skill of skillsData | async\">\r\n                            <h2 class=\"skills-caption caption\">{{skill.caption}}</h2>\r\n                            <div class=\"specialities wow fade-in-bottom\">\r\n                                <div *ngFor=\"let item of skill.specialities\">\r\n                                    <p class=\"speciality-image\" [ngStyle]=\"{'background-image': 'url(' + item.image + ')'}\"></p>\r\n                                    <p class=\"speciality-title\">{{item.title}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <h2 class=\"sub-title text-center\">{{skill.subTitle}}</h2>\r\n                            <div class=\"categories\">\r\n                                <div class=\"web-design category wow fade-in-bottom\">\r\n                                    <h3 class=\"category-title\">{{skill.webDesign.title}}</h3>\r\n                                    <div class=\"category-images\">\r\n                                        <div *ngFor=\"let image of skill.webDesign.images\">\r\n                                            <p class=\"category-image tip\" [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n                                                <span class=\"message\">{{image | urlNameExtract}}</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-ux-design category wow fade-in-bottom\">\r\n                                    <h3 class=\"category-title\">{{skill.uiDesign.title}}</h3>\r\n                                    <div class=\"category-images\">\r\n                                        <div *ngFor=\"let image of skill.uiDesign.images\">\r\n                                            <p class=\"category-image tip\" [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n                                                <span class=\"message\">{{image | urlNameExtract}}</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"front-end category wow fade-in-bottom\">\r\n                                    <h3 class=\"category-title\">{{skill.frontEnd.title}}</h3>\r\n                                    <div class=\"category-images\">\r\n                                        <div *ngFor=\"let image of skill.frontEnd.images\">\r\n                                            <p class=\"category-image tip\" [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n                                                <span class=\"message\">{{image | urlNameExtract}}</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"back-end category wow fade-in-bottom\">\r\n                                    <h3 class=\"category-title\">{{skill.backEnd.title}}</h3>\r\n                                    <div class=\"category-images\">\r\n                                        <div *ngFor=\"let image of skill.backEnd.images\">\r\n                                            <p class=\"category-image tip\" [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n                                                <span class=\"message\">{{image | urlNameExtract}}</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- button -->\r\n                        <!-- <div class=\"explore-button wow zoomIn text-center\">\r\n                            <button routerLink=\"/skills\" (click)=\"buttonClick('explore-more')\">explore more</button>\r\n                        </div> -->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_skills_service__ = __webpack_require__("../../../../../src/app/shared/services/skills.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService, gaService) {
        this.skillsService = skillsService;
        this.gaService = gaService;
        this.showLoader = true;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.skillsService.getSkillsData().subscribe(function () {
            _this.skillsData = _this.skillsService.getSkillsData();
            _this.showLoader = false;
        });
    };
    SkillsComponent.prototype.getUrl = function (imageUrl) {
        return 'url(imageUrl)';
    };
    SkillsComponent.prototype.buttonClick = function (name) {
        this.gaService.emitEvent(name + "-skills", 'skills-section', 'button');
    };
    SkillsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/home/components/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_skills_service__["a" /* SkillsService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__["a" /* GAService */]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\r\n    <app-home-header></app-home-header>\r\n\r\n    <!-- about section -->\r\n    <section id=\"about\">\r\n        <app-about></app-about>\r\n    </section>\r\n\r\n    <!-- skills section -->\r\n    <section id=\"skills\">\r\n        <app-skills></app-skills>\r\n    </section>\r\n\r\n    <!-- projects section -->\r\n    <section id=\"projects\">\r\n        <app-projects [projectsData]=\"projectsData\" [showLoader]=\"showLoader\" [page]=\"page\"></app-projects>\r\n    </section>\r\n\r\n    <!-- achievememts section -->\r\n    <section id=\"achievements\">\r\n        <app-achievements [achievementsData]=\"achievementsData\" [showLoader]=\"showLoader\" [page]=\"page\"></app-achievements>\r\n    </section>\r\n\r\n    <!-- contact section -->\r\n    <section id=\"contact\">\r\n        <app-contact></app-contact>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_projects_service__ = __webpack_require__("../../../../../src/app/shared/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_achievements_service__ = __webpack_require__("../../../../../src/app/shared/services/achievements.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(projectsService, achievementsService) {
        this.projectsService = projectsService;
        this.achievementsService = achievementsService;
        this.page = 'home';
        this.showLoader = true;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsData = this.projectsService.getLimitedProjectsData(6);
        this.subscription = this.achievementsService.getLimitedAchievementsData(6).subscribe(function () {
            _this.achievementsData = _this.achievementsService.getLimitedAchievementsData(6);
            _this.showLoader = false;
        });
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_achievements_service__["a" /* AchievementsService */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".divider {\r\n    max-width: 200px;\r\n    border-color: #808080;\r\n}\r\n\r\n.contact-button {\r\n    margin-left: 45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<h2 class=\"legal-title\">Privacy Policy</h2>\r\n\r\n<div class=\"legal-content\">\r\n    <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be\r\n        used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read this privacy policy carefully to get a clear understanding of how I collect, use, protect or otherwise\r\n        handle your Personally Identifiable Information in accordance with https://iamsainikhil.github.io (the “Site”).</p><br/>\r\n\r\n    <h4>PERSONAL INFORMATION I COLLECT</h4>\r\n    <p>When you visit the Site, I automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the\r\n        Site, I collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. I refer to this automatically-collected information\r\n        as “Device Information.”\r\n    </p>\r\n\r\n    <h5>I collect Device Information using the following technologies:</h5>\r\n    <ul>\r\n        <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href=\"http://www.allaboutcookies.org\">http://www.allaboutcookies.org</a>.</li>\r\n        <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>\r\n    </ul>\r\n\r\n    <h5>I use cookies to:</h5>\r\n    <ul>\r\n        <li>\r\n            Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. I may also use trusted third-party services that track this information on my behalf.\r\n        </li>\r\n        <li>\r\n            You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct\r\n            way to modify your cookies\r\n        </li>\r\n        <li>If you turn cookies off, It won't affect the user's experience .</li>\r\n    </ul>\r\n\r\n    <h4>HOW DO I USE YOUR PERSONAL INFORMATION?</h4>\r\n    <p>I use the Device Information that I collect to help me screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize my Site (for example, by generating analytics about how my customers browse and\r\n        interact with the Site).</p>\r\n\r\n    <h4>SHARING YOUR PERSONAL INFORMATION</h4>\r\n    <p>I use Google Analytics to help me understand how my users use the Site--you can read more about how Google uses your Personal Information here: <a href=\"https://www.google.com/intl/en/policies/privacy/\">https://www.google.com/intl/en/policies/privacy/</a>.\r\n        You can also opt-out of Google Analytics here: <a href=\"https://tools.google.com/dlpage/gaoptout\">https://tools.google.com/dlpage/gaoptout</a>.</p>\r\n\r\n    <h4>HOW DO I PROTECT YOUR INFORMATION?</h4>\r\n    <p>My website is scanned on a regular basis for security issues and known vulnerabilities in order to make your visit to my site as safe as possible.</p>\r\n    <p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>\r\n    <p>In addition, all sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. I implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personalinformation.</p>\r\n\r\n\r\n    <h4>DO NOT TRACK</h4>\r\n    <p>Please note that I do not alter my Site’s data collection and use practices when I see a Do Not Track signal from your browser.</p>\r\n\r\n    <h4>California Online Privacy Protection Act</h4>\r\n    <p>\r\n        CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world)\r\n        that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it\r\n        is being shared. - See more at: <a href=\"http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf\">http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a>\r\n    </p>\r\n\r\n    <h5>According to CalOPPA, I agree to the following:</h5>\r\n    <p>Users can visit my site anonymously.</p>\r\n    <p>Once this privacy policy is created, I will add a link to it on my home page or as a minimum, on the first significant page after entering my website.</p>\r\n    <p>You will be notified of any Privacy Policy changes:</p>\r\n    <ul>\r\n        <li>On my Privacy Policy Page</li>\r\n    </ul>\r\n    <p>Can change your personal information:</p>\r\n    <ul>\r\n        <li>By emailing me</li>\r\n    </ul>\r\n\r\n    <h4>FAIR INFORMATION PRACTICES</h4>\r\n    <p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information\r\n        Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>\r\n\r\n    <h5>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</h5>\r\n    <p>I will notify you via email within 7 business days</p>\r\n    <p>I also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law.</p>\r\n    <p>This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</p>\r\n\r\n    <h4>CAN SPAM ACT</h4>\r\n    <p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>\r\n\r\n    <h5>I collect your email address when you post comments or email me through contact page in order to:</h5>\r\n    <ul>\r\n        <li>Send information, respond to inquiries, and/or other requests or questions</li>\r\n    </ul>\r\n\r\n    <h5>To be in accordance with CANSPAM, I agree to the following:</h5>\r\n    <ul>\r\n        <li>Not use false or misleading subjects or email addresses.</li>\r\n        <li>Identify the message as an advertisement in some reasonable way.</li>\r\n        <li>Include the physical address of our business or site headquarters.</li>\r\n        <li>Monitor third-party email marketing services for compliance, if one is used</li>\r\n        <li>Honor opt-out/unsubscribe requests quickly.</li>\r\n        <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>\r\n    </ul>\r\n\r\n    <h5>If at any time you would like to unsubscribe from receiving future emails, you can email me at</h5>\r\n    <ul>\r\n        <li>Follow the instructions at the bottom of each email and I will promptly remove you from ALL correspondence.</li>\r\n    </ul>\r\n\r\n    <h4>DATA RETENTION</h4>\r\n    <p>The data I collection through google analytics will be stored for a maximum of 24 months and any comments data will be stored forever. However, your data is strictly secured and can only be accessed by me.</p>\r\n\r\n    <h4>CHANGES</h4>\r\n    <p>I may update this privacy policy from time to time in order to reflect, for example, changes to my practices or for other operational, legal or regulatory reasons.</p>\r\n\r\n    <h4>CONTACT ME</h4>\r\n    <p><button class=\"contact-button\" routerLink=\"/contact\">Contact</button></p>\r\n    <div class=\"divider text-center\" data-content=\"OR\"></div>\r\n    <p>For more information about my privacy practices, if you have questions, or if you would like to make a complaint, please contact me by e-mail at bheemasl@mail.uc.edu</p>\r\n    <p><em>This policy is effective as of 12 June 2018.</em></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/components/content-card/content-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-card {\r\n    background: #f5f5f5;\r\n    color: #808080;\r\n    height: auto;\r\n    width: 100%;\r\n    margin-top: -75px;\r\n}\r\n\r\n.content-wrapper::before,\r\n.content-wrapper::after {\r\n    content: '';\r\n    background-image: url(\"data:image/svg+xml,%3Csvg width%3D%221792%22 height%3D%221792%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0D %3Cg%3E%0D  %3Ctitle%3Ebackground%3C%2Ftitle%3E%0D  %3Crect fill%3D%22none%22 id%3D%22canvas_background%22 height%3D%22402%22 width%3D%22582%22 y%3D%22-1%22 x%3D%22-1%22%2F%3E%0D %3C%2Fg%3E%0D %3Cg%3E%0D  %3Ctitle%3ELayer 1%3C%2Ftitle%3E%0D  %3Cpath fill%3D%22%23808080%22 id%3D%22svg_1%22 d%3D%22m832%2C960l0%2C384q0%2C80 -56%2C136t-136%2C56l-384%2C0q-80%2C0 -136%2C-56t-56%2C-136l0%2C-704q0%2C-104 40.5%2C-198.5t109.5%2C-163.5t163.5%2C-109.5t198.5%2C-40.5l64%2C0q26%2C0 45%2C19t19%2C45l0%2C128q0%2C26 -19%2C45t-45%2C19l-64%2C0q-106%2C0 -181%2C75t-75%2C181l0%2C32q0%2C40 28%2C68t68%2C28l224%2C0q80%2C0 136%2C56t56%2C136zm896%2C0l0%2C384q0%2C80 -56%2C136t-136%2C56l-384%2C0q-80%2C0 -136%2C-56t-56%2C-136l0%2C-704q0%2C-104 40.5%2C-198.5t109.5%2C-163.5t163.5%2C-109.5t198.5%2C-40.5l64%2C0q26%2C0 45%2C19t19%2C45l0%2C128q0%2C26 -19%2C45t-45%2C19l-64%2C0q-106%2C0 -181%2C75t-75%2C181l0%2C32q0%2C40 28%2C68t68%2C28l224%2C0q80%2C0 136%2C56t56%2C136z%22%2F%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 50px;\r\n    height: 50px;\r\n    display: inline-block;\r\n}\r\n\r\n.content-wrapper::before {\r\n    margin-right: 5px;\r\n    margin-bottom: -50px;\r\n}\r\n\r\n.content-wrapper::after {\r\n    position: absolute;\r\n    right: 0;\r\n    margin-right: 10px;\r\n    margin-top: -45px;\r\n    transform: rotate(180deg);\r\n    -webkit-transform: rotate(180deg);\r\n}\r\n\r\n.title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    letter-spacing: 1px;\r\n    color: #808080;\r\n    margin-left: 50px;\r\n    padding-left: 10px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.content {\r\n    margin-top: 75px;\r\n    padding: 25px;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    font-size: 18px;\r\n}\r\n\r\n.timeline-icon::before {\r\n    border: 1px solid #808080 !important;\r\n}\r\n\r\n.icon-lg {\r\n    background: #808080 !important;\r\n}\r\n\r\n/* error */\r\n\r\n.ndf-image {\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/icons/404_no_data.svg")) + ");\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/components/content-card/content-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoader\">\r\n    <app-site-loader></app-site-loader>\r\n</div>\r\n<div *ngIf=\"!showLoader\">\r\n    <div *ngFor=\"let story of storyData | async\">\r\n        <!-- story data -->\r\n        <div class=\"content-wrapper\" *ngFor=\"let data of story.data.data\">\r\n            <h2 class=\"title\">{{data.title}}</h2>\r\n            <div class=\"content-card\">\r\n                <p class=\"content\">{{data.info}}</p>\r\n            </div>\r\n        </div>\r\n        <!-- timeline -->\r\n        <!-- <h2 class=\"title\">Project Timeline</h2>\r\n                <div class=\"timeline\">\r\n                    <div class=\"timeline-item\">\r\n                        <div class=\"timeline-left\">\r\n                            <span class=\"timeline-icon\"></span>\r\n                        </div>\r\n                        <div class=\"timeline-content\">\r\n                            {{story.data.timeline.startDate | date}}\r\n                            <p>Initial commit on GitHub</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"timeline-item\">\r\n                        <div class=\"timeline-left\">\r\n                            <span class=\"timeline-icon icon-lg\">\r\n                                    <i class=\"icon icon-check\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"timeline-content\">\r\n                            {{story.data.timeline.startDate | date}}\r\n                            <div [innerHTML]=\"story.data.timeline.startInfo\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"timeline-item\">\r\n                        <div class=\"timeline-left\">\r\n                            <span class=\"timeline-icon icon-lg\">\r\n                                    <i class=\"icon icon-check\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"timeline-content\">\r\n                            {{story.data.timeline.endDate | date}}\r\n                            <div [innerHTML]=\"story.data.timeline.endInfo\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n        <!-- error -->\r\n        <div *ngIf=\"story.data.data.length === 0\">\r\n            <div class=\"svg-image ndf-image\"></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/components/content-card/content-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_projects_service__ = __webpack_require__("../../../../../src/app/shared/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentCardComponent = /** @class */ (function () {
    function ContentCardComponent(projectsService) {
        this.projectsService = projectsService;
        this.showLoader = true;
    }
    ContentCardComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ContentCardComponent.prototype.getData = function () {
        var _this = this;
        this.subscription = this.projectsService.getStoryData(this.projectId).subscribe(function () {
            _this.storyData = _this.projectsService.getStoryData(_this.projectId);
            _this.showLoader = false;
        });
    };
    ContentCardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ContentCardComponent.prototype, "projectId", void 0);
    ContentCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content-card',
            template: __webpack_require__("../../../../../src/app/projects/components/content-card/content-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/components/content-card/content-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_projects_service__["a" /* ProjectsService */]])
    ], ContentCardComponent);
    return ContentCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/components/project-list/project-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/components/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-wrapper\">\r\n    <app-projects [projectsData]=\"projectsData\" [page]=\"page\" [showLoader]=\"showLoader\"></app-projects>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_projects_service__ = __webpack_require__("../../../../../src/app/shared/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_filter_service__ = __webpack_require__("../../../../../src/app/shared/services/filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(projectsService, filterService) {
        this.projectsService = projectsService;
        this.filterService = filterService;
        this.showLoader = true;
        this.page = 'projects';
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterService.chipName.subscribe(function (name) {
            _this.chipName = name;
            _this.chipCondition(_this.chipName);
        });
    };
    /**
     * conditions to highlight respective chips
     */
    ProjectListComponent.prototype.chipCondition = function (data) {
        if (data === '' || data === 'latest') {
            this.latestClick();
        }
        else if (data === 'oldest') {
            this.oldestClick();
        }
        else if (data === 'websites') {
            this.websiteClick();
        }
        else if (data === 'web applications') {
            this.webAppClick();
        }
    };
    ProjectListComponent.prototype.latestClick = function () {
        var _this = this;
        this.showLoader = true;
        this.subscription = this.projectsService.getProjectsData().subscribe(function () {
            _this.projectsData = _this.projectsService.getProjectsData();
            _this.loaderOff();
        });
    };
    ProjectListComponent.prototype.oldestClick = function () {
        var _this = this;
        this.showLoader = true;
        var subscription = this.projectsService.getOrderedProjectsData('dateAdded').subscribe(function () {
            _this.projectsData = _this.projectsService.getOrderedProjectsData('dateAdded');
            _this.loaderOff();
        });
        this.subscription.add(subscription);
    };
    ProjectListComponent.prototype.websiteClick = function () {
        var _this = this;
        this.showLoader = true;
        var subscription = this.projectsService.getQueriedProjectsData('website', '==', true)
            .subscribe(function () {
            _this.projectsData = _this.projectsService.getQueriedProjectsData('website', '==', true);
            _this.loaderOff();
        });
        this.subscription.add(subscription);
    };
    ProjectListComponent.prototype.webAppClick = function () {
        var _this = this;
        this.showLoader = true;
        var subscription = this.projectsService.getQueriedProjectsData('webApplication', '==', true).subscribe(function () {
            _this.projectsData = _this.projectsService.getQueriedProjectsData('webApplication', '==', true);
            _this.loaderOff();
        });
        this.subscription.add(subscription);
    };
    ProjectListComponent.prototype.loaderOff = function () {
        var _this = this;
        setTimeout(function () {
            _this.showLoader = false;
        }, 100);
    };
    ProjectListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.filterService.chipName.next('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectListComponent.prototype, "projectsData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectListComponent.prototype, "showLoader", void 0);
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__("../../../../../src/app/projects/components/project-list/project-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/components/project-list/project-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_filter_service__["a" /* FilterService */]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/pages/project-page/project-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* project card */\r\n\r\n.card {\r\n    /* to place card above navbar when scrolled up */\r\n    z-index: 10;\r\n}\r\n\r\n.card-image {\r\n    margin-top: 10px;\r\n}\r\n\r\n.card-content {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: (0.33fr)[3];\r\n        grid-template-rows: repeat(3, 0.33fr);\r\n    grid-gap: 10px;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.card-body {\r\n    color: #808080;\r\n}\r\n\r\n.card-footer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.project-button {\r\n    border: 1px solid #808080;\r\n    color: #808080;\r\n}\r\n\r\n.project-button:hover {\r\n    background-color: #808080;\r\n    color: #f5f5f5;\r\n}\r\n\r\n/* main content */\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n        -ms-grid-rows: auto 1fr;\r\n            grid-template-rows: auto 1fr;\r\n        grid-gap: 20px;\r\n        padding: 30px 20px 20px 20px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .wrapper {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 0.55fr 1fr;\r\n            grid-template-columns: 0.55fr 1fr;\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n            grid-template-areas: 'side main main main';\r\n        grid-gap: 20px;\r\n        padding: 20px;\r\n    }\r\n    .side-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        grid-area: side;\r\n    }\r\n    .side-content>div {\r\n        top: 0;\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n    }\r\n    .main-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 3;\r\n        grid-area: main;\r\n        min-height: 50vh;\r\n        overflow: auto;\r\n        overflow-y: hidden;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/pages/project-page/project-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header><br>\r\n<div *ngIf=\"showLoader\">\r\n    <app-site-loader></app-site-loader>\r\n</div>\r\n<div *ngIf=\"!showLoader\">\r\n    <div class=\"wrapper\" *ngIf=\"projectData | async as project\">\r\n        <div class=\"side-content\">\r\n            <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                    <app-devices [imageUrl]=\"project.imageUrl\"></app-devices>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-header\">\r\n                        <div class=\"card-title h5\">{{project.title}}</div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <p>{{project.shortInfo}}</p>\r\n                        <p><span class=\"chip\" *ngFor=\"let tag of project.tags\">{{tag}}</span></p>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <app-likes [docId]=\"projectId\" [collectionName]=\"'projects'\"></app-likes>\r\n                        <a [href]=\"project.url\" target=\"_blank\"><button class=\"project-button\">View Project</button></a>\r\n                    </div>\r\n                    <a [href]=\"project.url | githubLink\" target=\"_blank\"><button class=\"project-button\">View GitHub Repository</button></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-content\">\r\n            <app-content-card [projectId]=\"projectId\"></app-content-card><br>\r\n            <app-comment-form [docId]=\"projectId\" [collectionName]=\"'projects'\"></app-comment-form><br>\r\n            <app-comments [docId]=\"projectId\" [collectionName]=\"'projects'\"></app-comments>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/pages/project-page/project-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_projects_service__ = __webpack_require__("../../../../../src/app/shared/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPageComponent = /** @class */ (function () {
    function ProjectPageComponent(route, projectsService) {
        this.route = route;
        this.projectsService = projectsService;
        this.showLoader = true;
    }
    Object.defineProperty(ProjectPageComponent.prototype, "projectId", {
        /**
         * Gets the companyId from the current route
         * @return {string}
         */
        get: function () {
            var segments = this.route.snapshot.url;
            return segments[1].path;
        },
        enumerable: true,
        configurable: true
    });
    ProjectPageComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ProjectPageComponent.prototype.getData = function () {
        var _this = this;
        this.subscription = this.projectsService.getProjectData(this.projectId).subscribe(function () {
            _this.projectData = _this.projectsService.getProjectData(_this.projectId);
            _this.showLoader = false;
        });
    };
    ProjectPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProjectPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-page',
            template: __webpack_require__("../../../../../src/app/projects/pages/project-page/project-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/pages/project-page/project-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_projects_service__["a" /* ProjectsService */]])
    ], ProjectPageComponent);
    return ProjectPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/pages/projects-page/projects-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/pages/projects-page/projects-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<app-project-list></app-project-list>"

/***/ }),

/***/ "../../../../../src/app/projects/pages/projects-page/projects-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent() {
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
    };
    ProjectsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects-page',
            template: __webpack_require__("../../../../../src/app/projects/pages/projects-page/projects-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/pages/projects-page/projects-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resume/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resume-content {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.buttons-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.resume-button {\r\n    border: 1px solid #2DBCAD;\r\n    color: #2DBCAD;\r\n    padding: 5px 15px;\r\n}\r\n\r\n.resume-button:hover {\r\n    background-color: #2DBCAD;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.back-home {\r\n    margin-left: 20px;\r\n}\r\n\r\nimg {\r\n    pointer-events: none;\r\n}\r\n\r\n#print {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .back-home {\r\n        margin-top: 15px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media print {\r\n    #noprint {\r\n        display: none;\r\n    }\r\n    #print {\r\n        display: block;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<div class=\"resume-content\" id=\"noprint\">\r\n    <figure class=\"figure fade-in-bottom\">\r\n        <img class=\"centered img-responsive\" src=\"https://iamsainikhil.github.io/assets/images/resume/SaiNikhilBheemanathiniResume.png\" alt=\"SainikhilBheemanathiniResume\" />\r\n    </figure>\r\n    <div class=\"buttons-group\">\r\n        <a href=\"https://iamsainikhil.github.io/assets/images/resume/SaiNikhilBheemanathiniResume_Restricted.pdf\" target=\"_blank\"><button class=\"resume-button wow zoomIn\" (click)=\"viewResume()\">Download Resume</button></a>\r\n        <button class=\"resume-button back-home wow zoomIn\" (click)=\"backClick()\">Back to home page</button>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"print\">\r\n    <p>This page is intended to be viewed online and may not be printed.</p>\r\n    <p>Please view this page at https://iamsainikhil.github.io/resume</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(router, gaService) {
        this.router = router;
        this.gaService = gaService;
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent.prototype.viewResume = function () {
        this.gaService.emitEvent("download-resume", 'download-resume-button', 'button');
    };
    ResumeComponent.prototype.backClick = function () {
        this.gaService.emitEvent("back-to-home-on-resume", 'back-button', 'button');
        this.router.navigateByUrl('/');
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_ga_service__["a" /* GAService */]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/avatar/avatar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".options {\r\n    padding: 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.options .label {\r\n    background: transparent;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.options i {\r\n    font-size: 24px;\r\n    margin-top: -1px;\r\n}\r\n\r\n.options i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.radio-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n}\r\n\r\n.avatars {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n        -ms-flex-direction: row !important;\r\n            flex-direction: row !important;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    padding: 10px;\r\n}\r\n\r\nfigure {\r\n    background: #f5f5f5;\r\n}\r\n\r\nfigure img:hover {\r\n    cursor: pointer;\r\n    background: #808080 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/avatar/avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"options text-center fade-in-bottom\">\r\n    <span class=\"label\">Select your Gender</span>\r\n    <!-- gender -->\r\n    <div class=\"radio-wrapper\" *ngFor=\"let radio of genderRadio; let i =index\">\r\n        <p><i class=\"far fa-circle\" (click)=\"radioClick(i)\" *ngIf=\"!radio.check\"></i></p>\r\n        <p><i class=\"far fa-check-circle\" *ngIf=\"radio.check\"></i></p>\r\n        <p class=\"label\">{{radio.label}}</p>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let data of avatarData | async\">\r\n    <p class=\"text-center fade-in-bottom\"><span class=\"chip\">Choose an Avatar</span></p>\r\n    <div class=\"avatars fade-in-bottom\" *ngIf=\"maleAvatar\">\r\n        <div *ngFor=\"let icon of data.man; let i = index\">\r\n            <figure class=\"avatar avatar-xl\">\r\n                <img [src]=\"icon\" alt=\"avatar\" [ngStyle]=\"{'background-color': (i === imageId) ? '#808080' : 'transparent'}\" (click)=\"avatarClick(icon, i)\">\r\n            </figure>\r\n        </div>\r\n    </div>\r\n    <div class=\"avatars fade-in-bottom\" *ngIf=\"femaleAvatar\">\r\n        <div *ngFor=\"let icon of data.women; let i = index\">\r\n            <figure class=\"avatar avatar-xl\">\r\n                <img [src]=\"icon\" alt=\"avatar\" [ngStyle]=\"{'background-color': (i === imageId) ? '#808080' : 'transparent'}\" (click)=\"avatarClick(icon, i)\">\r\n            </figure>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/avatar/avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_avatar_service__ = __webpack_require__("../../../../../src/app/shared/services/avatar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(avatarService) {
        this.avatarService = avatarService;
        this.avatarUrl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * check conditions for male/female avatars
         */
        this.maleAvatar = true;
        this.femaleAvatar = false;
        this.genderRadio = [
            {
                label: 'Male',
                check: true
            },
            {
                label: 'Female',
                check: false
            }
        ];
    }
    AvatarComponent.prototype.ngOnInit = function () {
        this.avatarData = this.avatarService.getAvatarData();
    };
    AvatarComponent.prototype.radioClick = function (i) {
        var _this = this;
        // random number and undefined data to force user select avatar after radioClick
        this.imageId = 99;
        this.gender.emit(undefined);
        this.avatarUrl.emit(undefined);
        this.genderRadio.forEach(function (v, index) {
            if (index === i) {
                v.check = true;
                _this.showAvatar(v.label);
            }
            else {
                v.check = false;
            }
        });
    };
    AvatarComponent.prototype.showAvatar = function (name) {
        if (name === 'Male') {
            this.maleAvatar = true;
            this.femaleAvatar = false;
        }
        else {
            this.maleAvatar = false;
            this.femaleAvatar = true;
        }
    };
    AvatarComponent.prototype.avatarClick = function (url, i) {
        var _this = this;
        this.genderRadio.forEach(function (v) {
            if (v.check === true) {
                _this.gender.emit(v.label);
            }
        });
        this.imageId = i;
        this.avatarUrl.emit(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AvatarComponent.prototype, "avatarUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AvatarComponent.prototype, "gender", void 0);
    AvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__("../../../../../src/app/shared/components/avatar/avatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/avatar/avatar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_avatar_service__["a" /* AvatarService */]])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/comment-form/comment-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* contact section */\r\n\r\n.form-label {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    padding-left: 10px;\r\n    text-align: left;\r\n    color: #808080;\r\n}\r\n\r\n.comment-form-button-group {\r\n    padding: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    border: 2px solid #caced7;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n    border: 2px solid #00c3b3;\r\n    outline: none;\r\n}\r\n\r\n.submit-button {\r\n    border: 1px solid #808080;\r\n    color: #808080;\r\n    padding: 5px 20px;\r\n}\r\n\r\n.comment-button {\r\n    border: 1px solid #808080;\r\n    color: #808080;\r\n}\r\n\r\n.submit-button:hover,\r\n.comment-button:hover {\r\n    background-color: #808080;\r\n    color: #fff;\r\n}\r\n\r\n.submit-button:disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\ninput {\r\n    border-radius: 15px;\r\n}\r\n\r\n/* errors */\r\n\r\n.error {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: left;\r\n        -ms-flex-pack: left;\r\n            justify-content: left;\r\n    padding-left: 10px;\r\n    color: #f54000;\r\n}\r\n\r\n.avatar-error {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    color: #f54000;\r\n}\r\n\r\n/* success message */\r\n\r\n.success-message button {\r\n    width: 300px;\r\n}\r\n\r\n.empty-icon {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.empty {\r\n    color: #343434;\r\n    background: #f4f5f6;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.email-success {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg version%3D%221.1%22 id%3D%22HJXe644piRf%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22 viewBox%3D%220 0 512 512%22 style%3D%22enable-background%3Anew 0 0 512 512%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle%3E%40-webkit-keyframes SJf-pENao0f_HJmMRZaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40keyframes SJf-pENao0f_HJmMRZaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40-webkit-keyframes rkybT4E6oCz_ryA-0WaRM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40keyframes rkybT4E6oCz_ryA-0WaRM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40-webkit-keyframes rk0l6VEpjCz_rJf-RWaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%40keyframes rk0l6VEpjCz_rJf-RWaAM_Animation%7B0%25%7B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B%7D50%25%7B-webkit-transform%3A scale(0.95%2C 0.95)%3Btransform%3A scale(0.95%2C 0.95)%3B%7D100%25%7B-webkit-transform%3A scale(1%2C 1)%3Btransform%3A scale(1%2C 1)%3B%7D%7D%23HJXe644piRf *%7B-webkit-animation-duration%3A 2s%3Banimation-duration%3A 2s%3B-webkit-animation-iteration-count%3A infinite%3Banimation-iteration-count%3A infinite%3B-webkit-animation-timing-function%3A cubic-bezier(0%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0%2C 0%2C 1%2C 1)%3B%7D%23r1El6VNasRf%7Bfill%3A %23FF4719%3B%7D%23BkSg6VNaiRf%7Bfill%3A %23B7D9DD%3B%7D%23ry8xT4NpiAG%7Bfill%3A %2388ACB5%3B%7D%23rJwl6NV6j0f%7Bfill%3A %23C7E7EB%3B%7D%23S1_xaNEpiRG%7Bfill%3A %23B7D9DD%3B%7D%23HkKlTNV6oCG%7Bfill%3A %23FFBE35%3B%7D%23rJclpV4aoRG%7Bfill%3A %23FFCD60%3B%7D%23SkieTEV6jCz%7Bfill%3A %23F3A933%3B%7D%23Hy3xaE4aoCf%7Bfill%3A %23FFCD60%3B%7D%23ryaxaEN6s0M%7Bfill%3A %23FFBE35%3B%7D%23rk0l6VEpjCz%7Bfill%3A %2327467A%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B%7D%23rkybT4E6oCz%7Bfill%3A %2388ACB5%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B%7D%23SJf-pENao0f%7B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B%7D%23rk0l6VEpjCz_rJf-RWaAM%7B-webkit-animation-name%3A rk0l6VEpjCz_rJf-RWaAM_Animation%3Banimation-name%3A rk0l6VEpjCz_rJf-RWaAM_Animation%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B-webkit-animation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3B%7D%23rkybT4E6oCz_ryA-0WaRM%7B-webkit-animation-name%3A rkybT4E6oCz_ryA-0WaRM_Animation%3Banimation-name%3A rkybT4E6oCz_ryA-0WaRM_Animation%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B-webkit-animation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3B%7D%23SJf-pENao0f_HJmMRZaAM%7B-webkit-animation-name%3A SJf-pENao0f_HJmMRZaAM_Animation%3Banimation-name%3A SJf-pENao0f_HJmMRZaAM_Animation%3B-webkit-transform-origin%3A 50%25 50%25%3Btransform-origin%3A 50%25 50%25%3Btransform-box%3A fill-box%3B-webkit-transform%3A scale(0.9%2C 0.9)%3Btransform%3A scale(0.9%2C 0.9)%3B-webkit-animation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3Banimation-timing-function%3A cubic-bezier(0.42%2C 0%2C 1%2C 1)%3B%7D%3C%2Fstyle%3E%0D%3Cpath d%3D%22M500.442%2C155.572l-67.453%2C248.625H79.011L11.558%2C155.572c2.135-2.168%2C5.087-3.519%2C8.355-3.519%26%2310%3B%26%239%3Bh472.173C495.355%2C152.053%2C498.307%2C153.404%2C500.442%2C155.572z%22 id%3D%22r1El6VNasRf%22%2F%3E%0D%3Cpolygon points%3D%22435.08%2C8.17 435.08%2C176.455 374.795%2C260.575 402.399%2C8.17 %22 id%3D%22BkSg6VNaiRf%22%2F%3E%0D%3Cpolygon points%3D%22435.08%2C176.455 435.08%2C437.913 369.718%2C437.913 385.688%2C227.894 %22 id%3D%22ry8xT4NpiAG%22%2F%3E%0D%3Cpolygon points%3D%2276.92%2C8.17 76.92%2C176.455 256%2C395.656 402.399%2C210.497 402.399%2C8.17 %22 id%3D%22rJwl6NV6j0f%22%2F%3E%0D%3Cpolygon points%3D%22256%2C362.975 126.311%2C227.894 76.92%2C176.455 76.92%2C437.913 402.399%2C437.913 402.399%2C210.497 %26%2310%3B%26%239%3B%22 id%3D%22S1_xaNEpiRG%22%2F%3E%0D%3Cpath d%3D%22M503.83%2C163.796v328.29c0%2C3.192-1.296%2C6.111-3.388%2C8.225l-51.875-9.554l21.787-303.845l30.088-31.341%26%2310%3B%26%239%3BC502.533%2C157.685%2C503.83%2C160.605%2C503.83%2C163.796z%22 id%3D%22HkKlTNV6oCG%22%2F%3E%0D%3Cpolygon points%3D%22470.354%2C186.913 470.354%2C490.757 334.946%2C327.941 %22 id%3D%22rJclpV4aoRG%22%2F%3E%0D%3Cpath d%3D%22M470.354%2C468.97l-11.743%2C34.86h33.476c3.268%2C0%2C6.22-1.351%2C8.355-3.519L470.354%2C468.97z%22 id%3D%22SkieTEV6jCz%22%2F%3E%0D%3Cpath d%3D%22M177.054%2C327.941L11.558%2C155.572c-2.092%2C2.113-3.388%2C5.033-3.388%2C8.225v328.29%26%2310%3B%26%239%3Bc0%2C3.192%2C1.296%2C6.111%2C3.388%2C8.225l72.867-8.726L177.054%2C327.941z%22 id%3D%22Hy3xaE4aoCf%22%2F%3E%0D%3Cpath d%3D%22M334.946%2C327.941l-63.858%2C66.506c-8.301%2C8.639-21.874%2C8.639-30.175%2C0l-63.858-66.506L11.558%2C500.311%26%2310%3B%26%239%3Bc2.135%2C2.168%2C5.087%2C3.519%2C8.355%2C3.519H458.61c3.268%2C0%2C6.22-1.351%2C8.355-3.519c2.092-2.113%2C3.388-5.033%2C3.388-8.225V468.97%26%2310%3B%26%239%3BL334.946%2C327.941z%22 id%3D%22ryaxaEN6s0M%22%2F%3E%0D%3Cg id%3D%22rk0l6VEpjCz_rJf-RWaAM%22 data-animator-group%3D%22true%22 data-animator-type%3D%222%22%3E%3Cpath d%3D%22M352.517%2C140.506c0-9.586-7.767-17.364-17.354-17.364h-21.33l0%2C0l-38.847%2C0.011%26%2310%3B%26%239%3Bc11.754-18.04%2C17.571-41.243%2C17.571-64.948c0-9.586-7.767-17.354-17.354-17.354c-9.586%2C0-17.354%2C7.767-17.354%2C17.354%26%2310%3B%26%239%3Bc0%2C35.873-29.075%2C64.937-64.948%2C64.937l-21.787%2C69.425l21.787%2C69.425h120.93l0%2C0c9.586%2C0%2C17.364-7.767%2C17.364-17.354%26%2310%3B%26%239%3Bs-7.778-17.354-17.364-17.354l0%2C0h7.114c9.586%2C0%2C17.354-7.778%2C17.354-17.364c0-9.575-7.767-17.354-17.354-17.354h7.114%26%2310%3B%26%239%3Bc9.575%2C0%2C17.354-7.767%2C17.354-17.354c0-9.586-7.778-17.354-17.354-17.354h7.103C344.75%2C157.859%2C352.517%2C150.092%2C352.517%2C140.506z%22 id%3D%22rk0l6VEpjCz%22%2F%3E%3C%2Fg%3E%0D%3Cg id%3D%22rkybT4E6oCz_ryA-0WaRM%22 data-animator-group%3D%22true%22 data-animator-type%3D%222%22%3E%3Crect x%3D%22159.483%22 y%3D%22123.152%22 width%3D%2233.422%22 height%3D%22138.839%22 id%3D%22rkybT4E6oCz%22%2F%3E%3C%2Fg%3E%0D%3Cpath d%3D%22M506.678%2C150.293C506.678%2C150.292%2C506.678%2C150.292%2C506.678%2C150.293c-3.641-3.931-8.827-6.41-14.595-6.41h-48.828V8.17%26%2310%3B%26%239%3Bc0-4.513-3.657-8.17-8.17-8.17H76.914c-4.513%2C0-8.17%2C3.657-8.17%2C8.17v135.712H19.916c-5.767%2C0-10.954%2C2.479-14.594%2C6.41%26%2310%3B%26%239%3Bc0%2C0%2C0%2C0-0.001%2C0.001C2.029%2C153.846%2C0%2C158.584%2C0%2C163.798v328.287C0%2C503.066%2C8.934%2C512%2C19.916%2C512h472.169%26%2310%3B%26%239%3Bc10.982%2C0%2C19.916-8.934%2C19.916-19.916V163.798C512%2C158.584%2C509.97%2C153.846%2C506.678%2C150.293z M76.914%2C184.634%26%2310%3B%26%239%3Bc4.513%2C0%2C8.17-3.657%2C8.17-8.17V16.34h341.83v160.123c0%2C4.513%2C3.658%2C8.17%2C8.17%2C8.17c4.513%2C0%2C8.17-3.657%2C8.17-8.17v-16.241h41.404%26%2310%3B%26%239%3BL265.195%2C388.786c-2.459%2C2.561-5.725%2C3.971-9.195%2C3.971s-6.738-1.411-9.195-3.971L27.341%2C160.222h41.403v16.241%26%2310%3B%26%239%3BC68.744%2C180.977%2C72.402%2C184.634%2C76.914%2C184.634z M492.084%2C495.66H19.916c-1.938%2C0-3.575-1.637-3.575-3.575V172.359l149.389%2C155.583%26%2310%3B%26%239%3BL34.281%2C464.84c-3.124%2C3.254-3.02%2C8.426%2C0.235%2C11.552c1.584%2C1.521%2C3.622%2C2.277%2C5.657%2C2.277c2.147%2C0%2C4.29-0.84%2C5.895-2.512%26%2310%3B%26%239%3Bl130.988-136.42l57.962%2C60.365c5.569%2C5.8%2C13.021%2C8.995%2C20.983%2C8.995s15.413-3.195%2C20.983-8.995l57.962-60.365l51.233%2C53.357%26%2310%3B%26%239%3Bc1.605%2C1.671%2C3.749%2C2.512%2C5.895%2C2.512c2.035%2C0%2C4.073-0.756%2C5.657-2.277c3.255-3.125%2C3.36-8.298%2C0.235-11.553l-51.693-53.836%26%2310%3B%26%239%3BL495.66%2C172.359v319.725C495.66%2C494.022%2C494.022%2C495.66%2C492.084%2C495.66z%22 id%3D%22rygZa4NpoRz%22%2F%3E%0D%3Cpath d%3D%22M423.969%2C408.86c-3.125-3.256-8.297-3.359-11.552-0.235c-3.255%2C3.125-3.36%2C8.298-0.235%2C11.552l53.749%2C55.979%26%2310%3B%26%239%3Bc1.605%2C1.671%2C3.747%2C2.512%2C5.895%2C2.512c2.035%2C0%2C4.073-0.756%2C5.657-2.277c3.255-3.125%2C3.36-8.298%2C0.235-11.552L423.969%2C408.86z%22 id%3D%22rk-ZTNVTj0z%22%2F%3E%0D%3Cg id%3D%22SJf-pENao0f_HJmMRZaAM%22 data-animator-group%3D%22true%22 data-animator-type%3D%222%22%3E%3Cpath d%3D%22M159.478%2C270.162h33.428h120.932c14.075%2C0%2C25.526-11.451%2C25.526-25.526c0-5.025-1.461-9.718-3.977-13.673%26%2310%3B%26%239%3Bc6.692-4.607%2C11.086-12.32%2C11.086-21.039c0-5.025-1.46-9.717-3.977-13.671c6.692-4.607%2C11.086-12.32%2C11.086-21.039%26%2310%3B%26%239%3Bc0-5.025-1.461-9.718-3.978-13.673c6.693-4.607%2C11.088-12.32%2C11.088-21.039c0-14.075-11.451-25.526-25.526-25.526l-46.344%2C0.001%26%2310%3B%26%239%3Bc7.737-16.57%2C11.908-36.237%2C11.908-56.771c0-14.075-11.451-25.526-25.526-25.526s-25.526%2C11.451-25.526%2C25.526%26%2310%3B%26%239%3Bc0%2C31.303-25.467%2C56.77-56.77%2C56.77H159.48c-4.513%2C0-8.17%2C3.657-8.17%2C8.17v138.845C151.308%2C266.505%2C154.966%2C270.162%2C159.478%2C270.162%26%2310%3B%26%239%3Bz M266.018%2C58.207c0-5.064%2C4.12-9.185%2C9.186-9.185c5.064%2C0%2C9.185%2C4.12%2C9.185%2C9.185c0%2C22.918-5.77%2C44.398-16.247%2C60.482%26%2310%3B%26%239%3Bc-1.636%2C2.512-1.766%2C5.718-0.338%2C8.353c1.429%2C2.635%2C4.185%2C4.277%2C7.183%2C4.277l60.177-0.001c5.064%2C0%2C9.186%2C4.12%2C9.186%2C9.186%26%2310%3B%26%239%3Bc0%2C5.064-4.12%2C9.186-9.186%2C9.186h-7.108H313.84c-4.513%2C0-8.17%2C3.657-8.17%2C8.17s3.657%2C8.17%2C8.17%2C8.17h14.217%26%2310%3B%26%239%3Bc5.064%2C0%2C9.185%2C4.121%2C9.185%2C9.187s-4.12%2C9.186-9.185%2C9.186h-7.108h-7.108c-4.513%2C0-8.17%2C3.657-8.17%2C8.17%26%2310%3B%26%239%3Bc0%2C4.512%2C3.657%2C8.17%2C8.17%2C8.17h7.108c5.064%2C0%2C9.186%2C4.12%2C9.186%2C9.186c0%2C5.066-4.12%2C9.186-9.186%2C9.186h-7.108%26%2310%3B%26%239%3Bc-4.513%2C0-8.17%2C3.657-8.17%2C8.17s3.657%2C8.17%2C8.17%2C8.17c5.064%2C0%2C9.185%2C4.121%2C9.185%2C9.187c0%2C5.064-4.12%2C9.186-9.185%2C9.186H201.078%26%2310%3B%26%239%3BV130.849C237.558%2C126.772%2C266.018%2C95.757%2C266.018%2C58.207z M167.648%2C131.317h17.088v122.504h-17.088V131.317z%22 id%3D%22SJf-pENao0f%22%2F%3E%3C%2Fg%3E%0D%3Cg id%3D%22H1Xb64NpjAM%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22H1N-T4NToCz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rkrbTVN6iAz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22ryL-TN46sAz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rJPb64EaiCz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22HkdWpNNpsRG%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rytZpEVasAf%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22SJ9bpVETo0f%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22rysWTV46o0G%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22ByhZTE46s0f%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22BJaZ64NTsRz%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22SyA-a4ETj0f%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22SJ1f6VE6s0z%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22ryef6VETsRG%22%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22Hy-zpNVpiAf%22%3E%0D%3C%2Fg%3E%0D%3Cscript%3E(function()%7Bvar a%3Ddocument.querySelector('%23HJXe644piRf')%2Cb%3Da.querySelectorAll('style')%2Cc%3Dfunction(d)%7Bb.forEach(function(f)%7Bvar g%3Df.textContent%3Bg%26amp%3B%26amp%3B(f.textContent%3Dg.replace(%2Ftransform-box%3A%5B%5E%3B%5Cr%5Cn%5D*%2Fgi%2C'transform-box%3A '%2Bd))%7D)%7D%3Bc('initial')%2Cwindow.requestAnimationFrame(function()%7Breturn c('fill-box')%7D)%7D)()%3B%3C%2Fscript%3E%3C%2Fsvg%3E\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 75px;\r\n    height: 75px;\r\n}\r\n\r\n/* comment */\r\n\r\n.chip-message {\r\n    text-align: center;\r\n    padding: 20px;\r\n    color: #808080;\r\n    font-size: 20px;\r\n}\r\n\r\n.note {\r\n    padding: 20px;\r\n}\r\n\r\n.note strong {\r\n    color: #000;\r\n}\r\n\r\n.tile {\r\n    padding: 20px;\r\n}\r\n\r\n.tile-title {\r\n    color: #808080;\r\n}\r\n\r\nfigure img {\r\n    background: #808080;\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .submit-button:disabled {\r\n        cursor: not-allowed;\r\n        pointer-events: none;\r\n    }\r\n    .tile {\r\n        display: -ms-grid !important;\r\n        display: grid !important;\r\n            grid-template-areas: 'tile-icon tile-content' '. date';\r\n        -ms-grid-columns: 75px 1fr;\r\n            grid-template-columns: 75px 1fr;\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n    }\r\n    .tile-icon {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        grid-area: tile-icon;\r\n    }\r\n    .tile-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        grid-area: tile-content;\r\n    }\r\n    .tile-action {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 2;\r\n        grid-area: date;\r\n        text-align: end;\r\n    }\r\n    .tile-title {\r\n        font-size: 20px;\r\n    }\r\n    .tile-action {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .tile {\r\n        display: -ms-grid !important;\r\n        display: grid !important;\r\n            grid-template-areas: 'tile-icon tile-content date';\r\n        -ms-grid-columns: 75px 0.5fr 0.5fr;\r\n            grid-template-columns: 75px 0.5fr 0.5fr;\r\n        -ms-grid-rows: 1fr;\r\n            grid-template-rows: 1fr;\r\n    }\r\n    .tile-icon {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        grid-area: tile-icon;\r\n    }\r\n    .tile-content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        grid-area: tile-content;\r\n    }\r\n    .tile-title {\r\n        font-size: 22px;\r\n    }\r\n    .message {\r\n        grid-area: message;\r\n        font-size: 18px;\r\n    }\r\n    .tile-action {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 3;\r\n        grid-area: date;\r\n        text-align: end;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/comment-form/comment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" *ngIf=\"!successMessage\">\r\n    <button class=\"comment-button\" (click)=\"showForm()\" *ngIf=\"!showCommentForm\">Leave a Comment</button>\r\n    <button class=\"comment-button\" (click)=\"showForm()\" *ngIf=\"showCommentForm\">Hide Comment Form</button>\r\n</div>\r\n<!-- comment form -->\r\n<div *ngIf=\"showCommentForm\">\r\n    <app-avatar (gender)=\"onGender($event)\" (avatarUrl)=\"onAvatarUrl($event)\"></app-avatar>\r\n    <p class=\"text-center avatar-error\" *ngIf=\"avatarUrl == undefined && name.touched\">\r\n        Avatar is required! Please, select any one of the above avatar.\r\n    </p>\r\n\r\n    <div class=\"comment-form fade-in-bottom\">\r\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n            <div class=\"columns\">\r\n                <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\" for=\"name\">Name</label>\r\n                        <input class=\"form-input\" type=\"text\" id=\"name\" placeholder=\"Name\" autocomplete='name' ngModel required name=\"name\" #name=\"ngModel\">\r\n                    </div>\r\n                    <div [hidden]=\"name.valid || !name.touched\">\r\n                        <span class=\"error\" [hidden]=\"!name.hasError('required')\">Name is required!</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"columns\">\r\n                <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\" for=\"email\">Email</label>\r\n                        <input class=\"form-input\" type=\"email\" id=\"email\" placeholder=\"Email\" autocomplete='email' ngModel required name=\"email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                    </div>\r\n                    <div [hidden]=\"email.valid || !email.touched\" class=\"text-right\">\r\n                        <span class=\"error\" *ngIf=\"email.hasError('pattern') || email.dirty\">Please, enter a valid email address!</span>\r\n                        <span class=\"error\" [hidden]=\"!email.hasError('required')\">Email is required!</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"columns\">\r\n                <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\" for=\"message\">Message</label>\r\n                        <textarea class=\"form-input\" id=\"message\" placeholder=\"Type your message...\" rows=\"3\" ngModel required name=\"message\" #message=\"ngModel\"></textarea>\r\n                    </div>\r\n                    <div [hidden]=\"message.valid || !message.touched\">\r\n                        <span class=\"error\" [hidden]=\"!message.hasError('required')\">Message is required!</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"columns\">\r\n                <div class=\"column col-sm-10 col-md-8 col-6 centered\">\r\n                    <div class=\"accept-checkbox\">\r\n                        <input type=\"checkbox\" name=\"accepted\" id=\"accepted\" ngModel required>\r\n                        <label for=\"accepted\">I have read and accept the\r\n                            <!-- <a href=\"/terms-and-conditions\" target=\"_blank\" (click)=\"legalItemsClick('terms')\">Terms</a>&nbsp;&&nbsp; -->\r\n                            <a href=\"/privacy-policy\" target=\"_blank\" (click)=\"legalItemsClick('privacy')\">Privacy Policy</a>.\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"columns\">\r\n                <div class=\"column comment-form-button-group\">\r\n                    <button type=\"submit\" class=\"submit-button\" [disabled]=\"!f.valid || gender == undefined || avatarUrl == undefined\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- success message -->\r\n<div class=\"container success-message fade-in-bottom\" *ngIf=\"successMessage\">\r\n    <div class=\"columns\">\r\n        <div class=\"column col-12 centered\">\r\n            <div class=\"empty\">\r\n                <div class=\"empty-icon\">\r\n                    <p class=\"email-success\"></p>\r\n                </div>\r\n                <p class=\"empty-title h5\">Thank you, your comment has been received successfully!</p>\r\n                <p class=\"empty-title h5\">However, your comment will be posted public after I carefully review it!</p>\r\n                <div class=\"empty-action centered\">\r\n                    <button class=\"submit-button\" (click)=\"sendAnotherComment()\">Leave&nbsp;another&nbsp;comment</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- user comment  -->\r\n    <div class=\"chip-message\">\r\n        <span class=\"chip note\">Below is your comment which will be publicly posted after <strong>&nbsp;Approval</strong>.</span>\r\n    </div>\r\n    <div class=\"columns\">\r\n        <div class=\"column col-12 centered\">\r\n            <div class=\"tile\">\r\n                <div class=\"tile-icon\">\r\n                    <figure class=\"avatar avatar-xl\">\r\n                        <img [src]=\"commentFormData.avatarUrl\" alt=\"avatar\">\r\n                    </figure>\r\n                </div>\r\n                <div class=\"tile-content\">\r\n                    <h4 class=\"tile-title\">{{commentFormData.name}}</h4>\r\n                    <p class=\"message\">{{commentFormData.message}}</p>\r\n                </div>\r\n                <div class=\"tile-action\">\r\n                    <p>Posted on {{commentFormData.dateAdded | date: 'MMM dd, y, hh:mm a'}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/comment-form/comment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_likes_comments_service__ = __webpack_require__("../../../../../src/app/shared/services/likes-comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(likesCommentsService, gaService) {
        this.likesCommentsService = likesCommentsService;
        this.gaService = gaService;
        /**
         * condition to show comment form & avatar component when user clicks
         * leave a comment button
         */
        this.showCommentForm = false;
        /**
         * success message after user leaves a comment
         */
        this.successMessage = false;
        this.date = new Date();
    }
    CommentFormComponent.prototype.ngOnInit = function () {
    };
    CommentFormComponent.prototype.showForm = function () {
        if (this.showCommentForm === false) {
            this.showCommentForm = true;
            this.gaService.emitEvent(this.docId + "-show-comment-form", 'show-comment-form', 'button');
        }
        else {
            this.showCommentForm = false;
            this.avatarUrl = undefined;
            this.gaService.emitEvent(this.docId + "-hide-comment-form", 'hide-comment-form', 'button');
        }
    };
    CommentFormComponent.prototype.onSubmit = function (f) {
        this.commentFormData = {
            name: f.value.name,
            email: f.value.email,
            message: f.value.message,
            dateAdded: this.date,
            approved: false,
            gender: this.gender,
            avatarUrl: this.avatarUrl
        };
        this.likesCommentsService.addCommentsData(this.collectionName, this.docId, this.commentFormData);
        this.successMessage = true;
        this.showCommentForm = false;
        this.gaService.emitEvent(this.docId + "-submit-comment", 'submitted comment', 'button');
    };
    CommentFormComponent.prototype.sendAnotherComment = function () {
        this.successMessage = false;
        this.showCommentForm = true;
        this.gaService.emitEvent(this.docId + "-send-another-comment", 'send-another-comment', 'button');
    };
    CommentFormComponent.prototype.onGender = function (e) {
        this.gender = e;
        this.gaService.emitEvent(this.docId + "-gender-select", 'gender-select', 'button');
    };
    CommentFormComponent.prototype.onAvatarUrl = function (e) {
        this.avatarUrl = e;
        this.gaService.emitEvent(this.docId + "-avatar-select", 'avatar-select', 'button');
    };
    CommentFormComponent.prototype.legalItemsClick = function (name) {
        this.gaService.emitEvent(name + "-comments-form", 'legal-items-comment-form', 'accept-checkbox');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentFormComponent.prototype, "docId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentFormComponent.prototype, "collectionName", void 0);
    CommentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment-form',
            template: __webpack_require__("../../../../../src/app/shared/components/comment-form/comment-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/comment-form/comment-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_likes_comments_service__["a" /* LikesCommentsService */],
            __WEBPACK_IMPORTED_MODULE_1__services_ga_service__["a" /* GAService */]])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    padding: 20px;\r\n    color: #808080;\r\n}\r\n\r\n.tile-title {\r\n    color: #808080;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-size: 18px;\r\n}\r\n\r\n.second-row {\r\n    margin-top: -15px;\r\n}\r\n\r\n.message {\r\n    font-size: 16px;\r\n}\r\n\r\n.date {\r\n    color: #000;\r\n    font-size: 14px;\r\n}\r\n\r\n.chip,\r\n.message,\r\n.date {\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nfigure img {\r\n    background: #808080;\r\n}\r\n\r\n.selected-chip {\r\n    color: #f5f5f5;\r\n    background: #808080;\r\n}\r\n\r\n.chip:hover {\r\n    color: #f5f5f5;\r\n    background: #808080;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .comments {\r\n        padding: 0px 10px;\r\n    }\r\n    .first-row {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row nowrap;\r\n                flex-flow: row nowrap;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center title\">Comments</h2>\r\n<p class=\"filter text-right\">Filter By&nbsp;:\r\n    <span class=\"chip\" [ngClass]=\"{'selected-chip': latestChip}\" (click)=\"getLatestCommentsData()\">Latest</span>\r\n    <span class=\"chip\" [ngClass]=\"{'selected-chip': oldestChip}\" (click)=\"getOldestCommentsData()\">Oldest</span>\r\n</p>\r\n<div class=\"comments\">\r\n    <div *ngIf=\"commentsLoader\">\r\n        <app-site-loader></app-site-loader>\r\n    </div>\r\n    <div *ngFor=\"let comment of commentsData | async\">\r\n        <div *ngIf=\"!commentsLoader\">\r\n            <div class=\"tile\">\r\n                <div class=\"tile-icon\">\r\n                    <figure class=\"avatar avatar-xl\">\r\n                        <img [src]=\"comment.data.avatarUrl\" alt=\"avatar\">\r\n                    </figure>\r\n                </div>\r\n                <div class=\"tile-content\">\r\n                    <div class=\"first-row\">\r\n                        <h4 class=\"tile-title\">{{comment.data.name}}</h4>\r\n                        <p class=\"date\">{{comment.data.dateAdded}}</p>\r\n                    </div>\r\n                    <div class=\"second-row\">\r\n                        <p class=\"message\">{{comment.data.message}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_likes_comments_service__ = __webpack_require__("../../../../../src/app/shared/services/likes-comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(likesCommentsService, gaService) {
        this.likesCommentsService = likesCommentsService;
        this.gaService = gaService;
        this.commentsLoader = true;
        /**
         * default condition to highlight latest filter
         */
        this.latestChip = true;
        this.oldestChip = false;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.getLatestComments();
    };
    CommentsComponent.prototype.getLatestCommentsData = function () {
        this.oldestChip = false;
        this.latestChip = true;
        this.commentsLoader = true;
        this.getLatestComments();
    };
    CommentsComponent.prototype.getLatestComments = function () {
        var _this = this;
        this.subscription = this.likesCommentsService.getCommentsData(this.collectionName, this.docId, 'approved', '==', true).subscribe(function () {
            _this.commentsData = _this.likesCommentsService.getCommentsData(_this.collectionName, _this.docId, 'approved', '==', true);
            _this.commentsLoader = false;
        });
        // this.gaService.emitEvent(`${this.docId}-latest-comments`, 'filter-click', 'filter');
    };
    CommentsComponent.prototype.getOldestCommentsData = function () {
        var _this = this;
        this.latestChip = false;
        this.oldestChip = true;
        this.commentsLoader = true;
        var subscription = this.likesCommentsService.getOrderedCommentsData(this.collectionName, this.docId, 'dateAdded').subscribe(function () {
            _this.commentsData = _this.likesCommentsService.getOrderedCommentsData(_this.collectionName, _this.docId, 'dateAdded');
            _this.commentsLoader = false;
        });
        this.gaService.emitEvent(this.docId + "-oldest-comments", 'filter-click', 'filter');
        this.subscription.add(subscription);
    };
    CommentsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "docId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "collectionName", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/shared/components/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_likes_comments_service__["a" /* LikesCommentsService */],
            __WEBPACK_IMPORTED_MODULE_1__services_ga_service__["a" /* GAService */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/devices/devices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    width: 100%;\r\n}\r\n\r\n.mockup {\r\n    position: relative;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.artwork {\r\n    position: absolute;\r\n    width: 76%;\r\n    height: 80%;\r\n    top: 6.25%;\r\n    left: 12%;\r\n    overflow-x: hidden !important;\r\n    overflow-y: scroll !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mockup\">\r\n    <img src=\"https://iamsainikhil.github.io/assets/icons/macbook_portrait_gold.png\" alt=\"macbook-mockup\">\r\n    <div class=\"artwork\">\r\n        <img class=\"img-responsive\" [src]=\"imageUrl\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevicesComponent = /** @class */ (function () {
    function DevicesComponent() {
    }
    DevicesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DevicesComponent.prototype, "imageUrl", void 0);
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__("../../../../../src/app/shared/components/devices/devices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/devices/devices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/filter/filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-items {\r\n    padding-left: 10px;\r\n}\r\n\r\n.title {\r\n    font-family: 'Poppins', sans-serif;\r\n    padding-right: 10px;\r\n}\r\n\r\n.selected-chip.chip {\r\n    background: #fff !important;\r\n}\r\n\r\n.chip {\r\n    padding: 15px;\r\n    color: #fff !important;\r\n    background: transparent !important;\r\n    border: 1px solid #fff;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.chip:hover {\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n/* page specific styling */\r\n\r\n.project-chips.selected-chip {\r\n    color: #6a5acd !important;\r\n}\r\n\r\n.project-chips:hover {\r\n    color: #6a5acd;\r\n}\r\n\r\n.achievement-chips.selected-chip {\r\n    color: #4988CF !important;\r\n}\r\n\r\n.achievement-chips:hover {\r\n    color: #4988CF;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .title {\r\n        text-align: center;\r\n    }\r\n    .filter-items {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row wrap;\r\n                flex-flow: row wrap;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .filter {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row wrap;\r\n                flex-flow: row wrap;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        padding: 20px;\r\n    }\r\n    .filter-items span {\r\n        margin-left: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter\">\r\n    <h4 class=\"title\">Filter By&nbsp;:</h4>\r\n    <p class=\"filter-items\">\r\n        <span class=\"chip\" *ngFor=\"let chip of chipData; let i = index;\" [ngClass]=\"{'selected-chip': chip.selected, 'project-chips': page === 'projects', 'achievement-chips': page === 'achievements'}\" (click)=\"chipSelect(i)\">{{chip.name}}</span>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_filter_service__ = __webpack_require__("../../../../../src/app/shared/services/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterComponent = /** @class */ (function () {
    function FilterComponent(filterService, gaService) {
        this.filterService = filterService;
        this.gaService = gaService;
        this.chipData = [];
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.chipSelect = function (i) {
        for (var j in this.chipData) {
            if (this.chipData[j].selected === true) {
                this.chipData[j].selected = false;
            }
        }
        // make the selected chip true
        this.chipData[i].selected = true;
        // emit the selected chip name
        this.filterService.chipName.next(this.chipData[i].name);
        // emit ga event
        this.gaService.emitEvent(this.chipData[i].name + "-filter-select", this.page, 'filter-click');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "chipData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FilterComponent.prototype, "page", void 0);
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__("../../../../../src/app/shared/components/filter/filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_filter_service__["a" /* FilterService */],
            __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/gist/gist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/gist/gist.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"htmlData | safe: 'html'\"></div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/gist/gist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GistComponent = /** @class */ (function () {
    function GistComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GistComponent.prototype, "htmlData", void 0);
    GistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gist',
            template: __webpack_require__("../../../../../src/app/shared/components/gist/gist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/gist/gist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], GistComponent);
    return GistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/likes/likes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".love-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding-right: 20px;\r\n}\r\n\r\n.love-icon-empty {\r\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 51.997 51.997%22 style%3D%22enable-background%3Anew 0 0 51.997 51.997%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M51.911%2C16.242C51.152%2C7.888%2C45.239%2C1.827%2C37.839%2C1.827c-4.93%2C0-9.444%2C2.653-11.984%2C6.905%0D%09%09c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399%2C0-13.313%2C6.061-14.071%2C14.415c-0.06%2C0.369-0.306%2C2.311%2C0.442%2C5.478%0D%09%09c1.078%2C4.568%2C3.568%2C8.723%2C7.199%2C12.013l18.115%2C16.439l18.426-16.438c3.631-3.291%2C6.121-7.445%2C7.199-12.014%0D%09%09C52.216%2C18.553%2C51.97%2C16.611%2C51.911%2C16.242z M49.521%2C21.261c-0.984%2C4.172-3.265%2C7.973-6.59%2C10.985L25.855%2C47.481L9.072%2C32.25%0D%09%09c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725%2C9.139%2C7.806%2C3.826%2C14.158%2C3.826%0D%09%09c4.687%2C0%2C8.813%2C2.88%2C10.771%2C7.515l0.921%2C2.183l0.921-2.183c1.927-4.564%2C6.271-7.514%2C11.069-7.514%0D%09%09c6.351%2C0%2C11.433%2C5.313%2C12.096%2C12.727C49.938%2C16.57%2C50.229%2C18.264%2C49.521%2C21.261z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline-block;\r\n    margin-bottom: -15px;\r\n    margin-right: -10px;\r\n}\r\n\r\n.love-icon-filled {\r\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 50 50%22 style%3D%22enable-background%3Anew 0 0 50 50%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpath style%3D%22fill%3A%23D75A4A%3B%22 d%3D%22M24.85%2C10.126c2.018-4.783%2C6.628-8.125%2C11.99-8.125c7.223%2C0%2C12.425%2C6.179%2C13.079%2C13.543%0D%09c0%2C0%2C0.353%2C1.828-0.424%2C5.119c-1.058%2C4.482-3.545%2C8.464-6.898%2C11.503L24.85%2C48L7.402%2C32.165c-3.353-3.038-5.84-7.021-6.898-11.503%0D%09c-0.777-3.291-0.424-5.119-0.424-5.119C0.734%2C8.179%2C5.936%2C2%2C13.159%2C2C18.522%2C2%2C22.832%2C5.343%2C24.85%2C10.126z%22%2F%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline-block;\r\n    margin-bottom: -15px;\r\n    margin-right: -10px;\r\n}\r\n\r\n.love-icon-empty:hover,\r\n.love-icon-filled:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.number {\r\n    color: #808080;\r\n    margin-top: 0px;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.pulsate-fwd {\r\n    -webkit-animation: pulsate-fwd 0.5s ease-in-out 3 both;\r\n    animation: pulsate-fwd 0.5s ease-in-out 3 both;\r\n}\r\n\r\n@-webkit-keyframes pulsate-fwd {\r\n    0% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(1.1);\r\n        transform: scale(1.1);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes pulsate-fwd {\r\n    0% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(1.1);\r\n        transform: scale(1.1);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/likes/likes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let data of likesData | async\">\r\n    <div class=\"love-group zoomIn\" *ngIf=\"showIncrementIcon\">\r\n        <p class=\"love-icon-empty tip\" (click)=\"loveIncrementClick(data.data.count, data.id)\">\r\n            <span class=\"message\">Like this {{collectionName | sliceString}}</span>\r\n        </p>\r\n        <p class=\"chip number\">{{data.data.count}}</p>\r\n    </div>\r\n    <div class=\"love-group\" *ngIf=\"!showIncrementIcon\">\r\n        <p class=\"love-icon-filled tip pulsate-fwd\" (click)=\"loveDecrementClick(data.data.count, data.id)\">\r\n            <span class=\"message\">You already liked this {{collectionName | sliceString}}</span>\r\n        </p>\r\n        <p class=\"chip number\">{{data.data.count}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/likes/likes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_likes_comments_service__ = __webpack_require__("../../../../../src/app/shared/services/likes-comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LikesComponent = /** @class */ (function () {
    function LikesComponent(likesCommentsService, gaService) {
        this.likesCommentsService = likesCommentsService;
        this.gaService = gaService;
        /**
       * condition to show/hide empty/filled love icon
       */
        this.showIncrementIcon = true;
        this.likesArray = [];
    }
    LikesComponent.prototype.ngOnInit = function () {
        this.getLikesData();
        // check if the present docId is already liked
        if (localStorage.getItem('likes') !== null) {
            this.likesArray = JSON.parse(localStorage.getItem('likes'));
            if (this.likesArray.includes(this.docId)) {
                console.log('already liked');
                this.showIncrementIcon = false;
            }
        }
    };
    LikesComponent.prototype.getLikesData = function () {
        this.likesData = this.likesCommentsService.getLikesData(this.docId, this.collectionName);
    };
    LikesComponent.prototype.loveIncrementClick = function (count, id) {
        this.showIncrementIcon = false;
        this.likesCommentsService.incrementLikes(this.collectionName, this.docId, count, id);
        this.gaService.emitEvent(this.docId + "-increment-likes", 'increment-likes', 'love-click');
        // store the docId under likesArray in localStorage
        this.likesArray.push(this.docId);
        localStorage.setItem('likes', JSON.stringify(this.likesArray));
    };
    LikesComponent.prototype.loveDecrementClick = function (count, id) {
        this.showIncrementIcon = true;
        this.likesCommentsService.decrementLikes(this.collectionName, this.docId, count, id);
        this.gaService.emitEvent(this.docId + "-decrement-likes", 'decrement-likes', 'love-click');
        this.updateLikes();
    };
    LikesComponent.prototype.updateLikes = function () {
        if (localStorage.getItem('likes') !== null) {
            this.likesArray = JSON.parse(localStorage.getItem('likes'));
            // if the docId already present in localStorage, delete it
            if (this.likesArray.includes(this.docId)) {
                var i = this.likesArray.indexOf(this.docId);
                this.likesArray.splice(i, 1);
                localStorage.setItem('likes', JSON.stringify(this.likesArray));
            }
            else {
                // just decrement the likes number
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LikesComponent.prototype, "docId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LikesComponent.prototype, "collectionName", void 0);
    LikesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-likes',
            template: __webpack_require__("../../../../../src/app/shared/components/likes/likes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/likes/likes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_likes_comments_service__["a" /* LikesCommentsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */]])
    ], LikesComponent);
    return LikesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* font */\r\n\r\n@font-face {\r\n    font-family: \"Silkscreen\";\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/slkscr.ttf")) + ");\r\n}\r\n\r\n.error-text {\r\n    font-family: 'Silkscreen', sans-serif;\r\n    font-size: 36px;\r\n    letter-spacing: 1px;\r\n    color: #808080;\r\n    text-align: center;\r\n}\r\n\r\n.pnf-image {\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/icons/404_error.svg")) + ");\r\n}\r\n\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-line-pack: start;\r\n        align-content: flex-start;\r\n}\r\n\r\n.line-1 {\r\n    margin-bottom: -85px;\r\n}\r\n\r\n.line-2 {\r\n    margin-top: -85px;\r\n}\r\n\r\n@media only screen and (max-width: 599px) {\r\n    .error-text {\r\n        font-size: 24px;\r\n    }\r\n    .line-1 {\r\n        margin-bottom: -50px;\r\n    }\r\n    .line-2 {\r\n        margin-top: -50px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<div class=\"wrapper\">\r\n    <p class=\"error-text line-1\">4O4 ERROR</p>\r\n    <div class=\"svg-image pnf-image\"></div>\r\n    <p class=\"error-text line-2\">OOPS! PAGE&nbsp;NOT&nbsp;FOUND...</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/site-footer/site-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* footer section */\r\n \r\n .footer {\r\n     background-color: #353839;\r\n     color: #fff;\r\n     padding: 25px;\r\n }\r\n \r\n .footer p {\r\n     text-align: center;\r\n     letter-spacing: 1px;\r\n }\r\n \r\n .footer a {\r\n     color: #fff;\r\n }\r\n \r\n .footer ul {\r\n     list-style-type: none;\r\n     font-family: 'Poppins', sans-serif;\r\n     letter-spacing: 1px;\r\n }\r\n \r\n .footer ul:hover {\r\n     cursor: pointer;\r\n }\r\n \r\n .first-row li a:hover {\r\n     color: #585C5D;\r\n }\r\n \r\n .notes,\r\n .copyrights {\r\n     font-family: 'Poppins', sans-serif;\r\n }\r\n \r\n .notes {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-orient: horizontal;\r\n     -webkit-box-direction: normal;\r\n         -ms-flex-flow: row wrap;\r\n             flex-flow: row wrap;\r\n     -webkit-box-pack: center;\r\n         -ms-flex-pack: center;\r\n             justify-content: center;\r\n }\r\n \r\n .image {\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     width: 50px;\r\n     height: 50px;\r\n     z-index: 999;\r\n }\r\n \r\n .image:hover {\r\n     cursor: pointer;\r\n }\r\n \r\n .sololearn {\r\n     background-image: url(" + escape(__webpack_require__("../../../../../src/assets/icons/social-icons/sololearn.png")) + ");\r\n }\r\n \r\n .hackerrank {\r\n     background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 21.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22 width%3D%2242px%22 height%3D%2246px%22%09 viewBox%3D%220 0 126 139%22 style%3D%22enable-background%3Anew 0 0 126 139%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill%3A%23FFFFFF%3B%7D%09.st1%7Bfill%3Aurl(%23SVGID_1_)%3B%7D%3C%2Fstyle%3E%3Crect x%3D%2229.6%22 y%3D%2224.4%22 class%3D%22st0%22 width%3D%2266.9%22 height%3D%2290.3%22%2F%3E%3Ctitle%3EAsset 2%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22%3E%09%3Cg id%3D%22Layer_1-2%22%3E%09%09%09%09%09%3ClinearGradient id%3D%22SVGID_1_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%2263.0007%22 y1%3D%221%22 x2%3D%2263.0007%22 y2%3D%22140%22 gradientTransform%3D%22matrix(1 0 0 -1 0 140)%22%3E%09%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%231BA94C%22%2F%3E%09%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%2332C766%22%2F%3E%09%09%3C%2FlinearGradient%3E%09%09%3Cpath class%3D%22st1%22 d%3D%22M125.9%2C62.4L125.9%2C62.4c-0.2-13-1.2-24.7-2.9-27.6c-1.4-2.4-8.5-7.5-17.3-13.1L82.1%2C8C73.2%2C3.3%2C65.7%2C0%2C63%2C0%09%09%09c-3.3%2C0-14%2C5-25.4%2C11.4C28.9%2C16.2%2C19.8%2C21.7%2C13%2C26.3C7.8%2C29.9%2C3.9%2C33%2C2.9%2C34.8s-1.8%2C6.8-2.2%2C13.5l0%2C0c-0.6%2C8.4-0.8%2C19.3-0.6%2C29.3%09%09%09c0.3%2C12.7%2C1.2%2C23.9%2C2.8%2C26.7C6.9%2C111.1%2C55.1%2C139%2C63%2C139c3.3%2C0%2C13.5-4.8%2C24.6-10.9c8.8-4.8%2C18.1-10.5%2C25.1-15.2l0%2C0%09%09%09c5.4-3.7%2C9.3-6.8%2C10.4-8.6s1.8-6.7%2C2.2-13.2l0%2C0C125.9%2C82.9%2C126.1%2C72.2%2C125.9%2C62.4z M91.3%2C98.8l-9.7%2C8.8c-0.3%2C0.4-0.7%2C0.6-1.2%2C0.6%09%09%09c-0.5%2C0-1-0.2-1.3-0.6L70%2C98.8c-0.7-0.4-0.9-1.3-0.5-2c0.3-0.5%2C0.8-0.7%2C1.3-0.7h2.6V76.4H52.7v21.7c0%2C0.8-0.7%2C1.5-1.5%2C1.5H39.6%09%09%09c-0.8%2C0-1.5-0.7-1.5-1.5c0%2C0%2C0%2C0%2C0%2C0V42.9h-2.7c-0.8%2C0-1.5-0.7-1.5-1.5c0-0.5%2C0.3-1%2C0.7-1.3l9.7-8.8c0.3-0.4%2C0.7-0.6%2C1.2-0.6%09%09%09c0.5%2C0%2C1%2C0.2%2C1.3%2C0.6l9.1%2C8.8c0.7%2C0.4%2C0.9%2C1.3%2C0.5%2C2c-0.3%2C0.5-0.8%2C0.7-1.3%2C0.7h-2.6v18.9h20.7v-21c0-0.8%2C0.7-1.5%2C1.5-1.5h11.6%09%09%09c0.8%2C0%2C1.5%2C0.7%2C1.5%2C1.5c0%2C0%2C0%2C0%2C0%2C0v55.2h2.7c0.8%2C0%2C1.5%2C0.7%2C1.5%2C1.5C92%2C98.1%2C91.8%2C98.6%2C91.3%2C98.8z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n }\r\n \r\n .hackerearth {\r\n     background-image: url('data:image/jpeg;base64,/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAPAA8AMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1Tr5S/ah/b68M/A65uvDvhyCLxX4ziLRywrJi0sHx/y2ccswOMxLzwwZkOMn7fP7UM3wO8DQeHPDt0YfGfiCNxFPE4D2FqOHnx1DMcoh45DsDlMH8kndpHZ3Yu7HJZjkk+pr0sNhVUXPPYwqVOXRHs/wARf2yfjF8S72SW+8b6jpVsWfZY6HKbCBFb+A+UQzqOg8xmPvXjdxczXlxJPcTSXE8h3PLKxZmPqSeTUdFezGMYq0VY5G29woooqhBRRRQB9Q/8E3f+TpdH/wCwfef+ijX69V+Qv/BN3/k6XR/+wfef+ijX69V4WN/i/I7aXwhXM/E7/kmviz/sEXf/AKJeumrmfid/yTXxZ/2CLv8A9EvXDH4kbH4FUUUV9WeYFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAKrMjq6MUdTuVlOCD616v4C/at+Lnw3uYpNH8eaw8EaiNbPUbg3tsEBztEU25V+qgH0IryeiplGMtJK402tj9Tv2Zf+Ci+h/FLUbTw149tbbwp4kuDst7+FyNPu3J4T5iWhc54DFlYg/MCVU/ZgORX88pGRX6ff8ABOj9qa6+Imjy/DbxTd/aNf0i383TL2ZyZLy0XAMbZ6vFlcHOWQ9PkZj5GJwqgueGx1U6l9GfFP7ZHxEufiV+0l43vppGa20++fSLSMyb0SG2JiynoHZXkwO8hrxepLm5lvLma4nkaWeZzJJIxyWYnJJ/E1HXrxioxUV0OVu7uFFFFUIKKKKACiiigD6h/wCCbv8AydLo/wD2D7z/ANFGv16r8hf+Cbv/ACdLo/8A2D7z/wBFGv16rwsb/F+R20vhCuZ+J3/JNfFn/YIu/wD0S9dNXM/E7/kmviz/ALBF3/6JeuGPxI2PwKooor6s8wKKKKACiiigAooooAKKKKACiiigAooooAKKKKACu1+CvxFm+EnxZ8KeL4XkRdKv45pxDjfJbk7Z4xn+/Ezr/wACriqQjIpNKSsxp21FooopiCiiigAooooAKKKKAPqH/gm7/wAnS6P/ANg+8/8ARRr9eq/IX/gm7/ydLo//AGD7z/0Ua/XqvCxv8X5HbS+EK5n4nf8AJNfFn/YIu/8A0S9dNXM/E7/kmviz/sEXf/ol64Y/EjY/AqiiivqzzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD6h/wCCbv8AydLo/wD2D7z/ANFGv16r8hf+Cbv/ACdLo/8A2D7z/wBFGv16rwsb/F+R20vhCuZ+J3/JNfFn/YIu/wD0S9dNXM/E84+Gviz/ALBF3/6JeuGPxI2PwKrqvh58KvF/xZ1Y6b4Q8O3+v3SlVkNpCTHDuztMshwkYODy5A4619N/sc/sH3Xxkhs/GXjkT6b4LLB7WwQmO41QA9d3WOEnjcPmYZ27eHr9PvCfhDRPAmg2uieHtKtNG0m2XbFZ2UQjjXuTgdSTySeSSSSTXt1sXGm+WOrOOFJy1Z+X/hD/AIJd/FTW4La41vU9A8Nxyf623luXubmH6rGhjP4SV6NH/wAEkZigMnxURGxyF8PbgD9ftQr9EqK894ys+tjdUon5wav/AMEmNWgtWbS/iTZ3tzj5Y7vSHt0J92WaQj/vk15D47/4JyfGfwXb/aLTTdM8VwqjSSHQ73c6AdtkyxsxPYIGNfr7RTjjKq3dxOlFn8+eu6BqfhbVZ9L1rTbzSNTgIE1nfwPBNGSMjcjAEcEHkd6oV+8PxZ+CXgv426C2leMNCt9VjVSILkjZcWxOCWilHzIcquQDg4wwI4r8qf2r/wBjXxB+zjqLapaSS674HuJdltqm0ebbE/diuAOA3YOPlbHRSdo9Kjio1XyvRmE6bjqfOlFFFdpiFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB9Q/8ABN3/AJOl0f8A7B95/wCijX69V+Qv/BN3/k6XR/8AsH3n/oo1+vVeFjf4vyO2l8IVDeWcGoWk9rdRJPbTo0csUgyrqRgqR3BBxU1FeebENpaQWFrDbW0MdvbwoI44YlCoigYCqBwABwAKmorzH40ftIeAPgHp6zeLtcjt72WMyW+lWw868uB82NsQ5CkqRvbamRgsKpRcnZCbS3PTqK/O3xr/AMFYpjNcw+EfAKCIN+4vdbviWZfVoIl+U/SU1yOj/wDBVn4gwXiNqnhDw1eWmfmitPtFvIR7O0kgH/fJrqWErNXsZ+1j3P1Aor5C+DX/AAUq+HfxEvoNM8UWs/gHU5m2pJezCewJJAUG4AUoTkkl0VQBy1fXaOsihlIZSMgjvXPOnKm7SVi1JS2HVmeJvDWmeMfD+oaJrNlFqOlX8LW9zazDKyIwwQfT6jkHBHNadFZlH4iftUfs+3n7OfxVvPD5M11oV0v2vSL6YDM1uSflYjjehyjcDOA2AHFeP1+v/wDwUH+DUXxR+AOpatbwK2ueFA2rWsnAYwKP9Jj3HopjBfA6tCgr8gBzX0eGq+1p3e6OGpHlYUUUV1GQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfUP/BN3/k6XR/8AsH3n/oo1+vVfkL/wTd/5Ol0f/sH3n/oo1+vVeFjf4vyO2l8IUUUhOBXnmx84/tpftVw/s5eCYrXSWhufG2sKy6fbyDctvGOGuZF9AThQfvN6hWx+QviTxJqvjHXb3Wtc1C41XVr2Tzbi8unLySNjHJPoAAB0AAA4FejftU/Feb4zfHnxX4g+0/adNS6ax0zY7NGLSElIigPQPgyEdN0jHvXk9fR4aiqUPNnDUnzMKKKK6jIMZr9Cf+CbX7UN/c6nH8I/E1413CYWk8PXMxLPH5alntCecoEDOmcbdjLkgoq/ntWz4K8WXvgPxhofiXTdv2/SL2G+gD52s8bhwGx/CcYI7gmsa1NVYOLLjLldz+gKiqekapa65pVnqNlKtxZXcKXEEqHIeN1DKw9iCDVyvmD0CG7tob22lt7iJJ4JUKSRSKGV1IwQQeoI7V+CHxP8Gt8O/iR4p8LF3lGjanc2CSyLtaRI5GVXx/tABvxr99a/Hj/gol4dl0H9qzxLcNGscOq21nfQhRjK+QkTH8XievTwMrTce5z1lomfNdFFFe0cgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfUP/BN3/k6XR/+wfef+ijX69V+Qv8AwTd/5Ol0f/sH3n/oo1+vVeFjf4vyO2l8IVkeMNWfQfCWt6nGN0llZTXKj1KRlh/KteuZ+J3/ACTXxZ/2CLv/ANEvXDHVo2PwKAxRRRX1Z5gUUUUAFBGaKKAP3M/Zf1FdU/Zy+Gc6HIXw7Ywk+6QIh/VTXp9eK/sYf8mufDr/ALBv/tR69qr5appN+p6MdkFfld/wVRh2/tBeHpP73hiAfiLq6/xr9Ua/LP8A4Kq/8l68M/8AYtRf+lVzXVgv4pFX4T4wooor3zhCiiigAooooAKKKKACiiigAooooAKKKKACiiigD6h/4Ju/8nS6P/2D7z/0Ua/XqvyF/wCCbv8AydLo/wD2D7z/ANFGv16rwsb/ABfkdtL4Qrmfid/yTXxZ/wBgi7/9EvXTVzPxO/5Jr4s/7BF3/wCiXrhj8SNj8CqKKK+rPMCiiigAooooA/bH9i//AJNb+HX/AGDf/aj17VXiv7F//Jrfw6/7Bv8A7Uevaq+Wq/HL1Z6MdkFfln/wVV/5L14Z/wCxai/9Krmv1Mr8s/8Agqr/AMl68M/9i1F/6VXNdWC/jEVfhPjCiiivfOEKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPqH/AIJu/wDJ0uj/APYPvP8A0Ua/XqvyF/4Ju/8AJ0uj/wDYPvP/AEUa/XqvCxv8X5HbS+EK5n4nf8k18Wf9gi7/APRL101cz8Tv+Sa+LP8AsEXf/ol64Y/EjY/AqiiivqzzAooooAKKKKAP2x/Yv/5Nb+HX/YN/9qPXtVeK/sX/APJrfw6/7Bv/ALUevaq+Wq/HL1Z6MdkFfln/AMFVf+S9eGf+xai/9Krmv1Mr8s/+Cqv/ACXrwz/2LUX/AKVXNdWC/jEVfhPjCiiivfOEKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPqH/gm7/wAnS6P/ANg+8/8ARRr9eq/IX/gm7/ydLo//AGD7z/0Ua/XqvCxv8X5HbS+EK5n4nf8AJNfFn/YIu/8A0S9dNXM/E7/kmviz/sEXf/ol64Y/EjY/AqiiivqzzAooooAKKKKAP2x/Yv8A+TW/h1/2Df8A2o9e1V4r+xf/AMmt/Dr/ALBv/tR69qr5ar8cvVnox2QV+Wf/AAVV/wCS9eGf+xai/wDSq5r9TK/LP/gqr/yXrwz/ANi1F/6VXNdWC/jEVfhPjCiiivfOEKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPqH/gm7/ydLo//AGD7z/0Ua/XqvyF/4Ju/8nS6P/2D7z/0Ua/XqvCxv8X5HbS+EK5n4nf8k18Wf9gi7/8ARL101cz8T/8Akmviz/sEXf8A6JeuGPxI2PwKooor6s8wKKKKACiiigD9sf2L/wDk1v4df9g3/wBqPXtVeK/sX/8AJrfw6/7Bv/tR69qr5ar8cvVnox2QV+Wf/BVX/kvXhn/sWov/AEqua/Uyvyz/AOCqv/JevDP/AGLUX/pVc11YL+MRV+E+MKKKK984QooooAKKKKACiiigAooooAKKKKACiiigAooooA6X4dfEjxJ8J/Flr4l8Kam2k61bK6R3KxJKArqVYFJFZWBBPUHnBHIBr2P/AIeCfHz/AKHsf+Cew/8AjFfO9FRKnCTvJJlKTWzPoj/h4J8fP+h7H/gnsP8A4xVHXP26/jl4j0W/0q+8cNJY31vJa3CJpdlGzRupVgHWEMpwTypBHYg14LRU+xp/yr7h80u4CiiitSAooooAKDRRQB7X4E/bN+MXw18J6f4a8PeL/sWjaehjtrd9OtZjGpYtjfJEzEZY4yTgcDgCt7/h4N8e/wDoeE/8FFj/APGa+dqKydGm3dxRXNLufRP/AA8G+Pf/AEPCf+Cix/8AjNeU/Fb4x+L/AI3eIbbW/Gmrf2xqdtarZxTC3igCxB2cLtiRQfmdjkjPPXgVxlFONKEXeMUgcm92FFFFaEhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX6E/8Okpf+ipp/wCE+f8A5Jr89q/obrz8XWnS5eR73OilFSvc/O3/AIdJy/8ARU0/8J8//JNH/DpOX/oqaf8AhPn/AOSa/RKivO+t1v5vwRt7KHY/O3/h0nL/ANFTT/wnz/8AJNH/AA6Tl/6Kmn/hPn/5Jr9EqKPrdb+b8EHsodj87f8Ah0nL/wBFTT/wnz/8k0f8Ok5f+ipp/wCE+f8A5Jr9EqKPrdb+b8EHsodj87f+HScv/RU0/wDCfP8A8k0f8Ok5f+ipp/4T5/8Akmv0Soo+t1v5vwQeyh2Pzt/4dJy/9FTT/wAJ8/8AyTR/w6Tl/wCipp/4T5/+Sa/RKij63W/m/BB7KHY/O3/h0nL/ANFTT/wnz/8AJNH/AA6Tl/6Kmn/hPn/5Jr9EqKPrdb+b8EHsodj87f8Ah0nL/wBFTT/wnz/8k0f8Ok5f+ipp/wCE+f8A5Jr9EqKPrdb+b8EHsodj87f+HScv/RU0/wDCfP8A8k18K/EDwqfAnj3xL4aN19tOjanc6d9p8vy/O8mVo9+3J2525xk4z1Nfv5X4RftBf8l7+JX/AGM2p/8ApVJXfhK06smpsxqwUVocDRRRXpHOFFFFABRRRQAro0bsjqUdSVZWGCCOxFJXrP7V/gKb4cftF+PNHkjSKF9TlvrURqQnkXB8+MLnrtWQKfdSO1eTVMZc0VJdRtWdgoooqhBRRRQAHmvQf+Gh/it/0U7xl/4P7v8A+OV59RSaT3Hdo9B/4aH+K3/RTvGX/g/u/wD45R/w0P8AFb/op3jL/wAH93/8crz6ilyx7Du+56D/AMND/Fb/AKKd4y/8H93/APHKP+Gh/it/0U7xl/4P7v8A+OV59RRyx7Bd9z0H/hof4rf9FO8Zf+D+7/8AjlH/AA0P8Vv+ineMv/B/d/8AxyvPqKOWPYLvueg/8ND/ABW/6Kd4y/8AB/d//HKP+Gh/it/0U7xl/wCD+7/+OV59RRyx7Bd9z0H/AIaH+K3/AEU7xl/4P7v/AOOUf8ND/Fb/AKKd4y/8H93/APHK8+oo5Y9gu+56D/w0P8Vv+ineMv8Awf3f/wAco/4aH+K3/RTvGX/g/u//AI5Xn1FHLHsF33PQf+Gh/it/0U7xl/4P7v8A+OUf8ND/ABW/6Kd4y/8AB/d//HK8+oo5Y9gu+56D/wAND/Fb/op3jL/wf3f/AMcrhb+/utVv7m+vrma9vbmVp57m4kMkksjElndjksxJJJPJJqCimklsK7YUUUUxBRRRQAUE4FFdR8LvAlz8T/iP4a8J2nmCbWL+G0MkSFzEjMA8mB2RNzn2U0m7K7HufpP/AMFF/wBmW7+KXhS18e+GrQ3XiTw/A0V3ax5Ml3Ygl/kHd4mLMFGCVd+pCqfyvBzX9DdfEf7U3/BOjT/iJf3fin4by2uga/NulutHnGyzvH674yAfJc85GCjHH3PmY+PhcSoLknsdVSnfVH5g0V2vxF+Cvjv4S3Lw+L/Cmp6GqyeULmeAm2kbGcJOuY3/AOAsa4rOa9hNSV0ctrBRRRTEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRQTiuo8CfC7xf8T777J4T8Nan4gmDrG7WNs0kcRY4BkfG2Me7ED3obSV2Pc5cnFfo1/wAE1f2ZLvRw3xZ8S2LW81zCYPD8E6gMInGJLrBGRvX5EORlWkOCrIaP2Zf+Cag0fULHxL8WWt7yaFhLD4Xt2EsIbAI+1SDh8HOY0ypwMsykqfv+ONYY1RFCIowqqMAD0FeRisUmuSB006bTuz//2Q==');\r\n     border-radius: 15px;\r\n }\r\n \r\n .codepen {\r\n     background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22%3F%3E%0D%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 viewBox%3D%220 0 46.965 46.965%22 style%3D%22enable-background%3Anew 0 0 46.965 46.965%3B%22 xml%3Aspace%3D%22preserve%22 width%3D%22512px%22 height%3D%22512px%22 class%3D%22%22%3E%3Cg%3E%3Cpath id%3D%22codepen%22 d%3D%22M46.815%2C22.775c-0.2-4.2-0.2-8.4-0.5-9.2c-0.3-0.8-4.4-3.6-6.1-4.3c-1.6-0.7-8.6-4.3-10.6-5.3  c-2-1.1-5.9-3.8-6.5-3.8s-1.6%2C0.6-2.6%2C1.1s-4.9%2C3.1-7.7%2C4.5c-2.8%2C1.5-6%2C3.5-9.3%2C5c-3.4%2C1.5-3.2%2C1.7-3.4%2C2.3  c-0.1%2C0.4%2C0.2%2C2.5%2C0.3%2C5.6c0.1%2C3.1-0.3%2C9-0.4%2C10.7c-0.1%2C1.6%2C0.3%2C2.6%2C1%2C3.6s3.6%2C2.5%2C6.8%2C4.3c3.2%2C1.8%2C8.4%2C5.5%2C11%2C7.4s3.2%2C1.8%2C4.3%2C2.1  c1.1%2C0.3%2C7.9-3.8%2C13.3-7.1c5.4-3.3%2C10.3-6.3%2C10.4-6.9C47.015%2C32.275%2C47.015%2C26.975%2C46.815%2C22.775z M45.815%2C30.075  c-0.2-0.2-3.4-3.8-3.6-3.7c-0.2%2C0.2-0.3%2C0.5-0.3%2C0.7c0.1%2C0.1%2C3.4%2C3.5%2C3.5%2C3.8c0.1%2C0.2-0.2%2C0.6-0.4%2C0.5c-0.2-0.1-3-2.9-3.4-2.9  c-0.4-0.1-0.9%2C0.4-0.5%2C0.7c0.3%2C0.3%2C3.1%2C2.6%2C3.1%2C2.8c0%2C0.2-0.7%2C0.9-0.9%2C0.8c-0.2-0.1-2.7-2.7-3.1-2.7s-0.8%2C0.4-0.6%2C0.5  c0.2%2C0.2%2C2.9%2C2.6%2C2.7%2C2.8c-0.1%2C0.2-0.7%2C1-1%2C0.7s-2.4-2.7-2.8-2.7s-0.7%2C0.4-0.6%2C0.6c0.2%2C0.2%2C2.5%2C2.4%2C2.5%2C2.6s-0.7%2C0.5-0.9%2C0.5  c-0.2-0.1-2.3-2.6-2.6-2.6s-0.7%2C0.3-0.6%2C0.4s2.5%2C2.7%2C2.5%2C2.8s-0.6%2C0.6-0.8%2C0.5c-0.2-0.2-2-2.6-2.6-2.6c-0.5%2C0-0.7%2C0.3-0.6%2C0.4  s2.5%2C2.5%2C2.3%2C2.6c-0.2%2C0.2-0.8%2C0.5-1%2C0.4c-0.2-0.2-2.4-2.3-2.7-2.4c-0.3-0.1-0.7%2C0.4-0.6%2C0.6c0.2%2C0.2%2C2.7%2C2.2%2C2.4%2C2.4  c-0.3%2C0.2-1.2%2C1-1.5%2C0.8s-2.1-2.3-2.6-2.3s-0.9%2C0.3-0.6%2C0.5c0.3%2C0.3%2C2.3%2C2.1%2C2.1%2C2.3c-0.2%2C0.2-0.5%2C0.6-0.7%2C0.4c-0.2-0.2-2.1-2-2.4-2  s-0.8%2C0.2-0.6%2C0.4s2.5%2C1.8%2C2.3%2C2.2s-1%2C0.9-1.2%2C0.7c-0.2-0.2-2.2-2.2-2.5-2.2c-0.3%2C0.1-0.6%2C0.3-0.4%2C0.5s2.2%2C2%2C2.1%2C2.2  s-0.6%2C0.7-0.8%2C0.5c-0.1-0.2-2.5-2.6-2.7-2.5s-0.6%2C0.7-0.4%2C0.9c0.3%2C0.2%2C2.5%2C1.8%2C2.3%2C2s-0.8%2C0.8-1.1%2C0.6s-2.1-1.9-2.4-1.9  s-0.6%2C0.4-0.3%2C0.7c0.4%2C0.3%2C1.9%2C1.5%2C1.9%2C1.6s-0.3%2C0.4-0.6%2C0.3c-0.3-0.1-2-1.6-2.3-1.6s-0.8%2C0.4-0.6%2C0.6c0.2%2C0.2%2C2%2C1.2%2C1.9%2C1.5  s-0.5%2C0.7-0.8%2C0.5s-8.7-5.3-11.4-6.9c-2.7-1.6-6.1-3.7-8.1-4.9c-1.9-1.2-2.9-1.4-3.1-2.5s0.2-5.9%2C0.3-8.6c0.1-2.7-0.1-4.9-0.2-5.5  c-0.1-0.7-0.2-2-0.1-2.4c0.1-0.7%2C1.5-1.3%2C4.4-2.6c2.8-1.3%2C11.9-6.6%2C13.4-7.5s3.5-2.1%2C4-2s5%2C3.3%2C8.2%2C4.6c3.1%2C1.3%2C9.7%2C4.5%2C10.7%2C5.2  s1.5%2C1.1%2C1.5%2C1.2s-0.2%2C0.4%2C0.1%2C0.6c0.4%2C0.2%2C2%2C1.6%2C2.1%2C1.8c0%2C0.2%2C0.2%2C1.6%2C0.1%2C1.5s-1.8-2.2-2.2-2.2s-0.7%2C0.4-0.5%2C0.7  c0.2%2C0.3%2C2.6%2C2.4%2C2.8%2C2.7c0.1%2C0.3%2C0.3%2C1%2C0.1%2C0.9c-0.2-0.2-1.9-2-2.1-2s-0.5%2C0.2-0.4%2C0.6s2.4%2C2.5%2C2.5%2C2.7s0.1%2C1.7-0.1%2C1.6  s-1.9-2.4-2.1-2.3s-0.2%2C0.6-0.2%2C0.6s2.2%2C2.6%2C2.3%2C2.9s0.3%2C2.3%2C0.1%2C2c-0.2-0.3-1.9-2.3-2.1-2.3s-0.4%2C0.3-0.3%2C0.6s2.3%2C2.7%2C2.4%2C2.9  c0.1%2C0.2%2C0.2%2C2.1%2C0%2C1.8c-0.1-0.3-2.2-2.6-2.4-2.5s-0.5%2C0.4-0.3%2C0.7c0.2%2C0.2%2C2.7%2C2.9%2C2.7%2C3.1  C45.915%2C28.875%2C46.015%2C30.175%2C45.815%2C30.075z M7.315%2C16.575c0.6%2C0.3%2C5.4%2C3.5%2C5.9%2C3.8s1.8%2C0.1%2C3.3-0.6s4.2-2%2C4.3-2.3s0.1-5.1%2C0-5.9  s0-4-0.3-4.1s-6.3%2C3-8.1%2C4s-6.2%2C3.3-6.4%2C3.5C5.715%2C15.475%2C6.715%2C16.275%2C7.315%2C16.575z M9.215%2C15.875c0.1-0.2%2C4.9-2.9%2C6.6-4  s3.6-2.2%2C3.7-1.9c0.2%2C0.3%2C0.7%2C6.4%2C0.2%2C6.9c-0.5%2C0.4-5.3%2C2.8-6%2C2.4C13.215%2C18.975%2C8.915%2C16.775%2C9.215%2C15.875z M25.315%2C17.175  c0.1%2C0.3%2C5%2C2.6%2C5.4%2C2.7s1.1-0.1%2C1.8-0.4c0.7-0.3%2C7.1-3.7%2C7.8-4c0.7-0.3%2C1-0.5%2C1.1-1.1c0-0.6-1-1.4-3.1-2.6s-7.1-3.4-9.2-4.3  s-2.8-0.7-3.2-0.4c-0.7%2C0.4-0.5%2C1.9-0.5%2C2.7C25.315%2C10.675%2C25.215%2C16.875%2C25.315%2C17.175z M26.515%2C7.875c0.1-0.2%2C4.4%2C1.6%2C8.2%2C3.5  c3.8%2C2%2C5.4%2C2.8%2C5.3%2C3.2s-4.5%2C2.4-6.4%2C3.3c-1.9%2C0.9-2.4%2C1.1-2.7%2C1c-0.2-0.1-4.3-1.9-4.4-2.3c-0.2-0.5%2C0-4.1-0.1-5.2  C26.515%2C10.175%2C26.315%2C8.075%2C26.515%2C7.875z M27.515%2C21.275c-0.3-0.4-4-2.4-4.4-2.5c-0.5-0.1-1.3%2C0.5-2.3%2C1.1s-2.4%2C1.5-2.3%2C1.8  c0.1%2C0.8%2C4%2C2.5%2C4.7%2C2.6s3.4-1.6%2C3.9-2C27.415%2C22.075%2C27.715%2C21.675%2C27.515%2C21.275z M23.115%2C23.075c-0.4-0.2-1.3-0.8-1.3-0.9  c-0.1-0.2%2C2.4-1.6%2C2.7-1.4c0.4%2C0.3%2C1.2%2C0.5%2C1.3%2C0.8C25.815%2C21.775%2C23.515%2C23.275%2C23.115%2C23.075z M18.415%2C6.375  c0.5-0.4%2C3.5-1.8%2C4-2.2c0.6-0.3%2C1.4%2C0.3%2C1.7%2C0.5c0.3%2C0.1%2C0.7-0.1%2C0.8-0.4c0.1-0.3-1.1-0.9-1.5-1.1s-0.8-0.2-1.5%2C0.1  c-0.7%2C0.3-4.4%2C2.3-4.6%2C2.5s0%2C0.7%2C0.2%2C0.8C17.715%2C6.575%2C17.915%2C6.775%2C18.415%2C6.375z M5.015%2C13.575c0.3-0.3%2C0-0.4-0.4-0.6  s-2.4%2C0.7-2.6%2C1.1c-0.2%2C0.3%2C0.2%2C2.2%2C0.5%2C2.3c0.3%2C0.2%2C0.7-0.1%2C0.9-0.4c0.2-0.3-0.1-1-0.2-1.3C3.215%2C14.275%2C4.715%2C13.775%2C5.015%2C13.575  z M6.815%2C24.475c0.8-0.5%2C2.2-1.1%2C2-1.5s-2.9-2.2-3.5-2.6s-1.6%2C0.1-1.7%2C0.4c-0.1%2C0.2%2C0%2C3.2%2C0%2C3.7s-0.1%2C1.1%2C0.5%2C1.4  C4.815%2C26.075%2C5.915%2C24.975%2C6.815%2C24.475z M5.915%2C22.375c0.1-0.2%2C1.2%2C0.6%2C1.1%2C0.8c0%2C0.2-0.9%2C0.9-1.2%2C0.7S5.815%2C22.575%2C5.915%2C22.375z   M19.715%2C28.275c-0.6-0.3-6.2-3.3-6.6-3.3c-0.4-0.1-8.9%2C4.5-8.9%2C4.7c0%2C0.5%2C2.5%2C1.5%2C5.8%2C3.4c3.2%2C1.8%2C9.1%2C5.2%2C9.6%2C5.5s1.2%2C0.2%2C1.5-0.2  c0.3-0.3%2C0.1-7.9%2C0.1-8.6C21.115%2C29.275%2C20.315%2C28.675%2C19.715%2C28.275z M20.015%2C37.375c-0.4-0.1-8-4.4-9.2-5s-2.1-1.3-2.1-1.4  c0.1-0.4%2C5.2-4.1%2C5.8-3.9c0.5%2C0.1%2C5.3%2C2.5%2C5.5%2C2.9C20.215%2C30.275%2C20.415%2C37.475%2C20.015%2C37.375z M31.515%2C24.875  c-0.7-0.1-6.7%2C3-6.8%2C3.5c-0.1%2C0.4%2C0.6%2C7.5%2C0.6%2C7.8c0.1%2C0.2%2C0.4%2C0.7%2C0.9%2C0.8c0.5%2C0.1%2C1.7-0.4%2C3.6-1.4s9.1-5.2%2C9.3-5.6  c0.3-0.4%2C0.1-1.1-0.1-1.3C38.915%2C28.375%2C32.215%2C24.975%2C31.515%2C24.875z M31.715%2C33.375c-2.5%2C1.5-4.7%2C2.8-5.1%2C2.5s-0.8-5.2-0.8-5.6  c0-0.3%2C6.5-3.8%2C7.2-3.6c0.7%2C0.3%2C5.1%2C2.2%2C5.1%2C2.6C38.215%2C29.675%2C34.315%2C31.875%2C31.715%2C33.375z M41.615%2C18.175c-0.4%2C0-5.8%2C3.3-5.8%2C3.5  c-0.1%2C1.2%2C2.7%2C1.7%2C3.9%2C2.2c1.2%2C0.5%2C2.4%2C1%2C2.7%2C0.7s0.1-3.3%2C0.1-4.8C42.515%2C18.075%2C42.015%2C18.175%2C41.615%2C18.175z M41.515%2C23.375  c-0.4-0.1-3.6-1.5-3.9-1.7s3.5-2.3%2C3.8-2.1C41.715%2C19.875%2C41.815%2C23.475%2C41.515%2C23.375z%22 data-original%3D%22%23000000%22 class%3D%22active-path%22 data-old_color%3D%22%2376DAFF%22 fill%3D%22%23000000%22%2F%3E%3C%2Fg%3E %3C%2Fsvg%3E%0D\");\r\n }\r\n \r\n .github {\r\n     background-image: url(\"data:image/svg+xml,%3Csvg width%3D%22158.52%22 height%3D%22155.031%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0D %3Cg%3E%0D  %3Ctitle%3Ebackground%3C%2Ftitle%3E%0D  %3Crect fill%3D%22none%22 id%3D%22canvas_background%22 height%3D%22402%22 width%3D%22582%22 y%3D%22-1%22 x%3D%22-1%22%2F%3E%0D %3C%2Fg%3E%0D %3Cg%3E%0D  %3Ctitle%3ELayer 1%3C%2Ftitle%3E%0D  %3Cpath id%3D%22svg_2%22 fill%3D%22%23ffffff%22 d%3D%22m145.221%2C38.278c-4.759%2C-12.357 -15.236%2C-19.948 -27.938%2C-22.849c-9.148%2C-2.089 -27.515%2C-2.916 -47.722%2C-3.365c-16.76%2C-0.373 -33.779%2C-1.864 -47.09%2C8.964c-12.289%2C9.995 -14.721%2C28.028 -15.719%2C42.895c-0.867%2C12.899 1.53%2C51.537 7.168%2C63.657c8.101%2C17.413 22.343%2C23.696 41.42%2C24.832c-0.021%2C-4.155 -0.069%2C-11.879 -0.095%2C-16.883c-21.669%2C4.712 -26.242%2C-7.19 -26.242%2C-7.19c-3.543%2C-9.003 -4.996%2C-8.968 -7.648%2C-10.397c-4.307%2C-2.321 -2.368%2C-8.116 -0.467%2C-7.735c8.703%2C1.747 11.94%2C8.028 11.94%2C8.028c6.947%2C11.907 18.222%2C8.465 22.667%2C6.474c0.699%2C-5.034 2.717%2C-8.471 4.945%2C-10.416c-17.301%2C-1.969 -35.489%2C-8.649 -35.489%2C-38.494c0%2C-8.504 3.043%2C-15.452 8.026%2C-20.907c-0.809%2C-1.963 -0.949%2C-11.438 3.755%2C-20.614c0%2C0 3.541%2C-2.092 18.425%2C7.985c6.214%2C-1.726 12.877%2C-2.592 19.496%2C-2.622c6.62%2C0.03 13.288%2C0.896 19.513%2C2.622c14.867%2C-10.078 21.398%2C-7.985 21.398%2C-7.985c4.24%2C10.73 1.573%2C18.651 0.765%2C20.614c4.995%2C5.455 8.016%2C12.404 8.016%2C20.907c0%2C25.55 -17.082%2C32.681 -25.86%2C35.525c-4.047%2C1.311 -5.694%2C2.36 -5.707%2C4.908c-0.021%2C4.354 3.283%2C6.157 3.283%2C13.424c0%2C7.274 -0.043%2C15.989 -0.07%2C21.464c36.688%2C-3.997 41.676%2C-15.994 47.356%2C-35.592c3.638%2C-12.552 4.264%2C-28.046 5.269%2C-41.077c0.908%2C-11.783 0.903%2C-25.009 -3.395%2C-36.173z%22%2F%3E%0D  %3Cpath fill%3D%22%23000000%22 id%3D%22svg_3%22 d%3D%22m154.552%2C21.082c-2.524%2C-7.053 -7.848%2C-13.298 -14.59%2C-16.63c-4.375%2C-2.162 -8.94%2C-2.694 -13.721%2C-2.825c-7.565%2C-0.207 -15.05%2C-0.246 -22.607%2C0c-6.353%2C0.206 -12.71%2C-0.639 -19.065%2C-0.627c-8.854%2C0.018 -17.719%2C0.547 -26.571%2C0.774c-8.864%2C0.227 -17.698%2C-0.794 -26.536%2C-0.405c-6.937%2C0.306 -13.075%2C1.7 -18.709%2C6.099c-5.871%2C4.584 -9.869%2C11.091 -11.007%2C18.47c-0.5%2C3.246 -0.269%2C6.651 -0.276%2C9.924c-0.008%2C4.258 -0.04%2C8.516 -0.017%2C12.774c0.049%2C8.947 0.28%2C17.892 0.433%2C26.838c0.291%2C17.043 0.085%2C34.1 0.712%2C51.136c0.301%2C8.176 2.861%2C16.46 9.589%2C21.613c6.924%2C5.303 14.845%2C4.78 23.053%2C5.457c14.27%2C1.213 28.612%2C1.324 42.922%2C1.211c0.63%2C-0.014 1.26%2C-0.029 1.891%2C-0.043c15.038%2C-0.345 30.075%2C-0.559 45.116%2C-0.765c8.577%2C-0.118 16.299%2C-2.134 22.523%2C-8.405c6.158%2C-6.205 7.64%2C-13.306 7.897%2C-21.732c0.531%2C-17.425 0.016%2C-34.816 0.067%2C-52.241c0.026%2C-8.873 0.292%2C-16.73 0.195%2C-25.603c-0.052%2C-4.757 -0.066%2C-9.505 0.025%2C-14.261c0.07%2C-3.724 -0.053%2C-7.205 -1.324%2C-10.759zm-78.208%2C127.948c-5.065%2C-0.048 -10.129%2C-0.062 -15.193%2C-0.098c0.05%2C-1.474 0.096%2C-2.948 0.117%2C-4.423c0.033%2C-2.316 0.066%2C-4.632 0.099%2C-6.948c0.046%2C-3.191 -2.991%2C-2.393 -5.105%2C-2.075c-2.996%2C0.451 -6.066%2C0.554 -9.086%2C0.356c-5.722%2C-0.375 -10.452%2C-4.057 -12.677%2C-9.185c-2.13%2C-4.91 -5.033%2C-10.406 -10.041%2C-12.883c0.301%2C0.164 0.139%2C0.009 -0.186%2C-0.262c9.197%2C1.087 11.236%2C12.183 19.581%2C15.181c3.808%2C1.368 7.614%2C1.223 11.52%2C0.366c1.409%2C-0.415 5.358%2C-1.026 5.676%2C-2.782c0.349%2C-0.772 0.407%2C-2.019 0.599%2C-2.844c0.531%2C-2.546 2.332%2C-4.625 4.278%2C-6.223c4.276%2C-3.51 -3.194%2C-4.565 -5.067%2C-4.85c-10.162%2C-1.544 -19.742%2C-4.672 -25.487%2C-13.749c-3.977%2C-6.284 -4.745%2C-13.983 -4.807%2C-21.259c-0.025%2C-2.972 0.202%2C-5.893 0.93%2C-8.78c0.711%2C-2.818 1.843%2C-5.478 3.374%2C-7.953c1.42%2C-2.295 4.572%2C-4.52 4.006%2C-7.419c-2.029%2C-5.943 -1.482%2C-11.642 0.202%2C-17.464c1.241%2C0.112 3.129%2C0.122 3.65%2C0.263c2.235%2C0.609 4.443%2C1.373 6.512%2C2.424c2.906%2C1.477 5.614%2C3.565 8.549%2C4.915c2.517%2C1.158 6.567%2C-0.761 9.273%2C-1.231c5.702%2C-0.992 11.713%2C-1.546 17.493%2C-0.964c3.138%2C0.316 6.26%2C0.635 9.356%2C1.26c1.575%2C0.318 3.134%2C0.746 4.697%2C1.119c1.639%2C0.39 3.218%2C-1.037 4.514%2C-1.845c4.663%2C-2.909 10.683%2C-6.544 16.45%2C-6.396c2.079%2C5.655 3.229%2C11.833 1.073%2C17.683c-0.738%2C2.002 0.599%2C2.906 1.746%2C4.36c2.193%2C2.833 3.696%2C5.907 4.643%2C9.353c0.764%2C2.779 0.828%2C6.479 0.776%2C8.928c-0.467%2C6.955 -0.037%2C13.66 -3.472%2C19.991c-2.836%2C5.228 -7.507%2C10.241 -12.849%2C12.991c-2.485%2C1.279 -4.981%2C2.297 -7.635%2C3.152c-1.659%2C0.534 -3.409%2C0.946 -5.139%2C1.165c-1.699%2C0.308 -4.07%2C0.087 -5.631%2C0.798c-2.734%2C1.245 1.739%2C5.302 2.438%2C6.724c1.317%2C2.681 1.794%2C5.605 1.951%2C8.56c0.356%2C6.708 0.049%2C13.503 0.019%2C20.221c-7.038%2C0.009 -14.079%2C-0.07 -21.147%2C-0.177zm74.198%2C-23.181c-0.524%2C8.389 -4.14%2C15.137 -11.501%2C19.548c-7.059%2C4.23 -15.425%2C3.292 -23.328%2C3.544c-4.96%2C0.159 -9.906%2C0.221 -14.85%2C0.249c0.099%2C-2.444 0.204%2C-4.889 0.259%2C-7.334c0.188%2C-8.351 1.475%2C-18.199 -3.396%2C-25.311c12.959%2C-2.88 27.28%2C-7.643 31.816%2C-21.41c2.326%2C-7.059 2.696%2C-14.444 2.327%2C-21.833c-0.366%2C-7.338 -3.284%2C-13.817 -7.843%2C-19.456c1.194%2C-3.838 1.557%2C-7.754 1.171%2C-11.789c-0.234%2C-2.447 -0.966%2C-10.192 -3.967%2C-10.746c-4.304%2C-1.38 -10.627%2C1.097 -14.316%2C2.861c-2.833%2C1.355 -5.453%2C2.912 -8.067%2C4.613c-7.552%2C-1.533 -14.944%2C-3.007 -22.71%2C-2.331c-5.629%2C0.49 -11.019%2C1.874 -16.531%2C2.982c-6.03%2C-4.351 -15.27%2C-10.384 -23.032%2C-8.333c-2.739%2C1.346 -3.314%2C8.218 -3.545%2C10.928c-0.345%2C4.046 0.051%2C7.97 1.275%2C11.806c-4.661%2C5.896 -8.075%2C12.235 -8.445%2C19.899c-0.136%2C2.819 0.088%2C5.628 0.74%2C8.388c1.078%2C4.566 1.855%2C9.455 3.701%2C13.788c2.114%2C4.961 5.044%2C9.393 9.38%2C12.712c6.565%2C5.024 13.977%2C6.782 21.861%2C7.901c-1.71%2C2.499 -2.692%2C5.279 -3.29%2C8.4c-5.94%2C2.442 -13.957%2C2.744 -18.176%2C-2.994c-1.96%2C-2.241 -3.131%2C-5.015 -5.157%2C-7.222c-2.452%2C-2.672 -5.804%2C-4.906 -9.451%2C-5.456c-1.605%2C-0.242 -3.075%2C-0.271 -4.674%2C0.286c-4.854%2C1.83 -1.146%2C6.594 1.863%2C8.032c3.995%2C2.731 5.742%2C6.771 7.492%2C11.082c-0.303%2C-0.776 1.026%2C2.126 1.153%2C2.348c0.886%2C1.4 1.912%2C2.726 3.122%2C3.865c3.058%2C2.623 6.357%2C4.161 10.289%2C4.998c4.178%2C0.889 8.505%2C0.378 12.688%2C-0.381c0.095%2C3.14 0.191%2C6.28 0.286%2C9.419c-6.353%2C-0.061 -12.704%2C-0.179 -19.055%2C-0.469c-5.422%2C-0.247 -11.421%2C0.083 -16.628%2C-1.737c-5.749%2C-2.009 -9.075%2C-6.584 -10.957%2C-12.35c-2.131%2C-6.529 -1.533%2C-14.136 -1.833%2C-20.93c-0.328%2C-7.42 -0.654%2C-14.84 -0.911%2C-22.263c-0.429%2C-12.438 -2.036%2C-29.869 -1.984%2C-42.314c0.036%2C-8.546 1.436%2C-12.252 2.026%2C-20.78c0.535%2C-7.738 5.615%2C-14.648 12.342%2C-18.293c6.998%2C-3.791 15.921%2C-2.958 23.592%2C-2.57c8.772%2C0.444 17.587%2C-0.642 26.369%2C-0.698c13.115%2C-0.083 25.235%2C0.477 38.349%2C0.563c4.544%2C0.03 9.093%2C0.08 13.632%2C0.302c3.741%2C0.183 7.655%2C0.148 11.243%2C1.344c6.622%2C2.207 11.985%2C7.732 14.311%2C14.275c1.442%2C4.056 1.388%2C8.242 1.733%2C12.482c0.354%2C4.343 0.453%2C8.66 0.51%2C13.016c0.114%2C8.761 0.627%2C16.509 0.723%2C25.269c0.189%2C17.422 0.482%2C34.696 -0.606%2C52.1z%22%2F%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n }\r\n \r\n .linkedin {\r\n     background-image: url(" + escape(__webpack_require__("../../../../../src/assets/icons/social-icons/linkedin.svg")) + ");\r\n }\r\n \r\n .stack {\r\n     background-image: url(" + escape(__webpack_require__("../../../../../src/assets/icons/social-icons/stack-overflow-color.svg")) + ");\r\n }\r\n \r\n .icon-svg {\r\n     display: inline-block;\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     width: 20px;\r\n     height: 20px;\r\n     margin: 0 5px;\r\n }\r\n \r\n .icon-svg:hover {\r\n     cursor: help;\r\n }\r\n \r\n .icon-svg.tip .message {\r\n     margin-left: -6px;\r\n }\r\n \r\n .love {\r\n     background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 50 50%22 style%3D%22enable-background%3Anew 0 0 50 50%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpath style%3D%22fill%3A%23D75A4A%3B%22 d%3D%22M24.85%2C10.126c2.018-4.783%2C6.628-8.125%2C11.99-8.125c7.223%2C0%2C12.425%2C6.179%2C13.079%2C13.543%0D%09c0%2C0%2C0.353%2C1.828-0.424%2C5.119c-1.058%2C4.482-3.545%2C8.464-6.898%2C11.503L24.85%2C48L7.402%2C32.165c-3.353-3.038-5.84-7.021-6.898-11.503%0D%09c-0.777-3.291-0.424-5.119-0.424-5.119C0.734%2C8.179%2C5.936%2C2%2C13.159%2C2C18.522%2C2%2C22.832%2C5.343%2C24.85%2C10.126z%22%2F%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n }\r\n \r\n .angular {\r\n     background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22%3F%3E%0D%3Csvg width%3D%222353%22 height%3D%222500%22 viewBox%3D%220 0 256 272%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 preserveAspectRatio%3D%22xMidYMid%22%3E%3Cpath d%3D%22M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z%22 fill%3D%22%23E23237%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z%22 fill%3D%22%23B52E31%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z%22 fill%3D%22%23FFF%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\");\r\n     margin-left: 10px;\r\n }\r\n \r\n .firebase {\r\n     background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3Csvg baseProfile%3D%22tiny%22 height%3D%22512px%22 id%3D%22Layer_1%22 version%3D%221.2%22 viewBox%3D%220 0 512 512%22 width%3D%22512px%22 xml%3Aspace%3D%22preserve%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%3E%3Cpath d%3D%22M297.036%2C205.578l-36.334%2C33.809l-33.716-68.005l17.446-39.108c4.416-7.84%2C11.621-7.855%2C16.037%2C0   L297.036%2C205.578z%22 fill%3D%22%23FFA000%22%2F%3E%3Cpolygon fill%3D%22%23F57F17%22 points%3D%22260.702%2C239.386 124.924%2C365.697 226.986%2C171.381  %22%2F%3E%3Cpath d%3D%22M336.776%2C153.901c6.491-6.239%2C13.202-4.111%2C14.912%2C4.729l35.342%2C205.375L269.873%2C434.22   c-4.1%2C2.264-14.957%2C3.246-14.957%2C3.246s-9.91-1.185-13.687-3.281L124.92%2C365.69L336.776%2C153.901z%22 fill%3D%22%23FFCA28%22%2F%3E%3Cpath d%3D%22M226.986%2C171.381L124.924%2C365.697l45.46-283.998c1.674-8.847%2C6.71-9.699%2C11.203-1.89L226.986%2C171.381z%22 fill%3D%22%23FFA000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n     width: 34px;\r\n     height: 28px;\r\n     margin-top: -5px;\r\n }\r\n \r\n .vcs {\r\n     background-image: url(\"data:image/svg+xml,%3Csvg width%3D%221024%22 height%3D%221024%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0D %3Cg%3E%0D  %3Ctitle%3Ebackground%3C%2Ftitle%3E%0D  %3Crect fill%3D%22none%22 id%3D%22canvas_background%22 height%3D%22402%22 width%3D%22582%22 y%3D%22-1%22 x%3D%22-1%22%2F%3E%0D %3C%2Fg%3E%0D %3Cg%3E%0D  %3Ctitle%3ELayer 1%3C%2Ftitle%3E%0D  %3Cpath fill%3D%22%2314acf2%22 id%3D%22svg_2%22 fill-rule%3D%22evenodd%22 d%3D%22m345.114%2C577.957c-30.72%2C23.406 -60.7%2C46.237 -90.663%2C69.088c-59.987%2C45.753 -120.068%2C91.384 -179.826%2C137.437c-7.932%2C6.111 -14.316%2C6.845 -22.936%2C1.812c-12.293%2C-7.176 -25.262%2C-13.198 -37.999%2C-19.602c-6.807%2C-3.422 -9.695%2C-8.685 -9.69%2C-16.38c0.101%2C-158.855 -0.012%2C-317.711 0.465%2C-476.567c0.015%2C-5.197 4.539%2C-12.4 9.09%2C-15.184c13.567%2C-8.304 28.245%2C-14.775 42.391%2C-22.151c7.721%2C-4.026 13.51%2C-0.578 19.469%2C3.987c49.376%2C37.81 98.813%2C75.541 148.249%2C113.274c40.505%2C30.916 81.034%2C61.8 122.024%2C93.059c2.979%2C-2.791 5.713%2C-5.265 8.352%2C-7.835c147.819%2C-144.019 295.673%2C-287.998 443.312%2C-432.202c7.488%2C-7.313 14.082%2C-8.348 23.568%2C-4.49c62.539%2C25.429 125.33%2C50.234 187.785%2C75.868c4.607%2C1.892 7.924%2C8.313 10.479%2C13.325c1.525%2C2.993 0.445%2C7.343 0.445%2C11.083c0.01%2C273.15 0.008%2C546.3 0.01%2C819.451c0%2C20.281 -0.023%2C20.215 -19.381%2C27.952c-59.543%2C23.801 -119.17%2C47.399 -178.496%2C71.729c-10.449%2C4.282 -17.154%2C2.901 -25.148%2C-4.894c-146.311%2C-142.644 -292.865%2C-285.033 -439.38%2C-427.466c-3.643%2C-3.54 -7.429%2C-6.931 -12.12%2C-11.294zm426.109%2C129.602c0%2C-131.221 0%2C-260.063 0%2C-390.557c-87.355%2C65.362 -173.346%2C129.704 -260.054%2C194.582c87.009%2C65.569 172.895%2C130.296 260.054%2C195.975zm-545.548%2C-195.828c-43.705%2C-39.035 -86.275%2C-77.056 -129.673%2C-115.817c0%2C78.679 0%2C155.331 0%2C233.493c43.843%2C-39.787 86.283%2C-78.302 129.673%2C-117.676z%22 clip-rule%3D%22evenodd%22%2F%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n }\r\n \r\n .github-svg {\r\n     background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22%3F%3E%0D%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22512px%22 height%3D%22512px%22 viewBox%3D%220 0 438.549 438.549%22 style%3D%22enable-background%3Anew 0 0 438.549 438.549%3B%22 xml%3Aspace%3D%22preserve%22 class%3D%22%22%3E%3Cg%3E%3Cg%3E%0D%09%3Cpath d%3D%22M409.132%2C114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736%2C15.166%2C259.057%2C5.365%2C219.271%2C5.365   c-39.781%2C0-76.472%2C9.804-110.063%2C29.408c-33.596%2C19.605-60.192%2C46.204-79.8%2C79.8C9.803%2C148.168%2C0%2C184.854%2C0%2C224.63   c0%2C47.78%2C13.94%2C90.745%2C41.827%2C128.906c27.884%2C38.164%2C63.906%2C64.572%2C108.063%2C79.227c5.14%2C0.954%2C8.945%2C0.283%2C11.419-1.996   c2.475-2.282%2C3.711-5.14%2C3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567%2C1.136   c-4.187%2C0.767-9.469%2C1.092-15.846%2C1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43%2C1.427-3.289c1.525-0.859%2C4.281-1.276%2C8.28-1.276l5.708%2C0.853c3.807%2C0.763%2C8.516%2C3.042%2C14.133%2C6.851   c5.614%2C3.806%2C10.229%2C8.754%2C13.846%2C14.842c4.38%2C7.806%2C9.657%2C13.754%2C15.846%2C17.847c6.184%2C4.093%2C12.419%2C6.136%2C18.699%2C6.136   c6.28%2C0%2C11.704-0.476%2C16.274-1.423c4.565-0.952%2C8.848-2.383%2C12.847-4.285c1.713-12.758%2C6.377-22.559%2C13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035%2C7.52-42.637%2C22.557-58.817   c-7.044-17.318-6.379-36.732%2C1.997-58.24c5.52-1.715%2C13.706-0.428%2C24.554%2C3.853c10.85%2C4.283%2C18.794%2C7.952%2C23.84%2C10.994   c5.046%2C3.041%2C9.089%2C5.618%2C12.135%2C7.708c17.705-4.947%2C35.976-7.421%2C54.818-7.421s37.117%2C2.474%2C54.823%2C7.421l10.849-6.849   c7.419-4.57%2C16.18-8.758%2C26.262-12.565c10.088-3.805%2C17.802-4.853%2C23.134-3.138c8.562%2C21.509%2C9.325%2C40.922%2C2.279%2C58.24   c15.036%2C16.18%2C22.559%2C35.787%2C22.559%2C58.817c0%2C16.178-1.958%2C30.497-5.853%2C42.966c-3.9%2C12.471-8.941%2C22.457-15.125%2C29.979   c-6.191%2C7.521-13.901%2C13.85-23.131%2C18.986c-9.232%2C5.14-18.182%2C8.85-26.84%2C11.136c-8.662%2C2.286-18.415%2C4.004-29.263%2C5.146   c9.894%2C8.562%2C14.842%2C22.077%2C14.842%2C40.539v60.237c0%2C3.422%2C1.19%2C6.279%2C3.572%2C8.562c2.379%2C2.279%2C6.136%2C2.95%2C11.276%2C1.995   c44.163-14.653%2C80.185-41.062%2C108.068-79.226c27.88-38.161%2C41.825-81.126%2C41.825-128.906   C438.536%2C184.851%2C428.728%2C148.168%2C409.132%2C114.573z%22 data-original%3D%22%23000000%22 class%3D%22active-path%22 data-old_color%3D%22%23ffffff%22 fill%3D%22%23ffffff%22%2F%3E%0D%3C%2Fg%3E%3C%2Fg%3E %3C%2Fsvg%3E%0D\");\r\n }\r\n \r\n /* media queries */\r\n \r\n @media only screen and (max-width: 767px) {\r\n     .social-icons {\r\n         display: -webkit-box;\r\n         display: -ms-flexbox;\r\n         display: flex;\r\n         -webkit-box-orient: horizontal;\r\n         -webkit-box-direction: normal;\r\n             -ms-flex-flow: row wrap;\r\n                 flex-flow: row wrap;\r\n         -ms-flex-pack: distribute;\r\n             justify-content: space-around;\r\n         -webkit-box-align: center;\r\n             -ms-flex-align: center;\r\n                 align-items: center;\r\n     }\r\n     .social-icons a p.image {\r\n         width: 35px;\r\n         height: 35px;\r\n     }\r\n     .notes p {\r\n         margin-bottom: 2px;\r\n     }\r\n     .copyrights {\r\n         padding-top: 5px;\r\n         margin-bottom: 0px;\r\n         margin-left: -8px;\r\n     }\r\n }\r\n \r\n @media only screen and (max-width: 399px) {\r\n     .first-row {\r\n         display: -webkit-box;\r\n         display: -ms-flexbox;\r\n         display: flex;\r\n         -webkit-box-orient: vertical;\r\n         -webkit-box-direction: normal;\r\n             -ms-flex-direction: column;\r\n                 flex-direction: column;\r\n         padding-left: 30%;\r\n     }\r\n }\r\n \r\n @media only screen and (min-width: 400px) and (max-width: 767px) {\r\n     .first-row {\r\n         display: -webkit-box;\r\n         display: -ms-flexbox;\r\n         display: flex;\r\n         -webkit-box-orient: horizontal;\r\n         -webkit-box-direction: normal;\r\n             -ms-flex-flow: row nowrap;\r\n                 flex-flow: row nowrap;\r\n         -webkit-box-pack: center;\r\n             -ms-flex-pack: center;\r\n                 justify-content: center;\r\n         text-align: left;\r\n     }\r\n     .first-row .second-column {\r\n         padding-right: 15px;\r\n     }\r\n }\r\n \r\n @media only screen and (min-width: 768px) {\r\n     .first-row,\r\n     .second-row {\r\n         display: -webkit-box;\r\n         display: -ms-flexbox;\r\n         display: flex;\r\n         -webkit-box-orient: horizontal;\r\n         -webkit-box-direction: normal;\r\n             -ms-flex-flow: row nowrap;\r\n                 flex-flow: row nowrap;\r\n         -ms-flex-pack: distribute;\r\n             justify-content: space-around;\r\n         padding: 10px;\r\n     }\r\n     .first-row .second-column {\r\n         margin-left: -20px;\r\n     }\r\n     .social-icons {\r\n         display: -ms-grid;\r\n         display: grid;\r\n         -ms-grid-columns: (1fr)[7];\r\n             grid-template-columns: repeat(7, 1fr);\r\n         -ms-grid-rows: none;\r\n             grid-template-rows: none;\r\n         grid-column-gap: 20px;\r\n     }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/site-footer/site-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"footer\">\r\n    <div class=\"first-row\">\r\n        <ul class=\"first-column\">\r\n            <!-- <li>\r\n                <a routerLink=\"/terms-and-conditions\" (click)=\"footerLinksClick('terms')\">Terms</a>\r\n            </li> -->\r\n            <li>\r\n                <a routerLink=\"/privacy-policy\" (click)=\"footerLinksClick('privacy')\">Privacy&nbsp;Policy</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/disclaimer\" (click)=\"footerLinksClick('disclaimer')\">Disclaimer</a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://github.com/iamsainikhil/iamsainikhil.github.io\" target=\"_blank\" (click)=\"footerLinksClick('source-code')\">Source&nbsp;Code</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"second-column\">\r\n            <li>\r\n                <a routerLink=\"/resume\" (click)=\"footerLinksClick('resume')\">Resume</a>\r\n            </li>\r\n            <!-- <li>\r\n                <a routerLink=\"/skills\" (click)=\"footerLinksClick('skills')\">Skills</a>\r\n            </li> -->\r\n            <li>\r\n                <a routerLink=\"/projects\" (click)=\"footerLinksClick('projects')\">Projects</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/achievements\" (click)=\"footerLinksClick('achievements')\">Achievements</a>\r\n            </li>\r\n            <!-- <li>\r\n                <a routerLink=\"/contact\" (click)=\"footerLinksClick('contact')\">Contact</a>\r\n            </li> -->\r\n        </ul>\r\n        <ul class=\"third-column\">\r\n            <li>\r\n                <a routerLink=\"/about\" (click)=\"footerLinksClick('about')\">About</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/about/blog\" (click)=\"footerLinksClick('blog')\">Blog</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/about/photos\" (click)=\"footerLinksClick('photos')\">Photos</a>\r\n            </li>\r\n            <!-- <li>\r\n                <a routerLink=\"/about/videos\" (click)=\"footerLinksClick('videos')\">Videos</a>\r\n            </li> -->\r\n        </ul>\r\n    </div>\r\n    <div class=\"second-row\">\r\n        <div class=\"social-icons\">\r\n            <a href=\"https://www.sololearn.com/Profile/9954326\" target=\"_blank\" (click)=\"footerLinksClick('sololearn')\">\r\n                <p class=\"image sololearn tip\">\r\n                    <span class=\"message\">SoloLearn</span>\r\n                </p>\r\n            </a>\r\n\r\n            <a href=\"https://www.hackerrank.com/iamsainikhil\" target=\"_blank\" (click)=\"footerLinksClick('hackerrank')\">\r\n                <p class=\"image hackerrank tip\">\r\n                    <span class=\"message\">HackerRank</span>\r\n                </p>\r\n            </a>\r\n\r\n            <a href=\"https://www.hackerearth.com/@sainikhil12\" target=\"_blank\" (click)=\"footerLinksClick('hackerearth')\">\r\n                <p class=\"image hackerearth tip\">\r\n                    <span class=\"message\">HackerEarth</span>\r\n                </p>\r\n            </a>\r\n\r\n            <a href=\"https://codepen.io/iamsainikhil\" target=\"_blank\" (click)=\"footerLinksClick('codepen')\">\r\n                <p class=\"image codepen tip\">\r\n                    <span class=\"message\">codepen</span>\r\n                </p>\r\n            </a>\r\n\r\n            <a href=\"https://github.com/iamsainikhil\" target=\"_blank\" (click)=\"footerLinksClick('github')\">\r\n                <p class=\"image github tip\">\r\n                    <span class=\"message\">GitHub</span>\r\n                </p>\r\n            </a>\r\n\r\n            <a href=\"https://www.linkedin.com/in/iamsainikhil\" target=\"_blank\" (click)=\"footerLinksClick('linkedin')\">\r\n                <p class=\"image linkedin tip\">\r\n                    <span class=\"message\">LinkedIn</span>\r\n                </p>\r\n            </a>\r\n\r\n            <a href=\"https://stackoverflow.com/story/iamsainikhil\" target=\"_blank\" (click)=\"footerLinksClick('stack-overflow')\">\r\n                <p class=\"image stack tip\">\r\n                    <span class=\"message\">Stack Overflow</span>\r\n                </p>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"notes\">\r\n        <p>Website built with</p>\r\n        <p class=\"icon-svg love\"></p>&nbsp;using\r\n        <p class=\"icon-svg angular tip\"><span class=\"message\">Angular</span></p>\r\n        <p class=\"icon-svg firebase tip\"><span class=\"message\">Firebase</span></p>\r\n        <p class=\"icon-svg vcs tip\"><span class=\"message\">Visual Studio Code</span></p>\r\n        <p>&nbsp; and hosted on</p>\r\n        <p class=\"icon-svg github-svg tip\"><span class=\"message\">GitHub</span></p>\r\n    </div>\r\n    <p class=\"copyrights\">&copy;&nbsp;2017&nbsp;-&nbsp;{{date | date:'y'}}&nbsp;<a routerLink=\"/\">Sai&nbsp;Nikhil&nbsp;Bheemanathini</a></p>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/shared/components/site-footer/site-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteFooterComponent = /** @class */ (function () {
    function SiteFooterComponent(gaService) {
        this.gaService = gaService;
        this.showDisclaimerModal = false;
        this.showPrivacyModal = false;
        this.date = new Date();
    }
    SiteFooterComponent.prototype.ngOnInit = function () {
    };
    SiteFooterComponent.prototype.footerLinksClick = function (name) {
        this.gaService.emitEvent(name + "-footer-link", 'footer-links', 'link');
    };
    SiteFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-site-footer',
            template: __webpack_require__("../../../../../src/app/shared/components/site-footer/site-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/site-footer/site-footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ga_service__["a" /* GAService */]])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/site-header/site-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sticky .mobile-menu,\r\n.sticky .desktop-menu {\r\n    top: -100%;\r\n}\r\n\r\n.non-sticky {\r\n    background-color: #f5f5f5 !important;\r\n}\r\n\r\n.desktop-menu,\r\n.mobile-menu {\r\n    width: 100%;\r\n    top: 0;\r\n    position: fixed;\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    height: 70px;\r\n}\r\n\r\n.desktop-logo,\r\n.mobile-logo {\r\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 22.0.1%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 511 511%22 style%3D%22enable-background%3Anew 0 0 511 511%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3Anone%3B%7D%0D%09.st1%7Benable-background%3Anew    %3B%7D%0D%3C%2Fstyle%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M471.5%2C56h-432C17.7%2C56%2C0%2C73.7%2C0%2C95.5v320C0%2C437.3%2C17.7%2C455%2C39.5%2C455h432c21.8%2C0%2C39.5-17.7%2C39.5-39.5v-320%0D%09%09C511%2C73.7%2C493.3%2C56%2C471.5%2C56z M39.5%2C71h432C485%2C71%2C496%2C82%2C496%2C95.5V120H15V95.5C15%2C82%2C26%2C71%2C39.5%2C71z M471.5%2C440h-432%0D%09%09C26%2C440%2C15%2C429%2C15%2C415.5V135h481v280.5C496%2C429%2C485%2C440%2C471.5%2C440z%22%2F%3E%0D%09%3Cpath d%3D%22M39.5%2C103c2%2C0%2C3.9-0.8%2C5.3-2.2c1.4-1.4%2C2.2-3.3%2C2.2-5.3s-0.8-3.9-2.2-5.3S41.5%2C88%2C39.5%2C88s-3.9%2C0.8-5.3%2C2.2%0D%09%09c-1.4%2C1.4-2.2%2C3.3-2.2%2C5.3s0.8%2C3.9%2C2.2%2C5.3C35.6%2C102.2%2C37.5%2C103%2C39.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M63.5%2C103c2%2C0%2C3.9-0.8%2C5.3-2.2c1.4-1.4%2C2.2-3.3%2C2.2-5.3s-0.8-3.9-2.2-5.3c-1.4-1.4-3.3-2.2-5.3-2.2c-2%2C0-3.9%2C0.8-5.3%2C2.2%0D%09%09c-1.4%2C1.4-2.2%2C3.3-2.2%2C5.3s0.8%2C3.9%2C2.2%2C5.3C59.6%2C102.2%2C61.5%2C103%2C63.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M87.5%2C103c2%2C0%2C3.9-0.8%2C5.3-2.2c1.4-1.4%2C2.2-3.3%2C2.2-5.3s-0.8-3.9-2.2-5.3c-1.4-1.4-3.3-2.2-5.3-2.2s-3.9%2C0.8-5.3%2C2.2%0D%09%09c-1.4%2C1.4-2.2%2C3.3-2.2%2C5.3s0.8%2C3.9%2C2.2%2C5.3C83.6%2C102.2%2C85.5%2C103%2C87.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M366%2C192.4c-3.8-3.2-10.1-3.2-13.9%2C0s-3.8%2C8.4%2C0%2C11.6l87.7%2C73L352%2C350c-3.8%2C3.2-3.8%2C8.4%2C0%2C11.6c2%2C1.6%2C4.5%2C2.4%2C7%2C2.4%0D%09%09s5-0.8%2C7-2.4l94.6-78.8c3.8-3.2%2C3.8-8.4%2C0-11.6L366%2C192.4z%22%2F%3E%0D%09%3Cpath d%3D%22M160.9%2C192.4c-4.2-3.2-11-3.2-15.2%2C0L42.6%2C271.2c-4.2%2C3.2-4.2%2C8.4%2C0%2C11.6l103.1%2C78.8c2.1%2C1.6%2C4.9%2C2.4%2C7.6%2C2.4%0D%09%09s5.4-0.8%2C7.6-2.4c4.2-3.2%2C4.2-8.4%2C0-11.6l-95.5-73l95.5-73C165.1%2C200.8%2C165.1%2C195.6%2C160.9%2C192.4z%22%2F%3E%0D%09%3Cpath d%3D%22M119.5%2C103h304c4.1%2C0%2C7.5-3.4%2C7.5-7.5s-3.4-7.5-7.5-7.5h-304c-4.1%2C0-7.5%2C3.4-7.5%2C7.5S115.4%2C103%2C119.5%2C103z%22%2F%3E%0D%09%3Cpath d%3D%22M455.5%2C103h16c4.1%2C0%2C7.5-3.4%2C7.5-7.5s-3.4-7.5-7.5-7.5h-16c-4.1%2C0-7.5%2C3.4-7.5%2C7.5S451.4%2C103%2C455.5%2C103z%22%2F%3E%0D%3C%2Fg%3E%0D%3Crect x%3D%22212%22 y%3D%22219%22 class%3D%22st0%22 width%3D%2226%22 height%3D%22145%22%2F%3E%0D%3Cg class%3D%22st1%22%3E%0D%09%3Cpath d%3D%22M250.6%2C238.4c0%2C5.3-1.2%2C9.6-3.4%2C13.3c-2.2%2C3.7-5%2C5.4-8.1%2C5.4s-5.8-1.9-8-5.4c-2.2-3.6-3.4-8-3.4-13.3%0D%09%09c0-1.1%2C0.1-2.9%2C0.3-4.7c-1.3-0.1-2.1-0.4-2.4-0.4c-4.3%2C0-6.5%2C3.4-6.5%2C9.9c0%2C3.4%2C1.3%2C11%2C3.8%2C22.9c2.5%2C11.9%2C3.8%2C21.1%2C3.8%2C27.8%0D%09%09c0%2C14.3-4.3%2C25.2-12.9%2C32.3c-6.5%2C5.3-14%2C7.9-22.5%2C7.9c-7.9%2C0-14.9-2-20.9-6c-8.6-5.6-12.8-14.3-12.8-26.1%0D%09%09c0-17.1%2C7.9-25.5%2C23.7-25.5h16.3l3.1%2C12.6H188c-3.2%2C0-6%2C1-8.3%2C3c-3.1%2C2.6-4.6%2C6.6-4.6%2C11.9c0%2C5.9%2C2.1%2C10.5%2C6.4%2C13.9%0D%09%09c3.2%2C2.6%2C6.8%2C3.7%2C10.5%2C3.7c4.7%2C0%2C8.7-1.9%2C11.8-5.9c3.7-4.3%2C5.5-10.8%2C5.5-18.9c0-5.6-1.2-13.8-3.5-24.4c-2.3-10.5-3.5-18.8-3.5-24.7%0D%09%09c0-19.2%2C8.8-28.7%2C26.5-28.7h10.5c2.9%2C0%2C5.5%2C1.9%2C7.7%2C5.4C249.3%2C228.6%2C250.6%2C233.2%2C250.6%2C238.4z%22%2F%3E%0D%09%3Cpath d%3D%22M339%2C237.8c0%2C5.4-1.2%2C9.9-3.6%2C13.5c-2.2%2C3.6-4.9%2C5.2-7.9%2C5.2s-5.7-1.7-7.7-5.2l-14.2%2C72.3c-1.4%2C7-3.7%2C10.5-6.9%2C10.5%0D%09%09c-4.4%2C0-7.1-3.6-7.9-10.5l-7.1-61.8l-9.6%2C52.2c-1%2C5.4-2.9%2C9.7-5.7%2C12.9c-2.7%2C3.1-5.5%2C4.7-8.8%2C4.7h-20.2c1.3-5.8%2C2.3-9.7%2C3.2-12.2%0D%09%09c1.7-4.5%2C3.6-6.8%2C5.9-6.8c1.4%2C0%2C3.5%2C0.6%2C6.2%2C1.7c2.8%2C1.2%2C4.9%2C1.7%2C6.2%2C1.7c3%2C0%2C5.1-3.3%2C6.4-10.2l13.2-70.1c1.2-6%2C2.1-9.9%2C2.9-11.6%0D%09%09c1.4-3.2%2C3.5-4.7%2C6.4-4.7c4.3%2C0%2C7.1%2C5.7%2C8.3%2C16.7l5.9%2C53.8l8.8-45.7c3.2-16.9%2C8.2-25.3%2C14.9-25.3c3%2C0%2C5.7%2C1.7%2C7.9%2C5.2%0D%09%09C337.8%2C227.7%2C339%2C232.2%2C339%2C237.8z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cpolygon class%3D%22st0%22 points%3D%22260%2C286 312%2C286 312%2C286 %09%22%2F%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.desktop-items-container a.active,\r\n.nav-links a.active {\r\n    color: #000;\r\n}\r\n\r\n.desktop-items-container a:hover,\r\n.nav-links a:hover {\r\n    color: #353839;\r\n}\r\n\r\n/* desktop */\r\n\r\n.desktop-menu {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 10px 20px 20px 25px;\r\n}\r\n\r\n.desktop-logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.desktop-items-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.desktop-items-container a {\r\n    padding-top: 10px;\r\n    padding-right: 25px;\r\n    color: #808080;\r\n    font-family: 'Poppins', sans-serif;\r\n    letter-spacing: 1px;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n/* mobile menu */\r\n\r\n.mobile-menu {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 10px 15px 20px 15px;\r\n}\r\n\r\n.mobile-icon {\r\n    position: absolute;\r\n    z-index: 99;\r\n    margin-top: -5px;\r\n    padding-right: 10px;\r\n    right: 0;\r\n}\r\n\r\n/* mobile menu items */\r\n\r\n.nav-items-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #f5f5f5;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 200vh;\r\n    z-index: 10;\r\n    overflow-y: auto;\r\n}\r\n\r\n.nav-links {\r\n    margin-top: 25px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n.nav-links a {\r\n    color: #808080;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 32px;\r\n    text-transform: capitalize;\r\n    padding-top: 75px;\r\n}\r\n\r\n/* icon  */\r\n\r\n.menu-icon {\r\n    width: 54px;\r\n    height: 54px;\r\n    margin: auto;\r\n    position: relative;\r\n    border-radius: 50%;\r\n}\r\n\r\n.menu-icon span {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n    display: block;\r\n    width: 22px;\r\n    height: 2px;\r\n    background-color: #000;\r\n}\r\n\r\n.menu-icon span:before,\r\n.menu-icon span:after {\r\n    content: \"\";\r\n    background-color: #000;\r\n    width: 22px;\r\n    height: 2px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-transform: translateY(-6px);\r\n            transform: translateY(-6px);\r\n    -webkit-transition: -webkit-transform 0.5s;\r\n    transition: -webkit-transform 0.5s;\r\n    transition: transform 0.5s;\r\n    transition: transform 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.menu-icon span:after {\r\n    -webkit-transform: translateY(6px);\r\n            transform: translateY(6px);\r\n}\r\n\r\n.menu-icon:hover span:before {\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n\r\n.menu-icon:hover span:after {\r\n    -webkit-transform: translateY(8px);\r\n            transform: translateY(8px);\r\n}\r\n\r\n/* icon cross animation */\r\n\r\n.menu-icon-cross {\r\n    background-color: transparent;\r\n    -webkit-transition: -webkit-transform 0.5s;\r\n    transition: -webkit-transform 0.5s;\r\n    transition: transform 0.5s;\r\n    transition: transform 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.menu-icon-cross span::before,\r\n.menu-icon-cross span::after {\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n}\r\n\r\n.menu-icon-cross span {\r\n    -webkit-transition: background 0.5s, -webkit-transform 0.5s;\r\n    transition: background 0.5s, -webkit-transform 0.5s;\r\n    transition: background 0.5s, transform 0.5s;\r\n    transition: background 0.5s, transform 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.menu-icon-cross svg {\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke: #fff;\r\n    stroke-dashArray: 165;\r\n    stroke-dashOffset: 165;\r\n    -webkit-transition: stroke-dashOffset 1s, fill 0.5s;\r\n    transition: stroke-dashOffset 1s, fill 0.5s;\r\n}\r\n\r\n.menu-icon-cross.isOpen {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    background-color: #808080;\r\n}\r\n\r\n.menu-icon-cross.isOpen span {\r\n    background: transparent;\r\n}\r\n\r\n.menu-icon-cross.isOpen span:before {\r\n    -webkit-transform: translateY(0) rotate(45deg);\r\n            transform: translateY(0) rotate(45deg);\r\n}\r\n\r\n.menu-icon-cross.isOpen span:after {\r\n    -webkit-transform: translateY(0) rotate(-45deg);\r\n            transform: translateY(0) rotate(-45deg);\r\n}\r\n\r\n.menu-icon-cross.isOpen svg {\r\n    stroke-dashOffset: 0;\r\n}\r\n\r\n.menu-icon-cross.isOpen:hover svg {\r\n    fill: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .desktop-menu {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .mobile-menu {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/site-header/site-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div appScrollable (scrollDirection)=\"getPosition($event)\" [ngClass]=\"{'sticky': !showHeader}\">\r\n    <div class=\"desktop-menu\" [ngClass]=\"{'non-sticky slide-bottom': animateHeader}\">\r\n        <div class=\"desktop-logo\" routerLink=\"/\"></div>\r\n        <!-- desktop menu -->\r\n        <div class=\"desktop-items-container\">\r\n            <a routerLink=\"/about\" routerLinkActive=\"active\" (click)=\"desktopLinksClick('about')\">About</a>\r\n            <!-- <a routerLink=\"/skills\" routerLinkActive=\"active\" (click)=\"desktopLinksClick('skills')\">Skills</a> -->\r\n            <a routerLink=\"/projects\" routerLinkActive=\"active\" (click)=\"desktopLinksClick('projects')\">Projects</a>\r\n            <a routerLink=\"/achievements\" routerLinkActive=\"active\" (click)=\"desktopLinksClick('achievements')\">Achievements</a>\r\n        </div>\r\n    </div>\r\n    <!-- desktop menuend -->\r\n\r\n    <!-- mobile menu -->\r\n    <div class=\"mobile-menu\" [ngClass]=\"{'non-sticky slide-bottom': animateHeader}\">\r\n        <div class=\"mobile-logo\" routerLink=\"/\"></div>\r\n        <div class=\"mobile-icon\">\r\n            <div class=\"menu-icon menu-icon-cross\" [ngClass]=\"{'isOpen' : !menuIcon}\" (click)=\"menuIconClick()\">\r\n                <span></span>\r\n                <svg x=\"0\" y=\"0\" width=\"54px\" height=\"54px\" viewbox=\"0 0 54 54\">\r\n                                <circle cx=\"27\" cy=\"27\" r=\"26\"></circle>\r\n                            </svg>\r\n            </div>\r\n        </div>\r\n        <div class=\"nav-items-wrapper\" *ngIf=\"!menuIcon\">\r\n            <div class=\"nav-links\">\r\n                <a routerLink=\"/about\" routerLinkActive=\"active\" (click)=\"mobileLinksClick('about')\" class=\"btn btn-link\">About</a>\r\n                <!-- <a routerLink=\"/skills\" routerLinkActive=\"active\" (click)=\"mobileLinksClick('skills')\" class=\"btn btn-link\">Skills</a> -->\r\n                <a routerLink=\"/projects\" routerLinkActive=\"active\" (click)=\"mobileLinksClick('projects')\" class=\"btn btn-link\">Projects</a>\r\n                <a routerLink=\"/achievements\" routerLinkActive=\"active\" (click)=\"mobileLinksClick('achievements')\" class=\"btn btn-link\">Achievements</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- mobile menu end -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/site-header/site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ga_service__ = __webpack_require__("../../../../../src/app/shared/services/ga.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent(gaService) {
        this.gaService = gaService;
        this.menuIcon = true;
        this.showHeader = true; // to hide/show header while user scrolls
        this.animateHeader = false;
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent.prototype.menuIconClick = function () {
        if (this.menuIcon === false) {
            this.menuIcon = true;
        }
        else {
            this.menuIcon = false;
        }
        this.gaService.emitEvent('mobile-menu', 'menu-icon', 'cross');
    };
    SiteHeaderComponent.prototype.mobileLinksClick = function (name) {
        if (this.menuIcon === false) {
            this.menuIcon = true;
        }
        else {
            this.menuIcon = false;
        }
        this.gaService.emitEvent(name + "-mobile-header-link", 'header-links', 'link');
    };
    SiteHeaderComponent.prototype.desktopLinksClick = function (name) {
        this.gaService.emitEvent(name + "-desktop-header-link", 'header-links', 'link');
    };
    // show header when user scrolls up
    SiteHeaderComponent.prototype.getPosition = function (e) {
        if (e === 'up') {
            this.showHeader = true;
            this.animateHeader = true;
        }
        else if (e === 'zero') {
            this.showHeader = true;
            this.animateHeader = false;
        }
        else {
            this.showHeader = false;
            this.animateHeader = false;
        }
    };
    SiteHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-site-header',
            template: __webpack_require__("../../../../../src/app/shared/components/site-header/site-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/site-header/site-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ga_service__["a" /* GAService */]])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/site-loader/site-loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    margin: 100px auto;\r\n}\r\n\r\n.double-bounce1,\r\n.double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #343434;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n    0%,\r\n    100% {\r\n        -webkit-transform: scale(0.0)\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(1.0)\r\n    }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n    0%,\r\n    100% {\r\n        transform: scale(0.0);\r\n        -webkit-transform: scale(0.0);\r\n    }\r\n    50% {\r\n        transform: scale(1.0);\r\n        -webkit-transform: scale(1.0);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/site-loader/site-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n    <div class=\"double-bounce1\"></div>\r\n    <div class=\"double-bounce2\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/site-loader/site-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteLoaderComponent = /** @class */ (function () {
    // @Input() color: string;
    function SiteLoaderComponent() {
    }
    SiteLoaderComponent.prototype.ngOnInit = function () {
    };
    SiteLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-site-loader',
            template: __webpack_require__("../../../../../src/app/shared/components/site-loader/site-loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/site-loader/site-loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLoaderComponent);
    return SiteLoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/site-modal/site-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* popup modal */\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 99;\r\n    background-color: #fff;\r\n    /*dim the background*/\r\n}\r\n\r\n.color {\r\n    background-color: rgba(0, 0, 0, 0.9) !important;\r\n}\r\n\r\n.color .popup {\r\n    overflow-y: auto;\r\n}\r\n\r\n.popup {\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 999;\r\n    overflow: auto;\r\n}\r\n\r\n.popup .close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding-top: 10px;\r\n    padding-right: 20px;\r\n    color: #f5f5f5;\r\n    font-size: 24px;\r\n}\r\n\r\n.popup .close:hover {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/site-modal/site-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\">\r\n    <div class=\"popup\">\r\n        <div *ngIf=\"name === 'photo'\">\r\n            <app-photo [docId]=\"docId\"></app-photo>\r\n        </div>\r\n        <div *ngIf=\"name === 'blog-post'\">\r\n            <app-blog-post [docId]=\"docId\"></app-blog-post>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/site-modal/site-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteModalComponent = /** @class */ (function () {
    function SiteModalComponent(modalService) {
        this.modalService = modalService;
    }
    SiteModalComponent.prototype.ngOnInit = function () {
    };
    SiteModalComponent.prototype.closeModal = function () {
        this.modalService.showModal.next(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SiteModalComponent.prototype, "docId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SiteModalComponent.prototype, "name", void 0);
    SiteModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-site-modal',
            template: __webpack_require__("../../../../../src/app/shared/components/site-modal/site-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/site-modal/site-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_modal_service__["a" /* ModalService */]])
    ], SiteModalComponent);
    return SiteModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/disable-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisableScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisableScrollDirective = /** @class */ (function () {
    function DisableScrollDirective(modalService) {
        this.modalService = modalService;
        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    }
    DisableScrollDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.modalService.disbaleScroll.subscribe(function (res) {
            _this.scrollDisable = res;
            if (res) {
                _this.disableScroll();
            }
            else {
                _this.enableScroll();
            }
        });
    };
    DisableScrollDirective.prototype.preventDefault = function (e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    };
    DisableScrollDirective.prototype.preventDefaultForScrollKeys = function (e) {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    };
    DisableScrollDirective.prototype.disableScroll = function () {
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        }
        window.onwheel = this.preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        window.ontouchmove = this.preventDefault; // mobile
        document.onkeydown = this.preventDefault;
    };
    DisableScrollDirective.prototype.enableScroll = function () {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    };
    DisableScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDisableScroll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_modal_service__["a" /* ModalService */]])
    ], DisableScrollDirective);
    return DisableScrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/scrollable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service__ = __webpack_require__("../../../../../src/app/shared/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollableDirective = /** @class */ (function () {
    function ScrollableDirective(el, modalService) {
        this.el = el;
        this.modalService = modalService;
        this.scrollPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scrollDirection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
    ScrollableDirective.prototype.onScroll = function (event) {
        var _this = this;
        try {
            var top_1 = event.target.documentElement.scrollTop;
            var height = event.target.documentElement.scrollHeight;
            var offset = event.target.documentElement.offsetHeight;
            var currentScroll_1 = window.pageYOffset || top_1;
            // to show/hide header
            setTimeout(function () {
                if (currentScroll_1 > _this.lastScrollTop && currentScroll_1 > 0) {
                    _this.scrollDirection.emit('down');
                }
                else if (currentScroll_1 === _this.lastScrollTop) {
                    // do nothing
                }
                else if (currentScroll_1 === 0) {
                    _this.scrollDirection.emit('zero');
                }
                else {
                    _this.scrollDirection.emit('up');
                }
                _this.lastScrollTop = currentScroll_1 <= 0 ? 0 : currentScroll_1; // For Mobile or negative scrolling
            }, 250);
            // to scroll to last viewed photo
            this.modalService.scroll.subscribe(function (logic) {
                if (logic) {
                    _this.modalService.showModal.subscribe(function (res) {
                        if (!res) {
                            // to store y position of the user untill they click showModal
                            _this.modalService.yPosition.next(window.pageYOffset);
                            sessionStorage.setItem('y', window.pageYOffset.toString());
                        }
                    });
                }
                else {
                    sessionStorage.removeItem('y');
                }
            });
            // emit bottom event
            if (top_1 > height - offset - 1) {
                this.scrollPosition.emit('bottom');
            }
            // emit top event
            if (top_1 === 0) {
                this.scrollPosition.emit('top');
            }
        }
        catch (err) { }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollableDirective.prototype, "scrollPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollableDirective.prototype, "scrollDirection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollableDirective.prototype, "onScroll", null);
    ScrollableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appScrollable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__services_modal_service__["a" /* ModalService */]])
    ], ScrollableDirective);
    return ScrollableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/github-link.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubLinkPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GithubLinkPipe = /** @class */ (function () {
    function GithubLinkPipe() {
    }
    GithubLinkPipe.prototype.transform = function (data) {
        var split = data.split('/');
        var projectName = split[split.length - 1];
        return "https://github.com/iamsainikhil/" + projectName;
    };
    GithubLinkPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'githubLink'
        })
    ], GithubLinkPipe);
    return GithubLinkPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/slice-string.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliceStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliceStringPipe = /** @class */ (function () {
    function SliceStringPipe() {
    }
    SliceStringPipe.prototype.transform = function (data) {
        var split = data.split('');
        var splitPop = split.pop();
        return split.join('');
    };
    SliceStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sliceString'
        })
    ], SliceStringPipe);
    return SliceStringPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/url-name-extract.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlNameExtractPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UrlNameExtractPipe = /** @class */ (function () {
    function UrlNameExtractPipe() {
    }
    UrlNameExtractPipe.prototype.transform = function (url) {
        var value = url;
        var valueArray = value.split('');
        var length = valueArray.length;
        var slicedValueArray = valueArray.slice(0, (length - 4));
        var reversedSlice = slicedValueArray.reverse();
        var finalValue = this.extractString(reversedSlice);
        return finalValue;
    };
    UrlNameExtractPipe.prototype.extractString = function (data) {
        var dataArray = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var i = data_1[_i];
            if (i === '/') {
                break;
            }
            else {
                dataArray.push(i);
            }
        }
        var finalValueArray = dataArray.reverse();
        var numbers = this.numberRange(20);
        var finalValue;
        for (var _a = 0, finalValueArray_1 = finalValueArray; _a < finalValueArray_1.length; _a++) {
            var j = finalValueArray_1[_a];
            // checking whether any value in finalValueArray is a number
            if (numbers.includes(Number(j))) {
                finalValue = finalValueArray.join('').toUpperCase();
            }
            else {
                finalValue = finalValueArray.join('');
            }
        }
        return finalValue;
    };
    UrlNameExtractPipe.prototype.numberRange = function (range) {
        return Array.from(Array(range).keys());
    };
    UrlNameExtractPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'urlNameExtract'
        })
    ], UrlNameExtractPipe);
    return UrlNameExtractPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/about.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutService = /** @class */ (function () {
    function AboutService(afs) {
        this.afs = afs;
        this.aboutCollection = afs.collection('about');
    }
    /**
     * Get data from About collection in firestore
     */
    AboutService.prototype.getAboutData = function () {
        return this.aboutCollection.valueChanges();
    };
    /**
     * Get data from about-card collection
     */
    AboutService.prototype.getAboutCardData = function () {
        this.aboutCardCollection = this.afs.collection('about-card');
        return this.aboutCardCollection.valueChanges();
    };
    AboutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/achievements.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AchievementsService = /** @class */ (function () {
    function AchievementsService(afs) {
        this.afs = afs;
    }
    /**
     * Get limited data from Achievement collection in firestore
     */
    AchievementsService.prototype.getLimitedAchievementsData = function (number) {
        this.achievementCollection = this.afs.collection('achievements', function (ref) { return ref.limit(number); });
        return this.achievementCollection.valueChanges();
    };
    /**
     * Get data from Achievement collection in firestore
     */
    AchievementsService.prototype.getAchievementsData = function () {
        this.achievementCollection = this.afs.collection('achievements');
        return this.achievementCollection.valueChanges();
    };
    /**
     * Get queried data from Achievement collection
     */
    AchievementsService.prototype.getQueriedAchievementsData = function (field, operator, value) {
        this.achievementCollection = this.afs.collection('achievements', function (ref) { return ref.where(field, operator, value); });
        return this.achievementCollection.valueChanges();
    };
    AchievementsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AchievementsService);
    return AchievementsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/avatar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarService = /** @class */ (function () {
    function AvatarService(afs) {
        this.afs = afs;
        this.avatarCollection = afs.collection('avatars');
    }
    /**
     * Get data from About collection in firestore
     */
    AvatarService.prototype.getAvatarData = function () {
        return this.avatarCollection.valueChanges();
    };
    AvatarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AvatarService);
    return AvatarService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService(afs) {
        this.afs = afs;
    }
    CommonService.prototype.getCollectionData = function (collectionName, opts) {
        var query = __assign({ collectionName: collectionName, field: 'date', operator: null, value: null, complexField: null, complexOperator: '==', complexValue: false, complexQuery: false, complexDirection: true, order: false, limit: 50, reverse: true, timestamp: false }, opts);
        var collection;
        if (query.operator === null) {
            collection = this.afs.collection(collectionName, function (ref) { return ref.orderBy(query.field, query.reverse ? 'desc' : 'asc').limit(query.limit); });
        }
        else if (query.complexQuery) {
            if (query.complexDirection) {
                collection = this.afs.collection(collectionName, function (ref) { return ref.where(query.field, query.operator, query.value)
                    .where(query.complexField, query.complexOperator, query.complexValue)
                    .limit(query.limit); });
            }
            else {
                collection = this.afs.collection(collectionName, function (ref) { return ref.where(query.complexField, query.complexOperator, query.complexValue)
                    .where(query.field, query.operator, query.value)
                    .limit(query.limit); });
            }
        }
        else {
            if (query.order) {
                collection = this.afs.collection(collectionName, function (ref) { return ref.where(query.complexField, query.operator, query.value)
                    .orderBy(query.field, query.reverse ? 'desc' : 'asc')
                    .limit(query.limit); });
            }
            else {
                collection = this.afs.collection(collectionName, function (ref) { return ref.where(query.field, query.operator, query.value).limit(query.limit); });
            }
        }
        var collectionData = collection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                if (query.timestamp) {
                    var timeStamp = data.date;
                    data.date = timeStamp.toDate();
                }
                return { id: id, data: data };
            });
        });
        return collectionData;
    };
    CommonService.prototype.getDocumentData = function (collectionName, docId, opts) {
        var query = __assign({ timestamp: false }, opts);
        var document = this.afs.doc(collectionName + '/' + docId);
        var documentData = document.snapshotChanges().map(function (snap) {
            var data = snap.payload.data();
            var id = snap.payload.id;
            if (query.timestamp) {
                var timeStamp = data.date;
                data.date = timeStamp.toDate();
            }
            return { id: id, data: data };
        });
        return documentData;
    };
    CommonService.prototype.getSubCollectionData = function (collectionName, docId, subCollectionName, opts) {
        var query = __assign({ timestamp: false, limit: 50, field: 'archive', operator: '==', value: true }, opts);
        var subCollection = this.afs.collection(collectionName + '/' + docId + '/' + subCollectionName, function (ref) { return ref.limit(query.limit); });
        var collectionData = subCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                if (query.timestamp) {
                    var timeStamp = data.date;
                    data.date = timeStamp.toDate();
                }
                return { id: id, data: data };
            });
        });
        return collectionData;
    };
    CommonService.prototype.getSubCollectionDocumentData = function (collectionName, docId, subCollectionName, subDocId, opts) {
        var query = __assign({ timestamp: false }, opts);
        var document = this.afs.doc(collectionName + '/' + docId + '/' + subCollectionName + '/' + subDocId);
        var documentData = document.valueChanges();
        return documentData;
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(afs, http) {
        this.afs = afs;
        this.http = http;
        // dates
        this.date = new Date();
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.year = this.date.getFullYear();
        // required to set document id in contact collection
        this.id = this.monthNames[this.month] + "-" + this.day + "-" + this.year + "-" + this.hours + "-" + this.minutes;
    }
    /**
     * Get data from About collection in firestore
     */
    ContactService.prototype.addData = function (data) {
        var contactCollection = this.afs.collection('contact').doc(this.id);
        // get location details
        this.http.get('https://ipinfo.io').subscribe(function (res) {
            contactCollection.set({
                email: data.email,
                message: data.message,
                dateAdded: data.dateAdded,
                city: res.city,
                country: res.country,
                region: res.region,
                latlong: res.loc,
                ip: res.ip,
                zipCode: res.postal
            });
        }, function (err) {
            // save data without location details
            contactCollection.set(data);
        });
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterService = /** @class */ (function () {
    function FilterService() {
        this.chipName = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
    }
    FilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/ga.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GAService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GAService = /** @class */ (function () {
    function GAService() {
    }
    GAService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        gtag('event', eventAction, {
            'event_category': eventCategory,
            'event_label': eventLabel,
            'value': eventValue
        });
    };
    GAService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GAService);
    return GAService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/likes-comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesCommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LikesCommentsService = /** @class */ (function () {
    function LikesCommentsService(afs, http) {
        this.afs = afs;
        this.http = http;
        // dates
        this.date = new Date();
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.year = this.date.getFullYear();
        // required to set document id in contact collection
        this.id = this.monthNames[this.month] + "-" + this.day + "-" + this.year + "-" + this.hours + "-" + this.minutes;
    }
    /**
     * get likes data
     */
    LikesCommentsService.prototype.getLikesData = function (docId, collection) {
        var likesCollection = this.afs.collection(collection + '/' + docId + '/likes');
        var likes = likesCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
        return likes;
    };
    /**
     * increment likes in a project document
     */
    LikesCommentsService.prototype.incrementLikes = function (collection, docId, count, id) {
        var likesCollection = this.afs.collection(collection + '/' + docId + '/likes');
        var data = {
            count: count + 1
        };
        likesCollection.doc(id).update(data);
    };
    /**
     * decrement likes in a project document
     */
    LikesCommentsService.prototype.decrementLikes = function (collection, docId, count, id) {
        var likesCollection = this.afs.collection(collection + '/' + docId + '/likes');
        var data = {
            count: count - 1
        };
        likesCollection.doc(id).update(data);
    };
    /**
     * add comments data
     */
    LikesCommentsService.prototype.addCommentsData = function (collection, docId, data) {
        var _this = this;
        var commentsCollection = this.afs.collection(collection + '/' + docId + '/comments').doc(this.id);
        // get location details
        this.http.get('https://ipinfo.io').subscribe(function (res) {
            commentsCollection.set({
                name: data.name,
                email: data.email,
                message: data.message,
                dateAdded: _this.date,
                approved: false,
                gender: data.gender,
                avatarUrl: data.avatarUrl,
                city: res.city,
                country: res.country,
                region: res.region,
                latlong: res.loc,
                ip: res.ip,
                zipCode: res.postal
            });
        }, function (err) {
            // save data without location details
            commentsCollection.set(data);
        });
    };
    /**
     * get comments data
     */
    LikesCommentsService.prototype.getCommentsData = function (collection, docId, field, operator, value) {
        var _this = this;
        var commentsCollection = this.afs.collection(collection + '/' + docId + '/comments', function (ref) { return ref.where(field, operator, value); });
        var comments = commentsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                var timeStamp = data.dateAdded;
                var date = timeStamp.toDate();
                data.dateAdded = _this.dateDifference(date);
                return { id: id, data: data };
            });
        });
        return comments;
    };
    /**
     * Get data from comments collection based on 'orderBy' query
     */
    LikesCommentsService.prototype.getOrderedCommentsData = function (collection, docId, field) {
        var _this = this;
        var commentsCollection = this.afs.collection(collection + '/' + docId + '/comments', function (ref) { return ref.where('approved', '==', true).orderBy(field); });
        var comments = commentsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var Id = a.payload.doc.id;
                var timeStamp = data.dateAdded;
                var date = timeStamp.toDate();
                data.dateAdded = _this.dateDifference(date);
                return { Id: Id, data: data };
            });
        });
        return comments;
    };
    LikesCommentsService.prototype.dateDifference = function (actualDate) {
        // Calculate time between two dates:
        var date1 = actualDate;
        var date2 = new Date();
        var r = {}; // object to be returned
        var message;
        var diffInSeconds = Math.abs(date2 - date1) / 1000;
        var days = Math.floor(diffInSeconds / 60 / 60 / 24);
        var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
        var minutes = Math.floor(diffInSeconds / 60 % 60);
        var seconds = Math.floor(diffInSeconds % 60);
        var milliseconds = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);
        r = {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds
        };
        // check if difference is in years or months
        if (years === 0 && months === 0) {
            // show in days if no years / months
            if (days > 0) {
                if (days === 1) {
                    message = days + ' day';
                }
                else {
                    message = days + ' days';
                }
            }
            else if (hours > 0) {
                if (hours === 1) {
                    message = hours + ' hour';
                }
                else {
                    message = hours + ' hours';
                }
            }
            else {
                // show in minutes if no years / months / days
                if (minutes === 1) {
                    message = minutes + ' minute';
                }
                else {
                    message = minutes + ' minutes';
                }
            }
        }
        else if (years === 0 && months > 0) {
            // show in months if no years
            if (months === 1) {
                message = months + ' month';
            }
            else {
                message = months + ' months';
            }
        }
        else if (years > 0) {
            // show in years if years exist
            if (years === 1) {
                message = years + ' year';
            }
            else {
                message = years + ' years';
            }
        }
        return "Posted " + message + " ago";
    };
    LikesCommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LikesCommentsService);
    return LikesCommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = /** @class */ (function () {
    function ModalService(afs) {
        this.afs = afs;
        // tab-list logic
        this.scroll = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        /**
         * modal dialog logic
         */
        this.showModal = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.yPosition = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        /**
         * disable scroll on parent
         */
        this.disbaleScroll = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/pagination.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaginationService = /** @class */ (function () {
    function PaginationService(afs) {
        this.afs = afs;
        // Source data
        this._done = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this._loading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this._data = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.done = this._done.asObservable();
        this.loading = this._loading.asObservable();
    }
    // Initial query sets options and defines the Observable
    // passing opts will override the defaults
    PaginationService.prototype.init = function (path, field, opts) {
        var _this = this;
        this.query = __assign({ path: path,
            field: field, limit: 2, reverse: false, prepend: false }, opts);
        var first = this.afs.collection(this.query.path, function (ref) {
            return ref
                .orderBy(_this.query.field, _this.query.reverse ? 'desc' : 'asc')
                .limit(_this.query.limit);
        });
        this.mapAndUpdate(first);
        // Create the observable array for consumption in components
        this.data = this._data.asObservable()
            .scan(function (acc, val) {
            return _this.query.prepend ? val.concat(acc) : acc.concat(val);
        });
    };
    // Retrieves additional data from firestore
    PaginationService.prototype.more = function () {
        var _this = this;
        var cursor = this.getCursor();
        var more = this.afs.collection(this.query.path, function (ref) {
            return ref
                .orderBy(_this.query.field, _this.query.reverse ? 'desc' : 'asc')
                .limit(_this.query.limit)
                .startAfter(cursor);
        });
        this.mapAndUpdate(more);
    };
    // Determines the doc snapshot to paginate query
    PaginationService.prototype.getCursor = function () {
        var current = this._data.value;
        if (current.length) {
            return this.query.prepend ? current[0].doc : current[current.length - 1].doc;
        }
        return null;
    };
    // Maps the snapshot to usable format the updates source
    PaginationService.prototype.mapAndUpdate = function (col) {
        var _this = this;
        if (this._done.value || this._loading.value) {
            return;
        }
        // loading
        this._loading.next(true);
        // Map snapshot with doc ref (needed for cursor)
        return col.snapshotChanges()
            .do(function (arr) {
            var values = arr.map(function (snap) {
                var data = snap.payload.doc.data();
                var doc = snap.payload.doc;
                var id = snap.payload.doc.id;
                var timeStamp = data.date;
                data.date = timeStamp.toDate();
                return __assign({}, data, { doc: doc, id: id }); // ...data = loading, done, and data
            });
            // If prepending, reverse the batch order
            values = _this.query.prepend ? values.reverse() : values;
            // update source with new values, done loading
            _this._data.next(values);
            _this._loading.next(false);
            // no more values, mark done
            if (!values.length) {
                _this._done.next(true);
            }
        })
            .take(1)
            .subscribe();
    };
    PaginationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = /** @class */ (function () {
    function ProjectsService(afs) {
        this.afs = afs;
    }
    /**
     * Get data from projects collection in firestore
     */
    ProjectsService.prototype.getProjectsData = function () {
        this.projects = this.afs.collection('projects', function (ref) { return ref.orderBy('dateAdded', 'desc'); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
        return this.projects;
    };
    // filter events on data from projects collection //
    /**
    * Get limited data from projects collection in firestore
    */
    ProjectsService.prototype.getLimitedProjectsData = function (number) {
        var projectCollection = this.afs.collection('projects', function (ref) { return ref.limit(number); });
        this.projects = projectCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
        return this.projects;
    };
    /**
     * Get data from projects collection based on 'where' query
     */
    ProjectsService.prototype.getQueriedProjectsData = function (field, operator, value) {
        var projectCollection = this.afs.collection('projects', function (ref) { return ref.where(field, operator, value); });
        this.projects = projectCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
        return this.projects;
    };
    /**
     * Get data from projects collection based on 'orderBy' query
     */
    ProjectsService.prototype.getOrderedProjectsData = function (field) {
        this.projectCollection = this.afs.collection('projects', function (ref) { return ref.orderBy(field); });
        this.projects = this.projectCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
        return this.projects;
    };
    // filter events end //
    /**
     * get project document data
     */
    ProjectsService.prototype.getProjectData = function (id) {
        this.projectDoc = this.afs.doc('projects/' + id);
        this.project = this.projectDoc.valueChanges();
        return this.project;
    };
    /**
     * get story data from project collection
     */
    ProjectsService.prototype.getStoryData = function (Id) {
        this.storyCollection = this.afs.collection('projects/' + Id + '/story');
        this.story = this.storyCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                //   new timestamp sent from firestore need to be converted to date
                //   const timestampStart = data.timeline.startDate;
                //   const timestampEnd = data.timeline.endDate;
                //   data.timeline.startDate = timestampStart.toDate();
                //   data.timeline.endDate = timestampEnd.toDate();
                return { id: id, data: data };
            });
        });
        return this.story;
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/skills.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsService = /** @class */ (function () {
    function SkillsService(afs) {
        this.afs = afs;
        this.skillsCollection = afs.collection('skills');
    }
    /**
     * Get data from Skills collection in firestore
     */
    SkillsService.prototype.getSkillsData = function () {
        return this.skillsCollection.valueChanges();
    };
    /**
     * To know showLoader condition
     */
    SkillsService.prototype.getLoaderCondition = function () {
        this.docExists = this.skillsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                return a.payload.doc.exists;
            });
        });
        if (this.docExists) {
            this.showLoader = false;
        }
        else {
            this.showLoader = true;
        }
        return this.showLoader;
    };
    SkillsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], SkillsService);
    return SkillsService;
}());



/***/ }),

/***/ "../../../../../src/app/skills-page/skills-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n\r\n.chart {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .title {\r\n        font-size: 24px;\r\n    }\r\n    .chart {\r\n        position: relative;\r\n        margin: auto;\r\n        height: 60vh;\r\n        width: 100vw;\r\n    }\r\n    .mobile-skills .bg-error {\r\n        margin: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .mobile-skills {\r\n        display: none;\r\n    }\r\n    .skills-wrapper {\r\n        padding: 20px;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .chart {\r\n        padding: 50px 25px;\r\n        display: block;\r\n    }\r\n}\r\n\r\n.fade {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;\r\n    animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;\r\n}\r\n\r\n@-webkit-keyframes fade-in-bottom {\r\n    0% {\r\n        -webkit-transform: translateY(50px);\r\n        transform: translateY(50px);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(0);\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fade-in-bottom {\r\n    0% {\r\n        -webkit-transform: translateY(50px);\r\n        transform: translateY(50px);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(0);\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills-page/skills-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n\r\n<app-site-loader *ngIf=\"showLoader\"></app-site-loader>\r\n\r\n<div class=\"skills-wrapper\" *ngIf=\"!showLoader\">\r\n    <div class=\"chart wow fade\" *ngIf=\"technicalSkillsData | async as techSkills\">\r\n        <h2 class=\"title\">technical skills</h2>\r\n        <canvas baseChart [datasets]=\"techSkills.chartData\" [labels]=\"techSkills.chartLabels\" [chartType]=\"techSkills.chartType\"></canvas>\r\n    </div>\r\n\r\n    <div class=\"chart wow fade\" data-wow-delay=\"1s\" data-wow-duration=\"1s\" *ngIf=\"applicationSkillsData | async as appSkills\">\r\n        <h2 class=\"title\">application skills</h2>\r\n        <canvas baseChart [datasets]=\"appSkills.chartData\" [labels]=\"appSkills.chartLabels\" [chartType]=\"appSkills.chartType\"></canvas>\r\n    </div>\r\n\r\n    <div class=\"chart wow fade\" data-wow-duration=\"1s\" *ngIf=\"softSkillsData | async as softSkills\">\r\n        <h2 class=\"title\">soft skills</h2>\r\n        <canvas baseChart [data]=\"softSkills.chartData\" [labels]=\"softSkills.chartLabels\" [chartType]=\"softSkills.chartType\"></canvas>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mobile-skills wow fade-in-bottom\">\r\n    <div class=\"bg-error text-center\">Please, switch to desktop site to have a better view of charts on your mobile device!</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/skills-page/skills-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsPageComponent = /** @class */ (function () {
    function SkillsPageComponent(commonService) {
        this.commonService = commonService;
        this.showLoader = true;
    }
    SkillsPageComponent.prototype.ngOnInit = function () {
        this.getTechnicalChartsData();
        this.getApplicationChartsData();
        this.getSoftChartsData();
    };
    SkillsPageComponent.prototype.getTechnicalChartsData = function () {
        var _this = this;
        this.commonService.getSubCollectionDocumentData('skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'technical-skills').subscribe(function () {
            _this.technicalSkillsData = _this.commonService.getSubCollectionDocumentData('skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'technical-skills');
            _this.showLoader = false;
        });
    };
    SkillsPageComponent.prototype.getApplicationChartsData = function () {
        var _this = this;
        this.commonService.getSubCollectionDocumentData('skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'application-skills').subscribe(function () {
            _this.applicationSkillsData = _this.commonService.getSubCollectionDocumentData('skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'application-skills');
            _this.showLoader = false;
        });
    };
    SkillsPageComponent.prototype.getSoftChartsData = function () {
        var _this = this;
        this.commonService.getSubCollectionDocumentData('skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'soft-skills').subscribe(function () {
            _this.softSkillsData = _this.commonService.getSubCollectionDocumentData('skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'soft-skills');
            _this.showLoader = false;
        });
    };
    SkillsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skills-page',
            template: __webpack_require__("../../../../../src/app/skills-page/skills-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills-page/skills-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__["a" /* CommonService */]])
    ], SkillsPageComponent);
    return SkillsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\r\n<h2 class=\"legal-title\">Terms of Service</h2>\r\n\r\n<div class=\"legal-content\">\r\n    <h3>1. Terms</h3>\r\n    <p>By accessing the website at <a href=\"https://iamsainikhil.github.io\">https://iamsainikhil.github.io</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance\r\n        with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>\r\n    <h3>2. Use License</h3>\r\n    <ol type=\"a\">\r\n        <li>Permission is granted to temporarily download one copy of the materials (information or software) on Sai Nikhil Bheemanathini's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,\r\n            and under this license you may not:\r\n            <ol type=\"i\">\r\n                <li>modify or copy the materials;</li>\r\n                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>\r\n                <li>attempt to decompile or reverse engineer any software contained on Sai Nikhil Bheemanathini's website;</li>\r\n                <li>remove any copyright or other proprietary notations from the materials; or</li>\r\n                <li>transfer the materials to another person or \"mirror\" the materials on any other server.</li>\r\n            </ol>\r\n        </li>\r\n        <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Sai Nikhil Bheemanathini at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must\r\n            destroy any downloaded materials in your possession whether in electronic or printed format.</li>\r\n    </ol>\r\n    <h3>3. Disclaimer</h3>\r\n    <ol type=\"a\">\r\n        <li>The materials on Sai Nikhil Bheemanathini's website are provided on an 'as is' basis. Sai Nikhil Bheemanathini makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied\r\n            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>\r\n        <li>Further, Sai Nikhil Bheemanathini does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to\r\n            this site.</li>\r\n    </ol>\r\n    <h3>4. Limitations</h3>\r\n    <p>In no event shall Sai Nikhil Bheemanathini or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on\r\n        Sai Nikhil Bheemanathini's website, even if Sai Nikhil Bheemanathini or a Sai Nikhil Bheemanathini authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations\r\n        on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>\r\n    <h3>5. Accuracy of materials</h3>\r\n    <p>The materials appearing on Sai Nikhil Bheemanathini's website could include technical, typographical, or photographic errors. Sai Nikhil Bheemanathini does not warrant that any of the materials on its website are accurate, complete or current. Sai\r\n        Nikhil Bheemanathini may make changes to the materials contained on its website at any time without notice. However Sai Nikhil Bheemanathini does not make any commitment to update the materials.</p>\r\n    <h3>6. Links</h3>\r\n    <p>Sai Nikhil Bheemanathini has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sai Nikhil Bheemanathini of the site. Use of\r\n        any such linked website is at the user's own risk.</p>\r\n    <h3>7. Modifications</h3>\r\n    <p>Sai Nikhil Bheemanathini may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>\r\n    <h3>8. Governing Law</h3>\r\n    <p>These terms and conditions are governed by and construed in accordance with the laws of Cincinnati, Ohio and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>\r\n\r\n    <p><em>Last updated on {{date | date}}</em></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
        this.date = new Date();
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/fonts/slkscr.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slkscr.f7aceb264f771788b55c.ttf";

/***/ }),

/***/ "../../../../../src/assets/icons/404_error.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "404_error.2faeef4754ebddf76883.svg";

/***/ }),

/***/ "../../../../../src/assets/icons/404_no_data.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "404_no_data.9c193f6b38a476022b9d.svg";

/***/ }),

/***/ "../../../../../src/assets/icons/layer3.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "layer3.1d9a16941e831cda9544.svg";

/***/ }),

/***/ "../../../../../src/assets/icons/social-icons/linkedin.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "linkedin.6742e8ca3eab1db6461b.svg";

/***/ }),

/***/ "../../../../../src/assets/icons/social-icons/sololearn.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sololearn.8608fb58be0b57c1608c.png";

/***/ }),

/***/ "../../../../../src/assets/icons/social-icons/stack-overflow-color.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "stack-overflow-color.18c25e491935a7d63cf9.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // Intialize Firebase
    firebase: {
        apiKey: 'AIzaSyCUbJrLJyMnvZHHDn3IJ2jLSn4ftSyn7CU',
        authDomain: 'iamsainikhil-portfolio.firebaseapp.com',
        databaseURL: 'https://iamsainikhil-portfolio.firebaseio.com',
        projectId: 'iamsainikhil-portfolio',
        storageBucket: 'iamsainikhil-portfolio.appspot.com',
        messagingSenderId: '584523232590'
    },
    analyticsId: 'UA-85329633-3'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map