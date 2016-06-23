"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./dashboard.component');
var chat_1_component_1 = require('./chat-1.component');
var chat_service_1 = require('./chat.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to True Chat';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n\t<h1>{{title}}</h1>\n\t<nav>\n\t<a [routerLink]=\"['Dashboard']\">Dashboard</a>\n\t<a [routerLink]=\"['Chat-1']\">Chat Room 1</a>\n    </nav>\n\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                chat_service_1.ChatService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/chat-1',
                name: 'Chat-1',
                component: chat_1_component_1.Chat1Component
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map