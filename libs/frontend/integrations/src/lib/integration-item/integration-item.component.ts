import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Integration } from '@synergy-forge/shared/data-access';

@Component({
  selector: 'synergy-forge-integration-item',
  templateUrl: './integration-item.component.html',
  styleUrls: ['./integration-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationItemComponent {
  @Input()
  integration!: Integration;
}
