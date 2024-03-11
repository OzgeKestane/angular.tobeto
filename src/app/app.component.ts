import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';

//annotation, attribute, decorator
@Component({
  selector: 'app-root', //<approot> </approot>
  standalone: true, //sonradan bakılacak
  imports: [RouterOutlet,FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tobeto';
  count=0;
  inputValue:string='';

  onBtnClick(event:Event){
    //console.log("tıklandı");
    //console.log(event);
    console.log(this.inputValue);

    this.count++;

  }
  onChange(event:Event){
    let element=event.target as HTMLInputElement;
    console.log("input değeri değişti",element.value);
    this.inputValue=element.value;
  }
}
