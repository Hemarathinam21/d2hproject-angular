import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { plan} from '../plan';
import { PlansService } from '../service/plans.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
 public plandetails: plan[] = [];
 plansupdate:any={
  rechargeId:"",
  rechargeType: "",
  name: "",
  mobile:"",
  email:"",
  rechargePlan:"",
  rechargePrice:""
 }
 

  constructor(private plansservice: PlansService) { }

  public getRecharge():void{
    this.plansservice.getRecharge().subscribe(
      (response: plan[]) => {
       this.plandetails=response;
      },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public getRechargeByName(key: string):void{
    const result:plan[]=[];
    for(const pl of this.plandetails){
      if(pl.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      pl.email.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      pl.mobile.toLowerCase().indexOf(key.toLowerCase())!== -1){
        result.push(pl);
      }
    }
    this.plandetails=result;
    if(result.length==0 || !key){
      this.getRecharge();
    }
  }

  displayStyle="none";
  openPopup(Addon:any) {
    this.displayStyle = "block";
    this.plansupdate=Addon;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.plansservice.update(this.plansupdate).subscribe(data=>
      {
        console.log(data);
        
      })
  }
  delete(Addon:any)
  {
    this.plansservice.deleteByid(Addon.rechargeId).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.getRecharge();
      })
  }

  ngOnInit(): void {
    this.getRecharge();
  }

}
