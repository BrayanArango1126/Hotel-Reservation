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
