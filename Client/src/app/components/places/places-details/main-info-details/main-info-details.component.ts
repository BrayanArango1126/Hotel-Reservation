import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import HotelDetails from '../../../../interfaces/HotelDetails';
import { HotelesService } from '../../../../services/hoteles.service';

@Component({
  selector: 'app-main-info-details',
  templateUrl: './main-info-details.component.html',
  styleUrl: './main-info-details.component.css'
})
export class MainInfoDetailsComponent implements OnInit {

  idHotel: string | null = '';

  hotelDetails: HotelDetails[] = [];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.paramMap.get('idHotel');
    this.getHotelDetails();
  }


  async getHotelDetails() {
    try{
      const response = await HotelesService.getHotelDetail(Number(this.idHotel));
      this.hotelDetails = response.data;
    }catch(error){
      console.error(error);
    }
  }

}
