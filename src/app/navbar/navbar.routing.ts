import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
];

export const NavbarRoutes = RouterModule.forChild(routes);
