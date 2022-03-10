import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { review } from '../review';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviewdetails: review[] = [];
  reviewsupdate:any={
    reviewId:"",
    name:"",
    feedback:"",
    rating:""

   }
  constructor(private reviewservice:ReviewService) { }

  public getReview():void{
    this.reviewservice.getReview().subscribe(
      (response: review[]) => {
       this.reviewdetails=response;
      },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  displayStyle="none";
  openPopup(Addon:any) {
    this.displayStyle = "block";
    this.reviewsupdate=Addon;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.reviewservice.updateReview(this.reviewsupdate).subscribe(data=>
      {
        console.log(data);
      })
  }

  delete(Addon:any)
  {
    this.reviewservice.deleteByid(Addon.reviewId).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.getReview();
      })
  }

  ngOnInit(): void {
    this.getReview();
  }

}
