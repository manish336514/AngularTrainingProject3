//Module imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ActorlistComponent } from "./components/actorlist/actorlist.component";

//Service imports
import { ActordataService } from "./services/actordata.service";

// Component imports

@NgModule({
  declarations: [AppComponent, ActorlistComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ActordataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
