import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatCardModule,
         MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

//my components
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BreakfastService } from './table/services/breakfast.service';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [BreakfastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
