import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlacesComponent } from './components/places/places.component';
import { PlacesDetailsComponent } from './components/places/places-details/places-details.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ConfirmationReservationComponent } from './components/confirmation-reservation/confirmation-reservation.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch:"full"},
  {path:'home',component:HomeComponent, pathMatch:"full"},
  {path:'login',component:LoginComponent, pathMatch:"full"},
  {path:'places',component:PlacesComponent, pathMatch:"full"},
  {path:'places/details',component:PlacesDetailsComponent, pathMatch:"full"},
  {path:'places/reservations',component:ReservationsComponent, pathMatch:"full"},
  {path:'places/confirmation-reservation',component:ConfirmationReservationComponent, pathMatch:"full"},
  {path:'rooms',component:RoomsComponent, pathMatch:"full"},
  // {path:'users',component:UsersComponent, pathMatch:"full"},
  {path:'users',loadChildren: () => import("./components/users/users.module").then(m => m.UsersModule)}, //esta logica e spara traer todas las  paginas
  //{path:'pages',loadChildren: () => import("./Components/layout/layout.module").then(m => m.LayoutModule)}, //esta logica e spara traer todas las  paginas
  // {path:'blaster',component:BlasterMainComponent, pathMatch:"full"},
  //{path:'blaster',loadChildren: () => import("./Components/blaster-main/blaster-main.module").then(m => m.BlasterMainModule)},
  {path:'**',redirectTo:'', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
