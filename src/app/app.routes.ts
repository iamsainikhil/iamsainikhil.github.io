import { Routes } from "@angular/router";
import { HomePageComponent } from "./home/pages/home-page/home-page.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { ProjectPageComponent } from "./projects/pages/project-page/project-page.component";
import { ProjectsPageComponent } from "./projects/pages/projects-page/projects-page.component";
import { ResumeComponent } from "./resume/resume.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent, pathMatch: "full" },
  { path: "resume", component: ResumeComponent, pathMatch: "full" },
  { path: "contact", component: ContactPageComponent, pathMatch: "full" },
  { path: "projects", component: ProjectsPageComponent, pathMatch: "full" },
  {
    path: "projects/:projectId",
    component: ProjectPageComponent,
    pathMatch: "full",
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent,
    pathMatch: "full",
  },
  { path: "404", component: PageNotFoundComponent, pathMatch: "full" },
  { path: "**", redirectTo: "404" },
];
