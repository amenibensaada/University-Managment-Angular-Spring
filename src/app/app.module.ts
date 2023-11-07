import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { BlocComponent } from './app/features/bloc/bloc.component';
import { BlocComponentComponent } from './features/Bloc/bloc-component/bloc-component.component';
import { ChambreComponentComponent } from './features/Chambre/chambre-component/chambre-component.component';
import { EtudiantComponentComponent } from './features/Etudiant/etudiant-component/etudiant-component.component';
import { FoyerComponentComponent } from './features/Foyer/foyer-component/foyer-component.component';
import { ReservationComponentComponent } from './features/Reservation/reservation-component/reservation-component.component';
import { UniversiteComponentComponent } from './features/Universite/universite-component/universite-component.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        BlocComponent,
        BlocComponentComponent,
        ChambreComponentComponent,
        EtudiantComponentComponent,
        FoyerComponentComponent,
        ReservationComponentComponent,
        UniversiteComponentComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
