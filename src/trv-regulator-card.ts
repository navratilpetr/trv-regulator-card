import { LitElement, html } from 'lit';
import { styles } from './styles';
import { localize } from './localize';
import * as utils from './utils';
import type { TRVRegulatorCardConfig } from './types';

export class TrvRegulatorCard extends LitElement {
  static styles = styles;
  static properties = {
    config: { type: Object },
  };
  config: TRVRegulatorCardConfig = { type: '', entity: '' };

  constructor() {
    super();
    // inicializace zde
  }

  render() {
    return html`
      <ha-card>
        <div class="card">
          <h1>${localize('state.heating', this.config.language ?? 'cs')}</h1>
          <!-- tady můžeš dál rozšiřovat UI -->
        </div>
      </ha-card>
    `;
  }
}

customElements.define('trv-regulator-card', TrvRegulatorCard);
