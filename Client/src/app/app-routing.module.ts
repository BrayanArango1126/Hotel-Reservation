import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlacesComponent } from './components/places/places.component';
import { PlacesDetailsComponent } from './components/places/places-details/places-details.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ConfirmationReservationComponent } from './components/confirmation-reservation/confirmation-reservation.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsDetailsComponent } from './components/rooms/rooms-details/rooms-details.component';
import { RegisterComponent } from './components/register/register.component';
import { loginGuard } from './guards/login.guard';
import { ReservationRoomComponent } from './components/reservations/reservation-room/reservation-room.component';

const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch:"full"},
  {path:'home',component:HomeComponent, pathMatch:"full"},
  {path:'login',component:LoginComponent, pathMatch:"full"},
  {path:'register', component:RegisterComponent, pathMatch:"full"},
  {path:'places',component:PlacesComponent, pathMatch:"full"},
  {path:'places/details',component:PlacesDetailsComponent, pathMatch:"full"},
  {path:'places/reservations',component:ReservationsComponent, pathMatch:"full", canActivate:[loginGuard]},
  {path:'places/confirmation-reservation',component:ConfirmationReservationComponent, pathMatch:"full"},
  {path:'rooms',component:RoomsComponent, pathMatch:"full"},
  {path:'rooms/details/:idHabitacion',component:RoomsDetailsComponent, pathMatch:"full"},
  {path:'rooms/reservations/:idHabitacion',component:ReservationRoomComponent, pathMatch:"full", canActivate:[loginGuard]},
  {path:'users',loadChildren: () => import("./components/users/users.module").then(m => m.UsersModule)}, //esta logica e spara traer todas las  paginas
  {path:'**',redirectTo:'', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
