import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <-- Import FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
