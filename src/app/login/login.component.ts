import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,private http:AuthServiceService) { 

    }
  userid:any='Tgc'
  password:any='Tgc@1234'

  loginForm: FormGroup|any;
  submitted = false;
  error = '';
  returnUrl: any;
  userid_bh:any
  id_org:any
  id_coroebus_organization_bh:any
  // set the currenr year
  year: number = new Date().getFullYear();
  showHidePwdInput: boolean = false
  isfirstLoginSecurityQuestionEWnable: boolean = false
  isTermsandConditionEnalbe: boolean = false
  async ngOnInit() {
    this.submit()
    var href = window.location.href;
    console.log(href)
    var url = new URL(href)
    console.log(url);

    document.body.classList.add('auth-body-bg')
    this.loginForm = this.formBuilder.group({
      userID: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
    var checkUserID= this.route.queryParams
    .subscribe(params => {

    }
  );
    
  

    // reset login status
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    console.log("return url",this.returnUrl)

    if (this.returnUrl) {
      this.returnUrl = undefined
      // window.location.reload()
    }
    console.log(this.returnUrl)
  }// convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      const password =this.loginForm.value.password
      const userId =this.loginForm.value.userID
      console.log(password);
      console.log(userId);
      if (password=='Tgc@1234' && userId=='Demo'
       || password=='Tgc@2023' && userId=='Demo_Gop@bata.com'
       || password=='Tgc@2023' && userId=='Tata_aia'
       || password=='Tgc@2023' && userId=='demo@ideahub.com'
       || password=='Tgc@2023' && userId=='demo@tvsmotors.com'
       || password=='Tgc@2023' && userId=='Demo_IciciLom'
       || password=='Tgc@2023' && userId=='demo_atishjain'
       || password=='Tgc@2023' && userId=='Rajib'
       || password=='Tgc@2023' && userId=='Echo'
       || password=='Tgc@2023' && userId=='Sonal'
       || password=='Tgc@2023' && userId=='Carl'
       || password=='Tgc@2023' && userId=='Shubh'
       || password=='Tgc@2024' && userId=='Demo1Point1'
       || password=='Tgc@2024' && userId=='David'
       || password=='Tgc@1234' && userId=='Gaurav'
       || password=='Tgc@1234' && userId=='gaurav' 
       || password=='Tgc@1234' && userId=='GAURAV'
       || password=='Tgc@2024' && userId=='Joel'

       ) 
       {
        localStorage.setItem('token','123')
        localStorage.setItem('Userid',userId)
        let body={
          _userid:userId,
          _game:"na",
          _device:"W",
          _section:"Login Single Sign On",
          _refid: "",        
          _description:"Login Successful"
        }
        this.http.engagamentlog(body).subscribe(res=>{
          console.log(res);
   
        })
        // this.router.navigateByUrl('/dashboard')
        if (userId=='Rajib'||userId=='Echo'||userId=='Sonal'||userId=='Carl' ||userId=='Shubh'||userId=='Demo'||userId=='Gaurav'||userId=='gaurav'||userId=='GAURAV'||userId=='Joel') {
          this.router.navigateByUrl('/theme')
        } else {
         const item='Tribe'
         this.router.navigate(['/dashboard'], {queryParams: {item}});
        }
      }
      else{
      alert('Please check the Credentials')
      }
      const body = { "USERID": userId, "PASSWORD": password }
     
    }
  }
  showHidePwd() {
    this.showHidePwdInput = !this.showHidePwdInput
  }
  firstLoginSecurityQuestion() {
    // if (password=='Tgc@1234' && userId=='Tgc'
    // || password=='123456' && userId=='Demo_Gop@bata.com'
    // || password=='Tata_aia@123' && userId=='Tata_aia'
    // || password=='123456' && userId=='demo@ideahub.com'
    // || password=='123456' && userId=='demo@tvsmotors.com'
    // || password=='123456' && userId=='Demo_IciciLom'
    // || password=='TGC@1234' && userId=='demo_atishjain'
    // )
  }
  
submit(){
  let body = {
    "CategoryId":10,
    "SubCategoryId":13,
    "QuestionId":18,
    "orgid":117,
    "userid":15111,
    "QuestionAnswerId":30,
    "Point":10,
    "IsCorrectAnswer":"0",
    "Attempt":1}

    this.http.submitUserLog(body).subscribe((res: any) => {
    console.log(res);

})
}


}