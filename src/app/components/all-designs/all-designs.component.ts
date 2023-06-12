import { Component } from '@angular/core';

@Component({
  selector: 'app-all-designs',
  templateUrl: './all-designs.component.html',
  styleUrls: ['./all-designs.component.scss']
})
export class AllDesignsComponent {
  designs:any[]= [
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
    {img:"../../../assets/img/item2.jpg",title:"Item 1",buy:10,totalAmount:50},
  ]
}
