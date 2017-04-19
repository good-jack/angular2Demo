import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { DoublePwdComponent } from './user/double-pwd/double-pwd.component';
import { UserTableComponent } from './user/user-table/user-table.component';





export const appRoutes = [
	{
		path: 'login',
		component: UserLoginComponent
	},
	{
		path: 'forgetpwd',
		component: ForgetPwdComponent
	},
	{
		path: 'doublePwd',
		component: DoublePwdComponent
	},
	{
		path: 'showTable',
		component: UserTableComponent
	},
	{
		path: 'usertable/page/:page',
		component: UserTableComponent
	},

];
