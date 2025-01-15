import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-single-sign',
  templateUrl: './single-sign.component.html',
  styleUrls: ['./single-sign.component.scss']
})
export class SingleSignComponent implements OnInit {
  tata:any=[]
  gopdata:any=[]
  mainCardbackgroundImageUrl: string='';
  subCardbackgroundImageUrl:string='';
  headerColor:string='';
  gameLogo:string='';
  ThreeLevelTataUser:any=[
    {
      sr:1,
      Image:'https://coroebus.in/b2b-tgc/assets/GroupHead/GH-16812095889359.png?1110357208',
      role:'Team Leader',
      link:'https://coroebus.in/b2b-web/#/account/login?userid=TATAIA1_406'
     },
   {
     sr:2,
     Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-92726-RY20HW.png?1937957112',
     role:'MDRT',
     link:'https://coroebus.in/b2b-web/#/account/login?userid=TATAIA1_509'
    },
  
   {
    sr:3,
    Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-92729-LC0M1O.png?2006092213',
    role:'Advisor',
    link:'https://coroebus.in/b2b-web/#/account/login?userid=TATAIA1_512'

   }
  ]

  ImagePath: any;
  userId:any;
  value: any;
  constructor(public router:Router,public http:AuthServiceService, private route: ActivatedRoute) { 
    this.ImagePath = '/assets/senior-man-white-sweater-eyeglasses.jpg'
  }

  ngOnInit(): void {

    this.userId=localStorage.getItem('Userid')
    console.log(this.userId);
    this.route.queryParams.subscribe((params) => {
      this.value = params;
      console.log(this.value.item);
    if (this.value.item=='Cricket') {
      this.mainCardbackgroundImageUrl='url("https://coroebus.in/b2b-tgc/assets/ThemeBackground/TB-16570071993757.png?1889777568")';
      this.subCardbackgroundImageUrl='url("https://coroebus.in/b2b-tgc/assets/ThemeBackground/point_dist_backgropund_30.png?375438497")';
      this.headerColor='#004ec9';
      this.gameLogo='https://coroebus.in/b2b-tgc/assets/GameLogo/1697697656_ec8532f830de274c0d75.png';
      console.log( this.mainCardbackgroundImageUrl);
      document.title = 'Cricket';
      this.gopdata=[
        {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102553-G8UZE7.png?1855927115',
          role:'Board',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=TGC_C101'
         },
       {
         sr:1,
         Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102555-JDOMCN.png?1236188260',
         role:'Franchise',
         link:'https://coroebus.in/b2b-web/#/account/login?userid=TGC_C201'
        },
      
       {
        sr:1,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102556-4IHLR6.png?1813852087',
        role:'Coach',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=TGC_C301'
    
       },
       {
        sr:1,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102567-KA9GEM.png?1610735803',
        role:'Captain',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=TGC_C401'
    
       },
       {
        sr:1,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102589-ODPS7R.png?1147192834',
        role:'Player',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=TGC_C501'
       },

      ]
      
    } else if(this.value.item=='Tribe') {
      this.mainCardbackgroundImageUrl='url("https://coroebus.in/b2b-tgc/assets/ThemeBackground/TB-16790520298862.png?1188458101")'
      this.subCardbackgroundImageUrl='url("assets/trasparant.png")'
      this.headerColor='#342319';
      this.gameLogo='assets/gameOfPhones.png';
       document.title = 'Game Of Phones'
      this.gopdata=[
        {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/GroupHead/GH-16812095889359.png?1110357208',
          role:'Business Head',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=bh_gop'
         },
       {
         sr:1,
         Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-92726-RY20HW.png?1937957112',
         role:'Head of State',
         link:'https://coroebus.in/b2b-web/#/account/login?userid=GOP_IN101'
        },
      
       {
        sr:1,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-92729-LC0M1O.png?2006092213',
        role:'Tribe Chieftain',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=GOP_IN201'
    
       },
       {
        sr:1,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-92738-ZIADNP.png?311345833',
        role:'Clan Chief',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=GOP_IN308'
    
       },
       {
        sr:1,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-92751-TYPCLW.png?1191916546',
        role:'Squad Leader',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=GOP_IN408'
       },
     
       {
        sr:1,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-93569-KQJCRN.png?1577028176',
        role:'Citizen',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=GOP_IN502'
    
       },
      ]
    }
    else{
      // this.mainCardbackgroundImageUrl= 'url("assets/theme/WarTheme.png")'
      if(this.value.item=='War1'){
        this.mainCardbackgroundImageUrl='url("https://coroebus.in/b2b-tgc/assets/ThemeBackground/TB-16982194422847.png?672946567")'
        this.subCardbackgroundImageUrl='url("https://coroebus.in/b2b-tgc/assets/ThemeBackground/TB-16982194424605.png?1640719574")'
        this.headerColor='#1D4127';
        this.gameLogo='https://coroebus.in/b2b-tgc/assets/GameLogo/1698405510_765a26f55e5500905183.png';
        document.title = 'War'
        this.gopdata=[
          {
            sr:1,
            Image:'https://coroebus.in/b2b-tgc/assets/UserData/GH-1698931933736.png?484989943',
            role:'Business Head',
            link:'https://coroebus.in/b2b-web/#/account/login?userid=bh_bw'
           },
         {
           sr:1,
           Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102609-YD0RN2.png?1748125345',
           role:'Colonel',
           link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_101'
          },
        
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102611-NRVSQY.png?987692300',
          role:'Major',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_202'
      
         },
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102620-0YX3NS.png?643667248',
          role:'Captain',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_304'
      
         },
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102629-RNK8VH.png?984456485',
          role:'Lieutenant',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_409'
         },
       
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102652-LKSJYH.png?1965999753',
          role:'Squad',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=1290'
      
         },
        ]
      }
      else{
        this.mainCardbackgroundImageUrl='url("https://coroebus.in/b2b-tgc/assets/ThemeBackground/TB-16982194422847.png?672946567")'
        this.subCardbackgroundImageUrl='url("https://coroebus.in/b2b-tgc/assets/ThemeBackground/TB-16982194424605.png?1640719574")'
        this.headerColor='#1D4127';
        this.gameLogo='https://coroebus.in/b2b-tgc/assets/GameLogo/1698405510_765a26f55e5500905183.png';
        document.title = 'War'
        this.gopdata=[
          {
            sr:1,
            Image:'https://coroebus.in/b2b-tgc/assets/UserData/GH-1698931933736.png?484989943',
            role:'Business Head',
            link:'https://coroebus.in/b2b-web/#/account/login?userid=bh_bw'
           },
         {
           sr:1,
           Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102609-YD0RN2.png?1748125345',
           role:'Colonel',
           link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_101'
          },
        
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102611-NRVSQY.png?987692300',
          role:'Major',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_202'
      
         },
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102620-0YX3NS.png?643667248',
          role:'Captain',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_304'
      
         },
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102629-RNK8VH.png?984456485',
          role:'Lieutenant',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=BVM_409'
         },
       
         {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-102652-LKSJYH.png?1965999753',
          role:'Squad',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=1290'
      
         },
        ]
      }
     
      // img: 'assets/theme/warLogo.png' ,
    }

  })
    if(this.userId=='Tata_aia'){
      document.title = 'Insurance Tribe Masters'
      this.gopdata=[
        {
          sr:1,
          Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-99410-E28Y5W.png?1701157030',
          role:'Team Leader',
          link:'https://coroebus.in/b2b-web/#/account/login?userid=TATAIA1_404'
         },
       {
         sr:2,
         Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-99549-K1U2C3.png?936399627',
         role:'MDRT',
         link:'https://coroebus.in/b2b-web/#/account/login?userid=TATAIA1_514'
        },
        
       {
        sr:3,
        Image:'https://coroebus.in/b2b-tgc/assets/UserData/USR-99577-0QBV78.png?1075588713',
        role:'Advisor',
        link:'https://coroebus.in/b2b-web/#/account/login?userid=TATAIA1_776'
    
       }
      ]
    }
    else{
     
    }    
  }

  logout(){
    localStorage.removeItem("token");

    this.router.navigateByUrl('')
    let body={
      _userid:this.userId,
      _game:"na",
      _device:"W",
      _section:"Logout Single Sign On",
      _refid: "",        
      _description:":Logout Successful"
    }
    this.http.engagamentlog(body).subscribe(res=>{
      console.log(res);
      
    })
    localStorage.clear();
  }
}
