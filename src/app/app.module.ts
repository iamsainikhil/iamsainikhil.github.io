import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { NgwWowModule } from "ngx-wow";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { AboutComponent } from "./home/components/about/about.component";
import { AchievementsComponent } from "./home/components/achievements/achievements.component";
import { ContactComponent } from "./home/components/contact/contact.component";
import { HomeHeaderComponent } from "./home/components/home-header/home-header.component";
import { ProjectsComponent } from "./home/components/projects/projects.component";
import { SkillsComponent } from "./home/components/skills/skills.component";
import { HomePageComponent } from "./home/pages/home-page/home-page.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { ContentCardComponent } from "./projects/components/content-card/content-card.component";
import { ProjectPageComponent } from "./projects/pages/project-page/project-page.component";
import { ProjectsPageComponent } from "./projects/pages/projects-page/projects-page.component";
import { ResumeComponent } from "./resume/resume.component";
import { SafePipe } from "./safe.pipe";
import { AvatarComponent } from "./shared/components/avatar/avatar.component";
import { CommentFormComponent } from "./shared/components/comment-form/comment-form.component";
import { CommentsComponent } from "./shared/components/comments/comments.component";
import { DevicesComponent } from "./shared/components/devices/devices.component";
import { FilterComponent } from "./shared/components/filter/filter.component";
import { GistComponent } from "./shared/components/gist/gist.component";
import { LikesComponent } from "./shared/components/likes/likes.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { SiteFooterComponent } from "./shared/components/site-footer/site-footer.component";
import { SiteHeaderComponent } from "./shared/components/site-header/site-header.component";
import { SiteLoaderComponent } from "./shared/components/site-loader/site-loader.component";
import { SiteModalComponent } from "./shared/components/site-modal/site-modal.component";
import { DisableScrollDirective } from "./shared/directives/disable-scroll.directive";
import { ScrollableDirective } from "./shared/directives/scrollable.directive";
import { AboutService } from "./shared/services/about.service";
import { AchievementsService } from "./shared/services/achievements.service";
import { AvatarService } from "./shared/services/avatar.service";
import { CommonService } from "./shared/services/common.service";
import { ContactService } from "./shared/services/contact.service";
import { FilterService } from "./shared/services/filter.service";
import { GAService } from "./shared/services/ga.service";
import { LikesCommentsService } from "./shared/services/likes-comments.service";
import { ModalService } from "./shared/services/modal.service";
import { PaginationService } from "./shared/services/pagination.service";
import { ProjectsService } from "./shared/services/projects.service";
import { SkillsService } from "./shared/services/skills.service";
import { SliceStringPipe } from "./shared/pipes/slice-string.pipe";
import { UrlNameExtractPipe } from "./shared/pipes/url-name-extract.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    AchievementsComponent,
    HomePageComponent,
    ProjectsComponent,
    DevicesComponent,
    SiteLoaderComponent,
    ResumeComponent,
    ProjectPageComponent,
    ProjectsPageComponent,
    SiteHeaderComponent,
    ContentCardComponent,
    LikesComponent,
    CommentsComponent,
    AvatarComponent,
    CommentFormComponent,
    ContactPageComponent,
    HomeHeaderComponent,
    PageNotFoundComponent,
    ScrollableDirective,
    GistComponent,
    SafePipe,
    SiteModalComponent,
    DisableScrollDirective,
    PrivacyPolicyComponent,
    FilterComponent,
    SliceStringPipe,
    UrlNameExtractPipe,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFirestoreModule.enablePersistence(), // Just like that, you're offline enabled!
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPageScrollModule,
    NgwWowModule
  ],
  providers: [
    AboutService,
    SkillsService,
    ProjectsService,
    AchievementsService,
    ContactService,
    AvatarService,
    PaginationService,
    LikesCommentsService,
    CommonService,
    ModalService,
    GAService,
    FilterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
