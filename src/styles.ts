import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    padding: 16px;
  }

  .card {
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(
      --ha-card-box-shadow,
      0 2px 8px rgba(0, 0, 0, 0.1)
    );
    padding: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .header-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .status-badge {
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .status-badge.heating {
    background: rgba(244, 67, 54, 0.1);
    color: #f44336;
  }

  .status-badge.idle {
    background: rgba(76, 175, 80, 0.1);
    color: #4caf50;
  }

  .status-badge.cooldown {
    background: rgba(33, 150, 243, 0.1);
    color: #2196f3;
  }

  .status-badge.vent {
    background: rgba(255, 193, 7, 0.1);
    color: #ffc107;
  }

  .status-badge.error {
    background: rgba(158, 158, 158, 0.1);
    color: #9e9e9e;
  }

  .temperatures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .temp-box {
    text-align: center;
    padding: 12px;
    background: var(--secondary-background-color);
    border-radius: 8px;
  }

  .temp-label {
    font-size: 0.875rem;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .temp-value {
    font-size: 2rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .overshoot {
    text-align: center;
    margin-top: 8px;
    font-size: 0.875rem;
    color: var(--secondary-text-color);
  }

  .progress-section {
    margin-bottom: 16px;
  }

  .progress-bar {
    height: 8px;
    background: var(--secondary-background-color);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #8bc34a);
    transition: width 0.3s ease;
  }

  .progress-time {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: var(--secondary-text-color);
  }

  .learning-section {
    background: var(--secondary-background-color);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 16px;
  }

  .learning-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .learning-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .learning-status {
    font-size: 0.875rem;
    padding: 4px 8px;
    border-radius: 12px;
    background: rgba(76, 175, 80, 0.1);
    color: #4caf50;
  }

  .learning-status.learning {
    background: rgba(255, 152, 0, 0.1);
    color: #ff9800;
  }

  .learning-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    font-size: 0.875rem;
  }

  .learning-item {
    color: var(--secondary-text-color);
  }

  .learning-item strong {
    color: var(--primary-text-color);
  }

  .charts-section {
    margin-bottom: 16px;
  }

  .chart-container {
    margin-bottom: 16px;
    background: var(--secondary-background-color);
    border-radius: 8px;
    padding: 12px;
  }

  .chart-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 12px;
  }

  .chart-canvas {
    max-height: 200px;
  }

  .stats-section {
    background: var(--secondary-background-color);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 16px;
  }

  .stats-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 12px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .stat-item {
    font-size: 0.875rem;
  }

  .stat-label {
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .stat-value {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .actions {
    display: flex;
    justify-content: center;
  }

  .reset-button {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .reset-button:hover {
    background: var(--primary-color-dark, var(--primary-color));
    opacity: 0.9;
  }

  .reset-button:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    .temperatures {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
`;
