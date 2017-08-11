import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import {AppComponent} from './app.component';
import {AjaxComponent} from './ajax.component';
import {RootComponent} from '../root.component';


const appRoutes: Routes = [
    {path: 'ajax', component: AjaxComponent},
    {path: '', component: AppComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        AjaxComponent,
        RootComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    providers: [],
    bootstrap: [RootComponent]
})

export class AppModule {
}
