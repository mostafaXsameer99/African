import { Component } from '@angular/core';
import { AllProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private productSer:AllProductService){

  }



  manProduct(){

  }

}
