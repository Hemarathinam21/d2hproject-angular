import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { review } from '../review';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-reviewform',
  templateUrl: './reviewform.component.html',
  styleUrls: ['./reviewform.component.css']
})
export class ReviewformComponent implements OnInit {
  go(){
		this.route.navigate(['user/Review']); 
	}

  constructor(private reviewservice:ReviewService,private route:Router) { }
  public onAddReview(addForm: NgForm): void{
    this.go();
    this.reviewservice.addReview(addForm.value).subscribe(
      (response: review)=>{
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
