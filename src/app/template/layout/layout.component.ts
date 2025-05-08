import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {filter, map} from 'rxjs'
import { AuthgoogleService } from '../../../authgoogle.service';
import { LayoutProps } from './layoutProps';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
props: LayoutProps = {title:'',subTitle:''};
constructor(private router:Router, 
private activatedRoute:ActivatedRoute,
private loginService: AuthgoogleService
) {}
ngOnInit(): void {
  this.router.events.
  pipe
  (
    filter(() =>this.activatedRoute.firstChild !== null),
    map(() => this.getProps())
  ).subscribe((props: LayoutProps) => {
    this.props = props
  })
}

getProps(): LayoutProps{
  let childrenRoute = this.activatedRoute.firstChild
  while(childrenRoute?.firstChild){
    childrenRoute = childrenRoute.firstChild
  }
  return childrenRoute?.snapshot.data as LayoutProps

}
loggout(){
  this.loginService.logout()
}
}
