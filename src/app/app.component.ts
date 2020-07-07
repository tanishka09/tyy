import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { comment} from './classes/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dummy';

 

 
  

public icon = 'fa fa-microphone';

toggleIcon() { 
      if(this.icon == 'fa fa-microphone'){
        this.icon = ' fa-microphone-slash';
      }else {
        this.icon='   fa-microphone'
      }
    
 }
 public vicon ='fa fa-video-camera ';

 public showFirst;

 

  constructor(private service: ApiService){
 }

 listComment : Component[];

 raw:any;

 ngOnInit(){
   this.service.getComment()
   .subscribe(
       data=>{
            //this.listComment = data;
            console.log(data);

            this.raw=data;

       }
   );


 }

}
