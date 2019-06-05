import { elements } from '../base';

export const getInput = () => document.querySelector(elements.fieldSearch).value;

export const clearInput = () => document.querySelector(elements.fieldSearch).value = '';