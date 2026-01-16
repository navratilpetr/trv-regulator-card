<template>
  <ha-card>
    <div id="root">
      <h1>${this.localize('title')}</h1>
      <ui-section>
        <p>${this.localize('description')}</p>
        <div class="graphs">
          <canvas id="myChart"></canvas>
        </div>
      </ui-section>
      <div class="actions">
        <button @click="this.performAction">${this.localize('action')}</button>
      </div>
    </div>
  </ha-card>
</template>

<script type="module">
  import { LitElement, html, css } from 'lit-element';
  import Chart from 'chart.js';

  class MyLovelaceCard extends LitElement {
    static get properties() {
      return {
        config: { type: Object },
        entities: { type: Array },
      };
    }

    constructor() {
      super();
      this.entities = [];
    }

    connectedCallback() {
      super.connectedCallback();
      this.loadEntities();
    }

    async loadEntities() {
      // Load automatic entity detection
      this.entities = await this.fetchEntities();
      this.renderChart();
    }

    renderChart() {
      const ctx = this.shadowRoot.getElementById('myChart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [{
            label: 'My Dataset',
            data: [65, 59, 80, 81],
            borderColor: '#42A5F5',
            fill: false,
          }],
        },
      });
    }

    performAction() {
      // Define your action
      console.log('Action performed!');
    }

    localize(key) {
      // Localize based on the user's language settings
      const translations = {
        en: { title: 'My Custom Card', description: 'This is a custom card.', action: 'Perform Action' },
        cs: { title: 'Můj vlastní kartu', description: 'Toto je vlastní karta.', action: 'Provést akci' }
      };
      const lang = navigator.language.startsWith('cs') ? 'cs' : 'en';
      return translations[lang][key];
    }

    static get styles() {
      return css`
        :host {
          display: block;
          background-color: var(--card-background, white);
        }
        .graphs {
          height: 400px;
        }
      `;
    }
  }

  customElements.define('my-custom-card', MyLovelaceCard);
</script>
