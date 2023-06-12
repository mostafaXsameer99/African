import { Component } from '@angular/core';

@Component({
  selector: 'app-designer-dashboard',
  templateUrl: './designer-dashboard.component.html',
  styleUrls: ['./designer-dashboard.component.scss']
})
export class DesignerDashboardComponent {
  currentTab = 1;
  category1:string[]= [
    "../../../assets/img/back.jpg",
    "../../../assets/img/cart.png",
    "../../../assets/img/front.webp",
    "../../../assets/img/back.jpg",
    "../../../assets/img/back.jpg",
    "../../../assets/img/back.jpg",
    "../../../assets/img/back.jpg",
    "../../../assets/img/back.jpg",
    "../../../assets/img/back.jpg",
    "../../../assets/img/back.jpg",
  ];
  category2:string[]= [
    "../../../assets/img/item2.jpg",
    "../../../assets/img/item1.jpg",
  ];
  category3:string[]= [
    "../../../assets/img/back.jpg",
  ];
  designs:any[]= [
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
  ]

  showTab(tabNumber: number) {
    this.currentTab = tabNumber;
  }

  downloadImage(imageUrl: string) {
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = imageUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
