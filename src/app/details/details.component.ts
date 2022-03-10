import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { plan } from '../plan';
import { PlansService } from '../service/plans.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  constructor(private plansservice: PlansService,private route:Router) { }
  go(){
		this.route.navigate(['user/notification']); 
	}
  public onAddPlans(addForm: NgForm): void{
    this.go();
    this.plansservice.addRecharge(addForm.value).subscribe(
      (response: plan)=>{
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }
  
  ngOnInit(): void {
  }
}
