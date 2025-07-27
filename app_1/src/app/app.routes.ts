import { Routes } from '@angular/router';
import {Blog} from './blog/blog';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';  
import { NotFound } from './not-found/not-found'; // Import the NotFound component
import { Details } from './contact/details/details';
import { Mobile } from './contact/mobile/mobile';
import { PostsView } from './posts-view/posts-view';
import { Login } from './login/login';
import { Register } from './register/register';
import { ProductDetils } from './product-detils/product-detils';
import { authGuard } from './gaurd/auth-guard';
//configure routes
export const routes: Routes = [
    //define the path and component to be rendered
    //pathMatch 'full' means the whole URL should match
    //when the path is empty, the App component will be rendered but it should be the first route 
    {path:'auth', loadChildren: () => import('./auth/auth/auth-module').then(m => m.AuthModule)}, // Lazy loading the AuthModule
    {path: '', component:Home,title:'Home'},
    {path:"blog", component: Blog, title:'Blog'},
    {path:"contact",
        children: [
            {path: '', redirectTo: 'details', pathMatch: 'full' }, // Redirect to Details by default
            {path: 'details', component: Details, title: 'Details' } ,// Nested route for About under Contact,
            {path: 'mobile', component: Mobile, title: 'Mobile' } // Nested route for Mobile under Contact
        ]
    },
    {path:"about", component:About, title:'About'},
    {path:'posts', component:PostsView, title:'Posts'}, // Assuming you have a PostsComponent to display posts
   
    {path:"product-details/:id", canActivate:[authGuard],component:ProductDetils , title:'Details'}, // Assuming you have a LoginComponent for login functionality
    //should be the last route
    //if no other route matches, the NotFound component will be rendered
    {path: '**', component: NotFound,title:'Oopps'} //wildcard route to redirect to home for any unknown paths

];
