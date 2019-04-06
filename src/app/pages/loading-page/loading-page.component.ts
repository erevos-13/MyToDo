import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss'],
})
export class LoadingPageComponent implements OnInit {

  constructor(
      private translate: TranslateService,
      private router: Router
  ) { }

  ngOnInit() {

      this.onFinish();



  }

  onFinish() {
      this.router.navigate(['tabs'])
          .then(() => {
              console.log('pages');
          })
          .catch((err) => {
              console.log(err);
          });
  }

}
