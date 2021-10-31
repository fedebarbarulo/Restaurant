import { Component, OnInit } from '@angular/core';
import { ReservaService } from './reserva.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  public datitosdepilar: any;
  public datitosdesani: any;
  public sectorbarra: any;
  public sectorinterior: any;
  public sectorgaleria: any;
  public nombreapellido: any;
  public dni: any;
  public fecha: any;
  public datos: any=[];

  constructor(private reservaService: ReservaService, public alertController: AlertController) { }
  

  ngOnInit(){
        this.reservaService.getDatasedes().subscribe(data =>{
          console.log(data);
          this.datitosdesani=data[0];
          this.datitosdepilar=data[1];
        })
    this.reservaService.getDatasectores().subscribe(data =>{
            console.log(data);
            this.sectorbarra=data[0];
            this.sectorinterior=data[1];
            this.sectorgaleria=data[2];
          })
      }
    actualizar() {
      this.datos.push(this.nombreapellido);
      this.datos.push(this.dni);
      this.datos.push(this.fecha);
      this.reservaService.sendData(this.datos).subscribe(d=>{});
    }
    
    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'mialerta',
        header: '¡Listo!',
        message: 'Tu Reserva ha sido exitosa',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
      
