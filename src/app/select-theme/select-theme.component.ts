import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})
export class SelectThemeComponent implements OnInit {
  userId:any='';
  slides:any=[];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
  };


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem('Userid')
    console.log(this.userId);
    if(this.userId=='Tata_aia'){
      this.slides = [
        { 
          themename:'Tribe',
          img: 'assets/theme/tribeLogo.png' ,
          button:'Select'
        }
       
      ];
    }
    else{
     this.slides = [
        { 
          themename:'Cricket',
          img: 'assets/theme/cricketLogo.png',
          button:'Select'
         },
        { 
          themename:'Tribe',
          img: 'assets/theme/tribeLogo.png' ,
          button:'Select'
        },
        { 
          themename:'War',
          img: 'assets/theme/warLogo.png' ,
          button:'Select'
        }
      ];
    }
  }
  selectedTheme(item:any){
  console.log(item);

  this.router.navigate(['/dashboard'], {queryParams: {item}});
  }


}
