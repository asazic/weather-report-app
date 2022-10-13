import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ]
})
export class MaterialModule {}