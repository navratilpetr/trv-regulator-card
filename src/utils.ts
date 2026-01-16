export function formatDuration(seconds: number, lang: 'cs' | 'en' = 'cs'): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  
  if (minutes > 0) {
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }
  
  return `${secs}${lang === 'cs' ? 's' : 's'}`;
}

export function formatTemperature(temp: number): string {
  return `${temp.toFixed(1)}°C`;
}

export function getEntityBaseName(entityId: string): string {
  // sensor.trv_regulator_kuchyn_state -> sensor.trv_regulator_kuchyn
  const match = entityId.match(/^(.+)_(state|learning|last_cycle|history|stats)$/);
  return match ? match[1] : entityId;
}

export function getStateColor(state: string): string {
  const colors = {
    heating: '#f44336',
    idle: '#4caf50',
    cooldown: '#2196f3',
    vent: '#ffc107',
    error: '#9e9e9e',
  };
  return colors[state] || '#9e9e9e';
}

export function getStateIcon(state: string): string {
  const icons = {
    heating: '🔴',
    idle: '🟢',
    cooldown: '🔵',
    vent: '🟡',
    error: '⚫',
  };
  return icons[state] || '⚫';
}