import { Routes } from '@angular/router';
import { BlogPostComponent } from './about/components/blog-post/blog-post.component';
import { PhotoComponent } from './about/components/photo/photo.component';
import { AboutPageComponent } from './about/pages/about-page/about-page.component';
import { AchievementsPageComponent } from './achievements-page/achievements-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { FaqComponent } from './faq/faq.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProjectPageComponent } from './projects/pages/project-page/project-page.component';
import { ProjectsPageComponent } from './projects/pages/projects-page/projects-page.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { TermsComponent } from './terms/terms.component';


export const appRoutes: Routes = [
    {path: '', component: HomePageComponent, pathMatch: 'full'},
    {path: 'resume', component: ResumeComponent, pathMatch: 'full'},
    {path: 'contact', component: ContactPageComponent, pathMatch: 'full'},
    {path: 'about', component: AboutPageComponent, pathMatch: 'full'},
    {path: 'about/blog', component: AboutPageComponent, pathMatch: 'full'},
    {path: 'about/blog/:blogId', component: BlogPostComponent, pathMatch: 'full'},
    {path: 'about/photos', component: AboutPageComponent, pathMatch: 'full'},
    // {path: 'about/photos/:id', component: PhotoComponent, pathMatch: 'full'},
    {path: 'about/videos', component: AboutPageComponent, pathMatch: 'full'},
    // {path: 'skills', component: SkillsPageComponent, pathMatch: 'full'},
    {path: 'projects', component: ProjectsPageComponent, pathMatch: 'full'},
    {path: 'projects/:projectId', component: ProjectPageComponent, pathMatch: 'full'},
    {path: 'achievements', component: AchievementsPageComponent, pathMatch: 'full'},
    // {path: 'terms-and-conditions', component: TermsComponent, pathMatch: 'full'},
    {path: 'privacy-policy', component: PrivacyPolicyComponent, pathMatch: 'full'},
    {path: 'disclaimer', component: DisclaimerComponent, pathMatch: 'full'},
    // {path: 'frequently-asked-questions', component: FaqComponent, pathMatch: 'full'},
    // {path: 'sitemap', component: FaqComponent, pathMatch: 'full'},
    {path: '404', component: PageNotFoundComponent, pathMatch: 'full'},
    {path: '**', redirectTo: '404'}
];
