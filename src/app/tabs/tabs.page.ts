import { Component } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
      private userSrv: UsersService
  ) {

  }


}
