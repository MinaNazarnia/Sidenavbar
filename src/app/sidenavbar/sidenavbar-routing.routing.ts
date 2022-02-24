import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar.component';

export const sideNavRoutes: Routes = [
    {
        path: '',
        component: SidenavbarComponent,
        // children: [
        //   {
        //     path: 'users',
        //     loadChildren: () => import('./users/user.module').then(users => users.usersModule),
        //   },
        //   {
        //     path: 'authors',
        //     loadChildren: () => import('./authors/authors.module').then(authors => authors.authorsModule),
        //   },
        //   {
        //     path: 'addedBooks',
        //     loadChildren: () => import('./added-books/added-books.module').then(book => book.AddedBooksModule)
        //   },
        //   {
        //     path: 'genres',
        //     loadChildren: () => import('./genres/genres.module').then(ganres => ganres.genresModule),
        //   },
        //   {
        //     path: 'banners',
        //     loadChildren: () => import('./banners/banners.module').then(banner => banner.BannersModule),
        //   },
        //   {
        //     path: 'dashboard',
        //     loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule),
        //   },
        //   {
        //     path: 'book-reviews',
        //     loadChildren: () => import('./book-reviews/book-reviews.module').then(reviews => reviews.ReviewModule),
        //   },
        //   {
        //     path: 'migrations',
        //     loadChildren: () => import('./migrations/migration/migration.module').then(migration => migration.MigrationModule),
        //   },
        //   {
        //     path: 'migration-books',
        //     loadChildren: () => import('./migrations/all-books-migration/all-books-migration.module').then(books => books.AllBooksMigrationModule)
        //   },
        //   {
        //     path: 'publishers-list',
        //     loadChildren: () => import('./publishers-list/publishers-list.module').then(publish => publish.PublishersListModule),
        //   },
        //   {
        //     path: 'parser',
        //     loadChildren: () => import('./parser/parser.module').then(parser => parser.ParserModule),
        //   },
        //   {
        //     path: '',
        //     redirectTo: '/dashboard',
        //     pathMatch: 'full'
        //   },
        // ]
    },
]