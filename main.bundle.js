webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\r\n  <h3 style=\"font-family: 'Merienda One', sans-serif;color: #ffeecc;\">\r\n      Our team\r\n  </h3>\r\n  <img  src=\"./assets/images/team.png\" alt=\"\">\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_not_found_not_found_component__ = __webpack_require__("./src/app/partials/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__partials_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#fullPageContainer {\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tposition: relative;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fullPageContainer\">\r\n<br>\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">   \r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_not_found_not_found_component__ = __webpack_require__("./src/app/partials/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_blog_blog_service__ = __webpack_require__("./src/app/core/services/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recipes_italian_foods_italian_foods_component__ = __webpack_require__("./src/app/recipes/italian-foods/italian-foods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipes_spanish_foods_spanish_foods_component__ = __webpack_require__("./src/app/recipes/spanish-foods/spanish-foods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_services_recipe_recipe_service__ = __webpack_require__("./src/app/core/services/recipe/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__partials_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__recipes_italian_foods_italian_foods_component__["a" /* ItalianFoodsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__recipes_spanish_foods_spanish_foods_component__["a" /* SpanishFoodsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__core_services_blog_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_12__core_services_recipe_recipe_service__["a" /* RecipeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\r\n    text-align: center; \r\n    font-family: 'Merienda One', sans-serif;\r\n}\r\ndiv.polaroid {\r\n    border: 1px double; \r\n    background-color: #ffeecc;\r\n    margin: 15px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nimg{\r\n    width: 80%\r\n}"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\"> \r\n    <div *ngFor=\"let blog of blogs\" >\r\n      <div class=\"col-md-4\">\r\n        <div class=\"polaroid\">           \r\n            <h3>{{blog.Title}}</h3>\r\n            <p>{{blog.Description}}</p>\r\n            <img src=\"{{blog.ImgSrc}}\" alt=\"\" />    \r\n            <br>      \r\n            <br>\r\n            <p>Author: {{blog.Author}}</p>\r\n            <p>Blog ID: {{blog.Id}}</p>\r\n        </div>\r\n      </div>        \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_blog_blog_service__ = __webpack_require__("./src/app/core/services/blog/blog.service.ts");
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
    function BlogComponent(blogService) {
        this.blogService = blogService;
        this.blogs = blogService.takeAllBlogs();
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_blog_blog_service__["a" /* BlogService */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/core/services/blog/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = /** @class */ (function () {
    function BlogService() {
    }
    BlogService.prototype.takeAllBlogs = function () {
        var heroes = [
            {
                Id: 'bcfacd2f-4143-4717-8720-b00cd6e8e859',
                Title: 'There is a protein named after Pikachu',
                Description: 'Pikachurin is a protein found in humans that is used for transmitting electrical impulses from the human eyes to the brain.',
                Author: 'Ch. Zafirov',
                ImgSrc: './assets/images/Pikachu-Protein.jpg'
            },
            {
                Id: 'e4445009-3ca3-40af-aa97-abafc8727501',
                Title: 'Pikachu has an obsession with Ketchup',
                Description: 'Not only has it been shown in the animated series at various times, but there are entire threads in online message boards and whole memes dedicated to Pikachu and his love for ketchup.',
                Author: 'Ch. Zafirov',
                ImgSrc: './assets/images/Pikachu-Ketchup.jpg'
            },
            {
                Id: '6cd12f8e-9b8f-4c6a-9779-7b1de49d7a71',
                Title: 'Female Pikachu Have a Notch in Their Tails',
                Description: 'Since Pokemon Diamond and Pearl gender difference was released in the Pokemon series introducing different shapes on different species.',
                Author: 'Ch. Zafirov',
                ImgSrc: './assets/images/Female-Pikachu.jpg'
            },
        ];
        return heroes;
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/core/services/recipe/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeService = /** @class */ (function () {
    function RecipeService() {
    }
    RecipeService.prototype.takeAllItalians = function () {
        var recipies = [
            {
                Id: 'some-cool-id-b00cd6e8e859',
                Title: 'Caprese Salad with Pesto Sauce',
                Description: 'Juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce.',
                Author: 'Chef Joey Matthew',
                ImgSrc: 'https://i.ndtvimg.com/i/2017-09/caprese-salad_625x350_51506417724.jpg'
            },
            {
                Id: 'some-cool-id--abafc8727501',
                Title: 'Pasta Carbonara',
                Description: "The original recipe calls for guanciale, which is pig's cheek, but since its not easily available, the chef has used bacon instead.",
                Author: 'Chef Ritu Dalmia',
                ImgSrc: 'https://i.ndtvimg.com/i/2017-09/pasta-carbonara_600x300_41506417953.jpg'
            },
            {
                Id: 'some-cool-id-859',
                Title: 'Mushroom Risotto',
                Description: 'A plateful of buttery risotto with the goodness of mushrooms. Great to feed a hungry horde!',
                Author: 'Chef Divya Burman',
                ImgSrc: 'https://i.ndtvimg.com/i/2017-09/risotto_625x350_81506418041.jpg'
            },
            {
                Id: 'some-cool-id-8727501',
                Title: "Tiramisu - The 'pick-me-up' cake",
                Description: "The delightful tiramisu recipe with sponge fingers soaked in coffee, layered around and smeared with a creamy mascarpone mixture. The word 'tiramisu' in Italian means 'pick-me-up'. Owing to its caffeine kick it sure does!",
                Author: 'Chef Ritu Dalmia',
                ImgSrc: 'https://i.ndtvimg.com/i/2017-09/tiramisu-the-pick-me-up-cake_625x350_81506418133.jpg'
            }
        ];
        return recipies;
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "#footer-holder{\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n    background-color: #ffeecc;\r\n\ttext-align: center;\r\n\tfont: 1.4em/40px 'Merienda One';\r\n    color: #222;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer-holder\">\r\n        &copy; 2018 - Developed by Christo Zafirov\r\n</footer>\r\n<br>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".gal-container {\r\n\twidth: 100%;\r\n\tpadding: 20px 30px;\r\n\tposition: relative;\r\n}\r\n.h-ef {\r\n\tposition: relative;\r\n\twidth: 300px;\r\n\theight: 400px;\r\n\tborder: 3px solid #ffeecc;\r\n\tbackground-color: rgba(255,238,204, 0.3);\r\n}\r\n.h-ef img.background-ef {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-transition: -webkit-filter 0.2s;\r\n\ttransition: -webkit-filter 0.2s;\r\n\ttransition: filter 0.2s;\r\n\ttransition: filter 0.2s, -webkit-filter 0.2s;\r\n}\r\n.h-ef .line {\r\n\tposition: absolute;\r\n\twidth: 140px;\r\n\theight: 2px;\r\n\tbackground-color: #ffeecc;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\tmargin-top: -1.5px;\r\n\tmargin-left: -70px;\r\n\t-webkit-transform: scaleX(0);\r\n\t        transform: scaleX(0);\r\n\t-webkit-transition: -webkit-transform 0.2s;\r\n\ttransition: -webkit-transform 0.2s;\r\n\ttransition: transform 0.2s;\r\n\ttransition: transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n.h-ef .line:nth-of-type(2) {\r\n\t-webkit-transform: rotateZ(90deg) scaleX(0);\r\n\t        transform: rotateZ(90deg) scaleX(0);\r\n}\r\n.h-ef .imgContainer {\r\n\tposition: relative;\r\n\twidth: 50%;\r\n\theight: 50%;\r\n\tmargin: 19% auto 0;\r\n}\r\n.h-ef .imgContainer .imgBtn1,\r\n.h-ef .imgContainer .imgBtn2,\r\n.h-ef .imgContainer .imgBtn3,\r\n.h-ef .imgContainer .imgBtn4 {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tfont-size: 30px;\r\n\tcolor: #ffeecc;\r\n\tz-index: 2;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\tmargin: -20px 0 0 -20px;\r\n\topacity: 0;\r\n\tfilter: alpha(opacity=0);\r\n\t-webkit-transform: scale(0.8);\r\n\t        transform: scale(0.8);\r\n\t-webkit-transition: all 0.2s;\r\n\ttransition: all 0.2s;\r\n\t-webkit-transform-origin: center;\r\n\t        transform-origin: center;\r\n}\r\n.h-ef .imgContainer .imgBtn1 /* bookmark-o */ {\r\n\tmargin: -10px 0 0 25px;\r\n\twidth: 40px;\r\n\t-webkit-transform: translate3d(60px,-60px,0) scale(0.75);\r\n\t        transform: translate3d(60px,-60px,0) scale(0.75);\r\n}\r\n.h-ef .imgContainer .imgBtn2 /* shopping-cart */ {\r\n\tmargin: -10px 0 0 -55px;\r\n\t-webkit-transform: translate3d(-60px,-60px,0) scale(0.75);\r\n\t        transform: translate3d(-60px,-60px,0) scale(0.75);\r\n}\r\n.h-ef .imgContainer .imgBtn3 /* download */ {\r\n\tmargin: 65px 0 0 25px;\r\n\t-webkit-transform: translate3d(60px,60px,0) scale(0.75);\r\n\t        transform: translate3d(60px,60px,0) scale(0.75);\r\n}\r\n.h-ef .imgContainer .imgBtn4 /* share-alt */ {\r\n\tmargin: 65px 0 0 -55px;\r\n\theight: 40px;\r\n\t-webkit-transform: translate3d(-60px,60px,0) scale(0.75);\r\n\t        transform: translate3d(-60px,60px,0) scale(0.75);\r\n}\r\n.h-ef .imgContainer i {\r\n\tcursor: pointer;\r\n}\r\n.h-ef:hover .imgContainer .imgBtn1,\r\n.h-ef:hover .imgContainer .imgBtn2,\r\n.h-ef:hover .imgContainer .imgBtn3,\r\n.h-ef:hover .imgContainer .imgBtn4 {\r\n\t-webkit-transform: translate3d(0,0,0) scale(0.8);\r\n\t        transform: translate3d(0,0,0) scale(0.8);\r\n\topacity: 1;\r\n\tfilter: alpha(opacity=100);\r\n}\r\n.h-ef .imgContainer .imgBtn1:hover,\r\n.h-ef .imgContainer .imgBtn2:hover,\r\n.h-ef .imgContainer .imgBtn3:hover,\r\n.h-ef .imgContainer .imgBtn4:hover {\r\n\t-webkit-transform: scale(1);\r\n\t        transform: scale(1);\r\n}\r\n.h-ef:hover img.background-ef {\r\n\t-webkit-filter: brightness(0.7);\r\n\t        filter: brightness(0.7);\r\n}\r\n.h-ef:hover .line {\r\n\t-webkit-transform: scaleX(1);\r\n\t        transform: scaleX(1);\r\n}\r\n.h-ef:hover .line:nth-of-type(2) {\r\n\t-webkit-transform: rotateZ(90deg) scaleX(1);\r\n\t        transform: rotateZ(90deg) scaleX(1);\r\n}"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gal-container\">\r\n\t<div class=\"h-ef right\">\r\n\t\t<img class=\"background-ef\" src=\"./assets/images/Vaporeon.png\" \t/>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"imgContainer\">\r\n\t\t\t<i class=\"fa fa-bookmark-o imgBtn1\"></i>\r\n\t\t\t<i class=\"fa fa-shopping-cart imgBtn2\"></i>\r\n\t\t\t<i class=\"fa fa-download imgBtn3\"></i>\r\n\t\t\t<i class=\"fa fa-share-alt imgBtn4\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"h-ef right\" style=\"margin-right: 80px;\">\r\n\t\t<img class=\"background-ef\" src=\"./assets/images/Espeon.png\" \t/>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"imgContainer\">\r\n\t\t\t<i class=\"fa fa-bookmark-o imgBtn1\"></i>\r\n\t\t\t<i class=\"fa fa-shopping-cart imgBtn2\"></i>\r\n\t\t\t<i class=\"fa fa-download imgBtn3\"></i>\r\n\t\t\t<i class=\"fa fa-share-alt imgBtn4\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"h-ef left\">\r\n\t\t<img class=\"background-ef\" src=\"./assets/images/charmander.png\" \t/>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"imgContainer\">\r\n\t\t\t<i class=\"fa fa-bookmark-o imgBtn1\"></i>\r\n\t\t\t<i class=\"fa fa-shopping-cart imgBtn2\"></i>\r\n\t\t\t<i class=\"fa fa-download imgBtn3\"></i>\r\n\t\t\t<i class=\"fa fa-share-alt imgBtn4\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"clear\"></div>\r\n\t<br /><br /><br />\r\n\t<div class=\"h-ef right\">\r\n\t\t<img class=\"background-ef\" src=\"./assets/images/Leafeon.png\" \t/>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"imgContainer\">\r\n\t\t\t<i class=\"fa fa-bookmark-o imgBtn1\"></i>\r\n\t\t\t<i class=\"fa fa-shopping-cart imgBtn2\"></i>\r\n\t\t\t<i class=\"fa fa-download imgBtn3\"></i>\r\n\t\t\t<i class=\"fa fa-share-alt imgBtn4\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"h-ef right\" style=\"margin-right: 80px;\">\r\n\t\t<img class=\"background-ef\" src=\"./assets/images/Rowlet.png\" \t/>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"imgContainer\">\r\n\t\t\t<i class=\"fa fa-bookmark-o imgBtn1\"></i>\r\n\t\t\t<i class=\"fa fa-shopping-cart imgBtn2\"></i>\r\n\t\t\t<i class=\"fa fa-download imgBtn3\"></i>\r\n\t\t\t<i class=\"fa fa-share-alt imgBtn4\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"h-ef left\">\r\n\t\t<img class=\"background-ef\" src=\"./assets/images/squirtle.png\" \t/>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"line\"></div>\r\n\t\t<div class=\"imgContainer\">\r\n\t\t\t<i class=\"fa fa-bookmark-o imgBtn1\"></i>\r\n\t\t\t<i class=\"fa fa-shopping-cart imgBtn2\"></i>\r\n\t\t\t<i class=\"fa fa-download imgBtn3\"></i>\r\n\t\t\t<i class=\"fa fa-share-alt imgBtn4\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"clear\"></div>\r\n\t<br /><br /><br />\r\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = ".landing {\r\n\ttext-align: center;\r\n\tmargin-top: 10%;\r\n}"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"landing\">\r\n<img width=\"300\" src=\"./assets/images/eshop.png\" alt=\"\">\r\n<h3 style=\"font-family: 'Merienda One', sans-serif; color: #ffeecc;\">\r\n    The Best stuffed Pokemon e-shop!\r\n</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".alert {\r\n\theight: 30px;\r\n\tfont: 18px/15px 'Merienda One';\r\n}\r\n.firstInput {\r\n\tborder: 2px solid #ffeecc;\r\n\tmargin-bottom: 15px;\r\n}\r\n.secondInput{\r\n\tborder: 2px solid #ffeecc;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n\tcolor: #ffeecc;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START LOGIN CONTENT -->\r\n<section id=\"viewLogin\">\r\n    <h1  style=\"color: #ffeecc\">\r\n      <b>Login</b>\r\n    </h1>\r\n    <h4 style=\"color: #ffeecc\">\r\n      <b>Use a local account to log in</b>\r\n    </h4>\r\n    <br>\r\n    <br>\r\n    <!-- START FORM -->\r\n    <div class=\"login-form-1\"  >\r\n      <div id=\"login-form\" class=\"text-left\">\r\n        <div class=\"main-login-form\">\r\n          <form [formGroup]=\"reactiveForm\">\r\n            <!-- <div class=\"alert\" *ngIf=\"loginFail\">\r\n              {{loginAlert}}\r\n            </div> -->\r\n            <div class=\"form-container\">  \r\n              <!--Email-->\r\n              <div class=\"alert\" *ngIf=\"!reactiveForm.controls['email'].valid && reactiveForm.controls['email'].touched\">\r\n                {{formAlert}}\r\n            </div>\r\n            <div class=\"form-group firstInput\">\r\n              <input type=\"text\" placeholder=\"email\" formControlName=\"email\">\r\n            </div>\r\n              <!--Password-->\r\n              <div class=\"alert\" *ngIf=\"!reactiveForm.controls['password'].valid && reactiveForm.controls['password'].touched\">\r\n                  {{formAlert}}\r\n              </div>\r\n              <div class=\"form-group secondInput\">\r\n                <input type=\"password\"  placeholder=\"password\" formControlName=\"password\">\r\n              </div>\r\n  \r\n              <!-- <label for=\"validCheckbox\"> Min of 3 chars</label>\r\n              <input type=\"checkbox\" name=\"validCheckbox\" formControllName=\"validCheckbox\" value=\"1\">On -->\r\n  \r\n              <!--Button GO-->\r\n              <div class=\"form-group btnGo\">\r\n                <input type=\"submit\" class=\"login-button\" value=\"GO\" [disabled]=\"!reactiveForm.valid\"/>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END FORM -->\r\n      \r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    \r\n    <!-- <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading> -->\r\n  </section>\r\n  <!-- END LOGIN CONTENT -->\r\n    "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginEntry_model__ = __webpack_require__("./src/app/login/loginEntry.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.loginEntry = new __WEBPACK_IMPORTED_MODULE_2__loginEntry_model__["a" /* LoginEntry */]();
        this.formAlert = 'This field is required.';
        this.reactiveForm = formBuilder.group({
            'email': [
                null,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email])
            ],
            'password': [
                null,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
            ]
        });
    }
    LoginComponent.prototype.ngOninit = function () { };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/loginEntry.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginEntry; });
var LoginEntry = /** @class */ (function () {
    function LoginEntry(email, password) {
        this.email = email;
        this.password = password;
    }
    return LoginEntry;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: #eeeeee;\r\n}\r\n.form-inline {\r\n    display: inline-block;\r\n}\r\n.navbar-header.col {\r\n    padding: 0 !important;\r\n}\r\n.navbar {\t\t\r\n    font-family: 'Merienda One', sans-serif;\r\n    background: #fff;\r\n    padding-left: 16px;\r\n    padding-right: 16px;\r\n    border-bottom: 1px solid #d6d6d6;\r\n    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.1);\r\n            box-shadow: 0 0 4px rgba(0,0,0,.1);\r\n    background-color: #ffeecc;\r\n}\r\n.nav-link img {\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    height: 36px;\r\n    margin: -8px 0;\r\n    float: left;\r\n    margin-right: 10px;\r\n}\r\n.navbar .navbar-brand {\r\n    color: #555;\r\n    padding-left: 0;\r\n    padding-right: 50px;\r\n}\r\n.navbar .navbar-brand i {\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n}\r\n.search-box {\r\n    position: relative;\r\n}\r\n.search-box input {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    padding-right: 35px;\r\n    border-radius: 3px !important;\r\n}\r\n.search-box .input-group-addon {\r\n    min-width: 35px;\r\n    border: none;\r\n    background: transparent;\r\n    position: absolute;\r\n    right: 0;\r\n    z-index: 9;\r\n    padding: 7px;\r\n    height: 100%;\r\n}\r\n.search-box i {\r\n    color: #a0a5b1;\r\n    font-size: 19px;\r\n}\r\n.navbar .nav-item i {\r\n    font-size: 18px;\r\n}\r\n.navbar .dropdown-item i {\r\n    font-size: 16px;\r\n    min-width: 22px;\r\n}\r\n.navbar .nav-item.open > a {\r\n    background: none !important;\r\n}\r\n.navbar .dropdown-menu {\r\n    border-radius: 1px;\r\n    border-color: #e5e5e5;\r\n    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.05);\r\n            box-shadow: 0 2px 8px rgba(0,0,0,.05);\r\n}\r\n.navbar .dropdown-menu li a {\r\n    color: #777;\r\n    padding: 8px 20px;\r\n    line-height: normal;\r\n}\r\n.navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:active {\r\n    color: #333;\r\n}\r\n.navbar .dropdown-item .material-icons {\r\n    font-size: 21px;\r\n    line-height: 16px;\r\n    vertical-align: middle;\r\n    margin-top: -2px;\r\n}\r\n.navbar .badge {\r\n    background: #f44336;\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n    position: absolute;\r\n    min-width: 10px;\r\n    padding: 4px 6px 0;\r\n    min-height: 18px;\r\n    top: 5px;\r\n}\r\n.navbar ul.nav li a.notifications, .navbar ul.nav li a.messages {\r\n    position: relative;\r\n    margin-right: 10px;\r\n}\r\n.navbar ul.nav li a.messages {\r\n    margin-right: 20px;\r\n}\r\n.navbar a.notifications .badge {\r\n    margin-left: -8px;\r\n}\r\n.navbar a.messages .badge {\r\n    margin-left: -4px;\r\n}\r\n.navbar .active a, .navbar .active a:hover, .navbar .active a:focus {\r\n    background: transparent !important;\r\n}\r\n@media (min-width: 1200px){\r\n    .form-inline .input-group {\r\n        width: 300px;\r\n        margin-left: 30px;\r\n    }\r\n}\r\n@media (max-width: 1199px){\r\n    .form-inline {\r\n        display: block;\r\n        margin-bottom: 10px;\r\n    }\r\n    .input-group {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-xl navbar-light\">\r\n    <div class=\"navbar-header d-flex col\">\r\n      <a routerLink=\"/home\" class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-bolt\"></i>Pokemon E-Shop</a>  \t\t\r\n      <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle navbar-toggler ml-auto\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <!-- Collection of nav links, forms, and other content for toggling -->\r\n    <div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a routerLink=\"/home\" class=\"single-menu-element-link\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/about\" class=\"single-menu-element-link\">About</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a routerLink=\"/gallery\" class=\"single-menu-element-link\" href=\"#\">Stuffed toys <b class=\"caret\"></b></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/blog\" class=\"single-menu-element-link\">Blog</a>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"isLogged\" class=\"nav navbar-nav navbar-right ml-auto\">\r\n        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link notifications\"><i class=\"fa fa-bell-o\"></i><span class=\"badge\">1</span></a></li>\r\n        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link messages\"><i class=\"fa fa-envelope-o\"></i><span class=\"badge\">10</span></a></li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle user-action\">\r\n            <img src=\"./assets/images/skull.png\" class=\"avatar\" alt=\"Avatar\"> \r\n            Chief Skull Master <b class=\"caret\"></b>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-user-o\"></i> Profile</a></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-calendar-o\"></i> Calendar</a></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-sliders\"></i> Settings</a></li>\r\n            <li class=\"divider dropdown-divider\"></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"material-icons\">&#xE8AC;</i> Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"!isLogged\" class=\"nav navbar-nav navbar-right ml-auto\">\r\n        <li><a routerLink=\"/login\" class=\"single-menu-element-link\">Login</a></li>\r\n        <li><a routerLink=\"/register\" class=\"single-menu-element-link\">Register</a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.isLogged = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/partials/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/partials/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n  <img style=\"width: 600px;\" alt=\"404\" src=\"../assets/images/404.png\">\r\n</div>"

/***/ }),

/***/ "./src/app/partials/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/partials/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/partials/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/recipes/italian-foods/italian-foods.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\r\n    text-align: center; \r\n    font-family: 'Merienda One', sans-serif;\r\n}\r\ndiv.polaroid {\r\n    border: 1px double; \r\n    margin: 15px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nimg{\r\n    width: 80%\r\n}"

/***/ }),

/***/ "./src/app/recipes/italian-foods/italian-foods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> \r\n  <div *ngFor=\"let recipe of recipes\" >\r\n    <div class=\"col-xs-8\">\r\n      <div class=\"polaroid\">           \r\n          <h3>{{recipe.Title}}</h3>\r\n          <img src=\"{{recipe.ImgSrc}}\" alt=\"\" />    \r\n          <br>      \r\n          <br>\r\n      </div>\r\n    </div> \r\n    <div class=\"col-xs-4\">\r\n      <div class=\"polaroid\"> \r\n          <p>{{recipe.Description}}</p>\r\n          <br>      \r\n          <br>\r\n          <p>Author: {{recipe.Author}}</p>\r\n          <p>Recipe ID: {{recipe.Id}}</p>\r\n      </div>\r\n    </div>        \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/recipes/italian-foods/italian-foods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItalianFoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_recipe_recipe_service__ = __webpack_require__("./src/app/core/services/recipe/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItalianFoodsComponent = /** @class */ (function () {
    function ItalianFoodsComponent(recipeService) {
        this.recipeService = recipeService;
        this.recipes = recipeService.takeAllItalians();
    }
    ItalianFoodsComponent.prototype.ngOnInit = function () {
    };
    ItalianFoodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-italian-foods',
            template: __webpack_require__("./src/app/recipes/italian-foods/italian-foods.component.html"),
            styles: [__webpack_require__("./src/app/recipes/italian-foods/italian-foods.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_recipe_recipe_service__["a" /* RecipeService */]])
    ], ItalianFoodsComponent);
    return ItalianFoodsComponent;
}());



/***/ }),

/***/ "./src/app/recipes/spanish-foods/spanish-foods.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/spanish-foods/spanish-foods.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\r\n  <h3 style=\"font-family: 'Merienda One', sans-serif;\">\r\n    Should be visible if user is logged in!\r\n  </h3>\r\n</div>"

/***/ }),

/***/ "./src/app/recipes/spanish-foods/spanish-foods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpanishFoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpanishFoodsComponent = /** @class */ (function () {
    function SpanishFoodsComponent() {
    }
    SpanishFoodsComponent.prototype.ngOnInit = function () {
    };
    SpanishFoodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spanish-foods',
            template: __webpack_require__("./src/app/recipes/spanish-foods/spanish-foods.component.html"),
            styles: [__webpack_require__("./src/app/recipes/spanish-foods/spanish-foods.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpanishFoodsComponent);
    return SpanishFoodsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map