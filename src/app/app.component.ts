import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  implements OnInit{

  getImageUrl(imageId) {
    return `https://picsum.photos/100?image=${imageId}`;
  }

  ngOnInit() {
    console.log('Hi');
  }
}
