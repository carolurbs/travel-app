import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../../authgoogle.service';
@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile: Profile |undefined
  constructor(
    private router: Router,
    private loginService: AuthgoogleService
  ) {

  }
  navigate(){
    this.router.navigate(['/pages/gallery']);
  }
  loginWithGoogle() {
    this.loginService.login()

  }
  isLoggedIn(): boolean {
    const googleData =this.loginService.getLoggedProfile();
    this.profile = googleData
    return !! this.profile;
  }
  
}
