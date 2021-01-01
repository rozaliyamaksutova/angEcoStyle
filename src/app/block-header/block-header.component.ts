import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.component.scss']
})
export class BlockHeaderComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
