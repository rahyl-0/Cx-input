import { NgModule } from '@angular/core';
// import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxMaskDirective,
    // NgxMaskPipe,
    SharedModule,
  ],
  // providers: [provideNgxMask()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
