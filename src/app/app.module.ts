import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { PageModule } from './page/page.module';



@NgModule({
    declarations: [
        AppComponent,

    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
    imports: [
        PageModule,
        FooterModule,
        NavbarModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ]
})
export class AppModule { }
