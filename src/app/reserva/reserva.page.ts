import { Component, OnInit } from '@angular/core';
import { ReservaService } from './reserva.service';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  public datitosedepilar: any;
  constructor(private reservaService: ReservaService) { }

  ngOnInit(){
        this.reservaService.getDatasedes().subscribe(data =>{
          console.log(data);
          this.datitosedepilar=data;
        })
      }
  }
      
