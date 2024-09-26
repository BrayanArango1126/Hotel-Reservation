import { Component, OnInit } from '@angular/core';
import HotelDetails from '../../../../interfaces/HotelDetails';
import { ActivatedRoute } from '@angular/router';
import { HotelesService } from '../../../../services/hoteles.service';
import Servicios from '../../../../interfaces/servicios';
import { ServiciosService } from '../../../../services/services.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.css'
})
export class ServicesDetailsComponent implements OnInit {

  idHotel: string | null = '';

  hotelDetails: HotelDetails[] = [];

  listServices: Servicios[] = [];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.paramMap.get('idHotel');
    this.getHotelDetails();
    this.getServices();
  }


  async getHotelDetails() {
    try{
      const response = await HotelesService.getHotelDetail(Number(this.idHotel));
      this.hotelDetails = response.data;
    }catch(error){
      console.error(error);
    }
  }

  async getServices() {
    try{
      const response = await ServiciosService.getServiciosByIdHoteles(Number(this.idHotel));
      if(response.status === 200){
        this.listServices = response.data;
      }
    }catch(error){
      console.error(error);
    }
  }

}
