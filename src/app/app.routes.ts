import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoveButtonComponent } from './love-button/love-button.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'love-button',
		component: LoveButtonComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];
