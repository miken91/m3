export const Type = {
    PitchRecognition: 'PITCH_RECOGNITION',
    BaseballCard: 'BASEBALL_CARD',
    AdvancedStats: 'ADVANCED_STATS',
} as const;

export interface IComponent {
    type: String;
}