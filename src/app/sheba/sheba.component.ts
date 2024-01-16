import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-sheba',
  standalone: true,
  imports: [NzInputModule,NzButtonModule,NzCardModule],
  templateUrl: './sheba.component.html',
  styleUrl: './sheba.component.scss'
})
export class ShebaComponent {
  value?: number;

  

}
