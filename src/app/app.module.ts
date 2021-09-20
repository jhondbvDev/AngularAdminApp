import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PlateComponent } from './plate/plate.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './_helpers/filter.pipe';
import { ListComponent } from './pages/plates/list/list.component';
import { EditComponent } from './pages/plates/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    PlateComponent,
    HomeComponent,
    FilterPipe,
    ListComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
