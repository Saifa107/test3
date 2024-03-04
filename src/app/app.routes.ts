import { Routes } from '@angular/router';
import { MemberComponent } from './main/member/member.component';
import { PageComponent } from './main/page/page.component';

export const routes: Routes = [
    {path:'',component:PageComponent},
    {path:'member',component:MemberComponent}
];
