import { ModuleWithProviders }    from '@angular/core'
import { Routes, RouterModule }   from '@angular/router'

import { HeroesComponent }        from './heroes.component'
import { HeroDetailComponent }    from './hero-detail.component'
import { DashboardComponent }     from './dashboard.component'


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

// We call the forRoot method because we're providing a configured router at the root of the application.
// The forRoot method gives us the Router service providers and directives needed for routing.

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
