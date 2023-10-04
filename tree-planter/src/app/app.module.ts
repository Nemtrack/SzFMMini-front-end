import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeComponent } from './tree/tree.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'trees', component: TreeComponent }];

@NgModule({
  declarations: [AppComponent, TreeComponent, WelcomeScreenComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
