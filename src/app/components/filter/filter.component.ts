import { Component } from '@angular/core';
import { AllProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  models=["Shirt", "T-Shirts", "Trousers", "Knitwear"]
  colors=["Red", "White", "Black", "Yellow"]
  size=["XXS", "XS", "S", "M", "L"]
  selectedModel:any
  selectedColor:any
  selectedSize:any
  selectedPrice:any
  modelCollapsed = false;
  colorCollapsed = true;
  sizeCollapsed = true;
  PriceRangeCollapsed = true;


  constructor(private productSer:AllProductService){

  }

  togglemodelCollapsed() {
    this.modelCollapsed = !this.modelCollapsed;
  }
  togglecolorCollapsed () {
    this.colorCollapsed = !this.colorCollapsed;
  }
  togglesizeCollapsed () {
    this.sizeCollapsed = !this.sizeCollapsed;
  }
  togglePriceRangeCollapsed () {
    this.PriceRangeCollapsed = !this.PriceRangeCollapsed;
  }




onRadioModelChange(e:any){
  // console.log(e.target.value)
  // console.log(this.selectedPrice)

}

getProductsByFilter(){
  this.productSer.getProductsByFilter(this.selectedColor,this.selectedSize,this.selectedPrice,this.selectedModel).subscribe((res:any)=>{
    console.log(res.doc)
    this.productSer.productsArray=res.doc
  },error=>{
    this.productSer.productsArray=[]
        this.productSer.foundProduct=false
  })

}
}
