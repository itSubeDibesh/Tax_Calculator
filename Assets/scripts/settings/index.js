import Database from '../database/index.js';
import {elements} from '../elements/index.js';
const {
    STORAGE_CALCULATOR_SETTINGS_SAVE,
    CALCULATOR_SETTINGS_TRIGGER,
    CALCULATOR_SETTINGS,

    STORAGE_PROFIT_MINIMUM,
    STORAGE_PROFIT_MAXIMUM,
    STORAGE_TAX_PERCENT,

} = elements;

let settings_show_click_count = 0;

export default class Calculator_Storage extends Database {
    constructor() {
        super(Database);
        this.initialize();
    }

    /**
     * Initializes the Storage Part
     */
    initialize() {
        this.trigger_Settings();
        if (this.database.length === 0)
            this.store_settings();
        this.trigger_store_settings;
    }

    /**
     * Trigger when calculator settings 
     */
    trigger_store_settings = STORAGE_CALCULATOR_SETTINGS_SAVE.addEventListener('click', (trigger) => {
        this.store_settings();
        this.showHide_Settings();
    });

    /**
     * Store Settings 
     */
    store_settings = () => {
        this.setItem('MINIMUM_PROFIT', STORAGE_PROFIT_MINIMUM.value)
        this.setItem('MAXIMUM_PROFIT', STORAGE_PROFIT_MAXIMUM.value)
        this.setItem('TAX_PERCENT', STORAGE_TAX_PERCENT.value)
    }

    /**
     * Triggers the Show hide on Calncel and trigger button
     */
    trigger_Settings = () => {
        CALCULATOR_SETTINGS_TRIGGER.addEventListener('click', this.showHide_Settings);
        STORAGE_CALCULATOR_SETTINGS_CANCEL.addEventListener('click', this.showHide_Settings);
    }

    /**
     * Shows and Hides the settings block 
     */
    showHide_Settings = () => {
        if (settings_show_click_count % 2 == 0) CALCULATOR_SETTINGS.classList.replace('d-none', 'd-block');
        else CALCULATOR_SETTINGS.classList.replace('d-block', 'd-none');
        settings_show_click_count++;
    }
}