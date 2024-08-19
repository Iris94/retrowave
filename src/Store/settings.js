import { writable } from 'svelte/store';

export const takeADrive = writable(false);
export const radio = writable(true);
export const sound = writable(true);
export const voice = writable(true);
export const hud = writable(false);
export const laneAnimation = writable(false);
export const cityMode = writable(true);
export const driveMode = writable(false);
export const terminalMode = writable(true);
export const terminalDefault = writable(true);
export const emailSent = writable(false);
export const emailFailed = writable(false);
export const techStack = writable(false);
export const playIntroOnce = writable(false);
export const personaNeonPage = writable(true);

export const activeVoiceAudio = writable('');
export const activeVoiceText = writable('');
export const asyncDriverText = writable(false);
export const asyncHackText = writable(false);
export const asyncDefaultText = writable(false);

export const linkedin = writable('https://linkedin.com/in/iris94');
export const github = writable('https://github.com/Iris94');
export const instagram = writable('https://www.instagram.com/mirza.iris/')

export const radioStation = writable('https://stream.nightride.fm/nightride.mp3')