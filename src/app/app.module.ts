import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career/career.component';
import { AssociatesComponent } from './associates/associates.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GraphicsComponent } from './servicesPage/graphics/graphics.component';
import { MobileAppComponent } from './servicesPage/mobile-app/mobile-app.component';
import { WebDevelopmentComponent } from './servicesPage/web-development/web-development.component';
import { DigitalMarketingComponent } from './servicesPage/digital-marketing/digital-marketing.component';
import { BrochureDesigningComponent } from './servicesPage/graphics/brochure-designing/brochure-designing.component';
import { LogoCorporateComponent } from './servicesPage/graphics/logo-corporate/logo-corporate.component';
import { AnimatedVideosComponent } from './servicesPage/graphics/animated-videos/animated-videos.component';
import { GraphicsInfographicComponent } from './servicesPage/graphics/graphics-infographic/graphics-infographic.component';
import { IllustrationComponent } from './servicesPage/graphics/illustration/illustration.component';
import { PowerPointDesignComponent } from './servicesPage/graphics/power-point-design/power-point-design.component';
import { AndroidAppDevelopmentComponent } from './servicesPage/mobile-app/android-app-development/android-app-development.component';
import { AppStoreOptimizationComponent } from './servicesPage/mobile-app/app-store-optimization/app-store-optimization.component';
import { MobileGameDevelopmentComponent } from './servicesPage/mobile-app/mobile-game-development/mobile-game-development.component';
import { IosAppDevelopmenComponent } from './servicesPage/mobile-app/ios-app-developmen/ios-app-developmen.component';
import { ContentManagementComponent } from './servicesPage/web-development/content-management/content-management.component';
import { EcommerceWebsiteDevelopmenComponent } from './servicesPage/web-development/ecommerce-website-developmen/ecommerce-website-developmen.component';
import { ApiDevelopmentComponent } from './servicesPage/web-development/api-development/api-development.component';
import { LandingPageDesignComponent } from './servicesPage/web-development/landing-page-design/landing-page-design.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    CareerComponent,
    AssociatesComponent,
    BlogsComponent,
    ProjectsComponent,
    AboutPageComponent,
    GraphicsComponent,
    MobileAppComponent,
    WebDevelopmentComponent,
    DigitalMarketingComponent,
    BrochureDesigningComponent,
    LogoCorporateComponent,
    AnimatedVideosComponent,
    GraphicsInfographicComponent,
    IllustrationComponent,
    PowerPointDesignComponent,
    AndroidAppDevelopmentComponent,
    AppStoreOptimizationComponent,
    MobileGameDevelopmentComponent,
    IosAppDevelopmenComponent,
    ContentManagementComponent,
    EcommerceWebsiteDevelopmenComponent,
    ApiDevelopmentComponent,
    LandingPageDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [CarouselModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
