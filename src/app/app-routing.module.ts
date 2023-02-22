
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AssociatesComponent } from './associates/associates.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContentMarketingComponent } from './servicesPage/digital-marketing/content-marketing/content-marketing.component';
import { DigitalMarketingComponent } from './servicesPage/digital-marketing/digital-marketing.component';
import { EmailMarketingComponent } from './servicesPage/digital-marketing/email-marketing/email-marketing.component';
import { SeoOptimizationComponent } from './servicesPage/digital-marketing/seo-optimization/seo-optimization.component';
import { SocialMediaMarketingComponent } from './servicesPage/digital-marketing/social-media-marketing/social-media-marketing.component';
import { SocialMediaOptimizationComponent } from './servicesPage/digital-marketing/social-media-optimization/social-media-optimization.component';
import { AnimatedVideosComponent } from './servicesPage/graphics/animated-videos/animated-videos.component';
import { BrochureDesigningComponent } from './servicesPage/graphics/brochure-designing/brochure-designing.component';
import { GraphicsInfographicComponent } from './servicesPage/graphics/graphics-infographic/graphics-infographic.component';
import { GraphicsComponent } from './servicesPage/graphics/graphics.component';
import { IllustrationComponent } from './servicesPage/graphics/illustration/illustration.component';
import { LogoCorporateComponent } from './servicesPage/graphics/logo-corporate/logo-corporate.component';
import { PowerPointDesignComponent } from './servicesPage/graphics/power-point-design/power-point-design.component';
import { AndroidAppDevelopmentComponent } from './servicesPage/mobile-app/android-app-development/android-app-development.component';
import { AppStoreOptimizationComponent } from './servicesPage/mobile-app/app-store-optimization/app-store-optimization.component';
import { IosAppDevelopmenComponent } from './servicesPage/mobile-app/ios-app-developmen/ios-app-developmen.component';
import { MobileAppComponent } from './servicesPage/mobile-app/mobile-app.component';
import { MobileGameDevelopmentComponent } from './servicesPage/mobile-app/mobile-game-development/mobile-game-development.component';
import { ApiDevelopmentComponent } from './servicesPage/web-development/api-development/api-development.component';
import { ContentManagementComponent } from './servicesPage/web-development/content-management/content-management.component';
import { EcommerceWebsiteDevelopmenComponent } from './servicesPage/web-development/ecommerce-website-developmen/ecommerce-website-developmen.component';
import { LandingPageDesignComponent } from './servicesPage/web-development/landing-page-design/landing-page-design.component';
import { WebDevelopmentComponent } from './servicesPage/web-development/web-development.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'career', component: CareerComponent
  },
  {
    path: 'associates', component: AssociatesComponent
  },
  {
    path: 'blogs', component: BlogsComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'about-page', component: AboutPageComponent
  },
  {
    path: 'graphics', component: GraphicsComponent
  },
  {
    path: 'mobile-app', component: MobileAppComponent
  },
  {
    path: 'web-development', component: WebDevelopmentComponent
  },
  {
    path: 'digital-marketing', component: DigitalMarketingComponent
  },
  {
    path: 'brochure-designing', component: BrochureDesigningComponent
  },
  {
    path: 'logo-corporate', component: LogoCorporateComponent
  },
  {
    path: 'animated-videos', component: AnimatedVideosComponent
  },
  {
    path: 'graphics-infographic', component: GraphicsInfographicComponent
  },
  {
    path: 'illustration', component: IllustrationComponent
  },
  {
    path: 'power-point-design', component: PowerPointDesignComponent
  },
  {
    path: 'android-app-development', component: AndroidAppDevelopmentComponent
  },
  {
    path: 'app-store-optimization', component: AppStoreOptimizationComponent
  },
  {
    path: 'mobile-game-development', component: MobileGameDevelopmentComponent
  },
  {
    path: 'ios-app-development', component: IosAppDevelopmenComponent
  },
  {
    path: 'content-management', component: ContentManagementComponent
  },
  {
    path: 'ecommerce-website-development', component: EcommerceWebsiteDevelopmenComponent
  },
  {
    path: 'api-development', component: ApiDevelopmentComponent
  },
  {
    path: 'landing-page-design', component: LandingPageDesignComponent
  },
  {
    path: 'social-media-marketing', component: SocialMediaMarketingComponent
  },
  {
    path: 'social-media-optimization', component: SocialMediaOptimizationComponent
  },
  {
    path: 'email-marketing', component: EmailMarketingComponent
  },
  {
    path: 'content-marketing', component: ContentMarketingComponent
  },
  {
    path: 'best-seo-services-in-kolkata', component: SeoOptimizationComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
