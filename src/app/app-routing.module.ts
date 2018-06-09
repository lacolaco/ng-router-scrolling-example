import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { FooComponent } from './page/foo/foo.component';
import { BarComponent } from './page/bar/bar.component';

const routes: Route[] = [
  {
    path: 'foo',
    component: FooComponent
  },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: '**',
    redirectTo: 'foo'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
