import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'sef-inicio',
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss',
})
export class InicioComponent {
    constructor(public router: Router, public layoutService: LayoutService) {}
}
