import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/sections/navbar/navbar.component';
import { MainsectionComponent } from './components/sections/mainsection/mainsection.component';
import { SliderComponent } from './components/sections/slider/slider.component';
import { PlacesSectionComponent } from './components/sections/places-section/places-section.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { OptionsSectionComponent } from './components/sections/options-section/options-section.component';
import { EventsSectionComponent } from './components/sections/events-section/events-section.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { PlacesComponent } from './components/places/places.component';
import { LoginComponent } from './components/login/login.component';
import { HotelsComponent } from './components/places/places-sections/hotels/hotels.component';
import { FiltersComponent } from './components/places/places-sections/filters/filters.component';
import { PlacesDetailsComponent } from './components/places/places-details/places-details.component';
import { MainInfoDetailsComponent } from './components/places/places-details/main-info-details/main-info-details.component';
import { CardReserveComponent } from './components/places/places-details/card-reserve/card-reserve.component';
import { DescriptionDetailsComponent } from './components/places/places-details/description-details/description-details.component';
import { ServicesDetailsComponent } from './components/places/places-details/services-details/services-details.component';
import { PlacesReviewsComponent } from './components/places/places-details/places-reviews/places-reviews.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { CardReservationsComponent } from './components/reservations/reservations-sections/card-reservations/card-reservations.component';
import { FormReservationsComponent } from './components/reservations/reservations-sections/form-reservations/form-reservations.component';
import { ConfirmationReservationComponent } from './components/confirmation-reservation/confirmation-reservation.component';
import { CardConfirmationReservationComponent } from './components/confirmation-reservation/card-confirmation-reservation/card-confirmation-reservation.component';
import { SidenavUserComponent } from './components/users/sidenav-user/sidenav-user.component';
import { SharedModule } from './Reutilizable/shared/shared.module';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ListRoomsComponent } from './components/rooms/room-section/list-rooms/list-rooms.component';
import { FilterRoomsComponent } from './components/rooms/room-section/filter-rooms/filter-rooms.component';
import { RoomsDetailsComponent } from './components/rooms/rooms-details/rooms-details.component';
import { MainSectionDetailsComponent } from './components/rooms/rooms-details/room-details-sections/main-section-details/main-section-details.component';
import { CardReserveRoomsComponent } from './components/rooms/rooms-details/room-details-sections/card-reserve-rooms/card-reserve-rooms.component';
import { ServicesDetailsRoomsComponent } from './components/rooms/rooms-details/room-details-sections/services-details-rooms/services-details-rooms.component';
import { RoomsReviewsComponent } from './components/rooms/rooms-details/room-details-sections/rooms-reviews/rooms-reviews.component';
import { DescriptionDetailsRoomComponent } from './components/rooms/rooms-details/room-details-sections/description-details-room/description-details-room.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationRoomComponent } from './components/reservations/reservation-room/reservation-room.component';
import { ReservationRoomCardComponent } from './components/reservations/reservation-room/reservation-room-card/reservation-room-card.component';
import { ReservationRoomCreditComponent } from './components/reservations/reservation-room/reservation-room-credit/reservation-room-credit.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    MainsectionComponent,
    SliderComponent,
    PlacesSectionComponent,
    OptionsSectionComponent,
    EventsSectionComponent,
    FooterComponent,
    PlacesComponent,
    UsersComponent,
    LoginComponent,
    HotelsComponent,
    FiltersComponent,
    PlacesDetailsComponent,
    MainInfoDetailsComponent,
    CardReserveComponent,
    DescriptionDetailsComponent,
    ServicesDetailsComponent,
    PlacesReviewsComponent,
    ReservationsComponent,
    CardReservationsComponent,
    FormReservationsComponent,
    ConfirmationReservationComponent,
    CardConfirmationReservationComponent,
    SidenavUserComponent,
    RoomsComponent,
    ListRoomsComponent,
    FilterRoomsComponent,
    RoomsDetailsComponent,
    RoomsDetailsComponent,
    MainSectionDetailsComponent,
    CardReserveRoomsComponent,
    ServicesDetailsRoomsComponent,
    RoomsReviewsComponent,
    DescriptionDetailsRoomComponent,
    RegisterComponent,
    ReservationRoomComponent,
    ReservationRoomCardComponent,
    ReservationRoomCreditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
