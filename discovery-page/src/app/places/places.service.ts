import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NYC',
      'https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg',
      149.99
    ),
    new Place(
      'p2',
      'city2',
      'idk',
      'https://cdn.pixabay.com/photo/2021/12/19/12/27/road-6881040_1280.jpg',
      143.99
    ),
    new Place(
      'p3',
      'city 3 Mansion',
      'In the heart of LA',
      'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
      12.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }

  constructor() {}
}
