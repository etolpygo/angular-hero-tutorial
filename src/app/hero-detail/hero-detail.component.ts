import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from '../message.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  heroDetailChangeFn(newValue: any, param: any) {
    console.log(newValue, param);
    this.messageService.add(`HeroDetailComponent: Updated hero ${param} to ${newValue}`);
  }

  @Input() hero?: Hero;

}
