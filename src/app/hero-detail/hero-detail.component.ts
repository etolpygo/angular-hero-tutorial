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

  heroDetailChangeFn(event: any, param: any) {
    this.messageService.add(`HeroDetailComponent: Updated hero ${param} to ${event.target.value}`);
  }

  @Input() hero?: Hero;

}
