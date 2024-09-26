import { Component, OnInit } from '@angular/core';
import HotelDetails from '../../../../interfaces/HotelDetails';
import { ActivatedRoute } from '@angular/router';
import { HotelesService } from '../../../../services/hoteles.service';

@Component({
  selector: 'app-description-details',
  templateUrl: './description-details.component.html',
  styleUrl: './description-details.component.css'
})
export class DescriptionDetailsComponent implements OnInit {

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
