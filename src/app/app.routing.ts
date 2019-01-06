import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopersComponent } from './topers/topers.component';    
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'about' , component: AboutUsComponent},
    {path: 'contact' , component: ContactUsComponent},
    {path: '10thtoppers' , component: TopersComponent},
    { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'attendance', component: AttendanceComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);