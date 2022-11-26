import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import {KnobModule} from 'primeng/knob';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [BadgeModule, KnobModule, ProgressSpinnerModule],
  exports: [BadgeModule, KnobModule, ProgressSpinnerModule],
})
export class PrimengModule {}
