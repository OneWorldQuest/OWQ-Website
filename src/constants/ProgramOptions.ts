


export const AGE_GROUPS = {
    ALL: {value: 'all', label: 'All Ages'},
    SEVEN_TO_THIRTEEN: {value: '7-13', label: 'Ages 7-13'},
    ADULT: {value: 'adult', label: 'Adults'},
} as const

export type AgeGroup = typeof AGE_GROUPS[keyof typeof AGE_GROUPS]['value'];

export const SUBJECTS = {
    ALL: {value: 'all', label: 'All'},
    CODING: {value:'coding', label: 'Coding'},
    ROBOTICS: {value:'robotics', label: 'Robotics'},
    OTHER: {value:'other', label: 'Other'},
} as const;

export type Subject = typeof SUBJECTS[keyof typeof SUBJECTS]['value'];

export const LANGUAGES = {
    EN: {value: 'en', label: 'EN'},
    FR: {value: 'fr', label: 'FR'},
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES]['value'];