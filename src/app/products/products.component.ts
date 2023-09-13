import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
      p1src :string = "../../assets/imgaes/p1.jpeg"
      p2src :string = "../../assets/imgaes/p2.jpeg"
      p3src :string = "../../assets/imgaes/p3.jpeg"

      ptitle : string = 'SkinCare Products'

      p1title: string = 'Hand Cream';
      p2title: string = 'Facial Serum';
      p3title: string = 'Hand Oil';

      p1price = "50$"
      p2price = "60$"
      p3price = "40$"


}
