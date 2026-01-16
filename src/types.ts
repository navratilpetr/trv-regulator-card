import { LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';

export interface TRVRegulatorCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  show_graphs?: boolean;
  show_stats?: boolean;
  graph_cycles?: number;
  show_learning?: boolean;
  show_progress?: boolean;
  language?: 'cs' | 'en';
}

export type TRVState = 'idle' | 'heating' | 'cooldown' | 'vent' | 'error';
export type LearningState = 'learning' | 'learned';

export interface StateAttributes {
  current_temp: number;
  target_temp: number;
  heating_elapsed_seconds?: number;
  heating_remaining_seconds?: number;
  overshoot?: number;
}

export interface LearningAttributes {
  valid_cycles: number;
  required_cycles: number;
  avg_heating_duration?: number;
  time_offset?: number;
  avg_overshoot?: number;
}

export interface LastCycleAttributes {
  heating_duration: number;
  overshoot: number;
  valid: boolean;
  post_vent: boolean;
}

export interface HistoryCycle {
  timestamp: number;
  heating_duration: number;
  overshoot: number;
  valid: boolean;
}

export interface HistoryAttributes {
  cycles: HistoryCycle[];
}

export interface StatsAttributes {
  total_cycles: number;
  valid_cycles: number;
  success_rate: number;
  avg_heating_time: number;
  avg_overshoot: number;
}

export interface EntityData {
  state: StateAttributes;
  learning: LearningAttributes;
  lastCycle: LastCycleAttributes;
  history: HistoryAttributes;
  stats: StatsAttributes;
}

export interface HomeAssistant {
  callService(domain: string, service: string, data?: any): Promise<void>;
  states: {
    [entity_id: string]: {
      state: string;
      attributes: any;
      last_changed: string;
    };
  };
  language: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'trv-regulator-card': LovelaceCard;
  }
}