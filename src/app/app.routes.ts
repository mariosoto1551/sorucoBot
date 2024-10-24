import { Routes } from '@angular/router';
import { SorucoBotLayoutComponent } from './presentation/layouts/sorucoBotLayout/sorucoBotLayout.component';

export const routes: Routes = [
    {
        path: 'sorucoBot',
        component: SorucoBotLayoutComponent,
        children: [
          {path: 'no-dura-nada', loadComponent: ()=>import('./presentation/pages/sorucoBotPage/sorucoBotPage.component')},
          {path: '**', redirectTo: 'no-dura-nada'},
        ]
    },
    {
        path: '**',
        redirectTo: 'sorucoBot',
    }
];
