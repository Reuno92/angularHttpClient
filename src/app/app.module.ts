import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainService } from './shared/service/main-service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      HttpClientJsonpModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
      MainService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
