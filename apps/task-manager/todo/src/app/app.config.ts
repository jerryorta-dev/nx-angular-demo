import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_STATE_EFFECTS, ROOT_STATE_INITIALIZERS, ROOT_STATE_REDUCERS } from '@nx-angular-demo/shared-domain';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), provideAnimationsAsync(),

    // See libs/shared/domain/src/lib/state.ts
    provideStore(
      {
        ...ROOT_STATE_REDUCERS
      },
      {
        initialState: {
          ...ROOT_STATE_INITIALIZERS
        },
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true
        }
      }
    ),
    provideEffects([...ROOT_STATE_EFFECTS]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
      connectInZone: true
    }),
  ],
};
