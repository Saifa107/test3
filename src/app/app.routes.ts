import { Routes } from '@angular/router';
import { MemberComponent } from './main/member/member.component';
import { PageComponent } from './main/page/page.component';
import { VersuComponent } from './main/versu/versu.component';

export const routes: Routes = [
    {path:'',component:PageComponent},
    {path:'member',component:MemberComponent},
    {path:'versu',component:VersuComponent}
];
