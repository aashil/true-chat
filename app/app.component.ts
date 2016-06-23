import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';
import { Chat1Component } from './chat-1.component';
import { ChatService } from './chat.service';

@Component({
  selector: 'my-app',
  template: ` 
	<h1>{{title}}</h1>
	<nav>
	<a [routerLink]="['Dashboard']">Dashboard</a>
	<a [routerLink]="['Chat-1']">Chat Room 1</a>
    </nav>
	<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
    ROUTER_PROVIDERS,
	ChatService
  ]
})

@RouteConfig([

  {
	path: '/dashboard',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
  },
  {
    path: '/chat-1',
    name: 'Chat-1',
    component: Chat1Component
  }
  
])
export class AppComponent {
  title = 'Welcome to True Chat';
}
