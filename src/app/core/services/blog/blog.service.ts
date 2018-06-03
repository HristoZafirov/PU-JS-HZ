import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BlogViewModel } from '../../models/blog-view-model.module';

@Injectable()
export class BlogService {

  constructor() { }

  takeAllBlogs() {
    const heroes: BlogViewModel[] = [
      {
        Id: 'bcfacd2f-4143-4717-8720-b00cd6e8e859',
        Title: 'There is a protein named after Pikachu',
        Description: 'Pikachurin is a protein found in humans that is used for transmitting electrical impulses from the human eyes to the brain.',
        Author: 'Ch. Zafirov',
        ImgSrc: './assets/images/Pikachu-Protein.jpg'
      },
      {
        Id: 'e4445009-3ca3-40af-aa97-abafc8727501',
        Title: 'Pikachu has an obsession with Ketchup',
        Description: 'Not only has it been shown in the animated series at various times, but there are entire threads in online message boards and whole memes dedicated to Pikachu and his love for ketchup.',
        Author: 'Ch. Zafirov',
        ImgSrc: './assets/images/Pikachu-Ketchup.jpg'
      },
      {
        Id: '6cd12f8e-9b8f-4c6a-9779-7b1de49d7a71',
        Title: 'Female Pikachu Have a Notch in Their Tails',
        Description: 'Since Pokemon Diamond and Pearl gender difference was released in the Pokemon series introducing different shapes on different species.',
        Author: 'Ch. Zafirov',
        ImgSrc: './assets/images/Female-Pikachu.jpg'
      },
    ];
    return heroes;
  }
}
