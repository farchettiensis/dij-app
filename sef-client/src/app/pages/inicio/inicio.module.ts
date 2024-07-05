import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        InicioRoutingModule,
        DividerModule,
        StyleClassModule,
        ButtonModule
    ],
    declarations: [InicioComponent],
})
export class InicioModule {}
