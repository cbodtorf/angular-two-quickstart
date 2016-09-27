import { ModuleWithProviders }    from '@angular/core'
import { Routes, RouterModule }   from '@angular/router'

import { HeroesComponent }        from './heroes.component'
import { DashboardComponent }     from './dashboard.component'


const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

// We call the forRoot method because we're providing a configured router at the root of the application.
// The forRoot method gives us the Router service providers and directives needed for routing.

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
