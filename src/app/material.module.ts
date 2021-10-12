import { NgModule } from "@angular/core";
import {MatToolbarModule}  from '@angular/material/toolbar';
import {MatIconModule}  from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule } from '@angular/material/card';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

const myModules =[MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule

    
];

@NgModule({
imports:[...myModules],
exports:[...myModules],
})

export class MaterialModule{}